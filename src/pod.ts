// https://www.terraform.io/docs/providers/kubernetes/r/pod.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PodConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#metadata Pod#metadata}
  */
  readonly metadata: PodMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#spec Pod#spec}
  */
  readonly spec: PodSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#timeouts Pod#timeouts}
  */
  readonly timeouts?: PodTimeouts;
}
export interface PodMetadata {
  /**
  * An unstructured key value map stored with the pod that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#annotations Pod#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#generate_name Pod#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the pod. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#labels Pod#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the pod, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the pod must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespace Pod#namespace}
  */
  readonly namespace?: string;
}

function podMetadataToTerraform(struct?: PodMetadataOutputReference | PodMetadata): any {
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

export class PodMetadataOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#operator Pod#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#values Pod#values}
  */
  readonly values?: string[];
}

function podSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions): any {
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

export interface PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_expressions Pod#match_expressions}
  */
  readonly matchExpressions?: PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
}

function podSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(podSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | undefined; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | undefined) {
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
export interface PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight is in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#weight Pod#weight}
  */
  readonly weight: number;
  /**
  * preference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#preference Pod#preference}
  */
  readonly preference: PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
}

function podSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: podSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
  }
}

export interface PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#operator Pod#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#values Pod#values}
  */
  readonly values?: string[];
}

function podSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform(struct?: PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions): any {
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

export interface PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm {
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_expressions Pod#match_expressions}
  */
  readonly matchExpressions?: PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions[];
}

function podSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform(struct?: PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(podSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#node_selector_term Pod#node_selector_term}
  */
  readonly nodeSelectorTerm?: PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[];
}

function podSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_term: cdktf.listMapper(podSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform)(struct!.nodeSelectorTerm),
  }
}

