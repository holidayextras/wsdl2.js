var Modeler = require("../Modeler.js");
var className = 'TypeDescribePlacementGroupsResponseType';

var TypeDescribePlacementGroupsResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    placementGroupSet: {
      type: "TypePlacementGroupSetType",
      wsdlDefinition: {
        name: "placementGroupSet",
        type: "tns:PlacementGroupSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribePlacementGroupsResponseType;
Modeler.register(TypeDescribePlacementGroupsResponseType, "TypeDescribePlacementGroupsResponseType");
