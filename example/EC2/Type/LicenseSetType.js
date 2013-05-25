var Modeler = require("../Modeler.js");
var className = 'TypeLicenseSetType';

var TypeLicenseSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeLicenseSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:LicenseSetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLicenseSetType;
Modeler.register(TypeLicenseSetType, "TypeLicenseSetType");
