var Modeler = require("../Modeler.js");
var className = 'TypeDescribeLicensesResponseType';

var TypeDescribeLicensesResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    licenseSet: {
      type: "TypeLicenseSetType",
      wsdlDefinition: {
        name: "licenseSet",
        type: "tns:LicenseSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeLicensesResponseType;
Modeler.register(TypeDescribeLicensesResponseType, "TypeDescribeLicensesResponseType");
