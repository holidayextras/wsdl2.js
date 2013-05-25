var Modeler = require("../Modeler.js");
var className = 'TypeVpcIdSetItemType';

var TypeVpcIdSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  vpcId: {
      type: "string",
      wsdlDefinition: {
        name: "vpcId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVpcIdSetItemType;
Modeler.register(TypeVpcIdSetItemType, "TypeVpcIdSetItemType");
