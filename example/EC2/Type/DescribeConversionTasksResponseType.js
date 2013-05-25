var Modeler = require("../Modeler.js");
var className = 'TypeDescribeConversionTasksResponseType';

var TypeDescribeConversionTasksResponseType = function(json, parentObj) {
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
    conversionTasks: {
      type: "TypeConversionTaskSetType",
      wsdlDefinition: {
        name: "conversionTasks",
        type: "tns:ConversionTaskSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeConversionTasksResponseType;
Modeler.register(TypeDescribeConversionTasksResponseType, "TypeDescribeConversionTasksResponseType");
