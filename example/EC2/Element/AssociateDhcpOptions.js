var Modeler = require("../Modeler.js");
var className = 'ElementAssociateDhcpOptions';

var ElementAssociateDhcpOptions = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AssociateDhcpOptions: {
      type: "TypeAssociateDhcpOptionsType",
      wsdlDefinition: {
        name: "AssociateDhcpOptions",
        type: "tns:AssociateDhcpOptionsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssociateDhcpOptions;
Modeler.register(ElementAssociateDhcpOptions, "ElementAssociateDhcpOptions");
