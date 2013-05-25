var Modeler = require("../Modeler.js");
var className = 'ElementCreatePlacementGroup';

var ElementCreatePlacementGroup = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreatePlacementGroup: {
      type: "TypeCreatePlacementGroupType",
      wsdlDefinition: {
        name: "CreatePlacementGroup",
        type: "tns:CreatePlacementGroupType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreatePlacementGroup;
Modeler.register(ElementCreatePlacementGroup, "ElementCreatePlacementGroup");
