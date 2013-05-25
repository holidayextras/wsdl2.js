var Modeler = require("../Modeler.js");
var className = 'TypeTagSetItemType';

var TypeTagSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  resourceId: {
      type: "string",
      wsdlDefinition: {
        name: "resourceId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    resourceType: {
      type: "string",
      wsdlDefinition: {
        name: "resourceType",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
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

module.exports = TypeTagSetItemType;
Modeler.register(TypeTagSetItemType, "TypeTagSetItemType");
