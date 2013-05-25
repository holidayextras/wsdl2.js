var Modeler = require("../Modeler.js");
var className = 'TypeCopySnapshotType';

var TypeCopySnapshotType = function(json, parentObj) {
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
    sourceSnapshotId: {
      type: "string",
      wsdlDefinition: {
        name: "sourceSnapshotId",
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
    }
	}, parentObj, json);
};

module.exports = TypeCopySnapshotType;
Modeler.register(TypeCopySnapshotType, "TypeCopySnapshotType");
