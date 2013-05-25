var Modeler = require("../Modeler.js");
var className = 'TypeDescribeKeyPairsResponseInfoType';

var TypeDescribeKeyPairsResponseInfoType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeKeyPairsResponseItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeKeyPairsResponseItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeKeyPairsResponseInfoType;
Modeler.register(TypeDescribeKeyPairsResponseInfoType, "TypeDescribeKeyPairsResponseInfoType");
