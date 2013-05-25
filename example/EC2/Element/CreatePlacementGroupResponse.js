var Modeler = require("../Modeler.js");
var className = 'ElementCreatePlacementGroupResponse';

var ElementCreatePlacementGroupResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreatePlacementGroupResponse: {
      type: "TypeCreatePlacementGroupResponseType",
      wsdlDefinition: {
        name: "CreatePlacementGroupResponse",
        type: "tns:CreatePlacementGroupResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreatePlacementGroupResponse;
Modeler.register(ElementCreatePlacementGroupResponse, "ElementCreatePlacementGroupResponse");
