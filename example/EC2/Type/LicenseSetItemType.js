var Modeler = require("../Modeler.js");
var className = 'TypeLicenseSetItemType';

var TypeLicenseSetItemType = function(json, parentObj) {
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
    type: {
      type: "string",
      wsdlDefinition: {
        name: "type",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    pool: {
      type: "string",
      wsdlDefinition: {
        name: "pool",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    capacitySet: {
      type: "TypeLicenseCapacitySetType",
      wsdlDefinition: {
        name: "capacitySet",
        type: "tns:LicenseCapacitySetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLicenseSetItemType;
Modeler.register(TypeLicenseSetItemType, "TypeLicenseSetItemType");
