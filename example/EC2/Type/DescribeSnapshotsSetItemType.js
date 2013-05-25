var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSnapshotsSetItemType';

var TypeDescribeSnapshotsSetItemType = function(json, parentObj) {
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

module.exports = TypeDescribeSnapshotsSetItemType;
Modeler.register(TypeDescribeSnapshotsSetItemType, "TypeDescribeSnapshotsSetItemType");
