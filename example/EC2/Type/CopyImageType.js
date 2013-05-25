var Modeler = require("../Modeler.js");
var className = 'TypeCopyImageType';

var TypeCopyImageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  sourceRegion: {
      type: "string",
      wsdlDefinition: {
        name: "sourceRegion",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sourceImageId: {
      type: "string",
      wsdlDefinition: {
        name: "sourceImageId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    name: {
      type: "string",
      wsdlDefinition: {
        name: "name",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    description: {
      type: "string",
      wsdlDefinition: {
        name: "description",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    clientToken: {
      type: "string",
      wsdlDefinition: {
        name: "clientToken",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCopyImageType;
Modeler.register(TypeCopyImageType, "TypeCopyImageType");
