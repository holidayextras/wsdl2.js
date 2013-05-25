var Modeler = require("../Modeler.js");
var className = 'TypeDescribeInternetGatewaysType';

var TypeDescribeInternetGatewaysType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  internetGatewayIdSet: {
      type: "TypeInternetGatewayIdSetType",
      wsdlDefinition: {
        name: "internetGatewayIdSet",
        type: "tns:InternetGatewayIdSetType"
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

module.exports = TypeDescribeInternetGatewaysType;
Modeler.register(TypeDescribeInternetGatewaysType, "TypeDescribeInternetGatewaysType");
