var Modeler = require("../Modeler.js");
var className = 'TypeDescribeRegionsSetItemType';

var TypeDescribeRegionsSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  regionName: {
      type: "string",
      wsdlDefinition: {
        name: "regionName",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeRegionsSetItemType;
Modeler.register(TypeDescribeRegionsSetItemType, "TypeDescribeRegionsSetItemType");
