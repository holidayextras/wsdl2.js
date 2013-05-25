var Modeler = require("../Modeler.js");
var className = 'ElementEnableVolumeIOResponse';

var ElementEnableVolumeIOResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  EnableVolumeIOResponse: {
      type: "TypeEnableVolumeIOResponseType",
      wsdlDefinition: {
        name: "EnableVolumeIOResponse",
        type: "tns:EnableVolumeIOResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEnableVolumeIOResponse;
Modeler.register(ElementEnableVolumeIOResponse, "ElementEnableVolumeIOResponse");
