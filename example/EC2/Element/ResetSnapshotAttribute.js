var Modeler = require("../Modeler.js");
var className = 'ElementResetSnapshotAttribute';

var ElementResetSnapshotAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ResetSnapshotAttribute: {
      type: "TypeResetSnapshotAttributeType",
      wsdlDefinition: {
        name: "ResetSnapshotAttribute",
        type: "tns:ResetSnapshotAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResetSnapshotAttribute;
Modeler.register(ElementResetSnapshotAttribute, "ElementResetSnapshotAttribute");
