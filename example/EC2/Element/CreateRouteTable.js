var Modeler = require("../Modeler.js");
var className = 'ElementCreateRouteTable';

var ElementCreateRouteTable = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateRouteTable: {
      type: "TypeCreateRouteTableType",
      wsdlDefinition: {
        name: "CreateRouteTable",
        type: "tns:CreateRouteTableType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateRouteTable;
Modeler.register(ElementCreateRouteTable, "ElementCreateRouteTable");
