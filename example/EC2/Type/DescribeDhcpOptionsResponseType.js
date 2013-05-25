var Modeler = require("../Modeler.js");
var className = 'TypeDescribeDhcpOptionsResponseType';

var TypeDescribeDhcpOptionsResponseType = function(json, parentObj) {
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
    dhcpOptionsSet: {
      type: "TypeDhcpOptionsSetType",
      wsdlDefinition: {
        name: "dhcpOptionsSet",
        type: "tns:DhcpOptionsSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeDhcpOptionsResponseType;
Modeler.register(TypeDescribeDhcpOptionsResponseType, "TypeDescribeDhcpOptionsResponseType");
