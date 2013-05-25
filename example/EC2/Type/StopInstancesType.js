var Modeler = require("../Modeler.js");
var className = 'TypeStopInstancesType';

var TypeStopInstancesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  instancesSet: {
      type: "TypeInstanceIdSetType",
      wsdlDefinition: {
        name: "instancesSet",
        type: "tns:InstanceIdSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    force: {
      type: "boolean",
      wsdlDefinition: {
        name: "force",
        type: "xs:boolean",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeStopInstancesType;
Modeler.register(TypeStopInstancesType, "TypeStopInstancesType");
