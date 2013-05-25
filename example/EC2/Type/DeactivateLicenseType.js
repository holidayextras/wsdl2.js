var Modeler = require("../Modeler.js");
var className = 'TypeDeactivateLicenseType';

var TypeDeactivateLicenseType = function(json, parentObj) {
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

module.exports = TypeDeactivateLicenseType;
Modeler.register(TypeDeactivateLicenseType, "TypeDeactivateLicenseType");
