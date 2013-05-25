var Modeler = require("../Modeler.js");
var className = 'ElementDescribeReservedInstances';

var ElementDescribeReservedInstances = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeReservedInstances: {
      type: "TypeDescribeReservedInstancesType",
      wsdlDefinition: {
        name: "DescribeReservedInstances",
        type: "tns:DescribeReservedInstancesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeReservedInstances;
Modeler.register(ElementDescribeReservedInstances, "ElementDescribeReservedInstances");
