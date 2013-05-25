var Modeler = require("../Modeler.js");
var className = 'TypeSecurityGroupSetType';

var TypeSecurityGroupSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeSecurityGroupItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:SecurityGroupItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSecurityGroupSetType;
Modeler.register(TypeSecurityGroupSetType, "TypeSecurityGroupSetType");
