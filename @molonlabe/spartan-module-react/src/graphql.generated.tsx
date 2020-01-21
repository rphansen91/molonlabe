import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Address = {
  __typename?: "Address";
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  organization?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  emails?: Maybe<Array<Maybe<Email>>>;
};

export type AddressInput = {
  organization?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
};

export type BillingAnchor = {
  __typename?: "BillingAnchor";
  chronology?: Maybe<Scalars["String"]>;
  billingAnchorInstruction?: Maybe<InstructionMethod>;
};

export type ChangeSubscription = {
  __typename?: "ChangeSubscription";
  id: Scalars["String"];
  items: Array<Item>;
  lineItems: Array<LineItem>;
  lineItemSubtotal: Scalars["Float"];
  orderType?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  billingStatus?: Maybe<Scalars["String"]>;
  customerId?: Maybe<Scalars["String"]>;
  websiteId?: Maybe<Scalars["String"]>;
  initialInvoiceId?: Maybe<Scalars["String"]>;
  recentInvoiceId?: Maybe<Scalars["String"]>;
  billingAnchor?: Maybe<BillingAnchor>;
  recurringInterval?: Maybe<RecurringInterval>;
  autopay?: Maybe<Scalars["Boolean"]>;
  riskMetadata?: Maybe<RiskMetadata>;
  startTime?: Maybe<Scalars["String"]>;
  activationTime?: Maybe<Scalars["String"]>;
  poNumber?: Maybe<Scalars["String"]>;
  customFields?: Maybe<Scalars["JSON"]>;
  createdTime?: Maybe<Scalars["String"]>;
  updatedTime?: Maybe<Scalars["String"]>;
  canceledTime?: Maybe<Scalars["String"]>;
  canceledBy?: Maybe<Scalars["String"]>;
  cancelCategory?: Maybe<Scalars["String"]>;
  cancelDescription?: Maybe<Scalars["String"]>;
};

export type CurrencyAmount = {
  __typename?: "CurrencyAmount";
  currency?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["Float"]>;
  amountUsd?: Maybe<Scalars["Float"]>;
};

export type Customer = {
  __typename?: "Customer";
  id: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  createdTime?: Maybe<Scalars["String"]>;
  updatedTime?: Maybe<Scalars["String"]>;
  customFields?: Maybe<Scalars["JSON"]>;
  primaryAddress?: Maybe<Address>;
  lifetimeRevenue?: Maybe<CurrencyAmount>;
  invoiceCount?: Maybe<Scalars["String"]>;
  averageValue?: Maybe<CurrencyAmount>;
  paymentCount?: Maybe<Scalars["String"]>;
  lastPaymentTime?: Maybe<Scalars["String"]>;
  tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
  websiteId?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
  defaultPaymentInstrument?: Maybe<PaymentInstrumentId>;
  paymentCards?: Maybe<Array<Maybe<PaymentCard>>>;
  subscriptions?: Maybe<Array<Maybe<RebillySubscription>>>;
  mainSubscription?: Maybe<RebillySubscription>;
  pastSubscriptions?: Maybe<Array<Maybe<RebillySubscription>>>;
};

export type CustomerInput = {
  email: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
};

export type Email = {
  __typename?: "Email";
  label?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
  primary?: Maybe<Scalars["Boolean"]>;
};

export type InstructionMethod = {
  __typename?: "InstructionMethod";
  method?: Maybe<Scalars["String"]>;
};

