var Modeler = require("../Modeler.js");
var className = 'TypeDescribeInstancesInfoType';

var TypeDescribeInstancesInfoType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeInstancesItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeInstancesItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeInstancesInfoType;
Modeler.register(TypeDescribeInstancesInfoType, "TypeDescribeInstancesInfoType");
