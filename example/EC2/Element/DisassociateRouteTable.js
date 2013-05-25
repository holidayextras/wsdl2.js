var Modeler = require("../Modeler.js");
var className = 'ElementDisassociateRouteTable';

var ElementDisassociateRouteTable = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DisassociateRouteTable: {
      type: "TypeDisassociateRouteTableType",
      wsdlDefinition: {
        name: "DisassociateRouteTable",
        type: "tns:DisassociateRouteTableType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDisassociateRouteTable;
Modeler.register(ElementDisassociateRouteTable, "ElementDisassociateRouteTable");
