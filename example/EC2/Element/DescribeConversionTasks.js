var Modeler = require("../Modeler.js");
var className = 'ElementDescribeConversionTasks';

var ElementDescribeConversionTasks = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeConversionTasks: {
      type: "TypeDescribeConversionTasksType",
      wsdlDefinition: {
        name: "DescribeConversionTasks",
        type: "tns:DescribeConversionTasksType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeConversionTasks;
Modeler.register(ElementDescribeConversionTasks, "ElementDescribeConversionTasks");
