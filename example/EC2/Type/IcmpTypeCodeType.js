var Modeler = require("../Modeler.js");
var className = 'TypeIcmpTypeCodeType';

var TypeIcmpTypeCodeType = function(json, parentObj) {
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
    type: {
      type: "number",
      wsdlDefinition: {
        name: "type",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeIcmpTypeCodeType;
Modeler.register(TypeIcmpTypeCodeType, "TypeIcmpTypeCodeType");
