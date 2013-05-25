var Modeler = require("../Modeler.js");
var className = 'ElementDeleteVpcResponse';

var ElementDeleteVpcResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteVpcResponse: {
      type: "TypeDeleteVpcResponseType",
      wsdlDefinition: {
        name: "DeleteVpcResponse",
        type: "tns:DeleteVpcResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteVpcResponse;
Modeler.register(ElementDeleteVpcResponse, "ElementDeleteVpcResponse");
