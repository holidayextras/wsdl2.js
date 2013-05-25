var Modeler = require("../Modeler.js");
var className = 'TypeUserIdGroupPairType';

var TypeUserIdGroupPairType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  userId: {
      type: "string",
      wsdlDefinition: {
        name: "userId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    groupId: {
      type: "string",
      wsdlDefinition: {
        name: "groupId",
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

module.exports = TypeUserIdGroupPairType;
Modeler.register(TypeUserIdGroupPairType, "TypeUserIdGroupPairType");
