var Modeler = require("../Modeler.js");
var className = 'TypeStartInstancesResponseType';

var TypeStartInstancesResponseType = function(json, parentObj) {
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
    instancesSet: {
      type: "TypeInstanceStateChangeSetType",
      wsdlDefinition: {
        name: "instancesSet",
        type: "tns:InstanceStateChangeSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeStartInstancesResponseType;
Modeler.register(TypeStartInstancesResponseType, "TypeStartInstancesResponseType");
