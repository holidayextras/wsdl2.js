var Modeler = require("../Modeler.js");
var className = 'TypeLicenseIdSetType';

var TypeLicenseIdSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeLicenseIdSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:LicenseIdSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLicenseIdSetType;
Modeler.register(TypeLicenseIdSetType, "TypeLicenseIdSetType");
