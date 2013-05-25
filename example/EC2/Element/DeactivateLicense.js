var Modeler = require("../Modeler.js");
var className = 'ElementDeactivateLicense';

var ElementDeactivateLicense = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeactivateLicense: {
      type: "TypeDeactivateLicenseType",
      wsdlDefinition: {
        name: "DeactivateLicense",
        type: "tns:DeactivateLicenseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeactivateLicense;
Modeler.register(ElementDeactivateLicense, "ElementDeactivateLicense");
