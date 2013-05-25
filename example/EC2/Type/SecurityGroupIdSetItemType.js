var Modeler = require("../Modeler.js");
var className = 'TypeSecurityGroupIdSetItemType';

var TypeSecurityGroupIdSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  groupId: {
      type: "string",
      wsdlDefinition: {
        name: "groupId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSecurityGroupIdSetItemType;
Modeler.register(TypeSecurityGroupIdSetItemType, "TypeSecurityGroupIdSetItemType");
