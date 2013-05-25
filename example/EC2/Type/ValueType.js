var Modeler = require("../Modeler.js");
var className = 'TypeValueType';

var TypeValueType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  value: {
      type: "string",
      wsdlDefinition: {
        name: "value",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeValueType;
Modeler.register(TypeValueType, "TypeValueType");
