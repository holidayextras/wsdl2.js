var Modeler = require("../Modeler.js");
var className = 'TypeDescribeRegionsSetType';

var TypeDescribeRegionsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeRegionsSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeRegionsSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeRegionsSetType;
Modeler.register(TypeDescribeRegionsSetType, "TypeDescribeRegionsSetType");
