var Modeler = require("../Modeler.js");
var className = 'ElementCancelSpotInstanceRequestsResponse';

var ElementCancelSpotInstanceRequestsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CancelSpotInstanceRequestsResponse: {
      type: "TypeCancelSpotInstanceRequestsResponseType",
      wsdlDefinition: {
        name: "CancelSpotInstanceRequestsResponse",
        type: "tns:CancelSpotInstanceRequestsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCancelSpotInstanceRequestsResponse;
Modeler.register(ElementCancelSpotInstanceRequestsResponse, "ElementCancelSpotInstanceRequestsResponse");
