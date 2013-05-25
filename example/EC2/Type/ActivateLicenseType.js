var Modeler = require("../Modeler.js");
var className = 'TypeActivateLicenseType';

var TypeActivateLicenseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  licenseId: {
      type: "string",
      wsdlDefinition: {
        name: "licenseId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    capacity: {
      type: "number",
      wsdlDefinition: {
        name: "capacity",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeActivateLicenseType;
Modeler.register(TypeActivateLicenseType, "TypeActivateLicenseType");