export class PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // node_selector_term - computed: false, optional: true, required: false
  private _nodeSelectorTerm?: PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[] | undefined; 
  public get nodeSelectorTerm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_selector_term') as any;
  }
  public set nodeSelectorTerm(value: PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[] | undefined) {
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
export interface PodSpecAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#preferred_during_scheduling_ignored_during_execution Pod#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#required_during_scheduling_ignored_during_execution Pod#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

function podSpecAffinityNodeAffinityToTerraform(struct?: PodSpecAffinityNodeAffinityOutputReference | PodSpecAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(podSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: podSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export class PodSpecAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined; 
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution') as any;
  }
  public set preferredDuringSchedulingIgnoredDuringExecution(value: PodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined; 
  private __requiredDuringSchedulingIgnoredDuringExecutionOutput = new PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this as any, "required_during_scheduling_ignored_during_execution", true);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this.__requiredDuringSchedulingIgnoredDuringExecutionOutput;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: PodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined) {
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
export interface PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#operator Pod#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#values Pod#values}
  */
  readonly values?: string[];
}

function podSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
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

export interface PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_labels Pod#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_expressions Pod#match_expressions}
  */
  readonly matchExpressions?: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function podSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(podSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespaces Pod#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#topology_key Pod#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#label_selector Pod#label_selector}
  */
  readonly labelSelector?: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function podSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(podSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export class PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
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
  private _labelSelector?: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | undefined; 
  public get labelSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_selector') as any;
  }
  public set labelSelector(value: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | undefined) {
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
export interface PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#weight Pod#weight}
  */
  readonly weight: number;
  /**
  * pod_affinity_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#pod_affinity_term Pod#pod_affinity_term}
  */
  readonly podAffinityTerm: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

function podSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: podSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}

export interface PodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#operator Pod#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#values Pod#values}
  */
  readonly values?: string[];
}

function podSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: PodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
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

export interface PodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_labels Pod#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_expressions Pod#match_expressions}
  */
  readonly matchExpressions?: PodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function podSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: PodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(podSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface PodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespaces Pod#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#topology_key Pod#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#label_selector Pod#label_selector}
  */
  readonly labelSelector?: PodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function podSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: PodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(podSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface PodSpecAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#preferred_during_scheduling_ignored_during_execution Pod#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#required_during_scheduling_ignored_during_execution Pod#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function podSpecAffinityPodAffinityToTerraform(struct?: PodSpecAffinityPodAffinityOutputReference | PodSpecAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(podSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(podSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export class PodSpecAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined; 
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution') as any;
  }
  public set preferredDuringSchedulingIgnoredDuringExecution(value: PodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | undefined; 
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution') as any;
  }
  public set requiredDuringSchedulingIgnoredDuringExecution(value: PodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | undefined) {
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
export interface PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#operator Pod#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#values Pod#values}
  */
  readonly values?: string[];
}

function podSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
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

export interface PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_labels Pod#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_expressions Pod#match_expressions}
  */
  readonly matchExpressions?: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function podSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(podSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespaces Pod#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#topology_key Pod#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#label_selector Pod#label_selector}
  */
  readonly labelSelector?: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function podSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(podSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export class PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
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
  private _labelSelector?: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | undefined; 
  public get labelSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_selector') as any;
  }
  public set labelSelector(value: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | undefined) {
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
export interface PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#weight Pod#weight}
  */
  readonly weight: number;
  /**
  * pod_affinity_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#pod_affinity_term Pod#pod_affinity_term}
  */
  readonly podAffinityTerm: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

function podSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: podSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}

export interface PodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#operator Pod#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#values Pod#values}
  */
  readonly values?: string[];
}

function podSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: PodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
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

export interface PodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_labels Pod#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_expressions Pod#match_expressions}
  */
  readonly matchExpressions?: PodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function podSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: PodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(podSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface PodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespaces Pod#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#topology_key Pod#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#label_selector Pod#label_selector}
  */
  readonly labelSelector?: PodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function podSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: PodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(podSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface PodSpecAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#preferred_during_scheduling_ignored_during_execution Pod#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#required_during_scheduling_ignored_during_execution Pod#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function podSpecAffinityPodAntiAffinityToTerraform(struct?: PodSpecAffinityPodAntiAffinityOutputReference | PodSpecAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(podSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(podSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export class PodSpecAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined; 
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution') as any;
  }
  public set preferredDuringSchedulingIgnoredDuringExecution(value: PodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | undefined) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution?: PodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | undefined; 
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution') as any;
  }
  public set requiredDuringSchedulingIgnoredDuringExecution(value: PodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | undefined) {
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
export interface PodSpecAffinity {
  /**
  * node_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#node_affinity Pod#node_affinity}
  */
  readonly nodeAffinity?: PodSpecAffinityNodeAffinity;
  /**
  * pod_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#pod_affinity Pod#pod_affinity}
  */
  readonly podAffinity?: PodSpecAffinityPodAffinity;
  /**
  * pod_anti_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#pod_anti_affinity Pod#pod_anti_affinity}
  */
  readonly podAntiAffinity?: PodSpecAffinityPodAntiAffinity;
}

function podSpecAffinityToTerraform(struct?: PodSpecAffinityOutputReference | PodSpecAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: podSpecAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: podSpecAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: podSpecAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}

export class PodSpecAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: PodSpecAffinityNodeAffinity | undefined; 
  private __nodeAffinityOutput = new PodSpecAffinityNodeAffinityOutputReference(this as any, "node_affinity", true);
  public get nodeAffinity() {
    return this.__nodeAffinityOutput;
  }
  public putNodeAffinity(value: PodSpecAffinityNodeAffinity | undefined) {
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
  private _podAffinity?: PodSpecAffinityPodAffinity | undefined; 
  private __podAffinityOutput = new PodSpecAffinityPodAffinityOutputReference(this as any, "pod_affinity", true);
  public get podAffinity() {
    return this.__podAffinityOutput;
  }
  public putPodAffinity(value: PodSpecAffinityPodAffinity | undefined) {
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
  private _podAntiAffinity?: PodSpecAffinityPodAntiAffinity | undefined; 
  private __podAntiAffinityOutput = new PodSpecAffinityPodAntiAffinityOutputReference(this as any, "pod_anti_affinity", true);
  public get podAntiAffinity() {
    return this.__podAntiAffinityOutput;
  }
  public putPodAntiAffinity(value: PodSpecAffinityPodAntiAffinity | undefined) {
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
export interface PodSpecContainerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function podSpecContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: PodSpecContainerEnvValueFromConfigMapKeyRefOutputReference | PodSpecContainerEnvValueFromConfigMapKeyRef): any {
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

export class PodSpecContainerEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#api_version Pod#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#field_path Pod#field_path}
  */
  readonly fieldPath?: string;
}

function podSpecContainerEnvValueFromFieldRefToTerraform(struct?: PodSpecContainerEnvValueFromFieldRefOutputReference | PodSpecContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class PodSpecContainerEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerEnvValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#container_name Pod#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#divisor Pod#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#resource Pod#resource}
  */
  readonly resource: string;
}

function podSpecContainerEnvValueFromResourceFieldRefToTerraform(struct?: PodSpecContainerEnvValueFromResourceFieldRefOutputReference | PodSpecContainerEnvValueFromResourceFieldRef): any {
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

export class PodSpecContainerEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function podSpecContainerEnvValueFromSecretKeyRefToTerraform(struct?: PodSpecContainerEnvValueFromSecretKeyRefOutputReference | PodSpecContainerEnvValueFromSecretKeyRef): any {
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

export class PodSpecContainerEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerEnvValueFrom {
  /**
  * config_map_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#config_map_key_ref Pod#config_map_key_ref}
  */
  readonly configMapKeyRef?: PodSpecContainerEnvValueFromConfigMapKeyRef;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#field_ref Pod#field_ref}
  */
  readonly fieldRef?: PodSpecContainerEnvValueFromFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#resource_field_ref Pod#resource_field_ref}
  */
  readonly resourceFieldRef?: PodSpecContainerEnvValueFromResourceFieldRef;
  /**
  * secret_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret_key_ref Pod#secret_key_ref}
  */
  readonly secretKeyRef?: PodSpecContainerEnvValueFromSecretKeyRef;
}

function podSpecContainerEnvValueFromToTerraform(struct?: PodSpecContainerEnvValueFromOutputReference | PodSpecContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: podSpecContainerEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: podSpecContainerEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: podSpecContainerEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: podSpecContainerEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}

export class PodSpecContainerEnvValueFromOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef?: PodSpecContainerEnvValueFromConfigMapKeyRef | undefined; 
  private __configMapKeyRefOutput = new PodSpecContainerEnvValueFromConfigMapKeyRefOutputReference(this as any, "config_map_key_ref", true);
  public get configMapKeyRef() {
    return this.__configMapKeyRefOutput;
  }
  public putConfigMapKeyRef(value: PodSpecContainerEnvValueFromConfigMapKeyRef | undefined) {
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
  private _fieldRef?: PodSpecContainerEnvValueFromFieldRef | undefined; 
  private __fieldRefOutput = new PodSpecContainerEnvValueFromFieldRefOutputReference(this as any, "field_ref", true);
  public get fieldRef() {
    return this.__fieldRefOutput;
  }
  public putFieldRef(value: PodSpecContainerEnvValueFromFieldRef | undefined) {
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
  private _resourceFieldRef?: PodSpecContainerEnvValueFromResourceFieldRef | undefined; 
  private __resourceFieldRefOutput = new PodSpecContainerEnvValueFromResourceFieldRefOutputReference(this as any, "resource_field_ref", true);
  public get resourceFieldRef() {
    return this.__resourceFieldRefOutput;
  }
  public putResourceFieldRef(value: PodSpecContainerEnvValueFromResourceFieldRef | undefined) {
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
  private _secretKeyRef?: PodSpecContainerEnvValueFromSecretKeyRef | undefined; 
  private __secretKeyRefOutput = new PodSpecContainerEnvValueFromSecretKeyRefOutputReference(this as any, "secret_key_ref", true);
  public get secretKeyRef() {
    return this.__secretKeyRefOutput;
  }
  public putSecretKeyRef(value: PodSpecContainerEnvValueFromSecretKeyRef | undefined) {
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
export interface PodSpecContainerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
  /**
  * value_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value_from Pod#value_from}
  */
  readonly valueFrom?: PodSpecContainerEnvValueFrom;
}

function podSpecContainerEnvToTerraform(struct?: PodSpecContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: podSpecContainerEnvValueFromToTerraform(struct!.valueFrom),
  }
}

export interface PodSpecContainerEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Specify whether the ConfigMap must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function podSpecContainerEnvFromConfigMapRefToTerraform(struct?: PodSpecContainerEnvFromConfigMapRefOutputReference | PodSpecContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class PodSpecContainerEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function podSpecContainerEnvFromSecretRefToTerraform(struct?: PodSpecContainerEnvFromSecretRefOutputReference | PodSpecContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class PodSpecContainerEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerEnvFrom {
  /**
  * An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#prefix Pod#prefix}
  */
  readonly prefix?: string;
  /**
  * config_map_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#config_map_ref Pod#config_map_ref}
  */
  readonly configMapRef?: PodSpecContainerEnvFromConfigMapRef;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret_ref Pod#secret_ref}
  */
  readonly secretRef?: PodSpecContainerEnvFromSecretRef;
}

function podSpecContainerEnvFromToTerraform(struct?: PodSpecContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: podSpecContainerEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    secret_ref: podSpecContainerEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}

export interface PodSpecContainerLifecyclePostStartExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
}

function podSpecContainerLifecyclePostStartExecToTerraform(struct?: PodSpecContainerLifecyclePostStartExecOutputReference | PodSpecContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class PodSpecContainerLifecyclePostStartExecOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerLifecyclePostStartHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: PodSpecContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecContainerLifecyclePostStartHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host Pod#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#scheme Pod#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_header Pod#http_header}
  */
  readonly httpHeader?: PodSpecContainerLifecyclePostStartHttpGetHttpHeader[];
}

function podSpecContainerLifecyclePostStartHttpGetToTerraform(struct?: PodSpecContainerLifecyclePostStartHttpGetOutputReference | PodSpecContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(podSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class PodSpecContainerLifecyclePostStartHttpGetOutputReference extends cdktf.ComplexObject {
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
  private _httpHeader?: PodSpecContainerLifecyclePostStartHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: PodSpecContainerLifecyclePostStartHttpGetHttpHeader[] | undefined) {
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
export interface PodSpecContainerLifecyclePostStartTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port: string;
}

function podSpecContainerLifecyclePostStartTcpSocketToTerraform(struct?: PodSpecContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface PodSpecContainerLifecyclePostStart {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#exec Pod#exec}
  */
  readonly exec?: PodSpecContainerLifecyclePostStartExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_get Pod#http_get}
  */
  readonly httpGet?: PodSpecContainerLifecyclePostStartHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tcp_socket Pod#tcp_socket}
  */
  readonly tcpSocket?: PodSpecContainerLifecyclePostStartTcpSocket[];
}

function podSpecContainerLifecyclePostStartToTerraform(struct?: PodSpecContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: podSpecContainerLifecyclePostStartExecToTerraform(struct!.exec),
    http_get: podSpecContainerLifecyclePostStartHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(podSpecContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface PodSpecContainerLifecyclePreStopExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
}

function podSpecContainerLifecyclePreStopExecToTerraform(struct?: PodSpecContainerLifecyclePreStopExecOutputReference | PodSpecContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class PodSpecContainerLifecyclePreStopExecOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerLifecyclePreStopHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: PodSpecContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecContainerLifecyclePreStopHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host Pod#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#scheme Pod#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_header Pod#http_header}
  */
  readonly httpHeader?: PodSpecContainerLifecyclePreStopHttpGetHttpHeader[];
}

function podSpecContainerLifecyclePreStopHttpGetToTerraform(struct?: PodSpecContainerLifecyclePreStopHttpGetOutputReference | PodSpecContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(podSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class PodSpecContainerLifecyclePreStopHttpGetOutputReference extends cdktf.ComplexObject {
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
  private _httpHeader?: PodSpecContainerLifecyclePreStopHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: PodSpecContainerLifecyclePreStopHttpGetHttpHeader[] | undefined) {
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
export interface PodSpecContainerLifecyclePreStopTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port: string;
}

function podSpecContainerLifecyclePreStopTcpSocketToTerraform(struct?: PodSpecContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface PodSpecContainerLifecyclePreStop {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#exec Pod#exec}
  */
  readonly exec?: PodSpecContainerLifecyclePreStopExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_get Pod#http_get}
  */
  readonly httpGet?: PodSpecContainerLifecyclePreStopHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tcp_socket Pod#tcp_socket}
  */
  readonly tcpSocket?: PodSpecContainerLifecyclePreStopTcpSocket[];
}

function podSpecContainerLifecyclePreStopToTerraform(struct?: PodSpecContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: podSpecContainerLifecyclePreStopExecToTerraform(struct!.exec),
    http_get: podSpecContainerLifecyclePreStopHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(podSpecContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface PodSpecContainerLifecycle {
  /**
  * post_start block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#post_start Pod#post_start}
  */
  readonly postStart?: PodSpecContainerLifecyclePostStart[];
  /**
  * pre_stop block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#pre_stop Pod#pre_stop}
  */
  readonly preStop?: PodSpecContainerLifecyclePreStop[];
}

function podSpecContainerLifecycleToTerraform(struct?: PodSpecContainerLifecycleOutputReference | PodSpecContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: cdktf.listMapper(podSpecContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(podSpecContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export class PodSpecContainerLifecycleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart?: PodSpecContainerLifecyclePostStart[] | undefined; 
  public get postStart() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('post_start') as any;
  }
  public set postStart(value: PodSpecContainerLifecyclePostStart[] | undefined) {
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
  private _preStop?: PodSpecContainerLifecyclePreStop[] | undefined; 
  public get preStop() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pre_stop') as any;
  }
  public set preStop(value: PodSpecContainerLifecyclePreStop[] | undefined) {
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
export interface PodSpecContainerLivenessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
}

function podSpecContainerLivenessProbeExecToTerraform(struct?: PodSpecContainerLivenessProbeExecOutputReference | PodSpecContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class PodSpecContainerLivenessProbeExecOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerLivenessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: PodSpecContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecContainerLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host Pod#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#scheme Pod#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_header Pod#http_header}
  */
  readonly httpHeader?: PodSpecContainerLivenessProbeHttpGetHttpHeader[];
}

function podSpecContainerLivenessProbeHttpGetToTerraform(struct?: PodSpecContainerLivenessProbeHttpGetOutputReference | PodSpecContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(podSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class PodSpecContainerLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
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
  private _httpHeader?: PodSpecContainerLivenessProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: PodSpecContainerLivenessProbeHttpGetHttpHeader[] | undefined) {
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
export interface PodSpecContainerLivenessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port: string;
}

function podSpecContainerLivenessProbeTcpSocketToTerraform(struct?: PodSpecContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface PodSpecContainerLivenessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#failure_threshold Pod#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#initial_delay_seconds Pod#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#period_seconds Pod#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#success_threshold Pod#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#timeout_seconds Pod#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#exec Pod#exec}
  */
  readonly exec?: PodSpecContainerLivenessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_get Pod#http_get}
  */
  readonly httpGet?: PodSpecContainerLivenessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tcp_socket Pod#tcp_socket}
  */
  readonly tcpSocket?: PodSpecContainerLivenessProbeTcpSocket[];
}

function podSpecContainerLivenessProbeToTerraform(struct?: PodSpecContainerLivenessProbeOutputReference | PodSpecContainerLivenessProbe): any {
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
    exec: podSpecContainerLivenessProbeExecToTerraform(struct!.exec),
    http_get: podSpecContainerLivenessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(podSpecContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class PodSpecContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
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
  private _exec?: PodSpecContainerLivenessProbeExec | undefined; 
  private __execOutput = new PodSpecContainerLivenessProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: PodSpecContainerLivenessProbeExec | undefined) {
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
  private _httpGet?: PodSpecContainerLivenessProbeHttpGet | undefined; 
  private __httpGetOutput = new PodSpecContainerLivenessProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: PodSpecContainerLivenessProbeHttpGet | undefined) {
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
  private _tcpSocket?: PodSpecContainerLivenessProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: PodSpecContainerLivenessProbeTcpSocket[] | undefined) {
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
export interface PodSpecContainerPort {
  /**
  * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#container_port Pod#container_port}
  */
  readonly containerPort: number;
  /**
  * What host IP to bind the external port to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host_ip Pod#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host_port Pod#host_port}
  */
  readonly hostPort?: number;
  /**
  * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP or TCP. Defaults to "TCP".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#protocol Pod#protocol}
  */
  readonly protocol?: string;
}

function podSpecContainerPortToTerraform(struct?: PodSpecContainerPort): any {
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

export interface PodSpecContainerReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
}

function podSpecContainerReadinessProbeExecToTerraform(struct?: PodSpecContainerReadinessProbeExecOutputReference | PodSpecContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class PodSpecContainerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerReadinessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: PodSpecContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecContainerReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host Pod#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#scheme Pod#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_header Pod#http_header}
  */
  readonly httpHeader?: PodSpecContainerReadinessProbeHttpGetHttpHeader[];
}

function podSpecContainerReadinessProbeHttpGetToTerraform(struct?: PodSpecContainerReadinessProbeHttpGetOutputReference | PodSpecContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(podSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class PodSpecContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
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
  private _httpHeader?: PodSpecContainerReadinessProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: PodSpecContainerReadinessProbeHttpGetHttpHeader[] | undefined) {
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
export interface PodSpecContainerReadinessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port: string;
}

function podSpecContainerReadinessProbeTcpSocketToTerraform(struct?: PodSpecContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface PodSpecContainerReadinessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#failure_threshold Pod#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#initial_delay_seconds Pod#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#period_seconds Pod#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#success_threshold Pod#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#timeout_seconds Pod#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#exec Pod#exec}
  */
  readonly exec?: PodSpecContainerReadinessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_get Pod#http_get}
  */
  readonly httpGet?: PodSpecContainerReadinessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tcp_socket Pod#tcp_socket}
  */
  readonly tcpSocket?: PodSpecContainerReadinessProbeTcpSocket[];
}

function podSpecContainerReadinessProbeToTerraform(struct?: PodSpecContainerReadinessProbeOutputReference | PodSpecContainerReadinessProbe): any {
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
    exec: podSpecContainerReadinessProbeExecToTerraform(struct!.exec),
    http_get: podSpecContainerReadinessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(podSpecContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class PodSpecContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
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
  private _exec?: PodSpecContainerReadinessProbeExec | undefined; 
  private __execOutput = new PodSpecContainerReadinessProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: PodSpecContainerReadinessProbeExec | undefined) {
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
  private _httpGet?: PodSpecContainerReadinessProbeHttpGet | undefined; 
  private __httpGetOutput = new PodSpecContainerReadinessProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: PodSpecContainerReadinessProbeHttpGet | undefined) {
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
  private _tcpSocket?: PodSpecContainerReadinessProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: PodSpecContainerReadinessProbeTcpSocket[] | undefined) {
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
export interface PodSpecContainerResources {
  /**
  * Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#limits Pod#limits}
  */
  readonly limits?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#requests Pod#requests}
  */
  readonly requests?: { [key: string]: string } | cdktf.IResolvable;
}

function podSpecContainerResourcesToTerraform(struct?: PodSpecContainerResourcesOutputReference | PodSpecContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export class PodSpecContainerResourcesOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerSecurityContextCapabilities {
  /**
  * Added capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#add Pod#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#drop Pod#drop}
  */
  readonly drop?: string[];
}

function podSpecContainerSecurityContextCapabilitiesToTerraform(struct?: PodSpecContainerSecurityContextCapabilitiesOutputReference | PodSpecContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export class PodSpecContainerSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#level Pod#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#role Pod#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#type Pod#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#user Pod#user}
  */
  readonly user?: string;
}

function podSpecContainerSecurityContextSeLinuxOptionsToTerraform(struct?: PodSpecContainerSecurityContextSeLinuxOptionsOutputReference | PodSpecContainerSecurityContextSeLinuxOptions): any {
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

export class PodSpecContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#allow_privilege_escalation Pod#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#privileged Pod#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Whether this container has a read-only root filesystem. Default is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only_root_filesystem Pod#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#run_as_group Pod#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#run_as_non_root Pod#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#run_as_user Pod#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#capabilities Pod#capabilities}
  */
  readonly capabilities?: PodSpecContainerSecurityContextCapabilities;
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#se_linux_options Pod#se_linux_options}
  */
  readonly seLinuxOptions?: PodSpecContainerSecurityContextSeLinuxOptions;
}

function podSpecContainerSecurityContextToTerraform(struct?: PodSpecContainerSecurityContextOutputReference | PodSpecContainerSecurityContext): any {
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
    capabilities: podSpecContainerSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    se_linux_options: podSpecContainerSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
  }
}

export class PodSpecContainerSecurityContextOutputReference extends cdktf.ComplexObject {
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
  private _capabilities?: PodSpecContainerSecurityContextCapabilities | undefined; 
  private __capabilitiesOutput = new PodSpecContainerSecurityContextCapabilitiesOutputReference(this as any, "capabilities", true);
  public get capabilities() {
    return this.__capabilitiesOutput;
  }
  public putCapabilities(value: PodSpecContainerSecurityContextCapabilities | undefined) {
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
  private _seLinuxOptions?: PodSpecContainerSecurityContextSeLinuxOptions | undefined; 
  private __seLinuxOptionsOutput = new PodSpecContainerSecurityContextSeLinuxOptionsOutputReference(this as any, "se_linux_options", true);
  public get seLinuxOptions() {
    return this.__seLinuxOptionsOutput;
  }
  public putSeLinuxOptions(value: PodSpecContainerSecurityContextSeLinuxOptions | undefined) {
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
export interface PodSpecContainerStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
}

function podSpecContainerStartupProbeExecToTerraform(struct?: PodSpecContainerStartupProbeExecOutputReference | PodSpecContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class PodSpecContainerStartupProbeExecOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecContainerStartupProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: PodSpecContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecContainerStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host Pod#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#scheme Pod#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_header Pod#http_header}
  */
  readonly httpHeader?: PodSpecContainerStartupProbeHttpGetHttpHeader[];
}

function podSpecContainerStartupProbeHttpGetToTerraform(struct?: PodSpecContainerStartupProbeHttpGetOutputReference | PodSpecContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(podSpecContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class PodSpecContainerStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
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
  private _httpHeader?: PodSpecContainerStartupProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: PodSpecContainerStartupProbeHttpGetHttpHeader[] | undefined) {
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
export interface PodSpecContainerStartupProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port: string;
}

function podSpecContainerStartupProbeTcpSocketToTerraform(struct?: PodSpecContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface PodSpecContainerStartupProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#failure_threshold Pod#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#initial_delay_seconds Pod#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#period_seconds Pod#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#success_threshold Pod#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#timeout_seconds Pod#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#exec Pod#exec}
  */
  readonly exec?: PodSpecContainerStartupProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_get Pod#http_get}
  */
  readonly httpGet?: PodSpecContainerStartupProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tcp_socket Pod#tcp_socket}
  */
  readonly tcpSocket?: PodSpecContainerStartupProbeTcpSocket[];
}

function podSpecContainerStartupProbeToTerraform(struct?: PodSpecContainerStartupProbeOutputReference | PodSpecContainerStartupProbe): any {
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
    exec: podSpecContainerStartupProbeExecToTerraform(struct!.exec),
    http_get: podSpecContainerStartupProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(podSpecContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class PodSpecContainerStartupProbeOutputReference extends cdktf.ComplexObject {
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
  private _exec?: PodSpecContainerStartupProbeExec | undefined; 
  private __execOutput = new PodSpecContainerStartupProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: PodSpecContainerStartupProbeExec | undefined) {
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
  private _httpGet?: PodSpecContainerStartupProbeHttpGet | undefined; 
  private __httpGetOutput = new PodSpecContainerStartupProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: PodSpecContainerStartupProbeHttpGet | undefined) {
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
  private _tcpSocket?: PodSpecContainerStartupProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: PodSpecContainerStartupProbeTcpSocket[] | undefined) {
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
export interface PodSpecContainerVolumeMount {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#mount_path Pod#mount_path}
  */
  readonly mountPath: string;
  /**
  * Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#mount_propagation Pod#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#sub_path Pod#sub_path}
  */
  readonly subPath?: string;
}

function podSpecContainerVolumeMountToTerraform(struct?: PodSpecContainerVolumeMount): any {
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

export interface PodSpecContainer {
  /**
  * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#args Pod#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
  /**
  * Docker image name. More info: http://kubernetes.io/docs/user-guide/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#image Pod#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#image_pull_policy Pod#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#stdin Pod#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#stdin_once Pod#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#termination_message_path Pod#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#termination_message_policy Pod#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tty Pod#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#working_dir Pod#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#env Pod#env}
  */
  readonly env?: PodSpecContainerEnv[];
  /**
  * env_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#env_from Pod#env_from}
  */
  readonly envFrom?: PodSpecContainerEnvFrom[];
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#lifecycle Pod#lifecycle}
  */
  readonly lifecycle?: PodSpecContainerLifecycle;
  /**
  * liveness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#liveness_probe Pod#liveness_probe}
  */
  readonly livenessProbe?: PodSpecContainerLivenessProbe;
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: PodSpecContainerPort[];
  /**
  * readiness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#readiness_probe Pod#readiness_probe}
  */
  readonly readinessProbe?: PodSpecContainerReadinessProbe;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#resources Pod#resources}
  */
  readonly resources?: PodSpecContainerResources;
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#security_context Pod#security_context}
  */
  readonly securityContext?: PodSpecContainerSecurityContext;
  /**
  * startup_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#startup_probe Pod#startup_probe}
  */
  readonly startupProbe?: PodSpecContainerStartupProbe;
  /**
  * volume_mount block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#volume_mount Pod#volume_mount}
  */
  readonly volumeMount?: PodSpecContainerVolumeMount[];
}

function podSpecContainerToTerraform(struct?: PodSpecContainer): any {
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
    env: cdktf.listMapper(podSpecContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(podSpecContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: podSpecContainerLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: podSpecContainerLivenessProbeToTerraform(struct!.livenessProbe),
    port: cdktf.listMapper(podSpecContainerPortToTerraform)(struct!.port),
    readiness_probe: podSpecContainerReadinessProbeToTerraform(struct!.readinessProbe),
    resources: podSpecContainerResourcesToTerraform(struct!.resources),
    security_context: podSpecContainerSecurityContextToTerraform(struct!.securityContext),
    startup_probe: podSpecContainerStartupProbeToTerraform(struct!.startupProbe),
    volume_mount: cdktf.listMapper(podSpecContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface PodSpecDnsConfigOption {
  /**
  * Name of the option.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Value of the option. Optional: Defaults to empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecDnsConfigOptionToTerraform(struct?: PodSpecDnsConfigOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecDnsConfig {
  /**
  * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#nameservers Pod#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#searches Pod#searches}
  */
  readonly searches?: string[];
  /**
  * option block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#option Pod#option}
  */
  readonly option?: PodSpecDnsConfigOption[];
}

function podSpecDnsConfigToTerraform(struct?: PodSpecDnsConfigOutputReference | PodSpecDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    searches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searches),
    option: cdktf.listMapper(podSpecDnsConfigOptionToTerraform)(struct!.option),
  }
}

export class PodSpecDnsConfigOutputReference extends cdktf.ComplexObject {
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
  private _option?: PodSpecDnsConfigOption[] | undefined; 
  public get option() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('option') as any;
  }
  public set option(value: PodSpecDnsConfigOption[] | undefined) {
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
export interface PodSpecHostAliases {
  /**
  * Hostnames for the IP address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#hostnames Pod#hostnames}
  */
  readonly hostnames: string[];
  /**
  * IP address of the host file entry.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#ip Pod#ip}
  */
  readonly ip: string;
}

function podSpecHostAliasesToTerraform(struct?: PodSpecHostAliases): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface PodSpecImagePullSecrets {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
}

function podSpecImagePullSecretsToTerraform(struct?: PodSpecImagePullSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface PodSpecInitContainerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function podSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: PodSpecInitContainerEnvValueFromConfigMapKeyRefOutputReference | PodSpecInitContainerEnvValueFromConfigMapKeyRef): any {
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

export class PodSpecInitContainerEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#api_version Pod#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#field_path Pod#field_path}
  */
  readonly fieldPath?: string;
}

function podSpecInitContainerEnvValueFromFieldRefToTerraform(struct?: PodSpecInitContainerEnvValueFromFieldRefOutputReference | PodSpecInitContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class PodSpecInitContainerEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerEnvValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#container_name Pod#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#divisor Pod#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#resource Pod#resource}
  */
  readonly resource: string;
}

function podSpecInitContainerEnvValueFromResourceFieldRefToTerraform(struct?: PodSpecInitContainerEnvValueFromResourceFieldRefOutputReference | PodSpecInitContainerEnvValueFromResourceFieldRef): any {
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

export class PodSpecInitContainerEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function podSpecInitContainerEnvValueFromSecretKeyRefToTerraform(struct?: PodSpecInitContainerEnvValueFromSecretKeyRefOutputReference | PodSpecInitContainerEnvValueFromSecretKeyRef): any {
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

export class PodSpecInitContainerEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerEnvValueFrom {
  /**
  * config_map_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#config_map_key_ref Pod#config_map_key_ref}
  */
  readonly configMapKeyRef?: PodSpecInitContainerEnvValueFromConfigMapKeyRef;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#field_ref Pod#field_ref}
  */
  readonly fieldRef?: PodSpecInitContainerEnvValueFromFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#resource_field_ref Pod#resource_field_ref}
  */
  readonly resourceFieldRef?: PodSpecInitContainerEnvValueFromResourceFieldRef;
  /**
  * secret_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret_key_ref Pod#secret_key_ref}
  */
  readonly secretKeyRef?: PodSpecInitContainerEnvValueFromSecretKeyRef;
}

function podSpecInitContainerEnvValueFromToTerraform(struct?: PodSpecInitContainerEnvValueFromOutputReference | PodSpecInitContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: podSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: podSpecInitContainerEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: podSpecInitContainerEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: podSpecInitContainerEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}

export class PodSpecInitContainerEnvValueFromOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef?: PodSpecInitContainerEnvValueFromConfigMapKeyRef | undefined; 
  private __configMapKeyRefOutput = new PodSpecInitContainerEnvValueFromConfigMapKeyRefOutputReference(this as any, "config_map_key_ref", true);
  public get configMapKeyRef() {
    return this.__configMapKeyRefOutput;
  }
  public putConfigMapKeyRef(value: PodSpecInitContainerEnvValueFromConfigMapKeyRef | undefined) {
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
  private _fieldRef?: PodSpecInitContainerEnvValueFromFieldRef | undefined; 
  private __fieldRefOutput = new PodSpecInitContainerEnvValueFromFieldRefOutputReference(this as any, "field_ref", true);
  public get fieldRef() {
    return this.__fieldRefOutput;
  }
  public putFieldRef(value: PodSpecInitContainerEnvValueFromFieldRef | undefined) {
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
  private _resourceFieldRef?: PodSpecInitContainerEnvValueFromResourceFieldRef | undefined; 
  private __resourceFieldRefOutput = new PodSpecInitContainerEnvValueFromResourceFieldRefOutputReference(this as any, "resource_field_ref", true);
  public get resourceFieldRef() {
    return this.__resourceFieldRefOutput;
  }
  public putResourceFieldRef(value: PodSpecInitContainerEnvValueFromResourceFieldRef | undefined) {
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
  private _secretKeyRef?: PodSpecInitContainerEnvValueFromSecretKeyRef | undefined; 
  private __secretKeyRefOutput = new PodSpecInitContainerEnvValueFromSecretKeyRefOutputReference(this as any, "secret_key_ref", true);
  public get secretKeyRef() {
    return this.__secretKeyRefOutput;
  }
  public putSecretKeyRef(value: PodSpecInitContainerEnvValueFromSecretKeyRef | undefined) {
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
export interface PodSpecInitContainerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
  /**
  * value_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value_from Pod#value_from}
  */
  readonly valueFrom?: PodSpecInitContainerEnvValueFrom;
}

function podSpecInitContainerEnvToTerraform(struct?: PodSpecInitContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: podSpecInitContainerEnvValueFromToTerraform(struct!.valueFrom),
  }
}

export interface PodSpecInitContainerEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Specify whether the ConfigMap must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function podSpecInitContainerEnvFromConfigMapRefToTerraform(struct?: PodSpecInitContainerEnvFromConfigMapRefOutputReference | PodSpecInitContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class PodSpecInitContainerEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

function podSpecInitContainerEnvFromSecretRefToTerraform(struct?: PodSpecInitContainerEnvFromSecretRefOutputReference | PodSpecInitContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class PodSpecInitContainerEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerEnvFrom {
  /**
  * An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#prefix Pod#prefix}
  */
  readonly prefix?: string;
  /**
  * config_map_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#config_map_ref Pod#config_map_ref}
  */
  readonly configMapRef?: PodSpecInitContainerEnvFromConfigMapRef;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret_ref Pod#secret_ref}
  */
  readonly secretRef?: PodSpecInitContainerEnvFromSecretRef;
}

function podSpecInitContainerEnvFromToTerraform(struct?: PodSpecInitContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: podSpecInitContainerEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    secret_ref: podSpecInitContainerEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}

export interface PodSpecInitContainerLifecyclePostStartExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
}

function podSpecInitContainerLifecyclePostStartExecToTerraform(struct?: PodSpecInitContainerLifecyclePostStartExecOutputReference | PodSpecInitContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class PodSpecInitContainerLifecyclePostStartExecOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerLifecyclePostStartHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: PodSpecInitContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecInitContainerLifecyclePostStartHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host Pod#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#scheme Pod#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_header Pod#http_header}
  */
  readonly httpHeader?: PodSpecInitContainerLifecyclePostStartHttpGetHttpHeader[];
}

function podSpecInitContainerLifecyclePostStartHttpGetToTerraform(struct?: PodSpecInitContainerLifecyclePostStartHttpGetOutputReference | PodSpecInitContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(podSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class PodSpecInitContainerLifecyclePostStartHttpGetOutputReference extends cdktf.ComplexObject {
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
  private _httpHeader?: PodSpecInitContainerLifecyclePostStartHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: PodSpecInitContainerLifecyclePostStartHttpGetHttpHeader[] | undefined) {
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
export interface PodSpecInitContainerLifecyclePostStartTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port: string;
}

function podSpecInitContainerLifecyclePostStartTcpSocketToTerraform(struct?: PodSpecInitContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface PodSpecInitContainerLifecyclePostStart {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#exec Pod#exec}
  */
  readonly exec?: PodSpecInitContainerLifecyclePostStartExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_get Pod#http_get}
  */
  readonly httpGet?: PodSpecInitContainerLifecyclePostStartHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tcp_socket Pod#tcp_socket}
  */
  readonly tcpSocket?: PodSpecInitContainerLifecyclePostStartTcpSocket[];
}

function podSpecInitContainerLifecyclePostStartToTerraform(struct?: PodSpecInitContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: podSpecInitContainerLifecyclePostStartExecToTerraform(struct!.exec),
    http_get: podSpecInitContainerLifecyclePostStartHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(podSpecInitContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface PodSpecInitContainerLifecyclePreStopExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
}

function podSpecInitContainerLifecyclePreStopExecToTerraform(struct?: PodSpecInitContainerLifecyclePreStopExecOutputReference | PodSpecInitContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class PodSpecInitContainerLifecyclePreStopExecOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerLifecyclePreStopHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: PodSpecInitContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecInitContainerLifecyclePreStopHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host Pod#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#scheme Pod#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_header Pod#http_header}
  */
  readonly httpHeader?: PodSpecInitContainerLifecyclePreStopHttpGetHttpHeader[];
}

function podSpecInitContainerLifecyclePreStopHttpGetToTerraform(struct?: PodSpecInitContainerLifecyclePreStopHttpGetOutputReference | PodSpecInitContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(podSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class PodSpecInitContainerLifecyclePreStopHttpGetOutputReference extends cdktf.ComplexObject {
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
  private _httpHeader?: PodSpecInitContainerLifecyclePreStopHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: PodSpecInitContainerLifecyclePreStopHttpGetHttpHeader[] | undefined) {
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
export interface PodSpecInitContainerLifecyclePreStopTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port: string;
}

function podSpecInitContainerLifecyclePreStopTcpSocketToTerraform(struct?: PodSpecInitContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface PodSpecInitContainerLifecyclePreStop {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#exec Pod#exec}
  */
  readonly exec?: PodSpecInitContainerLifecyclePreStopExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_get Pod#http_get}
  */
  readonly httpGet?: PodSpecInitContainerLifecyclePreStopHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tcp_socket Pod#tcp_socket}
  */
  readonly tcpSocket?: PodSpecInitContainerLifecyclePreStopTcpSocket[];
}

function podSpecInitContainerLifecyclePreStopToTerraform(struct?: PodSpecInitContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: podSpecInitContainerLifecyclePreStopExecToTerraform(struct!.exec),
    http_get: podSpecInitContainerLifecyclePreStopHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(podSpecInitContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface PodSpecInitContainerLifecycle {
  /**
  * post_start block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#post_start Pod#post_start}
  */
  readonly postStart?: PodSpecInitContainerLifecyclePostStart[];
  /**
  * pre_stop block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#pre_stop Pod#pre_stop}
  */
  readonly preStop?: PodSpecInitContainerLifecyclePreStop[];
}

function podSpecInitContainerLifecycleToTerraform(struct?: PodSpecInitContainerLifecycleOutputReference | PodSpecInitContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: cdktf.listMapper(podSpecInitContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(podSpecInitContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export class PodSpecInitContainerLifecycleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart?: PodSpecInitContainerLifecyclePostStart[] | undefined; 
  public get postStart() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('post_start') as any;
  }
  public set postStart(value: PodSpecInitContainerLifecyclePostStart[] | undefined) {
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
  private _preStop?: PodSpecInitContainerLifecyclePreStop[] | undefined; 
  public get preStop() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pre_stop') as any;
  }
  public set preStop(value: PodSpecInitContainerLifecyclePreStop[] | undefined) {
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
export interface PodSpecInitContainerLivenessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
}

function podSpecInitContainerLivenessProbeExecToTerraform(struct?: PodSpecInitContainerLivenessProbeExecOutputReference | PodSpecInitContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class PodSpecInitContainerLivenessProbeExecOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerLivenessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: PodSpecInitContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecInitContainerLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host Pod#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#scheme Pod#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_header Pod#http_header}
  */
  readonly httpHeader?: PodSpecInitContainerLivenessProbeHttpGetHttpHeader[];
}

function podSpecInitContainerLivenessProbeHttpGetToTerraform(struct?: PodSpecInitContainerLivenessProbeHttpGetOutputReference | PodSpecInitContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(podSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class PodSpecInitContainerLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
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
  private _httpHeader?: PodSpecInitContainerLivenessProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: PodSpecInitContainerLivenessProbeHttpGetHttpHeader[] | undefined) {
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
export interface PodSpecInitContainerLivenessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port: string;
}

function podSpecInitContainerLivenessProbeTcpSocketToTerraform(struct?: PodSpecInitContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface PodSpecInitContainerLivenessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#failure_threshold Pod#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#initial_delay_seconds Pod#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#period_seconds Pod#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#success_threshold Pod#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#timeout_seconds Pod#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#exec Pod#exec}
  */
  readonly exec?: PodSpecInitContainerLivenessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_get Pod#http_get}
  */
  readonly httpGet?: PodSpecInitContainerLivenessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tcp_socket Pod#tcp_socket}
  */
  readonly tcpSocket?: PodSpecInitContainerLivenessProbeTcpSocket[];
}

function podSpecInitContainerLivenessProbeToTerraform(struct?: PodSpecInitContainerLivenessProbeOutputReference | PodSpecInitContainerLivenessProbe): any {
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
    exec: podSpecInitContainerLivenessProbeExecToTerraform(struct!.exec),
    http_get: podSpecInitContainerLivenessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(podSpecInitContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class PodSpecInitContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
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
  private _exec?: PodSpecInitContainerLivenessProbeExec | undefined; 
  private __execOutput = new PodSpecInitContainerLivenessProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: PodSpecInitContainerLivenessProbeExec | undefined) {
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
  private _httpGet?: PodSpecInitContainerLivenessProbeHttpGet | undefined; 
  private __httpGetOutput = new PodSpecInitContainerLivenessProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: PodSpecInitContainerLivenessProbeHttpGet | undefined) {
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
  private _tcpSocket?: PodSpecInitContainerLivenessProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: PodSpecInitContainerLivenessProbeTcpSocket[] | undefined) {
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
export interface PodSpecInitContainerPort {
  /**
  * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#container_port Pod#container_port}
  */
  readonly containerPort: number;
  /**
  * What host IP to bind the external port to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host_ip Pod#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host_port Pod#host_port}
  */
  readonly hostPort?: number;
  /**
  * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP or TCP. Defaults to "TCP".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#protocol Pod#protocol}
  */
  readonly protocol?: string;
}

function podSpecInitContainerPortToTerraform(struct?: PodSpecInitContainerPort): any {
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

export interface PodSpecInitContainerReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
}

function podSpecInitContainerReadinessProbeExecToTerraform(struct?: PodSpecInitContainerReadinessProbeExecOutputReference | PodSpecInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class PodSpecInitContainerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerReadinessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: PodSpecInitContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecInitContainerReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host Pod#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#scheme Pod#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_header Pod#http_header}
  */
  readonly httpHeader?: PodSpecInitContainerReadinessProbeHttpGetHttpHeader[];
}

function podSpecInitContainerReadinessProbeHttpGetToTerraform(struct?: PodSpecInitContainerReadinessProbeHttpGetOutputReference | PodSpecInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(podSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class PodSpecInitContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
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
  private _httpHeader?: PodSpecInitContainerReadinessProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: PodSpecInitContainerReadinessProbeHttpGetHttpHeader[] | undefined) {
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
export interface PodSpecInitContainerReadinessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port: string;
}

function podSpecInitContainerReadinessProbeTcpSocketToTerraform(struct?: PodSpecInitContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface PodSpecInitContainerReadinessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#failure_threshold Pod#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#initial_delay_seconds Pod#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#period_seconds Pod#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#success_threshold Pod#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#timeout_seconds Pod#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#exec Pod#exec}
  */
  readonly exec?: PodSpecInitContainerReadinessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_get Pod#http_get}
  */
  readonly httpGet?: PodSpecInitContainerReadinessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tcp_socket Pod#tcp_socket}
  */
  readonly tcpSocket?: PodSpecInitContainerReadinessProbeTcpSocket[];
}

function podSpecInitContainerReadinessProbeToTerraform(struct?: PodSpecInitContainerReadinessProbeOutputReference | PodSpecInitContainerReadinessProbe): any {
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
    exec: podSpecInitContainerReadinessProbeExecToTerraform(struct!.exec),
    http_get: podSpecInitContainerReadinessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(podSpecInitContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class PodSpecInitContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
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
  private _exec?: PodSpecInitContainerReadinessProbeExec | undefined; 
  private __execOutput = new PodSpecInitContainerReadinessProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: PodSpecInitContainerReadinessProbeExec | undefined) {
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
  private _httpGet?: PodSpecInitContainerReadinessProbeHttpGet | undefined; 
  private __httpGetOutput = new PodSpecInitContainerReadinessProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: PodSpecInitContainerReadinessProbeHttpGet | undefined) {
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
  private _tcpSocket?: PodSpecInitContainerReadinessProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: PodSpecInitContainerReadinessProbeTcpSocket[] | undefined) {
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
export interface PodSpecInitContainerResources {
  /**
  * Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#limits Pod#limits}
  */
  readonly limits?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#requests Pod#requests}
  */
  readonly requests?: { [key: string]: string } | cdktf.IResolvable;
}

function podSpecInitContainerResourcesToTerraform(struct?: PodSpecInitContainerResourcesOutputReference | PodSpecInitContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export class PodSpecInitContainerResourcesOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerSecurityContextCapabilities {
  /**
  * Added capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#add Pod#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#drop Pod#drop}
  */
  readonly drop?: string[];
}

function podSpecInitContainerSecurityContextCapabilitiesToTerraform(struct?: PodSpecInitContainerSecurityContextCapabilitiesOutputReference | PodSpecInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export class PodSpecInitContainerSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#level Pod#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#role Pod#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#type Pod#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#user Pod#user}
  */
  readonly user?: string;
}

function podSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct?: PodSpecInitContainerSecurityContextSeLinuxOptionsOutputReference | PodSpecInitContainerSecurityContextSeLinuxOptions): any {
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

export class PodSpecInitContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#allow_privilege_escalation Pod#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#privileged Pod#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Whether this container has a read-only root filesystem. Default is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only_root_filesystem Pod#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#run_as_group Pod#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#run_as_non_root Pod#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#run_as_user Pod#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#capabilities Pod#capabilities}
  */
  readonly capabilities?: PodSpecInitContainerSecurityContextCapabilities;
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#se_linux_options Pod#se_linux_options}
  */
  readonly seLinuxOptions?: PodSpecInitContainerSecurityContextSeLinuxOptions;
}

function podSpecInitContainerSecurityContextToTerraform(struct?: PodSpecInitContainerSecurityContextOutputReference | PodSpecInitContainerSecurityContext): any {
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
    capabilities: podSpecInitContainerSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    se_linux_options: podSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
  }
}

export class PodSpecInitContainerSecurityContextOutputReference extends cdktf.ComplexObject {
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
  private _capabilities?: PodSpecInitContainerSecurityContextCapabilities | undefined; 
  private __capabilitiesOutput = new PodSpecInitContainerSecurityContextCapabilitiesOutputReference(this as any, "capabilities", true);
  public get capabilities() {
    return this.__capabilitiesOutput;
  }
  public putCapabilities(value: PodSpecInitContainerSecurityContextCapabilities | undefined) {
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
  private _seLinuxOptions?: PodSpecInitContainerSecurityContextSeLinuxOptions | undefined; 
  private __seLinuxOptionsOutput = new PodSpecInitContainerSecurityContextSeLinuxOptionsOutputReference(this as any, "se_linux_options", true);
  public get seLinuxOptions() {
    return this.__seLinuxOptionsOutput;
  }
  public putSeLinuxOptions(value: PodSpecInitContainerSecurityContextSeLinuxOptions | undefined) {
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
export interface PodSpecInitContainerStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
}

function podSpecInitContainerStartupProbeExecToTerraform(struct?: PodSpecInitContainerStartupProbeExecOutputReference | PodSpecInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class PodSpecInitContainerStartupProbeExecOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecInitContainerStartupProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: PodSpecInitContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecInitContainerStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host Pod#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#scheme Pod#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_header Pod#http_header}
  */
  readonly httpHeader?: PodSpecInitContainerStartupProbeHttpGetHttpHeader[];
}

function podSpecInitContainerStartupProbeHttpGetToTerraform(struct?: PodSpecInitContainerStartupProbeHttpGetOutputReference | PodSpecInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(podSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class PodSpecInitContainerStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
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
  private _httpHeader?: PodSpecInitContainerStartupProbeHttpGetHttpHeader[] | undefined; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header') as any;
  }
  public set httpHeader(value: PodSpecInitContainerStartupProbeHttpGetHttpHeader[] | undefined) {
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
export interface PodSpecInitContainerStartupProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port: string;
}

function podSpecInitContainerStartupProbeTcpSocketToTerraform(struct?: PodSpecInitContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface PodSpecInitContainerStartupProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#failure_threshold Pod#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#initial_delay_seconds Pod#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#period_seconds Pod#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#success_threshold Pod#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#timeout_seconds Pod#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#exec Pod#exec}
  */
  readonly exec?: PodSpecInitContainerStartupProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#http_get Pod#http_get}
  */
  readonly httpGet?: PodSpecInitContainerStartupProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tcp_socket Pod#tcp_socket}
  */
  readonly tcpSocket?: PodSpecInitContainerStartupProbeTcpSocket[];
}

function podSpecInitContainerStartupProbeToTerraform(struct?: PodSpecInitContainerStartupProbeOutputReference | PodSpecInitContainerStartupProbe): any {
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
    exec: podSpecInitContainerStartupProbeExecToTerraform(struct!.exec),
    http_get: podSpecInitContainerStartupProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(podSpecInitContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class PodSpecInitContainerStartupProbeOutputReference extends cdktf.ComplexObject {
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
  private _exec?: PodSpecInitContainerStartupProbeExec | undefined; 
  private __execOutput = new PodSpecInitContainerStartupProbeExecOutputReference(this as any, "exec", true);
  public get exec() {
    return this.__execOutput;
  }
  public putExec(value: PodSpecInitContainerStartupProbeExec | undefined) {
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
  private _httpGet?: PodSpecInitContainerStartupProbeHttpGet | undefined; 
  private __httpGetOutput = new PodSpecInitContainerStartupProbeHttpGetOutputReference(this as any, "http_get", true);
  public get httpGet() {
    return this.__httpGetOutput;
  }
  public putHttpGet(value: PodSpecInitContainerStartupProbeHttpGet | undefined) {
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
  private _tcpSocket?: PodSpecInitContainerStartupProbeTcpSocket[] | undefined; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket') as any;
  }
  public set tcpSocket(value: PodSpecInitContainerStartupProbeTcpSocket[] | undefined) {
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
export interface PodSpecInitContainerVolumeMount {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#mount_path Pod#mount_path}
  */
  readonly mountPath: string;
  /**
  * Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#mount_propagation Pod#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#sub_path Pod#sub_path}
  */
  readonly subPath?: string;
}

function podSpecInitContainerVolumeMountToTerraform(struct?: PodSpecInitContainerVolumeMount): any {
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

export interface PodSpecInitContainer {
  /**
  * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#args Pod#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#command Pod#command}
  */
  readonly command?: string[];
  /**
  * Docker image name. More info: http://kubernetes.io/docs/user-guide/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#image Pod#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#image_pull_policy Pod#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#stdin Pod#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#stdin_once Pod#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#termination_message_path Pod#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#termination_message_policy Pod#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#tty Pod#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#working_dir Pod#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#env Pod#env}
  */
  readonly env?: PodSpecInitContainerEnv[];
  /**
  * env_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#env_from Pod#env_from}
  */
  readonly envFrom?: PodSpecInitContainerEnvFrom[];
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#lifecycle Pod#lifecycle}
  */
  readonly lifecycle?: PodSpecInitContainerLifecycle;
  /**
  * liveness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#liveness_probe Pod#liveness_probe}
  */
  readonly livenessProbe?: PodSpecInitContainerLivenessProbe;
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#port Pod#port}
  */
  readonly port?: PodSpecInitContainerPort[];
  /**
  * readiness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#readiness_probe Pod#readiness_probe}
  */
  readonly readinessProbe?: PodSpecInitContainerReadinessProbe;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#resources Pod#resources}
  */
  readonly resources?: PodSpecInitContainerResources;
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#security_context Pod#security_context}
  */
  readonly securityContext?: PodSpecInitContainerSecurityContext;
  /**
  * startup_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#startup_probe Pod#startup_probe}
  */
  readonly startupProbe?: PodSpecInitContainerStartupProbe;
  /**
  * volume_mount block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#volume_mount Pod#volume_mount}
  */
  readonly volumeMount?: PodSpecInitContainerVolumeMount[];
}

function podSpecInitContainerToTerraform(struct?: PodSpecInitContainer): any {
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
    env: cdktf.listMapper(podSpecInitContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(podSpecInitContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: podSpecInitContainerLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: podSpecInitContainerLivenessProbeToTerraform(struct!.livenessProbe),
    port: cdktf.listMapper(podSpecInitContainerPortToTerraform)(struct!.port),
    readiness_probe: podSpecInitContainerReadinessProbeToTerraform(struct!.readinessProbe),
    resources: podSpecInitContainerResourcesToTerraform(struct!.resources),
    security_context: podSpecInitContainerSecurityContextToTerraform(struct!.securityContext),
    startup_probe: podSpecInitContainerStartupProbeToTerraform(struct!.startupProbe),
    volume_mount: cdktf.listMapper(podSpecInitContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface PodSpecReadinessGate {
  /**
  * refers to a condition in the pod's condition list with matching type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#condition_type Pod#condition_type}
  */
  readonly conditionType: string;
}

function podSpecReadinessGateToTerraform(struct?: PodSpecReadinessGate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}

export interface PodSpecSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#level Pod#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#role Pod#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#type Pod#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#user Pod#user}
  */
  readonly user?: string;
}

function podSpecSecurityContextSeLinuxOptionsToTerraform(struct?: PodSpecSecurityContextSeLinuxOptionsOutputReference | PodSpecSecurityContextSeLinuxOptions): any {
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

export class PodSpecSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecSecurityContextSysctl {
  /**
  * Name of a property to set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name: string;
  /**
  * Value of a property to set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value: string;
}

function podSpecSecurityContextSysctlToTerraform(struct?: PodSpecSecurityContextSysctl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PodSpecSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_group Pod#fs_group}
  */
  readonly fsGroup?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#run_as_group Pod#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#run_as_non_root Pod#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#run_as_user Pod#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID. If unspecified, no groups will be added to any container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#supplemental_groups Pod#supplemental_groups}
  */
  readonly supplementalGroups?: number[];
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#se_linux_options Pod#se_linux_options}
  */
  readonly seLinuxOptions?: PodSpecSecurityContextSeLinuxOptions;
  /**
  * sysctl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#sysctl Pod#sysctl}
  */
  readonly sysctl?: PodSpecSecurityContextSysctl[];
}

function podSpecSecurityContextToTerraform(struct?: PodSpecSecurityContextOutputReference | PodSpecSecurityContext): any {
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
    se_linux_options: podSpecSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    sysctl: cdktf.listMapper(podSpecSecurityContextSysctlToTerraform)(struct!.sysctl),
  }
}

export class PodSpecSecurityContextOutputReference extends cdktf.ComplexObject {
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
  private _seLinuxOptions?: PodSpecSecurityContextSeLinuxOptions | undefined; 
  private __seLinuxOptionsOutput = new PodSpecSecurityContextSeLinuxOptionsOutputReference(this as any, "se_linux_options", true);
  public get seLinuxOptions() {
    return this.__seLinuxOptionsOutput;
  }
  public putSeLinuxOptions(value: PodSpecSecurityContextSeLinuxOptions | undefined) {
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
  private _sysctl?: PodSpecSecurityContextSysctl[] | undefined; 
  public get sysctl() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sysctl') as any;
  }
  public set sysctl(value: PodSpecSecurityContextSysctl[] | undefined) {
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
export interface PodSpecToleration {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#effect Pod#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#operator Pod#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#toleration_seconds Pod#toleration_seconds}
  */
  readonly tolerationSeconds?: string;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#value Pod#value}
  */
  readonly value?: string;
}

function podSpecTolerationToTerraform(struct?: PodSpecToleration): any {
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

export interface PodSpecTopologySpreadConstraintLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#operator Pod#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#values Pod#values}
  */
  readonly values?: string[];
}

function podSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform(struct?: PodSpecTopologySpreadConstraintLabelSelectorMatchExpressions): any {
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

export interface PodSpecTopologySpreadConstraintLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_labels Pod#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#match_expressions Pod#match_expressions}
  */
  readonly matchExpressions?: PodSpecTopologySpreadConstraintLabelSelectorMatchExpressions[];
}

function podSpecTopologySpreadConstraintLabelSelectorToTerraform(struct?: PodSpecTopologySpreadConstraintLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(podSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface PodSpecTopologySpreadConstraint {
  /**
  * describes the degree to which pods may be unevenly distributed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#max_skew Pod#max_skew}
  */
  readonly maxSkew?: number;
  /**
  * the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#topology_key Pod#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * indicates how to deal with a pod if it doesn't satisfy the spread constraint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#when_unsatisfiable Pod#when_unsatisfiable}
  */
  readonly whenUnsatisfiable?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#label_selector Pod#label_selector}
  */
  readonly labelSelector?: PodSpecTopologySpreadConstraintLabelSelector[];
}

function podSpecTopologySpreadConstraintToTerraform(struct?: PodSpecTopologySpreadConstraint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
    label_selector: cdktf.listMapper(podSpecTopologySpreadConstraintLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface PodSpecVolumeAwsElasticBlockStore {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_type Pod#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#partition Pod#partition}
  */
  readonly partition?: number;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#volume_id Pod#volume_id}
  */
  readonly volumeId: string;
}

function podSpecVolumeAwsElasticBlockStoreToTerraform(struct?: PodSpecVolumeAwsElasticBlockStoreOutputReference | PodSpecVolumeAwsElasticBlockStore): any {
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

export class PodSpecVolumeAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeAzureDisk {
  /**
  * Host Caching mode: None, Read Only, Read Write.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#caching_mode Pod#caching_mode}
  */
  readonly cachingMode: string;
  /**
  * The URI the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#data_disk_uri Pod#data_disk_uri}
  */
  readonly dataDiskUri: string;
  /**
  * The Name of the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#disk_name Pod#disk_name}
  */
  readonly diskName: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_type Pod#fs_type}
  */
  readonly fsType?: string;
  /**
  * The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#kind Pod#kind}
  */
  readonly kind?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

function podSpecVolumeAzureDiskToTerraform(struct?: PodSpecVolumeAzureDiskOutputReference | PodSpecVolumeAzureDisk): any {
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

export class PodSpecVolumeAzureDiskOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeAzureFile {
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of secret that contains Azure Storage Account Name and Key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret_name Pod#secret_name}
  */
  readonly secretName: string;
  /**
  * The namespace of the secret that contains Azure Storage Account Name and Key. For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret_namespace Pod#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * Share Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#share_name Pod#share_name}
  */
  readonly shareName: string;
}

function podSpecVolumeAzureFileToTerraform(struct?: PodSpecVolumeAzureFileOutputReference | PodSpecVolumeAzureFile): any {
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

export class PodSpecVolumeAzureFileOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeCephFsSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespace Pod#namespace}
  */
  readonly namespace?: string;
}

function podSpecVolumeCephFsSecretRefToTerraform(struct?: PodSpecVolumeCephFsSecretRefOutputReference | PodSpecVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PodSpecVolumeCephFsSecretRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeCephFs {
  /**
  * Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#monitors Pod#monitors}
  */
  readonly monitors: string[];
  /**
  * Used as the mounted root, rather than the full Ceph tree, default is /
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret_file Pod#secret_file}
  */
  readonly secretFile?: string;
  /**
  * User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#user Pod#user}
  */
  readonly user?: string;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret_ref Pod#secret_ref}
  */
  readonly secretRef?: PodSpecVolumeCephFsSecretRef;
}

function podSpecVolumeCephFsToTerraform(struct?: PodSpecVolumeCephFsOutputReference | PodSpecVolumeCephFs): any {
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
    secret_ref: podSpecVolumeCephFsSecretRefToTerraform(struct!.secretRef),
  }
}

export class PodSpecVolumeCephFsOutputReference extends cdktf.ComplexObject {
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
  private _secretRef?: PodSpecVolumeCephFsSecretRef | undefined; 
  private __secretRefOutput = new PodSpecVolumeCephFsSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this.__secretRefOutput;
  }
  public putSecretRef(value: PodSpecVolumeCephFsSecretRef | undefined) {
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
export interface PodSpecVolumeCinder {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_type Pod#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#volume_id Pod#volume_id}
  */
  readonly volumeId: string;
}

function podSpecVolumeCinderToTerraform(struct?: PodSpecVolumeCinderOutputReference | PodSpecVolumeCinder): any {
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

export class PodSpecVolumeCinderOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeConfigMapItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#mode Pod#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
}

function podSpecVolumeConfigMapItemsToTerraform(struct?: PodSpecVolumeConfigMapItems): any {
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

export interface PodSpecVolumeConfigMap {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#default_mode Pod#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the ConfigMap or its keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#items Pod#items}
  */
  readonly items?: PodSpecVolumeConfigMapItems[];
}

function podSpecVolumeConfigMapToTerraform(struct?: PodSpecVolumeConfigMapOutputReference | PodSpecVolumeConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(podSpecVolumeConfigMapItemsToTerraform)(struct!.items),
  }
}

export class PodSpecVolumeConfigMapOutputReference extends cdktf.ComplexObject {
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
  private _items?: PodSpecVolumeConfigMapItems[] | undefined; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
  public set items(value: PodSpecVolumeConfigMapItems[] | undefined) {
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
export interface PodSpecVolumeCsiControllerExpandSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespace Pod#namespace}
  */
  readonly namespace?: string;
}

function podSpecVolumeCsiControllerExpandSecretRefToTerraform(struct?: PodSpecVolumeCsiControllerExpandSecretRefOutputReference | PodSpecVolumeCsiControllerExpandSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PodSpecVolumeCsiControllerExpandSecretRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeCsiControllerPublishSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespace Pod#namespace}
  */
  readonly namespace?: string;
}

function podSpecVolumeCsiControllerPublishSecretRefToTerraform(struct?: PodSpecVolumeCsiControllerPublishSecretRefOutputReference | PodSpecVolumeCsiControllerPublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PodSpecVolumeCsiControllerPublishSecretRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespace Pod#namespace}
  */
  readonly namespace?: string;
}

function podSpecVolumeCsiNodePublishSecretRefToTerraform(struct?: PodSpecVolumeCsiNodePublishSecretRefOutputReference | PodSpecVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PodSpecVolumeCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeCsiNodeStageSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespace Pod#namespace}
  */
  readonly namespace?: string;
}

function podSpecVolumeCsiNodeStageSecretRefToTerraform(struct?: PodSpecVolumeCsiNodeStageSecretRefOutputReference | PodSpecVolumeCsiNodeStageSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PodSpecVolumeCsiNodeStageSecretRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeCsi {
  /**
  * the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#driver Pod#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_type Pod#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Attributes of the volume to publish.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#volume_attributes Pod#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#volume_handle Pod#volume_handle}
  */
  readonly volumeHandle: string;
  /**
  * controller_expand_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#controller_expand_secret_ref Pod#controller_expand_secret_ref}
  */
  readonly controllerExpandSecretRef?: PodSpecVolumeCsiControllerExpandSecretRef;
  /**
  * controller_publish_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#controller_publish_secret_ref Pod#controller_publish_secret_ref}
  */
  readonly controllerPublishSecretRef?: PodSpecVolumeCsiControllerPublishSecretRef;
  /**
  * node_publish_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#node_publish_secret_ref Pod#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: PodSpecVolumeCsiNodePublishSecretRef;
  /**
  * node_stage_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#node_stage_secret_ref Pod#node_stage_secret_ref}
  */
  readonly nodeStageSecretRef?: PodSpecVolumeCsiNodeStageSecretRef;
}

function podSpecVolumeCsiToTerraform(struct?: PodSpecVolumeCsiOutputReference | PodSpecVolumeCsi): any {
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
    controller_expand_secret_ref: podSpecVolumeCsiControllerExpandSecretRefToTerraform(struct!.controllerExpandSecretRef),
    controller_publish_secret_ref: podSpecVolumeCsiControllerPublishSecretRefToTerraform(struct!.controllerPublishSecretRef),
    node_publish_secret_ref: podSpecVolumeCsiNodePublishSecretRefToTerraform(struct!.nodePublishSecretRef),
    node_stage_secret_ref: podSpecVolumeCsiNodeStageSecretRefToTerraform(struct!.nodeStageSecretRef),
  }
}

export class PodSpecVolumeCsiOutputReference extends cdktf.ComplexObject {
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
  private _controllerExpandSecretRef?: PodSpecVolumeCsiControllerExpandSecretRef | undefined; 
  private __controllerExpandSecretRefOutput = new PodSpecVolumeCsiControllerExpandSecretRefOutputReference(this as any, "controller_expand_secret_ref", true);
  public get controllerExpandSecretRef() {
    return this.__controllerExpandSecretRefOutput;
  }
  public putControllerExpandSecretRef(value: PodSpecVolumeCsiControllerExpandSecretRef | undefined) {
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
  private _controllerPublishSecretRef?: PodSpecVolumeCsiControllerPublishSecretRef | undefined; 
  private __controllerPublishSecretRefOutput = new PodSpecVolumeCsiControllerPublishSecretRefOutputReference(this as any, "controller_publish_secret_ref", true);
  public get controllerPublishSecretRef() {
    return this.__controllerPublishSecretRefOutput;
  }
  public putControllerPublishSecretRef(value: PodSpecVolumeCsiControllerPublishSecretRef | undefined) {
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
  private _nodePublishSecretRef?: PodSpecVolumeCsiNodePublishSecretRef | undefined; 
  private __nodePublishSecretRefOutput = new PodSpecVolumeCsiNodePublishSecretRefOutputReference(this as any, "node_publish_secret_ref", true);
  public get nodePublishSecretRef() {
    return this.__nodePublishSecretRefOutput;
  }
  public putNodePublishSecretRef(value: PodSpecVolumeCsiNodePublishSecretRef | undefined) {
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
  private _nodeStageSecretRef?: PodSpecVolumeCsiNodeStageSecretRef | undefined; 
  private __nodeStageSecretRefOutput = new PodSpecVolumeCsiNodeStageSecretRefOutputReference(this as any, "node_stage_secret_ref", true);
  public get nodeStageSecretRef() {
    return this.__nodeStageSecretRefOutput;
  }
  public putNodeStageSecretRef(value: PodSpecVolumeCsiNodeStageSecretRef | undefined) {
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
export interface PodSpecVolumeDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#api_version Pod#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#field_path Pod#field_path}
  */
  readonly fieldPath?: string;
}

function podSpecVolumeDownwardApiItemsFieldRefToTerraform(struct?: PodSpecVolumeDownwardApiItemsFieldRefOutputReference | PodSpecVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class PodSpecVolumeDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeDownwardApiItemsResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#container_name Pod#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#divisor Pod#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#resource Pod#resource}
  */
  readonly resource: string;
}

function podSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct?: PodSpecVolumeDownwardApiItemsResourceFieldRefOutputReference | PodSpecVolumeDownwardApiItemsResourceFieldRef): any {
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

export class PodSpecVolumeDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeDownwardApiItems {
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#mode Pod#mode}
  */
  readonly mode?: string;
  /**
  * Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path: string;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#field_ref Pod#field_ref}
  */
  readonly fieldRef: PodSpecVolumeDownwardApiItemsFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#resource_field_ref Pod#resource_field_ref}
  */
  readonly resourceFieldRef?: PodSpecVolumeDownwardApiItemsResourceFieldRef;
}

function podSpecVolumeDownwardApiItemsToTerraform(struct?: PodSpecVolumeDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: podSpecVolumeDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: podSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}

export interface PodSpecVolumeDownwardApi {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#default_mode Pod#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#items Pod#items}
  */
  readonly items?: PodSpecVolumeDownwardApiItems[];
}

function podSpecVolumeDownwardApiToTerraform(struct?: PodSpecVolumeDownwardApiOutputReference | PodSpecVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(podSpecVolumeDownwardApiItemsToTerraform)(struct!.items),
  }
}

export class PodSpecVolumeDownwardApiOutputReference extends cdktf.ComplexObject {
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
  private _items?: PodSpecVolumeDownwardApiItems[] | undefined; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
  public set items(value: PodSpecVolumeDownwardApiItems[] | undefined) {
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
export interface PodSpecVolumeEmptyDir {
  /**
  * What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#medium Pod#medium}
  */
  readonly medium?: string;
  /**
  * Total amount of local storage required for this EmptyDir volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#size_limit Pod#size_limit}
  */
  readonly sizeLimit?: string;
}

function podSpecVolumeEmptyDirToTerraform(struct?: PodSpecVolumeEmptyDirOutputReference | PodSpecVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}

export class PodSpecVolumeEmptyDirOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeFc {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_type Pod#fs_type}
  */
  readonly fsType?: string;
  /**
  * FC target lun number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#lun Pod#lun}
  */
  readonly lun: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * FC target worldwide names (WWNs)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#target_ww_ns Pod#target_ww_ns}
  */
  readonly targetWwNs: string[];
}

function podSpecVolumeFcToTerraform(struct?: PodSpecVolumeFcOutputReference | PodSpecVolumeFc): any {
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

export class PodSpecVolumeFcOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespace Pod#namespace}
  */
  readonly namespace?: string;
}

function podSpecVolumeFlexVolumeSecretRefToTerraform(struct?: PodSpecVolumeFlexVolumeSecretRefOutputReference | PodSpecVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PodSpecVolumeFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeFlexVolume {
  /**
  * Driver is the name of the driver to use for this volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#driver Pod#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_type Pod#fs_type}
  */
  readonly fsType?: string;
  /**
  * Extra command options if any.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#options Pod#options}
  */
  readonly options?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret_ref Pod#secret_ref}
  */
  readonly secretRef?: PodSpecVolumeFlexVolumeSecretRef;
}

function podSpecVolumeFlexVolumeToTerraform(struct?: PodSpecVolumeFlexVolumeOutputReference | PodSpecVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: podSpecVolumeFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}

export class PodSpecVolumeFlexVolumeOutputReference extends cdktf.ComplexObject {
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
  private _secretRef?: PodSpecVolumeFlexVolumeSecretRef | undefined; 
  private __secretRefOutput = new PodSpecVolumeFlexVolumeSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this.__secretRefOutput;
  }
  public putSecretRef(value: PodSpecVolumeFlexVolumeSecretRef | undefined) {
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
export interface PodSpecVolumeFlocker {
  /**
  * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#dataset_name Pod#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * UUID of the dataset. This is unique identifier of a Flocker dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#dataset_uuid Pod#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

function podSpecVolumeFlockerToTerraform(struct?: PodSpecVolumeFlockerOutputReference | PodSpecVolumeFlocker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}

export class PodSpecVolumeFlockerOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeGcePersistentDisk {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_type Pod#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#partition Pod#partition}
  */
  readonly partition?: number;
  /**
  * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#pd_name Pod#pd_name}
  */
  readonly pdName: string;
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

function podSpecVolumeGcePersistentDiskToTerraform(struct?: PodSpecVolumeGcePersistentDiskOutputReference | PodSpecVolumeGcePersistentDisk): any {
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

export class PodSpecVolumeGcePersistentDiskOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeGitRepo {
  /**
  * Target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#directory Pod#directory}
  */
  readonly directory?: string;
  /**
  * Repository URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#repository Pod#repository}
  */
  readonly repository?: string;
  /**
  * Commit hash for the specified revision.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#revision Pod#revision}
  */
  readonly revision?: string;
}

function podSpecVolumeGitRepoToTerraform(struct?: PodSpecVolumeGitRepoOutputReference | PodSpecVolumeGitRepo): any {
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

export class PodSpecVolumeGitRepoOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeGlusterfs {
  /**
  * The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#endpoints_name Pod#endpoints_name}
  */
  readonly endpointsName: string;
  /**
  * The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path: string;
  /**
  * Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

function podSpecVolumeGlusterfsToTerraform(struct?: PodSpecVolumeGlusterfsOutputReference | PodSpecVolumeGlusterfs): any {
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

export class PodSpecVolumeGlusterfsOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeHostPath {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
  /**
  * Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#type Pod#type}
  */
  readonly type?: string;
}

function podSpecVolumeHostPathToTerraform(struct?: PodSpecVolumeHostPathOutputReference | PodSpecVolumeHostPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class PodSpecVolumeHostPathOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeIscsi {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_type Pod#fs_type}
  */
  readonly fsType?: string;
  /**
  * Target iSCSI Qualified Name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#iqn Pod#iqn}
  */
  readonly iqn: string;
  /**
  * iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#iscsi_interface Pod#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * iSCSI target lun number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#lun Pod#lun}
  */
  readonly lun?: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#target_portal Pod#target_portal}
  */
  readonly targetPortal: string;
}

function podSpecVolumeIscsiToTerraform(struct?: PodSpecVolumeIscsiOutputReference | PodSpecVolumeIscsi): any {
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

export class PodSpecVolumeIscsiOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeLocal {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
}

function podSpecVolumeLocalToTerraform(struct?: PodSpecVolumeLocalOutputReference | PodSpecVolumeLocal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class PodSpecVolumeLocalOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeNfs {
  /**
  * Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path: string;
  /**
  * Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#server Pod#server}
  */
  readonly server: string;
}

function podSpecVolumeNfsToTerraform(struct?: PodSpecVolumeNfsOutputReference | PodSpecVolumeNfs): any {
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

export class PodSpecVolumeNfsOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumePersistentVolumeClaim {
  /**
  * ClaimName is the name of a PersistentVolumeClaim in the same 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#claim_name Pod#claim_name}
  */
  readonly claimName?: string;
  /**
  * Will force the ReadOnly setting in VolumeMounts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

function podSpecVolumePersistentVolumeClaimToTerraform(struct?: PodSpecVolumePersistentVolumeClaimOutputReference | PodSpecVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class PodSpecVolumePersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumePhotonPersistentDisk {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_type Pod#fs_type}
  */
  readonly fsType?: string;
  /**
  * ID that identifies Photon Controller persistent disk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#pd_id Pod#pd_id}
  */
  readonly pdId: string;
}

function podSpecVolumePhotonPersistentDiskToTerraform(struct?: PodSpecVolumePhotonPersistentDiskOutputReference | PodSpecVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}

export class PodSpecVolumePhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeProjectedSourcesConfigMapItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#mode Pod#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
}

function podSpecVolumeProjectedSourcesConfigMapItemsToTerraform(struct?: PodSpecVolumeProjectedSourcesConfigMapItems): any {
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

export interface PodSpecVolumeProjectedSourcesConfigMap {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the ConfigMap or it's keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#items Pod#items}
  */
  readonly items?: PodSpecVolumeProjectedSourcesConfigMapItems[];
}

function podSpecVolumeProjectedSourcesConfigMapToTerraform(struct?: PodSpecVolumeProjectedSourcesConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(podSpecVolumeProjectedSourcesConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface PodSpecVolumeProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#api_version Pod#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#field_path Pod#field_path}
  */
  readonly fieldPath?: string;
}

function podSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: PodSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference | PodSpecVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class PodSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#container_name Pod#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#divisor Pod#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#resource Pod#resource}
  */
  readonly resource: string;
}

function podSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: PodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference | PodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
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

export class PodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeProjectedSourcesDownwardApiItems {
  /**
  * Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#mode Pod#mode}
  */
  readonly mode?: string;
  /**
  * Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path: string;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#field_ref Pod#field_ref}
  */
  readonly fieldRef?: PodSpecVolumeProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#resource_field_ref Pod#resource_field_ref}
  */
  readonly resourceFieldRef?: PodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef;
}

function podSpecVolumeProjectedSourcesDownwardApiItemsToTerraform(struct?: PodSpecVolumeProjectedSourcesDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: podSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: podSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}

export interface PodSpecVolumeProjectedSourcesDownwardApi {
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#items Pod#items}
  */
  readonly items?: PodSpecVolumeProjectedSourcesDownwardApiItems[];
}

function podSpecVolumeProjectedSourcesDownwardApiToTerraform(struct?: PodSpecVolumeProjectedSourcesDownwardApiOutputReference | PodSpecVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(podSpecVolumeProjectedSourcesDownwardApiItemsToTerraform)(struct!.items),
  }
}

export class PodSpecVolumeProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // items - computed: false, optional: true, required: false
  private _items?: PodSpecVolumeProjectedSourcesDownwardApiItems[] | undefined; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
  public set items(value: PodSpecVolumeProjectedSourcesDownwardApiItems[] | undefined) {
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
export interface PodSpecVolumeProjectedSourcesSecretItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#mode Pod#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
}

function podSpecVolumeProjectedSourcesSecretItemsToTerraform(struct?: PodSpecVolumeProjectedSourcesSecretItems): any {
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

export interface PodSpecVolumeProjectedSourcesSecret {
  /**
  * Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the Secret or it's keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#items Pod#items}
  */
  readonly items?: PodSpecVolumeProjectedSourcesSecretItems[];
}

function podSpecVolumeProjectedSourcesSecretToTerraform(struct?: PodSpecVolumeProjectedSourcesSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(podSpecVolumeProjectedSourcesSecretItemsToTerraform)(struct!.items),
  }
}

export interface PodSpecVolumeProjectedSourcesServiceAccountToken {
  /**
  * Audience is the intended audience of the token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#audience Pod#audience}
  */
  readonly audience?: string;
  /**
  * ExpirationSeconds is the expected duration of validity of the service account token. It defaults to 1 hour and must be at least 10 minutes (600 seconds).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#expiration_seconds Pod#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Path specifies a relative path to the mount point of the projected volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path: string;
}

function podSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct?: PodSpecVolumeProjectedSourcesServiceAccountTokenOutputReference | PodSpecVolumeProjectedSourcesServiceAccountToken): any {
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

export class PodSpecVolumeProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeProjectedSources {
  /**
  * config_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#config_map Pod#config_map}
  */
  readonly configMap?: PodSpecVolumeProjectedSourcesConfigMap[];
  /**
  * downward_api block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#downward_api Pod#downward_api}
  */
  readonly downwardApi?: PodSpecVolumeProjectedSourcesDownwardApi;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret Pod#secret}
  */
  readonly secret?: PodSpecVolumeProjectedSourcesSecret[];
  /**
  * service_account_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#service_account_token Pod#service_account_token}
  */
  readonly serviceAccountToken?: PodSpecVolumeProjectedSourcesServiceAccountToken;
}

function podSpecVolumeProjectedSourcesToTerraform(struct?: PodSpecVolumeProjectedSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.listMapper(podSpecVolumeProjectedSourcesConfigMapToTerraform)(struct!.configMap),
    downward_api: podSpecVolumeProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: cdktf.listMapper(podSpecVolumeProjectedSourcesSecretToTerraform)(struct!.secret),
    service_account_token: podSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}

export interface PodSpecVolumeProjected {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#default_mode Pod#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#sources Pod#sources}
  */
  readonly sources: PodSpecVolumeProjectedSources[];
}

function podSpecVolumeProjectedToTerraform(struct?: PodSpecVolumeProjected): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(podSpecVolumeProjectedSourcesToTerraform)(struct!.sources),
  }
}

export interface PodSpecVolumeQuobyte {
  /**
  * Group to map volume access to Default is no group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#group Pod#group}
  */
  readonly group?: string;
  /**
  * Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#registry Pod#registry}
  */
  readonly registry: string;
  /**
  * User to map volume access to Defaults to serivceaccount user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#user Pod#user}
  */
  readonly user?: string;
  /**
  * Volume is a string that references an already created Quobyte volume by name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#volume Pod#volume}
  */
  readonly volume: string;
}

function podSpecVolumeQuobyteToTerraform(struct?: PodSpecVolumeQuobyteOutputReference | PodSpecVolumeQuobyte): any {
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

export class PodSpecVolumeQuobyteOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeRbdSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#namespace Pod#namespace}
  */
  readonly namespace?: string;
}

function podSpecVolumeRbdSecretRefToTerraform(struct?: PodSpecVolumeRbdSecretRefOutputReference | PodSpecVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PodSpecVolumeRbdSecretRefOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolumeRbd {
  /**
  * A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#ceph_monitors Pod#ceph_monitors}
  */
  readonly cephMonitors: string[];
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_type Pod#fs_type}
  */
  readonly fsType?: string;
  /**
  * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#keyring Pod#keyring}
  */
  readonly keyring?: string;
  /**
  * The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#rados_user Pod#rados_user}
  */
  readonly radosUser?: string;
  /**
  * The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#rbd_image Pod#rbd_image}
  */
  readonly rbdImage: string;
  /**
  * The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#rbd_pool Pod#rbd_pool}
  */
  readonly rbdPool?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#read_only Pod#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret_ref Pod#secret_ref}
  */
  readonly secretRef?: PodSpecVolumeRbdSecretRef;
}

function podSpecVolumeRbdToTerraform(struct?: PodSpecVolumeRbdOutputReference | PodSpecVolumeRbd): any {
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
    secret_ref: podSpecVolumeRbdSecretRefToTerraform(struct!.secretRef),
  }
}

export class PodSpecVolumeRbdOutputReference extends cdktf.ComplexObject {
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
  private _secretRef?: PodSpecVolumeRbdSecretRef | undefined; 
  private __secretRefOutput = new PodSpecVolumeRbdSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this.__secretRefOutput;
  }
  public putSecretRef(value: PodSpecVolumeRbdSecretRef | undefined) {
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
export interface PodSpecVolumeSecretItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#key Pod#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#mode Pod#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#path Pod#path}
  */
  readonly path?: string;
}

function podSpecVolumeSecretItemsToTerraform(struct?: PodSpecVolumeSecretItems): any {
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

export interface PodSpecVolumeSecret {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#default_mode Pod#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * Optional: Specify whether the Secret or its keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#optional Pod#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret_name Pod#secret_name}
  */
  readonly secretName?: string;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#items Pod#items}
  */
  readonly items?: PodSpecVolumeSecretItems[];
}

function podSpecVolumeSecretToTerraform(struct?: PodSpecVolumeSecretOutputReference | PodSpecVolumeSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    items: cdktf.listMapper(podSpecVolumeSecretItemsToTerraform)(struct!.items),
  }
}

export class PodSpecVolumeSecretOutputReference extends cdktf.ComplexObject {
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
  private _items?: PodSpecVolumeSecretItems[] | undefined; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
  public set items(value: PodSpecVolumeSecretItems[] | undefined) {
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
export interface PodSpecVolumeVsphereVolume {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fs_type Pod#fs_type}
  */
  readonly fsType?: string;
  /**
  * Path that identifies vSphere volume vmdk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#volume_path Pod#volume_path}
  */
  readonly volumePath: string;
}

function podSpecVolumeVsphereVolumeToTerraform(struct?: PodSpecVolumeVsphereVolumeOutputReference | PodSpecVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}

export class PodSpecVolumeVsphereVolumeOutputReference extends cdktf.ComplexObject {
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
export interface PodSpecVolume {
  /**
  * Volume's name. Must be a DNS_LABEL and unique within the pod. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#name Pod#name}
  */
  readonly name?: string;
  /**
  * aws_elastic_block_store block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#aws_elastic_block_store Pod#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: PodSpecVolumeAwsElasticBlockStore;
  /**
  * azure_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#azure_disk Pod#azure_disk}
  */
  readonly azureDisk?: PodSpecVolumeAzureDisk;
  /**
  * azure_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#azure_file Pod#azure_file}
  */
  readonly azureFile?: PodSpecVolumeAzureFile;
  /**
  * ceph_fs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#ceph_fs Pod#ceph_fs}
  */
  readonly cephFs?: PodSpecVolumeCephFs;
  /**
  * cinder block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#cinder Pod#cinder}
  */
  readonly cinder?: PodSpecVolumeCinder;
  /**
  * config_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#config_map Pod#config_map}
  */
  readonly configMap?: PodSpecVolumeConfigMap;
  /**
  * csi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#csi Pod#csi}
  */
  readonly csi?: PodSpecVolumeCsi;
  /**
  * downward_api block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#downward_api Pod#downward_api}
  */
  readonly downwardApi?: PodSpecVolumeDownwardApi;
  /**
  * empty_dir block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#empty_dir Pod#empty_dir}
  */
  readonly emptyDir?: PodSpecVolumeEmptyDir;
  /**
  * fc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#fc Pod#fc}
  */
  readonly fc?: PodSpecVolumeFc;
  /**
  * flex_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#flex_volume Pod#flex_volume}
  */
  readonly flexVolume?: PodSpecVolumeFlexVolume;
  /**
  * flocker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#flocker Pod#flocker}
  */
  readonly flocker?: PodSpecVolumeFlocker;
  /**
  * gce_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#gce_persistent_disk Pod#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: PodSpecVolumeGcePersistentDisk;
  /**
  * git_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#git_repo Pod#git_repo}
  */
  readonly gitRepo?: PodSpecVolumeGitRepo;
  /**
  * glusterfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#glusterfs Pod#glusterfs}
  */
  readonly glusterfs?: PodSpecVolumeGlusterfs;
  /**
  * host_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host_path Pod#host_path}
  */
  readonly hostPath?: PodSpecVolumeHostPath;
  /**
  * iscsi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#iscsi Pod#iscsi}
  */
  readonly iscsi?: PodSpecVolumeIscsi;
  /**
  * local block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#local Pod#local}
  */
  readonly local?: PodSpecVolumeLocal;
  /**
  * nfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#nfs Pod#nfs}
  */
  readonly nfs?: PodSpecVolumeNfs;
  /**
  * persistent_volume_claim block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#persistent_volume_claim Pod#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: PodSpecVolumePersistentVolumeClaim;
  /**
  * photon_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#photon_persistent_disk Pod#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: PodSpecVolumePhotonPersistentDisk;
  /**
  * projected block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#projected Pod#projected}
  */
  readonly projected?: PodSpecVolumeProjected[];
  /**
  * quobyte block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#quobyte Pod#quobyte}
  */
  readonly quobyte?: PodSpecVolumeQuobyte;
  /**
  * rbd block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#rbd Pod#rbd}
  */
  readonly rbd?: PodSpecVolumeRbd;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#secret Pod#secret}
  */
  readonly secret?: PodSpecVolumeSecret;
  /**
  * vsphere_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#vsphere_volume Pod#vsphere_volume}
  */
  readonly vsphereVolume?: PodSpecVolumeVsphereVolume;
}

function podSpecVolumeToTerraform(struct?: PodSpecVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    aws_elastic_block_store: podSpecVolumeAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: podSpecVolumeAzureDiskToTerraform(struct!.azureDisk),
    azure_file: podSpecVolumeAzureFileToTerraform(struct!.azureFile),
    ceph_fs: podSpecVolumeCephFsToTerraform(struct!.cephFs),
    cinder: podSpecVolumeCinderToTerraform(struct!.cinder),
    config_map: podSpecVolumeConfigMapToTerraform(struct!.configMap),
    csi: podSpecVolumeCsiToTerraform(struct!.csi),
    downward_api: podSpecVolumeDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: podSpecVolumeEmptyDirToTerraform(struct!.emptyDir),
    fc: podSpecVolumeFcToTerraform(struct!.fc),
    flex_volume: podSpecVolumeFlexVolumeToTerraform(struct!.flexVolume),
    flocker: podSpecVolumeFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: podSpecVolumeGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: podSpecVolumeGitRepoToTerraform(struct!.gitRepo),
    glusterfs: podSpecVolumeGlusterfsToTerraform(struct!.glusterfs),
    host_path: podSpecVolumeHostPathToTerraform(struct!.hostPath),
    iscsi: podSpecVolumeIscsiToTerraform(struct!.iscsi),
    local: podSpecVolumeLocalToTerraform(struct!.local),
    nfs: podSpecVolumeNfsToTerraform(struct!.nfs),
    persistent_volume_claim: podSpecVolumePersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: podSpecVolumePhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    projected: cdktf.listMapper(podSpecVolumeProjectedToTerraform)(struct!.projected),
    quobyte: podSpecVolumeQuobyteToTerraform(struct!.quobyte),
    rbd: podSpecVolumeRbdToTerraform(struct!.rbd),
    secret: podSpecVolumeSecretToTerraform(struct!.secret),
    vsphere_volume: podSpecVolumeVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}

export interface PodSpec {
  /**
  * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#active_deadline_seconds Pod#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#automount_service_account_token Pod#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Set DNS policy for containers within the pod. Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. Optional: Defaults to 'ClusterFirst', see [Kubernetes reference](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#dns_policy Pod#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Enables generating environment variables for service discovery. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#enable_service_links Pod#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * Use the host's ipc namespace. Optional: Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host_ipc Pod#host_ipc}
  */
  readonly hostIpc?: boolean | cdktf.IResolvable;
  /**
  * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host_network Pod#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Use the host's pid namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host_pid Pod#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#hostname Pod#hostname}
  */
  readonly hostname?: string;
  /**
  * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#node_name Pod#node_name}
  */
  readonly nodeName?: string;
  /**
  * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: http://kubernetes.io/docs/user-guide/node-selection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#node_selector Pod#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#priority_class_name Pod#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Restart policy for all containers within the pod. One of Always, OnFailure, Never. More info: http://kubernetes.io/docs/user-guide/pod-states#restartpolicy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#restart_policy Pod#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: http://releases.k8s.io/HEAD/docs/design/service_accounts.md.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#service_account_name Pod#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#share_process_namespace Pod#share_process_namespace}
  */
  readonly shareProcessNamespace?: boolean | cdktf.IResolvable;
  /**
  * If specified, the fully qualified Pod hostname will be "...svc.". If not specified, the pod will not have a domainname at all..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#subdomain Pod#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#termination_grace_period_seconds Pod#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#affinity Pod#affinity}
  */
  readonly affinity?: PodSpecAffinity;
  /**
  * container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#container Pod#container}
  */
  readonly container?: PodSpecContainer[];
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#dns_config Pod#dns_config}
  */
  readonly dnsConfig?: PodSpecDnsConfig;
  /**
  * host_aliases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#host_aliases Pod#host_aliases}
  */
  readonly hostAliases?: PodSpecHostAliases[];
  /**
  * image_pull_secrets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#image_pull_secrets Pod#image_pull_secrets}
  */
  readonly imagePullSecrets?: PodSpecImagePullSecrets[];
  /**
  * init_container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#init_container Pod#init_container}
  */
  readonly initContainer?: PodSpecInitContainer[];
  /**
  * readiness_gate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#readiness_gate Pod#readiness_gate}
  */
  readonly readinessGate?: PodSpecReadinessGate[];
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#security_context Pod#security_context}
  */
  readonly securityContext?: PodSpecSecurityContext;
  /**
  * toleration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#toleration Pod#toleration}
  */
  readonly toleration?: PodSpecToleration[];
  /**
  * topology_spread_constraint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#topology_spread_constraint Pod#topology_spread_constraint}
  */
  readonly topologySpreadConstraint?: PodSpecTopologySpreadConstraint[];
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#volume Pod#volume}
  */
  readonly volume?: PodSpecVolume[];
}

function podSpecToTerraform(struct?: PodSpecOutputReference | PodSpec): any {
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
    affinity: podSpecAffinityToTerraform(struct!.affinity),
    container: cdktf.listMapper(podSpecContainerToTerraform)(struct!.container),
    dns_config: podSpecDnsConfigToTerraform(struct!.dnsConfig),
    host_aliases: cdktf.listMapper(podSpecHostAliasesToTerraform)(struct!.hostAliases),
    image_pull_secrets: cdktf.listMapper(podSpecImagePullSecretsToTerraform)(struct!.imagePullSecrets),
    init_container: cdktf.listMapper(podSpecInitContainerToTerraform)(struct!.initContainer),
    readiness_gate: cdktf.listMapper(podSpecReadinessGateToTerraform)(struct!.readinessGate),
    security_context: podSpecSecurityContextToTerraform(struct!.securityContext),
    toleration: cdktf.listMapper(podSpecTolerationToTerraform)(struct!.toleration),
    topology_spread_constraint: cdktf.listMapper(podSpecTopologySpreadConstraintToTerraform)(struct!.topologySpreadConstraint),
    volume: cdktf.listMapper(podSpecVolumeToTerraform)(struct!.volume),
  }
}

export class PodSpecOutputReference extends cdktf.ComplexObject {
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
  private _affinity?: PodSpecAffinity | undefined; 
  private __affinityOutput = new PodSpecAffinityOutputReference(this as any, "affinity", true);
  public get affinity() {
    return this.__affinityOutput;
  }
  public putAffinity(value: PodSpecAffinity | undefined) {
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
  private _container?: PodSpecContainer[] | undefined; 
  public get container() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('container') as any;
  }
  public set container(value: PodSpecContainer[] | undefined) {
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
  private _dnsConfig?: PodSpecDnsConfig | undefined; 
  private __dnsConfigOutput = new PodSpecDnsConfigOutputReference(this as any, "dns_config", true);
  public get dnsConfig() {
    return this.__dnsConfigOutput;
  }
  public putDnsConfig(value: PodSpecDnsConfig | undefined) {
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
  private _hostAliases?: PodSpecHostAliases[] | undefined; 
  public get hostAliases() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_aliases') as any;
  }
  public set hostAliases(value: PodSpecHostAliases[] | undefined) {
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
  private _imagePullSecrets?: PodSpecImagePullSecrets[] | undefined; 
  public get imagePullSecrets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('image_pull_secrets') as any;
  }
  public set imagePullSecrets(value: PodSpecImagePullSecrets[] | undefined) {
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
  private _initContainer?: PodSpecInitContainer[] | undefined; 
  public get initContainer() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('init_container') as any;
  }
  public set initContainer(value: PodSpecInitContainer[] | undefined) {
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
  private _readinessGate?: PodSpecReadinessGate[] | undefined; 
  public get readinessGate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('readiness_gate') as any;
  }
  public set readinessGate(value: PodSpecReadinessGate[] | undefined) {
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
  private _securityContext?: PodSpecSecurityContext | undefined; 
  private __securityContextOutput = new PodSpecSecurityContextOutputReference(this as any, "security_context", true);
  public get securityContext() {
    return this.__securityContextOutput;
  }
  public putSecurityContext(value: PodSpecSecurityContext | undefined) {
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
  private _toleration?: PodSpecToleration[] | undefined; 
  public get toleration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('toleration') as any;
  }
  public set toleration(value: PodSpecToleration[] | undefined) {
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
  private _topologySpreadConstraint?: PodSpecTopologySpreadConstraint[] | undefined; 
  public get topologySpreadConstraint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('topology_spread_constraint') as any;
  }
  public set topologySpreadConstraint(value: PodSpecTopologySpreadConstraint[] | undefined) {
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
  private _volume?: PodSpecVolume[] | undefined; 
  public get volume() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volume') as any;
  }
  public set volume(value: PodSpecVolume[] | undefined) {
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
export interface PodTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#create Pod#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html#delete Pod#delete}
  */
  readonly delete?: string;
}

function podTimeoutsToTerraform(struct?: PodTimeoutsOutputReference | PodTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class PodTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html kubernetes_pod}
*/
export class Pod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_pod";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/pod.html kubernetes_pod} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PodConfig
  */
  public constructor(scope: Construct, id: string, config: PodConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_pod',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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

  // metadata - computed: false, optional: false, required: true
  private _metadata?: PodMetadata; 
  private __metadataOutput = new PodMetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: PodMetadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: PodSpec; 
  private __specOutput = new PodSpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: PodSpec) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PodTimeouts | undefined; 
  private __timeoutsOutput = new PodTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PodTimeouts | undefined) {
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
      metadata: podMetadataToTerraform(this._metadata),
      spec: podSpecToTerraform(this._spec),
      timeouts: podTimeoutsToTerraform(this._timeouts),
    };
  }
}
