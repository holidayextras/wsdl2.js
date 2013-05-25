var Modeler = require("../Modeler.js");
var className = 'TypeCreateVpcType';

var TypeCreateVpcType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  cidrBlock: {
      type: "string",
      wsdlDefinition: {
        name: "cidrBlock",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceTenancy: {
      type: "string",
      wsdlDefinition: {
        name: "instanceTenancy",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateVpcType;
Modeler.register(TypeCreateVpcType, "TypeCreateVpcType");
