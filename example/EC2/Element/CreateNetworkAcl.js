var Modeler = require("../Modeler.js");
var className = 'ElementCreateNetworkAcl';

var ElementCreateNetworkAcl = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateNetworkAcl: {
      type: "TypeCreateNetworkAclType",
      wsdlDefinition: {
        name: "CreateNetworkAcl",
        type: "tns:CreateNetworkAclType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateNetworkAcl;
Modeler.register(ElementCreateNetworkAcl, "ElementCreateNetworkAcl");
