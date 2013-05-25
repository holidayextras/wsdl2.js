var Modeler = require("../Modeler.js");
var className = 'TypeNetworkAclEntryType';

var TypeNetworkAclEntryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ruleNumber: {
      type: "number",
      wsdlDefinition: {
        name: "ruleNumber",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    protocol: {
      type: "string",
      wsdlDefinition: {
        name: "protocol",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ruleAction: {
      type: "string",
      wsdlDefinition: {
        name: "ruleAction",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    egress: {
      type: "boolean",
      wsdlDefinition: {
        name: "egress",
        type: "xs:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    cidrBlock: {
      type: "string",
      wsdlDefinition: {
        name: "cidrBlock",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    icmpTypeCode: {
      type: "TypeIcmpTypeCodeType",
      wsdlDefinition: {
        name: "icmpTypeCode",
        type: "tns:IcmpTypeCodeType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    portRange: {
      type: "TypePortRangeType",
      wsdlDefinition: {
        name: "portRange",
        type: "tns:PortRangeType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNetworkAclEntryType;
Modeler.register(TypeNetworkAclEntryType, "TypeNetworkAclEntryType");
