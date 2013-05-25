var Modeler = require("../Modeler.js");
var className = 'TypeCustomerGatewayType';

var TypeCustomerGatewayType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  customerGatewayId: {
      type: "string",
      wsdlDefinition: {
        name: "customerGatewayId",
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
    },
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
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerGatewayType;
Modeler.register(TypeCustomerGatewayType, "TypeCustomerGatewayType");
