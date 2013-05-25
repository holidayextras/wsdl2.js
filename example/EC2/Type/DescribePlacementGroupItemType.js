var Modeler = require("../Modeler.js");
var className = 'TypeDescribePlacementGroupItemType';

var TypeDescribePlacementGroupItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  groupName: {
      type: "string",
      wsdlDefinition: {
        name: "groupName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribePlacementGroupItemType;
Modeler.register(TypeDescribePlacementGroupItemType, "TypeDescribePlacementGroupItemType");
