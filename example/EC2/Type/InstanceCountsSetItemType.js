var Modeler = require("../Modeler.js");
var className = 'TypeInstanceCountsSetItemType';

var TypeInstanceCountsSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceCount: {
      type: "number",
      wsdlDefinition: {
        name: "instanceCount",
        type: "xs:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceCountsSetItemType;
Modeler.register(TypeInstanceCountsSetItemType, "TypeInstanceCountsSetItemType");
