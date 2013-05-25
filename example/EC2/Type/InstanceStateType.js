var Modeler = require("../Modeler.js");
var className = 'TypeInstanceStateType';

var TypeInstanceStateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  code: {
      type: "number",
      wsdlDefinition: {
        name: "code",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    name: {
      type: "string",
      wsdlDefinition: {
        name: "name",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceStateType;
Modeler.register(TypeInstanceStateType, "TypeInstanceStateType");
