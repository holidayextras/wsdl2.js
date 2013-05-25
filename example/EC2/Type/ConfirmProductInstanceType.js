var Modeler = require("../Modeler.js");
var className = 'TypeConfirmProductInstanceType';

var TypeConfirmProductInstanceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  productCode: {
      type: "string",
      wsdlDefinition: {
        name: "productCode",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
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

module.exports = TypeConfirmProductInstanceType;
Modeler.register(TypeConfirmProductInstanceType, "TypeConfirmProductInstanceType");
