var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSnapshotsRestorableBySetType';

var TypeDescribeSnapshotsRestorableBySetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeSnapshotsRestorableByType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeSnapshotsRestorableByType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSnapshotsRestorableBySetType;
Modeler.register(TypeDescribeSnapshotsRestorableBySetType, "TypeDescribeSnapshotsRestorableBySetType");
