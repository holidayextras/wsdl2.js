var Modeler = require("../Modeler.js");
var className = 'ElementDeactivateLicenseResponse';

var ElementDeactivateLicenseResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeactivateLicenseResponse: {
      type: "TypeDeactivateLicenseResponseType",
      wsdlDefinition: {
        name: "DeactivateLicenseResponse",
        type: "tns:DeactivateLicenseResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeactivateLicenseResponse;
Modeler.register(ElementDeactivateLicenseResponse, "ElementDeactivateLicenseResponse");
