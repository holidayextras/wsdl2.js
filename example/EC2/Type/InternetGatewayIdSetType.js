var Modeler = require("../Modeler.js");
var className = 'TypeInternetGatewayIdSetType';

var TypeInternetGatewayIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInternetGatewayIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InternetGatewayIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInternetGatewayIdSetType;
Modeler.register(TypeInternetGatewayIdSetType, "TypeInternetGatewayIdSetType");
