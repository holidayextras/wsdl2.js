var Modeler = require("../Modeler.js");
var className = 'ElementDeleteVpc';

var ElementDeleteVpc = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteVpc: {
      type: "TypeDeleteVpcType",
      wsdlDefinition: {
        name: "DeleteVpc",
        type: "tns:DeleteVpcType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteVpc;
Modeler.register(ElementDeleteVpc, "ElementDeleteVpc");
