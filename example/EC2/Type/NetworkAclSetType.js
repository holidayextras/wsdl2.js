var Modeler = require("../Modeler.js");
var className = 'TypeNetworkAclSetType';

var TypeNetworkAclSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeNetworkAclType",
      wsdlDefinition: {
        name: "item",
        type: "tns:NetworkAclType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkAclSetType;
Modeler.register(TypeNetworkAclSetType, "TypeNetworkAclSetType");
