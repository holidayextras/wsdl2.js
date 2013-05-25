var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSnapshotsResponseType';

var TypeDescribeSnapshotsResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    snapshotSet: {
      type: "TypeDescribeSnapshotsSetResponseType",
      wsdlDefinition: {
        name: "snapshotSet",
        type: "tns:DescribeSnapshotsSetResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSnapshotsResponseType;
Modeler.register(TypeDescribeSnapshotsResponseType, "TypeDescribeSnapshotsResponseType");
