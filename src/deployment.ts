// https://www.terraform.io/docs/providers/kubernetes/r/deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Wait for the rollout of the deployment to complete. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#wait_for_rollout Deployment#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#metadata Deployment#metadata}
  */
  readonly metadata: DeploymentMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#spec Deployment#spec}
  */
  readonly spec: DeploymentSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeouts Deployment#timeouts}
  */
  readonly timeouts?: DeploymentTimeouts;
}
export interface DeploymentMetadata {
  /**
  * An unstructured key value map stored with the deployment that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#annotations Deployment#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#generate_name Deployment#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the deployment. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#labels Deployment#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the deployment, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the deployment must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentMetadataToTerraform(struct?: DeploymentMetadataOutputReference | DeploymentMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DeploymentMetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string | undefined; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string | undefined) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface DeploymentSpecSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecSelectorMatchExpressions[];
}

function deploymentSpecSelectorToTerraform(struct?: DeploymentSpecSelectorOutputReference | DeploymentSpecSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class DeploymentSpecSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: DeploymentSpecSelectorMatchExpressions[] | undefined; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: DeploymentSpecSelectorMatchExpressions[] | undefined) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions
  }
}
export interface DeploymentSpecStrategyRollingUpdate {
  /**
  * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new RC can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new RC can be scaled up further, ensuring that total number of pods running at any time during the update is atmost 130% of desired pods.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#max_surge Deployment#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old RC can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old RC can be scaled down further, followed by scaling up the new RC, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#max_unavailable Deployment#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

function deploymentSpecStrategyRollingUpdateToTerraform(struct?: DeploymentSpecStrategyRollingUpdateOutputReference | DeploymentSpecStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}

export class DeploymentSpecStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string | undefined; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string | undefined) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string | undefined; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string | undefined) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable
  }
}
export interface DeploymentSpecStrategy {
  /**
  * Type of deployment. Can be 'Recreate' or 'RollingUpdate'. Default is RollingUpdate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#type Deployment#type}
  */
  readonly type?: string;
  /**
  * rolling_update block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#rolling_update Deployment#rolling_update}
  */
  readonly rollingUpdate?: DeploymentSpecStrategyRollingUpdate;
}

function deploymentSpecStrategyToTerraform(struct?: DeploymentSpecStrategyOutputReference | DeploymentSpecStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    rolling_update: deploymentSpecStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
  }
}

export class DeploymentSpecStrategyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate?: DeploymentSpecStrategyRollingUpdate | undefined; 
  private __rollingUpdateOutput = new DeploymentSpecStrategyRollingUpdateOutputReference(this as any, "rolling_update", true);
  public get rollingUpdate() {
    return this.__rollingUpdateOutput;
  }
  public putRollingUpdate(value: DeploymentSpecStrategyRollingUpdate | undefined) {
    this._rollingUpdate = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate
  }
}
export interface DeploymentSpecTemplateMetadata {
  /**
  * An unstructured key value map stored with the pod that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#annotations Deployment#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#generate_name Deployment#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the pod. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#labels Deployment#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the pod, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the pod must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateMetadataToTerraform(struct?: DeploymentSpecTemplateMetadataOutputReference | DeploymentSpecTemplateMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DeploymentSpecTemplateMetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string | undefined; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string | undefined) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | undefined; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | undefined) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions
  }
}
export interface DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight is in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#weight Deployment#weight}
  */
  readonly weight: number;
  /**
  * preference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#preference Deployment#preference}
  */
  readonly preference: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
}

function deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
  }
}

export interface DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm {
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_selector_term Deployment#node_selector_term}
  */
  readonly nodeSelectorTerm?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_term: cdktf.listMapper(deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform)(struct!.nodeSelectorTerm),
  }
}

export class DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // node_selector_term - computed: false, optional: true, required: false
  private _nodeSelectorTerm?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[] | undefined; 
  public get nodeSelectorTerm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_selector_term') as any;
  }
  public set nodeSelectorTerm(value: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[] | undefined) {
    this._nodeSelectorTerm = value;
  }
  public resetNodeSelectorTerm() {
    this._nodeSelectorTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermInput() {
    return this._nodeSelectorTerm
  }
}
export interface DeploymentSpecTemplateSpecAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#preferred_during_scheduling_ignored_during_execution Deployment#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#required_during_scheduling_ignored_during_execution Deployment#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

function deploymentSpecTemplateSpecAffinityNodeAffinityToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityOutputReference | DeploymentSpecTemplateSpecAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export class DeploymentSpecTemplateSpecAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined; 
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution') as any;
  }
  public set preferredDuringSchedulingIgnoredDuringExecution(value: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined) {
    this._preferredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined; 
  private __requiredDuringSchedulingIgnoredDuringExecutionOutput = new DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this as any, "required_during_scheduling_ignored_during_execution", true);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this.__requiredDuringSchedulingIgnoredDuringExecutionOutput;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined) {
    this._requiredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution
  }
}
export interface DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespaces Deployment#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_key Deployment#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#label_selector Deployment#label_selector}
  */
  readonly labelSelector?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export class DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[] | undefined; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[] | undefined) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string | undefined; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string | undefined) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | undefined; 
  public get labelSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_selector') as any;
  }
  public set labelSelector(value: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | undefined) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector
  }
}
export interface DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#weight Deployment#weight}
  */
  readonly weight: number;
  /**
  * pod_affinity_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pod_affinity_term Deployment#pod_affinity_term}
  */
  readonly podAffinityTerm: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

function deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespaces Deployment#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_key Deployment#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#label_selector Deployment#label_selector}
  */
  readonly labelSelector?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#preferred_during_scheduling_ignored_during_execution Deployment#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#required_during_scheduling_ignored_during_execution Deployment#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityOutputReference | DeploymentSpecTemplateSpecAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export class DeploymentSpecTemplateSpecAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined; 
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution') as any;
  }
  public set preferredDuringSchedulingIgnoredDuringExecution(value: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined) {
    this._preferredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | undefined; 
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution') as any;
  }
  public set requiredDuringSchedulingIgnoredDuringExecution(value: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | undefined) {
    this._requiredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution
  }
}
export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespaces Deployment#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_key Deployment#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#label_selector Deployment#label_selector}
  */
  readonly labelSelector?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export class DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[] | undefined; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[] | undefined) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string | undefined; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string | undefined) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | undefined; 
  public get labelSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_selector') as any;
  }
  public set labelSelector(value: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | undefined) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector
  }
}
export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#weight Deployment#weight}
  */
  readonly weight: number;
  /**
  * pod_affinity_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pod_affinity_term Deployment#pod_affinity_term}
  */
  readonly podAffinityTerm: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespaces Deployment#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_key Deployment#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#label_selector Deployment#label_selector}
  */
  readonly labelSelector?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#preferred_during_scheduling_ignored_during_execution Deployment#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#required_during_scheduling_ignored_during_execution Deployment#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityOutputReference | DeploymentSpecTemplateSpecAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export class DeploymentSpecTemplateSpecAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined; 
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution') as any;
  }
  public set preferredDuringSchedulingIgnoredDuringExecution(value: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined) {
    this._preferredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | undefined; 
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution') as any;
  }
  public set requiredDuringSchedulingIgnoredDuringExecution(value: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | undefined) {
    this._requiredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution
  }
}
export interface DeploymentSpecTemplateSpecAffinity {
  /**
  * node_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_affinity Deployment#node_affinity}
  */
  readonly nodeAffinity?: DeploymentSpecTemplateSpecAffinityNodeAffinity;
  /**
  * pod_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pod_affinity Deployment#pod_affinity}
  */
  readonly podAffinity?: DeploymentSpecTemplateSpecAffinityPodAffinity;
  /**
  * pod_anti_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pod_anti_affinity Deployment#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DeploymentSpecTemplateSpecAffinityPodAntiAffinity;
}

function deploymentSpecTemplateSpecAffinityToTerraform(struct?: DeploymentSpecTemplateSpecAffinityOutputReference | DeploymentSpecTemplateSpecAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: deploymentSpecTemplateSpecAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: deploymentSpecTemplateSpecAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: deploymentSpecTemplateSpecAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}

export class DeploymentSpecTemplateSpecAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: DeploymentSpecTemplateSpecAffinityNodeAffinity | undefined; 
  private __nodeAffinityOutput = new DeploymentSpecTemplateSpecAffinityNodeAffinityOutputReference(this as any, "node_affinity", true);
  public get nodeAffinity() {
    return this.__nodeAffinityOutput;
  }
  public putNodeAffinity(value: DeploymentSpecTemplateSpecAffinityNodeAffinity | undefined) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: DeploymentSpecTemplateSpecAffinityPodAffinity | undefined; 
  private __podAffinityOutput = new DeploymentSpecTemplateSpecAffinityPodAffinityOutputReference(this as any, "pod_affinity", true);
  public get podAffinity() {
    return this.__podAffinityOutput;
  }
  public putPodAffinity(value: DeploymentSpecTemplateSpecAffinityPodAffinity | undefined) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: DeploymentSpecTemplateSpecAffinityPodAntiAffinity | undefined; 
  private __podAntiAffinityOutput = new DeploymentSpecTemplateSpecAffinityPodAntiAffinityOutputReference(this as any, "pod_anti_affinity", true);
  public get podAntiAffinity() {
    return this.__podAntiAffinityOutput;
  }
  public putPodAntiAffinity(value: DeploymentSpecTemplateSpecAffinityPodAntiAffinity | undefined) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity
  }
}
export interface DeploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefOutputReference | DeploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class DeploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key - computed: false, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable | undefined; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable | undefined) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional
  }
}
export interface DeploymentSpecTemplateSpecContainerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#api_version Deployment#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_path Deployment#field_path}
  */
  readonly fieldPath?: string;
}

function deploymentSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvValueFromFieldRefOutputReference | DeploymentSpecTemplateSpecContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class DeploymentSpecTemplateSpecContainerEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string | undefined; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string | undefined) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string | undefined; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string | undefined) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath
  }
}
export interface DeploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_name Deployment#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#divisor Deployment#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource Deployment#resource}
  */
  readonly resource: string;
}

function deploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRefOutputReference | DeploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class DeploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string | undefined; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string | undefined) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string | undefined; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string | undefined) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }
}
export interface DeploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRefOutputReference | DeploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class DeploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key - computed: false, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable | undefined; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable | undefined) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional
  }
}
export interface DeploymentSpecTemplateSpecContainerEnvValueFrom {
  /**
  * config_map_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map_key_ref Deployment#config_map_key_ref}
  */
  readonly configMapKeyRef?: DeploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_ref Deployment#field_ref}
  */
  readonly fieldRef?: DeploymentSpecTemplateSpecContainerEnvValueFromFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource_field_ref Deployment#resource_field_ref}
  */
  readonly resourceFieldRef?: DeploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRef;
  /**
  * secret_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_key_ref Deployment#secret_key_ref}
  */
  readonly secretKeyRef?: DeploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRef;
}

function deploymentSpecTemplateSpecContainerEnvValueFromToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvValueFromOutputReference | DeploymentSpecTemplateSpecContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: deploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: deploymentSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: deploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: deploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}

export class DeploymentSpecTemplateSpecContainerEnvValueFromOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef?: DeploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef | undefined; 
  private __configMapKeyRefOutput = new DeploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefOutputReference(this as any, "config_map_key_ref", true);
  public get configMapKeyRef() {
    return this.__configMapKeyRefOutput;
  }
  public putConfigMapKeyRef(value: DeploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef | undefined) {
    this._configMapKeyRef = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef?: DeploymentSpecTemplateSpecContainerEnvValueFromFieldRef | undefined; 
  private __fieldRefOutput = new DeploymentSpecTemplateSpecContainerEnvValueFromFieldRefOutputReference(this as any, "field_ref", true);
  public get fieldRef() {
    return this.__fieldRefOutput;
  }
  public putFieldRef(value: DeploymentSpecTemplateSpecContainerEnvValueFromFieldRef | undefined) {
    this._fieldRef = value;
  }
  public resetFieldRef() {
    this._fieldRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef?: DeploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRef | undefined; 
  private __resourceFieldRefOutput = new DeploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRefOutputReference(this as any, "resource_field_ref", true);
  public get resourceFieldRef() {
    return this.__resourceFieldRefOutput;
  }
  public putResourceFieldRef(value: DeploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRef | undefined) {
    this._resourceFieldRef = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef?: DeploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRef | undefined; 
  private __secretKeyRefOutput = new DeploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRefOutputReference(this as any, "secret_key_ref", true);
  public get secretKeyRef() {
    return this.__secretKeyRefOutput;
  }
  public putSecretKeyRef(value: DeploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRef | undefined) {
    this._secretKeyRef = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef
  }
}
export interface DeploymentSpecTemplateSpecContainerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
  /**
  * value_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value_from Deployment#value_from}
  */
  readonly valueFrom?: DeploymentSpecTemplateSpecContainerEnvValueFrom;
}

function deploymentSpecTemplateSpecContainerEnvToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: deploymentSpecTemplateSpecContainerEnvValueFromToTerraform(struct!.valueFrom),
  }
}

export interface DeploymentSpecTemplateSpecContainerEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Specify whether the ConfigMap must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvFromConfigMapRefOutputReference | DeploymentSpecTemplateSpecContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class DeploymentSpecTemplateSpecContainerEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable | undefined; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable | undefined) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional
  }
}
export interface DeploymentSpecTemplateSpecContainerEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecContainerEnvFromSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvFromSecretRefOutputReference | DeploymentSpecTemplateSpecContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class DeploymentSpecTemplateSpecContainerEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable | undefined; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable | undefined) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional
  }
}
export interface DeploymentSpecTemplateSpecContainerEnvFrom {
  /**
  * An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#prefix Deployment#prefix}
  */
  readonly prefix?: string;
  /**
  * config_map_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map_ref Deployment#config_map_ref}
  */
  readonly configMapRef?: DeploymentSpecTemplateSpecContainerEnvFromConfigMapRef;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_ref Deployment#secret_ref}
  */
  readonly secretRef?: DeploymentSpecTemplateSpecContainerEnvFromSecretRef;
}

