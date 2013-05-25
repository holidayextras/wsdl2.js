var Modeler = require("../Modeler.js");
var className = 'TypeModifyVpcAttributeType';

var TypeModifyVpcAttributeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  enableDnsSupport: {
      type: "TypeAttributeBooleanValueType",
      wsdlDefinition: {
        name: "enableDnsSupport",
        type: "tns:AttributeBooleanValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    enableDnsHostnames: {
      type: "TypeAttributeBooleanValueType",
      wsdlDefinition: {
        name: "enableDnsHostnames",
        type: "tns:AttributeBooleanValueType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeModifyVpcAttributeType;
Modeler.register(TypeModifyVpcAttributeType, "TypeModifyVpcAttributeType");
