var Modeler = require("../Modeler.js");
var className = 'TypeInstanceLicenseResponseType';

var TypeInstanceLicenseResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  pool: {
      type: "string",
      wsdlDefinition: {
        name: "pool",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceLicenseResponseType;
Modeler.register(TypeInstanceLicenseResponseType, "TypeInstanceLicenseResponseType");
