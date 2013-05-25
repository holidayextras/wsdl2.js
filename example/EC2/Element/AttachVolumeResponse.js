var Modeler = require("../Modeler.js");
var className = 'ElementAttachVolumeResponse';

var ElementAttachVolumeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AttachVolumeResponse: {
      type: "TypeAttachVolumeResponseType",
      wsdlDefinition: {
        name: "AttachVolumeResponse",
        type: "tns:AttachVolumeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAttachVolumeResponse;
Modeler.register(ElementAttachVolumeResponse, "ElementAttachVolumeResponse");
