var Modeler = require("../Modeler.js");
var className = 'TypeAssociateDhcpOptionsType';

var TypeAssociateDhcpOptionsType = function(json, parentObj) {
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
    },
    vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAssociateDhcpOptionsType;
Modeler.register(TypeAssociateDhcpOptionsType, "TypeAssociateDhcpOptionsType");
