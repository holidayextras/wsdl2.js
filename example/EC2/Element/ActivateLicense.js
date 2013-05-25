var Modeler = require("../Modeler.js");
var className = 'ElementActivateLicense';

var ElementActivateLicense = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ActivateLicense: {
      type: "TypeActivateLicenseType",
      wsdlDefinition: {
        name: "ActivateLicense",
        type: "tns:ActivateLicenseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementActivateLicense;
Modeler.register(ElementActivateLicense, "ElementActivateLicense");