export type Invoice = {
  __typename?: "Invoice";
  id: Scalars["String"];
  dueTime?: Maybe<Scalars["String"]>;
  issuedTime?: Maybe<Scalars["String"]>;
  abandonedTime?: Maybe<Scalars["String"]>;
  voidedTime?: Maybe<Scalars["String"]>;
  paidTime?: Maybe<Scalars["String"]>;
  currency?: Maybe<Scalars["String"]>;
  invoiceNumber?: Maybe<Scalars["Int"]>;
  customerId?: Maybe<Scalars["String"]>;
  websiteId?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["String"]>;
  subscriptionId?: Maybe<Scalars["String"]>;
  billingAddress?: Maybe<Address>;
  deliveryAddress?: Maybe<Address>;
  amount?: Maybe<Scalars["Float"]>;
  subtotalAmount?: Maybe<Scalars["Float"]>;
  shippingAmount?: Maybe<Scalars["Float"]>;
  poNumber?: Maybe<Scalars["Int"]>;
  notes?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<InvoiceItem>>>;
  discountAmount?: Maybe<Scalars["Float"]>;
  discounts?: Maybe<Scalars["JSON"]>;
  taxAmount?: Maybe<Scalars["Float"]>;
  taxes?: Maybe<Scalars["JSON"]>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  autopayScheduledTime?: Maybe<Scalars["String"]>;
  autopayRetryNumber?: Maybe<Scalars["Int"]>;
  retryInstruction?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  delinquentCollectionPeriod?: Maybe<Scalars["Int"]>;
  collectionPeriod?: Maybe<Scalars["Int"]>;
  createdTime?: Maybe<Scalars["String"]>;
  updatedTime?: Maybe<Scalars["String"]>;
};

export type InvoiceItem = {
  __typename?: "InvoiceItem";
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  unitPrice?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Int"]>;
  price?: Maybe<Scalars["Float"]>;
  subscriptionId?: Maybe<Scalars["String"]>;
  productId?: Maybe<Scalars["String"]>;
  planId?: Maybe<Scalars["String"]>;
  periodStartTime?: Maybe<Scalars["String"]>;
  periodEndTime?: Maybe<Scalars["String"]>;
  periodNumber?: Maybe<Scalars["Int"]>;
  createdTime?: Maybe<Scalars["String"]>;
  updatedTime?: Maybe<Scalars["String"]>;
  subscription?: Maybe<Scalars["String"]>;
  rebillNumber?: Maybe<Scalars["Int"]>;
};

export type Item = {
  __typename?: "Item";
  planId: Scalars["String"];
  quantity?: Maybe<Scalars["Int"]>;
};

export type ItemInput = {
  planId: Scalars["String"];
  quantity?: Maybe<Scalars["Int"]>;
};

export type LineItem = {
  __typename?: "LineItem";
  type?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  unitPriceAmount?: Maybe<Scalars["Float"]>;
  unitPriceCurrency?: Maybe<Scalars["String"]>;
  quantity?: Maybe<Scalars["Int"]>;
  periodStartTime?: Maybe<Scalars["String"]>;
  periodEndTime?: Maybe<Scalars["String"]>;
  createdTime?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  empty?: Maybe<Scalars["String"]>;
  addPayment?: Maybe<Customer>;
  cancelSubscriptions?: Maybe<Array<Maybe<RebillySubscription>>>;
  cancelSubscription?: Maybe<RebillySubscription>;
  reactivateSubscription?: Maybe<RebillySubscription>;
  changeSubscriptionPreview?: Maybe<ChangeSubscription>;
  changeSubscription?: Maybe<RebillySubscription>;
  createTransaction?: Maybe<Transaction>;
  checkout?: Maybe<Customer>;
};

export type MutationAddPaymentArgs = {
  paymentToken: Scalars["String"];
  customer?: Maybe<CustomerInput>;
  customerId?: Maybe<Scalars["String"]>;
};

export type MutationCancelSubscriptionsArgs = {
  subscriptionIds: Array<Scalars["String"]>;
  churnTime?: Maybe<Scalars["String"]>;
  canceledBy?: Maybe<Scalars["String"]>;
  reason?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  prorated?: Maybe<Scalars["Boolean"]>;
};

export type MutationCancelSubscriptionArgs = {
  subscriptionId: Scalars["String"];
  churnTime?: Maybe<Scalars["String"]>;
  canceledBy?: Maybe<Scalars["String"]>;
  reason?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  prorated?: Maybe<Scalars["Boolean"]>;
};

