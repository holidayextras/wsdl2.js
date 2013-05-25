var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSnapshotsRestorableByType';

var TypeDescribeSnapshotsRestorableByType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  user: {
      type: "string",
      wsdlDefinition: {
        name: "user",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSnapshotsRestorableByType;
Modeler.register(TypeDescribeSnapshotsRestorableByType, "TypeDescribeSnapshotsRestorableByType");
