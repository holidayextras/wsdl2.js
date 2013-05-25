var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSnapshotsType';

var TypeDescribeSnapshotsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  snapshotSet: {
      type: "TypeDescribeSnapshotsSetType",
      wsdlDefinition: {
        name: "snapshotSet",
        type: "tns:DescribeSnapshotsSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ownersSet: {
      type: "TypeDescribeSnapshotsOwnersType",
      wsdlDefinition: {
        name: "ownersSet",
        type: "tns:DescribeSnapshotsOwnersType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    restorableBySet: {
      type: "TypeDescribeSnapshotsRestorableBySetType",
      wsdlDefinition: {
        name: "restorableBySet",
        type: "tns:DescribeSnapshotsRestorableBySetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSnapshotsType;
Modeler.register(TypeDescribeSnapshotsType, "TypeDescribeSnapshotsType");
