var Modeler = require("../Modeler.js");
var className = 'TypeDeleteTagsSetItemType';

var TypeDeleteTagsSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  key: {
      type: "string",
      wsdlDefinition: {
        name: "key",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    value: {
      type: "string",
      wsdlDefinition: {
        name: "value",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteTagsSetItemType;
Modeler.register(TypeDeleteTagsSetItemType, "TypeDeleteTagsSetItemType");
