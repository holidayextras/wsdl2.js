var Modeler = require("../Modeler.js");
var className = 'ElementReleaseAddressResponse';

var ElementReleaseAddressResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReleaseAddressResponse: {
      type: "TypeReleaseAddressResponseType",
      wsdlDefinition: {
        name: "ReleaseAddressResponse",
        type: "tns:ReleaseAddressResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReleaseAddressResponse;
Modeler.register(ElementReleaseAddressResponse, "ElementReleaseAddressResponse");
