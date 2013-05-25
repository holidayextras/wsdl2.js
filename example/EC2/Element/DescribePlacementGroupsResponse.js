var Modeler = require("../Modeler.js");
var className = 'ElementDescribePlacementGroupsResponse';

var ElementDescribePlacementGroupsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribePlacementGroupsResponse: {
      type: "TypeDescribePlacementGroupsResponseType",
      wsdlDefinition: {
        name: "DescribePlacementGroupsResponse",
        type: "tns:DescribePlacementGroupsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribePlacementGroupsResponse;
Modeler.register(ElementDescribePlacementGroupsResponse, "ElementDescribePlacementGroupsResponse");
