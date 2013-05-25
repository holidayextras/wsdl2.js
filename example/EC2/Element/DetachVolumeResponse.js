var Modeler = require("../Modeler.js");
var className = 'ElementDetachVolumeResponse';

var ElementDetachVolumeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DetachVolumeResponse: {
      type: "TypeDetachVolumeResponseType",
      wsdlDefinition: {
        name: "DetachVolumeResponse",
        type: "tns:DetachVolumeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDetachVolumeResponse;
Modeler.register(ElementDetachVolumeResponse, "ElementDetachVolumeResponse");
