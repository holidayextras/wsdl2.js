var Modeler = require("../Modeler.js");
var className = 'TypeVolumeStatusActionItemType';

var TypeVolumeStatusActionItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  description: {
      type: "string",
      wsdlDefinition: {
        name: "description",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    code: {
      type: "string",
      wsdlDefinition: {
        name: "code",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    eventId: {
      type: "string",
      wsdlDefinition: {
        name: "eventId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    eventType: {
      type: "string",
      wsdlDefinition: {
        name: "eventType",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVolumeStatusActionItemType;
Modeler.register(TypeVolumeStatusActionItemType, "TypeVolumeStatusActionItemType");
