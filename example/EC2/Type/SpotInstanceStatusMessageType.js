var Modeler = require("../Modeler.js");
var className = 'TypeSpotInstanceStatusMessageType';

var TypeSpotInstanceStatusMessageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  code: {
      type: "string",
      wsdlDefinition: {
        name: "code",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    updateTime: {
      type: "date",
      wsdlDefinition: {
        name: "updateTime",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    message: {
      type: "string",
      wsdlDefinition: {
        name: "message",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSpotInstanceStatusMessageType;
Modeler.register(TypeSpotInstanceStatusMessageType, "TypeSpotInstanceStatusMessageType");
