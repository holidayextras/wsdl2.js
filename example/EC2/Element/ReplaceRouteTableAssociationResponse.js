var Modeler = require("../Modeler.js");
var className = 'ElementReplaceRouteTableAssociationResponse';

var ElementReplaceRouteTableAssociationResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReplaceRouteTableAssociationResponse: {
      type: "TypeReplaceRouteTableAssociationResponseType",
      wsdlDefinition: {
        name: "ReplaceRouteTableAssociationResponse",
        type: "tns:ReplaceRouteTableAssociationResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReplaceRouteTableAssociationResponse;
Modeler.register(ElementReplaceRouteTableAssociationResponse, "ElementReplaceRouteTableAssociationResponse");
