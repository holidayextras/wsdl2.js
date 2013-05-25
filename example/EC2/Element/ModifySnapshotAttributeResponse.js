var Modeler = require("../Modeler.js");
var className = 'ElementModifySnapshotAttributeResponse';

var ElementModifySnapshotAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifySnapshotAttributeResponse: {
      type: "TypeModifySnapshotAttributeResponseType",
      wsdlDefinition: {
        name: "ModifySnapshotAttributeResponse",
        type: "tns:ModifySnapshotAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifySnapshotAttributeResponse;
Modeler.register(ElementModifySnapshotAttributeResponse, "ElementModifySnapshotAttributeResponse");
