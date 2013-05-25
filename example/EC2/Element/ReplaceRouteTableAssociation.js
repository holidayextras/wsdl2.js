var Modeler = require("../Modeler.js");
var className = 'ElementReplaceRouteTableAssociation';

var ElementReplaceRouteTableAssociation = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReplaceRouteTableAssociation: {
      type: "TypeReplaceRouteTableAssociationType",
      wsdlDefinition: {
        name: "ReplaceRouteTableAssociation",
        type: "tns:ReplaceRouteTableAssociationType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReplaceRouteTableAssociation;
Modeler.register(ElementReplaceRouteTableAssociation, "ElementReplaceRouteTableAssociation");
