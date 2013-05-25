var Modeler = require("../Modeler.js");
var className = 'ElementDeleteSnapshot';

var ElementDeleteSnapshot = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteSnapshot: {
      type: "TypeDeleteSnapshotType",
      wsdlDefinition: {
        name: "DeleteSnapshot",
        type: "tns:DeleteSnapshotType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteSnapshot;
Modeler.register(ElementDeleteSnapshot, "ElementDeleteSnapshot");