function deploymentSpecTemplateSpecContainerEnvFromToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: deploymentSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    secret_ref: deploymentSpecTemplateSpecContainerEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePostStartExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecContainerLifecyclePostStartExecToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePostStartExecOutputReference | DeploymentSpecTemplateSpecContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class DeploymentSpecTemplateSpecContainerLifecyclePostStartExecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[] | undefined; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }
}
export interface DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetOutputReference | DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: string | undefined; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader[] | undefined) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader
  }
}
export interface DeploymentSpecTemplateSpecContainerLifecyclePostStartTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePostStart {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecContainerLifecyclePostStartExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecContainerLifecyclePostStartTcpSocket[];
}

function deploymentSpecTemplateSpecContainerLifecyclePostStartToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: deploymentSpecTemplateSpecContainerLifecyclePostStartExecToTerraform(struct!.exec),
    http_get: deploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePreStopExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecContainerLifecyclePreStopExecToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePreStopExecOutputReference | DeploymentSpecTemplateSpecContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class DeploymentSpecTemplateSpecContainerLifecyclePreStopExecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[] | undefined; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }
}
export interface DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetOutputReference | DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: string | undefined; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader[] | undefined) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader
  }
}
export interface DeploymentSpecTemplateSpecContainerLifecyclePreStopTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePreStop {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecContainerLifecyclePreStopExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecContainerLifecyclePreStopTcpSocket[];
}

function deploymentSpecTemplateSpecContainerLifecyclePreStopToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: deploymentSpecTemplateSpecContainerLifecyclePreStopExecToTerraform(struct!.exec),
    http_get: deploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecycle {
  /**
  * post_start block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#post_start Deployment#post_start}
  */
  readonly postStart?: DeploymentSpecTemplateSpecContainerLifecyclePostStart[];
  /**
  * pre_stop block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pre_stop Deployment#pre_stop}
  */
  readonly preStop?: DeploymentSpecTemplateSpecContainerLifecyclePreStop[];
}

function deploymentSpecTemplateSpecContainerLifecycleToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecycleOutputReference | DeploymentSpecTemplateSpecContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export class DeploymentSpecTemplateSpecContainerLifecycleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart?: DeploymentSpecTemplateSpecContainerLifecyclePostStart[] | undefined; 
  public get postStart() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('post_start') as any;
  }
  public set postStart(value: DeploymentSpecTemplateSpecContainerLifecyclePostStart[] | undefined) {
    this._postStart = value;
  }
  public resetPostStart() {
    this._postStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop?: DeploymentSpecTemplateSpecContainerLifecyclePreStop[] | undefined; 
  public get preStop() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pre_stop') as any;
  }
  public set preStop(value: DeploymentSpecTemplateSpecContainerLifecyclePreStop[] | undefined) {
    this._preStop = value;
  }
  public resetPreStop() {
    this._preStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop
  }
}
export interface DeploymentSpecTemplateSpecContainerLivenessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecContainerLivenessProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecContainerLivenessProbeExecOutputReference | DeploymentSpecTemplateSpecContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class DeploymentSpecTemplateSpecContainerLivenessProbeExecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[] | undefined; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }
}
export interface DeploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecContainerLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGetOutputReference | DeploymentSpecTemplateSpecContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class DeploymentSpecTemplateSpecContainerLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: string | undefined; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader[] | undefined) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader
  }
}
export interface DeploymentSpecTemplateSpecContainerLivenessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecContainerLivenessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecContainerLivenessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecContainerLivenessProbeTcpSocket[];
}

function deploymentSpecTemplateSpecContainerLivenessProbeToTerraform(struct?: DeploymentSpecTemplateSpecContainerLivenessProbeOutputReference | DeploymentSpecTemplateSpecContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: deploymentSpecTemplateSpecContainerLivenessProbeExecToTerraform(struct!.exec),
    http_get: deploymentSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class DeploymentSpecTemplateSpecContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number | undefined; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number | undefined) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number | undefined; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number | undefined) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number | undefined; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number | undefined) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number | undefined; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number | undefined) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number | undefined; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number | undefined) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: DeploymentSpecTemplateSpecContainerLivenessProbeExec | undefined; 
  private __execOutput = new DeploymentSpecTemplateSpecContainerLivenessProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: DeploymentSpecTemplateSpecContainerLivenessProbeExec | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGet | undefined; 
  private __httpGetOutput = new DeploymentSpecTemplateSpecContainerLivenessProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGet | undefined) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: DeploymentSpecTemplateSpecContainerLivenessProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: DeploymentSpecTemplateSpecContainerLivenessProbeTcpSocket[] | undefined) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket
  }
}
export interface DeploymentSpecTemplateSpecContainerPort {
  /**
  * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_port Deployment#container_port}
  */
  readonly containerPort: number;
  /**
  * What host IP to bind the external port to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_ip Deployment#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_port Deployment#host_port}
  */
  readonly hostPort?: number;
  /**
  * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP or TCP. Defaults to "TCP".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#protocol Deployment#protocol}
  */
  readonly protocol?: string;
}

function deploymentSpecTemplateSpecContainerPortToTerraform(struct?: DeploymentSpecTemplateSpecContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface DeploymentSpecTemplateSpecContainerReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecContainerReadinessProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecContainerReadinessProbeExecOutputReference | DeploymentSpecTemplateSpecContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class DeploymentSpecTemplateSpecContainerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[] | undefined; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }
}
export interface DeploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecContainerReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGetOutputReference | DeploymentSpecTemplateSpecContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class DeploymentSpecTemplateSpecContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: string | undefined; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader[] | undefined) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader
  }
}
export interface DeploymentSpecTemplateSpecContainerReadinessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecContainerReadinessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecContainerReadinessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecContainerReadinessProbeTcpSocket[];
}

function deploymentSpecTemplateSpecContainerReadinessProbeToTerraform(struct?: DeploymentSpecTemplateSpecContainerReadinessProbeOutputReference | DeploymentSpecTemplateSpecContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: deploymentSpecTemplateSpecContainerReadinessProbeExecToTerraform(struct!.exec),
    http_get: deploymentSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class DeploymentSpecTemplateSpecContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number | undefined; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number | undefined) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number | undefined; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number | undefined) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number | undefined; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number | undefined) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number | undefined; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number | undefined) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number | undefined; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number | undefined) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: DeploymentSpecTemplateSpecContainerReadinessProbeExec | undefined; 
  private __execOutput = new DeploymentSpecTemplateSpecContainerReadinessProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: DeploymentSpecTemplateSpecContainerReadinessProbeExec | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGet | undefined; 
  private __httpGetOutput = new DeploymentSpecTemplateSpecContainerReadinessProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGet | undefined) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: DeploymentSpecTemplateSpecContainerReadinessProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: DeploymentSpecTemplateSpecContainerReadinessProbeTcpSocket[] | undefined) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket
  }
}
export interface DeploymentSpecTemplateSpecContainerResources {
  /**
  * Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#limits Deployment#limits}
  */
  readonly limits?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#requests Deployment#requests}
  */
  readonly requests?: { [key: string]: string } | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecContainerResourcesToTerraform(struct?: DeploymentSpecTemplateSpecContainerResourcesOutputReference | DeploymentSpecTemplateSpecContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export class DeploymentSpecTemplateSpecContainerResourcesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // limits - computed: true, optional: true, required: false
  private _limits?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get limits() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('limits') as any;
  }
  public set limits(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits
  }

  // requests - computed: true, optional: true, required: false
  private _requests?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get requests() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('requests') as any;
  }
  public set requests(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests
  }
}
export interface DeploymentSpecTemplateSpecContainerSecurityContextCapabilities {
  /**
  * Added capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#add Deployment#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#drop Deployment#drop}
  */
  readonly drop?: string[];
}

function deploymentSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform(struct?: DeploymentSpecTemplateSpecContainerSecurityContextCapabilitiesOutputReference | DeploymentSpecTemplateSpecContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export class DeploymentSpecTemplateSpecContainerSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[] | undefined; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[] | undefined) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[] | undefined; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[] | undefined) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop
  }
}
export interface DeploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#level Deployment#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#role Deployment#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#type Deployment#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#user Deployment#user}
  */
  readonly user?: string;
}

function deploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform(struct?: DeploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptionsOutputReference | DeploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export class DeploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // level - computed: false, optional: true, required: false
  private _level?: string | undefined; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string | undefined) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level
  }

  // role - computed: false, optional: true, required: false
  private _role?: string | undefined; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string | undefined) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // user - computed: false, optional: true, required: false
  private _user?: string | undefined; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }
}
export interface DeploymentSpecTemplateSpecContainerSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#allow_privilege_escalation Deployment#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#privileged Deployment#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Whether this container has a read-only root filesystem. Default is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only_root_filesystem Deployment#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_group Deployment#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_non_root Deployment#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_user Deployment#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#capabilities Deployment#capabilities}
  */
  readonly capabilities?: DeploymentSpecTemplateSpecContainerSecurityContextCapabilities;
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#se_linux_options Deployment#se_linux_options}
  */
  readonly seLinuxOptions?: DeploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptions;
}

function deploymentSpecTemplateSpecContainerSecurityContextToTerraform(struct?: DeploymentSpecTemplateSpecContainerSecurityContextOutputReference | DeploymentSpecTemplateSpecContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    capabilities: deploymentSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    se_linux_options: deploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
  }
}

export class DeploymentSpecTemplateSpecContainerSecurityContextOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable | undefined; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation') as any;
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable | undefined) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable | undefined; 
  public get privileged() {
    return this.getBooleanAttribute('privileged') as any;
  }
  public set privileged(value: boolean | cdktf.IResolvable | undefined) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable | undefined; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem') as any;
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: string | undefined; 
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }
  public set runAsGroup(value: string | undefined) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable | undefined; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root') as any;
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable | undefined) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: string | undefined; 
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }
  public set runAsUser(value: string | undefined) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: DeploymentSpecTemplateSpecContainerSecurityContextCapabilities | undefined; 
  private __capabilitiesOutput = new DeploymentSpecTemplateSpecContainerSecurityContextCapabilitiesOutputReference(this as any, "capabilities", true);
  public get capabilities() {
    return this.__capabilitiesOutput;
  }
  public putCapabilities(value: DeploymentSpecTemplateSpecContainerSecurityContextCapabilities | undefined) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions?: DeploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptions | undefined; 
  private __seLinuxOptionsOutput = new DeploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptionsOutputReference(this as any, "se_linux_options", true);
  public get seLinuxOptions() {
    return this.__seLinuxOptionsOutput;
  }
  public putSeLinuxOptions(value: DeploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptions | undefined) {
    this._seLinuxOptions = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions
  }
}
export interface DeploymentSpecTemplateSpecContainerStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecContainerStartupProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecContainerStartupProbeExecOutputReference | DeploymentSpecTemplateSpecContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class DeploymentSpecTemplateSpecContainerStartupProbeExecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[] | undefined; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }
}
export interface DeploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecContainerStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecContainerStartupProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecContainerStartupProbeHttpGetOutputReference | DeploymentSpecTemplateSpecContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class DeploymentSpecTemplateSpecContainerStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: string | undefined; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: DeploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: DeploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader[] | undefined) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader
  }
}
export interface DeploymentSpecTemplateSpecContainerStartupProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecContainerStartupProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecContainerStartupProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecContainerStartupProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecContainerStartupProbeTcpSocket[];
}

function deploymentSpecTemplateSpecContainerStartupProbeToTerraform(struct?: DeploymentSpecTemplateSpecContainerStartupProbeOutputReference | DeploymentSpecTemplateSpecContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: deploymentSpecTemplateSpecContainerStartupProbeExecToTerraform(struct!.exec),
    http_get: deploymentSpecTemplateSpecContainerStartupProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class DeploymentSpecTemplateSpecContainerStartupProbeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number | undefined; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number | undefined) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number | undefined; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number | undefined) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number | undefined; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number | undefined) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number | undefined; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number | undefined) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number | undefined; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number | undefined) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: DeploymentSpecTemplateSpecContainerStartupProbeExec | undefined; 
  private __execOutput = new DeploymentSpecTemplateSpecContainerStartupProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: DeploymentSpecTemplateSpecContainerStartupProbeExec | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: DeploymentSpecTemplateSpecContainerStartupProbeHttpGet | undefined; 
  private __httpGetOutput = new DeploymentSpecTemplateSpecContainerStartupProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: DeploymentSpecTemplateSpecContainerStartupProbeHttpGet | undefined) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: DeploymentSpecTemplateSpecContainerStartupProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: DeploymentSpecTemplateSpecContainerStartupProbeTcpSocket[] | undefined) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket
  }
}
export interface DeploymentSpecTemplateSpecContainerVolumeMount {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mount_path Deployment#mount_path}
  */
  readonly mountPath: string;
  /**
  * Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mount_propagation Deployment#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#sub_path Deployment#sub_path}
  */
  readonly subPath?: string;
}

