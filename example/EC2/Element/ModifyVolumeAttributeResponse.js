var Modeler = require("../Modeler.js");
var className = 'ElementModifyVolumeAttributeResponse';

var ElementModifyVolumeAttributeResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ModifyVolumeAttributeResponse: {
      type: "TypeModifyVolumeAttributeResponseType",
      wsdlDefinition: {
        name: "ModifyVolumeAttributeResponse",
        type: "tns:ModifyVolumeAttributeResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModifyVolumeAttributeResponse;
Modeler.register(ElementModifyVolumeAttributeResponse, "ElementModifyVolumeAttributeResponse");
