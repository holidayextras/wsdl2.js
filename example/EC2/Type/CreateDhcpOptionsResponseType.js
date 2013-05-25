var Modeler = require("../Modeler.js");
var className = 'TypeCreateDhcpOptionsResponseType';

var TypeCreateDhcpOptionsResponseType = function(json, parentObj) {
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
    dhcpOptions: {
      type: "TypeDhcpOptionsType",
      wsdlDefinition: {
        name: "dhcpOptions",
        type: "tns:DhcpOptionsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateDhcpOptionsResponseType;
Modeler.register(TypeCreateDhcpOptionsResponseType, "TypeCreateDhcpOptionsResponseType");