function deploymentSpecTemplateSpecContainerVolumeMountToTerraform(struct?: DeploymentSpecTemplateSpecContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface DeploymentSpecTemplateSpecContainer {
  /**
  * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#args Deployment#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
  /**
  * Docker image name. More info: http://kubernetes.io/docs/user-guide/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#image Deployment#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#image_pull_policy Deployment#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#stdin Deployment#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#stdin_once Deployment#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#termination_message_path Deployment#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#termination_message_policy Deployment#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tty Deployment#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#working_dir Deployment#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#env Deployment#env}
  */
  readonly env?: DeploymentSpecTemplateSpecContainerEnv[];
  /**
  * env_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#env_from Deployment#env_from}
  */
  readonly envFrom?: DeploymentSpecTemplateSpecContainerEnvFrom[];
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#lifecycle Deployment#lifecycle}
  */
  readonly lifecycle?: DeploymentSpecTemplateSpecContainerLifecycle;
  /**
  * liveness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#liveness_probe Deployment#liveness_probe}
  */
  readonly livenessProbe?: DeploymentSpecTemplateSpecContainerLivenessProbe;
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: DeploymentSpecTemplateSpecContainerPort[];
  /**
  * readiness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#readiness_probe Deployment#readiness_probe}
  */
  readonly readinessProbe?: DeploymentSpecTemplateSpecContainerReadinessProbe;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resources Deployment#resources}
  */
  readonly resources?: DeploymentSpecTemplateSpecContainerResources;
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#security_context Deployment#security_context}
  */
  readonly securityContext?: DeploymentSpecTemplateSpecContainerSecurityContext;
  /**
  * startup_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#startup_probe Deployment#startup_probe}
  */
  readonly startupProbe?: DeploymentSpecTemplateSpecContainerStartupProbe;
  /**
  * volume_mount block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_mount Deployment#volume_mount}
  */
  readonly volumeMount?: DeploymentSpecTemplateSpecContainerVolumeMount[];
}

function deploymentSpecTemplateSpecContainerToTerraform(struct?: DeploymentSpecTemplateSpecContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(deploymentSpecTemplateSpecContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(deploymentSpecTemplateSpecContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: deploymentSpecTemplateSpecContainerLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: deploymentSpecTemplateSpecContainerLivenessProbeToTerraform(struct!.livenessProbe),
    port: cdktf.listMapper(deploymentSpecTemplateSpecContainerPortToTerraform)(struct!.port),
    readiness_probe: deploymentSpecTemplateSpecContainerReadinessProbeToTerraform(struct!.readinessProbe),
    resources: deploymentSpecTemplateSpecContainerResourcesToTerraform(struct!.resources),
    security_context: deploymentSpecTemplateSpecContainerSecurityContextToTerraform(struct!.securityContext),
    startup_probe: deploymentSpecTemplateSpecContainerStartupProbeToTerraform(struct!.startupProbe),
    volume_mount: cdktf.listMapper(deploymentSpecTemplateSpecContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface DeploymentSpecTemplateSpecDnsConfigOption {
  /**
  * Name of the option.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Value of the option. Optional: Defaults to empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecDnsConfigOptionToTerraform(struct?: DeploymentSpecTemplateSpecDnsConfigOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecDnsConfig {
  /**
  * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#nameservers Deployment#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#searches Deployment#searches}
  */
  readonly searches?: string[];
  /**
  * option block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#option Deployment#option}
  */
  readonly option?: DeploymentSpecTemplateSpecDnsConfigOption[];
}

function deploymentSpecTemplateSpecDnsConfigToTerraform(struct?: DeploymentSpecTemplateSpecDnsConfigOutputReference | DeploymentSpecTemplateSpecDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    searches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searches),
    option: cdktf.listMapper(deploymentSpecTemplateSpecDnsConfigOptionToTerraform)(struct!.option),
  }
}

export class DeploymentSpecTemplateSpecDnsConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[] | undefined; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[] | undefined) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers
  }

  // searches - computed: false, optional: true, required: false
  private _searches?: string[] | undefined; 
  public get searches() {
    return this.getListAttribute('searches');
  }
  public set searches(value: string[] | undefined) {
    this._searches = value;
  }
  public resetSearches() {
    this._searches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchesInput() {
    return this._searches
  }

  // option - computed: false, optional: true, required: false
  private _option?: DeploymentSpecTemplateSpecDnsConfigOption[] | undefined; 
  public get option() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('option') as any;
  }
  public set option(value: DeploymentSpecTemplateSpecDnsConfigOption[] | undefined) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option
  }
}
export interface DeploymentSpecTemplateSpecHostAliases {
  /**
  * Hostnames for the IP address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#hostnames Deployment#hostnames}
  */
  readonly hostnames: string[];
  /**
  * IP address of the host file entry.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#ip Deployment#ip}
  */
  readonly ip: string;
}

function deploymentSpecTemplateSpecHostAliasesToTerraform(struct?: DeploymentSpecTemplateSpecHostAliases): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface DeploymentSpecTemplateSpecImagePullSecrets {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
}

function deploymentSpecTemplateSpecImagePullSecretsToTerraform(struct?: DeploymentSpecTemplateSpecImagePullSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefOutputReference | DeploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class DeploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key - computed: false, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable | undefined; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable | undefined) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional
  }
}
export interface DeploymentSpecTemplateSpecInitContainerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#api_version Deployment#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_path Deployment#field_path}
  */
  readonly fieldPath?: string;
}

function deploymentSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvValueFromFieldRefOutputReference | DeploymentSpecTemplateSpecInitContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class DeploymentSpecTemplateSpecInitContainerEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string | undefined; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string | undefined) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string | undefined; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string | undefined) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath
  }
}
export interface DeploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_name Deployment#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#divisor Deployment#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource Deployment#resource}
  */
  readonly resource: string;
}

function deploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefOutputReference | DeploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class DeploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string | undefined; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string | undefined) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string | undefined; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string | undefined) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }
}
export interface DeploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefOutputReference | DeploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class DeploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key - computed: false, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable | undefined; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable | undefined) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional
  }
}
export interface DeploymentSpecTemplateSpecInitContainerEnvValueFrom {
  /**
  * config_map_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map_key_ref Deployment#config_map_key_ref}
  */
  readonly configMapKeyRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_ref Deployment#field_ref}
  */
  readonly fieldRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource_field_ref Deployment#resource_field_ref}
  */
  readonly resourceFieldRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef;
  /**
  * secret_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_key_ref Deployment#secret_key_ref}
  */
  readonly secretKeyRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef;
}

function deploymentSpecTemplateSpecInitContainerEnvValueFromToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvValueFromOutputReference | DeploymentSpecTemplateSpecInitContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: deploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: deploymentSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: deploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: deploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}

export class DeploymentSpecTemplateSpecInitContainerEnvValueFromOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef | undefined; 
  private __configMapKeyRefOutput = new DeploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefOutputReference(this as any, "config_map_key_ref", true);
  public get configMapKeyRef() {
    return this.__configMapKeyRefOutput;
  }
  public putConfigMapKeyRef(value: DeploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef | undefined) {
    this._configMapKeyRef = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromFieldRef | undefined; 
  private __fieldRefOutput = new DeploymentSpecTemplateSpecInitContainerEnvValueFromFieldRefOutputReference(this as any, "field_ref", true);
  public get fieldRef() {
    return this.__fieldRefOutput;
  }
  public putFieldRef(value: DeploymentSpecTemplateSpecInitContainerEnvValueFromFieldRef | undefined) {
    this._fieldRef = value;
  }
  public resetFieldRef() {
    this._fieldRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef | undefined; 
  private __resourceFieldRefOutput = new DeploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefOutputReference(this as any, "resource_field_ref", true);
  public get resourceFieldRef() {
    return this.__resourceFieldRefOutput;
  }
  public putResourceFieldRef(value: DeploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef | undefined) {
    this._resourceFieldRef = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef | undefined; 
  private __secretKeyRefOutput = new DeploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefOutputReference(this as any, "secret_key_ref", true);
  public get secretKeyRef() {
    return this.__secretKeyRefOutput;
  }
  public putSecretKeyRef(value: DeploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef | undefined) {
    this._secretKeyRef = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef
  }
}
export interface DeploymentSpecTemplateSpecInitContainerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
  /**
  * value_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value_from Deployment#value_from}
  */
  readonly valueFrom?: DeploymentSpecTemplateSpecInitContainerEnvValueFrom;
}

function deploymentSpecTemplateSpecInitContainerEnvToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: deploymentSpecTemplateSpecInitContainerEnvValueFromToTerraform(struct!.valueFrom),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Specify whether the ConfigMap must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvFromConfigMapRefOutputReference | DeploymentSpecTemplateSpecInitContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class DeploymentSpecTemplateSpecInitContainerEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable | undefined; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable | undefined) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional
  }
}
export interface DeploymentSpecTemplateSpecInitContainerEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvFromSecretRefOutputReference | DeploymentSpecTemplateSpecInitContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class DeploymentSpecTemplateSpecInitContainerEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable | undefined; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable | undefined) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional
  }
}
export interface DeploymentSpecTemplateSpecInitContainerEnvFrom {
  /**
  * An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#prefix Deployment#prefix}
  */
  readonly prefix?: string;
  /**
  * config_map_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map_ref Deployment#config_map_ref}
  */
  readonly configMapRef?: DeploymentSpecTemplateSpecInitContainerEnvFromConfigMapRef;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_ref Deployment#secret_ref}
  */
  readonly secretRef?: DeploymentSpecTemplateSpecInitContainerEnvFromSecretRef;
}

function deploymentSpecTemplateSpecInitContainerEnvFromToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: deploymentSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    secret_ref: deploymentSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePostStartExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartExecOutputReference | DeploymentSpecTemplateSpecInitContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class DeploymentSpecTemplateSpecInitContainerLifecyclePostStartExecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[] | undefined; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }
}
export interface DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetOutputReference | DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: string | undefined; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader[] | undefined) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader
  }
}
export interface DeploymentSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePostStart {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePostStartToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: deploymentSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform(struct!.exec),
    http_get: deploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePreStopExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopExecOutputReference | DeploymentSpecTemplateSpecInitContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class DeploymentSpecTemplateSpecInitContainerLifecyclePreStopExecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[] | undefined; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }
}
export interface DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetOutputReference | DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: string | undefined; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader[] | undefined) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader
  }
}
export interface DeploymentSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePreStop {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePreStopToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: deploymentSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform(struct!.exec),
    http_get: deploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecycle {
  /**
  * post_start block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#post_start Deployment#post_start}
  */
  readonly postStart?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStart[];
  /**
  * pre_stop block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pre_stop Deployment#pre_stop}
  */
  readonly preStop?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStop[];
}

function deploymentSpecTemplateSpecInitContainerLifecycleToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecycleOutputReference | DeploymentSpecTemplateSpecInitContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export class DeploymentSpecTemplateSpecInitContainerLifecycleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStart[] | undefined; 
  public get postStart() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('post_start') as any;
  }
  public set postStart(value: DeploymentSpecTemplateSpecInitContainerLifecyclePostStart[] | undefined) {
    this._postStart = value;
  }
  public resetPostStart() {
    this._postStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStop[] | undefined; 
  public get preStop() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pre_stop') as any;
  }
  public set preStop(value: DeploymentSpecTemplateSpecInitContainerLifecyclePreStop[] | undefined) {
    this._preStop = value;
  }
  public resetPreStop() {
    this._preStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop
  }
}
export interface DeploymentSpecTemplateSpecInitContainerLivenessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecInitContainerLivenessProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLivenessProbeExecOutputReference | DeploymentSpecTemplateSpecInitContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class DeploymentSpecTemplateSpecInitContainerLivenessProbeExecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[] | undefined; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }
}
export interface DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetOutputReference | DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: string | undefined; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader[] | undefined) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader
  }
}
export interface DeploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLivenessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecInitContainerLivenessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocket[];
}

function deploymentSpecTemplateSpecInitContainerLivenessProbeToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLivenessProbeOutputReference | DeploymentSpecTemplateSpecInitContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: deploymentSpecTemplateSpecInitContainerLivenessProbeExecToTerraform(struct!.exec),
    http_get: deploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class DeploymentSpecTemplateSpecInitContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number | undefined; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number | undefined) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number | undefined; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number | undefined) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number | undefined; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number | undefined) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number | undefined; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number | undefined) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number | undefined; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number | undefined) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: DeploymentSpecTemplateSpecInitContainerLivenessProbeExec | undefined; 
  private __execOutput = new DeploymentSpecTemplateSpecInitContainerLivenessProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: DeploymentSpecTemplateSpecInitContainerLivenessProbeExec | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGet | undefined; 
  private __httpGetOutput = new DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGet | undefined) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: DeploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: DeploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocket[] | undefined) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket
  }
}
export interface DeploymentSpecTemplateSpecInitContainerPort {
  /**
  * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_port Deployment#container_port}
  */
  readonly containerPort: number;
  /**
  * What host IP to bind the external port to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_ip Deployment#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_port Deployment#host_port}
  */
  readonly hostPort?: number;
  /**
  * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP or TCP. Defaults to "TCP".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#protocol Deployment#protocol}
  */
  readonly protocol?: string;
}

function deploymentSpecTemplateSpecInitContainerPortToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecInitContainerReadinessProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerReadinessProbeExecOutputReference | DeploymentSpecTemplateSpecInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class DeploymentSpecTemplateSpecInitContainerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[] | undefined; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }
}
export interface DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetOutputReference | DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: string | undefined; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader[] | undefined) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader
  }
}
export interface DeploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerReadinessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecInitContainerReadinessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocket[];
}

