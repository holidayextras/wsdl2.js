var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVolumesResponseType';

var TypeDescribeVolumesResponseType = function(json, parentObj) {
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
    volumeSet: {
      type: "TypeDescribeVolumesSetResponseType",
      wsdlDefinition: {
        name: "volumeSet",
        type: "tns:DescribeVolumesSetResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeVolumesResponseType;
Modeler.register(TypeDescribeVolumesResponseType, "TypeDescribeVolumesResponseType");
