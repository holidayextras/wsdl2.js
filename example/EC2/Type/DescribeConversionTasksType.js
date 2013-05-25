var Modeler = require("../Modeler.js");
var className = 'TypeDescribeConversionTasksType';

var TypeDescribeConversionTasksType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  conversionTaskIdSet: {
      type: "TypeConversionTaskIdSetType",
      wsdlDefinition: {
        name: "conversionTaskIdSet",
        type: "tns:ConversionTaskIdSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeConversionTasksType;
Modeler.register(TypeDescribeConversionTasksType, "TypeDescribeConversionTasksType");
