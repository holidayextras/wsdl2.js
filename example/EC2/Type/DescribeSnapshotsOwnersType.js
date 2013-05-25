var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSnapshotsOwnersType';

var TypeDescribeSnapshotsOwnersType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeSnapshotsOwnerType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeSnapshotsOwnerType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSnapshotsOwnersType;
Modeler.register(TypeDescribeSnapshotsOwnersType, "TypeDescribeSnapshotsOwnersType");
