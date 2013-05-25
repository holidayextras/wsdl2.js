var Modeler = require("../Modeler.js");
var className = 'ElementDescribeLicensesResponse';

var ElementDescribeLicensesResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeLicensesResponse: {
      type: "TypeDescribeLicensesResponseType",
      wsdlDefinition: {
        name: "DescribeLicensesResponse",
        type: "tns:DescribeLicensesResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeLicensesResponse;
Modeler.register(ElementDescribeLicensesResponse, "ElementDescribeLicensesResponse");
