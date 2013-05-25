var Modeler = require("../Modeler.js");
var className = 'TypeDescribeInternetGatewaysResponseType';

var TypeDescribeInternetGatewaysResponseType = function(json, parentObj) {
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
    internetGatewaySet: {
      type: "TypeInternetGatewaySetType",
      wsdlDefinition: {
        name: "internetGatewaySet",
        type: "tns:InternetGatewaySetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeInternetGatewaysResponseType;
Modeler.register(TypeDescribeInternetGatewaysResponseType, "TypeDescribeInternetGatewaysResponseType");