export type MutationReactivateSubscriptionArgs = {
  subscriptionId: Scalars["String"];
  effectiveTime?: Maybe<Scalars["String"]>;
  renewalTime?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type MutationChangeSubscriptionPreviewArgs = {
  subscriptionId: Scalars["String"];
  planId: Scalars["String"];
  renewalPolicy?: Maybe<Scalars["String"]>;
  effectiveTime?: Maybe<Scalars["String"]>;
  prorated?: Maybe<Scalars["Boolean"]>;
};

export type MutationChangeSubscriptionArgs = {
  subscriptionId: Scalars["String"];
  planId: Scalars["String"];
  paymentInstrument?: Maybe<PaymentInstrumentInput>;
  renewalPolicy?: Maybe<Scalars["String"]>;
  effectiveTime?: Maybe<Scalars["String"]>;
  prorated?: Maybe<Scalars["Boolean"]>;
};

export type MutationCreateTransactionArgs = {
  invoiceId: Scalars["String"];
  customerId?: Maybe<Scalars["String"]>;
  customer?: Maybe<CustomerInput>;
  paymentInstrument?: Maybe<PaymentInstrumentInput>;
};

export type MutationCheckoutArgs = {
  planId?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<ItemInput>>;
  customerId?: Maybe<Scalars["String"]>;
  customer?: Maybe<CustomerInput>;
  shipping?: Maybe<AddressInput>;
  billing?: Maybe<AddressInput>;
  paymentInstrument?: Maybe<PaymentInstrumentInput>;
};

export type Pagination = {
  perPage?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type PaymentCard = {
  __typename?: "PaymentCard";
  id?: Maybe<Scalars["String"]>;
  method?: Maybe<Scalars["String"]>;
  last4?: Maybe<Scalars["String"]>;
  bin?: Maybe<Scalars["String"]>;
  expYear?: Maybe<Scalars["Int"]>;
  expMonth?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
  brand?: Maybe<Scalars["String"]>;
  bankName?: Maybe<Scalars["String"]>;
  bankCountry?: Maybe<Scalars["String"]>;
  customerId?: Maybe<Scalars["String"]>;
  panFingerprint?: Maybe<Scalars["String"]>;
  createdTime?: Maybe<Scalars["String"]>;
  updatedTime?: Maybe<Scalars["String"]>;
  customFields?: Maybe<Scalars["JSON"]>;
  billingAddress?: Maybe<Address>;
  stickyGatewayAccountId?: Maybe<Scalars["String"]>;
  customer?: Maybe<Scalars["String"]>;
  billingContactId?: Maybe<Scalars["String"]>;
  billingContact?: Maybe<Scalars["String"]>;
};

export type PaymentInstrumentId = {
  __typename?: "PaymentInstrumentId";
  method?: Maybe<Scalars["String"]>;
  paymentCardId?: Maybe<Scalars["String"]>;
};

export type PaymentInstrumentInput = {
  method?: Maybe<Scalars["String"]>;
  paymentCardId?: Maybe<Scalars["String"]>;
};

export type Plan = {
  __typename?: "Plan";
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  productId?: Maybe<Scalars["String"]>;
  productOptions?: Maybe<Scalars["JSON"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  currency?: Maybe<Scalars["String"]>;
  currencySign?: Maybe<Scalars["String"]>;
  setup?: Maybe<Setup>;
  trial?: Maybe<Trial>;
  pricing?: Maybe<Pricing>;
  recurringInterval?: Maybe<RecurringInterval>;
  billingAnchor?: Maybe<BillingAnchor>;
  meteredBilling?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
  richDescription?: Maybe<Scalars["String"]>;
  createdTime?: Maybe<Scalars["String"]>;
  updatedTime?: Maybe<Scalars["String"]>;
  subscriptionCount?: Maybe<Scalars["Int"]>;
  customFields?: Maybe<Scalars["JSON"]>;
  setupAmount?: Maybe<Scalars["Float"]>;
  trialAmount?: Maybe<Scalars["Float"]>;
  trialPeriodUnit?: Maybe<Scalars["String"]>;
  trialPeriodLength?: Maybe<Scalars["Int"]>;
  recurringAmount?: Maybe<Scalars["Float"]>;
  recurringPeriodUnit?: Maybe<Scalars["Float"]>;
  recurringPeriodLength?: Maybe<Scalars["Int"]>;
  recurringPeriodLimit?: Maybe<Scalars["Int"]>;
  contractTermUnit?: Maybe<Scalars["Float"]>;
  contractTermLength?: Maybe<Scalars["Int"]>;
  minQuantity?: Maybe<Scalars["Int"]>;
  maxQuantity?: Maybe<Scalars["Int"]>;
  expireTime?: Maybe<Scalars["String"]>;
  expiredTime?: Maybe<Scalars["String"]>;
};

export type Pricing = {
  __typename?: "Pricing";
  formula?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  maxQuantity?: Maybe<Scalars["Int"]>;
};

export type Profile = {
  __typename?: "Profile";
  uid: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  photoURL?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  empty?: Maybe<Scalars["String"]>;
  me?: Maybe<Customer>;
  customer?: Maybe<Customer>;
  customerProfileByUid?: Maybe<Profile>;
  invoice?: Maybe<Invoice>;
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  subscription?: Maybe<RebillySubscription>;
  subscriptions?: Maybe<Array<Maybe<RebillySubscription>>>;
  transaction?: Maybe<Transaction>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  plan?: Maybe<Plan>;
  plans?: Maybe<Array<Maybe<Plan>>>;
  coinPlans?: Maybe<Array<Maybe<Plan>>>;
};

export type QueryCustomerArgs = {
  id?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
};

export type QueryCustomerProfileByUidArgs = {
  uid: Scalars["String"];
};

export type QueryInvoiceArgs = {
  id: Scalars["String"];
};

export type QueryInvoicesArgs = {
  customerId: Scalars["String"];
};

export type QuerySubscriptionArgs = {
  id: Scalars["String"];
};

export type QuerySubscriptionsArgs = {
  customerId: Scalars["String"];
};

export type QueryTransactionArgs = {
  id: Scalars["String"];
};

export type QueryTransactionsArgs = {
  customerId: Scalars["String"];
};

export type QueryPlanArgs = {
  id: Scalars["String"];
};

export type RebillySubscription = {
  __typename?: "RebillySubscription";
  id: Scalars["String"];
  orderType?: Maybe<Scalars["String"]>;
  customerId?: Maybe<Scalars["String"]>;
  websiteId?: Maybe<Scalars["String"]>;
  initialInvoice?: Maybe<Invoice>;
  recentInvoice?: Maybe<Invoice>;
  upcomingInvoice?: Maybe<Invoice>;
  initialInvoiceId?: Maybe<Scalars["String"]>;
  recentInvoiceId?: Maybe<Scalars["String"]>;
  startTime?: Maybe<Scalars["String"]>;
  activationTime?: Maybe<Scalars["String"]>;
  endTime?: Maybe<Scalars["String"]>;
  renewalTime?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  autopay?: Maybe<Scalars["Boolean"]>;
  billingAddress?: Maybe<Address>;
  deliveryAddress?: Maybe<Address>;
  createdTime?: Maybe<Scalars["String"]>;
  updatedTime?: Maybe<Scalars["String"]>;
  inTrial?: Maybe<Scalars["Boolean"]>;
  rebillNumber?: Maybe<Scalars["Int"]>;
  poNumber?: Maybe<Scalars["Int"]>;
  recurringInterval?: Maybe<Scalars["Int"]>;
  billingAnchor?: Maybe<Scalars["String"]>;
  billingStatus?: Maybe<Scalars["String"]>;
  canceledTime?: Maybe<Scalars["String"]>;
  canceledBy?: Maybe<Scalars["String"]>;
  cancelCategory?: Maybe<Scalars["String"]>;
  cancelDescription?: Maybe<Scalars["String"]>;
  riskMetadata?: Maybe<RiskMetadata>;
  items?: Maybe<Array<Maybe<SubscriptionItem>>>;
  planId?: Maybe<Scalars["String"]>;
  planIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  planType?: Maybe<Scalars["String"]>;
};

export type RecurringInterval = {
  __typename?: "RecurringInterval";
  unit?: Maybe<Scalars["String"]>;
  length?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  billingTime?: Maybe<Scalars["String"]>;
  periodAnchorInstruction?: Maybe<InstructionMethod>;
};

export type RiskMetadata = {
  __typename?: "RiskMetadata";
  ipAddress?: Maybe<Scalars["String"]>;
  isVpn?: Maybe<Scalars["Boolean"]>;
  isProxy?: Maybe<Scalars["Boolean"]>;
  isTor?: Maybe<Scalars["Boolean"]>;
  isHosting?: Maybe<Scalars["Boolean"]>;
  vpnServiceName?: Maybe<Scalars["String"]>;
  isp?: Maybe<Scalars["String"]>;
  score?: Maybe<Scalars["Int"]>;
  country?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  accuracyRadius?: Maybe<Scalars["Float"]>;
  postalCode?: Maybe<Scalars["String"]>;
  timeZone?: Maybe<Scalars["String"]>;
  fingerprint?: Maybe<Scalars["String"]>;
  httpHeaders?: Maybe<Scalars["JSON"]>;
  distance?: Maybe<Scalars["Float"]>;
};

export type Setup = {
  __typename?: "Setup";
  price?: Maybe<Scalars["Float"]>;
};

export type Sort = {
  field?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["Int"]>;
};

export type SubscriptionInput = {
  orderType: Scalars["String"];
  customerId: Scalars["String"];
  items: Array<ItemInput>;
  autopay?: Maybe<Scalars["Boolean"]>;
};

export type SubscriptionItem = {
  __typename?: "SubscriptionItem";
  id?: Maybe<Scalars["String"]>;
  planId?: Maybe<Scalars["String"]>;
  quantity?: Maybe<Scalars["Int"]>;
  billingTiming?: Maybe<Scalars["String"]>;
};

export type Transaction = {
  __typename?: "Transaction";
  id: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
  result?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["String"]>;
  currency?: Maybe<Scalars["String"]>;
  parentTransactionId?: Maybe<Scalars["String"]>;
  childTransactions?: Maybe<Array<Maybe<Scalars["String"]>>>;
  invoiceIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  subscriptionIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  planIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  isRebill?: Maybe<Scalars["Boolean"]>;
  rebillNumber?: Maybe<Scalars["Int"]>;
  gatewayAccountId?: Maybe<Scalars["String"]>;
  gatewayTransactionId?: Maybe<Scalars["String"]>;
  gatewayName?: Maybe<Scalars["String"]>;
  acquirerName?: Maybe<Scalars["String"]>;
  gateway?: Maybe<Scalars["JSON"]>;
  customerId?: Maybe<Scalars["String"]>;
  websiteId?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["String"]>;
  billingAddress?: Maybe<Address>;
  createdTime?: Maybe<Scalars["String"]>;
  updatedTime?: Maybe<Scalars["String"]>;
  has3ds?: Maybe<Scalars["Boolean"]>;
  hasDcc?: Maybe<Scalars["Boolean"]>;
  dcc?: Maybe<Scalars["String"]>;
  velocity?: Maybe<Scalars["Int"]>;
  bin?: Maybe<Scalars["String"]>;
  paymentInstrumentFingerprint?: Maybe<Scalars["String"]>;
  riskScore?: Maybe<Scalars["String"]>;
  scheduledTime?: Maybe<Scalars["String"]>;
  processedTime?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isRetry?: Maybe<Scalars["Boolean"]>;
  retriesResult?: Maybe<Scalars["String"]>;
  retryInstruction?: Maybe<Scalars["String"]>;
  retryNumber?: Maybe<Scalars["Int"]>;
  retriedTransactionId?: Maybe<Scalars["String"]>;
  paymentInstrument?: Maybe<PaymentInstrumentId>;
  notificationUrl?: Maybe<Scalars["String"]>;
  redirectUrl?: Maybe<Scalars["String"]>;
  redirectUrls?: Maybe<Array<Maybe<Scalars["String"]>>>;
  riskMetadata?: Maybe<RiskMetadata>;
  isDisputed?: Maybe<Scalars["Boolean"]>;
  isReconciled?: Maybe<Scalars["Boolean"]>;
  hadDiscrepancy?: Maybe<Scalars["Boolean"]>;
  orderId?: Maybe<Scalars["String"]>;
  requestId?: Maybe<Scalars["String"]>;
  customFields?: Maybe<Scalars["JSON"]>;
  hasBumpOffer?: Maybe<Scalars["Boolean"]>;
  bumpOffer?: Maybe<Scalars["JSON"]>;
  billingDescriptor?: Maybe<Scalars["JSON"]>;
  revision?: Maybe<Scalars["Int"]>;
  referenceData?: Maybe<Scalars["JSON"]>;
  method?: Maybe<Scalars["String"]>;
  gatewayResponse?: Maybe<Scalars["JSON"]>;
  customer?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  paymentCardId?: Maybe<Scalars["String"]>;
  paymentCard?: Maybe<Scalars["String"]>;
  billingContactId?: Maybe<Scalars["String"]>;
};

export type Trial = {
  __typename?: "Trial";
  price?: Maybe<Scalars["Float"]>;
  period?: Maybe<TrialPeriod>;
};

export type TrialPeriod = {
  __typename?: "TrialPeriod";
  unit?: Maybe<Scalars["String"]>;
  length?: Maybe<Scalars["Int"]>;
};
export type EmptyQueryVariables = {};

export type EmptyQuery = { __typename?: "Query" } & Pick<Query, "empty">;

export type CustomerQueryVariables = {};

export type CustomerQuery = { __typename?: "Query" } & {
  customer: Maybe<{ __typename?: "Customer" } & Pick<Customer, "id" | "email">>;
};

export const EmptyDocument = gql`
  query Empty {
    empty
  }
`;
export type EmptyComponentProps = Omit<
  ReactApollo.QueryProps<EmptyQuery, EmptyQueryVariables>,
  "query"
>;

export const EmptyComponent = (props: EmptyComponentProps) => (
  <ReactApollo.Query<EmptyQuery, EmptyQueryVariables>
    query={EmptyDocument}
    {...props}
  />
);

export type EmptyProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<EmptyQuery, EmptyQueryVariables>
> &
  TChildProps;
export function withEmpty<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    EmptyQuery,
    EmptyQueryVariables,
    EmptyProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    EmptyQuery,
    EmptyQueryVariables,
    EmptyProps<TChildProps>
  >(EmptyDocument, {
    alias: "withEmpty",
    ...operationOptions
  });
}
export const CustomerDocument = gql`
  query Customer {
    customer {
      id
      email
    }
  }
`;
export type CustomerComponentProps = Omit<
  ReactApollo.QueryProps<CustomerQuery, CustomerQueryVariables>,
  "query"
>;

export const CustomerComponent = (props: CustomerComponentProps) => (
  <ReactApollo.Query<CustomerQuery, CustomerQueryVariables>
    query={CustomerDocument}
    {...props}
  />
);

export type CustomerProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<CustomerQuery, CustomerQueryVariables>
> &
  TChildProps;
export function withCustomer<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CustomerQuery,
    CustomerQueryVariables,
    CustomerProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    CustomerQuery,
    CustomerQueryVariables,
    CustomerProps<TChildProps>
  >(CustomerDocument, {
    alias: "withCustomer",
    ...operationOptions
  });
}
