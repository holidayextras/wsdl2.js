var Modeler = require("../Modeler.js");
var className = 'TypeResetInstanceAttributeType';

var TypeResetInstanceAttributeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instanceId: {
      type: "string",
      wsdlDefinition: {
        name: "instanceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeResetInstanceAttributeType;
Modeler.register(TypeResetInstanceAttributeType, "TypeResetInstanceAttributeType");
