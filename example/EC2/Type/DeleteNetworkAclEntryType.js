var Modeler = require("../Modeler.js");
var className = 'TypeDeleteNetworkAclEntryType';

var TypeDeleteNetworkAclEntryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  networkAclId: {
      type: "string",
      wsdlDefinition: {
        name: "networkAclId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ruleNumber: {
      type: "number",
      wsdlDefinition: {
        name: "ruleNumber",
        type: "xs:int"
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
    }
	}, parentObj, json);
};

module.exports = TypeDeleteNetworkAclEntryType;
Modeler.register(TypeDeleteNetworkAclEntryType, "TypeDeleteNetworkAclEntryType");
