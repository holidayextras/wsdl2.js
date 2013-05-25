var Modeler = require("../Modeler.js");
var className = 'TypeInstanceExportTaskResponseType';

var TypeInstanceExportTaskResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instanceId: {
      type: "string",
      wsdlDefinition: {
        name: "instanceId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    targetEnvironment: {
      type: "string",
      wsdlDefinition: {
        name: "targetEnvironment",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceExportTaskResponseType;
Modeler.register(TypeInstanceExportTaskResponseType, "TypeInstanceExportTaskResponseType");
