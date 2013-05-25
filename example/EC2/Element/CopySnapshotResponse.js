var Modeler = require("../Modeler.js");
var className = 'ElementCopySnapshotResponse';

var ElementCopySnapshotResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CopySnapshotResponse: {
      type: "TypeCopySnapshotResponseType",
      wsdlDefinition: {
        name: "CopySnapshotResponse",
        type: "tns:CopySnapshotResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCopySnapshotResponse;
Modeler.register(ElementCopySnapshotResponse, "ElementCopySnapshotResponse");
