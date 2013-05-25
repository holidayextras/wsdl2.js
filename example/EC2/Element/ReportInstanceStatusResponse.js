var Modeler = require("../Modeler.js");
var className = 'ElementReportInstanceStatusResponse';

var ElementReportInstanceStatusResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReportInstanceStatusResponse: {
      type: "TypeReportInstanceStatusResponseType",
      wsdlDefinition: {
        name: "ReportInstanceStatusResponse",
        type: "tns:ReportInstanceStatusResponseType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReportInstanceStatusResponse;
Modeler.register(ElementReportInstanceStatusResponse, "ElementReportInstanceStatusResponse");
