var Modeler = require("../Modeler.js");
var className = 'ElementCreateVpcResponse';

var ElementCreateVpcResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateVpcResponse: {
      type: "TypeCreateVpcResponseType",
      wsdlDefinition: {
        name: "CreateVpcResponse",
        type: "tns:CreateVpcResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateVpcResponse;
Modeler.register(ElementCreateVpcResponse, "ElementCreateVpcResponse");
