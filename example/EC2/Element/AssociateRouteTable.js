var Modeler = require("../Modeler.js");
var className = 'ElementAssociateRouteTable';

var ElementAssociateRouteTable = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AssociateRouteTable: {
      type: "TypeAssociateRouteTableType",
      wsdlDefinition: {
        name: "AssociateRouteTable",
        type: "tns:AssociateRouteTableType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssociateRouteTable;
Modeler.register(ElementAssociateRouteTable, "ElementAssociateRouteTable");
