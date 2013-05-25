var Modeler = require("../Modeler.js");
var className = 'ElementDescribeRegions';

var ElementDescribeRegions = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeRegions: {
      type: "TypeDescribeRegionsType",
      wsdlDefinition: {
        name: "DescribeRegions",
        type: "tns:DescribeRegionsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeRegions;
Modeler.register(ElementDescribeRegions, "ElementDescribeRegions");
