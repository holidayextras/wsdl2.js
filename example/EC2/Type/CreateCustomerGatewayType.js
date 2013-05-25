var Modeler = require("../Modeler.js");
var className = 'TypeCreateCustomerGatewayType';

var TypeCreateCustomerGatewayType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  type: {
      type: "string",
      wsdlDefinition: {
        name: "type",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ipAddress: {
      type: "string",
      wsdlDefinition: {
        name: "ipAddress",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    bgpAsn: {
      type: "number",
      wsdlDefinition: {
        name: "bgpAsn",
        type: "xs:int",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateCustomerGatewayType;
Modeler.register(TypeCreateCustomerGatewayType, "TypeCreateCustomerGatewayType");
