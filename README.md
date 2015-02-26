
## Introduction
This is a NodeJS tool to consume a WSDL file and output a neat, manageable Javascript library. It is not 100% complete, but it gives us full coverage of the services we need at Holiday Extras. If it doesn't do everything you need, fork us and contribute back to the community :)

## Where do I find it?
Either get it from npm:
```
sudo npm install -g wsdl2.js
```
Or checkout the repo:
```
git clone https://github.com/holidayextras/wsdl2.js.git
cd wsdl2.js
npm install
```

## How do I use it?
This will generate a folder called [serviceName] in the current directory ready to be require'd and used:
```
wsdl2.js [serviceName] [/local/path/to/wsdl]
```

## SOAP 1.1
It's assumed by default you're working with a SOAP 1.2 service expecting an `application/soap+xml; charset=utf-8` content-type; you can pass in an option to get the `text/xml; charset=utf-8` that a SOAP 1.1 service will be expecting:

```
wsdl2.js [serviceName] [/local/path/to/wsdl] --soap-version 1.1
```

If the service responds with something like "The server cannot service the request because the media type is unsupported.", you are probably targeting the wrong SOAP version.

## Send empty tags
By default any empty tags will be stripped out of the request as they are probably not needed. Some services may require you to send these even if they are empty. You can change this behaviour by passing in the following option:

```
wsdl2.js [serviceName] [/local/path/to/wsdl] --keep-empty-tags
```

## Requirements for using the generated code
Note: these modules are installed by npm-installing wsdl2.js
```
npm install request xml2json
```

## Generated code structure
```
./[ServiceName]/
|   // This holds one file per defined Element within the WSDL
├── Element
│   ├── SomeDefinedElement.js
|   └── ...
|   // This is the main file which handles requests, JSON->XML->JSON, etc
├── index.js
|   // This is where mock data goes from [myService].Settings.createMock
├── Mocks
│   ├── WsdlOperationName.js
|   └── ...
|   // This library provides strong typing, it's used in each Element/Type
├── Modeler.js
|   // This file defines the top level functionality found within the WSDL
├── ServiceDefinition.js
|   // This holds one file per defined Type within the WSDL
└── Type
    ├── SomeDefinedType.js
    └── ...
```

## Using the generated code
Start by including the generated code:
```javascript
var Service = require("path/to/generated/code");
var EC2 = require("lib/EC2");
```
This is how we create a new request:
```javascript
var someRequest = new Service.[WSDL-Binding-Name].[WSDL-Operation-Name]();
var assignRequest = new EC2.AmazonEC2Port.AssignPrivateIpAddresses();
```
Setting basic properties is trivial
```javascript
someRequest.someSimpleProperty = 1;
```
Most requests consist of several complex types, they are all found within our service object:
```javascript
someRequest.someElementProperty = new Service.Elements.[WSDL-Element-Name]();
someRequest.someTypeProperty = new Service.Types.[WSDL-Type-Name]();
```
Populating Requests/Elements/Types can be done one at a time:
```javascript
someRequest.someNumber = 1;
someRequest.someString = "1";
```
We can also populate directly from a JSON object:
```javascript
var json = { someNumber: 1, someString: "1" };
someRequest = new Service.TestRequest(json);
// someRequest.someNumber == 1
// someRequest.someString == "1"
```
Trying to set a property's value to an invalid type will be discarded:
```javascript
someRequest.PersonElement = null;
someRequest.PersonElement = new SomeRandomObject();
// someRequest.PersonElement == null;
```
If we have an array of objects there's a helper function to save typing:
```javascript
someRequest.PeopleList = new Service.Types.ArrayOfPeople;
someRequest.PeopleList.newChild({ firstname: "Oli", age: 24 });
// is the equivalent of:
someRequest.PeopleList = new Service.Types.ArrayOfPeople;
var newPerson = new Service.Types.Person();
newPerson.firstname = "Oli";
newPerson.age = 24;
someRequest.PeopleList.push(newPerson);
```
Making the request is trivial:
```javascript
someRequest.request(function(err, response) {
  // 'response' is a modeled object, it WILL conform to the WSDL.
  //... w00p!
});
```
Once we have a request and we want to edit it by adding properties not found in the WDSL, we must first extract the data from the response:
```javascript
someRequest.request(function(err, response) {
  response.SomeInvalidProperty = "testing";
  // response.SomeInvalidProperty == null
  var myResponse = response.extract();
  myResponse.SomeInvalidProperty = "testing";
  // myResponse.SomeInvalidProperty == "testing"
});
```

## Runtime Settings and Debugging
```javascript
var Service = require("path/to/generated/code");

// This next statement will change the duration (in milliseconds)
// the library will wait for the service to respond before timing
// out. The default is 15000 (15 seconds)
Service.Settings.timeout = 5000;

// This next statement will enable debugging for ALL soap requests
// It prints to stdout JSON objects, XML documents, etc
// default: false
Service.Settings.debugSoap = true;

// This next statement will change where the library's debugging
// output gets written to. (The default is STDOUT)
Service.Settings.logger = fs.createWriteStream('./test').write;

// This next statement will enable benchmarking for ALL soap requests
// It prints to stdout the name of each request and its duration in ms
// default: true
Service.Settings.benchmark = true;

// This next statement will store the most recent request of each type to file
// It outputs to [/path/to/generated/code]/Mocks/[request-name]
// default: false
Service.Settings.createMock = true;

// This next statement will use saved mock requests instead of real requests
// default: false
Service.Settings.useMock = true;

// We can debug single SOAP requests by using the .debug() function, which is
// a property of every request and response object
var additionRequest = new Service.MathService.AdditionFunction(json);
additionRequest.debug(); // Watch your console output
additionRequest.request(function(err, response) {
  response.debug(); // Watch your console output
  if (err || !response) {
    return callback(err || "No response?");
  }
  
  //... w00p!
});
```

## Checking the generated service definition
Generic example of ./[ServiceName]/ServiceDefinition.js:
```javascript
module.exports = {
  "[WSDL-Binding-Name]": {
    "namespace": "http://blahblah.com/webservices/",
    "serviceUrl": "https://www.blahblah.com/path/to/service.blah",
    "[WSDL-Operation-Name]": {
      "soapAction": "blahblahblah",
      "input": "[Top-Level-Request-Element-For-Operation]",
      "output": "[Top-Level-Response-Element-For-Operation]"
    },
    ...
  },
  ...
}
```
Example of Amazon's EC2 service:
```javascript
module.exports = {
  "AmazonEC2Port": {
    "namespace": "http://ec2.amazonaws.com/doc/2013-02-01/",
    "serviceUrl": "https://ec2.amazonaws.com/",
    "ActivateLicense": {
      "soapAction": "ActivateLicense",
      "input": "ElementActivateLicense",
      "output": "ElementActivateLicenseResponse"
    },
    "AssignPrivateIpAddresses": {
      "soapAction": "AssignPrivateIpAddresses",
      "input": "ElementAssignPrivateIpAddresses",
      "output": "ElementAssignPrivateIpAddressesResponse"
    },
    ...
  },
  ...
}
```

## Tests
Run tests using `npm test`*

*: You may need to run `ulimit -n 1000` to up the number of open files you can have open at any one time.