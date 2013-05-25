var Modeler = require("../Modeler.js");
var className = 'TypeDescribeAddressesInfoType';

var TypeDescribeAddressesInfoType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeAddressesItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeAddressesItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeAddressesInfoType;
Modeler.register(TypeDescribeAddressesInfoType, "TypeDescribeAddressesInfoType");
