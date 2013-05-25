var Modeler = require("../Modeler.js");
var className = 'TypeImportInstanceTaskDetailsType';

var TypeImportInstanceTaskDetailsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  volumes: {
      type: "TypeImportInstanceVolumeDetailSetType",
      wsdlDefinition: {
        name: "volumes",
        type: "tns:ImportInstanceVolumeDetailSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceId: {
      type: "string",
      wsdlDefinition: {
        name: "instanceId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    platform: {
      type: "string",
      wsdlDefinition: {
        name: "platform",
        type: "xs:string",
        minOccurs: 0
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
    }
	}, parentObj, json);
};

module.exports = TypeImportInstanceTaskDetailsType;
Modeler.register(TypeImportInstanceTaskDetailsType, "TypeImportInstanceTaskDetailsType");
