var Modeler = require("../Modeler.js");
var className = 'TypeUserDataType';

var TypeUserDataType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  data: {
      type: "string",
      wsdlDefinition: {
        name: "data",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUserDataType;
Modeler.register(TypeUserDataType, "TypeUserDataType");
