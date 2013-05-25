var Modeler = require("../Modeler.js");
var className = 'TypeCreateVpcResponseType';

var TypeCreateVpcResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    vpc: {
      type: "TypeVpcType",
      wsdlDefinition: {
        name: "vpc",
        type: "tns:VpcType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreateVpcResponseType;
Modeler.register(TypeCreateVpcResponseType, "TypeCreateVpcResponseType");
