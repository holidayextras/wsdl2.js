var Modeler = require("../Modeler.js");
var className = 'ElementCreateSubnetResponse';

var ElementCreateSubnetResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateSubnetResponse: {
      type: "TypeCreateSubnetResponseType",
      wsdlDefinition: {
        name: "CreateSubnetResponse",
        type: "tns:CreateSubnetResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateSubnetResponse;
Modeler.register(ElementCreateSubnetResponse, "ElementCreateSubnetResponse");
