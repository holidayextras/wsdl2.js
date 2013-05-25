var Modeler = require("../Modeler.js");
var className = 'TypeDetachVolumeType';

var TypeDetachVolumeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  volumeId: {
      type: "string",
      wsdlDefinition: {
        name: "volumeId",
        type: "xs:string"
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
    device: {
      type: "string",
      wsdlDefinition: {
        name: "device",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    force: {
      type: "boolean",
      wsdlDefinition: {
        name: "force",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDetachVolumeType;
Modeler.register(TypeDetachVolumeType, "TypeDetachVolumeType");
