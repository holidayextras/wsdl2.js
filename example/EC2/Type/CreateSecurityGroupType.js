var Modeler = require("../Modeler.js");
var className = 'TypeCreateSecurityGroupType';

var TypeCreateSecurityGroupType = function(json, parentObj) {
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
    groupDescription: {
      type: "string",
      wsdlDefinition: {
        name: "groupDescription",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateSecurityGroupType;
Modeler.register(TypeCreateSecurityGroupType, "TypeCreateSecurityGroupType");
