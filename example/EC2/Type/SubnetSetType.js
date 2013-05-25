var Modeler = require("../Modeler.js");
var className = 'TypeSubnetSetType';

var TypeSubnetSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeSubnetType",
      wsdlDefinition: {
        name: "item",
        type: "tns:SubnetType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSubnetSetType;
Modeler.register(TypeSubnetSetType, "TypeSubnetSetType");
