var Modeler = require("../Modeler.js");
var className = 'ElementDescribeSnapshotsResponse';

var ElementDescribeSnapshotsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeSnapshotsResponse: {
      type: "TypeDescribeSnapshotsResponseType",
      wsdlDefinition: {
        name: "DescribeSnapshotsResponse",
        type: "tns:DescribeSnapshotsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeSnapshotsResponse;
Modeler.register(ElementDescribeSnapshotsResponse, "ElementDescribeSnapshotsResponse");
