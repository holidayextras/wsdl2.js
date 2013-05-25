var Modeler = require("../Modeler.js");
var className = 'ElementDeletePlacementGroup';

var ElementDeletePlacementGroup = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeletePlacementGroup: {
      type: "TypeDeletePlacementGroupType",
      wsdlDefinition: {
        name: "DeletePlacementGroup",
        type: "tns:DeletePlacementGroupType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeletePlacementGroup;
Modeler.register(ElementDeletePlacementGroup, "ElementDeletePlacementGroup");
