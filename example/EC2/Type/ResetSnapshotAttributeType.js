var Modeler = require("../Modeler.js");
var className = 'TypeResetSnapshotAttributeType';

var TypeResetSnapshotAttributeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  snapshotId: {
      type: "string",
      wsdlDefinition: {
        name: "snapshotId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeResetSnapshotAttributeType;
Modeler.register(TypeResetSnapshotAttributeType, "TypeResetSnapshotAttributeType");
