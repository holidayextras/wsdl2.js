var Modeler = require("../Modeler.js");
var className = 'TypeInstanceStatusEventType';

var TypeInstanceStatusEventType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  code: {
      type: "string",
      wsdlDefinition: {
        name: "code",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
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
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceStatusEventType;
Modeler.register(TypeInstanceStatusEventType, "TypeInstanceStatusEventType");
