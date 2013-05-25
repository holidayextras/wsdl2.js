var Modeler = require("../Modeler.js");
var className = 'ElementCreateSnapshotResponse';

var ElementCreateSnapshotResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateSnapshotResponse: {
      type: "TypeCreateSnapshotResponseType",
      wsdlDefinition: {
        name: "CreateSnapshotResponse",
        type: "tns:CreateSnapshotResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateSnapshotResponse;
Modeler.register(ElementCreateSnapshotResponse, "ElementCreateSnapshotResponse");
