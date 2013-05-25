var Modeler = require("../Modeler.js");
var className = 'ElementDescribeBundleTasks';

var ElementDescribeBundleTasks = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeBundleTasks: {
      type: "TypeDescribeBundleTasksType",
      wsdlDefinition: {
        name: "DescribeBundleTasks",
        type: "tns:DescribeBundleTasksType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeBundleTasks;
Modeler.register(ElementDescribeBundleTasks, "ElementDescribeBundleTasks");
