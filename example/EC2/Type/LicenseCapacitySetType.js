var Modeler = require("../Modeler.js");
var className = 'TypeLicenseCapacitySetType';

var TypeLicenseCapacitySetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeLicenseCapacitySetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:LicenseCapacitySetItemType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLicenseCapacitySetType;
Modeler.register(TypeLicenseCapacitySetType, "TypeLicenseCapacitySetType");
