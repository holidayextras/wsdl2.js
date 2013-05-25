var Modeler = require("../Modeler.js");
var className = 'TypeLicenseCapacitySetItemType';

var TypeLicenseCapacitySetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  capacity: {
      type: "number",
      wsdlDefinition: {
        name: "capacity",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceCapacity: {
      type: "number",
      wsdlDefinition: {
        name: "instanceCapacity",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    earliestAllowedDeactivationTime: {
      type: "date",
      wsdlDefinition: {
        name: "earliestAllowedDeactivationTime",
        type: "xs:dateTime",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLicenseCapacitySetItemType;
Modeler.register(TypeLicenseCapacitySetItemType, "TypeLicenseCapacitySetItemType");
