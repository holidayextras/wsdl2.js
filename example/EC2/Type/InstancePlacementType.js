var Modeler = require("../Modeler.js");
var className = 'TypeInstancePlacementType';

var TypeInstancePlacementType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  availabilityZone: {
      type: "string",
      wsdlDefinition: {
        name: "availabilityZone",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupName: {
      type: "string",
      wsdlDefinition: {
        name: "groupName",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstancePlacementType;
Modeler.register(TypeInstancePlacementType, "TypeInstancePlacementType");
