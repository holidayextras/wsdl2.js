var Modeler = require("../Modeler.js");
var className = 'TypeInstanceStateChangeType';

var TypeInstanceStateChangeType = function(json, parentObj) {
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
    currentState: {
      type: "TypeInstanceStateType",
      wsdlDefinition: {
        name: "currentState",
        type: "tns:InstanceStateType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    previousState: {
      type: "TypeInstanceStateType",
      wsdlDefinition: {
        name: "previousState",
        type: "tns:InstanceStateType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceStateChangeType;
Modeler.register(TypeInstanceStateChangeType, "TypeInstanceStateChangeType");
