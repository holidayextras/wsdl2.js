var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSpotInstanceRequestsResponseType';

var TypeDescribeSpotInstanceRequestsResponseType = function(json, parentObj) {
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
    spotInstanceRequestSet: {
      type: "TypeSpotInstanceRequestSetType",
      wsdlDefinition: {
        name: "spotInstanceRequestSet",
        type: "tns:SpotInstanceRequestSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSpotInstanceRequestsResponseType;
Modeler.register(TypeDescribeSpotInstanceRequestsResponseType, "TypeDescribeSpotInstanceRequestsResponseType");
