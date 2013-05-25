var Modeler = require("../Modeler.js");
var className = 'TypeDescribeLicensesType';

var TypeDescribeLicensesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  licenseIdSet: {
      type: "TypeLicenseIdSetType",
      wsdlDefinition: {
        name: "licenseIdSet",
        type: "tns:LicenseIdSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeLicensesType;
Modeler.register(TypeDescribeLicensesType, "TypeDescribeLicensesType");
