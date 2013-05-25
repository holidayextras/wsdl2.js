module.exports = {
  "AmazonEC2Port": {
    "namespace": "http://ec2.amazonaws.com/doc/2013-02-01/",
    "serviceUrl": "https://ec2.amazonaws.com/",
    "ActivateLicense": {
      "soapAction": "ActivateLicense",
      "input": "ElementActivateLicense",
      "output": "ElementActivateLicenseResponse"
    },
    "AllocateAddress": {
      "soapAction": "AllocateAddress",
      "input": "ElementAllocateAddress",
      "output": "ElementAllocateAddressResponse"
    },
    "AssignPrivateIpAddresses": {
      "soapAction": "AssignPrivateIpAddresses",
      "input": "ElementAssignPrivateIpAddresses",
      "output": "ElementAssignPrivateIpAddressesResponse"
    },
    "AssociateAddress": {
      "soapAction": "AssociateAddress",
      "input": "ElementAssociateAddress",
      "output": "ElementAssociateAddressResponse"
    },
    "AssociateDhcpOptions": {
      "soapAction": "AssociateDhcpOptions",
      "input": "ElementAssociateDhcpOptions",
      "output": "ElementAssociateDhcpOptionsResponse"
    },
    "AssociateRouteTable": {
      "soapAction": "AssociateRouteTable",
      "input": "ElementAssociateRouteTable",
      "output": "ElementAssociateRouteTableResponse"
    },
    "AttachInternetGateway": {
      "soapAction": "AttachInternetGateway",
      "input": "ElementAttachInternetGateway",
      "output": "ElementAttachInternetGatewayResponse"
    },
    "AttachNetworkInterface": {
      "soapAction": "AttachNetworkInterface",
      "input": "ElementAttachNetworkInterface",
      "output": "ElementAttachNetworkInterfaceResponse"
    },
    "AttachVolume": {
      "soapAction": "AttachVolume",
      "input": "ElementAttachVolume",
      "output": "ElementAttachVolumeResponse"
    },
    "AttachVpnGateway": {
      "soapAction": "AttachVpnGateway",
      "input": "ElementAttachVpnGateway",
      "output": "ElementAttachVpnGatewayResponse"
    },
    "AuthorizeSecurityGroupEgress": {
      "soapAction": "AuthorizeSecurityGroupEgress",
      "input": "ElementAuthorizeSecurityGroupEgress",
      "output": "ElementAuthorizeSecurityGroupEgressResponse"
    },
    "AuthorizeSecurityGroupIngress": {
      "soapAction": "AuthorizeSecurityGroupIngress",
      "input": "ElementAuthorizeSecurityGroupIngress",
      "output": "ElementAuthorizeSecurityGroupIngressResponse"
    },
    "BundleInstance": {
      "soapAction": "BundleInstance",
      "input": "ElementBundleInstance",
      "output": "ElementBundleInstanceResponse"
    },
    "CancelBundleTask": {
      "soapAction": "CancelBundleTask",
      "input": "ElementCancelBundleTask",
      "output": "ElementCancelBundleTaskResponse"
    },
    "CancelConversionTask": {
      "soapAction": "CancelConversionTask",
      "input": "ElementCancelConversionTask",
      "output": "ElementCancelConversionTaskResponse"
    },
    "CancelExportTask": {
      "soapAction": "CancelExportTask",
      "input": "ElementCancelExportTask",
      "output": "ElementCancelExportTaskResponse"
    },
    "CancelReservedInstancesListing": {
      "soapAction": "CancelReservedInstancesListing",
      "input": "ElementCancelReservedInstancesListing",
      "output": "ElementCancelReservedInstancesListingResponse"
    },
    "CancelSpotInstanceRequests": {
      "soapAction": "CancelSpotInstanceRequests",
      "input": "ElementCancelSpotInstanceRequests",
      "output": "ElementCancelSpotInstanceRequestsResponse"
    },
    "ConfirmProductInstance": {
      "soapAction": "ConfirmProductInstance",
      "input": "ElementConfirmProductInstance",
      "output": "ElementConfirmProductInstanceResponse"
    },
    "CopyImage": {
      "soapAction": "CopyImage",
      "input": "ElementCopyImage",
      "output": "ElementCopyImageResponse"
    },
    "CopySnapshot": {
      "soapAction": "CopySnapshot",
      "input": "ElementCopySnapshot",
      "output": "ElementCopySnapshotResponse"
    },
    "CreateCustomerGateway": {
      "soapAction": "CreateCustomerGateway",
      "input": "ElementCreateCustomerGateway",
      "output": "ElementCreateCustomerGatewayResponse"
    },
    "CreateDhcpOptions": {
      "soapAction": "CreateDhcpOptions",
      "input": "ElementCreateDhcpOptions",
      "output": "ElementCreateDhcpOptionsResponse"
    },
    "CreateImage": {
      "soapAction": "CreateImage",
      "input": "ElementCreateImage",
      "output": "ElementCreateImageResponse"
    },
    "CreateInstanceExportTask": {
      "soapAction": "CreateInstanceExportTask",
      "input": "ElementCreateInstanceExportTask",
      "output": "ElementCreateInstanceExportTaskResponse"
    },
    "CreateInternetGateway": {
      "soapAction": "CreateInternetGateway",
      "input": "ElementCreateInternetGateway",
      "output": "ElementCreateInternetGatewayResponse"
    },
    "CreateKeyPair": {
      "soapAction": "CreateKeyPair",
      "input": "ElementCreateKeyPair",
      "output": "ElementCreateKeyPairResponse"
    },
    "CreateNetworkAcl": {
      "soapAction": "CreateNetworkAcl",
      "input": "ElementCreateNetworkAcl",
      "output": "ElementCreateNetworkAclResponse"
    },
    "CreateNetworkAclEntry": {
      "soapAction": "CreateNetworkAclEntry",
      "input": "ElementCreateNetworkAclEntry",
      "output": "ElementCreateNetworkAclEntryResponse"
    },
    "CreateNetworkInterface": {
      "soapAction": "CreateNetworkInterface",
      "input": "ElementCreateNetworkInterface",
      "output": "ElementCreateNetworkInterfaceResponse"
    },
    "CreatePlacementGroup": {
      "soapAction": "CreatePlacementGroup",
      "input": "ElementCreatePlacementGroup",
      "output": "ElementCreatePlacementGroupResponse"
    },
    "CreateReservedInstancesListing": {
      "soapAction": "CreateReservedInstancesListing",
      "input": "ElementCreateReservedInstancesListing",
      "output": "ElementCreateReservedInstancesListingResponse"
    },
    "CreateRoute": {
      "soapAction": "CreateRoute",
      "input": "ElementCreateRoute",
      "output": "ElementCreateRouteResponse"
    },
    "CreateRouteTable": {
      "soapAction": "CreateRouteTable",
      "input": "ElementCreateRouteTable",
      "output": "ElementCreateRouteTableResponse"
    },
    "CreateSecurityGroup": {
      "soapAction": "CreateSecurityGroup",
      "input": "ElementCreateSecurityGroup",
      "output": "ElementCreateSecurityGroupResponse"
    },
    "CreateSnapshot": {
      "soapAction": "CreateSnapshot",
      "input": "ElementCreateSnapshot",
      "output": "ElementCreateSnapshotResponse"
    },
    "CreateSpotDatafeedSubscription": {
      "soapAction": "CreateSpotDatafeedSubscription",
      "input": "ElementCreateSpotDatafeedSubscription",
      "output": "ElementCreateSpotDatafeedSubscriptionResponse"
    },
    "CreateSubnet": {
      "soapAction": "CreateSubnet",
      "input": "ElementCreateSubnet",
      "output": "ElementCreateSubnetResponse"
    },
    "CreateTags": {
      "soapAction": "CreateTags",
      "input": "ElementCreateTags",
      "output": "ElementCreateTagsResponse"
    },
    "CreateVolume": {
      "soapAction": "CreateVolume",
      "input": "ElementCreateVolume",
      "output": "ElementCreateVolumeResponse"
    },
    "CreateVpc": {
      "soapAction": "CreateVpc",
      "input": "ElementCreateVpc",
      "output": "ElementCreateVpcResponse"
    },
    "CreateVpnConnection": {
      "soapAction": "CreateVpnConnection",
      "input": "ElementCreateVpnConnection",
      "output": "ElementCreateVpnConnectionResponse"
    },
    "CreateVpnConnectionRoute": {
      "soapAction": "CreateVpnConnectionRoute",
      "input": "ElementCreateVpnConnectionRoute",
      "output": "ElementCreateVpnConnectionRouteResponse"
    },
    "CreateVpnGateway": {
      "soapAction": "CreateVpnGateway",
      "input": "ElementCreateVpnGateway",
      "output": "ElementCreateVpnGatewayResponse"
    },
    "DeactivateLicense": {
      "soapAction": "DeactivateLicense",
      "input": "ElementDeactivateLicense",
      "output": "ElementDeactivateLicenseResponse"
    },
    "DeleteCustomerGateway": {
      "soapAction": "DeleteCustomerGateway",
      "input": "ElementDeleteCustomerGateway",
      "output": "ElementDeleteCustomerGatewayResponse"
    },
    "DeleteDhcpOptions": {
      "soapAction": "DeleteDhcpOptions",
      "input": "ElementDeleteDhcpOptions",
      "output": "ElementDeleteDhcpOptionsResponse"
    },
    "DeleteInternetGateway": {
      "soapAction": "DeleteInternetGateway",
      "input": "ElementDeleteInternetGateway",
      "output": "ElementDeleteInternetGatewayResponse"
    },
    "DeleteKeyPair": {
      "soapAction": "DeleteKeyPair",
      "input": "ElementDeleteKeyPair",
      "output": "ElementDeleteKeyPairResponse"
    },
    "DeleteNetworkAcl": {
      "soapAction": "DeleteNetworkAcl",
      "input": "ElementDeleteNetworkAcl",
      "output": "ElementDeleteNetworkAclResponse"
    },
    "DeleteNetworkAclEntry": {
      "soapAction": "DeleteNetworkAclEntry",
      "input": "ElementDeleteNetworkAclEntry",
      "output": "ElementDeleteNetworkAclEntryResponse"
    },
    "DeleteNetworkInterface": {
      "soapAction": "DeleteNetworkInterface",
      "input": "ElementDeleteNetworkInterface",
      "output": "ElementDeleteNetworkInterfaceResponse"
    },
    "DeletePlacementGroup": {
      "soapAction": "DeletePlacementGroup",
      "input": "ElementDeletePlacementGroup",
      "output": "ElementDeletePlacementGroupResponse"
    },
    "DeleteRoute": {
      "soapAction": "DeleteRoute",
      "input": "ElementDeleteRoute",
      "output": "ElementDeleteRouteResponse"
    },
    "DeleteRouteTable": {
      "soapAction": "DeleteRouteTable",
      "input": "ElementDeleteRouteTable",
      "output": "ElementDeleteRouteTableResponse"
    },
    "DeleteSecurityGroup": {
      "soapAction": "DeleteSecurityGroup",
      "input": "ElementDeleteSecurityGroup",
      "output": "ElementDeleteSecurityGroupResponse"
    },
    "DeleteSnapshot": {
      "soapAction": "DeleteSnapshot",
      "input": "ElementDeleteSnapshot",
      "output": "ElementDeleteSnapshotResponse"
    },
    "DeleteSpotDatafeedSubscription": {
      "soapAction": "DeleteSpotDatafeedSubscription",
      "input": "ElementDeleteSpotDatafeedSubscription",
      "output": "ElementDeleteSpotDatafeedSubscriptionResponse"
    },
    "DeleteSubnet": {
      "soapAction": "DeleteSubnet",
      "input": "ElementDeleteSubnet",
      "output": "ElementDeleteSubnetResponse"
    },
    "DeleteTags": {
      "soapAction": "DeleteTags",
      "input": "ElementDeleteTags",
      "output": "ElementDeleteTagsResponse"
    },
    "DeleteVolume": {
      "soapAction": "DeleteVolume",
      "input": "ElementDeleteVolume",
      "output": "ElementDeleteVolumeResponse"
    },
    "DeleteVpc": {
      "soapAction": "DeleteVpc",
      "input": "ElementDeleteVpc",
      "output": "ElementDeleteVpcResponse"
    },
    "DeleteVpnConnection": {
      "soapAction": "DeleteVpnConnection",
      "input": "ElementDeleteVpnConnection",
      "output": "ElementDeleteVpnConnectionResponse"
    },
    "DeleteVpnConnectionRoute": {
      "soapAction": "DeleteVpnConnectionRoute",
      "input": "ElementDeleteVpnConnectionRoute",
      "output": "ElementDeleteVpnConnectionRouteResponse"
    },
    "DeleteVpnGateway": {
      "soapAction": "DeleteVpnGateway",
      "input": "ElementDeleteVpnGateway",
      "output": "ElementDeleteVpnGatewayResponse"
    },
    "DeregisterImage": {
      "soapAction": "DeregisterImage",
      "input": "ElementDeregisterImage",
      "output": "ElementDeregisterImageResponse"
    },
    "DescribeAccountAttributes": {
      "soapAction": "DescribeAccountAttributes",
      "input": "ElementDescribeAccountAttributes",
      "output": "ElementDescribeAccountAttributesResponse"
    },
    "DescribeAddresses": {
      "soapAction": "DescribeAddresses",
      "input": "ElementDescribeAddresses",
      "output": "ElementDescribeAddressesResponse"
    },
    "DescribeAvailabilityZones": {
      "soapAction": "DescribeAvailabilityZones",
      "input": "ElementDescribeAvailabilityZones",
      "output": "ElementDescribeAvailabilityZonesResponse"
    },
    "DescribeBundleTasks": {
      "soapAction": "DescribeBundleTasks",
      "input": "ElementDescribeBundleTasks",
      "output": "ElementDescribeBundleTasksResponse"
    },
    "DescribeConversionTasks": {
      "soapAction": "DescribeConversionTasks",
      "input": "ElementDescribeConversionTasks",
      "output": "ElementDescribeConversionTasksResponse"
    },
    "DescribeCustomerGateways": {
      "soapAction": "DescribeCustomerGateways",
      "input": "ElementDescribeCustomerGateways",
      "output": "ElementDescribeCustomerGatewaysResponse"
    },
    "DescribeDhcpOptions": {
      "soapAction": "DescribeDhcpOptions",
      "input": "ElementDescribeDhcpOptions",
      "output": "ElementDescribeDhcpOptionsResponse"
    },
    "DescribeExportTasks": {
      "soapAction": "DescribeExportTasks",
      "input": "ElementDescribeExportTasks",
      "output": "ElementDescribeExportTasksResponse"
    },
    "DescribeImageAttribute": {
      "soapAction": "DescribeImageAttribute",
      "input": "ElementDescribeImageAttribute",
      "output": "ElementDescribeImageAttributeResponse"
    },
    "DescribeImages": {
      "soapAction": "DescribeImages",
      "input": "ElementDescribeImages",
      "output": "ElementDescribeImagesResponse"
    },
    "DescribeInstanceAttribute": {
      "soapAction": "DescribeInstanceAttribute",
      "input": "ElementDescribeInstanceAttribute",
      "output": "ElementDescribeInstanceAttributeResponse"
    },
    "DescribeInstances": {
      "soapAction": "DescribeInstances",
      "input": "ElementDescribeInstances",
      "output": "ElementDescribeInstancesResponse"
    },
    "DescribeInstanceStatus": {
      "soapAction": "DescribeInstanceStatus",
      "input": "ElementDescribeInstanceStatus",
      "output": "ElementDescribeInstanceStatusResponse"
    },
    "DescribeInternetGateways": {
      "soapAction": "DescribeInternetGateways",
      "input": "ElementDescribeInternetGateways",
      "output": "ElementDescribeInternetGatewaysResponse"
    },
    "DescribeKeyPairs": {
      "soapAction": "DescribeKeyPairs",
      "input": "ElementDescribeKeyPairs",
      "output": "ElementDescribeKeyPairsResponse"
    },
    "DescribeLicenses": {
      "soapAction": "DescribeLicenses",
      "input": "ElementDescribeLicenses",
      "output": "ElementDescribeLicensesResponse"
    },
    "DescribeNetworkAcls": {
      "soapAction": "DescribeNetworkAcls",
      "input": "ElementDescribeNetworkAcls",
      "output": "ElementDescribeNetworkAclsResponse"
    },
    "DescribeNetworkInterfaceAttribute": {
      "soapAction": "DescribeNetworkInterfaceAttribute",
      "input": "ElementDescribeNetworkInterfaceAttribute",
      "output": "ElementDescribeNetworkInterfaceAttributeResponse"
    },
    "DescribeNetworkInterfaces": {
      "soapAction": "DescribeNetworkInterfaces",
      "input": "ElementDescribeNetworkInterfaces",
      "output": "ElementDescribeNetworkInterfacesResponse"
    },
    "DescribePlacementGroups": {
      "soapAction": "DescribePlacementGroups",
      "input": "ElementDescribePlacementGroups",
      "output": "ElementDescribePlacementGroupsResponse"
    },
    "DescribeRegions": {
      "soapAction": "DescribeRegions",
      "input": "ElementDescribeRegions",
      "output": "ElementDescribeRegionsResponse"
    },
    "DescribeReservedInstances": {
      "soapAction": "DescribeReservedInstances",
      "input": "ElementDescribeReservedInstances",
      "output": "ElementDescribeReservedInstancesResponse"
    },
    "DescribeReservedInstancesListings": {
      "soapAction": "DescribeReservedInstancesListings",
      "input": "ElementDescribeReservedInstancesListings",
      "output": "ElementDescribeReservedInstancesListingsResponse"
    },
    "DescribeReservedInstancesOfferings": {
      "soapAction": "DescribeReservedInstancesOfferings",
      "input": "ElementDescribeReservedInstancesOfferings",
      "output": "ElementDescribeReservedInstancesOfferingsResponse"
    },
    "DescribeRouteTables": {
      "soapAction": "DescribeRouteTables",
      "input": "ElementDescribeRouteTables",
      "output": "ElementDescribeRouteTablesResponse"
    },
    "DescribeSecurityGroups": {
      "soapAction": "DescribeSecurityGroups",
      "input": "ElementDescribeSecurityGroups",
      "output": "ElementDescribeSecurityGroupsResponse"
    },
    "DescribeSnapshotAttribute": {
      "soapAction": "DescribeSnapshotAttribute",
      "input": "ElementDescribeSnapshotAttribute",
      "output": "ElementDescribeSnapshotAttributeResponse"
    },
    "DescribeSnapshots": {
      "soapAction": "DescribeSnapshots",
      "input": "ElementDescribeSnapshots",
      "output": "ElementDescribeSnapshotsResponse"
    },
    "DescribeSpotDatafeedSubscription": {
      "soapAction": "DescribeSpotDatafeedSubscription",
      "input": "ElementDescribeSpotDatafeedSubscription",
      "output": "ElementDescribeSpotDatafeedSubscriptionResponse"
    },
    "DescribeSpotInstanceRequests": {
      "soapAction": "DescribeSpotInstanceRequests",
      "input": "ElementDescribeSpotInstanceRequests",
      "output": "ElementDescribeSpotInstanceRequestsResponse"
    },
    "DescribeSpotPriceHistory": {
      "soapAction": "DescribeSpotPriceHistory",
      "input": "ElementDescribeSpotPriceHistory",
      "output": "ElementDescribeSpotPriceHistoryResponse"
    },
    "DescribeSubnets": {
      "soapAction": "DescribeSubnets",
      "input": "ElementDescribeSubnets",
      "output": "ElementDescribeSubnetsResponse"
    },
    "DescribeTags": {
      "soapAction": "DescribeTags",
      "input": "ElementDescribeTags",
      "output": "ElementDescribeTagsResponse"
    },
    "DescribeVolumeAttribute": {
      "soapAction": "DescribeVolumeAttribute",
      "input": "ElementDescribeVolumeAttribute",
      "output": "ElementDescribeVolumeAttributeResponse"
    },
    "DescribeVolumes": {
      "soapAction": "DescribeVolumes",
      "input": "ElementDescribeVolumes",
      "output": "ElementDescribeVolumesResponse"
    },
    "DescribeVolumeStatus": {
      "soapAction": "DescribeVolumeStatus",
      "input": "ElementDescribeVolumeStatus",
      "output": "ElementDescribeVolumeStatusResponse"
    },
    "DescribeVpcAttribute": {
      "soapAction": "DescribeVpcAttribute",
      "input": "ElementDescribeVpcAttribute",
      "output": "ElementDescribeVpcAttributeResponse"
    },
    "DescribeVpcs": {
      "soapAction": "DescribeVpcs",
      "input": "ElementDescribeVpcs",
      "output": "ElementDescribeVpcsResponse"
    },
    "DescribeVpnConnections": {
      "soapAction": "DescribeVpnConnections",
      "input": "ElementDescribeVpnConnections",
      "output": "ElementDescribeVpnConnectionsResponse"
    },
    "DescribeVpnGateways": {
      "soapAction": "DescribeVpnGateways",
      "input": "ElementDescribeVpnGateways",
      "output": "ElementDescribeVpnGatewaysResponse"
    },
    "DetachInternetGateway": {
      "soapAction": "DetachInternetGateway",
      "input": "ElementDetachInternetGateway",
      "output": "ElementDetachInternetGatewayResponse"
    },
    "DetachNetworkInterface": {
      "soapAction": "DetachNetworkInterface",
      "input": "ElementDetachNetworkInterface",
      "output": "ElementDetachNetworkInterfaceResponse"
    },
    "DetachVolume": {
      "soapAction": "DetachVolume",
      "input": "ElementDetachVolume",
      "output": "ElementDetachVolumeResponse"
    },
    "DetachVpnGateway": {
      "soapAction": "DetachVpnGateway",
      "input": "ElementDetachVpnGateway",
      "output": "ElementDetachVpnGatewayResponse"
    },
    "DisableVgwRoutePropagation": {
      "soapAction": "DisableVgwRoutePropagation",
      "input": "ElementDisableVgwRoutePropagation",
      "output": "ElementDisableVgwRoutePropagationResponse"
    },
    "DisassociateAddress": {
      "soapAction": "DisassociateAddress",
      "input": "ElementDisassociateAddress",
      "output": "ElementDisassociateAddressResponse"
    },
    "DisassociateRouteTable": {
      "soapAction": "DisassociateRouteTable",
      "input": "ElementDisassociateRouteTable",
      "output": "ElementDisassociateRouteTableResponse"
    },
    "EnableVgwRoutePropagation": {
      "soapAction": "EnableVgwRoutePropagation",
      "input": "ElementEnableVgwRoutePropagation",
      "output": "ElementEnableVgwRoutePropagationResponse"
    },
    "EnableVolumeIO": {
      "soapAction": "EnableVolumeIO",
      "input": "ElementEnableVolumeIO",
      "output": "ElementEnableVolumeIOResponse"
    },
    "GetConsoleOutput": {
      "soapAction": "GetConsoleOutput",
      "input": "ElementGetConsoleOutput",
      "output": "ElementGetConsoleOutputResponse"
    },
    "GetPasswordData": {
      "soapAction": "GetPasswordData",
      "input": "ElementGetPasswordData",
      "output": "ElementGetPasswordDataResponse"
    },
    "ImportInstance": {
      "soapAction": "ImportInstance",
      "input": "ElementImportInstance",
      "output": "ElementImportInstanceResponse"
    },
    "ImportKeyPair": {
      "soapAction": "ImportKeyPair",
      "input": "ElementImportKeyPair",
      "output": "ElementImportKeyPairResponse"
    },
    "ImportVolume": {
      "soapAction": "ImportVolume",
      "input": "ElementImportVolume",
      "output": "ElementImportVolumeResponse"
    },
    "ModifyImageAttribute": {
      "soapAction": "ModifyImageAttribute",
      "input": "ElementModifyImageAttribute",
      "output": "ElementModifyImageAttributeResponse"
    },
    "ModifyInstanceAttribute": {
      "soapAction": "ModifyInstanceAttribute",
      "input": "ElementModifyInstanceAttribute",
      "output": "ElementModifyInstanceAttributeResponse"
    },
    "ModifyNetworkInterfaceAttribute": {
      "soapAction": "ModifyNetworkInterfaceAttribute",
      "input": "ElementModifyNetworkInterfaceAttribute",
      "output": "ElementModifyNetworkInterfaceAttributeResponse"
    },
    "ModifySnapshotAttribute": {
      "soapAction": "ModifySnapshotAttribute",
      "input": "ElementModifySnapshotAttribute",
      "output": "ElementModifySnapshotAttributeResponse"
    },
    "ModifyVolumeAttribute": {
      "soapAction": "ModifyVolumeAttribute",
      "input": "ElementModifyVolumeAttribute",
      "output": "ElementModifyVolumeAttributeResponse"
    },
    "ModifyVpcAttribute": {
      "soapAction": "ModifyVpcAttribute",
      "input": "ElementModifyVpcAttribute",
      "output": "ElementModifyVpcAttributeResponse"
    },
    "MonitorInstances": {
      "soapAction": "MonitorInstances",
      "input": "ElementMonitorInstances",
      "output": "ElementMonitorInstancesResponse"
    },
    "PurchaseReservedInstancesOffering": {
      "soapAction": "PurchaseReservedInstancesOffering",
      "input": "ElementPurchaseReservedInstancesOffering",
      "output": "ElementPurchaseReservedInstancesOfferingResponse"
    },
    "RebootInstances": {
      "soapAction": "RebootInstances",
      "input": "ElementRebootInstances",
      "output": "ElementRebootInstancesResponse"
    },
    "RegisterImage": {
      "soapAction": "RegisterImage",
      "input": "ElementRegisterImage",
      "output": "ElementRegisterImageResponse"
    },
    "ReleaseAddress": {
      "soapAction": "ReleaseAddress",
      "input": "ElementReleaseAddress",
      "output": "ElementReleaseAddressResponse"
    },
    "ReplaceNetworkAclAssociation": {
      "soapAction": "ReplaceNetworkAclAssociation",
      "input": "ElementReplaceNetworkAclAssociation",
      "output": "ElementReplaceNetworkAclAssociationResponse"
    },
    "ReplaceNetworkAclEntry": {
      "soapAction": "ReplaceNetworkAclEntry",
      "input": "ElementReplaceNetworkAclEntry",
      "output": "ElementReplaceNetworkAclEntryResponse"
    },
    "ReplaceRoute": {
      "soapAction": "ReplaceRoute",
      "input": "ElementReplaceRoute",
      "output": "ElementReplaceRouteResponse"
    },
    "ReplaceRouteTableAssociation": {
      "soapAction": "ReplaceRouteTableAssociation",
      "input": "ElementReplaceRouteTableAssociation",
      "output": "ElementReplaceRouteTableAssociationResponse"
    },
    "ReportInstanceStatus": {
      "soapAction": "ReportInstanceStatus",
      "input": "ElementReportInstanceStatus",
      "output": "ElementReportInstanceStatusResponse"
    },
    "RequestSpotInstances": {
      "soapAction": "RequestSpotInstances",
      "input": "ElementRequestSpotInstances",
      "output": "ElementRequestSpotInstancesResponse"
    },
    "ResetImageAttribute": {
      "soapAction": "ResetImageAttribute",
      "input": "ElementResetImageAttribute",
      "output": "ElementResetImageAttributeResponse"
    },
    "ResetInstanceAttribute": {
      "soapAction": "ResetInstanceAttribute",
      "input": "ElementResetInstanceAttribute",
      "output": "ElementResetInstanceAttributeResponse"
    },
    "ResetNetworkInterfaceAttribute": {
      "soapAction": "ResetNetworkInterfaceAttribute",
      "input": "ElementResetNetworkInterfaceAttribute",
      "output": "ElementResetNetworkInterfaceAttributeResponse"
    },
    "ResetSnapshotAttribute": {
      "soapAction": "ResetSnapshotAttribute",
      "input": "ElementResetSnapshotAttribute",
      "output": "ElementResetSnapshotAttributeResponse"
    },
    "RevokeSecurityGroupEgress": {
      "soapAction": "RevokeSecurityGroupEgress",
      "input": "ElementRevokeSecurityGroupEgress",
      "output": "ElementRevokeSecurityGroupEgressResponse"
    },
    "RevokeSecurityGroupIngress": {
      "soapAction": "RevokeSecurityGroupIngress",
      "input": "ElementRevokeSecurityGroupIngress",
      "output": "ElementRevokeSecurityGroupIngressResponse"
    },
    "RunInstances": {
      "soapAction": "RunInstances",
      "input": "ElementRunInstances",
      "output": "ElementRunInstancesResponse"
    },
    "StartInstances": {
      "soapAction": "StartInstances",
      "input": "ElementStartInstances",
      "output": "ElementStartInstancesResponse"
    },
    "StopInstances": {
      "soapAction": "StopInstances",
      "input": "ElementStopInstances",
      "output": "ElementStopInstancesResponse"
    },
    "TerminateInstances": {
      "soapAction": "TerminateInstances",
      "input": "ElementTerminateInstances",
      "output": "ElementTerminateInstancesResponse"
    },
    "UnassignPrivateIpAddresses": {
      "soapAction": "UnassignPrivateIpAddresses",
      "input": "ElementUnassignPrivateIpAddresses",
      "output": "ElementUnassignPrivateIpAddressesResponse"
    },
    "UnmonitorInstances": {
      "soapAction": "UnmonitorInstances",
      "input": "ElementUnmonitorInstances",
      "output": "ElementUnmonitorInstancesResponse"
    }
  }
}