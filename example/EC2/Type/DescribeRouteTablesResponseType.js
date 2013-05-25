var Modeler = require("../Modeler.js");
var className = 'TypeDescribeRouteTablesResponseType';

var TypeDescribeRouteTablesResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  requestId: {
      type: "string",
      wsdlDefinition: {
        name: "requestId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    routeTableSet: {
      type: "TypeRouteTableSetType",
      wsdlDefinition: {
        name: "routeTableSet",
        type: "tns:RouteTableSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeRouteTablesResponseType;
Modeler.register(TypeDescribeRouteTablesResponseType, "TypeDescribeRouteTablesResponseType");
