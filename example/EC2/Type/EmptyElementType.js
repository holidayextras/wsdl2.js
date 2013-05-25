var Modeler = require("../Modeler.js");
var className = 'TypeEmptyElementType';

var TypeEmptyElementType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  EmptyElementType: {
      type: "string",
      wsdlDefinition: {
        name: "EmptyElementType",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEmptyElementType;
Modeler.register(TypeEmptyElementType, "TypeEmptyElementType");
