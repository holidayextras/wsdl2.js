var Modeler = require("../Modeler.js");
var className = 'TypeCreateImageResponseType';

var TypeCreateImageResponseType = function(json, parentObj) {
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
    imageId: {
      type: "string",
      wsdlDefinition: {
        name: "imageId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateImageResponseType;
Modeler.register(TypeCreateImageResponseType, "TypeCreateImageResponseType");
