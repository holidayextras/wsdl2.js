var Modeler = require("../Modeler.js");
var className = 'ElementDescribePlacementGroups';

var ElementDescribePlacementGroups = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribePlacementGroups: {
      type: "TypeDescribePlacementGroupsType",
      wsdlDefinition: {
        name: "DescribePlacementGroups",
        type: "tns:DescribePlacementGroupsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribePlacementGroups;
Modeler.register(ElementDescribePlacementGroups, "ElementDescribePlacementGroups");
