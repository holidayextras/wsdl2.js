var Modeler = require("../Modeler.js");
var className = 'ElementCreateSnapshot';

var ElementCreateSnapshot = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateSnapshot: {
      type: "TypeCreateSnapshotType",
      wsdlDefinition: {
        name: "CreateSnapshot",
        type: "tns:CreateSnapshotType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateSnapshot;
Modeler.register(ElementCreateSnapshot, "ElementCreateSnapshot");
