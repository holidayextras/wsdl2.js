var Modeler = require("../Modeler.js");
var className = 'TypeDeleteDhcpOptionsType';

var TypeDeleteDhcpOptionsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  dhcpOptionsId: {
      type: "string",
      wsdlDefinition: {
        name: "dhcpOptionsId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteDhcpOptionsType;
Modeler.register(TypeDeleteDhcpOptionsType, "TypeDeleteDhcpOptionsType");
