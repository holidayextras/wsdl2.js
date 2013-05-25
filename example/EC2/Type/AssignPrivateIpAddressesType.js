var Modeler = require("../Modeler.js");
var className = 'TypeAssignPrivateIpAddressesType';

var TypeAssignPrivateIpAddressesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  networkInterfaceId: {
      type: "string",
      wsdlDefinition: {
        name: "networkInterfaceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    privateIpAddressesSet: {
      type: "TypeAssignPrivateIpAddressesSetRequestType",
      wsdlDefinition: {
        name: "privateIpAddressesSet",
        type: "tns:AssignPrivateIpAddressesSetRequestType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    secondaryPrivateIpAddressCount: {
      type: "number",
      wsdlDefinition: {
        name: "secondaryPrivateIpAddressCount",
        type: "xs:int",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    allowReassignment: {
      type: "boolean",
      wsdlDefinition: {
        name: "allowReassignment",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAssignPrivateIpAddressesType;
Modeler.register(TypeAssignPrivateIpAddressesType, "TypeAssignPrivateIpAddressesType");
