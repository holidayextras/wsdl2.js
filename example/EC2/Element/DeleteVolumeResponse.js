var Modeler = require("../Modeler.js");
var className = 'ElementDeleteVolumeResponse';

var ElementDeleteVolumeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DeleteVolumeResponse: {
      type: "TypeDeleteVolumeResponseType",
      wsdlDefinition: {
        name: "DeleteVolumeResponse",
        type: "tns:DeleteVolumeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteVolumeResponse;
Modeler.register(ElementDeleteVolumeResponse, "ElementDeleteVolumeResponse");
