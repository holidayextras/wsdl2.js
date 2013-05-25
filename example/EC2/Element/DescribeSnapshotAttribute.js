var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSnapshotAttribute';

var ElementDescribeSnapshotAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSnapshotAttribute: {
      type: "TypeDescribeSnapshotAttributeType",
      wsdlDefinition: {
        name: "DescribeSnapshotAttribute",
        type: "tns:DescribeSnapshotAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSnapshotAttribute;
Modeler.register(ElementDescribeSnapshotAttribute, "ElementDescribeSnapshotAttribute");
