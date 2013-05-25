var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesSetItemType';

var TypeDescribeReservedInstancesSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  reservedInstancesId: {
      type: "string",
      wsdlDefinition: {
        name: "reservedInstancesId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesSetItemType;
Modeler.register(TypeDescribeReservedInstancesSetItemType, "TypeDescribeReservedInstancesSetItemType");
