var Modeler = require("../Modeler.js");
var className = 'ElementDeleteSubnetResponse';

var ElementDeleteSubnetResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteSubnetResponse: {
      type: "TypeDeleteSubnetResponseType",
      wsdlDefinition: {
        name: "DeleteSubnetResponse",
        type: "tns:DeleteSubnetResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteSubnetResponse;
Modeler.register(ElementDeleteSubnetResponse, "ElementDeleteSubnetResponse");
