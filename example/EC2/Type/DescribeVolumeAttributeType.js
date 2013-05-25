var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVolumeAttributeType';

var TypeDescribeVolumeAttributeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  volumeId: {
      type: "string",
      wsdlDefinition: {
        name: "volumeId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeVolumeAttributeType;
Modeler.register(TypeDescribeVolumeAttributeType, "TypeDescribeVolumeAttributeType");
