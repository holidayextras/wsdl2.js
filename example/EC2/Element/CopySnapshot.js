var Modeler = require("../Modeler.js");
var className = 'ElementCopySnapshot';

var ElementCopySnapshot = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CopySnapshot: {
      type: "TypeCopySnapshotType",
      wsdlDefinition: {
        name: "CopySnapshot",
        type: "tns:CopySnapshotType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCopySnapshot;
Modeler.register(ElementCopySnapshot, "ElementCopySnapshot");
