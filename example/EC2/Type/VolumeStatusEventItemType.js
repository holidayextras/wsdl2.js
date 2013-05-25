var Modeler = require("../Modeler.js");
var className = 'TypeVolumeStatusEventItemType';

var TypeVolumeStatusEventItemType = function(json, parentObj) {
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
    notBefore: {
      type: "date",
      wsdlDefinition: {
        name: "notBefore",
        type: "xs:dateTime"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    notAfter: {
      type: "date",
      wsdlDefinition: {
        name: "notAfter",
        type: "xs:dateTime"
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

module.exports = TypeVolumeStatusEventItemType;
Modeler.register(TypeVolumeStatusEventItemType, "TypeVolumeStatusEventItemType");
