var Modeler = require("../Modeler.js");
var className = 'ElementGetPasswordData';

var ElementGetPasswordData = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  GetPasswordData: {
      type: "TypeGetPasswordDataType",
      wsdlDefinition: {
        name: "GetPasswordData",
        type: "tns:GetPasswordDataType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGetPasswordData;
Modeler.register(ElementGetPasswordData, "ElementGetPasswordData");
