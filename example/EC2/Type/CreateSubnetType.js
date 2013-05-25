var Modeler = require("../Modeler.js");
var className = 'TypeCreateSubnetType';

var TypeCreateSubnetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    cidrBlock: {
      type: "string",
      wsdlDefinition: {
        name: "cidrBlock",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    availabilityZone: {
      type: "string",
      wsdlDefinition: {
        name: "availabilityZone",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateSubnetType;
Modeler.register(TypeCreateSubnetType, "TypeCreateSubnetType");
