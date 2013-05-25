var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSnapshots';

var ElementDescribeSnapshots = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSnapshots: {
      type: "TypeDescribeSnapshotsType",
      wsdlDefinition: {
        name: "DescribeSnapshots",
        type: "tns:DescribeSnapshotsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSnapshots;
Modeler.register(ElementDescribeSnapshots, "ElementDescribeSnapshots");
