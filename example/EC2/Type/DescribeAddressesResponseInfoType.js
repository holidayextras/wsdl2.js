var Modeler = require("../Modeler.js");
var className = 'TypeDescribeAddressesResponseInfoType';

var TypeDescribeAddressesResponseInfoType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeAddressesResponseItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeAddressesResponseItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeAddressesResponseInfoType;
Modeler.register(TypeDescribeAddressesResponseInfoType, "TypeDescribeAddressesResponseInfoType");
