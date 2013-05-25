var Modeler = require("../Modeler.js");
var className = 'ElementAssociateDhcpOptionsResponse';

var ElementAssociateDhcpOptionsResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AssociateDhcpOptionsResponse: {
      type: "TypeAssociateDhcpOptionsResponseType",
      wsdlDefinition: {
        name: "AssociateDhcpOptionsResponse",
        type: "tns:AssociateDhcpOptionsResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssociateDhcpOptionsResponse;
Modeler.register(ElementAssociateDhcpOptionsResponse, "ElementAssociateDhcpOptionsResponse");
