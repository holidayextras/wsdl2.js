var Modeler = require("../Modeler.js");
var className = 'TypeCancelSpotInstanceRequestsResponseType';

var TypeCancelSpotInstanceRequestsResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    spotInstanceRequestSet: {
      type: "TypeCancelSpotInstanceRequestsResponseSetType",
      wsdlDefinition: {
        name: "spotInstanceRequestSet",
        type: "tns:CancelSpotInstanceRequestsResponseSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCancelSpotInstanceRequestsResponseType;
Modeler.register(TypeCancelSpotInstanceRequestsResponseType, "TypeCancelSpotInstanceRequestsResponseType");
