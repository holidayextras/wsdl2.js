var Modeler = require("../Modeler.js");
var className = 'ElementReportInstanceStatus';

var ElementReportInstanceStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReportInstanceStatus: {
      type: "TypeReportInstanceStatusType",
      wsdlDefinition: {
        name: "ReportInstanceStatus",
        type: "tns:ReportInstanceStatusType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReportInstanceStatus;
Modeler.register(ElementReportInstanceStatus, "ElementReportInstanceStatus");
