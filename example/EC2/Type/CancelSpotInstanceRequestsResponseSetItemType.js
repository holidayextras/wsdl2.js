var Modeler = require("../Modeler.js");
var className = 'TypeCancelSpotInstanceRequestsResponseSetItemType';

var TypeCancelSpotInstanceRequestsResponseSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  spotInstanceRequestId: {
      type: "string",
      wsdlDefinition: {
        name: "spotInstanceRequestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCancelSpotInstanceRequestsResponseSetItemType;
Modeler.register(TypeCancelSpotInstanceRequestsResponseSetItemType, "TypeCancelSpotInstanceRequestsResponseSetItemType");
