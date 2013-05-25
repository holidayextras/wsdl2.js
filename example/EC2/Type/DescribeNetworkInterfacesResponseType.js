var Modeler = require("../Modeler.js");
var className = 'TypeDescribeNetworkInterfacesResponseType';

var TypeDescribeNetworkInterfacesResponseType = function(json, parentObj) {
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
    networkInterfaceSet: {
      type: "TypeNetworkInterfaceSetType",
      wsdlDefinition: {
        name: "networkInterfaceSet",
        type: "tns:NetworkInterfaceSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeNetworkInterfacesResponseType;
Modeler.register(TypeDescribeNetworkInterfacesResponseType, "TypeDescribeNetworkInterfacesResponseType");
