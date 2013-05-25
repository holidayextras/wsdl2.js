var Modeler = require("../Modeler.js");
var className = 'ElementAssociateRouteTableResponse';

var ElementAssociateRouteTableResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AssociateRouteTableResponse: {
      type: "TypeAssociateRouteTableResponseType",
      wsdlDefinition: {
        name: "AssociateRouteTableResponse",
        type: "tns:AssociateRouteTableResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssociateRouteTableResponse;
Modeler.register(ElementAssociateRouteTableResponse, "ElementAssociateRouteTableResponse");
