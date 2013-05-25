var Modeler = require("../Modeler.js");
var className = 'ElementDescribeLicenses';

var ElementDescribeLicenses = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeLicenses: {
      type: "TypeDescribeLicensesType",
      wsdlDefinition: {
        name: "DescribeLicenses",
        type: "tns:DescribeLicensesType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeLicenses;
Modeler.register(ElementDescribeLicenses, "ElementDescribeLicenses");
