var Modeler = require("../Modeler.js");
var className = 'TypeFilterType';

var TypeFilterType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  name: {
      type: "string",
      wsdlDefinition: {
        name: "name",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    valueSet: {
      type: "TypeValueSetType",
      wsdlDefinition: {
        name: "valueSet",
        type: "tns:ValueSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFilterType;
Modeler.register(TypeFilterType, "TypeFilterType");
