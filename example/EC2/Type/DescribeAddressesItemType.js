var Modeler = require("../Modeler.js");
var className = 'TypeDescribeAddressesItemType';

var TypeDescribeAddressesItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  publicIp: {
      type: "string",
      wsdlDefinition: {
        name: "publicIp",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeAddressesItemType;
Modeler.register(TypeDescribeAddressesItemType, "TypeDescribeAddressesItemType");
