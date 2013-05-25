var Modeler = require("../Modeler.js");
var className = 'TypeInstanceMonitoringStateType';

var TypeInstanceMonitoringStateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  state: {
      type: "string",
      wsdlDefinition: {
        name: "state",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceMonitoringStateType;
Modeler.register(TypeInstanceMonitoringStateType, "TypeInstanceMonitoringStateType");
