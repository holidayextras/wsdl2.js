var Modeler = require("../Modeler.js");
var className = 'TypeDescribeNetworkInterfacesType';

var TypeDescribeNetworkInterfacesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  networkInterfaceIdSet: {
      type: "TypeNetworkInterfaceIdSetType",
      wsdlDefinition: {
        name: "networkInterfaceIdSet",
        type: "tns:NetworkInterfaceIdSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeNetworkInterfacesType;
Modeler.register(TypeDescribeNetworkInterfacesType, "TypeDescribeNetworkInterfacesType");
