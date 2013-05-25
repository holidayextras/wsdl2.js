var Modeler = require("../Modeler.js");
var className = 'ElementActivateLicenseResponse';

var ElementActivateLicenseResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ActivateLicenseResponse: {
      type: "TypeActivateLicenseResponseType",
      wsdlDefinition: {
        name: "ActivateLicenseResponse",
        type: "tns:ActivateLicenseResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementActivateLicenseResponse;
Modeler.register(ElementActivateLicenseResponse, "ElementActivateLicenseResponse");
