var Modeler = require("../Modeler.js");
var className = 'TypeCreateNetworkAclResponseType';

var TypeCreateNetworkAclResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    networkAcl: {
      type: "TypeNetworkAclType",
      wsdlDefinition: {
        name: "networkAcl",
        type: "tns:NetworkAclType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateNetworkAclResponseType;
Modeler.register(TypeCreateNetworkAclResponseType, "TypeCreateNetworkAclResponseType");
