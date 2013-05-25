var Modeler = require("../Modeler.js");
var className = 'TypeDescribeReservedInstancesListingsResponseSetItemType';

var TypeDescribeReservedInstancesListingsResponseSetItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  reservedInstancesListingId: {
      type: "string",
      wsdlDefinition: {
        name: "reservedInstancesListingId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    reservedInstancesId: {
      type: "string",
      wsdlDefinition: {
        name: "reservedInstancesId",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    createDate: {
      type: "date",
      wsdlDefinition: {
        name: "createDate",
        type: "xs:dateTime"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    updateDate: {
      type: "date",
      wsdlDefinition: {
        name: "updateDate",
        type: "xs:dateTime"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    status: {
      type: "string",
      wsdlDefinition: {
        name: "status",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    statusMessage: {
      type: "string",
      wsdlDefinition: {
        name: "statusMessage",
        type: "xs:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    instanceCounts: {
      type: "TypeInstanceCountsSetType",
      wsdlDefinition: {
        name: "instanceCounts",
        type: "tns:InstanceCountsSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    priceSchedules: {
      type: "TypePriceScheduleSetType",
      wsdlDefinition: {
        name: "priceSchedules",
        type: "tns:PriceScheduleSetType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    tagSet: {
      type: "TypeResourceTagSetType",
      wsdlDefinition: {
        name: "tagSet",
        type: "tns:ResourceTagSetType",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    clientToken: {
      type: "string",
      wsdlDefinition: {
        name: "clientToken",
        type: "xs:string",
        minOccurs: 0
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeReservedInstancesListingsResponseSetItemType;
Modeler.register(TypeDescribeReservedInstancesListingsResponseSetItemType, "TypeDescribeReservedInstancesListingsResponseSetItemType");
