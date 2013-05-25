var Modeler = require("../Modeler.js");
var className = 'TypeVpnConnectionOptionsResponseType';

var TypeVpnConnectionOptionsResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  staticRoutesOnly: {
      type: "boolean",
      wsdlDefinition: {
        name: "staticRoutesOnly",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpnConnectionOptionsResponseType;
Modeler.register(TypeVpnConnectionOptionsResponseType, "TypeVpnConnectionOptionsResponseType");
