var Modeler = require("../Modeler.js");
var className = 'ElementGetPasswordDataResponse';

var ElementGetPasswordDataResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  GetPasswordDataResponse: {
      type: "TypeGetPasswordDataResponseType",
      wsdlDefinition: {
        name: "GetPasswordDataResponse",
        type: "tns:GetPasswordDataResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGetPasswordDataResponse;
Modeler.register(ElementGetPasswordDataResponse, "ElementGetPasswordDataResponse");
