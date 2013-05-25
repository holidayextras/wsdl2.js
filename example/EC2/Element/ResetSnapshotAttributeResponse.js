var Modeler = require("../Modeler.js");
var className = 'ElementResetSnapshotAttributeResponse';

var ElementResetSnapshotAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ResetSnapshotAttributeResponse: {
      type: "TypeResetSnapshotAttributeResponseType",
      wsdlDefinition: {
        name: "ResetSnapshotAttributeResponse",
        type: "tns:ResetSnapshotAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResetSnapshotAttributeResponse;
Modeler.register(ElementResetSnapshotAttributeResponse, "ElementResetSnapshotAttributeResponse");
