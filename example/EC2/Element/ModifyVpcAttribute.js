var Modeler = require("../Modeler.js");
var className = 'ElementModifyVpcAttribute';

var ElementModifyVpcAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifyVpcAttribute: {
      type: "TypeModifyVpcAttributeType",
      wsdlDefinition: {
        name: "ModifyVpcAttribute",
        type: "tns:ModifyVpcAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifyVpcAttribute;
Modeler.register(ElementModifyVpcAttribute, "ElementModifyVpcAttribute");
