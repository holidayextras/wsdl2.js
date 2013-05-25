var Modeler = require("../Modeler.js");
var className = 'ElementDeleteRouteTable';

var ElementDeleteRouteTable = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteRouteTable: {
      type: "TypeDeleteRouteTableType",
      wsdlDefinition: {
        name: "DeleteRouteTable",
        type: "tns:DeleteRouteTableType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteRouteTable;
Modeler.register(ElementDeleteRouteTable, "ElementDeleteRouteTable");
