var Modeler = require("../Modeler.js");
var className = 'TypeCancelSpotInstanceRequestsResponseSetType';

var TypeCancelSpotInstanceRequestsResponseSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeCancelSpotInstanceRequestsResponseSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:CancelSpotInstanceRequestsResponseSetItemType",
        minOccurs: 1,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: true
    }
	}, parentObj, json);
};

module.exports = TypeCancelSpotInstanceRequestsResponseSetType;
Modeler.register(TypeCancelSpotInstanceRequestsResponseSetType, "TypeCancelSpotInstanceRequestsResponseSetType");