function deploymentSpecTemplateSpecInitContainerReadinessProbeToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerReadinessProbeOutputReference | DeploymentSpecTemplateSpecInitContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: deploymentSpecTemplateSpecInitContainerReadinessProbeExecToTerraform(struct!.exec),
    http_get: deploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class DeploymentSpecTemplateSpecInitContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number | undefined; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number | undefined) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number | undefined; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number | undefined) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number | undefined; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number | undefined) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number | undefined; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number | undefined) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number | undefined; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number | undefined) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: DeploymentSpecTemplateSpecInitContainerReadinessProbeExec | undefined; 
  private __execOutput = new DeploymentSpecTemplateSpecInitContainerReadinessProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: DeploymentSpecTemplateSpecInitContainerReadinessProbeExec | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGet | undefined; 
  private __httpGetOutput = new DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGet | undefined) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: DeploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: DeploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocket[] | undefined) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket
  }
}
export interface DeploymentSpecTemplateSpecInitContainerResources {
  /**
  * Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#limits Deployment#limits}
  */
  readonly limits?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#requests Deployment#requests}
  */
  readonly requests?: { [key: string]: string } | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecInitContainerResourcesToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerResourcesOutputReference | DeploymentSpecTemplateSpecInitContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export class DeploymentSpecTemplateSpecInitContainerResourcesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // limits - computed: true, optional: true, required: false
  private _limits?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get limits() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('limits') as any;
  }
  public set limits(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits
  }

  // requests - computed: true, optional: true, required: false
  private _requests?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get requests() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('requests') as any;
  }
  public set requests(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests
  }
}
export interface DeploymentSpecTemplateSpecInitContainerSecurityContextCapabilities {
  /**
  * Added capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#add Deployment#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#drop Deployment#drop}
  */
  readonly drop?: string[];
}

function deploymentSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerSecurityContextCapabilitiesOutputReference | DeploymentSpecTemplateSpecInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export class DeploymentSpecTemplateSpecInitContainerSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[] | undefined; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[] | undefined) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[] | undefined; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[] | undefined) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop
  }
}
export interface DeploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#level Deployment#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#role Deployment#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#type Deployment#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#user Deployment#user}
  */
  readonly user?: string;
}

function deploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsOutputReference | DeploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export class DeploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // level - computed: false, optional: true, required: false
  private _level?: string | undefined; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string | undefined) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level
  }

  // role - computed: false, optional: true, required: false
  private _role?: string | undefined; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string | undefined) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // user - computed: false, optional: true, required: false
  private _user?: string | undefined; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }
}
export interface DeploymentSpecTemplateSpecInitContainerSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#allow_privilege_escalation Deployment#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#privileged Deployment#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Whether this container has a read-only root filesystem. Default is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only_root_filesystem Deployment#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_group Deployment#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_non_root Deployment#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_user Deployment#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#capabilities Deployment#capabilities}
  */
  readonly capabilities?: DeploymentSpecTemplateSpecInitContainerSecurityContextCapabilities;
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#se_linux_options Deployment#se_linux_options}
  */
  readonly seLinuxOptions?: DeploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions;
}

function deploymentSpecTemplateSpecInitContainerSecurityContextToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerSecurityContextOutputReference | DeploymentSpecTemplateSpecInitContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    capabilities: deploymentSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    se_linux_options: deploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
  }
}

export class DeploymentSpecTemplateSpecInitContainerSecurityContextOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable | undefined; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation') as any;
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable | undefined) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable | undefined; 
  public get privileged() {
    return this.getBooleanAttribute('privileged') as any;
  }
  public set privileged(value: boolean | cdktf.IResolvable | undefined) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable | undefined; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem') as any;
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: string | undefined; 
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }
  public set runAsGroup(value: string | undefined) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable | undefined; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root') as any;
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable | undefined) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: string | undefined; 
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }
  public set runAsUser(value: string | undefined) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: DeploymentSpecTemplateSpecInitContainerSecurityContextCapabilities | undefined; 
  private __capabilitiesOutput = new DeploymentSpecTemplateSpecInitContainerSecurityContextCapabilitiesOutputReference(this as any, "capabilities", true);
  public get capabilities() {
    return this.__capabilitiesOutput;
  }
  public putCapabilities(value: DeploymentSpecTemplateSpecInitContainerSecurityContextCapabilities | undefined) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions?: DeploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions | undefined; 
  private __seLinuxOptionsOutput = new DeploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsOutputReference(this as any, "se_linux_options", true);
  public get seLinuxOptions() {
    return this.__seLinuxOptionsOutput;
  }
  public putSeLinuxOptions(value: DeploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions | undefined) {
    this._seLinuxOptions = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions
  }
}
export interface DeploymentSpecTemplateSpecInitContainerStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecInitContainerStartupProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerStartupProbeExecOutputReference | DeploymentSpecTemplateSpecInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class DeploymentSpecTemplateSpecInitContainerStartupProbeExecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[] | undefined; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }
}
export interface DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGetOutputReference | DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: string | undefined; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader[] | undefined) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader
  }
}
export interface DeploymentSpecTemplateSpecInitContainerStartupProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerStartupProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecInitContainerStartupProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecInitContainerStartupProbeTcpSocket[];
}

function deploymentSpecTemplateSpecInitContainerStartupProbeToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerStartupProbeOutputReference | DeploymentSpecTemplateSpecInitContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: deploymentSpecTemplateSpecInitContainerStartupProbeExecToTerraform(struct!.exec),
    http_get: deploymentSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class DeploymentSpecTemplateSpecInitContainerStartupProbeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number | undefined; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number | undefined) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number | undefined; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number | undefined) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number | undefined; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number | undefined) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number | undefined; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number | undefined) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number | undefined; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number | undefined) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: DeploymentSpecTemplateSpecInitContainerStartupProbeExec | undefined; 
  private __execOutput = new DeploymentSpecTemplateSpecInitContainerStartupProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: DeploymentSpecTemplateSpecInitContainerStartupProbeExec | undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGet | undefined; 
  private __httpGetOutput = new DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGet | undefined) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: DeploymentSpecTemplateSpecInitContainerStartupProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: DeploymentSpecTemplateSpecInitContainerStartupProbeTcpSocket[] | undefined) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket
  }
}
export interface DeploymentSpecTemplateSpecInitContainerVolumeMount {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mount_path Deployment#mount_path}
  */
  readonly mountPath: string;
  /**
  * Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mount_propagation Deployment#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#sub_path Deployment#sub_path}
  */
  readonly subPath?: string;
}

function deploymentSpecTemplateSpecInitContainerVolumeMountToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface DeploymentSpecTemplateSpecInitContainer {
  /**
  * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#args Deployment#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
  /**
  * Docker image name. More info: http://kubernetes.io/docs/user-guide/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#image Deployment#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#image_pull_policy Deployment#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#stdin Deployment#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#stdin_once Deployment#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#termination_message_path Deployment#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#termination_message_policy Deployment#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tty Deployment#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#working_dir Deployment#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#env Deployment#env}
  */
  readonly env?: DeploymentSpecTemplateSpecInitContainerEnv[];
  /**
  * env_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#env_from Deployment#env_from}
  */
  readonly envFrom?: DeploymentSpecTemplateSpecInitContainerEnvFrom[];
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#lifecycle Deployment#lifecycle}
  */
  readonly lifecycle?: DeploymentSpecTemplateSpecInitContainerLifecycle;
  /**
  * liveness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#liveness_probe Deployment#liveness_probe}
  */
  readonly livenessProbe?: DeploymentSpecTemplateSpecInitContainerLivenessProbe;
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: DeploymentSpecTemplateSpecInitContainerPort[];
  /**
  * readiness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#readiness_probe Deployment#readiness_probe}
  */
  readonly readinessProbe?: DeploymentSpecTemplateSpecInitContainerReadinessProbe;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resources Deployment#resources}
  */
  readonly resources?: DeploymentSpecTemplateSpecInitContainerResources;
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#security_context Deployment#security_context}
  */
  readonly securityContext?: DeploymentSpecTemplateSpecInitContainerSecurityContext;
  /**
  * startup_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#startup_probe Deployment#startup_probe}
  */
  readonly startupProbe?: DeploymentSpecTemplateSpecInitContainerStartupProbe;
  /**
  * volume_mount block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_mount Deployment#volume_mount}
  */
  readonly volumeMount?: DeploymentSpecTemplateSpecInitContainerVolumeMount[];
}

function deploymentSpecTemplateSpecInitContainerToTerraform(struct?: DeploymentSpecTemplateSpecInitContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: deploymentSpecTemplateSpecInitContainerLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: deploymentSpecTemplateSpecInitContainerLivenessProbeToTerraform(struct!.livenessProbe),
    port: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerPortToTerraform)(struct!.port),
    readiness_probe: deploymentSpecTemplateSpecInitContainerReadinessProbeToTerraform(struct!.readinessProbe),
    resources: deploymentSpecTemplateSpecInitContainerResourcesToTerraform(struct!.resources),
    security_context: deploymentSpecTemplateSpecInitContainerSecurityContextToTerraform(struct!.securityContext),
    startup_probe: deploymentSpecTemplateSpecInitContainerStartupProbeToTerraform(struct!.startupProbe),
    volume_mount: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface DeploymentSpecTemplateSpecReadinessGate {
  /**
  * refers to a condition in the pod's condition list with matching type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#condition_type Deployment#condition_type}
  */
  readonly conditionType: string;
}

function deploymentSpecTemplateSpecReadinessGateToTerraform(struct?: DeploymentSpecTemplateSpecReadinessGate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}

export interface DeploymentSpecTemplateSpecSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#level Deployment#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#role Deployment#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#type Deployment#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#user Deployment#user}
  */
  readonly user?: string;
}

function deploymentSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct?: DeploymentSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference | DeploymentSpecTemplateSpecSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export class DeploymentSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // level - computed: false, optional: true, required: false
  private _level?: string | undefined; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string | undefined) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level
  }

  // role - computed: false, optional: true, required: false
  private _role?: string | undefined; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string | undefined) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // user - computed: false, optional: true, required: false
  private _user?: string | undefined; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }
}
export interface DeploymentSpecTemplateSpecSecurityContextSysctl {
  /**
  * Name of a property to set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Value of a property to set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value: string;
}

function deploymentSpecTemplateSpecSecurityContextSysctlToTerraform(struct?: DeploymentSpecTemplateSpecSecurityContextSysctl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_group Deployment#fs_group}
  */
  readonly fsGroup?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_group Deployment#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_non_root Deployment#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_user Deployment#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID. If unspecified, no groups will be added to any container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#supplemental_groups Deployment#supplemental_groups}
  */
  readonly supplementalGroups?: number[];
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#se_linux_options Deployment#se_linux_options}
  */
  readonly seLinuxOptions?: DeploymentSpecTemplateSpecSecurityContextSeLinuxOptions;
  /**
  * sysctl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#sysctl Deployment#sysctl}
  */
  readonly sysctl?: DeploymentSpecTemplateSpecSecurityContextSysctl[];
}

function deploymentSpecTemplateSpecSecurityContextToTerraform(struct?: DeploymentSpecTemplateSpecSecurityContextOutputReference | DeploymentSpecTemplateSpecSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.stringToTerraform(struct!.fsGroup),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    supplemental_groups: cdktf.listMapper(cdktf.numberToTerraform)(struct!.supplementalGroups),
    se_linux_options: deploymentSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    sysctl: cdktf.listMapper(deploymentSpecTemplateSpecSecurityContextSysctlToTerraform)(struct!.sysctl),
  }
}

