var Modeler = require("../Modeler.js");
var className = 'TypeDescribeVolumesSetType';

var TypeDescribeVolumesSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeVolumesSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeVolumesSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeVolumesSetType;
Modeler.register(TypeDescribeVolumesSetType, "TypeDescribeVolumesSetType");
