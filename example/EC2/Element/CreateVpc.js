var Modeler = require("../Modeler.js");
var className = 'ElementCreateVpc';

var ElementCreateVpc = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateVpc: {
      type: "TypeCreateVpcType",
      wsdlDefinition: {
        name: "CreateVpc",
        type: "tns:CreateVpcType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateVpc;
Modeler.register(ElementCreateVpc, "ElementCreateVpc");