export class DeploymentSpecTemplateSpecSecurityContextOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: string | undefined; 
  public get fsGroup() {
    return this.getStringAttribute('fs_group');
  }
  public set fsGroup(value: string | undefined) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: string | undefined; 
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }
  public set runAsGroup(value: string | undefined) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable | undefined; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root') as any;
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable | undefined) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: string | undefined; 
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }
  public set runAsUser(value: string | undefined) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: number[] | undefined; 
  public get supplementalGroups() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('supplemental_groups') as any;
  }
  public set supplementalGroups(value: number[] | undefined) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions?: DeploymentSpecTemplateSpecSecurityContextSeLinuxOptions | undefined; 
  private __seLinuxOptionsOutput = new DeploymentSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference(this as any, "se_linux_options", true);
  public get seLinuxOptions() {
    return this.__seLinuxOptionsOutput;
  }
  public putSeLinuxOptions(value: DeploymentSpecTemplateSpecSecurityContextSeLinuxOptions | undefined) {
    this._seLinuxOptions = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions
  }

  // sysctl - computed: false, optional: true, required: false
  private _sysctl?: DeploymentSpecTemplateSpecSecurityContextSysctl[] | undefined; 
  public get sysctl() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sysctl') as any;
  }
  public set sysctl(value: DeploymentSpecTemplateSpecSecurityContextSysctl[] | undefined) {
    this._sysctl = value;
  }
  public resetSysctl() {
    this._sysctl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlInput() {
    return this._sysctl
  }
}
export interface DeploymentSpecTemplateSpecToleration {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#effect Deployment#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#toleration_seconds Deployment#toleration_seconds}
  */
  readonly tolerationSeconds?: string;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecTolerationToTerraform(struct?: DeploymentSpecTemplateSpecToleration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.stringToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions[];
}

function deploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorToTerraform(struct?: DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecTopologySpreadConstraint {
  /**
  * describes the degree to which pods may be unevenly distributed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#max_skew Deployment#max_skew}
  */
  readonly maxSkew?: number;
  /**
  * the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_key Deployment#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * indicates how to deal with a pod if it doesn't satisfy the spread constraint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#when_unsatisfiable Deployment#when_unsatisfiable}
  */
  readonly whenUnsatisfiable?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#label_selector Deployment#label_selector}
  */
  readonly labelSelector?: DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelector[];
}

function deploymentSpecTemplateSpecTopologySpreadConstraintToTerraform(struct?: DeploymentSpecTemplateSpecTopologySpreadConstraint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
    label_selector: cdktf.listMapper(deploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface DeploymentSpecTemplateSpecVolumeAwsElasticBlockStore {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#partition Deployment#partition}
  */
  readonly partition?: number;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_id Deployment#volume_id}
  */
  readonly volumeId: string;
}

function deploymentSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform(struct?: DeploymentSpecTemplateSpecVolumeAwsElasticBlockStoreOutputReference | DeploymentSpecTemplateSpecVolumeAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export class DeploymentSpecTemplateSpecVolumeAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number | undefined; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number | undefined) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId
  }
}
export interface DeploymentSpecTemplateSpecVolumeAzureDisk {
  /**
  * Host Caching mode: None, Read Only, Read Write.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#caching_mode Deployment#caching_mode}
  */
  readonly cachingMode: string;
  /**
  * The URI the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#data_disk_uri Deployment#data_disk_uri}
  */
  readonly dataDiskUri: string;
  /**
  * The Name of the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#disk_name Deployment#disk_name}
  */
  readonly diskName: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#kind Deployment#kind}
  */
  readonly kind?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecVolumeAzureDiskToTerraform(struct?: DeploymentSpecTemplateSpecVolumeAzureDiskOutputReference | DeploymentSpecTemplateSpecVolumeAzureDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    data_disk_uri: cdktf.stringToTerraform(struct!.dataDiskUri),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class DeploymentSpecTemplateSpecVolumeAzureDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // caching_mode - computed: false, optional: false, required: true
  private _cachingMode?: string; 
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }
  public set cachingMode(value: string) {
    this._cachingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingModeInput() {
    return this._cachingMode
  }

  // data_disk_uri - computed: false, optional: false, required: true
  private _dataDiskUri?: string; 
  public get dataDiskUri() {
    return this.getStringAttribute('data_disk_uri');
  }
  public set dataDiskUri(value: string) {
    this._dataDiskUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskUriInput() {
    return this._dataDiskUri
  }

  // disk_name - computed: false, optional: false, required: true
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string | undefined; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string | undefined) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }
}
export interface DeploymentSpecTemplateSpecVolumeAzureFile {
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of secret that contains Azure Storage Account Name and Key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_name Deployment#secret_name}
  */
  readonly secretName: string;
  /**
  * The namespace of the secret that contains Azure Storage Account Name and Key. For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_namespace Deployment#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * Share Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#share_name Deployment#share_name}
  */
  readonly shareName: string;
}

function deploymentSpecTemplateSpecVolumeAzureFileToTerraform(struct?: DeploymentSpecTemplateSpecVolumeAzureFileOutputReference | DeploymentSpecTemplateSpecVolumeAzureFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}

export class DeploymentSpecTemplateSpecVolumeAzureFileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName
  }

  // secret_namespace - computed: false, optional: true, required: false
  private _secretNamespace?: string | undefined; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string | undefined) {
    this._secretNamespace = value;
  }
  public resetSecretNamespace() {
    this._secretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName
  }
}
export interface DeploymentSpecTemplateSpecVolumeCephFsSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeCephFsSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCephFsSecretRefOutputReference | DeploymentSpecTemplateSpecVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DeploymentSpecTemplateSpecVolumeCephFsSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface DeploymentSpecTemplateSpecVolumeCephFs {
  /**
  * Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#monitors Deployment#monitors}
  */
  readonly monitors: string[];
  /**
  * Used as the mounted root, rather than the full Ceph tree, default is /
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_file Deployment#secret_file}
  */
  readonly secretFile?: string;
  /**
  * User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#user Deployment#user}
  */
  readonly user?: string;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_ref Deployment#secret_ref}
  */
  readonly secretRef?: DeploymentSpecTemplateSpecVolumeCephFsSecretRef;
}

function deploymentSpecTemplateSpecVolumeCephFsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCephFsOutputReference | DeploymentSpecTemplateSpecVolumeCephFs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    user: cdktf.stringToTerraform(struct!.user),
    secret_ref: deploymentSpecTemplateSpecVolumeCephFsSecretRefToTerraform(struct!.secretRef),
  }
}

export class DeploymentSpecTemplateSpecVolumeCephFsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // secret_file - computed: false, optional: true, required: false
  private _secretFile?: string | undefined; 
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }
  public set secretFile(value: string | undefined) {
    this._secretFile = value;
  }
  public resetSecretFile() {
    this._secretFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFileInput() {
    return this._secretFile
  }

  // user - computed: false, optional: true, required: false
  private _user?: string | undefined; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: DeploymentSpecTemplateSpecVolumeCephFsSecretRef | undefined; 
  private __secretRefOutput = new DeploymentSpecTemplateSpecVolumeCephFsSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this.__secretRefOutput;
  }
  public putSecretRef(value: DeploymentSpecTemplateSpecVolumeCephFsSecretRef | undefined) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef
  }
}
export interface DeploymentSpecTemplateSpecVolumeCinder {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_id Deployment#volume_id}
  */
  readonly volumeId: string;
}

function deploymentSpecTemplateSpecVolumeCinderToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCinderOutputReference | DeploymentSpecTemplateSpecVolumeCinder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export class DeploymentSpecTemplateSpecVolumeCinderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId
  }
}
export interface DeploymentSpecTemplateSpecVolumeConfigMapItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
}

function deploymentSpecTemplateSpecVolumeConfigMapItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DeploymentSpecTemplateSpecVolumeConfigMap {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#default_mode Deployment#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the ConfigMap or its keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeConfigMapItems[];
}

function deploymentSpecTemplateSpecVolumeConfigMapToTerraform(struct?: DeploymentSpecTemplateSpecVolumeConfigMapOutputReference | DeploymentSpecTemplateSpecVolumeConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeConfigMapItemsToTerraform)(struct!.items),
  }
}

export class DeploymentSpecTemplateSpecVolumeConfigMapOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: string | undefined; 
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }
  public set defaultMode(value: string | undefined) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable | undefined; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable | undefined) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional
  }

  // items - computed: false, optional: true, required: false
  private _items?: DeploymentSpecTemplateSpecVolumeConfigMapItems[] | undefined; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
  public set items(value: DeploymentSpecTemplateSpecVolumeConfigMapItems[] | undefined) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items
  }
}
export interface DeploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRefOutputReference | DeploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DeploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface DeploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRefOutputReference | DeploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DeploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface DeploymentSpecTemplateSpecVolumeCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCsiNodePublishSecretRefOutputReference | DeploymentSpecTemplateSpecVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DeploymentSpecTemplateSpecVolumeCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface DeploymentSpecTemplateSpecVolumeCsiNodeStageSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeCsiNodeStageSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCsiNodeStageSecretRefOutputReference | DeploymentSpecTemplateSpecVolumeCsiNodeStageSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DeploymentSpecTemplateSpecVolumeCsiNodeStageSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface DeploymentSpecTemplateSpecVolumeCsi {
  /**
  * the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#driver Deployment#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Attributes of the volume to publish.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_attributes Deployment#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_handle Deployment#volume_handle}
  */
  readonly volumeHandle: string;
  /**
  * controller_expand_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#controller_expand_secret_ref Deployment#controller_expand_secret_ref}
  */
  readonly controllerExpandSecretRef?: DeploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRef;
  /**
  * controller_publish_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#controller_publish_secret_ref Deployment#controller_publish_secret_ref}
  */
  readonly controllerPublishSecretRef?: DeploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRef;
  /**
  * node_publish_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_publish_secret_ref Deployment#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: DeploymentSpecTemplateSpecVolumeCsiNodePublishSecretRef;
  /**
  * node_stage_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_stage_secret_ref Deployment#node_stage_secret_ref}
  */
  readonly nodeStageSecretRef?: DeploymentSpecTemplateSpecVolumeCsiNodeStageSecretRef;
}

function deploymentSpecTemplateSpecVolumeCsiToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCsiOutputReference | DeploymentSpecTemplateSpecVolumeCsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.volumeAttributes),
    volume_handle: cdktf.stringToTerraform(struct!.volumeHandle),
    controller_expand_secret_ref: deploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRefToTerraform(struct!.controllerExpandSecretRef),
    controller_publish_secret_ref: deploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRefToTerraform(struct!.controllerPublishSecretRef),
    node_publish_secret_ref: deploymentSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform(struct!.nodePublishSecretRef),
    node_stage_secret_ref: deploymentSpecTemplateSpecVolumeCsiNodeStageSecretRefToTerraform(struct!.nodeStageSecretRef),
  }
}

export class DeploymentSpecTemplateSpecVolumeCsiOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // volume_attributes - computed: false, optional: true, required: false
  private _volumeAttributes?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get volumeAttributes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volume_attributes') as any;
  }
  public set volumeAttributes(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._volumeAttributes = value;
  }
  public resetVolumeAttributes() {
    this._volumeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesInput() {
    return this._volumeAttributes
  }

  // volume_handle - computed: false, optional: false, required: true
  private _volumeHandle?: string; 
  public get volumeHandle() {
    return this.getStringAttribute('volume_handle');
  }
  public set volumeHandle(value: string) {
    this._volumeHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeHandleInput() {
    return this._volumeHandle
  }

  // controller_expand_secret_ref - computed: false, optional: true, required: false
  private _controllerExpandSecretRef?: DeploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRef | undefined; 
  private __controllerExpandSecretRefOutput = new DeploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRefOutputReference(this as any, "controller_expand_secret_ref", true);
  public get controllerExpandSecretRef() {
    return this.__controllerExpandSecretRefOutput;
  }
  public putControllerExpandSecretRef(value: DeploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRef | undefined) {
    this._controllerExpandSecretRef = value;
  }
  public resetControllerExpandSecretRef() {
    this._controllerExpandSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerExpandSecretRefInput() {
    return this._controllerExpandSecretRef
  }

  // controller_publish_secret_ref - computed: false, optional: true, required: false
  private _controllerPublishSecretRef?: DeploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRef | undefined; 
  private __controllerPublishSecretRefOutput = new DeploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRefOutputReference(this as any, "controller_publish_secret_ref", true);
  public get controllerPublishSecretRef() {
    return this.__controllerPublishSecretRefOutput;
  }
  public putControllerPublishSecretRef(value: DeploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRef | undefined) {
    this._controllerPublishSecretRef = value;
  }
  public resetControllerPublishSecretRef() {
    this._controllerPublishSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerPublishSecretRefInput() {
    return this._controllerPublishSecretRef
  }

  // node_publish_secret_ref - computed: false, optional: true, required: false
  private _nodePublishSecretRef?: DeploymentSpecTemplateSpecVolumeCsiNodePublishSecretRef | undefined; 
  private __nodePublishSecretRefOutput = new DeploymentSpecTemplateSpecVolumeCsiNodePublishSecretRefOutputReference(this as any, "node_publish_secret_ref", true);
  public get nodePublishSecretRef() {
    return this.__nodePublishSecretRefOutput;
  }
  public putNodePublishSecretRef(value: DeploymentSpecTemplateSpecVolumeCsiNodePublishSecretRef | undefined) {
    this._nodePublishSecretRef = value;
  }
  public resetNodePublishSecretRef() {
    this._nodePublishSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublishSecretRefInput() {
    return this._nodePublishSecretRef
  }

  // node_stage_secret_ref - computed: false, optional: true, required: false
  private _nodeStageSecretRef?: DeploymentSpecTemplateSpecVolumeCsiNodeStageSecretRef | undefined; 
  private __nodeStageSecretRefOutput = new DeploymentSpecTemplateSpecVolumeCsiNodeStageSecretRefOutputReference(this as any, "node_stage_secret_ref", true);
  public get nodeStageSecretRef() {
    return this.__nodeStageSecretRefOutput;
  }
  public putNodeStageSecretRef(value: DeploymentSpecTemplateSpecVolumeCsiNodeStageSecretRef | undefined) {
    this._nodeStageSecretRef = value;
  }
  public resetNodeStageSecretRef() {
    this._nodeStageSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStageSecretRefInput() {
    return this._nodeStageSecretRef
  }
}
export interface DeploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#api_version Deployment#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_path Deployment#field_path}
  */
  readonly fieldPath?: string;
}

function deploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRefOutputReference | DeploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class DeploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string | undefined; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string | undefined) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string | undefined; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string | undefined) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath
  }
}
export interface DeploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_name Deployment#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#divisor Deployment#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource Deployment#resource}
  */
  readonly resource: string;
}

function deploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefOutputReference | DeploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class DeploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string | undefined; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string | undefined) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }
}
export interface DeploymentSpecTemplateSpecVolumeDownwardApiItems {
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path: string;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_ref Deployment#field_ref}
  */
  readonly fieldRef: DeploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource_field_ref Deployment#resource_field_ref}
  */
  readonly resourceFieldRef?: DeploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef;
}

function deploymentSpecTemplateSpecVolumeDownwardApiItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: deploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: deploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}

export interface DeploymentSpecTemplateSpecVolumeDownwardApi {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#default_mode Deployment#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeDownwardApiItems[];
}

function deploymentSpecTemplateSpecVolumeDownwardApiToTerraform(struct?: DeploymentSpecTemplateSpecVolumeDownwardApiOutputReference | DeploymentSpecTemplateSpecVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeDownwardApiItemsToTerraform)(struct!.items),
  }
}

export class DeploymentSpecTemplateSpecVolumeDownwardApiOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: string | undefined; 
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }
  public set defaultMode(value: string | undefined) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode
  }

  // items - computed: false, optional: true, required: false
  private _items?: DeploymentSpecTemplateSpecVolumeDownwardApiItems[] | undefined; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
  public set items(value: DeploymentSpecTemplateSpecVolumeDownwardApiItems[] | undefined) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items
  }
}
export interface DeploymentSpecTemplateSpecVolumeEmptyDir {
  /**
  * What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#medium Deployment#medium}
  */
  readonly medium?: string;
  /**
  * Total amount of local storage required for this EmptyDir volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#size_limit Deployment#size_limit}
  */
  readonly sizeLimit?: string;
}

