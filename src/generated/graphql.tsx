import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  active?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  expireAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  scopes: Array<Scalars['String']>;
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AccessTokenFilterInput = {
  _AND?: InputMaybe<Array<FilterAccessTokenInput>>;
  _NOR?: InputMaybe<Array<FilterAccessTokenInput>>;
  _OR?: InputMaybe<Array<FilterAccessTokenInput>>;
  active?: InputMaybe<BooleanComparisonFilter>;
  createdAt?: InputMaybe<DateComparisonFilter>;
  id?: InputMaybe<StringComparisonFilter>;
  tenantId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<DateComparisonFilter>;
};

export type AccessTokenMutations = {
  __typename?: 'AccessTokenMutations';
  create: AccessToken;
  delete: AccessToken;
};


export type AccessTokenMutationsCreateArgs = {
  input: CreateAccessTokenInput;
};


export type AccessTokenMutationsDeleteArgs = {
  input: DeleteAccessTokenInput;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  tokens: Tokens;
  user: User;
};

export type AccountMutations = {
  __typename?: 'AccountMutations';
  changePassword: BooleanPayload;
  login: Account;
  logout: BooleanPayload;
  refreshTokens: Account;
  register: AccountRegisterResponse;
  sendResetPasswordEmail: BooleanPayload;
  sendVerificationEmail: BooleanPayload;
  verifyAccount: BooleanPayload;
  verifyActivationLink: VerificationLinkInfo;
  verifyExpireToken: ExpirableTokens;
};


