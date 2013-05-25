var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSnapshotAttributeType';

var TypeDescribeSnapshotAttributeType = function(json, parentObj) {
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

module.exports = TypeDescribeSnapshotAttributeType;
Modeler.register(TypeDescribeSnapshotAttributeType, "TypeDescribeSnapshotAttributeType");
