var Modeler = require("../Modeler.js");
var className = 'TypePlacementGroupInfoType';

var TypePlacementGroupInfoType = function(json, parentObj) {
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
    },
    state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePlacementGroupInfoType;
Modeler.register(TypePlacementGroupInfoType, "TypePlacementGroupInfoType");
