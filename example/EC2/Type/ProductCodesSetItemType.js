var Modeler = require("../Modeler.js");
var className = 'TypeProductCodesSetItemType';

var TypeProductCodesSetItemType = function(json, parentObj) {
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
    type: {
      type: "string",
      wsdlDefinition: {
        name: "type",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProductCodesSetItemType;
Modeler.register(TypeProductCodesSetItemType, "TypeProductCodesSetItemType");