export type AccountMutationsChangePasswordArgs = {
  newPassword: Scalars['String'];
  newPasswordConfirm: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type AccountMutationsLoginArgs = {
  input: LoginInput;
};


export type AccountMutationsRefreshTokensArgs = {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};


export type AccountMutationsRegisterArgs = {
  input: RegisterInput;
};


export type AccountMutationsSendResetPasswordEmailArgs = {
  email: Scalars['String'];
};


export type AccountMutationsSendVerificationEmailArgs = {
  email: Scalars['String'];
};


export type AccountMutationsVerifyAccountArgs = {
  email: Scalars['String'];
  pincode: Scalars['String'];
};


export type AccountMutationsVerifyActivationLinkArgs = {
  token: Scalars['String'];
};


export type AccountMutationsVerifyExpireTokenArgs = {
  token: Scalars['Float'];
};

export type AccountRegisterResponse = {
  __typename?: 'AccountRegisterResponse';
  activationLink: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  line?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  line?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type Amenities = {
  bathrooms?: InputMaybe<Scalars['Float']>;
  bedrooms?: InputMaybe<Scalars['Float']>;
  others?: InputMaybe<Scalars['String']>;
  parking?: InputMaybe<Scalars['Boolean']>;
  toilets?: InputMaybe<Scalars['Float']>;
};

export type AmenitiesResponse = {
  __typename?: 'AmenitiesResponse';
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  others?: Maybe<Scalars['String']>;
  parkingSpace?: Maybe<Scalars['Boolean']>;
  toilets?: Maybe<Scalars['Float']>;
};

/** The App roles for authorization */
export enum AppRole {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  Developer = 'DEVELOPER',
  Guest = 'GUEST',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export type Applicant = {
  __typename?: 'Applicant';
  currentAddress?: Maybe<Address>;
  dateOfBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employmentHistory?: Maybe<Array<EmploymentHistory>>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  identificationNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  rentalHistory?: Maybe<Array<RentalHistory>>;
};

export type Application = {
  __typename?: 'Application';
  applicant?: Maybe<Applicant>;
  applicantId?: Maybe<Scalars['String']>;
  applicationStatus?: Maybe<ApplicationStausEnum>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  rental?: Maybe<Scalars['String']>;
  terms?: Maybe<ApplicationTerms>;
  unit?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ApplicationEmergencyContact = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  relationship: Scalars['String'];
};

export type ApplicationFilterInput = {
  currentAddress?: InputMaybe<AddressInput>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  emergencyContact?: InputMaybe<ApplicationEmergencyContact>;
  employmentHistory?: InputMaybe<EmploymentHistoryInput>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  rentalHistory?: InputMaybe<RentalHistoryInput>;
  terms?: InputMaybe<ApplicationTermsInput>;
  unit?: InputMaybe<Scalars['String']>;
};

/** Specifies the  Application status */
export enum ApplicationStausEnum {
  Approved = 'APPROVED',
  Canceled = 'CANCELED',
  Declined = 'DECLINED',
  Deffered = 'DEFFERED',
  Pending = 'PENDING'
}

export type ApplicationTerms = {
  __typename?: 'ApplicationTerms';
  agreed?: Maybe<Scalars['Boolean']>;
  agreedBy?: Maybe<Scalars['String']>;
};

export type ApplicationTermsInput = {
  agreed?: InputMaybe<Scalars['Boolean']>;
  agreedBy?: InputMaybe<Scalars['String']>;
};

export type AuthApiKey = WebhookAuthType & {
  __typename?: 'AuthApiKey';
  addTo: WebhookApiKeyFieldEnum;
  key: Scalars['String'];
  type: WebhookAuthEnum;
  value: Scalars['String'];
};

export type AuthApiKeyInput = {
  addTo: WebhookApiKeyFieldEnum;
  key: Scalars['String'];
  type: WebhookAuthEnum;
  value: Scalars['String'];
};

export type AuthBasic = WebhookAuthType & {
  __typename?: 'AuthBasic';
  password: Scalars['String'];
  type: WebhookAuthEnum;
  username: Scalars['String'];
};

export type AuthBasicInput = {
  password: Scalars['String'];
  type: WebhookAuthEnum;
  username: Scalars['String'];
};

export type AuthNone = WebhookAuthType & {
  __typename?: 'AuthNone';
  type: WebhookAuthEnum;
};

export type AuthNoneInput = {
  type: WebhookAuthEnum;
};

export type AuthOAuth2 = WebhookAuthType & {
  __typename?: 'AuthOAuth2';
  addTo: WebhookApiKeyFieldEnum;
  token: Scalars['String'];
  type: WebhookAuthEnum;
};

export type AuthOAuth2Input = {
  addTo: WebhookApiKeyFieldEnum;
  token: Scalars['String'];
  type: WebhookAuthEnum;
};

export type AuthToken = WebhookAuthType & {
  __typename?: 'AuthToken';
  token: Scalars['String'];
  type: WebhookAuthEnum;
};

export type AuthTokenInput = {
  token: Scalars['String'];
  type: WebhookAuthEnum;
};

export type AuthTypeUnion = AuthApiKey | AuthBasic | AuthNone | AuthOAuth2 | AuthToken;

export type Billing = {
  __typename?: 'Billing';
  invoice?: Maybe<Invoice>;
  invoices?: Maybe<Array<Invoice>>;
  subscription?: Maybe<RentalSubscription>;
  subscriptions?: Maybe<Array<RentalSubscription>>;
};


export type BillingInvoiceArgs = {
  id: Scalars['String'];
};


export type BillingSubscriptionArgs = {
  id: Scalars['String'];
  tenantId: Scalars['String'];
};


export type BillingSubscriptionsArgs = {
  tenantId: Scalars['String'];
};

export type BillingMutations = {
  __typename?: 'BillingMutations';
  cancelSubscription: RentalSubscription;
  changeSubscription: RentalSubscription;
};


export type BillingMutationsChangeSubscriptionArgs = {
  input: ChangeSubscriptionInput;
};

export type BillingResponse = {
  __typename?: 'BillingResponse';
  billingAccount?: Maybe<Scalars['String']>;
  paymentPlan?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type BooleanComparisonFilter = {
  _EQ?: InputMaybe<Scalars['Boolean']>;
  _NE?: InputMaybe<Scalars['Boolean']>;
};

export type BooleanPayload = {
  __typename?: 'BooleanPayload';
  success: Scalars['Boolean'];
};

export type ChangeSubscriptionInput = {
  couponId?: InputMaybe<Scalars['String']>;
  planId: Scalars['String'];
};

export type CreateAccessTokenInput = {
  expireAt?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  scopes?: InputMaybe<Array<Scalars['String']>>;
  tenantId?: InputMaybe<Scalars['String']>;
};

export type CreateApplicationInput = {
  currentAddress?: InputMaybe<AddressInput>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  emergencyContact: ApplicationEmergencyContact;
  employmentHistory: Array<EmploymentHistoryInput>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nationalId: Scalars['String'];
  phone: Scalars['String'];
  rentalHistory: Array<RentalHistoryInput>;
  terms: ApplicationTermsInput;
  unit: Scalars['String'];
};

export type CreateFormFieldInput = {
  dataType: FieldDataType;
  description?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  label: Scalars['String'];
};

export type CreateFormTemplateInput = {
  fieldIds: Array<Scalars['String']>;
  name: Scalars['String'];
  postfixText?: InputMaybe<Scalars['String']>;
  prefixText?: InputMaybe<Scalars['String']>;
  repeatable?: InputMaybe<Scalars['Boolean']>;
  tag?: InputMaybe<Scalars['String']>;
};

export type CreateRentalInput = {
  address: AddressInput;
  name: Scalars['String'];
  rentalOwner?: InputMaybe<RentalOwnerInput>;
  rentalType: Scalars['String'];
  units?: InputMaybe<Array<RentalUnit>>;
};

export type CreateRentalTypeInput = {
  category: RentalTypeCategories;
  description?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  name: Scalars['String'];
};

export type CreateTenantInput = {
  cardId?: InputMaybe<Scalars['String']>;
  couponId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  planId: Scalars['String'];
};

export type CreateWebhookInput = {
  action?: InputMaybe<Array<WebhookCrudEnum>>;
  auth: WebhookAuthTypesInput;
  endpoint: Scalars['String'];
  name: Scalars['String'];
  requestType: WebhookHttpVerbEnum;
};

export type DateComparisonFilter = {
  _EQ?: InputMaybe<Scalars['DateTime']>;
  _GT?: InputMaybe<Scalars['DateTime']>;
  _GTE?: InputMaybe<Scalars['DateTime']>;
  _LT?: InputMaybe<Scalars['DateTime']>;
  _LTE?: InputMaybe<Scalars['DateTime']>;
  _NE?: InputMaybe<Scalars['DateTime']>;
};

export type DeleteAccessTokenInput = {
  id: Scalars['ID'];
  tenantId?: InputMaybe<Scalars['String']>;
};

export type DeleteFormTemplateInput = {
  id: Scalars['ID'];
};

export type DeleteMemberInput = {
  id: Scalars['ID'];
  tenantId: Scalars['String'];
};

export type DeleteRentalInput = {
  id: Scalars['ID'];
};

export type DeleteRentalTypeInput = {
  id: Scalars['String'];
};

export type DeleteTenantInput = {
  id: Scalars['ID'];
};

export type DeleteWebhookInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type EmailObject = {
  __typename?: 'EmailObject';
  address: Scalars['String'];
  primary: Scalars['Boolean'];
  verified: Scalars['Boolean'];
};

export type EmploymentHistory = {
  __typename?: 'EmploymentHistory';
  employerName?: Maybe<Scalars['String']>;
  positionHeld?: Maybe<Scalars['String']>;
};

export type EmploymentHistoryInput = {
  employerEmail?: InputMaybe<Scalars['String']>;
  employerName?: InputMaybe<Scalars['String']>;
  positionHeld?: InputMaybe<Scalars['String']>;
};

export type ExpirableTokens = {
  __typename?: 'ExpirableTokens';
  iat?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Enum type for form fields */
export enum FieldDataType {
  FieldDataTypeAttachment = 'FieldDataType_ATTACHMENT',
  FieldDataTypeAddress = 'FieldDataType_Address',
  FieldDataTypeBoolean = 'FieldDataType_BOOLEAN',
  FieldDataTypeCheckbox = 'FieldDataType_CHECKBOX',
  FieldDataTypeCurrency = 'FieldDataType_Currency',
  FieldDataTypeDatetime = 'FieldDataType_DATETIME',
  FieldDataTypeDateRange = 'FieldDataType_DateRange',
  FieldDataTypeEmail = 'FieldDataType_Email',
  FieldDataTypeNumber = 'FieldDataType_NUMBER',
  FieldDataTypeRadiobutton = 'FieldDataType_RADIOBUTTON',
  FieldDataTypeString = 'FieldDataType_STRING'
}

export type FilterAccessTokenInput = {
  _AND?: InputMaybe<Array<FilterAccessTokenInput>>;
  _NOR?: InputMaybe<Array<FilterAccessTokenInput>>;
  _OR?: InputMaybe<Array<FilterAccessTokenInput>>;
  active?: InputMaybe<BooleanComparisonFilter>;
  createdAt?: InputMaybe<DateComparisonFilter>;
  id?: InputMaybe<StringComparisonFilter>;
  updatedAt?: InputMaybe<DateComparisonFilter>;
};

export type FilterTenantInput = {
  _AND?: InputMaybe<Array<FilterTenantInput>>;
  _NOR?: InputMaybe<Array<FilterTenantInput>>;
  _OR?: InputMaybe<Array<FilterTenantInput>>;
  createdAt?: InputMaybe<DateComparisonFilter>;
  id?: InputMaybe<StringComparisonFilter>;
  name?: InputMaybe<StringComparisonFilter>;
  normalizedName?: InputMaybe<StringComparisonFilter>;
  updatedAt?: InputMaybe<DateComparisonFilter>;
};

export type FilterWebhookInput = {
  _AND?: InputMaybe<Array<FilterWebhookInput>>;
  _NOR?: InputMaybe<Array<FilterWebhookInput>>;
  _OR?: InputMaybe<Array<FilterWebhookInput>>;
  active?: InputMaybe<BooleanComparisonFilter>;
  createdAt?: InputMaybe<DateComparisonFilter>;
  endpoint?: InputMaybe<StringComparisonFilter>;
  id?: InputMaybe<StringComparisonFilter>;
  name?: InputMaybe<StringComparisonFilter>;
  updatedAt?: InputMaybe<DateComparisonFilter>;
};

export type FormField = {
  __typename?: 'FormField';
  dataType: FieldDataType;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
};

export type FormFieldInput = {
  dataType?: InputMaybe<FieldDataType>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  label?: InputMaybe<Scalars['String']>;
};

export type FormFieldQueryInput = {
  dataType?: InputMaybe<FieldDataType>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FormTemplate = {
  __typename?: 'FormTemplate';
  formFields?: Maybe<Array<FormField>>;
  id: Scalars['String'];
  name: Scalars['String'];
  postfixText: Scalars['String'];
  prefixText: Scalars['String'];
  repeatable: Scalars['Boolean'];
  tag: Scalars['String'];
};

export type FormTemplateFilterInput = {
  fieldIds?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  postfixText?: InputMaybe<Scalars['String']>;
  prefixText?: InputMaybe<Scalars['String']>;
  repeatable?: InputMaybe<Scalars['Boolean']>;
  tag?: InputMaybe<Scalars['String']>;
};

/** The tenant member invitation status */
export enum InvitationStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type InviteMemberInput = {
  email?: InputMaybe<Scalars['String']>;
  role: AppRole;
  userId?: InputMaybe<Scalars['ID']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  accountCountry?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  amountDue?: Maybe<Scalars['Float']>;
  amountPaid?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  billingReason?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  customerEmail?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  endingBalance?: Maybe<Scalars['Float']>;
  hostedInvoiceUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invoicePdf?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['Boolean']>;
  receiptNumber?: Maybe<Scalars['String']>;
  startingBalance?: Maybe<Scalars['Float']>;
  statementDescriptor?: Maybe<Scalars['String']>;
  status?: Maybe<InvoiceStatus>;
  subtotal?: Maybe<Scalars['Int']>;
  tax?: Maybe<Scalars['Float']>;
  taxPercent?: Maybe<Scalars['Float']>;
  total: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

/** Invoice status enum */
export enum InvoiceStatus {
  Draft = 'DRAFT',
  Open = 'OPEN',
  Paid = 'PAID',
  Uncollectible = 'UNCOLLECTIBLE',
  Void = 'VOID'
}

export type LoginInput = {
  params: LoginParamsInput;
  service: ServiceTypes;
};

export type LoginParamsInput = {
  /** Access token for social (Service: Twitter, Github, Email) */
  accessToken?: InputMaybe<Scalars['String']>;
  /** Access token for social (Service: Twitter, Github, Email) */
  accessTokenSecret?: InputMaybe<Scalars['String']>;
  /** Primary email of the user (Service: Password) */
  email?: InputMaybe<Scalars['String']>;
  /** User password (Service: Password) */
  password?: InputMaybe<Scalars['String']>;
};

export type Member = {
  __typename?: 'Member';
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  role: AppRole;
  status: InvitationStatus;
  tenant: Tenant;
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['String']>;
};

export type MemberFilterInput = {
  role?: InputMaybe<AppRole>;
  status?: InputMaybe<InvitationStatus>;
  tenantId?: InputMaybe<Scalars['String']>;
};

export type MemberMutations = {
  __typename?: 'MemberMutations';
  delete: Member;
  invite: Member;
  update: Member;
};


export type MemberMutationsDeleteArgs = {
  input: DeleteMemberInput;
};


export type MemberMutationsInviteArgs = {
  input: InviteMemberInput;
};


export type MemberMutationsUpdateArgs = {
  input: UpdateMemberInput;
};

export type MqttConfig = {
  __typename?: 'MqttConfig';
  password: Scalars['String'];
  port?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type MqttConfigInput = {
  password: Scalars['String'];
  port?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accessToken?: Maybe<AccessTokenMutations>;
  account?: Maybe<AccountMutations>;
  billing?: Maybe<BillingMutations>;
  member?: Maybe<MemberMutations>;
  profile?: Maybe<ProfileMutations>;
  rental?: Maybe<RentalMutations>;
  tenant?: Maybe<TenantMutations>;
  webhook?: Maybe<WebhookMutations>;
};

export type Occupant = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type OccupantResponse = {
  __typename?: 'OccupantResponse';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type PaginateInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ProfileMutations = {
  __typename?: 'ProfileMutations';
  update: User;
};


export type ProfileMutationsUpdateArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  accessToken?: Maybe<AccessToken>;
  accessTokens?: Maybe<Array<AccessToken>>;
  application?: Maybe<Application>;
  applications?: Maybe<Array<Application>>;
  billing?: Maybe<Billing>;
  formField?: Maybe<FormField>;
  formFields?: Maybe<Array<FormField>>;
  formTemplate?: Maybe<FormTemplate>;
  formTemplates?: Maybe<Array<FormTemplate>>;
  member: Member;
  members?: Maybe<Array<Member>>;
  profile: User;
  rental?: Maybe<Rental>;
  rentalAvailable?: Maybe<Scalars['Boolean']>;
  rentalType?: Maybe<RentalType>;
  rentalTypes?: Maybe<Array<RentalType>>;
  rentals?: Maybe<Array<Rental>>;
  role: Role;
  roles: Array<Role>;
  tenant?: Maybe<Tenant>;
  tenantAvailable?: Maybe<Scalars['Boolean']>;
  tenants?: Maybe<Array<Tenant>>;
  webhook?: Maybe<Webhook>;
  webhooks?: Maybe<Array<Webhook>>;
};


export type QueryAccessTokenArgs = {
  input: ReadAccessTokenInput;
};


export type QueryAccessTokensArgs = {
  paginate?: InputMaybe<PaginationInput>;
  where?: InputMaybe<AccessTokenFilterInput>;
};


export type QueryApplicationArgs = {
  paginate?: InputMaybe<PaginateInput>;
  where?: InputMaybe<ApplicationFilterInput>;
};


export type QueryApplicationsArgs = {
  paginate?: InputMaybe<PaginateInput>;
  where?: InputMaybe<ApplicationFilterInput>;
};


export type QueryFormFieldArgs = {
  where?: InputMaybe<FormFieldQueryInput>;
};


export type QueryFormFieldsArgs = {
  where?: InputMaybe<FormFieldQueryInput>;
};


export type QueryFormTemplateArgs = {
  where?: InputMaybe<FormTemplateFilterInput>;
};


export type QueryFormTemplatesArgs = {
  where?: InputMaybe<FormTemplateFilterInput>;
};


export type QueryMemberArgs = {
  id: Scalars['String'];
};


export type QueryMembersArgs = {
  where?: InputMaybe<MemberFilterInput>;
};


export type QueryRentalArgs = {
  filter: RentalFilterInput;
};


export type QueryRentalAvailableArgs = {
  identifier: Scalars['String'];
};


export type QueryRentalTypeArgs = {
  where?: InputMaybe<RentalTypeFilterInput>;
};


export type QueryRentalTypesArgs = {
  where?: InputMaybe<RentalTypeFilterInput>;
};


export type QueryRentalsArgs = {
  paginate?: InputMaybe<PaginationInput>;
  where?: InputMaybe<RentalFilterInput>;
};


export type QueryRoleArgs = {
  id: Scalars['String'];
};


export type QueryTenantArgs = {
  filter: TenantFilterInput;
};


export type QueryTenantAvailableArgs = {
  identifier: Scalars['String'];
};


export type QueryTenantsArgs = {
  paginate?: InputMaybe<PaginationInput>;
  where?: InputMaybe<TenantFilterInput>;
};


export type QueryWebhookArgs = {
  id: Scalars['String'];
};


export type QueryWebhooksArgs = {
  paginate?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WebhookFilterInput>;
};

export type ReadAccessTokenInput = {
  id: Scalars['ID'];
  tenantId?: InputMaybe<Scalars['String']>;
};

export type RegisterInput = {
  dateOfBirth: Scalars['DateTime'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

/** Rent cycle Enums */
export enum RentCycle {
  Biannual = 'BIANNUAL',
  Bimonthly = 'BIMONTHLY',
  Biweekly = 'BIWEEKLY',
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Quaterly = 'QUATERLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export type Rental = {
  __typename?: 'Rental';
  address: Address;
  billing?: Maybe<Array<BillingResponse>>;
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  normalizedAddress: Scalars['String'];
  owner?: Maybe<User>;
  rentalManagers?: Maybe<Array<RentalManagerResponse>>;
  rentalOwner?: Maybe<RentalOwnerResponse>;
  rentalType?: Maybe<RentalType>;
  status?: Maybe<RentalStausEnum>;
  unitIds?: Maybe<Array<Scalars['String']>>;
  units?: Maybe<Array<RentalUnitResponse>>;
  updatedAt: Scalars['DateTime'];
};

export type RentalBillingSettings = {
  billingAccount?: InputMaybe<Scalars['String']>;
  paymentPlan?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type RentalFilterInput = {
  address?: InputMaybe<AddressInput>;
  billing?: InputMaybe<RentalBillingSettings>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  normalizedAddress?: InputMaybe<Scalars['String']>;
  rentalManagers?: InputMaybe<RentalManagerInput>;
  rentalOwner?: InputMaybe<RentalOwnerInput>;
  rentalType?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<RentalStausEnum>;
  unit?: InputMaybe<RentalUnit>;
};

export type RentalHistory = {
  __typename?: 'RentalHistory';
  endDate?: Maybe<Scalars['String']>;
  reasonForLeaving?: Maybe<Scalars['String']>;
  rent?: Maybe<Scalars['String']>;
  rentCurrency?: Maybe<Scalars['String']>;
  rentCycle?: Maybe<RentCycle>;
  rentalAddress?: Maybe<Address>;
  rentalOwner?: Maybe<RentalOwnerObject>;
  startDate?: Maybe<Scalars['String']>;
};

export type RentalHistoryInput = {
  endDate?: InputMaybe<Scalars['String']>;
  reasonForLeaving?: InputMaybe<Scalars['String']>;
  rent?: InputMaybe<Scalars['String']>;
  rentCurrency?: InputMaybe<Scalars['String']>;
  rentCycle?: InputMaybe<RentCycle>;
  rentalAddress?: InputMaybe<AddressInput>;
  rentalOwner?: InputMaybe<RentalOwnerInput>;
  startDate?: InputMaybe<Scalars['String']>;
};

export type RentalManagerInput = {
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type RentalManagerResponse = {
  __typename?: 'RentalManagerResponse';
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  normalizedName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type RentalMutations = {
  __typename?: 'RentalMutations';
  create: Rental;
  createApplication: Application;
  createFormField: FormField;
  createFormTemplate: FormTemplate;
  createRentalType: RentalType;
  delete: Rental;
  deleteFormField: FormField;
  deleteFormTemplate: FormTemplate;
  deleteRentalType: RentalType;
  update: Rental;
  updateApplication: Application;
  updateFormField: FormField;
  updateFormTemplate: FormTemplate;
  updateRentalType: RentalType;
};


export type RentalMutationsCreateArgs = {
  input: CreateRentalInput;
};


export type RentalMutationsCreateApplicationArgs = {
  input: CreateApplicationInput;
};


export type RentalMutationsCreateFormFieldArgs = {
  input: CreateFormFieldInput;
};


export type RentalMutationsCreateFormTemplateArgs = {
  input: CreateFormTemplateInput;
};


export type RentalMutationsCreateRentalTypeArgs = {
  input: CreateRentalTypeInput;
};


export type RentalMutationsDeleteArgs = {
  input: DeleteRentalInput;
};


export type RentalMutationsDeleteFormFieldArgs = {
  input: DeleteFormFieldInput;
};


export type RentalMutationsDeleteFormTemplateArgs = {
  input: DeleteFormTemplateInput;
};


export type RentalMutationsDeleteRentalTypeArgs = {
  input: DeleteRentalTypeInput;
};


export type RentalMutationsUpdateArgs = {
  input: UpdateRentalInput;
};


export type RentalMutationsUpdateApplicationArgs = {
  input: UpdateApplicationInput;
};


export type RentalMutationsUpdateFormFieldArgs = {
  input: UpdateFormFieldInput;
};


export type RentalMutationsUpdateFormTemplateArgs = {
  input: UpdateFormTemplateInput;
};


export type RentalMutationsUpdateRentalTypeArgs = {
  input: UpdateRentalTypeInput;
};

export type RentalOwnerInput = {
  company?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type RentalOwnerObject = {
  __typename?: 'RentalOwnerObject';
  Phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type RentalOwnerResponse = {
  __typename?: 'RentalOwnerResponse';
  company?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** Specifies the rental status */
export enum RentalStausEnum {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE'
}

export type RentalSubscription = {
  __typename?: 'RentalSubscription';
  cancelAt: Scalars['DateTime'];
  canceledAt: Scalars['DateTime'];
  collectionMethod?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currentPeriodEnd?: Maybe<Scalars['String']>;
  currentPeriodStart?: Maybe<Scalars['String']>;
  customerEmail?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  latestInvoiceId?: Maybe<Scalars['String']>;
  rentalId: Scalars['String'];
  startDate?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  trialEnd?: Maybe<Scalars['String']>;
  trialStart?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type RentalType = {
  __typename?: 'RentalType';
  category: RentalTypeCategories;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Property Type Categories */
export enum RentalTypeCategories {
  Commercial = 'COMMERCIAL',
  Residential = 'RESIDENTIAL'
}

export type RentalTypeFilterInput = {
  category?: InputMaybe<RentalTypeCategories>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  rentalType: CreateRentalTypeInput;
};

export type RentalUnit = {
  amenities?: InputMaybe<Amenities>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  occupant?: InputMaybe<Occupant>;
  status?: InputMaybe<RentalStausEnum>;
};

export type RentalUnitResponse = {
  __typename?: 'RentalUnitResponse';
  amenities?: Maybe<AmenitiesResponse>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  occupant?: Maybe<OccupantResponse>;
  status?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  normalizedName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** Authentication service types */
export enum ServiceTypes {
  Facebook = 'Facebook',
  Github = 'Github',
  Google = 'Google',
  Jwt = 'JWT',
  Password = 'Password'
}

export type StringComparisonFilter = {
  _EQ?: InputMaybe<Scalars['String']>;
  _GT?: InputMaybe<Scalars['String']>;
  _GTE?: InputMaybe<Scalars['String']>;
  _LT?: InputMaybe<Scalars['String']>;
  _LTE?: InputMaybe<Scalars['String']>;
  _NE?: InputMaybe<Scalars['String']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  billing?: Maybe<TenantBilling>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  members?: Maybe<Array<Member>>;
  name?: Maybe<Scalars['String']>;
  normalizedName?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  settings?: Maybe<TenantSettings>;
  totalPoints?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type TenantBilling = {
  __typename?: 'TenantBilling';
  currentPlan?: Maybe<Scalars['String']>;
};

export type TenantFilterInput = {
  _AND?: InputMaybe<Array<FilterTenantInput>>;
  _NOR?: InputMaybe<Array<FilterTenantInput>>;
  _OR?: InputMaybe<Array<FilterTenantInput>>;
  createdAt?: InputMaybe<DateComparisonFilter>;
  id?: InputMaybe<StringComparisonFilter>;
  name?: InputMaybe<StringComparisonFilter>;
  normalizedName?: InputMaybe<StringComparisonFilter>;
  updatedAt?: InputMaybe<DateComparisonFilter>;
};

export type TenantMutations = {
  __typename?: 'TenantMutations';
  create: Tenant;
  delete: Tenant;
  update: Tenant;
};


export type TenantMutationsCreateArgs = {
  input: CreateTenantInput;
};


export type TenantMutationsDeleteArgs = {
  input: DeleteTenantInput;
};


export type TenantMutationsUpdateArgs = {
  input: UpdateTenantInput;
};

export type TenantSettings = {
  __typename?: 'TenantSettings';
  mqtt?: Maybe<MqttConfig>;
  showStatusIcon?: Maybe<Scalars['Boolean']>;
};

export type TenantSettingsInput = {
  mqtt?: InputMaybe<MqttConfigInput>;
  showStatusIcon?: InputMaybe<Scalars['Boolean']>;
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type UpdateApplicationInput = {
  data: UpdateApplicationPayload;
  id: Scalars['ID'];
};

export type UpdateApplicationPayload = {
  applicationStatus?: InputMaybe<ApplicationStausEnum>;
  terms?: InputMaybe<ApplicationTermsInput>;
};

export type UpdateFormTemplateInput = {
  formTemplate: CreateFormTemplateInput;
  id: Scalars['ID'];
};

export type UpdateMemberInput = {
  id?: InputMaybe<Scalars['ID']>;
  role: AppRole;
};

export type UpdateRentalInput = {
  data: UpdateRentalPayloadInput;
  id: Scalars['String'];
};

export type UpdateRentalPayloadInput = {
  address?: InputMaybe<AddressInput>;
  billing?: InputMaybe<RentalBillingSettings>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  rentalManagers?: InputMaybe<RentalManagerInput>;
  rentalType?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<RentalStausEnum>;
  units?: InputMaybe<Array<RentalUnit>>;
};

export type UpdateRentalTypeInput = {
  data: UpdateRentalTypeInputData;
  id: Scalars['String'];
};

export type UpdateRentalTypeInputData = {
  category?: InputMaybe<RentalTypeCategories>;
  description?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateTenantInput = {
  data?: InputMaybe<UpdateTenantPayloadInput>;
  id: Scalars['String'];
};

export type UpdateTenantPayloadInput = {
  name?: InputMaybe<Scalars['String']>;
  settings?: InputMaybe<TenantSettingsInput>;
};

export type UpdateUserInput = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type UpdateWebhookDataInput = {
  action?: InputMaybe<Array<WebhookCrudEnum>>;
  auth: WebhookAuthTypesInput;
  endpoint: Scalars['String'];
  name: Scalars['String'];
  requestType: WebhookHttpVerbEnum;
};

export type UpdateWebhookInput = {
  data: UpdateWebhookDataInput;
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  emails: Array<EmailObject>;
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  primaryEmail: Scalars['String'];
  roles: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type VerificationLinkInfo = {
  __typename?: 'VerificationLinkInfo';
  email?: Maybe<Scalars['String']>;
  pincode?: Maybe<Scalars['String']>;
};

export type Webhook = {
  __typename?: 'Webhook';
  action: WebhookCrudEnum;
  active: Scalars['Boolean'];
  auth?: Maybe<AuthTypeUnion>;
  createdAt: Scalars['DateTime'];
  endpoint: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  requestType: WebhookHttpVerbEnum;
  updatedAt: Scalars['DateTime'];
};

/** Webhook filter resource enums */
export enum WebhookApiKeyFieldEnum {
  Header = 'HEADER',
  Params = 'PARAMS'
}

/** webhook auth types */
export enum WebhookAuthEnum {
  ApiKey = 'API_KEY',
  Basic = 'BASIC',
  None = 'NONE',
  Oauth_2 = 'OAUTH_2',
  Token = 'TOKEN'
}

export type WebhookAuthType = {
  type: WebhookAuthEnum;
};

export type WebhookAuthTypesInput = {
  apiKey?: InputMaybe<AuthApiKeyInput>;
  basic?: InputMaybe<AuthBasicInput>;
  none?: InputMaybe<AuthNoneInput>;
  oauth2?: InputMaybe<AuthOAuth2Input>;
  token?: InputMaybe<AuthTokenInput>;
};

/** Webhook filter resource enums */
export enum WebhookCrudEnum {
  All = 'ALL',
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type WebhookFilterInput = {
  _AND?: InputMaybe<Array<FilterWebhookInput>>;
  _NOR?: InputMaybe<Array<FilterWebhookInput>>;
  _OR?: InputMaybe<Array<FilterWebhookInput>>;
  active?: InputMaybe<BooleanComparisonFilter>;
  createdAt?: InputMaybe<DateComparisonFilter>;
  endpoint?: InputMaybe<StringComparisonFilter>;
  id?: InputMaybe<StringComparisonFilter>;
  name?: InputMaybe<StringComparisonFilter>;
  updatedAt?: InputMaybe<DateComparisonFilter>;
};

/** The name tells it all. All available HTTP verbs for a webhook request */
export enum WebhookHttpVerbEnum {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type WebhookMutations = {
  __typename?: 'WebhookMutations';
  create: Webhook;
  delete: Webhook;
  update: Webhook;
};


export type WebhookMutationsCreateArgs = {
  input: CreateWebhookInput;
};


export type WebhookMutationsDeleteArgs = {
  input: DeleteWebhookInput;
};


export type WebhookMutationsUpdateArgs = {
  input: UpdateWebhookInput;
};

export type DeleteFormFieldInput = {
  id: Scalars['String'];
};

export type UpdateFormFieldInput = {
  id: Scalars['String'];
  input: FormFieldInput;
};

export type CreateApplicationMutationVariables = Exact<{
  args: CreateApplicationInput;
}>;


export type CreateApplicationMutation = { __typename?: 'Mutation', rental?: { __typename?: 'RentalMutations', createApplication: { __typename?: 'Application', id?: string | null, applicantId?: string | null, applicant?: { __typename?: 'Applicant', rentalHistory?: Array<{ __typename?: 'RentalHistory', startDate?: string | null, rent?: string | null, rentalOwner?: { __typename?: 'RentalOwnerObject', Phone?: string | null, lastName?: string | null, firstName?: string | null } | null }> | null } | null } } | null };


export const CreateApplicationDocument = gql`
    mutation createApplication($args: CreateApplicationInput!) {
  rental {
    createApplication(input: $args) {
      id
      applicantId
      applicant {
        rentalHistory {
          startDate
          rent
          rentalOwner {
            Phone
            lastName
            firstName
          }
        }
      }
    }
  }
}
    `;
export type CreateApplicationMutationFn = Apollo.MutationFunction<CreateApplicationMutation, CreateApplicationMutationVariables>;

/**
 * __useCreateApplicationMutation__
 *
 * To run a mutation, you first call `useCreateApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createApplicationMutation, { data, loading, error }] = useCreateApplicationMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateApplicationMutation(baseOptions?: Apollo.MutationHookOptions<CreateApplicationMutation, CreateApplicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateApplicationMutation, CreateApplicationMutationVariables>(CreateApplicationDocument, options);
      }
export type CreateApplicationMutationHookResult = ReturnType<typeof useCreateApplicationMutation>;
export type CreateApplicationMutationResult = Apollo.MutationResult<CreateApplicationMutation>;
export type CreateApplicationMutationOptions = Apollo.BaseMutationOptions<CreateApplicationMutation, CreateApplicationMutationVariables>;