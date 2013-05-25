var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVolumeStatusType';

var TypeDescribeVolumeStatusType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  volumeSet: {
      type: "TypeDescribeVolumesSetType",
      wsdlDefinition: {
        name: "volumeSet",
        type: "tns:DescribeVolumesSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    maxResults: {
      type: "Typeinteger",
      wsdlDefinition: {
        name: "maxResults",
        type: "xs:integer",
        minOccurs: 0
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

module.exports = TypeDescribeVolumeStatusType;
Modeler.register(TypeDescribeVolumeStatusType, "TypeDescribeVolumeStatusType");
