var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVolumeStatusResponseType';

var TypeDescribeVolumeStatusResponseType = function(json, parentObj) {
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
    volumeStatusSet: {
      type: "TypeVolumeStatusSetType",
      wsdlDefinition: {
        name: "volumeStatusSet",
        type: "tns:VolumeStatusSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    nextToken: {
      type: "string",
      wsdlDefinition: {
        name: "nextToken",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeVolumeStatusResponseType;
Modeler.register(TypeDescribeVolumeStatusResponseType, "TypeDescribeVolumeStatusResponseType");
