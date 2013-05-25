var Modeler = require("../Modeler.js");
var className = 'TypeDescribeRouteTablesType';

var TypeDescribeRouteTablesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  routeTableIdSet: {
      type: "TypeRouteTableIdSetType",
      wsdlDefinition: {
        name: "routeTableIdSet",
        type: "tns:RouteTableIdSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    filterSet: {
      type: "TypeFilterSetType",
      wsdlDefinition: {
        name: "filterSet",
        type: "tns:FilterSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeRouteTablesType;
Modeler.register(TypeDescribeRouteTablesType, "TypeDescribeRouteTablesType");
