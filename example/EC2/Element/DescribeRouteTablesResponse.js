var Modeler = require("../Modeler.js");
var className = 'ElementDescribeRouteTablesResponse';

var ElementDescribeRouteTablesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeRouteTablesResponse: {
      type: "TypeDescribeRouteTablesResponseType",
      wsdlDefinition: {
        name: "DescribeRouteTablesResponse",
        type: "tns:DescribeRouteTablesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeRouteTablesResponse;
Modeler.register(ElementDescribeRouteTablesResponse, "ElementDescribeRouteTablesResponse");
