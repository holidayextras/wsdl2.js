var Modeler = require("../Modeler.js");
var className = 'TypeUserIdGroupPairSetType';

var TypeUserIdGroupPairSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeUserIdGroupPairType",
      wsdlDefinition: {
        name: "item",
        type: "tns:UserIdGroupPairType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUserIdGroupPairSetType;
Modeler.register(TypeUserIdGroupPairSetType, "TypeUserIdGroupPairSetType");
