var Modeler = require("../Modeler.js");
var className = 'TypeDescribeRegionsResponseType';

var TypeDescribeRegionsResponseType = function(json, parentObj) {
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
    regionInfo: {
      type: "TypeRegionSetType",
      wsdlDefinition: {
        name: "regionInfo",
        type: "tns:RegionSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeRegionsResponseType;
Modeler.register(TypeDescribeRegionsResponseType, "TypeDescribeRegionsResponseType");
