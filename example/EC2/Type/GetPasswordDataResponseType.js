var Modeler = require("../Modeler.js");
var className = 'TypeGetPasswordDataResponseType';

var TypeGetPasswordDataResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceId: {
      type: "string",
      wsdlDefinition: {
        name: "instanceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    timestamp: {
      type: "date",
      wsdlDefinition: {
        name: "timestamp",
        type: "xs:dateTime"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    passwordData: {
      type: "string",
      wsdlDefinition: {
        name: "passwordData",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeGetPasswordDataResponseType;
Modeler.register(TypeGetPasswordDataResponseType, "TypeGetPasswordDataResponseType");
