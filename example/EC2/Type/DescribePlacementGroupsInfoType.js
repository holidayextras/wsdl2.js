var Modeler = require("../Modeler.js");
var className = 'TypeDescribePlacementGroupsInfoType';

var TypeDescribePlacementGroupsInfoType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribePlacementGroupItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribePlacementGroupItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribePlacementGroupsInfoType;
Modeler.register(TypeDescribePlacementGroupsInfoType, "TypeDescribePlacementGroupsInfoType");
