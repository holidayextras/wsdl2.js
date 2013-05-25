var Modeler = require("../Modeler.js");
var className = 'TypeInternetGatewaySetType';

var TypeInternetGatewaySetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInternetGatewayType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InternetGatewayType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInternetGatewaySetType;
Modeler.register(TypeInternetGatewaySetType, "TypeInternetGatewaySetType");
