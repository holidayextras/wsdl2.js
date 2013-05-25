var Modeler = require("../Modeler.js");
var className = 'ElementCreateVolumeResponse';

var ElementCreateVolumeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CreateVolumeResponse: {
      type: "TypeCreateVolumeResponseType",
      wsdlDefinition: {
        name: "CreateVolumeResponse",
        type: "tns:CreateVolumeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateVolumeResponse;
Modeler.register(ElementCreateVolumeResponse, "ElementCreateVolumeResponse");
