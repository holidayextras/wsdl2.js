var Modeler = require("../Modeler.js");
var className = 'ElementDescribeInstanceStatus';

var ElementDescribeInstanceStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeInstanceStatus: {
      type: "TypeDescribeInstanceStatusType",
      wsdlDefinition: {
        name: "DescribeInstanceStatus",
        type: "tns:DescribeInstanceStatusType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeInstanceStatus;
Modeler.register(ElementDescribeInstanceStatus, "ElementDescribeInstanceStatus");
