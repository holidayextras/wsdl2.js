var Modeler = require("../Modeler.js");
var className = 'ElementDeleteSnapshotResponse';

var ElementDeleteSnapshotResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteSnapshotResponse: {
      type: "TypeDeleteSnapshotResponseType",
      wsdlDefinition: {
        name: "DeleteSnapshotResponse",
        type: "tns:DeleteSnapshotResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteSnapshotResponse;
Modeler.register(ElementDeleteSnapshotResponse, "ElementDeleteSnapshotResponse");
