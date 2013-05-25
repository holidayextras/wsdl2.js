var Modeler = require("../Modeler.js");
var className = 'ElementDeletePlacementGroupResponse';

var ElementDeletePlacementGroupResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeletePlacementGroupResponse: {
      type: "TypeDeletePlacementGroupResponseType",
      wsdlDefinition: {
        name: "DeletePlacementGroupResponse",
        type: "tns:DeletePlacementGroupResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeletePlacementGroupResponse;
Modeler.register(ElementDeletePlacementGroupResponse, "ElementDeletePlacementGroupResponse");