function deploymentSpecTemplateSpecVolumeEmptyDirToTerraform(struct?: DeploymentSpecTemplateSpecVolumeEmptyDirOutputReference | DeploymentSpecTemplateSpecVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}

export class DeploymentSpecTemplateSpecVolumeEmptyDirOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string | undefined; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string | undefined) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string | undefined; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string | undefined) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit
  }
}
export interface DeploymentSpecTemplateSpecVolumeFc {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * FC target lun number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#lun Deployment#lun}
  */
  readonly lun: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * FC target worldwide names (WWNs)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#target_ww_ns Deployment#target_ww_ns}
  */
  readonly targetWwNs: string[];
}

function deploymentSpecTemplateSpecVolumeFcToTerraform(struct?: DeploymentSpecTemplateSpecVolumeFcOutputReference | DeploymentSpecTemplateSpecVolumeFc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetWwNs),
  }
}

export class DeploymentSpecTemplateSpecVolumeFcOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // target_ww_ns - computed: false, optional: false, required: true
  private _targetWwNs?: string[]; 
  public get targetWwNs() {
    return this.getListAttribute('target_ww_ns');
  }
  public set targetWwNs(value: string[]) {
    this._targetWwNs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWwNsInput() {
    return this._targetWwNs
  }
}
export interface DeploymentSpecTemplateSpecVolumeFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeFlexVolumeSecretRefOutputReference | DeploymentSpecTemplateSpecVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DeploymentSpecTemplateSpecVolumeFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface DeploymentSpecTemplateSpecVolumeFlexVolume {
  /**
  * Driver is the name of the driver to use for this volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#driver Deployment#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Extra command options if any.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#options Deployment#options}
  */
  readonly options?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_ref Deployment#secret_ref}
  */
  readonly secretRef?: DeploymentSpecTemplateSpecVolumeFlexVolumeSecretRef;
}

function deploymentSpecTemplateSpecVolumeFlexVolumeToTerraform(struct?: DeploymentSpecTemplateSpecVolumeFlexVolumeOutputReference | DeploymentSpecTemplateSpecVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: deploymentSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}

export class DeploymentSpecTemplateSpecVolumeFlexVolumeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get options() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: DeploymentSpecTemplateSpecVolumeFlexVolumeSecretRef | undefined; 
  private __secretRefOutput = new DeploymentSpecTemplateSpecVolumeFlexVolumeSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this.__secretRefOutput;
  }
  public putSecretRef(value: DeploymentSpecTemplateSpecVolumeFlexVolumeSecretRef | undefined) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef
  }
}
export interface DeploymentSpecTemplateSpecVolumeFlocker {
  /**
  * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#dataset_name Deployment#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * UUID of the dataset. This is unique identifier of a Flocker dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#dataset_uuid Deployment#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

function deploymentSpecTemplateSpecVolumeFlockerToTerraform(struct?: DeploymentSpecTemplateSpecVolumeFlockerOutputReference | DeploymentSpecTemplateSpecVolumeFlocker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}

export class DeploymentSpecTemplateSpecVolumeFlockerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string | undefined; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string | undefined) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName
  }

  // dataset_uuid - computed: false, optional: true, required: false
  private _datasetUuid?: string | undefined; 
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
  public set datasetUuid(value: string | undefined) {
    this._datasetUuid = value;
  }
  public resetDatasetUuid() {
    this._datasetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUuidInput() {
    return this._datasetUuid
  }
}
export interface DeploymentSpecTemplateSpecVolumeGcePersistentDisk {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#partition Deployment#partition}
  */
  readonly partition?: number;
  /**
  * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pd_name Deployment#pd_name}
  */
  readonly pdName: string;
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecVolumeGcePersistentDiskToTerraform(struct?: DeploymentSpecTemplateSpecVolumeGcePersistentDiskOutputReference | DeploymentSpecTemplateSpecVolumeGcePersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class DeploymentSpecTemplateSpecVolumeGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number | undefined; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number | undefined) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition
  }

  // pd_name - computed: false, optional: false, required: true
  private _pdName?: string; 
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }
  public set pdName(value: string) {
    this._pdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdNameInput() {
    return this._pdName
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }
}
export interface DeploymentSpecTemplateSpecVolumeGitRepo {
  /**
  * Target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#directory Deployment#directory}
  */
  readonly directory?: string;
  /**
  * Repository URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#repository Deployment#repository}
  */
  readonly repository?: string;
  /**
  * Commit hash for the specified revision.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#revision Deployment#revision}
  */
  readonly revision?: string;
}

function deploymentSpecTemplateSpecVolumeGitRepoToTerraform(struct?: DeploymentSpecTemplateSpecVolumeGitRepoOutputReference | DeploymentSpecTemplateSpecVolumeGitRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}

export class DeploymentSpecTemplateSpecVolumeGitRepoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string | undefined; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string | undefined) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string | undefined; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string | undefined) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string | undefined; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string | undefined) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision
  }
}
export interface DeploymentSpecTemplateSpecVolumeGlusterfs {
  /**
  * The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#endpoints_name Deployment#endpoints_name}
  */
  readonly endpointsName: string;
  /**
  * The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path: string;
  /**
  * Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecVolumeGlusterfsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeGlusterfsOutputReference | DeploymentSpecTemplateSpecVolumeGlusterfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints_name: cdktf.stringToTerraform(struct!.endpointsName),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class DeploymentSpecTemplateSpecVolumeGlusterfsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // endpoints_name - computed: false, optional: false, required: true
  private _endpointsName?: string; 
  public get endpointsName() {
    return this.getStringAttribute('endpoints_name');
  }
  public set endpointsName(value: string) {
    this._endpointsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsNameInput() {
    return this._endpointsName
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }
}
export interface DeploymentSpecTemplateSpecVolumeHostPath {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#type Deployment#type}
  */
  readonly type?: string;
}

function deploymentSpecTemplateSpecVolumeHostPathToTerraform(struct?: DeploymentSpecTemplateSpecVolumeHostPathOutputReference | DeploymentSpecTemplateSpecVolumeHostPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DeploymentSpecTemplateSpecVolumeHostPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface DeploymentSpecTemplateSpecVolumeIscsi {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Target iSCSI Qualified Name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#iqn Deployment#iqn}
  */
  readonly iqn: string;
  /**
  * iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#iscsi_interface Deployment#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * iSCSI target lun number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#lun Deployment#lun}
  */
  readonly lun?: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#target_portal Deployment#target_portal}
  */
  readonly targetPortal: string;
}

function deploymentSpecTemplateSpecVolumeIscsiToTerraform(struct?: DeploymentSpecTemplateSpecVolumeIscsiOutputReference | DeploymentSpecTemplateSpecVolumeIscsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}

export class DeploymentSpecTemplateSpecVolumeIscsiOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // iqn - computed: false, optional: false, required: true
  private _iqn?: string; 
  public get iqn() {
    return this.getStringAttribute('iqn');
  }
  public set iqn(value: string) {
    this._iqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn
  }

  // iscsi_interface - computed: false, optional: true, required: false
  private _iscsiInterface?: string | undefined; 
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }
  public set iscsiInterface(value: string | undefined) {
    this._iscsiInterface = value;
  }
  public resetIscsiInterface() {
    this._iscsiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInterfaceInput() {
    return this._iscsiInterface
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number | undefined; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number | undefined) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // target_portal - computed: false, optional: false, required: true
  private _targetPortal?: string; 
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
  public set targetPortal(value: string) {
    this._targetPortal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortalInput() {
    return this._targetPortal
  }
}
export interface DeploymentSpecTemplateSpecVolumeLocal {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
}

function deploymentSpecTemplateSpecVolumeLocalToTerraform(struct?: DeploymentSpecTemplateSpecVolumeLocalOutputReference | DeploymentSpecTemplateSpecVolumeLocal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class DeploymentSpecTemplateSpecVolumeLocalOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }
}
export interface DeploymentSpecTemplateSpecVolumeNfs {
  /**
  * Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path: string;
  /**
  * Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#server Deployment#server}
  */
  readonly server: string;
}

function deploymentSpecTemplateSpecVolumeNfsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeNfsOutputReference | DeploymentSpecTemplateSpecVolumeNfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}

export class DeploymentSpecTemplateSpecVolumeNfsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server
  }
}
export interface DeploymentSpecTemplateSpecVolumePersistentVolumeClaim {
  /**
  * ClaimName is the name of a PersistentVolumeClaim in the same 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#claim_name Deployment#claim_name}
  */
  readonly claimName?: string;
  /**
  * Will force the ReadOnly setting in VolumeMounts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

function deploymentSpecTemplateSpecVolumePersistentVolumeClaimToTerraform(struct?: DeploymentSpecTemplateSpecVolumePersistentVolumeClaimOutputReference | DeploymentSpecTemplateSpecVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class DeploymentSpecTemplateSpecVolumePersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // claim_name - computed: false, optional: true, required: false
  private _claimName?: string | undefined; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string | undefined) {
    this._claimName = value;
  }
  public resetClaimName() {
    this._claimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }
}
export interface DeploymentSpecTemplateSpecVolumePhotonPersistentDisk {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * ID that identifies Photon Controller persistent disk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pd_id Deployment#pd_id}
  */
  readonly pdId: string;
}

function deploymentSpecTemplateSpecVolumePhotonPersistentDiskToTerraform(struct?: DeploymentSpecTemplateSpecVolumePhotonPersistentDiskOutputReference | DeploymentSpecTemplateSpecVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}

export class DeploymentSpecTemplateSpecVolumePhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // pd_id - computed: false, optional: false, required: true
  private _pdId?: string; 
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
  public set pdId(value: string) {
    this._pdId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdIdInput() {
    return this._pdId
  }
}
export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMap {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the ConfigMap or it's keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapItems[];
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#api_version Deployment#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_path Deployment#field_path}
  */
  readonly fieldPath?: string;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference | DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string | undefined; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string | undefined) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string | undefined; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string | undefined) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath
  }
}
export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_name Deployment#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#divisor Deployment#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource Deployment#resource}
  */
  readonly resource: string;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference | DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string | undefined; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string | undefined) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }
}
export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems {
  /**
  * Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path: string;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_ref Deployment#field_ref}
  */
  readonly fieldRef?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource_field_ref Deployment#resource_field_ref}
  */
  readonly resourceFieldRef?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApi {
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems[];
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiOutputReference | DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform)(struct!.items),
  }
}

export class DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // items - computed: false, optional: true, required: false
  private _items?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems[] | undefined; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
  public set items(value: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems[] | undefined) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items
  }
}
export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesSecretItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesSecret {
  /**
  * Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the Secret or it's keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeProjectedSourcesSecretItems[];
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform)(struct!.items),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken {
  /**
  * Audience is the intended audience of the token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#audience Deployment#audience}
  */
  readonly audience?: string;
  /**
  * ExpirationSeconds is the expected duration of validity of the service account token. It defaults to 1 hour and must be at least 10 minutes (600 seconds).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#expiration_seconds Deployment#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Path specifies a relative path to the mount point of the projected volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path: string;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenOutputReference | DeploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class DeploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string | undefined; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string | undefined) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number | undefined; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number | undefined) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }
}
export interface DeploymentSpecTemplateSpecVolumeProjectedSources {
  /**
  * config_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map Deployment#config_map}
  */
  readonly configMap?: DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMap[];
  /**
  * downward_api block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#downward_api Deployment#downward_api}
  */
  readonly downwardApi?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApi;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret Deployment#secret}
  */
  readonly secret?: DeploymentSpecTemplateSpecVolumeProjectedSourcesSecret[];
  /**
  * service_account_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#service_account_token Deployment#service_account_token}
  */
  readonly serviceAccountToken?: DeploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform)(struct!.configMap),
    downward_api: deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform)(struct!.secret),
    service_account_token: deploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjected {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#default_mode Deployment#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#sources Deployment#sources}
  */
  readonly sources: DeploymentSpecTemplateSpecVolumeProjectedSources[];
}

function deploymentSpecTemplateSpecVolumeProjectedToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjected): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesToTerraform)(struct!.sources),
  }
}

export interface DeploymentSpecTemplateSpecVolumeQuobyte {
  /**
  * Group to map volume access to Default is no group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#group Deployment#group}
  */
  readonly group?: string;
  /**
  * Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#registry Deployment#registry}
  */
  readonly registry: string;
  /**
  * User to map volume access to Defaults to serivceaccount user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#user Deployment#user}
  */
  readonly user?: string;
  /**
  * Volume is a string that references an already created Quobyte volume by name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume Deployment#volume}
  */
  readonly volume: string;
}

function deploymentSpecTemplateSpecVolumeQuobyteToTerraform(struct?: DeploymentSpecTemplateSpecVolumeQuobyteOutputReference | DeploymentSpecTemplateSpecVolumeQuobyte): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}

export class DeploymentSpecTemplateSpecVolumeQuobyteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // group - computed: false, optional: true, required: false
  private _group?: string | undefined; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string | undefined) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry
  }

  // user - computed: false, optional: true, required: false
  private _user?: string | undefined; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume
  }
}
export interface DeploymentSpecTemplateSpecVolumeRbdSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeRbdSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeRbdSecretRefOutputReference | DeploymentSpecTemplateSpecVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DeploymentSpecTemplateSpecVolumeRbdSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface DeploymentSpecTemplateSpecVolumeRbd {
  /**
  * A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#ceph_monitors Deployment#ceph_monitors}
  */
  readonly cephMonitors: string[];
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#keyring Deployment#keyring}
  */
  readonly keyring?: string;
  /**
  * The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#rados_user Deployment#rados_user}
  */
  readonly radosUser?: string;
  /**
  * The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#rbd_image Deployment#rbd_image}
  */
  readonly rbdImage: string;
  /**
  * The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#rbd_pool Deployment#rbd_pool}
  */
  readonly rbdPool?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_ref Deployment#secret_ref}
  */
  readonly secretRef?: DeploymentSpecTemplateSpecVolumeRbdSecretRef;
}

