var Modeler = require("../Modeler.js");
var className = 'TypeInstanceLicenseRequestType';

var TypeInstanceLicenseRequestType = function(json, parentObj) {
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

module.exports = TypeInstanceLicenseRequestType;
Modeler.register(TypeInstanceLicenseRequestType, "TypeInstanceLicenseRequestType");
