var Modeler = require("../Modeler.js");
var className = 'TypeDescribeBundleTasksInfoType';

var TypeDescribeBundleTasksInfoType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeBundleTasksItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeBundleTasksItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeBundleTasksInfoType;
Modeler.register(TypeDescribeBundleTasksInfoType, "TypeDescribeBundleTasksInfoType");
