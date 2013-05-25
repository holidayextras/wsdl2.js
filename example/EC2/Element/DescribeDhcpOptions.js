var Modeler = require("../Modeler.js");
var className = 'ElementDescribeDhcpOptions';

var ElementDescribeDhcpOptions = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DescribeDhcpOptions: {
      type: "TypeDescribeDhcpOptionsType",
      wsdlDefinition: {
        name: "DescribeDhcpOptions",
        type: "tns:DescribeDhcpOptionsType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDescribeDhcpOptions;
Modeler.register(ElementDescribeDhcpOptions, "ElementDescribeDhcpOptions");
