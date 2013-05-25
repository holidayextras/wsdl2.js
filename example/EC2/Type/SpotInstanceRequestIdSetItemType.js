var Modeler = require("../Modeler.js");
var className = 'TypeSpotInstanceRequestIdSetItemType';

var TypeSpotInstanceRequestIdSetItemType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeSpotInstanceRequestIdSetItemType;
Modeler.register(TypeSpotInstanceRequestIdSetItemType, "TypeSpotInstanceRequestIdSetItemType");
