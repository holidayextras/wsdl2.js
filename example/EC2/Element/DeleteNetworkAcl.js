var Modeler = require("../Modeler.js");
var className = 'ElementDeleteNetworkAcl';

var ElementDeleteNetworkAcl = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteNetworkAcl: {
      type: "TypeDeleteNetworkAclType",
      wsdlDefinition: {
        name: "DeleteNetworkAcl",
        type: "tns:DeleteNetworkAclType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteNetworkAcl;
Modeler.register(ElementDeleteNetworkAcl, "ElementDeleteNetworkAcl");
