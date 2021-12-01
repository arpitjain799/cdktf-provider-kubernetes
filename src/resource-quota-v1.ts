// https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceQuotaV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#metadata ResourceQuotaV1#metadata}
  */
  readonly metadata: ResourceQuotaV1Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#spec ResourceQuotaV1#spec}
  */
  readonly spec?: ResourceQuotaV1Spec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#timeouts ResourceQuotaV1#timeouts}
  */
  readonly timeouts?: ResourceQuotaV1Timeouts;
}
export interface ResourceQuotaV1Metadata {
  /**
  * An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#annotations ResourceQuotaV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#generate_name ResourceQuotaV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#labels ResourceQuotaV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the resource quota, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#name ResourceQuotaV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the resource quota must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#namespace ResourceQuotaV1#namespace}
  */
  readonly namespace?: string;
}

export function resourceQuotaV1MetadataToTerraform(struct?: ResourceQuotaV1MetadataOutputReference | ResourceQuotaV1Metadata): any {
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

export class ResourceQuotaV1MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ResourceQuotaV1Metadata | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._annotations) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceQuotaV1Metadata | undefined) {
    if (value === undefined) {
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface ResourceQuotaV1SpecScopeSelectorMatchExpression {
  /**
  * Represents a scope's relationship to a set of values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#operator ResourceQuotaV1#operator}
  */
  readonly operator: string;
  /**
  * The name of the scope that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#scope_name ResourceQuotaV1#scope_name}
  */
  readonly scopeName: string;
  /**
  * A list of scope selector requirements by scope of the resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#values ResourceQuotaV1#values}
  */
  readonly values?: string[];
}

export function resourceQuotaV1SpecScopeSelectorMatchExpressionToTerraform(struct?: ResourceQuotaV1SpecScopeSelectorMatchExpression): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    scope_name: cdktf.stringToTerraform(struct!.scopeName),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ResourceQuotaV1SpecScopeSelector {
  /**
  * match_expression block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#match_expression ResourceQuotaV1#match_expression}
  */
  readonly matchExpression?: ResourceQuotaV1SpecScopeSelectorMatchExpression[];
}

export function resourceQuotaV1SpecScopeSelectorToTerraform(struct?: ResourceQuotaV1SpecScopeSelectorOutputReference | ResourceQuotaV1SpecScopeSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expression: cdktf.listMapper(resourceQuotaV1SpecScopeSelectorMatchExpressionToTerraform)(struct!.matchExpression),
  }
}

export class ResourceQuotaV1SpecScopeSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ResourceQuotaV1SpecScopeSelector | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._matchExpression) {
      hasAnyValues = true;
      internalValueResult.matchExpression = this._matchExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceQuotaV1SpecScopeSelector | undefined) {
    if (value === undefined) {
      this._matchExpression = undefined;
    }
    else {
      this._matchExpression = value.matchExpression;
    }
  }

  // match_expression - computed: false, optional: true, required: false
  private _matchExpression?: ResourceQuotaV1SpecScopeSelectorMatchExpression[]; 
  public get matchExpression() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expression') as any;
  }
  public set matchExpression(value: ResourceQuotaV1SpecScopeSelectorMatchExpression[]) {
    this._matchExpression = value;
  }
  public resetMatchExpression() {
    this._matchExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionInput() {
    return this._matchExpression;
  }
}
export interface ResourceQuotaV1Spec {
  /**
  * The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#hard ResourceQuotaV1#hard}
  */
  readonly hard?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#scopes ResourceQuotaV1#scopes}
  */
  readonly scopes?: string[];
  /**
  * scope_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#scope_selector ResourceQuotaV1#scope_selector}
  */
  readonly scopeSelector?: ResourceQuotaV1SpecScopeSelector;
}

export function resourceQuotaV1SpecToTerraform(struct?: ResourceQuotaV1SpecOutputReference | ResourceQuotaV1Spec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hard: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.hard),
    scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.scopes),
    scope_selector: resourceQuotaV1SpecScopeSelectorToTerraform(struct!.scopeSelector),
  }
}

export class ResourceQuotaV1SpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ResourceQuotaV1Spec | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._hard) {
      hasAnyValues = true;
      internalValueResult.hard = this._hard;
    }
    if (this._scopes) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._scopeSelector) {
      hasAnyValues = true;
      internalValueResult.scopeSelector = this._scopeSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceQuotaV1Spec | undefined) {
    if (value === undefined) {
      this._hard = undefined;
      this._scopes = undefined;
      this._scopeSelector.internalValue = undefined;
    }
    else {
      this._hard = value.hard;
      this._scopes = value.scopes;
      this._scopeSelector.internalValue = value.scopeSelector;
    }
  }

  // hard - computed: false, optional: true, required: false
  private _hard?: { [key: string]: string } | cdktf.IResolvable; 
  public get hard() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('hard') as any;
  }
  public set hard(value: { [key: string]: string } | cdktf.IResolvable) {
    this._hard = value;
  }
  public resetHard() {
    this._hard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardInput() {
    return this._hard;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // scope_selector - computed: false, optional: true, required: false
  private _scopeSelector = new ResourceQuotaV1SpecScopeSelectorOutputReference(this as any, "scope_selector", true);
  public get scopeSelector() {
    return this._scopeSelector;
  }
  public putScopeSelector(value: ResourceQuotaV1SpecScopeSelector) {
    this._scopeSelector.internalValue = value;
  }
  public resetScopeSelector() {
    this._scopeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeSelectorInput() {
    return this._scopeSelector.internalValue;
  }
}
export interface ResourceQuotaV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#create ResourceQuotaV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html#update ResourceQuotaV1#update}
  */
  readonly update?: string;
}

export function resourceQuotaV1TimeoutsToTerraform(struct?: ResourceQuotaV1TimeoutsOutputReference | ResourceQuotaV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ResourceQuotaV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ResourceQuotaV1Timeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceQuotaV1Timeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html kubernetes_resource_quota_v1}
*/
export class ResourceQuotaV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_resource_quota_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota_v1.html kubernetes_resource_quota_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceQuotaV1Config
  */
  public constructor(scope: Construct, id: string, config: ResourceQuotaV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_resource_quota_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ResourceQuotaV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ResourceQuotaV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new ResourceQuotaV1SpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ResourceQuotaV1Spec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceQuotaV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceQuotaV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: resourceQuotaV1MetadataToTerraform(this._metadata.internalValue),
      spec: resourceQuotaV1SpecToTerraform(this._spec.internalValue),
      timeouts: resourceQuotaV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}