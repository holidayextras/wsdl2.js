var Modeler = require("../Modeler.js");
var className = 'TypeCreateVolumeType';

var TypeCreateVolumeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  size: {
      type: "string",
      wsdlDefinition: {
        name: "size",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    snapshotId: {
      type: "string",
      wsdlDefinition: {
        name: "snapshotId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    availabilityZone: {
      type: "string",
      wsdlDefinition: {
        name: "availabilityZone",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    volumeType: {
      type: "string",
      wsdlDefinition: {
        name: "volumeType",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    iops: {
      type: "number",
      wsdlDefinition: {
        name: "iops",
        type: "xs:int",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateVolumeType;
Modeler.register(TypeCreateVolumeType, "TypeCreateVolumeType");
