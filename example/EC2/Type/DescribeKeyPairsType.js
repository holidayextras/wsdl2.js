var Modeler = require("../Modeler.js");
var className = 'TypeDescribeKeyPairsType';

var TypeDescribeKeyPairsType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  keySet: {
      type: "TypeDescribeKeyPairsInfoType",
      wsdlDefinition: {
        name: "keySet",
        type: "tns:DescribeKeyPairsInfoType"
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

module.exports = TypeDescribeKeyPairsType;
Modeler.register(TypeDescribeKeyPairsType, "TypeDescribeKeyPairsType");
