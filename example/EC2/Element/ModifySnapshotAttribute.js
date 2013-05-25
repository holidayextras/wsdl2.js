var Modeler = require("../Modeler.js");
var className = 'ElementModifySnapshotAttribute';

var ElementModifySnapshotAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifySnapshotAttribute: {
      type: "TypeModifySnapshotAttributeType",
      wsdlDefinition: {
        name: "ModifySnapshotAttribute",
        type: "tns:ModifySnapshotAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifySnapshotAttribute;
Modeler.register(ElementModifySnapshotAttribute, "ElementModifySnapshotAttribute");
