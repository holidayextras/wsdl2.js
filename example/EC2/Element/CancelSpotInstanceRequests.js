var Modeler = require("../Modeler.js");
var className = 'ElementCancelSpotInstanceRequests';

var ElementCancelSpotInstanceRequests = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CancelSpotInstanceRequests: {
      type: "TypeCancelSpotInstanceRequestsType",
      wsdlDefinition: {
        name: "CancelSpotInstanceRequests",
        type: "tns:CancelSpotInstanceRequestsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCancelSpotInstanceRequests;
Modeler.register(ElementCancelSpotInstanceRequests, "ElementCancelSpotInstanceRequests");
