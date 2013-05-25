var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSnapshotAttributeResponse';

var ElementDescribeSnapshotAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSnapshotAttributeResponse: {
      type: "TypeDescribeSnapshotAttributeResponseType",
      wsdlDefinition: {
        name: "DescribeSnapshotAttributeResponse",
        type: "tns:DescribeSnapshotAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSnapshotAttributeResponse;
Modeler.register(ElementDescribeSnapshotAttributeResponse, "ElementDescribeSnapshotAttributeResponse");
