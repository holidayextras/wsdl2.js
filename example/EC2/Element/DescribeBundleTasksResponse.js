var Modeler = require("../Modeler.js");
var className = 'ElementDescribeBundleTasksResponse';

var ElementDescribeBundleTasksResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeBundleTasksResponse: {
      type: "TypeDescribeBundleTasksResponseType",
      wsdlDefinition: {
        name: "DescribeBundleTasksResponse",
        type: "tns:DescribeBundleTasksResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeBundleTasksResponse;
Modeler.register(ElementDescribeBundleTasksResponse, "ElementDescribeBundleTasksResponse");
