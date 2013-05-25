var Modeler = require("../Modeler.js");
var className = 'TypeResourceIdSetItemType';

var TypeResourceIdSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  resourceId: {
      type: "string",
      wsdlDefinition: {
        name: "resourceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeResourceIdSetItemType;
Modeler.register(TypeResourceIdSetItemType, "TypeResourceIdSetItemType");
