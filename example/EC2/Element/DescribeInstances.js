var Modeler = require("../Modeler.js");
var className = 'ElementDescribeInstances';

var ElementDescribeInstances = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeInstances: {
      type: "TypeDescribeInstancesType",
      wsdlDefinition: {
        name: "DescribeInstances",
        type: "tns:DescribeInstancesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeInstances;
Modeler.register(ElementDescribeInstances, "ElementDescribeInstances");
