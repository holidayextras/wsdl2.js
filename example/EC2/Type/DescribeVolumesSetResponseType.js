var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVolumesSetResponseType';

var TypeDescribeVolumesSetResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeVolumesSetItemResponseType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeVolumesSetItemResponseType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeVolumesSetResponseType;
Modeler.register(TypeDescribeVolumesSetResponseType, "TypeDescribeVolumesSetResponseType");
