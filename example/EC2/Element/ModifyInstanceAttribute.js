var Modeler = require("../Modeler.js");
var className = 'ElementModifyInstanceAttribute';

var ElementModifyInstanceAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifyInstanceAttribute: {
      type: "TypeModifyInstanceAttributeType",
      wsdlDefinition: {
        name: "ModifyInstanceAttribute",
        type: "tns:ModifyInstanceAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifyInstanceAttribute;
Modeler.register(ElementModifyInstanceAttribute, "ElementModifyInstanceAttribute");
