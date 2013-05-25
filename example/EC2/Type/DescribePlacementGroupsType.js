var Modeler = require("../Modeler.js");
var className = 'TypeDescribePlacementGroupsType';

var TypeDescribePlacementGroupsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  placementGroupSet: {
      type: "TypeDescribePlacementGroupsInfoType",
      wsdlDefinition: {
        name: "placementGroupSet",
        type: "tns:DescribePlacementGroupsInfoType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribePlacementGroupsType;
Modeler.register(TypeDescribePlacementGroupsType, "TypeDescribePlacementGroupsType");
