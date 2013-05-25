var Modeler = require("../Modeler.js");
var className = 'TypeEbsBlockDeviceType';

var TypeEbsBlockDeviceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
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
    volumeSize: {
      type: "number",
      wsdlDefinition: {
        name: "volumeSize",
        type: "xs:int",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    deleteOnTermination: {
      type: "boolean",
      wsdlDefinition: {
        name: "deleteOnTermination",
        type: "xs:boolean",
        minOccurs: 0
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

module.exports = TypeEbsBlockDeviceType;
Modeler.register(TypeEbsBlockDeviceType, "TypeEbsBlockDeviceType");
