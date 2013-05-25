var Modeler = require("../Modeler.js");
var className = 'TypeCreatePlacementGroupType';

var TypeCreatePlacementGroupType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  groupName: {
      type: "string",
      wsdlDefinition: {
        name: "groupName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    strategy: {
      type: "string",
      wsdlDefinition: {
        name: "strategy",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreatePlacementGroupType;
Modeler.register(TypeCreatePlacementGroupType, "TypeCreatePlacementGroupType");
