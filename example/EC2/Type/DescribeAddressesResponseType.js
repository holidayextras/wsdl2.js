var Modeler = require("../Modeler.js");
var className = 'TypeDescribeAddressesResponseType';

var TypeDescribeAddressesResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    addressesSet: {
      type: "TypeDescribeAddressesResponseInfoType",
      wsdlDefinition: {
        name: "addressesSet",
        type: "tns:DescribeAddressesResponseInfoType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeAddressesResponseType;
Modeler.register(TypeDescribeAddressesResponseType, "TypeDescribeAddressesResponseType");
