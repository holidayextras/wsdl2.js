var Modeler = require("../Modeler.js");
var className = 'TypeDescribeRegionsType';

var TypeDescribeRegionsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  regionSet: {
      type: "TypeDescribeRegionsSetType",
      wsdlDefinition: {
        name: "regionSet",
        type: "tns:DescribeRegionsSetType"
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

module.exports = TypeDescribeRegionsType;
Modeler.register(TypeDescribeRegionsType, "TypeDescribeRegionsType");
