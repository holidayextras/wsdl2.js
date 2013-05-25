var Modeler = require("../Modeler.js");
var className = 'TypeProductCodeItemType';

var TypeProductCodeItemType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeProductCodeItemType;
Modeler.register(TypeProductCodeItemType, "TypeProductCodeItemType");
