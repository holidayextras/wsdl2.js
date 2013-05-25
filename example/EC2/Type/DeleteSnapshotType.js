var Modeler = require("../Modeler.js");
var className = 'TypeDeleteSnapshotType';

var TypeDeleteSnapshotType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  snapshotId: {
      type: "string",
      wsdlDefinition: {
        name: "snapshotId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDeleteSnapshotType;
Modeler.register(TypeDeleteSnapshotType, "TypeDeleteSnapshotType");