function deploymentSpecTemplateSpecVolumeRbdToTerraform(struct?: DeploymentSpecTemplateSpecVolumeRbdOutputReference | DeploymentSpecTemplateSpecVolumeRbd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ceph_monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cephMonitors),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    rados_user: cdktf.stringToTerraform(struct!.radosUser),
    rbd_image: cdktf.stringToTerraform(struct!.rbdImage),
    rbd_pool: cdktf.stringToTerraform(struct!.rbdPool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: deploymentSpecTemplateSpecVolumeRbdSecretRefToTerraform(struct!.secretRef),
  }
}

export class DeploymentSpecTemplateSpecVolumeRbdOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // ceph_monitors - computed: false, optional: false, required: true
  private _cephMonitors?: string[]; 
  public get cephMonitors() {
    return this.getListAttribute('ceph_monitors');
  }
  public set cephMonitors(value: string[]) {
    this._cephMonitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cephMonitorsInput() {
    return this._cephMonitors
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // keyring - computed: true, optional: true, required: false
  private _keyring?: string | undefined; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string | undefined) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring
  }

  // rados_user - computed: false, optional: true, required: false
  private _radosUser?: string | undefined; 
  public get radosUser() {
    return this.getStringAttribute('rados_user');
  }
  public set radosUser(value: string | undefined) {
    this._radosUser = value;
  }
  public resetRadosUser() {
    this._radosUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radosUserInput() {
    return this._radosUser
  }

  // rbd_image - computed: false, optional: false, required: true
  private _rbdImage?: string; 
  public get rbdImage() {
    return this.getStringAttribute('rbd_image');
  }
  public set rbdImage(value: string) {
    this._rbdImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdImageInput() {
    return this._rbdImage
  }

  // rbd_pool - computed: false, optional: true, required: false
  private _rbdPool?: string | undefined; 
  public get rbdPool() {
    return this.getStringAttribute('rbd_pool');
  }
  public set rbdPool(value: string | undefined) {
    this._rbdPool = value;
  }
  public resetRbdPool() {
    this._rbdPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdPoolInput() {
    return this._rbdPool
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: DeploymentSpecTemplateSpecVolumeRbdSecretRef | undefined; 
  private __secretRefOutput = new DeploymentSpecTemplateSpecVolumeRbdSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this.__secretRefOutput;
  }
  public putSecretRef(value: DeploymentSpecTemplateSpecVolumeRbdSecretRef | undefined) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef
  }
}
export interface DeploymentSpecTemplateSpecVolumeSecretItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
}

function deploymentSpecTemplateSpecVolumeSecretItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DeploymentSpecTemplateSpecVolumeSecret {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#default_mode Deployment#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * Optional: Specify whether the Secret or its keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_name Deployment#secret_name}
  */
  readonly secretName?: string;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeSecretItems[];
}

function deploymentSpecTemplateSpecVolumeSecretToTerraform(struct?: DeploymentSpecTemplateSpecVolumeSecretOutputReference | DeploymentSpecTemplateSpecVolumeSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeSecretItemsToTerraform)(struct!.items),
  }
}

export class DeploymentSpecTemplateSpecVolumeSecretOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: string | undefined; 
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }
  public set defaultMode(value: string | undefined) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable | undefined; 
  public get optional() {
    return this.getBooleanAttribute('optional') as any;
  }
  public set optional(value: boolean | cdktf.IResolvable | undefined) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string | undefined; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string | undefined) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName
  }

  // items - computed: false, optional: true, required: false
  private _items?: DeploymentSpecTemplateSpecVolumeSecretItems[] | undefined; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
  public set items(value: DeploymentSpecTemplateSpecVolumeSecretItems[] | undefined) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items
  }
}
export interface DeploymentSpecTemplateSpecVolumeVsphereVolume {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Path that identifies vSphere volume vmdk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_path Deployment#volume_path}
  */
  readonly volumePath: string;
}

function deploymentSpecTemplateSpecVolumeVsphereVolumeToTerraform(struct?: DeploymentSpecTemplateSpecVolumeVsphereVolumeOutputReference | DeploymentSpecTemplateSpecVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}

export class DeploymentSpecTemplateSpecVolumeVsphereVolumeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath
  }
}
export interface DeploymentSpecTemplateSpecVolume {
  /**
  * Volume's name. Must be a DNS_LABEL and unique within the pod. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * aws_elastic_block_store block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#aws_elastic_block_store Deployment#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DeploymentSpecTemplateSpecVolumeAwsElasticBlockStore;
  /**
  * azure_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#azure_disk Deployment#azure_disk}
  */
  readonly azureDisk?: DeploymentSpecTemplateSpecVolumeAzureDisk;
  /**
  * azure_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#azure_file Deployment#azure_file}
  */
  readonly azureFile?: DeploymentSpecTemplateSpecVolumeAzureFile;
  /**
  * ceph_fs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#ceph_fs Deployment#ceph_fs}
  */
  readonly cephFs?: DeploymentSpecTemplateSpecVolumeCephFs;
  /**
  * cinder block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#cinder Deployment#cinder}
  */
  readonly cinder?: DeploymentSpecTemplateSpecVolumeCinder;
  /**
  * config_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map Deployment#config_map}
  */
  readonly configMap?: DeploymentSpecTemplateSpecVolumeConfigMap;
  /**
  * csi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#csi Deployment#csi}
  */
  readonly csi?: DeploymentSpecTemplateSpecVolumeCsi;
  /**
  * downward_api block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#downward_api Deployment#downward_api}
  */
  readonly downwardApi?: DeploymentSpecTemplateSpecVolumeDownwardApi;
  /**
  * empty_dir block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#empty_dir Deployment#empty_dir}
  */
  readonly emptyDir?: DeploymentSpecTemplateSpecVolumeEmptyDir;
  /**
  * fc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fc Deployment#fc}
  */
  readonly fc?: DeploymentSpecTemplateSpecVolumeFc;
  /**
  * flex_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#flex_volume Deployment#flex_volume}
  */
  readonly flexVolume?: DeploymentSpecTemplateSpecVolumeFlexVolume;
  /**
  * flocker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#flocker Deployment#flocker}
  */
  readonly flocker?: DeploymentSpecTemplateSpecVolumeFlocker;
  /**
  * gce_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#gce_persistent_disk Deployment#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DeploymentSpecTemplateSpecVolumeGcePersistentDisk;
  /**
  * git_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#git_repo Deployment#git_repo}
  */
  readonly gitRepo?: DeploymentSpecTemplateSpecVolumeGitRepo;
  /**
  * glusterfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#glusterfs Deployment#glusterfs}
  */
  readonly glusterfs?: DeploymentSpecTemplateSpecVolumeGlusterfs;
  /**
  * host_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_path Deployment#host_path}
  */
  readonly hostPath?: DeploymentSpecTemplateSpecVolumeHostPath;
  /**
  * iscsi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#iscsi Deployment#iscsi}
  */
  readonly iscsi?: DeploymentSpecTemplateSpecVolumeIscsi;
  /**
  * local block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#local Deployment#local}
  */
  readonly local?: DeploymentSpecTemplateSpecVolumeLocal;
  /**
  * nfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#nfs Deployment#nfs}
  */
  readonly nfs?: DeploymentSpecTemplateSpecVolumeNfs;
  /**
  * persistent_volume_claim block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#persistent_volume_claim Deployment#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DeploymentSpecTemplateSpecVolumePersistentVolumeClaim;
  /**
  * photon_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#photon_persistent_disk Deployment#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DeploymentSpecTemplateSpecVolumePhotonPersistentDisk;
  /**
  * projected block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#projected Deployment#projected}
  */
  readonly projected?: DeploymentSpecTemplateSpecVolumeProjected[];
  /**
  * quobyte block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#quobyte Deployment#quobyte}
  */
  readonly quobyte?: DeploymentSpecTemplateSpecVolumeQuobyte;
  /**
  * rbd block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#rbd Deployment#rbd}
  */
  readonly rbd?: DeploymentSpecTemplateSpecVolumeRbd;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret Deployment#secret}
  */
  readonly secret?: DeploymentSpecTemplateSpecVolumeSecret;
  /**
  * vsphere_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#vsphere_volume Deployment#vsphere_volume}
  */
  readonly vsphereVolume?: DeploymentSpecTemplateSpecVolumeVsphereVolume;
}

function deploymentSpecTemplateSpecVolumeToTerraform(struct?: DeploymentSpecTemplateSpecVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    aws_elastic_block_store: deploymentSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: deploymentSpecTemplateSpecVolumeAzureDiskToTerraform(struct!.azureDisk),
    azure_file: deploymentSpecTemplateSpecVolumeAzureFileToTerraform(struct!.azureFile),
    ceph_fs: deploymentSpecTemplateSpecVolumeCephFsToTerraform(struct!.cephFs),
    cinder: deploymentSpecTemplateSpecVolumeCinderToTerraform(struct!.cinder),
    config_map: deploymentSpecTemplateSpecVolumeConfigMapToTerraform(struct!.configMap),
    csi: deploymentSpecTemplateSpecVolumeCsiToTerraform(struct!.csi),
    downward_api: deploymentSpecTemplateSpecVolumeDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: deploymentSpecTemplateSpecVolumeEmptyDirToTerraform(struct!.emptyDir),
    fc: deploymentSpecTemplateSpecVolumeFcToTerraform(struct!.fc),
    flex_volume: deploymentSpecTemplateSpecVolumeFlexVolumeToTerraform(struct!.flexVolume),
    flocker: deploymentSpecTemplateSpecVolumeFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: deploymentSpecTemplateSpecVolumeGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: deploymentSpecTemplateSpecVolumeGitRepoToTerraform(struct!.gitRepo),
    glusterfs: deploymentSpecTemplateSpecVolumeGlusterfsToTerraform(struct!.glusterfs),
    host_path: deploymentSpecTemplateSpecVolumeHostPathToTerraform(struct!.hostPath),
    iscsi: deploymentSpecTemplateSpecVolumeIscsiToTerraform(struct!.iscsi),
    local: deploymentSpecTemplateSpecVolumeLocalToTerraform(struct!.local),
    nfs: deploymentSpecTemplateSpecVolumeNfsToTerraform(struct!.nfs),
    persistent_volume_claim: deploymentSpecTemplateSpecVolumePersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: deploymentSpecTemplateSpecVolumePhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    projected: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedToTerraform)(struct!.projected),
    quobyte: deploymentSpecTemplateSpecVolumeQuobyteToTerraform(struct!.quobyte),
    rbd: deploymentSpecTemplateSpecVolumeRbdToTerraform(struct!.rbd),
    secret: deploymentSpecTemplateSpecVolumeSecretToTerraform(struct!.secret),
    vsphere_volume: deploymentSpecTemplateSpecVolumeVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}

export interface DeploymentSpecTemplateSpec {
  /**
  * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#active_deadline_seconds Deployment#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#automount_service_account_token Deployment#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Set DNS policy for containers within the pod. Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. Optional: Defaults to 'ClusterFirst', see [Kubernetes reference](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#dns_policy Deployment#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Enables generating environment variables for service discovery. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#enable_service_links Deployment#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * Use the host's ipc namespace. Optional: Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_ipc Deployment#host_ipc}
  */
  readonly hostIpc?: boolean | cdktf.IResolvable;
  /**
  * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_network Deployment#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Use the host's pid namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_pid Deployment#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#hostname Deployment#hostname}
  */
  readonly hostname?: string;
  /**
  * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_name Deployment#node_name}
  */
  readonly nodeName?: string;
  /**
  * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: http://kubernetes.io/docs/user-guide/node-selection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_selector Deployment#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#priority_class_name Deployment#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Restart policy for all containers within the pod. One of Always, OnFailure, Never. More info: http://kubernetes.io/docs/user-guide/pod-states#restartpolicy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#restart_policy Deployment#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: http://releases.k8s.io/HEAD/docs/design/service_accounts.md.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#service_account_name Deployment#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#share_process_namespace Deployment#share_process_namespace}
  */
  readonly shareProcessNamespace?: boolean | cdktf.IResolvable;
  /**
  * If specified, the fully qualified Pod hostname will be "...svc.". If not specified, the pod will not have a domainname at all..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#subdomain Deployment#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#termination_grace_period_seconds Deployment#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#affinity Deployment#affinity}
  */
  readonly affinity?: DeploymentSpecTemplateSpecAffinity;
  /**
  * container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container Deployment#container}
  */
  readonly container?: DeploymentSpecTemplateSpecContainer[];
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#dns_config Deployment#dns_config}
  */
  readonly dnsConfig?: DeploymentSpecTemplateSpecDnsConfig;
  /**
  * host_aliases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_aliases Deployment#host_aliases}
  */
  readonly hostAliases?: DeploymentSpecTemplateSpecHostAliases[];
  /**
  * image_pull_secrets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#image_pull_secrets Deployment#image_pull_secrets}
  */
  readonly imagePullSecrets?: DeploymentSpecTemplateSpecImagePullSecrets[];
  /**
  * init_container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#init_container Deployment#init_container}
  */
  readonly initContainer?: DeploymentSpecTemplateSpecInitContainer[];
  /**
  * readiness_gate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#readiness_gate Deployment#readiness_gate}
  */
  readonly readinessGate?: DeploymentSpecTemplateSpecReadinessGate[];
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#security_context Deployment#security_context}
  */
  readonly securityContext?: DeploymentSpecTemplateSpecSecurityContext;
  /**
  * toleration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#toleration Deployment#toleration}
  */
  readonly toleration?: DeploymentSpecTemplateSpecToleration[];
  /**
  * topology_spread_constraint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_spread_constraint Deployment#topology_spread_constraint}
  */
  readonly topologySpreadConstraint?: DeploymentSpecTemplateSpecTopologySpreadConstraint[];
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume Deployment#volume}
  */
  readonly volume?: DeploymentSpecTemplateSpecVolume[];
}

