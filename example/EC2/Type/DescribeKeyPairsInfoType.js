var Modeler = require("../Modeler.js");
var className = 'TypeDescribeKeyPairsInfoType';

var TypeDescribeKeyPairsInfoType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeKeyPairsItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeKeyPairsItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeKeyPairsInfoType;
Modeler.register(TypeDescribeKeyPairsInfoType, "TypeDescribeKeyPairsInfoType");
