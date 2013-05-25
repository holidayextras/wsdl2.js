var Modeler = require("../Modeler.js");
var className = 'TypeInstanceTypeSetItemType';

var TypeInstanceTypeSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instanceType: {
      type: "string",
      wsdlDefinition: {
        name: "instanceType",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceTypeSetItemType;
Modeler.register(TypeInstanceTypeSetItemType, "TypeInstanceTypeSetItemType");
