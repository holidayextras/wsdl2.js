var Modeler = require("../Modeler.js");
var className = 'TypeCancelSpotInstanceRequestsType';

var TypeCancelSpotInstanceRequestsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  spotInstanceRequestIdSet: {
      type: "TypeSpotInstanceRequestIdSetType",
      wsdlDefinition: {
        name: "spotInstanceRequestIdSet",
        type: "tns:SpotInstanceRequestIdSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCancelSpotInstanceRequestsType;
Modeler.register(TypeCancelSpotInstanceRequestsType, "TypeCancelSpotInstanceRequestsType");
