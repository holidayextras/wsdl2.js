var Modeler = require("../Modeler.js");
var className = 'ElementModifyImageAttribute';

var ElementModifyImageAttribute = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifyImageAttribute: {
      type: "TypeModifyImageAttributeType",
      wsdlDefinition: {
        name: "ModifyImageAttribute",
        type: "tns:ModifyImageAttributeType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifyImageAttribute;
Modeler.register(ElementModifyImageAttribute, "ElementModifyImageAttribute");
