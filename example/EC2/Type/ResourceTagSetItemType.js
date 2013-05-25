var Modeler = require("../Modeler.js");
var className = 'TypeResourceTagSetItemType';

var TypeResourceTagSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  key: {
      type: "string",
      wsdlDefinition: {
        name: "key",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    value: {
      type: "string",
      wsdlDefinition: {
        name: "value",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeResourceTagSetItemType;
Modeler.register(TypeResourceTagSetItemType, "TypeResourceTagSetItemType");
