var Modeler = require("../Modeler.js");
var className = 'TypeInstanceStatusEventsSetType';

var TypeInstanceStatusEventsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeInstanceStatusEventType",
      wsdlDefinition: {
        name: "item",
        type: "tns:InstanceStatusEventType",
        minOccurs: 0,
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInstanceStatusEventsSetType;
Modeler.register(TypeInstanceStatusEventsSetType, "TypeInstanceStatusEventsSetType");
