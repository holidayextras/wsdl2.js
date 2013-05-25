var Modeler = require("../Modeler.js");
var className = 'TypeLicenseIdSetItemType';

var TypeLicenseIdSetItemType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeLicenseIdSetItemType;
Modeler.register(TypeLicenseIdSetItemType, "TypeLicenseIdSetItemType");
