var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVolumesType';

var TypeDescribeVolumesType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeDescribeVolumesType;
Modeler.register(TypeDescribeVolumesType, "TypeDescribeVolumesType");
