var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSnapshotsSetResponseType';

var TypeDescribeSnapshotsSetResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeSnapshotsSetItemResponseType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeSnapshotsSetItemResponseType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSnapshotsSetResponseType;
Modeler.register(TypeDescribeSnapshotsSetResponseType, "TypeDescribeSnapshotsSetResponseType");
