var Modeler = require("../Modeler.js");
var className = 'TypeInstanceIdSetType';

var TypeInstanceIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInstanceIdType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InstanceIdType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceIdSetType;
Modeler.register(TypeInstanceIdSetType, "TypeInstanceIdSetType");
