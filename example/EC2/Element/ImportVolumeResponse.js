var Modeler = require("../Modeler.js");
var className = 'ElementImportVolumeResponse';

var ElementImportVolumeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ImportVolumeResponse: {
      type: "TypeImportVolumeResponseType",
      wsdlDefinition: {
        name: "ImportVolumeResponse",
        type: "tns:ImportVolumeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementImportVolumeResponse;
Modeler.register(ElementImportVolumeResponse, "ElementImportVolumeResponse");