function deploymentSpecTemplateSpecToTerraform(struct?: DeploymentSpecTemplateSpecOutputReference | DeploymentSpecTemplateSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.nodeSelector),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    affinity: deploymentSpecTemplateSpecAffinityToTerraform(struct!.affinity),
    container: cdktf.listMapper(deploymentSpecTemplateSpecContainerToTerraform)(struct!.container),
    dns_config: deploymentSpecTemplateSpecDnsConfigToTerraform(struct!.dnsConfig),
    host_aliases: cdktf.listMapper(deploymentSpecTemplateSpecHostAliasesToTerraform)(struct!.hostAliases),
    image_pull_secrets: cdktf.listMapper(deploymentSpecTemplateSpecImagePullSecretsToTerraform)(struct!.imagePullSecrets),
    init_container: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerToTerraform)(struct!.initContainer),
    readiness_gate: cdktf.listMapper(deploymentSpecTemplateSpecReadinessGateToTerraform)(struct!.readinessGate),
    security_context: deploymentSpecTemplateSpecSecurityContextToTerraform(struct!.securityContext),
    toleration: cdktf.listMapper(deploymentSpecTemplateSpecTolerationToTerraform)(struct!.toleration),
    topology_spread_constraint: cdktf.listMapper(deploymentSpecTemplateSpecTopologySpreadConstraintToTerraform)(struct!.topologySpreadConstraint),
    volume: cdktf.listMapper(deploymentSpecTemplateSpecVolumeToTerraform)(struct!.volume),
  }
}

export class DeploymentSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number | undefined; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number | undefined) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds
  }

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean | cdktf.IResolvable | undefined; 
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token') as any;
  }
  public set automountServiceAccountToken(value: boolean | cdktf.IResolvable | undefined) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken
  }

  // dns_policy - computed: false, optional: true, required: false
  private _dnsPolicy?: string | undefined; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string | undefined) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy
  }

  // enable_service_links - computed: false, optional: true, required: false
  private _enableServiceLinks?: boolean | cdktf.IResolvable | undefined; 
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links') as any;
  }
  public set enableServiceLinks(value: boolean | cdktf.IResolvable | undefined) {
    this._enableServiceLinks = value;
  }
  public resetEnableServiceLinks() {
    this._enableServiceLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServiceLinksInput() {
    return this._enableServiceLinks
  }

  // host_ipc - computed: false, optional: true, required: false
  private _hostIpc?: boolean | cdktf.IResolvable | undefined; 
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc') as any;
  }
  public set hostIpc(value: boolean | cdktf.IResolvable | undefined) {
    this._hostIpc = value;
  }
  public resetHostIpc() {
    this._hostIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpcInput() {
    return this._hostIpc
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable | undefined; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network') as any;
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable | undefined) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork
  }

  // host_pid - computed: false, optional: true, required: false
  private _hostPid?: boolean | cdktf.IResolvable | undefined; 
  public get hostPid() {
    return this.getBooleanAttribute('host_pid') as any;
  }
  public set hostPid(value: boolean | cdktf.IResolvable | undefined) {
    this._hostPid = value;
  }
  public resetHostPid() {
    this._hostPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPidInput() {
    return this._hostPid
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string | undefined; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
  }

  // node_name - computed: true, optional: true, required: false
  private _nodeName?: string | undefined; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string | undefined) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get nodeSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_selector') as any;
  }
  public set nodeSelector(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string | undefined; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string | undefined) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string | undefined; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string | undefined) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy
  }

  // service_account_name - computed: true, optional: true, required: false
  private _serviceAccountName?: string | undefined; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string | undefined) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName
  }

  // share_process_namespace - computed: false, optional: true, required: false
  private _shareProcessNamespace?: boolean | cdktf.IResolvable | undefined; 
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace') as any;
  }
  public set shareProcessNamespace(value: boolean | cdktf.IResolvable | undefined) {
    this._shareProcessNamespace = value;
  }
  public resetShareProcessNamespace() {
    this._shareProcessNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareProcessNamespaceInput() {
    return this._shareProcessNamespace
  }

  // subdomain - computed: false, optional: true, required: false
  private _subdomain?: string | undefined; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string | undefined) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number | undefined; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number | undefined) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: DeploymentSpecTemplateSpecAffinity | undefined; 
  private __affinityOutput = new DeploymentSpecTemplateSpecAffinityOutputReference(this as any, "affinity", true);
  public get affinity() {
    return this.__affinityOutput;
  }
  public putAffinity(value: DeploymentSpecTemplateSpecAffinity | undefined) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity
  }

  // container - computed: false, optional: true, required: false
  private _container?: DeploymentSpecTemplateSpecContainer[] | undefined; 
  public get container() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('container') as any;
  }
  public set container(value: DeploymentSpecTemplateSpecContainer[] | undefined) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig?: DeploymentSpecTemplateSpecDnsConfig | undefined; 
  private __dnsConfigOutput = new DeploymentSpecTemplateSpecDnsConfigOutputReference(this as any, "dns_config", true);
  public get dnsConfig() {
    return this.__dnsConfigOutput;
  }
  public putDnsConfig(value: DeploymentSpecTemplateSpecDnsConfig | undefined) {
    this._dnsConfig = value;
  }
  public resetDnsConfig() {
    this._dnsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases?: DeploymentSpecTemplateSpecHostAliases[] | undefined; 
  public get hostAliases() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_aliases') as any;
  }
  public set hostAliases(value: DeploymentSpecTemplateSpecHostAliases[] | undefined) {
    this._hostAliases = value;
  }
  public resetHostAliases() {
    this._hostAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets?: DeploymentSpecTemplateSpecImagePullSecrets[] | undefined; 
  public get imagePullSecrets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('image_pull_secrets') as any;
  }
  public set imagePullSecrets(value: DeploymentSpecTemplateSpecImagePullSecrets[] | undefined) {
    this._imagePullSecrets = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets
  }

  // init_container - computed: false, optional: true, required: false
  private _initContainer?: DeploymentSpecTemplateSpecInitContainer[] | undefined; 
  public get initContainer() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('init_container') as any;
  }
  public set initContainer(value: DeploymentSpecTemplateSpecInitContainer[] | undefined) {
    this._initContainer = value;
  }
  public resetInitContainer() {
    this._initContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerInput() {
    return this._initContainer
  }

  // readiness_gate - computed: false, optional: true, required: false
  private _readinessGate?: DeploymentSpecTemplateSpecReadinessGate[] | undefined; 
  public get readinessGate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('readiness_gate') as any;
  }
  public set readinessGate(value: DeploymentSpecTemplateSpecReadinessGate[] | undefined) {
    this._readinessGate = value;
  }
  public resetReadinessGate() {
    this._readinessGate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessGateInput() {
    return this._readinessGate
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext?: DeploymentSpecTemplateSpecSecurityContext | undefined; 
  private __securityContextOutput = new DeploymentSpecTemplateSpecSecurityContextOutputReference(this as any, "security_context", true);
  public get securityContext() {
    return this.__securityContextOutput;
  }
  public putSecurityContext(value: DeploymentSpecTemplateSpecSecurityContext | undefined) {
    this._securityContext = value;
  }
  public resetSecurityContext() {
    this._securityContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext
  }

  // toleration - computed: false, optional: true, required: false
  private _toleration?: DeploymentSpecTemplateSpecToleration[] | undefined; 
  public get toleration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('toleration') as any;
  }
  public set toleration(value: DeploymentSpecTemplateSpecToleration[] | undefined) {
    this._toleration = value;
  }
  public resetToleration() {
    this._toleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationInput() {
    return this._toleration
  }

  // topology_spread_constraint - computed: false, optional: true, required: false
  private _topologySpreadConstraint?: DeploymentSpecTemplateSpecTopologySpreadConstraint[] | undefined; 
  public get topologySpreadConstraint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('topology_spread_constraint') as any;
  }
  public set topologySpreadConstraint(value: DeploymentSpecTemplateSpecTopologySpreadConstraint[] | undefined) {
    this._topologySpreadConstraint = value;
  }
  public resetTopologySpreadConstraint() {
    this._topologySpreadConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintInput() {
    return this._topologySpreadConstraint
  }

  // volume - computed: false, optional: true, required: false
  private _volume?: DeploymentSpecTemplateSpecVolume[] | undefined; 
  public get volume() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volume') as any;
  }
  public set volume(value: DeploymentSpecTemplateSpecVolume[] | undefined) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume
  }
}
export interface DeploymentSpecTemplate {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#metadata Deployment#metadata}
  */
  readonly metadata: DeploymentSpecTemplateMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#spec Deployment#spec}
  */
  readonly spec: DeploymentSpecTemplateSpec;
}

function deploymentSpecTemplateToTerraform(struct?: DeploymentSpecTemplateOutputReference | DeploymentSpecTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: deploymentSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: deploymentSpecTemplateSpecToTerraform(struct!.spec),
  }
}

export class DeploymentSpecTemplateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: DeploymentSpecTemplateMetadata; 
  private __metadataOutput = new DeploymentSpecTemplateMetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: DeploymentSpecTemplateMetadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: DeploymentSpecTemplateSpec; 
  private __specOutput = new DeploymentSpecTemplateSpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: DeploymentSpecTemplateSpec) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }
}
export interface DeploymentSpec {
  /**
  * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#min_ready_seconds Deployment#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * Indicates that the deployment is paused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#paused Deployment#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#progress_deadline_seconds Deployment#progress_deadline_seconds}
  */
  readonly progressDeadlineSeconds?: number;
  /**
  * Number of desired pods. This is a string to be able to distinguish between explicit zero and not specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#replicas Deployment#replicas}
  */
  readonly replicas?: string;
  /**
  * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#revision_history_limit Deployment#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#selector Deployment#selector}
  */
  readonly selector?: DeploymentSpecSelector;
  /**
  * strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#strategy Deployment#strategy}
  */
  readonly strategy?: DeploymentSpecStrategy;
  /**
  * template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#template Deployment#template}
  */
  readonly template: DeploymentSpecTemplate;
}

function deploymentSpecToTerraform(struct?: DeploymentSpecOutputReference | DeploymentSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    paused: cdktf.booleanToTerraform(struct!.paused),
    progress_deadline_seconds: cdktf.numberToTerraform(struct!.progressDeadlineSeconds),
    replicas: cdktf.stringToTerraform(struct!.replicas),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    selector: deploymentSpecSelectorToTerraform(struct!.selector),
    strategy: deploymentSpecStrategyToTerraform(struct!.strategy),
    template: deploymentSpecTemplateToTerraform(struct!.template),
  }
}

export class DeploymentSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // min_ready_seconds - computed: false, optional: true, required: false
  private _minReadySeconds?: number | undefined; 
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }
  public set minReadySeconds(value: number | undefined) {
    this._minReadySeconds = value;
  }
  public resetMinReadySeconds() {
    this._minReadySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecondsInput() {
    return this._minReadySeconds
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable | undefined; 
  public get paused() {
    return this.getBooleanAttribute('paused') as any;
  }
  public set paused(value: boolean | cdktf.IResolvable | undefined) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused
  }

  // progress_deadline_seconds - computed: false, optional: true, required: false
  private _progressDeadlineSeconds?: number | undefined; 
  public get progressDeadlineSeconds() {
    return this.getNumberAttribute('progress_deadline_seconds');
  }
  public set progressDeadlineSeconds(value: number | undefined) {
    this._progressDeadlineSeconds = value;
  }
  public resetProgressDeadlineSeconds() {
    this._progressDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressDeadlineSecondsInput() {
    return this._progressDeadlineSeconds
  }

  // replicas - computed: true, optional: true, required: false
  private _replicas?: string | undefined; 
  public get replicas() {
    return this.getStringAttribute('replicas');
  }
  public set replicas(value: string | undefined) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: number | undefined; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number | undefined) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: DeploymentSpecSelector | undefined; 
  private __selectorOutput = new DeploymentSpecSelectorOutputReference(this as any, "selector", true);
  public get selector() {
    return this.__selectorOutput;
  }
  public putSelector(value: DeploymentSpecSelector | undefined) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: DeploymentSpecStrategy | undefined; 
  private __strategyOutput = new DeploymentSpecStrategyOutputReference(this as any, "strategy", true);
  public get strategy() {
    return this.__strategyOutput;
  }
  public putStrategy(value: DeploymentSpecStrategy | undefined) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy
  }

  // template - computed: false, optional: false, required: true
  private _template?: DeploymentSpecTemplate; 
  private __templateOutput = new DeploymentSpecTemplateOutputReference(this as any, "template", true);
  public get template() {
    return this.__templateOutput;
  }
  public putTemplate(value: DeploymentSpecTemplate) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template
  }
}
export interface DeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#create Deployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#delete Deployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#update Deployment#update}
  */
  readonly update?: string;
}

function deploymentTimeoutsToTerraform(struct?: DeploymentTimeoutsOutputReference | DeploymentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html kubernetes_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html kubernetes_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_deployment',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._waitForRollout = config.waitForRollout;
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable | undefined; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout') as any;
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable | undefined) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: DeploymentMetadata; 
  private __metadataOutput = new DeploymentMetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: DeploymentMetadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: DeploymentSpec; 
  private __specOutput = new DeploymentSpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: DeploymentSpec) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DeploymentTimeouts | undefined; 
  private __timeoutsOutput = new DeploymentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DeploymentTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      metadata: deploymentMetadataToTerraform(this._metadata),
      spec: deploymentSpecToTerraform(this._spec),
      timeouts: deploymentTimeoutsToTerraform(this._timeouts),
    };
  }
}
