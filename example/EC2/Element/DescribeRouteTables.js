var Modeler = require("../Modeler.js");
var className = 'ElementDescribeRouteTables';

var ElementDescribeRouteTables = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeRouteTables: {
      type: "TypeDescribeRouteTablesType",
      wsdlDefinition: {
        name: "DescribeRouteTables",
        type: "tns:DescribeRouteTablesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeRouteTables;
Modeler.register(ElementDescribeRouteTables, "ElementDescribeRouteTables");
