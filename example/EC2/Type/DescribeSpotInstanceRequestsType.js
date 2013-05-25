var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSpotInstanceRequestsType';

var TypeDescribeSpotInstanceRequestsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  spotInstanceRequestIdSet: {
      type: "TypeSpotInstanceRequestIdSetType",
      wsdlDefinition: {
        name: "spotInstanceRequestIdSet",
        type: "tns:SpotInstanceRequestIdSetType"
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

module.exports = TypeDescribeSpotInstanceRequestsType;
Modeler.register(TypeDescribeSpotInstanceRequestsType, "TypeDescribeSpotInstanceRequestsType");
