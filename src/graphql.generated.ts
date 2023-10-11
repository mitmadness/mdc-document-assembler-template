import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  JobToken: { input: any; output: any; }
  Metadata: { input: any; output: any; }
  MongoID: { input: any; output: any; }
  RegExpAsString: { input: any; output: any; }
  Success: { input: any; output: any; }
  Translations: { input: any; output: any; }
};

export type AccessPoint = {
  __typename?: 'AccessPoint';
  _id: Scalars['MongoID']['output'];
  areSavesPubliclyAvailableById: Scalars['Boolean']['output'];
  authorizedCatalogIds: Array<Maybe<Scalars['MongoID']['output']>>;
  authorizedCatalogs: Array<CatalogFolder>;
  /** Be aware that not everyone is allowed to access brand informations. If you want public theming data, use brandColors instead. */
  brand: Brand;
  /** Since relation `brand` is not available for everyone, this one allows access to colors */
  brandColors: BrandColors;
  brandId: Scalars['MongoID']['output'];
  /** Since relation `brand` is not available for everyone, this one allows access to harmless data */
  brandPublicInfo?: Maybe<BrandPublicInfo>;
  ecotaxePriceTableId?: Maybe<Scalars['MongoID']['output']>;
  name: Scalars['String']['output'];
  parametersScrapper?: Maybe<BrandParametersScrapper>;
  parametersScrapperId?: Maybe<Scalars['MongoID']['output']>;
  parametersTunnel: BrandParametersTunnel;
  parametersTunnelId: Scalars['MongoID']['output'];
  priceTable?: Maybe<PriceTable>;
  priceTableId?: Maybe<Scalars['MongoID']['output']>;
  supportButton: AccessPointSupportButton;
};


export type AccessPointAuthorizedCatalogsArgs = {
  filter?: InputMaybe<FilterFindManyCatalogFolderInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCatalogFolderInput>;
};

/** A connection to a list of items. */
export type AccessPointConnection = {
  __typename?: 'AccessPointConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<AccessPointEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AccessPointEdge = {
  __typename?: 'AccessPointEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: AccessPoint;
};

/** List of items with pagination. */
export type AccessPointPagination = {
  __typename?: 'AccessPointPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<AccessPoint>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type AccessPointSupportButton = {
  __typename?: 'AccessPointSupportButton';
  icon?: Maybe<EnumAccessPointSupportButtonIcon>;
  tooltip: Scalars['String']['output'];
  tooltipTranslations: Scalars['Translations']['output'];
  type: EnumAccessPointSupportButtonType;
  value?: Maybe<Scalars['String']['output']>;
};


export type AccessPointSupportButtonTooltipArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AccessPointSupportButtonInput = {
  icon?: InputMaybe<EnumAccessPointSupportButtonIcon>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type: EnumAccessPointSupportButtonType;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AnyJob = DocumentAssemblerManifestQueueJob | DocumentAssemblerQueueJob | HealthCheckQueueJob | PuppeteerPdfQueueJob;

export type Applet = {
  __typename?: 'Applet';
  _id: Scalars['MongoID']['output'];
  encoding: EnumAppletEncoding;
  indexedDbResetVersion: Scalars['String']['output'];
  intVersion: Scalars['Float']['output'];
  readableVersion: Scalars['String']['output'];
  redirectedVersion?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type AppletConnection = {
  __typename?: 'AppletConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<AppletEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AppletEdge = {
  __typename?: 'AppletEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Applet;
};

/** List of items with pagination. */
export type AppletPagination = {
  __typename?: 'AppletPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<Applet>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type BarcodeCollection = {
  __typename?: 'BarcodeCollection';
  _id: Scalars['MongoID']['output'];
  barcodeReferences: Array<BarcodeCollectionReference>;
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdById?: Maybe<Scalars['MongoID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  updatedById?: Maybe<Scalars['MongoID']['output']>;
};

export type BarcodeCollectionBarcodeReferencesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  ean: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type BarcodeCollectionConnection = {
  __typename?: 'BarcodeCollectionConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<BarcodeCollectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BarcodeCollectionEdge = {
  __typename?: 'BarcodeCollectionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: BarcodeCollection;
};

/** List of items with pagination. */
export type BarcodeCollectionPagination = {
  __typename?: 'BarcodeCollectionPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<BarcodeCollection>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type BarcodeCollectionReference = {
  __typename?: 'BarcodeCollectionReference';
  _id?: Maybe<Scalars['MongoID']['output']>;
  ean: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type Brand = {
  __typename?: 'Brand';
  _id: Scalars['MongoID']['output'];
  accessPoints: Array<AccessPoint>;
  anonymousSaves: Array<Save>;
  barcodeCollections: Array<BarcodeCollection>;
  brandParametersPricing: Array<BrandParametersPricing>;
  brandParametersScrapper: Array<BrandParametersScrapper>;
  brandParametersTunnel: Array<BrandParametersTunnel>;
  /** Gets whether the viewer can reach the given role in the brand. It's a shortcut over getting the same information from memberships/ownMembership. Use this rather than memberships, if that's the only information you need. */
  canReachRole: Scalars['Boolean']['output'];
  cloudStorageBytesUsage: BrandCloudStorageBytesUsage;
  colors: BrandColors;
  createdAt?: Maybe<Scalars['Date']['output']>;
  items: Array<Item>;
  memberships: Array<BrandMembership>;
  name: Scalars['String']['output'];
  /** If logged in and member of the brand, returns the membership of the user in that brand, null if the user is not logged in or not member of that brand */
  ownMembership?: Maybe<BrandMembership>;
  palettes: Array<Palette>;
  promoterWebsiteConfiguration: BrandPromoterWebsiteConfiguration;
  salesRecords: Array<SalesRecord>;
  satelliteConfiguration?: Maybe<BrandSatelliteConfiguration>;
  shareCode: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type BrandAccessPointsArgs = {
  filter?: InputMaybe<FilterFindManyAccessPointInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyAccessPointInput>;
};


export type BrandAnonymousSavesArgs = {
  filter?: InputMaybe<FilterFindManySaveInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SortFindManySaveInput>>;
};


export type BrandBarcodeCollectionsArgs = {
  filter?: InputMaybe<FilterFindManyBarcodeCollectionInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBarcodeCollectionInput>;
};


export type BrandBrandParametersPricingArgs = {
  filter?: InputMaybe<FilterFindManyBrandParametersPricingInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBrandParametersPricingInput>;
};


export type BrandBrandParametersScrapperArgs = {
  filter?: InputMaybe<FilterFindManyBrandParametersScrapperInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBrandParametersScrapperInput>;
};


export type BrandBrandParametersTunnelArgs = {
  filter?: InputMaybe<FilterFindManyBrandParametersTunnelInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBrandParametersTunnelInput>;
};


export type BrandCanReachRoleArgs = {
  role: Scalars['String']['input'];
};


export type BrandItemsArgs = {
  filter?: InputMaybe<FilterFindManyItemInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyItemInput>;
};


export type BrandPalettesArgs = {
  filter?: InputMaybe<FilterFindManyPaletteInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPaletteInput>;
};


export type BrandSalesRecordsArgs = {
  filter?: InputMaybe<FilterFindManySalesRecordInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManySalesRecordInput>;
};


export type BrandUserArgs = {
  filter?: InputMaybe<FilterFindOneUserInput>;
  reachableRole?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneUserInput>;
};


export type BrandUsersArgs = {
  filter?: InputMaybe<FilterFindManyUserInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  reachableRole?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyUserInput>;
};

export type BrandCloudStorageBytesUsage = {
  __typename?: 'BrandCloudStorageBytesUsage';
  items: Scalars['Int']['output'];
  saves: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BrandColors = {
  __typename?: 'BrandColors';
  dataProtection: Scalars['String']['output'];
  legalNotice: Scalars['String']['output'];
  loadingScreenBackground: Scalars['String']['output'];
  loadingScreenLogoPicture: Scalars['String']['output'];
  loadingScreenProgressBarBackground: Scalars['String']['output'];
  loadingScreenProgressBarBorder: Scalars['String']['output'];
  loadingScreenProgressBarContent: Scalars['String']['output'];
  loadingScreenText: Scalars['String']['output'];
  meshes: BrandColorsMeshes;
  planElement: BrandColorsPlanElement;
  primary: Scalars['String']['output'];
  questHeaderBackground: Scalars['String']['output'];
  questHeaderBody: Scalars['String']['output'];
  questHeaderTitle: Scalars['String']['output'];
  secondary: Scalars['String']['output'];
  stepperBackground: Scalars['String']['output'];
  stepperContent: Scalars['String']['output'];
  stepperText: Scalars['String']['output'];
  tertiary: Scalars['String']['output'];
};

export type BrandColorsInput = {
  dataProtection?: InputMaybe<Scalars['String']['input']>;
  legalNotice?: InputMaybe<Scalars['String']['input']>;
  loadingScreenBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenLogoPicture?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBorder?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarContent?: InputMaybe<Scalars['String']['input']>;
  loadingScreenText?: InputMaybe<Scalars['String']['input']>;
  meshes?: InputMaybe<BrandColorsMeshesInput>;
  planElement?: InputMaybe<BrandColorsPlanElementInput>;
  primary?: InputMaybe<Scalars['String']['input']>;
  questHeaderBackground?: InputMaybe<Scalars['String']['input']>;
  questHeaderBody?: InputMaybe<Scalars['String']['input']>;
  questHeaderTitle?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type BrandColorsMeshes = {
  __typename?: 'BrandColorsMeshes';
  wallCut: Scalars['String']['output'];
};

export type BrandColorsMeshesInput = {
  wallCut?: InputMaybe<Scalars['String']['input']>;
};

export type BrandColorsPlanElement = {
  __typename?: 'BrandColorsPlanElement';
  floor: Scalars['String']['output'];
  wall: Scalars['String']['output'];
  window: Scalars['String']['output'];
};

export type BrandColorsPlanElementInput = {
  floor?: InputMaybe<Scalars['String']['input']>;
  wall?: InputMaybe<Scalars['String']['input']>;
  window?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type BrandConnection = {
  __typename?: 'BrandConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<BrandEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BrandEdge = {
  __typename?: 'BrandEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Brand;
};

export type BrandEntryPointTrafficByEntryPoint = {
  __typename?: 'BrandEntryPointTrafficByEntryPoint';
  entryPoint: Scalars['String']['output'];
  hitsByDay: Array<BrandEntryPointTrafficHitsByDay>;
};

export type BrandEntryPointTrafficHitsByDay = {
  __typename?: 'BrandEntryPointTrafficHitsByDay';
  date: Scalars['Date']['output'];
  hits: Scalars['Int']['output'];
};

export type BrandEntryPointTrafficInferenceOutput = {
  __typename?: 'BrandEntryPointTrafficInferenceOutput';
  seriesByEntryPoint: Array<BrandEntryPointTrafficByEntryPoint>;
};

export type BrandEntryPointTrafficInferenceParams = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
};

export type BrandMembership = {
  __typename?: 'BrandMembership';
  _id?: Maybe<Scalars['MongoID']['output']>;
  addedAt?: Maybe<Scalars['Date']['output']>;
  addedBy?: Maybe<User>;
  addedById?: Maybe<Scalars['MongoID']['output']>;
  /** Allows to know if some given role is reachable by the user. */
  canReachRole: Scalars['Boolean']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  reachableRoles: Array<Scalars['String']['output']>;
  roles: Array<Scalars['String']['output']>;
  user: User;
  userId: Scalars['MongoID']['output'];
};


export type BrandMembershipCanReachRoleArgs = {
  role: Scalars['String']['input'];
};

/** List of items with pagination. */
export type BrandPagination = {
  __typename?: 'BrandPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<Brand>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type BrandParametersPricing = {
  __typename?: 'BrandParametersPricing';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  useArticleCode?: Maybe<Scalars['Boolean']['output']>;
  useEAN?: Maybe<Scalars['Boolean']['output']>;
};

export type BrandParametersScrapper = {
  __typename?: 'BrandParametersScrapper';
  _id: Scalars['MongoID']['output'];
  allowAnonymousSave: Scalars['Boolean']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  enabled: Scalars['Boolean']['output'];
  export: Scalars['Boolean']['output'];
  geometry: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  objects: Scalars['Boolean']['output'];
  postManualSaveTriggerSteps: Array<BrandParametersScrapperPostManualSaveTriggerSteps>;
  screenshots: Scalars['Boolean']['output'];
  steps: Array<BrandParametersScrapperSteps>;
  watermark: BrandParametersScrapperWatermark;
};

/** A connection to a list of items. */
export type BrandParametersScrapperConnection = {
  __typename?: 'BrandParametersScrapperConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<BrandParametersScrapperEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BrandParametersScrapperEdge = {
  __typename?: 'BrandParametersScrapperEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: BrandParametersScrapper;
};

/** List of items with pagination. */
export type BrandParametersScrapperPagination = {
  __typename?: 'BrandParametersScrapperPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<BrandParametersScrapper>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type BrandParametersScrapperPostManualSaveTriggerSteps = {
  __typename?: 'BrandParametersScrapperPostManualSaveTriggerSteps';
  _id?: Maybe<Scalars['MongoID']['output']>;
  triggerPopup?: Maybe<BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopup>;
  type?: Maybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsType>;
};

export type BrandParametersScrapperPostManualSaveTriggerStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  triggerPopup?: InputMaybe<BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput>;
  type?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsType>;
};

export type BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopup = {
  __typename?: 'BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopup';
  _id?: Maybe<Scalars['MongoID']['output']>;
  buttonType?: Maybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupButtonType>;
  text: Scalars['String']['output'];
  textTranslations: Scalars['Translations']['output'];
  title: Scalars['String']['output'];
  titleTranslations: Scalars['Translations']['output'];
  yesNoButtons?: Maybe<BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtons>;
};


export type BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buttonType?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupButtonType>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  yesNoButtons?: InputMaybe<BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput>;
};

export type BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtons = {
  __typename?: 'BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtons';
  stateProperty?: Maybe<Scalars['String']['output']>;
};

export type BrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput = {
  stateProperty?: InputMaybe<Scalars['String']['input']>;
};

export type BrandParametersScrapperSteps = {
  __typename?: 'BrandParametersScrapperSteps';
  _id?: Maybe<Scalars['MongoID']['output']>;
  filter?: Maybe<BrandParametersScrapperStepsFilter>;
  map?: Maybe<BrandParametersScrapperStepsMap>;
  stepType?: Maybe<EnumBrandParametersScrapperStepsStepType>;
  stepVerb?: Maybe<Scalars['String']['output']>;
  tap?: Maybe<BrandParametersScrapperStepsTap>;
  verbFilter?: Maybe<EnumBrandParametersScrapperStepsVerbFilter>;
  verbMap?: Maybe<EnumBrandParametersScrapperStepsVerbMap>;
  verbTap?: Maybe<EnumBrandParametersScrapperStepsVerbTap>;
};

export type BrandParametersScrapperStepsFilter = {
  __typename?: 'BrandParametersScrapperStepsFilter';
  expression?: Maybe<Scalars['String']['output']>;
};

export type BrandParametersScrapperStepsFilterInput = {
  expression?: InputMaybe<Scalars['String']['input']>;
};

export type BrandParametersScrapperStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  filter?: InputMaybe<BrandParametersScrapperStepsFilterInput>;
  map?: InputMaybe<BrandParametersScrapperStepsMapInput>;
  stepType?: InputMaybe<EnumBrandParametersScrapperStepsStepType>;
  stepVerb?: InputMaybe<Scalars['String']['input']>;
  tap?: InputMaybe<BrandParametersScrapperStepsTapInput>;
  verbFilter?: InputMaybe<EnumBrandParametersScrapperStepsVerbFilter>;
  verbMap?: InputMaybe<EnumBrandParametersScrapperStepsVerbMap>;
  verbTap?: InputMaybe<EnumBrandParametersScrapperStepsVerbTap>;
};

export type BrandParametersScrapperStepsMap = {
  __typename?: 'BrandParametersScrapperStepsMap';
  kitchenPricer?: Maybe<BrandParametersScrapperStepsMapKitchenPricer>;
  payloadGenerator?: Maybe<BrandParametersScrapperStepsMapPayloadGenerator>;
  pdfReportGenerator?: Maybe<BrandParametersScrapperStepsMapPdfReportGenerator>;
  plinthCalculator?: Maybe<BrandParametersScrapperStepsMapPlinthCalculator>;
  reportGenerator?: Maybe<BrandParametersScrapperStepsMapReportGenerator>;
  terracePricer?: Maybe<BrandParametersScrapperStepsMapTerracePricer>;
};

export type BrandParametersScrapperStepsMapInput = {
  kitchenPricer?: InputMaybe<BrandParametersScrapperStepsMapKitchenPricerInput>;
  payloadGenerator?: InputMaybe<BrandParametersScrapperStepsMapPayloadGeneratorInput>;
  pdfReportGenerator?: InputMaybe<BrandParametersScrapperStepsMapPdfReportGeneratorInput>;
  plinthCalculator?: InputMaybe<BrandParametersScrapperStepsMapPlinthCalculatorInput>;
  reportGenerator?: InputMaybe<BrandParametersScrapperStepsMapReportGeneratorInput>;
  terracePricer?: InputMaybe<BrandParametersScrapperStepsMapTerracePricerInput>;
};

export type BrandParametersScrapperStepsMapKitchenPricer = {
  __typename?: 'BrandParametersScrapperStepsMapKitchenPricer';
  apiToken?: Maybe<Scalars['String']['output']>;
  apiUrl?: Maybe<Scalars['String']['output']>;
  barcodeCollectionId?: Maybe<Scalars['MongoID']['output']>;
  projectBaseUrl?: Maybe<Scalars['String']['output']>;
};

export type BrandParametersScrapperStepsMapKitchenPricerInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  barcodeCollectionId?: InputMaybe<Scalars['MongoID']['input']>;
  projectBaseUrl?: InputMaybe<Scalars['String']['input']>;
};

export type BrandParametersScrapperStepsMapPayloadGenerator = {
  __typename?: 'BrandParametersScrapperStepsMapPayloadGenerator';
  addSaveName: Scalars['Boolean']['output'];
  addUpdateToken: Scalars['Boolean']['output'];
  dynamicParameterForTunnelStateInformation: Scalars['String']['output'];
  tunnelStateKeys: Array<Scalars['String']['output']>;
};

export type BrandParametersScrapperStepsMapPayloadGeneratorInput = {
  addSaveName?: InputMaybe<Scalars['Boolean']['input']>;
  addUpdateToken?: InputMaybe<Scalars['Boolean']['input']>;
  dynamicParameterForTunnelStateInformation?: InputMaybe<Scalars['String']['input']>;
  tunnelStateKeys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type BrandParametersScrapperStepsMapPdfReportGenerator = {
  __typename?: 'BrandParametersScrapperStepsMapPdfReportGenerator';
  payloadType?: Maybe<EnumBrandParametersScrapperStepsMapPdfReportGeneratorPayloadType>;
};

export type BrandParametersScrapperStepsMapPdfReportGeneratorInput = {
  payloadType?: InputMaybe<EnumBrandParametersScrapperStepsMapPdfReportGeneratorPayloadType>;
};

export type BrandParametersScrapperStepsMapPlinthCalculator = {
  __typename?: 'BrandParametersScrapperStepsMapPlinthCalculator';
  bigPlinthId?: Maybe<Scalars['MongoID']['output']>;
  littlePlinthId?: Maybe<Scalars['MongoID']['output']>;
};

export type BrandParametersScrapperStepsMapPlinthCalculatorInput = {
  bigPlinthId?: InputMaybe<Scalars['MongoID']['input']>;
  littlePlinthId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type BrandParametersScrapperStepsMapReportGenerator = {
  __typename?: 'BrandParametersScrapperStepsMapReportGenerator';
  chunksManifest?: Maybe<Array<InputDocumentChunkManifest>>;
  documentName?: Maybe<Scalars['String']['output']>;
  htmlTemplate?: Maybe<Scalars['String']['output']>;
  mode: EnumBrandParametersScrapperStepsMapReportGeneratorMode;
};

export type BrandParametersScrapperStepsMapReportGeneratorInput = {
  chunksManifest?: InputMaybe<Array<InputDocumentChunkManifestInput>>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  mode: EnumBrandParametersScrapperStepsMapReportGeneratorMode;
};

export type BrandParametersScrapperStepsMapTerracePricer = {
  __typename?: 'BrandParametersScrapperStepsMapTerracePricer';
  itemsCatalogId?: Maybe<Scalars['MongoID']['output']>;
};

export type BrandParametersScrapperStepsMapTerracePricerInput = {
  itemsCatalogId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type BrandParametersScrapperStepsTap = {
  __typename?: 'BrandParametersScrapperStepsTap';
  outputToApi?: Maybe<BrandParametersScrapperStepsTapOutputToApi>;
  sendEmail?: Maybe<BrandParametersScrapperStepsTapSendEmail>;
};

export type BrandParametersScrapperStepsTapInput = {
  outputToApi?: InputMaybe<BrandParametersScrapperStepsTapOutputToApiInput>;
  sendEmail?: InputMaybe<BrandParametersScrapperStepsTapSendEmailInput>;
};

export type BrandParametersScrapperStepsTapOutputToApi = {
  __typename?: 'BrandParametersScrapperStepsTapOutputToApi';
  apiToken?: Maybe<Scalars['String']['output']>;
  apiUrl?: Maybe<Scalars['String']['output']>;
  signPayload?: Maybe<Scalars['Boolean']['output']>;
};

export type BrandParametersScrapperStepsTapOutputToApiInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  signPayload?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BrandParametersScrapperStepsTapSendEmail = {
  __typename?: 'BrandParametersScrapperStepsTapSendEmail';
  attachmentName?: Maybe<Scalars['String']['output']>;
  dynamicParameterEmailAdress?: Maybe<Scalars['String']['output']>;
  emailSourceType?: Maybe<EnumBrandParametersScrapperStepsTapSendEmailEmailSourceType>;
  sendReportAsAttachment?: Maybe<Scalars['Boolean']['output']>;
  staticEmailAdress?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  template?: Maybe<Scalars['String']['output']>;
};

export type BrandParametersScrapperStepsTapSendEmailInput = {
  attachmentName?: InputMaybe<Scalars['String']['input']>;
  dynamicParameterEmailAdress?: InputMaybe<Scalars['String']['input']>;
  emailSourceType?: InputMaybe<EnumBrandParametersScrapperStepsTapSendEmailEmailSourceType>;
  sendReportAsAttachment?: InputMaybe<Scalars['Boolean']['input']>;
  staticEmailAdress?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
};

export type BrandParametersScrapperWatermark = {
  __typename?: 'BrandParametersScrapperWatermark';
  alpha: Scalars['Float']['output'];
  color: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  picture: Scalars['String']['output'];
  repetition: Scalars['Float']['output'];
};

export type BrandParametersScrapperWatermarkInput = {
  alpha?: InputMaybe<Scalars['Float']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  repetition?: InputMaybe<Scalars['Float']['input']>;
};

export type BrandParametersTunnel = {
  __typename?: 'BrandParametersTunnel';
  _id: Scalars['MongoID']['output'];
  apertureParameters: BrandParametersTunnelApertureParameters;
  brand: Brand;
  brandId?: Maybe<Scalars['MongoID']['output']>;
  cache: BrandParametersTunnelCache;
  colorsParameters: BrandParametersTunnelColorsParameters;
  customLinkButton?: Maybe<BrandParametersTunnelCustomLinkButton>;
  defaultCameraParameters: BrandParametersTunnelDefaultCameraParameters;
  defaultCoatingParameters: BrandParametersTunnelDefaultCoatingParameters;
  defaultDayTime?: Maybe<Scalars['Float']['output']>;
  defaultSnapDistance: Scalars['Float']['output'];
  disableHeaderShadow?: Maybe<Scalars['Boolean']['output']>;
  displayCartItemNumber: Scalars['Boolean']['output'];
  displayCustomisationTagFurnitureOptions: Scalars['Boolean']['output'];
  displayFurnitureSubstitutesOptions: Scalars['Boolean']['output'];
  displaySaveName: Scalars['Boolean']['output'];
  displayStepsHeader?: Maybe<Scalars['Boolean']['output']>;
  enabled: Scalars['Boolean']['output'];
  globalOptions: Array<Scalars['String']['output']>;
  includeAllBrandItemsInCache: Scalars['Boolean']['output'];
  initialStepIfLoadingSave?: Maybe<Scalars['Float']['output']>;
  isReloadFromLocalStorageEnabled: Scalars['Boolean']['output'];
  logoLinkOnClick?: Maybe<Scalars['String']['output']>;
  logoPictureReference?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  persistentVariables: Array<BrandParametersTunnelPersistentVariables>;
  preload: Scalars['Boolean']['output'];
  savePanelParameters: BrandParametersTunnelSavePanelParameters;
  steps: Array<BrandParametersTunnelStep>;
  wallParameters: BrandParametersTunnelWallParameters;
};

export type BrandParametersTunnelApertureParameters = {
  __typename?: 'BrandParametersTunnelApertureParameters';
  doorClassicDefaultItem?: Maybe<Scalars['String']['output']>;
  doorEntryDefaultItem?: Maybe<Scalars['String']['output']>;
  doorEntrySidelightDefaultItem?: Maybe<Scalars['String']['output']>;
  doorExteriorCustomisationItemsGroupId?: Maybe<Scalars['String']['output']>;
  doorInteriorCustomisationItemsGroupId?: Maybe<Scalars['String']['output']>;
  doubleDoorDefaultItem?: Maybe<Scalars['String']['output']>;
  doubleDoorlikeWindowDefaultItem?: Maybe<Scalars['String']['output']>;
  doubleSwingDoorDefaultItem?: Maybe<Scalars['String']['output']>;
  doubleWindowDefaultItem?: Maybe<Scalars['String']['output']>;
  garageDoorDefaultItem?: Maybe<Scalars['String']['output']>;
  simpleDoorlikeWindowDefaultItem?: Maybe<Scalars['String']['output']>;
  slitWindowDefaultItem?: Maybe<Scalars['String']['output']>;
  tripleDoorlikeWindowDefaultItem?: Maybe<Scalars['String']['output']>;
  tripleWindowDefaultItem?: Maybe<Scalars['String']['output']>;
  windowCustomisationItemsGroupId?: Maybe<Scalars['String']['output']>;
  windowDefaultItem?: Maybe<Scalars['String']['output']>;
};

export type BrandParametersTunnelApertureParametersInput = {
  doorClassicDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntryDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntrySidelightDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorExteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doorInteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doubleDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleSwingDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  garageDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  simpleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  slitWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  windowCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  windowDefaultItem?: InputMaybe<Scalars['String']['input']>;
};

export type BrandParametersTunnelCache = {
  __typename?: 'BrandParametersTunnelCache';
  catalogFolderIds: Array<Scalars['MongoID']['output']>;
  catalogFolders: Array<CatalogFolder>;
  itemIds: Array<Scalars['MongoID']['output']>;
  items: Array<Item>;
  itemsGroupIds: Array<Scalars['MongoID']['output']>;
  itemsGroups: Array<ItemsGroup>;
  pictureIds: Array<Scalars['MongoID']['output']>;
  pictures: Array<Picture>;
};

export type BrandParametersTunnelColorsParameters = {
  __typename?: 'BrandParametersTunnelColorsParameters';
  nameHelpAtlas?: Maybe<Scalars['String']['output']>;
  nameOptionsAtlas?: Maybe<Scalars['String']['output']>;
  nameToolsAtlas?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Scalars['String']['output']>;
  secondary?: Maybe<Scalars['String']['output']>;
  stepperBackground?: Maybe<Scalars['String']['output']>;
  stepperContent?: Maybe<Scalars['String']['output']>;
  stepperText?: Maybe<Scalars['String']['output']>;
  tertiary?: Maybe<Scalars['String']['output']>;
};

export type BrandParametersTunnelColorsParametersInput = {
  nameHelpAtlas?: InputMaybe<Scalars['String']['input']>;
  nameOptionsAtlas?: InputMaybe<Scalars['String']['input']>;
  nameToolsAtlas?: InputMaybe<Scalars['String']['input']>;
  primary?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type BrandParametersTunnelCustomLinkButton = {
  __typename?: 'BrandParametersTunnelCustomLinkButton';
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BrandParametersTunnelCustomLinkButtonInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BrandParametersTunnelDefaultCameraParameters = {
  __typename?: 'BrandParametersTunnelDefaultCameraParameters';
  visitCameraParameters: BrandParametersTunnelDefaultCameraParametersVisitCameraParameters;
};

export type BrandParametersTunnelDefaultCameraParametersInput = {
  visitCameraParameters?: InputMaybe<BrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput>;
};

export type BrandParametersTunnelDefaultCameraParametersVisitCameraParameters = {
  __typename?: 'BrandParametersTunnelDefaultCameraParametersVisitCameraParameters';
  defaultVisitFieldOfView: Scalars['Float']['output'];
};

export type BrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput = {
  defaultVisitFieldOfView?: InputMaybe<Scalars['Float']['input']>;
};

export type BrandParametersTunnelDefaultCoatingParameters = {
  __typename?: 'BrandParametersTunnelDefaultCoatingParameters';
  defaultExteriorFlooringId?: Maybe<Scalars['MongoID']['output']>;
  defaultGardenFlooringId?: Maybe<Scalars['MongoID']['output']>;
  defaultInteriorFlooringId?: Maybe<Scalars['MongoID']['output']>;
};

export type BrandParametersTunnelDefaultCoatingParametersInput = {
  defaultExteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultGardenFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultInteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type BrandParametersTunnelPersistentVariables = {
  __typename?: 'BrandParametersTunnelPersistentVariables';
  config?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BrandParametersTunnelPersistentVariablesInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BrandParametersTunnelSavePanelParameters = {
  __typename?: 'BrandParametersTunnelSavePanelParameters';
  isCustomerModuleEnabled?: Maybe<Scalars['Boolean']['output']>;
  isExportButtonEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type BrandParametersTunnelSavePanelParametersInput = {
  isCustomerModuleEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isExportButtonEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BrandParametersTunnelStep = {
  __typename?: 'BrandParametersTunnelStep';
  _id?: Maybe<Scalars['MongoID']['output']>;
  analytics?: Maybe<BrandParametersTunnelStepsAnalytics>;
  config?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  htmlTemplate?: Maybe<Scalars['String']['output']>;
  isShownInStepper?: Maybe<Scalars['Boolean']['output']>;
  module: EnumBrandParametersTunnelStepsModule;
  name?: Maybe<Scalars['String']['output']>;
  publicName: Scalars['String']['output'];
  publicNameTranslations: Scalars['Translations']['output'];
  resetTunnelOnActivation?: Maybe<Scalars['Boolean']['output']>;
};


export type BrandParametersTunnelStepPublicNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BrandParametersTunnelStepInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  analytics?: InputMaybe<BrandParametersTunnelStepsAnalyticsInput>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  isShownInStepper?: InputMaybe<Scalars['Boolean']['input']>;
  module: EnumBrandParametersTunnelStepsModule;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  resetTunnelOnActivation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BrandParametersTunnelStepsAnalytics = {
  __typename?: 'BrandParametersTunnelStepsAnalytics';
  choiceReducer?: Maybe<BrandParametersTunnelStepsAnalyticsChoiceReducer>;
};

export type BrandParametersTunnelStepsAnalyticsChoiceReducer = {
  __typename?: 'BrandParametersTunnelStepsAnalyticsChoiceReducer';
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  stateProperties?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type BrandParametersTunnelStepsAnalyticsChoiceReducerInput = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  stateProperties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BrandParametersTunnelStepsAnalyticsInput = {
  choiceReducer?: InputMaybe<BrandParametersTunnelStepsAnalyticsChoiceReducerInput>;
};

export type BrandParametersTunnelWallParameters = {
  __typename?: 'BrandParametersTunnelWallParameters';
  doorLintelLevel?: Maybe<Scalars['Float']['output']>;
  exteriorCeilingLintelHeight?: Maybe<Scalars['Float']['output']>;
  exteriorWallThickness?: Maybe<BrandParametersTunnelWallParametersExteriorWallThickness>;
  floorHeight?: Maybe<Scalars['Float']['output']>;
  groundFloorLevel?: Maybe<Scalars['Float']['output']>;
  innerHeight?: Maybe<Scalars['Float']['output']>;
  interiorCeilingLintelHeight?: Maybe<Scalars['Float']['output']>;
  interiorWallThickness?: Maybe<BrandParametersTunnelWallParametersInteriorWallThickness>;
  optionsPanelWallConfig?: Maybe<BrandParametersTunnelWallParametersOptionsPanelWallConfig>;
  windowLintelLevel?: Maybe<Scalars['Float']['output']>;
  windowSillLevel?: Maybe<Scalars['Float']['output']>;
};

export type BrandParametersTunnelWallParametersExteriorWallThickness = {
  __typename?: 'BrandParametersTunnelWallParametersExteriorWallThickness';
  canUseCustomValue?: Maybe<Scalars['Boolean']['output']>;
  defaultWallThickness?: Maybe<Scalars['Float']['output']>;
  wallThicknessDropdownValues?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type BrandParametersTunnelWallParametersExteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type BrandParametersTunnelWallParametersInput = {
  doorLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  exteriorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  exteriorWallThickness?: InputMaybe<BrandParametersTunnelWallParametersExteriorWallThicknessInput>;
  floorHeight?: InputMaybe<Scalars['Float']['input']>;
  groundFloorLevel?: InputMaybe<Scalars['Float']['input']>;
  innerHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorWallThickness?: InputMaybe<BrandParametersTunnelWallParametersInteriorWallThicknessInput>;
  optionsPanelWallConfig?: InputMaybe<BrandParametersTunnelWallParametersOptionsPanelWallConfigInput>;
  windowLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  windowSillLevel?: InputMaybe<Scalars['Float']['input']>;
};

export type BrandParametersTunnelWallParametersInteriorWallThickness = {
  __typename?: 'BrandParametersTunnelWallParametersInteriorWallThickness';
  canUseCustomValue?: Maybe<Scalars['Boolean']['output']>;
  defaultWallThickness?: Maybe<Scalars['Float']['output']>;
  wallThicknessDropdownValues?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type BrandParametersTunnelWallParametersInteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type BrandParametersTunnelWallParametersOptionsPanelWallConfig = {
  __typename?: 'BrandParametersTunnelWallParametersOptionsPanelWallConfig';
  displayOnlyWallType?: Maybe<Scalars['Boolean']['output']>;
  displayWallHeightExteriorFloor?: Maybe<Scalars['Boolean']['output']>;
  displayWallHeightInteriorFloor?: Maybe<Scalars['Boolean']['output']>;
  displayWallThicknessDropdown?: Maybe<Scalars['Boolean']['output']>;
  displayWallThicknessInput?: Maybe<Scalars['Boolean']['output']>;
  usePartitionLabelForInteriorWall?: Maybe<Scalars['Boolean']['output']>;
};

export type BrandParametersTunnelWallParametersOptionsPanelWallConfigInput = {
  displayOnlyWallType?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightExteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightInteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessDropdown?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessInput?: InputMaybe<Scalars['Boolean']['input']>;
  usePartitionLabelForInteriorWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BrandPromoterWebsiteConfiguration = {
  __typename?: 'BrandPromoterWebsiteConfiguration';
  acquirerValidateUnitAccessPointId?: Maybe<Scalars['MongoID']['output']>;
  metadataConfiguration: BrandPromoterWebsiteConfigurationMetadataConfiguration;
  operatorTypeAccessPointId?: Maybe<Scalars['MongoID']['output']>;
  promoterValidateTypeAccessPointId?: Maybe<Scalars['MongoID']['output']>;
  unitTypeSaveModelId?: Maybe<Scalars['MongoID']['output']>;
};

export type BrandPromoterWebsiteConfigurationInput = {
  acquirerValidateUnitAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  metadataConfiguration?: InputMaybe<BrandPromoterWebsiteConfigurationMetadataConfigurationInput>;
  operatorTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  promoterValidateTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  unitTypeSaveModelId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type BrandPromoterWebsiteConfigurationMetadataConfiguration = {
  __typename?: 'BrandPromoterWebsiteConfigurationMetadataConfiguration';
  apartmentUnitMetadata: Array<BrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadata>;
  apartmentUnitTypeIdMetadataKey?: Maybe<Scalars['String']['output']>;
  apartmentUnitTypeMetadata: Array<BrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadata>;
  programMetadata: Array<BrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadata>;
};

export type BrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadata = {
  __typename?: 'BrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadata';
  _id?: Maybe<Scalars['MongoID']['output']>;
  label: Scalars['String']['output'];
  shouldDisplayInEnumerationTool: Scalars['Boolean']['output'];
  shouldDisplayInIndexTable: Scalars['Boolean']['output'];
  type: EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataType;
};

export type BrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label: Scalars['String']['input'];
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataType>;
};

export type BrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadata = {
  __typename?: 'BrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadata';
  _id?: Maybe<Scalars['MongoID']['output']>;
  label: Scalars['String']['output'];
  shouldDisplayInEnumerationTool: Scalars['Boolean']['output'];
  shouldDisplayInIndexTable: Scalars['Boolean']['output'];
  type: EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataType;
};

export type BrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label: Scalars['String']['input'];
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataType>;
};

export type BrandPromoterWebsiteConfigurationMetadataConfigurationInput = {
  apartmentUnitMetadata?: InputMaybe<Array<BrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput>>;
  apartmentUnitTypeIdMetadataKey?: InputMaybe<Scalars['String']['input']>;
  apartmentUnitTypeMetadata?: InputMaybe<Array<BrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput>>;
  programMetadata?: InputMaybe<Array<BrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput>>;
};

export type BrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadata = {
  __typename?: 'BrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadata';
  _id?: Maybe<Scalars['MongoID']['output']>;
  label: Scalars['String']['output'];
  shouldDisplayInIndexTable: Scalars['Boolean']['output'];
  type: EnumBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataType;
};

export type BrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label: Scalars['String']['input'];
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataType>;
};

export type BrandPublicInfo = {
  __typename?: 'BrandPublicInfo';
  _id: Scalars['MongoID']['output'];
  colors?: Maybe<BrandColors>;
  name: Scalars['String']['output'];
};

export type BrandSatelliteConfiguration = {
  __typename?: 'BrandSatelliteConfiguration';
  satelliteUrl?: Maybe<Scalars['String']['output']>;
};

export type BrandSatelliteConfigurationInput = {
  satelliteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type BrandUniqueVisitorsByEntryPoint = {
  __typename?: 'BrandUniqueVisitorsByEntryPoint';
  entryPoint: Scalars['String']['output'];
  visitors: Scalars['Int']['output'];
};

export type BrandUniqueVisitorsInferenceOutput = {
  __typename?: 'BrandUniqueVisitorsInferenceOutput';
  visitorsByEntryPoint: Array<BrandUniqueVisitorsByEntryPoint>;
};

export type BrandUniqueVisitorsInferenceParams = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
};

export type BrandUsersAddRecord = {
  /**
   * The email of the user.
   * If the user already is a registered myDecoCloud user, their account will be reused.
   */
  email: Scalars['String']['input'];
  /** Additionnal data for the user to store customer related information. */
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  /**
   * The full name of the user.
   * If the user already has a myDecoCloud account, the previous name will be kept and this value discarded.
   */
  name: Scalars['String']['input'];
  /**
   * The list of roles that the user will get in your brand (through their membership).
   * By default no role is set.
   */
  roles?: Array<Scalars['String']['input']>;
};

export type BrandUsersLoginPayload = {
  __typename?: 'BrandUsersLoginPayload';
  token: Scalars['String']['output'];
};

export type BrandUsersMergePayload = {
  __typename?: 'BrandUsersMergePayload';
  membership: BrandMembership;
  updatedDocuments: Array<BrandUsersMergePayloadUpdatedDocument>;
  user: User;
};

export type BrandUsersMergePayloadUpdatedDocument = {
  __typename?: 'BrandUsersMergePayloadUpdatedDocument';
  id: Scalars['MongoID']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type BrandUsersUpdateRecord = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogFolder = {
  __typename?: 'CatalogFolder';
  _id: Scalars['MongoID']['output'];
  associatedEcotaxePriceTableId?: Maybe<Scalars['MongoID']['output']>;
  associatedPriceTableId?: Maybe<Scalars['MongoID']['output']>;
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  children: Array<CatalogFolder>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['MongoID']['output']>;
  iconId?: Maybe<Scalars['Int']['output']>;
  /** Access to the items directly in this catalog folder */
  items: Array<Item>;
  metadata?: Maybe<Array<Maybe<CatalogFolderMetadata>>>;
  name: Scalars['String']['output'];
  parent?: Maybe<CatalogFolder>;
  parentId?: Maybe<Scalars['MongoID']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
  publicName: Scalars['String']['output'];
  publicNameTranslations: Scalars['Translations']['output'];
  published?: Maybe<Scalars['Boolean']['output']>;
  root?: Maybe<CatalogFolder>;
  rootId?: Maybe<Scalars['MongoID']['output']>;
  sharedWith: Array<Brand>;
  sharedWithIds: Array<Scalars['MongoID']['output']>;
  thumbnailId?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  tiles: Array<CatalogFolderTile>;
  tilesBackgroundColor?: Maybe<Scalars['String']['output']>;
  tilesColumnAmount?: Maybe<Scalars['Float']['output']>;
  tilesColumnGap?: Maybe<Scalars['Float']['output']>;
  tilesColumnSizes?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  tilesRowGap?: Maybe<Scalars['Float']['output']>;
  tilesRowSizes?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  type?: Maybe<EnumCatalogFolderType>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  virtual?: Maybe<Scalars['Boolean']['output']>;
};


export type CatalogFolderChildrenArgs = {
  filter?: InputMaybe<FilterFindManyCatalogFolderInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCatalogFolderInput>;
};


export type CatalogFolderPublicNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type CatalogFolderSharedWithArgs = {
  filter?: InputMaybe<FilterFindManyBrandInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBrandInput>;
};

export type CatalogFolderMetadata = {
  __typename?: 'CatalogFolderMetadata';
  _id?: Maybe<Scalars['MongoID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CatalogFolderMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogFolderTile = {
  __typename?: 'CatalogFolderTile';
  _id?: Maybe<Scalars['MongoID']['output']>;
  advancedText: Scalars['String']['output'];
  advancedTextTranslations: Scalars['Translations']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  backgroundOpacity?: Maybe<Scalars['Float']['output']>;
  borderRadius?: Maybe<Scalars['Float']['output']>;
  catalogFolder?: Maybe<CatalogFolder>;
  catalogFolderId?: Maybe<Scalars['MongoID']['output']>;
  catalogSourceId?: Maybe<Scalars['MongoID']['output']>;
  descriptionTextSize?: Maybe<Scalars['Float']['output']>;
  folder?: Maybe<Scalars['MongoID']['output']>;
  hasShadow?: Maybe<Scalars['Boolean']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  horizontalTextAlignement?: Maybe<EnumCatalogFolderTilesHorizontalTextAlignement>;
  imageId?: Maybe<Scalars['String']['output']>;
  imagePlacement?: Maybe<CatalogFolderTilesImagePlacement>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isImagePlacementFree?: Maybe<Scalars['Boolean']['output']>;
  isShownOnDesktop?: Maybe<Scalars['Boolean']['output']>;
  isShownOnMobile?: Maybe<Scalars['Boolean']['output']>;
  item?: Maybe<Item>;
  itemId?: Maybe<Scalars['MongoID']['output']>;
  itemsGroup?: Maybe<Scalars['MongoID']['output']>;
  mask?: Maybe<Scalars['Boolean']['output']>;
  maskColor?: Maybe<Scalars['String']['output']>;
  maskOpacity?: Maybe<Scalars['Float']['output']>;
  metadata: Array<CatalogFolderTileMetadata>;
  posX?: Maybe<Scalars['Float']['output']>;
  posY?: Maybe<Scalars['Float']['output']>;
  /** Get the lowest and highest price available for the tile if it's an item tile */
  priceInfo?: Maybe<TilePriceInfo>;
  save?: Maybe<Save>;
  saveId?: Maybe<Scalars['MongoID']['output']>;
  saveSelectedInTunnelStateVariable?: Maybe<Scalars['String']['output']>;
  stylePreset?: Maybe<StylePreset>;
  stylePresetId?: Maybe<Scalars['MongoID']['output']>;
  textColor?: Maybe<Scalars['String']['output']>;
  textDescription: Scalars['String']['output'];
  textDescriptionTranslations: Scalars['Translations']['output'];
  textPadding?: Maybe<CatalogFolderTilesTextPadding>;
  textTitle: Scalars['String']['output'];
  textTitleTranslations: Scalars['Translations']['output'];
  titleTextColor?: Maybe<Scalars['String']['output']>;
  titleTextSize?: Maybe<Scalars['Float']['output']>;
  tooltip: Scalars['String']['output'];
  tooltipTranslations: Scalars['Translations']['output'];
  type?: Maybe<EnumCatalogFolderTilesType>;
  useAdvancedText?: Maybe<Scalars['Boolean']['output']>;
  verticalTextAlignement?: Maybe<EnumCatalogFolderTilesVerticalTextAlignement>;
  width?: Maybe<Scalars['Float']['output']>;
};


export type CatalogFolderTileAdvancedTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type CatalogFolderTileTextDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type CatalogFolderTileTextTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type CatalogFolderTileTooltipArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogFolderTileMetadata = {
  __typename?: 'CatalogFolderTileMetadata';
  _id?: Maybe<Scalars['MongoID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CatalogFolderTilesImagePlacement = {
  __typename?: 'CatalogFolderTilesImagePlacement';
  bottom?: Maybe<Scalars['Float']['output']>;
  left?: Maybe<Scalars['Float']['output']>;
  right?: Maybe<Scalars['Float']['output']>;
  top?: Maybe<Scalars['Float']['output']>;
};

export type CatalogFolderTilesImagePlacementInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type CatalogFolderTilesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  advancedTextTranslations?: InputMaybe<Scalars['Translations']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundOpacity?: InputMaybe<Scalars['Float']['input']>;
  borderRadius?: InputMaybe<Scalars['Float']['input']>;
  catalogSourceId?: InputMaybe<Scalars['MongoID']['input']>;
  construction?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionTextSize?: InputMaybe<Scalars['Float']['input']>;
  folder?: InputMaybe<Scalars['MongoID']['input']>;
  hasShadow?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  horizontalTextAlignement?: InputMaybe<EnumCatalogFolderTilesHorizontalTextAlignement>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  imagePlacement?: InputMaybe<CatalogFolderTilesImagePlacementInput>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isImagePlacementFree?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  item?: InputMaybe<Scalars['MongoID']['input']>;
  itemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  mask?: InputMaybe<Scalars['Boolean']['input']>;
  maskColor?: InputMaybe<Scalars['String']['input']>;
  maskOpacity?: InputMaybe<Scalars['Float']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<CatalogFolderTilesMetadataInput>>>;
  posX?: InputMaybe<Scalars['Float']['input']>;
  posY?: InputMaybe<Scalars['Float']['input']>;
  saveSelectedInTunnelStateVariable?: InputMaybe<Scalars['String']['input']>;
  stylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textDescriptionTranslations?: InputMaybe<Scalars['Translations']['input']>;
  textPadding?: InputMaybe<CatalogFolderTilesTextPaddingInput>;
  textTitleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTextColor?: InputMaybe<Scalars['String']['input']>;
  titleTextSize?: InputMaybe<Scalars['Float']['input']>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumCatalogFolderTilesType>;
  useAdvancedText?: InputMaybe<Scalars['Boolean']['input']>;
  verticalTextAlignement?: InputMaybe<EnumCatalogFolderTilesVerticalTextAlignement>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type CatalogFolderTilesMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogFolderTilesTextPadding = {
  __typename?: 'CatalogFolderTilesTextPadding';
  bottom?: Maybe<Scalars['Float']['output']>;
  left?: Maybe<Scalars['Float']['output']>;
  right?: Maybe<Scalars['Float']['output']>;
  top?: Maybe<Scalars['Float']['output']>;
};

export type CatalogFolderTilesTextPaddingInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['MongoID']['output'];
  name?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['MongoID']['output']>;
};

export type ContactInformation = {
  __typename?: 'ContactInformation';
  _id: Scalars['MongoID']['output'];
  date: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  interlocutor: Scalars['String']['output'];
  message: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  state: EnumContactInformationState;
};

/** List of items with pagination. */
export type ContactInformationPagination = {
  __typename?: 'ContactInformationPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<ContactInformation>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type CreateOneAccessPointInput = {
  areSavesPubliclyAvailableById?: InputMaybe<Scalars['Boolean']['input']>;
  authorizedCatalogIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  brandId: Scalars['MongoID']['input'];
  ecotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  name: Scalars['String']['input'];
  parametersScrapperId?: InputMaybe<Scalars['MongoID']['input']>;
  parametersTunnelId: Scalars['MongoID']['input'];
  priceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  supportButton?: InputMaybe<AccessPointSupportButtonInput>;
};

export type CreateOneAccessPointPayload = {
  __typename?: 'CreateOneAccessPointPayload';
  /** Created document */
  record?: Maybe<AccessPoint>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneAppletInput = {
  encoding?: InputMaybe<EnumAppletEncoding>;
  indexedDbResetVersion?: InputMaybe<Scalars['String']['input']>;
  redirectedVersion?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['String']['input'];
};

export type CreateOneAppletPayload = {
  __typename?: 'CreateOneAppletPayload';
  /** Created document */
  record?: Maybe<Applet>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneBarcodeCollectionInput = {
  barcodeReferences?: InputMaybe<Array<BarcodeCollectionBarcodeReferencesInput>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

export type CreateOneBarcodeCollectionPayload = {
  __typename?: 'CreateOneBarcodeCollectionPayload';
  /** Created document */
  record?: Maybe<BarcodeCollection>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneBrandInput = {
  colors?: InputMaybe<BrandColorsInput>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name: Scalars['String']['input'];
  promoterWebsiteConfiguration?: InputMaybe<BrandPromoterWebsiteConfigurationInput>;
  satelliteConfiguration?: InputMaybe<BrandSatelliteConfigurationInput>;
  shareCode?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type CreateOneBrandParametersPricingInput = {
  brandId: Scalars['MongoID']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  useArticleCode?: InputMaybe<Scalars['Boolean']['input']>;
  useEAN?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateOneBrandParametersPricingPayload = {
  __typename?: 'CreateOneBrandParametersPricingPayload';
  /** Created document */
  record?: Maybe<BrandParametersPricing>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneBrandParametersScrapperInput = {
  allowAnonymousSave?: InputMaybe<Scalars['Boolean']['input']>;
  brandId: Scalars['MongoID']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  export?: InputMaybe<Scalars['Boolean']['input']>;
  geometry?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  objects?: InputMaybe<Scalars['Boolean']['input']>;
  postManualSaveTriggerSteps?: InputMaybe<Array<BrandParametersScrapperPostManualSaveTriggerStepsInput>>;
  screenshots?: InputMaybe<Scalars['Boolean']['input']>;
  steps?: InputMaybe<Array<BrandParametersScrapperStepsInput>>;
  watermark?: InputMaybe<BrandParametersScrapperWatermarkInput>;
};

export type CreateOneBrandParametersScrapperPayload = {
  __typename?: 'CreateOneBrandParametersScrapperPayload';
  /** Created document */
  record?: Maybe<BrandParametersScrapper>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneBrandParametersTunnelInput = {
  apertureParameters?: InputMaybe<BrandParametersTunnelApertureParametersInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colorsParameters?: InputMaybe<BrandParametersTunnelColorsParametersInput>;
  customLinkButton?: InputMaybe<BrandParametersTunnelCustomLinkButtonInput>;
  defaultCameraParameters?: InputMaybe<BrandParametersTunnelDefaultCameraParametersInput>;
  defaultCoatingParameters?: InputMaybe<BrandParametersTunnelDefaultCoatingParametersInput>;
  defaultDayTime?: InputMaybe<Scalars['Float']['input']>;
  defaultSnapDistance?: InputMaybe<Scalars['Float']['input']>;
  disableHeaderShadow?: InputMaybe<Scalars['Boolean']['input']>;
  displayCartItemNumber?: InputMaybe<Scalars['Boolean']['input']>;
  displayCustomisationTagFurnitureOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displayFurnitureSubstitutesOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displaySaveName?: InputMaybe<Scalars['Boolean']['input']>;
  displayStepsHeader?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  globalOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  includeAllBrandItemsInCache?: InputMaybe<Scalars['Boolean']['input']>;
  initialStepIfLoadingSave?: InputMaybe<Scalars['Float']['input']>;
  isReloadFromLocalStorageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  logoLinkOnClick?: InputMaybe<Scalars['String']['input']>;
  logoPictureReference?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  persistentVariables?: InputMaybe<Array<BrandParametersTunnelPersistentVariablesInput>>;
  preload?: InputMaybe<Scalars['Boolean']['input']>;
  savePanelParameters?: InputMaybe<BrandParametersTunnelSavePanelParametersInput>;
  steps?: InputMaybe<Array<BrandParametersTunnelStepInput>>;
  wallParameters?: InputMaybe<BrandParametersTunnelWallParametersInput>;
};

export type CreateOneBrandParametersTunnelPayload = {
  __typename?: 'CreateOneBrandParametersTunnelPayload';
  /** Created document */
  record?: Maybe<BrandParametersTunnel>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneBrandPayload = {
  __typename?: 'CreateOneBrandPayload';
  /** Created document */
  record?: Maybe<Brand>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneCatalogFolderInput = {
  associatedEcotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  brand: Scalars['MongoID']['input'];
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  iconId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<CatalogFolderMetadataInput>>>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  rootId?: InputMaybe<Scalars['MongoID']['input']>;
  sharedWithIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailId?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tiles?: InputMaybe<Array<InputMaybe<CatalogFolderTilesInput>>>;
  tilesBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  tilesColumnAmount?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnGap?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  tilesRowGap?: InputMaybe<Scalars['Float']['input']>;
  tilesRowSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  type?: InputMaybe<EnumCatalogFolderType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  virtual?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateOneCatalogFolderPayload = {
  __typename?: 'CreateOneCatalogFolderPayload';
  /** Created document */
  record?: Maybe<CatalogFolder>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneCustomerInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  brandId: Scalars['MongoID']['input'];
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById: Scalars['MongoID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstname: Scalars['String']['input'];
  firstnameAdditional?: InputMaybe<Scalars['String']['input']>;
  gender: Scalars['String']['input'];
  genderAdditional?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  surname: Scalars['String']['input'];
  surnameAdditional?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOneCustomerPayload = {
  __typename?: 'CreateOneCustomerPayload';
  /** Created document */
  record?: Maybe<Customer>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneItemInput = {
  articleCode?: InputMaybe<Scalars['String']['input']>;
  brandId: Scalars['MongoID']['input'];
  buildingWingInfos?: InputMaybe<Scalars['String']['input']>;
  canBeCutAlongHeight?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongLength?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongWidth?: InputMaybe<Scalars['Boolean']['input']>;
  canBeDroppedOnZones?: InputMaybe<Array<EnumItemCanBeDroppedOnZones>>;
  categoriesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  compositeInfos?: InputMaybe<Scalars['String']['input']>;
  consideredAsDroppableZones?: InputMaybe<Array<EnumItemConsideredAsDroppableZones>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  customisationByItemsGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationCoverPlanes?: InputMaybe<Array<ItemCustomisationCoverPlanesInput>>;
  customisationMaterials?: InputMaybe<Array<ItemCustomisationMaterialsInput>>;
  customisationSubObjects?: InputMaybe<Array<ItemCustomisationSubObjectsInput>>;
  customisationSymbolicRepresentation?: InputMaybe<ItemCustomisationSymbolicRepresentationInput>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  factSheet?: InputMaybe<ItemFactSheetInput>;
  guardrailInformations?: InputMaybe<ItemGuardrailInformationsInput>;
  metadata?: InputMaybe<Array<ItemMetadataInput>>;
  minimumPricedDimensions?: InputMaybe<ItemMinimumPricedDimensionsInput>;
  modelUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  outputAssets?: InputMaybe<ItemOutputAssetsInput>;
  physicalHeight?: InputMaybe<Scalars['String']['input']>;
  physicalLength?: InputMaybe<Scalars['String']['input']>;
  physicalWidth?: InputMaybe<Scalars['String']['input']>;
  pillarInformations?: InputMaybe<ItemPillarInformationsInput>;
  priceCoefExclusion?: InputMaybe<Scalars['Boolean']['input']>;
  priceGeneration?: InputMaybe<EnumItemPriceGeneration>;
  priceUnit?: InputMaybe<EnumItemPriceUnit>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  roofInformations?: InputMaybe<ItemRoofInformationsInput>;
  scrapperTag?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stairsInformations?: InputMaybe<ItemStairsInformationsInput>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tooltip3DTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumItemType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
  vegetationInformations?: InputMaybe<ItemVegetationInformationsInput>;
  wallInformations?: InputMaybe<ItemWallInformationsInput>;
};

export type CreateOneItemPayload = {
  __typename?: 'CreateOneItemPayload';
  /** Created document */
  record?: Maybe<Item>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneItemsGroupInput = {
  brandId: Scalars['MongoID']['input'];
  choiceIsMandatory: Scalars['Boolean']['input'];
  generated?: InputMaybe<Scalars['Boolean']['input']>;
  itemsIds: Array<Scalars['MongoID']['input']>;
  name: Scalars['String']['input'];
  option?: InputMaybe<ItemsGroupOptionInput>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  shouldBeOpenInGUI?: InputMaybe<Scalars['Boolean']['input']>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type: EnumItemsGroupType;
};

export type CreateOneItemsGroupPayload = {
  __typename?: 'CreateOneItemsGroupPayload';
  /** Created document */
  record?: Maybe<ItemsGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOnePaletteInput = {
  brandId: Scalars['MongoID']['input'];
  colors?: InputMaybe<Array<InputMaybe<PaletteColorsInput>>>;
  name: Scalars['String']['input'];
  type: EnumPaletteType;
};

export type CreateOnePalettePayload = {
  __typename?: 'CreateOnePalettePayload';
  /** Created document */
  record?: Maybe<Palette>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOnePictureInput = {
  brandId: Scalars['MongoID']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Float']['input'];
  url: Scalars['String']['input'];
};

export type CreateOnePicturePayload = {
  __typename?: 'CreateOnePicturePayload';
  /** Created document */
  record?: Maybe<Picture>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOnePlannedMaintenanceInput = {
  durationHours: Scalars['Float']['input'];
  reasonTranslations?: InputMaybe<Scalars['Translations']['input']>;
  startDate: Scalars['Date']['input'];
};

export type CreateOnePlannedMaintenancePayload = {
  __typename?: 'CreateOnePlannedMaintenancePayload';
  /** Created document */
  record?: Maybe<PlannedMaintenance>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOnePriceTableInput = {
  brandId: Scalars['MongoID']['input'];
  currencyName?: InputMaybe<Scalars['String']['input']>;
  displayEan?: InputMaybe<Scalars['Boolean']['input']>;
  globalDiscount?: InputMaybe<Scalars['Float']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  multiplyingCoefficient?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<InputMaybe<PriceTablePricesInput>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  vatRate?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateOnePriceTablePayload = {
  __typename?: 'CreateOnePriceTablePayload';
  /** Created document */
  record?: Maybe<PriceTable>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneProductScanInput = {
  creationDate?: InputMaybe<Scalars['Date']['input']>;
  metallic: Scalars['Float']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  productName: Scalars['String']['input'];
  reference: Scalars['String']['input'];
  scans?: InputMaybe<Array<InputMaybe<ProductScanScansInput>>>;
  size?: InputMaybe<ProductScanSizeInput>;
  state?: InputMaybe<EnumProductScanState>;
  thumbnail?: InputMaybe<ProductScanScansInputImagesInput>;
};

export type CreateOneProductScanPayload = {
  __typename?: 'CreateOneProductScanPayload';
  /** Created document */
  record?: Maybe<ProductScan>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOnePromoterApartmentUnitInput = {
  brandId: Scalars['MongoID']['input'];
  buildingNumber?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  purchaserFirstName?: InputMaybe<Scalars['String']['input']>;
  purchaserMail?: InputMaybe<Scalars['String']['input']>;
  purchaserSurname?: InputMaybe<Scalars['String']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitState>;
  unitNumber: Scalars['String']['input'];
  unitTypeId: Scalars['MongoID']['input'];
};

export type CreateOnePromoterApartmentUnitPayload = {
  __typename?: 'CreateOnePromoterApartmentUnitPayload';
  /** Created document */
  record?: Maybe<PromoterApartmentUnit>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOnePromoterApartmentUnitTypeInput = {
  brandId: Scalars['MongoID']['input'];
  currentVersion?: InputMaybe<Scalars['Int']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONObject']['input']>;
  history?: InputMaybe<Array<PromoterApartmentUnitTypeHistoryInput>>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  name: Scalars['String']['input'];
  programId: Scalars['MongoID']['input'];
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitTypeState>;
};

export type CreateOnePromoterApartmentUnitTypePayload = {
  __typename?: 'CreateOnePromoterApartmentUnitTypePayload';
  /** Created document */
  record?: Maybe<PromoterApartmentUnitType>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOnePromoterProgramInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  brandId: Scalars['MongoID']['input'];
  city?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  itemFilter?: InputMaybe<PromoterProgramItemFilterInput>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  name: Scalars['String']['input'];
  planEditor?: InputMaybe<PromoterProgramPlanEditorInput>;
  planUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  promoterId?: InputMaybe<Scalars['MongoID']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<EnumPromoterProgramState>;
  stylePresetGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  zipCode?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateOnePromoterProgramPayload = {
  __typename?: 'CreateOnePromoterProgramPayload';
  /** Created document */
  record?: Maybe<PromoterProgram>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneSalesRecordInput = {
  finalCustomerMetadata?: InputMaybe<Scalars['Metadata']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  saveId: Scalars['MongoID']['input'];
};

export type CreateOneSalesRecordPayload = {
  __typename?: 'CreateOneSalesRecordPayload';
  /** Created document */
  record?: Maybe<SalesRecord>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneSaveFolderInput = {
  brandId: Scalars['MongoID']['input'];
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['MongoID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type CreateOneSaveFolderPayload = {
  __typename?: 'CreateOneSaveFolderPayload';
  /** Created document */
  record?: Maybe<SaveFolder>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneSaveInput = {
  additionalInfo?: InputMaybe<Scalars['JSON']['input']>;
  apartmentUnitTypeId?: InputMaybe<Scalars['MongoID']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  chosenStylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  createdFromAP?: InputMaybe<Scalars['MongoID']['input']>;
  customerId?: InputMaybe<Scalars['MongoID']['input']>;
  data: Scalars['String']['input'];
  dataFormatVersion?: InputMaybe<Scalars['Int']['input']>;
  dataUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isReadonly?: InputMaybe<Scalars['Boolean']['input']>;
  isTemplate?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  moduleKitchenCustomData?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  quantitySurveyJSON?: InputMaybe<Scalars['String']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  storageBytesUsage?: InputMaybe<Scalars['Float']['input']>;
  stylePresetGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tunnelState?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<EnumSaveType>;
  visitViewpoints?: InputMaybe<Array<SaveVisitViewpointsInput>>;
};

export type CreateOneSavePayload = {
  __typename?: 'CreateOneSavePayload';
  /** Created document */
  record?: Maybe<Save>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
  updateToken?: Maybe<Scalars['String']['output']>;
};

export type CreateOneSavesGroupInput = {
  brandId: Scalars['MongoID']['input'];
  name: Scalars['String']['input'];
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  savesIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type: EnumSavesGroupType;
};

export type CreateOneSavesGroupPayload = {
  __typename?: 'CreateOneSavesGroupPayload';
  /** Created document */
  record?: Maybe<SavesGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneSettingInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type CreateOneSettingPayload = {
  __typename?: 'CreateOneSettingPayload';
  /** Created document */
  record?: Maybe<Setting>;
  /** Document ID */
  recordId?: Maybe<Scalars['String']['output']>;
};

export type CreateOneStylePresetGroupInput = {
  brandId: Scalars['MongoID']['input'];
  name: Scalars['String']['input'];
  stylePresetIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type CreateOneStylePresetGroupPayload = {
  __typename?: 'CreateOneStylePresetGroupPayload';
  /** Created document */
  record?: Maybe<StylePresetGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneStylePresetInput = {
  brandId: Scalars['MongoID']['input'];
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  customisationPresets?: InputMaybe<Array<InputMaybe<StylePresetCustomisationPresetsInput>>>;
  name: Scalars['String']['input'];
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type CreateOneStylePresetPayload = {
  __typename?: 'CreateOneStylePresetPayload';
  /** Created document */
  record?: Maybe<StylePreset>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneTutorialInput = {
  brandId: Scalars['MongoID']['input'];
  displayOnlyOnce?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  points?: InputMaybe<Array<TutorialPointInput>>;
};

export type CreateOneTutorialPayload = {
  __typename?: 'CreateOneTutorialPayload';
  /** Created document */
  record?: Maybe<Tutorial>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type Customer = {
  __typename?: 'Customer';
  _id: Scalars['MongoID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdById: Scalars['MongoID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstname: Scalars['String']['output'];
  firstnameAdditional?: Maybe<Scalars['String']['output']>;
  gender: Scalars['String']['output'];
  genderAdditional?: Maybe<Scalars['String']['output']>;
  mobilePhone?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  surname: Scalars['String']['output'];
  surnameAdditional?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<CustomerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Customer;
};

/** List of items with pagination. */
export type CustomerPagination = {
  __typename?: 'CustomerPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<Customer>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type DocumentAssemblerManifestQueueJob = Job & {
  __typename?: 'DocumentAssemblerManifestQueueJob';
  /** A unique ID for the job. */
  _id: Scalars['String']['output'];
  /** When the job was created. */
  createdAt: Scalars['Date']['output'];
  /** When the job finished (completed or failed). */
  finishedAt?: Maybe<Scalars['Date']['output']>;
  /** The name-type of the job. A queue may have multiple job types. */
  name: Scalars['String']['output'];
  /** When the job was processed (started). */
  processedAt?: Maybe<Scalars['Date']['output']>;
  /** Job queue this job is in. */
  queue: Scalars['String']['output'];
  /** Resulting value of a completed job. Null if the job is not in completed state. */
  result: OutputDocumentManifest;
  state: JobState;
};

export type DocumentAssemblerQueueJob = Job & {
  __typename?: 'DocumentAssemblerQueueJob';
  /** A unique ID for the job. */
  _id: Scalars['String']['output'];
  /** When the job was created. */
  createdAt: Scalars['Date']['output'];
  /** When the job finished (completed or failed). */
  finishedAt?: Maybe<Scalars['Date']['output']>;
  /** The name-type of the job. A queue may have multiple job types. */
  name: Scalars['String']['output'];
  /** When the job was processed (started). */
  processedAt?: Maybe<Scalars['Date']['output']>;
  /** The last progress value the job signalled, if any. */
  progress?: Maybe<DocumentAssemblerQueueProgress>;
  /** Job queue this job is in. */
  queue: Scalars['String']['output'];
  /** Resulting value of a completed job. Null if the job is not in completed state. */
  result?: Maybe<DocumentAssemblerQueueResult>;
  state: JobState;
};

export type DocumentAssemblerQueueProgress = {
  __typename?: 'DocumentAssemblerQueueProgress';
  message: Scalars['String']['output'];
  /** Progress of the current step, described by the 'message' property, as a percentage. */
  stepProgress?: Maybe<Scalars['Int']['output']>;
};

export type DocumentAssemblerQueueResult = {
  __typename?: 'DocumentAssemblerQueueResult';
  manifest: OutputDocumentManifest;
  pdfUrl: Scalars['String']['output'];
};

export enum EnumAccessPointSupportButtonIcon {
  Chat = 'chat',
  Info = 'info',
  LifeRing = 'life_ring',
  Question = 'question'
}

export enum EnumAccessPointSupportButtonType {
  Crisp = 'crisp',
  Disabled = 'disabled',
  Link = 'link'
}

export enum EnumAppletEncoding {
  Brotli = 'brotli',
  Gzip = 'gzip',
  None = 'none'
}

export enum EnumBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupButtonType {
  YesNo = 'YES_NO'
}

export enum EnumBrandParametersScrapperPostManualSaveTriggerStepsType {
  LaunchScrapper = 'LAUNCH_SCRAPPER',
  TriggerPopup = 'TRIGGER_POPUP'
}

export enum EnumBrandParametersScrapperStepsMapPdfReportGeneratorPayloadType {
  Base64 = 'base64',
  Url = 'url'
}

export enum EnumBrandParametersScrapperStepsMapReportGeneratorMode {
  DocumentAssembler = 'document_assembler',
  Html = 'html'
}

export enum EnumBrandParametersScrapperStepsStepType {
  Filter = 'filter',
  Map = 'map',
  None = 'none',
  Tap = 'tap'
}

export enum EnumBrandParametersScrapperStepsTapSendEmailEmailSourceType {
  Dynamic = 'dynamic',
  Static = 'static'
}

export enum EnumBrandParametersScrapperStepsVerbFilter {
  ExcludeByTag = 'EXCLUDE_BY_TAG',
  IncludedByTag = 'INCLUDED_BY_TAG',
  None = 'NONE'
}

export enum EnumBrandParametersScrapperStepsVerbMap {
  MapAlsapanFormDataToSurfaceProduct = 'MAP_ALSAPAN_FORM_DATA_TO_SURFACE_PRODUCT',
  MapListItems = 'MAP_LIST_ITEMS',
  MapPdfReport = 'MAP_PDF_REPORT',
  MapPlinthCalculator = 'MAP_PLINTH_CALCULATOR',
  MapPriceTableToProducts = 'MAP_PRICE_TABLE_TO_PRODUCTS',
  MapProceduralFurnitureToProductDataset = 'MAP_PROCEDURAL_FURNITURE_TO_PRODUCT_DATASET',
  MapReport = 'MAP_REPORT',
  MapSurfacesToProducts = 'MAP_SURFACES_TO_PRODUCTS',
  MapTerraceToProducts = 'MAP_TERRACE_TO_PRODUCTS',
  MapToEanAndPrice = 'MAP_TO_EAN_AND_PRICE',
  MapToExportDataJson = 'MAP_TO_EXPORT_DATA_JSON',
  MapToStandardApiPayload = 'MAP_TO_STANDARD_API_PAYLOAD',
  None = 'NONE'
}

export enum EnumBrandParametersScrapperStepsVerbTap {
  None = 'NONE',
  TapApi = 'TAP_API',
  TapEmail = 'TAP_EMAIL',
  TapLivePrice = 'TAP_LIVE_PRICE',
  TapPromoterApartmentUnitTypeValidation = 'TAP_PROMOTER_APARTMENT_UNIT_TYPE_VALIDATION',
  TapSalesRecord = 'TAP_SALES_RECORD'
}

export enum EnumBrandParametersTunnelStepsModule {
  Auth = 'auth',
  Benchmark = 'benchmark',
  Building = 'building',
  CameraRail = 'cameraRail',
  Catalog = 'catalog',
  CustomView = 'customView',
  Form = 'form',
  FurnitureMeasuresViewer = 'furnitureMeasuresViewer',
  FurnituresOptions = 'furnituresOptions',
  Home = 'home',
  PanoramicVisit = 'panoramicVisit',
  PhotographyStudio = 'photographyStudio',
  Plan = 'plan',
  Report = 'report',
  Visit = 'visit'
}

export enum EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataType {
  Number = 'number',
  String = 'string'
}

export enum EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataType {
  Number = 'number',
  String = 'string'
}

export enum EnumBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataType {
  Number = 'number',
  String = 'string'
}

export enum EnumCatalogFolderTilesHorizontalTextAlignement {
  Left = 'left',
  Middle = 'middle',
  Right = 'right'
}

export enum EnumCatalogFolderTilesType {
  Construction = 'construction',
  Folder = 'folder',
  Image = 'image',
  Include = 'include',
  Item = 'item',
  ItemsGroup = 'itemsGroup',
  StylePreset = 'stylePreset',
  Text = 'text',
  VirtualFolder = 'virtualFolder'
}

export enum EnumCatalogFolderTilesVerticalTextAlignement {
  Bottom = 'bottom',
  Middle = 'middle',
  Top = 'top'
}

export enum EnumCatalogFolderType {
  Construction = 'construction',
  Item = 'item'
}

export enum EnumContactInformationState {
  InProgress = 'InProgress',
  Treated = 'Treated',
  WaitingForTreatement = 'WaitingForTreatement'
}

export enum EnumItemCanBeDroppedOnZones {
  Ceiling = 'ceiling',
  Door = 'door',
  ExteriorWall = 'exterior_wall',
  Floor = 'floor',
  Table = 'table',
  Wall = 'wall',
  Window = 'window'
}

export enum EnumItemConsideredAsDroppableZones {
  Ceiling = 'ceiling',
  ExteriorWall = 'exterior_wall',
  Floor = 'floor',
  Table = 'table',
  Wall = 'wall'
}

export enum EnumItemCustomisationCoverPlanesMode {
  AlwaysPlace = 'AlwaysPlace',
  CutHole = 'CutHole',
  OnDemand = 'OnDemand',
  OnDemandAndFill = 'OnDemandAndFill',
  PlaceWhenOnFloor = 'PlaceWhenOnFloor'
}

export enum EnumItemCustomisationMaterialsType {
  Material = 'Material',
  Palette = 'Palette'
}

export enum EnumItemCustomisationSubObjectsHooksType {
  BottomLeft = 'BottomLeft',
  BottomMiddle = 'BottomMiddle',
  BottomRight = 'BottomRight',
  Center = 'Center',
  CenterLeft = 'CenterLeft',
  CenterRight = 'CenterRight',
  Delegate = 'Delegate',
  Pivot = 'Pivot',
  TopLeft = 'TopLeft',
  TopMiddle = 'TopMiddle',
  TopRight = 'TopRight'
}

export enum EnumItemCustomisationSymbolicRepresentationColors {
  DefaultColor = 'defaultColor',
  WallItemColor = 'wallItemColor'
}

export enum EnumItemCustomisationSymbolicRepresentationDoorType {
  DoubleDoor = 'doubleDoor',
  Drawer = 'drawer',
  LeftDoor = 'leftDoor',
  None = 'none',
  RightDoor = 'rightDoor'
}

export enum EnumItemCustomisationSymbolicRepresentationSymbolicIcon {
  BathroomSink = 'bathroomSink',
  Bathtub = 'bathtub',
  BuiltInMicroWave = 'builtInMicroWave',
  BuiltInOven = 'builtInOven',
  CableOutlet = 'cableOutlet',
  Cooktop = 'cooktop',
  DoubleElectricalOutlet = 'doubleElectricalOutlet',
  ElectricalOutlet = 'electricalOutlet',
  FreeStandingMicroWave = 'freeStandingMicroWave',
  Heating = 'heating',
  None = 'none',
  Shower = 'shower',
  Sink = 'sink',
  TowelHolder = 'towelHolder',
  Wc = 'wc'
}

export enum EnumItemCustomisationSymbolicRepresentationSymbolicIconShape {
  Big = 'big',
  Circle = 'circle',
  None = 'none',
  OneBasin = 'oneBasin',
  Rectangular = 'rectangular',
  Round = 'round',
  RoundOneBasin = 'roundOneBasin',
  RoundTwoBasins = 'roundTwoBasins',
  Small = 'small',
  SmallBasin = 'smallBasin',
  Square = 'square',
  TwoBasins = 'twoBasins'
}

export enum EnumItemCustomisationSymbolicRepresentationSymbolicIconSubType {
  Angle = 'angle',
  Bidet = 'bidet',
  Cabin = 'cabin',
  Classic = 'classic',
  ClassicBidet = 'classicBidet',
  HandWashTank = 'handWashTank',
  HeatPump = 'heatPump',
  Heater = 'heater',
  HotWaterTank = 'hotWaterTank',
  None = 'none',
  OneDrainer = 'oneDrainer',
  OnePerson = 'onePerson',
  PedestalSink = 'pedestalSink',
  PelletBurning = 'pelletBurning',
  TowelDryer = 'towelDryer',
  TwoDrainer = 'twoDrainer',
  TwoPersons = 'twoPersons',
  WallMounted = 'wallMounted',
  WallMountedBidet = 'wallMountedBidet'
}

export enum EnumItemCustomisationSymbolicRepresentationType {
  Equipments = 'equipments',
  ImplementationFaceView = 'implementationFaceView',
  ImplementationTopView = 'implementationTopView'
}

export enum EnumItemGuardrailInformationsMeshesOptionsShape {
  NA = 'n_a',
  Rectangular = 'rectangular',
  Round = 'round'
}

export enum EnumItemGuardrailInformationsMeshesType {
  FullLength = 'full_length',
  Pillars = 'pillars',
  PillarsInside = 'pillars_inside',
  PillarsInterval = 'pillars_interval',
  PillarsOutside = 'pillars_outside'
}

export enum EnumItemPillarInformationsMaterialsType {
  CapitalAndBase = 'capital_and_base',
  Shaft = 'shaft'
}

export enum EnumItemPillarInformationsModelsType {
  Base = 'base',
  Capital = 'capital',
  Shaft = 'shaft'
}

export enum EnumItemPriceGeneration {
  Default = 'default',
  ExcludeFromGeneration = 'exclude_from_generation',
  GeneratePriceEntry = 'generate_price_entry'
}

export enum EnumItemPriceUnit {
  ByPiece = 'by_piece',
  ByTheLinearMeter = 'by_the_linear_meter',
  PerSquareMeter = 'per_square_meter'
}

export enum EnumItemRoofInformationsEavesStyleType {
  ConcreteCasing = 'concreteCasing',
  Cornice = 'cornice',
  Genoise = 'genoise',
  Undefined = 'undefined',
  VisibleRafters = 'visibleRafters',
  WoodenCasing = 'woodenCasing'
}

export enum EnumItemRoofInformationsFramingPiecesType {
  All = 'all',
  Mansard = 'mansard',
  Simple = 'simple'
}

export enum EnumItemRoofInformationsFramingType {
  PrefabricatedTrusses = 'prefabricated_trusses',
  WithTrusses = 'with_trusses',
  WithoutTrusses = 'without_trusses'
}

export enum EnumItemRoofInformationsMaterialsType {
  DecoWood = 'decoWood',
  Gravel = 'gravel',
  LathWood = 'lathWood',
  Seal = 'seal',
  SolarPanelCells = 'solarPanelCells',
  SolarPanelFrame = 'solarPanelFrame',
  Tiles = 'tiles',
  Tiles_3D = 'tiles_3D',
  Wood = 'wood',
  Zinc = 'zinc'
}

export enum EnumItemRoofInformationsModelsType {
  BargeBoardTileLeft = 'barge_board_tile_left',
  BargeBoardTileRight = 'barge_board_tile_right',
  BargeBoardTileTop = 'barge_board_tile_top',
  Downpipe = 'downpipe',
  DownpipeDrop = 'downpipe_drop',
  DownpipeKnee_60 = 'downpipe_knee_60',
  DownpipeOutlet = 'downpipe_outlet',
  HipTile = 'hip_tile',
  Leak = 'leak',
  LeakEnd = 'leak_end',
  LeakHook = 'leak_hook',
  LeakKnee_90 = 'leak_knee_90',
  PurlinBottom = 'purlin_bottom',
  PurlinIntermediate = 'purlin_intermediate',
  PurlinRidge = 'purlin_ridge',
  RidgeTile = 'ridge_tile',
  RidgeTileEnd = 'ridge_tile_end',
  Tile = 'tile'
}

export enum EnumItemStairsInformationsMaterialsType {
  Railing = 'railing',
  SmallPosts = 'smallPosts',
  Stairs = 'stairs',
  Treats = 'treats'
}

export enum EnumItemStairsInformationsModelsType {
  Handrail = 'handrail',
  Post = 'post',
  Smallpost = 'smallpost'
}

export enum EnumItemType {
  Aperture = 'aperture',
  BuildingWing = 'buildingWing',
  Coating = 'coating',
  Composite = 'composite',
  Furniture = 'furniture',
  Guardrail = 'guardrail',
  Panorama = 'panorama',
  Pillar = 'pillar',
  Roof = 'roof',
  Stairs = 'stairs',
  Vegetation = 'vegetation',
  Virtual = 'virtual',
  Wall = 'wall'
}

export enum EnumItemWallInformationsClass {
  CeilingCovering = 'ceiling_covering',
  FloorCovering = 'floor_covering',
  FloorStructure = 'floor_structure',
  WallCovering = 'wall_covering',
  WallStructure = 'wall_structure'
}

export enum EnumItemWallInformationsMeshesBuildingMaterial {
  Mat101Bricks = 'mat101_bricks',
  Mat102Blocks = 'mat102_blocks',
  Mat103Concrete = 'mat103_concrete',
  Mat104Ferroconcrete = 'mat104_ferroconcrete',
  Mat105CutStone = 'mat105_cut_stone',
  Mat106Marble = 'mat106_marble',
  Mat201Steel = 'mat201_steel',
  Mat202Brass = 'mat202_brass',
  Mat203Aluminium = 'mat203_aluminium',
  Mat204CastIron = 'mat204_cast_iron',
  Mat205Zinc = 'mat205_zinc',
  Mat301WoodRough = 'mat301_wood_rough',
  Mat302WoodFinished = 'mat302_wood_finished',
  Mat303Plywood = 'mat303_plywood',
  Mat304WoodFiber = 'mat304_wood_fiber',
  Mat401Cement = 'mat401_cement',
  Mat402Plaster = 'mat402_plaster',
  Mat403Tiles = 'mat403_tiles',
  Mat404Carpeting = 'mat404_carpeting',
  Mat501Insulation = 'mat501_insulation',
  Mat502InsulationRigid = 'mat502_insulation_rigid',
  Mat503Sealing = 'mat503_sealing',
  Mat504Glass = 'mat504_glass',
  Mat505Plastic = 'mat505_plastic',
  Mat506Roofing = 'mat506_roofing',
  Mat601Earth = 'mat601_earth',
  Mat602Gravel = 'mat602_gravel',
  Mat603Sand = 'mat603_sand',
  Mat999Empty = 'mat999_empty'
}

export enum EnumItemWallInformationsMeshesOptionsShape {
  NA = 'n_a',
  Rectangular = 'rectangular',
  Round = 'round'
}

export enum EnumItemWallInformationsMeshesPlacingBeamDirection {
  X = 'x',
  Z = 'z'
}

export enum EnumItemWallInformationsMeshesPlacingBottomElevationReference {
  Ceiling = 'ceiling',
  CeilingStoryBelow = 'ceiling_story_below',
  CutElevation = 'cutElevation',
  Floor = 'floor',
  FloorNextStory = 'floor_next_story',
  Lintel = 'lintel',
  Sill = 'sill',
  Terrain = 'terrain'
}

export enum EnumItemWallInformationsMeshesPlacingRepetitionFilter {
  Ends = 'ends',
  Intermediate = 'intermediate',
  IntermediateAndEnds = 'intermediate_and_ends'
}

export enum EnumItemWallInformationsMeshesPlacingStartDepthReference {
  Axis = 'axis',
  Center = 'center',
  OppositeSurface = 'opposite_surface',
  Surface = 'surface'
}

export enum EnumItemWallInformationsMeshesType {
  CeilingBeam = 'ceiling_beam',
  CeilingInterval = 'ceiling_interval',
  CeilingLayer = 'ceiling_layer',
  DiagonalAlternating = 'diagonal_alternating',
  DiagonalAlternatingReverse = 'diagonal_alternating_reverse',
  DiagonalAscending = 'diagonal_ascending',
  DiagonalDescending = 'diagonal_descending',
  FullLength = 'full_length',
  PartialWall = 'partial_wall',
  Pillars = 'pillars',
  PillarsInterval = 'pillars_interval'
}

export enum EnumItemsGroupOptionPositionsPlacement {
  BottomLeft = 'BottomLeft',
  BottomLeftSticky = 'BottomLeftSticky',
  BottomMiddle = 'BottomMiddle',
  BottomMiddleSticky = 'BottomMiddleSticky',
  BottomRight = 'BottomRight',
  BottomRightSticky = 'BottomRightSticky',
  Center = 'Center',
  CenterLeft = 'CenterLeft',
  CenterLeftSticky = 'CenterLeftSticky',
  CenterRight = 'CenterRight',
  CenterRightSticky = 'CenterRightSticky',
  CenterSticky = 'CenterSticky',
  Pivot = 'Pivot',
  TopLeft = 'TopLeft',
  TopLeftSticky = 'TopLeftSticky',
  TopMiddle = 'TopMiddle',
  TopMiddleSticky = 'TopMiddleSticky',
  TopRight = 'TopRight',
  TopRightSticky = 'TopRightSticky'
}

export enum EnumItemsGroupOptionPositionsRotation {
  Clockwise90deg = 'Clockwise90deg',
  CounterClockwise90deg = 'CounterClockwise90deg',
  Full180deg = 'Full180deg',
  None = 'None'
}

export enum EnumItemsGroupType {
  Layer = 'layer',
  MaterialOption = 'material_option',
  Option = 'option',
  Plan = 'plan',
  ProductLine = 'product_line',
  Substitute = 'substitute',
  Suppression = 'suppression',
  Variation = 'variation'
}

export enum EnumPaletteType {
  Free = 'Free',
  Pantone = 'Pantone',
  Ral = 'RAL'
}

export enum EnumPipelineJobState {
  BrokenReference = 'broken_reference',
  DeadlineActive = 'deadline_active',
  DeadlineCompleted = 'deadline_completed',
  DeadlineFailed = 'deadline_failed',
  DeadlinePending = 'deadline_pending',
  DeadlineSuspended = 'deadline_suspended',
  DeadlineUnknown = 'deadline_unknown',
  PostProcessCompleted = 'post_process_completed',
  PostProcessFailed = 'post_process_failed'
}

export enum EnumPipelineJobType {
  ConvertPbrMaterialToAssetBundle = 'convert_pbr_material_to_asset_bundle'
}

export enum EnumProductScanScansType {
  Substance_8Angular_1Diffuse = 'Substance_8Angular_1Diffuse'
}

export enum EnumProductScanState {
  Archived = 'archived',
  ConversionValidated = 'conversion_validated',
  ItemCreated = 'item_created',
  ScanValidated = 'scan_validated',
  ToComplete = 'to_complete',
  ToConvert = 'to_convert',
  ToPolish = 'to_polish',
  ToRecreate = 'to_recreate',
  ToValidate = 'to_validate'
}

export enum EnumPromoterApartmentUnitState {
  Created = 'created',
  Submitted = 'submitted',
  Validated = 'validated'
}

export enum EnumPromoterApartmentUnitTypeHistoryState {
  Created = 'created',
  Rejected = 'rejected',
  Submitted = 'submitted',
  Validated = 'validated',
  ValidatedWithReserve = 'validated_with_reserve'
}

export enum EnumPromoterApartmentUnitTypeState {
  Created = 'created',
  Rejected = 'rejected',
  Submitted = 'submitted',
  Validated = 'validated',
  ValidatedWithReserve = 'validated_with_reserve'
}

export enum EnumPromoterProgramState {
  Created = 'created',
  PartiallyValidated = 'partially_validated',
  Validated = 'validated'
}

export enum EnumSaveType {
  Legacy = 'legacy',
  Plan = 'plan'
}

export enum EnumSavesGroupType {
  ProductLine = 'product_line'
}

export enum EnumStylePresetCustomisationPresetsRotationCondition {
  Any = 'any',
  Clockwise_90Deg = 'clockwise_90_deg',
  Counterclockwise_90Deg = 'counterclockwise_90_deg',
  None = 'none',
  NotApplicable = 'not_applicable'
}

export enum EnumTutorialPointTarget {
  Camera_3d = 'camera_3d',
  Cart = 'cart',
  CatalogButton = 'catalog_button',
  Elevator_3d = 'elevator_3d',
  ElevatorPlan = 'elevator_plan',
  FullscreenButton = 'fullscreen_button',
  LabelToggle = 'label_toggle',
  MeasureToggle = 'measure_toggle',
  None = 'none',
  PlanZoomSlider = 'plan_zoom_slider',
  ProjectButton = 'project_button',
  Quest = 'quest',
  RendererButtons = 'renderer_buttons',
  RightSideToolbar = 'right_side_toolbar',
  RightSideToolbarLayers = 'right_side_toolbar_layers',
  SynchronisationButton = 'synchronisation_button',
  Toolbar = 'toolbar',
  UndoRedo = 'undo_redo',
  UpperNavigationBar = 'upper_navigation_bar',
  WindRose = 'wind_rose'
}

export type FilterFindManyAccessPointBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyAccessPointInput = {
  AND?: InputMaybe<Array<FilterFindManyAccessPointInput>>;
  OR?: InputMaybe<Array<FilterFindManyAccessPointInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyAccessPointOperatorsInput>;
  areSavesPubliclyAvailableById?: InputMaybe<Scalars['Boolean']['input']>;
  authorizedCatalogIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  ecotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parametersScrapperId?: InputMaybe<Scalars['MongoID']['input']>;
  parametersTunnelId?: InputMaybe<Scalars['MongoID']['input']>;
  priceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  supportButton?: InputMaybe<FilterFindManyAccessPointSupportButtonInput>;
};

export type FilterFindManyAccessPointNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyAccessPointOperatorsInput = {
  _id?: InputMaybe<FilterFindManyAccessPoint_IdOperatorsInput>;
  brandId?: InputMaybe<FilterFindManyAccessPointBrandIdOperatorsInput>;
  name?: InputMaybe<FilterFindManyAccessPointNameOperatorsInput>;
};

export type FilterFindManyAccessPointSupportButtonInput = {
  icon?: InputMaybe<EnumAccessPointSupportButtonIcon>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumAccessPointSupportButtonType>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyAccessPoint_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyAppletInput = {
  AND?: InputMaybe<Array<FilterFindManyAppletInput>>;
  OR?: InputMaybe<Array<FilterFindManyAppletInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyAppletOperatorsInput>;
  encoding?: InputMaybe<EnumAppletEncoding>;
  indexedDbResetVersion?: InputMaybe<Scalars['String']['input']>;
  intVersion?: InputMaybe<Scalars['Float']['input']>;
  readableVersion?: InputMaybe<Scalars['String']['input']>;
  redirectedVersion?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyAppletOperatorsInput = {
  _id?: InputMaybe<FilterFindManyApplet_IdOperatorsInput>;
  version?: InputMaybe<FilterFindManyAppletVersionOperatorsInput>;
};

export type FilterFindManyAppletVersionOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyApplet_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyBarcodeCollectionBarcodeReferencesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBarcodeCollectionCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyBarcodeCollectionInput = {
  AND?: InputMaybe<Array<FilterFindManyBarcodeCollectionInput>>;
  OR?: InputMaybe<Array<FilterFindManyBarcodeCollectionInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyBarcodeCollectionOperatorsInput>;
  barcodeReferences?: InputMaybe<Array<FilterFindManyBarcodeCollectionBarcodeReferencesInput>>;
  /** Filter the BarcodeCollection by their parent brand id */
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyBarcodeCollectionOperatorsInput = {
  _id?: InputMaybe<FilterFindManyBarcodeCollection_IdOperatorsInput>;
  createdById?: InputMaybe<FilterFindManyBarcodeCollectionCreatedByIdOperatorsInput>;
};

export type FilterFindManyBarcodeCollection_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyBrandColorsInput = {
  dataProtection?: InputMaybe<Scalars['String']['input']>;
  legalNotice?: InputMaybe<Scalars['String']['input']>;
  loadingScreenBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenLogoPicture?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBorder?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarContent?: InputMaybe<Scalars['String']['input']>;
  loadingScreenText?: InputMaybe<Scalars['String']['input']>;
  meshes?: InputMaybe<FilterFindManyBrandColorsMeshesInput>;
  planElement?: InputMaybe<FilterFindManyBrandColorsPlanElementInput>;
  primary?: InputMaybe<Scalars['String']['input']>;
  questHeaderBackground?: InputMaybe<Scalars['String']['input']>;
  questHeaderBody?: InputMaybe<Scalars['String']['input']>;
  questHeaderTitle?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandColorsMeshesInput = {
  wallCut?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandColorsPlanElementInput = {
  floor?: InputMaybe<Scalars['String']['input']>;
  wall?: InputMaybe<Scalars['String']['input']>;
  window?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandInput = {
  AND?: InputMaybe<Array<FilterFindManyBrandInput>>;
  OR?: InputMaybe<Array<FilterFindManyBrandInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyBrandOperatorsInput>;
  colors?: InputMaybe<FilterFindManyBrandColorsInput>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Only seek for brand the logged-in user is member of. */
  onlyMine?: InputMaybe<Scalars['Boolean']['input']>;
  promoterWebsiteConfiguration?: InputMaybe<FilterFindManyBrandPromoterWebsiteConfigurationInput>;
  satelliteConfiguration?: InputMaybe<FilterFindManyBrandSatelliteConfigurationInput>;
  shareCode?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyBrandOperatorsInput = {
  _id?: InputMaybe<FilterFindManyBrand_IdOperatorsInput>;
  shareCode?: InputMaybe<FilterFindManyBrandShareCodeOperatorsInput>;
  slug?: InputMaybe<FilterFindManyBrandSlugOperatorsInput>;
};

export type FilterFindManyBrandParametersPricingInput = {
  AND?: InputMaybe<Array<FilterFindManyBrandParametersPricingInput>>;
  OR?: InputMaybe<Array<FilterFindManyBrandParametersPricingInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyBrandParametersPricingOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  useArticleCode?: InputMaybe<Scalars['Boolean']['input']>;
  useEAN?: InputMaybe<Scalars['Boolean']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyBrandParametersPricingOperatorsInput = {
  _id?: InputMaybe<FilterFindManyBrandParametersPricing_IdOperatorsInput>;
};

export type FilterFindManyBrandParametersPricing_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyBrandParametersScrapperInput = {
  AND?: InputMaybe<Array<FilterFindManyBrandParametersScrapperInput>>;
  OR?: InputMaybe<Array<FilterFindManyBrandParametersScrapperInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyBrandParametersScrapperOperatorsInput>;
  allowAnonymousSave?: InputMaybe<Scalars['Boolean']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  export?: InputMaybe<Scalars['Boolean']['input']>;
  geometry?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  objects?: InputMaybe<Scalars['Boolean']['input']>;
  postManualSaveTriggerSteps?: InputMaybe<Array<FilterFindManyBrandParametersScrapperPostManualSaveTriggerStepsInput>>;
  screenshots?: InputMaybe<Scalars['Boolean']['input']>;
  steps?: InputMaybe<Array<FilterFindManyBrandParametersScrapperStepsInput>>;
  watermark?: InputMaybe<FilterFindManyBrandParametersScrapperWatermarkInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyBrandParametersScrapperOperatorsInput = {
  _id?: InputMaybe<FilterFindManyBrandParametersScrapper_IdOperatorsInput>;
};

export type FilterFindManyBrandParametersScrapperPostManualSaveTriggerStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  triggerPopup?: InputMaybe<FilterFindManyBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput>;
  type?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsType>;
};

export type FilterFindManyBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buttonType?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupButtonType>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  yesNoButtons?: InputMaybe<FilterFindManyBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput>;
};

export type FilterFindManyBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput = {
  stateProperty?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandParametersScrapperStepsFilterInput = {
  expression?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandParametersScrapperStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  filter?: InputMaybe<FilterFindManyBrandParametersScrapperStepsFilterInput>;
  map?: InputMaybe<FilterFindManyBrandParametersScrapperStepsMapInput>;
  stepType?: InputMaybe<EnumBrandParametersScrapperStepsStepType>;
  stepVerb?: InputMaybe<Scalars['String']['input']>;
  tap?: InputMaybe<FilterFindManyBrandParametersScrapperStepsTapInput>;
  verbFilter?: InputMaybe<EnumBrandParametersScrapperStepsVerbFilter>;
  verbMap?: InputMaybe<EnumBrandParametersScrapperStepsVerbMap>;
  verbTap?: InputMaybe<EnumBrandParametersScrapperStepsVerbTap>;
};

export type FilterFindManyBrandParametersScrapperStepsMapInput = {
  kitchenPricer?: InputMaybe<FilterFindManyBrandParametersScrapperStepsMapKitchenPricerInput>;
  payloadGenerator?: InputMaybe<FilterFindManyBrandParametersScrapperStepsMapPayloadGeneratorInput>;
  pdfReportGenerator?: InputMaybe<FilterFindManyBrandParametersScrapperStepsMapPdfReportGeneratorInput>;
  plinthCalculator?: InputMaybe<FilterFindManyBrandParametersScrapperStepsMapPlinthCalculatorInput>;
  reportGenerator?: InputMaybe<FilterFindManyBrandParametersScrapperStepsMapReportGeneratorInput>;
  terracePricer?: InputMaybe<FilterFindManyBrandParametersScrapperStepsMapTerracePricerInput>;
};

export type FilterFindManyBrandParametersScrapperStepsMapKitchenPricerInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  barcodeCollectionId?: InputMaybe<Scalars['MongoID']['input']>;
  projectBaseUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandParametersScrapperStepsMapPayloadGeneratorInput = {
  addSaveName?: InputMaybe<Scalars['Boolean']['input']>;
  addUpdateToken?: InputMaybe<Scalars['Boolean']['input']>;
  dynamicParameterForTunnelStateInformation?: InputMaybe<Scalars['String']['input']>;
  tunnelStateKeys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FilterFindManyBrandParametersScrapperStepsMapPdfReportGeneratorInput = {
  payloadType?: InputMaybe<EnumBrandParametersScrapperStepsMapPdfReportGeneratorPayloadType>;
};

export type FilterFindManyBrandParametersScrapperStepsMapPlinthCalculatorInput = {
  bigPlinthId?: InputMaybe<Scalars['MongoID']['input']>;
  littlePlinthId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterFindManyBrandParametersScrapperStepsMapReportGeneratorInput = {
  chunksManifest?: InputMaybe<Array<FilterFindManyInputDocumentChunkManifestInput>>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<EnumBrandParametersScrapperStepsMapReportGeneratorMode>;
};

export type FilterFindManyBrandParametersScrapperStepsMapTerracePricerInput = {
  itemsCatalogId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterFindManyBrandParametersScrapperStepsTapInput = {
  outputToApi?: InputMaybe<FilterFindManyBrandParametersScrapperStepsTapOutputToApiInput>;
  sendEmail?: InputMaybe<FilterFindManyBrandParametersScrapperStepsTapSendEmailInput>;
};

export type FilterFindManyBrandParametersScrapperStepsTapOutputToApiInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  signPayload?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyBrandParametersScrapperStepsTapSendEmailInput = {
  attachmentName?: InputMaybe<Scalars['String']['input']>;
  dynamicParameterEmailAdress?: InputMaybe<Scalars['String']['input']>;
  emailSourceType?: InputMaybe<EnumBrandParametersScrapperStepsTapSendEmailEmailSourceType>;
  sendReportAsAttachment?: InputMaybe<Scalars['Boolean']['input']>;
  staticEmailAdress?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandParametersScrapperWatermarkInput = {
  alpha?: InputMaybe<Scalars['Float']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  repetition?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyBrandParametersScrapper_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyBrandParametersTunnelApertureParametersInput = {
  doorClassicDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntryDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntrySidelightDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorExteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doorInteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doubleDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleSwingDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  garageDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  simpleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  slitWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  windowCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  windowDefaultItem?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandParametersTunnelColorsParametersInput = {
  nameHelpAtlas?: InputMaybe<Scalars['String']['input']>;
  nameOptionsAtlas?: InputMaybe<Scalars['String']['input']>;
  nameToolsAtlas?: InputMaybe<Scalars['String']['input']>;
  primary?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandParametersTunnelCustomLinkButtonInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandParametersTunnelDefaultCameraParametersInput = {
  visitCameraParameters?: InputMaybe<FilterFindManyBrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput>;
};

export type FilterFindManyBrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput = {
  defaultVisitFieldOfView?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyBrandParametersTunnelDefaultCoatingParametersInput = {
  defaultExteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultGardenFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultInteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterFindManyBrandParametersTunnelInput = {
  AND?: InputMaybe<Array<FilterFindManyBrandParametersTunnelInput>>;
  OR?: InputMaybe<Array<FilterFindManyBrandParametersTunnelInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyBrandParametersTunnelOperatorsInput>;
  apertureParameters?: InputMaybe<FilterFindManyBrandParametersTunnelApertureParametersInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colorsParameters?: InputMaybe<FilterFindManyBrandParametersTunnelColorsParametersInput>;
  customLinkButton?: InputMaybe<FilterFindManyBrandParametersTunnelCustomLinkButtonInput>;
  defaultCameraParameters?: InputMaybe<FilterFindManyBrandParametersTunnelDefaultCameraParametersInput>;
  defaultCoatingParameters?: InputMaybe<FilterFindManyBrandParametersTunnelDefaultCoatingParametersInput>;
  defaultDayTime?: InputMaybe<Scalars['Float']['input']>;
  defaultSnapDistance?: InputMaybe<Scalars['Float']['input']>;
  disableHeaderShadow?: InputMaybe<Scalars['Boolean']['input']>;
  displayCartItemNumber?: InputMaybe<Scalars['Boolean']['input']>;
  displayCustomisationTagFurnitureOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displayFurnitureSubstitutesOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displaySaveName?: InputMaybe<Scalars['Boolean']['input']>;
  displayStepsHeader?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  globalOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  includeAllBrandItemsInCache?: InputMaybe<Scalars['Boolean']['input']>;
  initialStepIfLoadingSave?: InputMaybe<Scalars['Float']['input']>;
  isReloadFromLocalStorageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  logoLinkOnClick?: InputMaybe<Scalars['String']['input']>;
  logoPictureReference?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  persistentVariables?: InputMaybe<Array<FilterFindManyBrandParametersTunnelPersistentVariablesInput>>;
  preload?: InputMaybe<Scalars['Boolean']['input']>;
  savePanelParameters?: InputMaybe<FilterFindManyBrandParametersTunnelSavePanelParametersInput>;
  steps?: InputMaybe<Array<FilterFindManyBrandParametersTunnelStepInput>>;
  wallParameters?: InputMaybe<FilterFindManyBrandParametersTunnelWallParametersInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyBrandParametersTunnelOperatorsInput = {
  _id?: InputMaybe<FilterFindManyBrandParametersTunnel_IdOperatorsInput>;
};

export type FilterFindManyBrandParametersTunnelPersistentVariablesInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandParametersTunnelSavePanelParametersInput = {
  isCustomerModuleEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isExportButtonEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyBrandParametersTunnelStepInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  analytics?: InputMaybe<FilterFindManyBrandParametersTunnelStepsAnalyticsInput>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  isShownInStepper?: InputMaybe<Scalars['Boolean']['input']>;
  module?: InputMaybe<EnumBrandParametersTunnelStepsModule>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  resetTunnelOnActivation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyBrandParametersTunnelStepsAnalyticsChoiceReducerInput = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  stateProperties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FilterFindManyBrandParametersTunnelStepsAnalyticsInput = {
  choiceReducer?: InputMaybe<FilterFindManyBrandParametersTunnelStepsAnalyticsChoiceReducerInput>;
};

export type FilterFindManyBrandParametersTunnelWallParametersExteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type FilterFindManyBrandParametersTunnelWallParametersInput = {
  doorLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  exteriorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  exteriorWallThickness?: InputMaybe<FilterFindManyBrandParametersTunnelWallParametersExteriorWallThicknessInput>;
  floorHeight?: InputMaybe<Scalars['Float']['input']>;
  groundFloorLevel?: InputMaybe<Scalars['Float']['input']>;
  innerHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorWallThickness?: InputMaybe<FilterFindManyBrandParametersTunnelWallParametersInteriorWallThicknessInput>;
  optionsPanelWallConfig?: InputMaybe<FilterFindManyBrandParametersTunnelWallParametersOptionsPanelWallConfigInput>;
  windowLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  windowSillLevel?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyBrandParametersTunnelWallParametersInteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type FilterFindManyBrandParametersTunnelWallParametersOptionsPanelWallConfigInput = {
  displayOnlyWallType?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightExteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightInteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessDropdown?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessInput?: InputMaybe<Scalars['Boolean']['input']>;
  usePartitionLabelForInteriorWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyBrandParametersTunnel_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyBrandPromoterWebsiteConfigurationInput = {
  acquirerValidateUnitAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  metadataConfiguration?: InputMaybe<FilterFindManyBrandPromoterWebsiteConfigurationMetadataConfigurationInput>;
  operatorTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  promoterValidateTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  unitTypeSaveModelId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterFindManyBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataType>;
};

export type FilterFindManyBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataType>;
};

export type FilterFindManyBrandPromoterWebsiteConfigurationMetadataConfigurationInput = {
  apartmentUnitMetadata?: InputMaybe<Array<FilterFindManyBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput>>;
  apartmentUnitTypeIdMetadataKey?: InputMaybe<Scalars['String']['input']>;
  apartmentUnitTypeMetadata?: InputMaybe<Array<FilterFindManyBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput>>;
  programMetadata?: InputMaybe<Array<FilterFindManyBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput>>;
};

export type FilterFindManyBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataType>;
};

export type FilterFindManyBrandSatelliteConfigurationInput = {
  satelliteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyBrandShareCodeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyBrandSlugOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyBrand_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyCatalogFolderInput = {
  AND?: InputMaybe<Array<FilterFindManyCatalogFolderInput>>;
  OR?: InputMaybe<Array<FilterFindManyCatalogFolderInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyCatalogFolderOperatorsInput>;
  associatedEcotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  brand?: InputMaybe<Scalars['MongoID']['input']>;
  /** Filter catalogs by parent brand id. */
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  iconId?: InputMaybe<Scalars['Int']['input']>;
  /** Filter root catalogs only. */
  isCatalogRoot?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<FilterFindManyCatalogFolderMetadataInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  /** Filter catalogs by parent id. */
  parentId?: InputMaybe<Scalars['MongoID']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  rootId?: InputMaybe<Scalars['MongoID']['input']>;
  sharedWithIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  /** Filter catalogs that are shared with you. */
  sharedWithMe?: InputMaybe<Scalars['Boolean']['input']>;
  thumbnailId?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tiles?: InputMaybe<Array<InputMaybe<FilterFindManyCatalogFolderTilesInput>>>;
  tilesBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  tilesColumnAmount?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnGap?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  tilesRowGap?: InputMaybe<Scalars['Float']['input']>;
  tilesRowSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  type?: InputMaybe<EnumCatalogFolderType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  virtual?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyCatalogFolderMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCatalogFolderOperatorsInput = {
  _id?: InputMaybe<FilterFindManyCatalogFolder_IdOperatorsInput>;
};

export type FilterFindManyCatalogFolderTilesImagePlacementInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyCatalogFolderTilesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  advancedTextTranslations?: InputMaybe<Scalars['Translations']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundOpacity?: InputMaybe<Scalars['Float']['input']>;
  borderRadius?: InputMaybe<Scalars['Float']['input']>;
  catalogSourceId?: InputMaybe<Scalars['MongoID']['input']>;
  construction?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionTextSize?: InputMaybe<Scalars['Float']['input']>;
  folder?: InputMaybe<Scalars['MongoID']['input']>;
  hasShadow?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  horizontalTextAlignement?: InputMaybe<EnumCatalogFolderTilesHorizontalTextAlignement>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  imagePlacement?: InputMaybe<FilterFindManyCatalogFolderTilesImagePlacementInput>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isImagePlacementFree?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  item?: InputMaybe<Scalars['MongoID']['input']>;
  itemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  mask?: InputMaybe<Scalars['Boolean']['input']>;
  maskColor?: InputMaybe<Scalars['String']['input']>;
  maskOpacity?: InputMaybe<Scalars['Float']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<FilterFindManyCatalogFolderTilesMetadataInput>>>;
  posX?: InputMaybe<Scalars['Float']['input']>;
  posY?: InputMaybe<Scalars['Float']['input']>;
  saveSelectedInTunnelStateVariable?: InputMaybe<Scalars['String']['input']>;
  stylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textDescriptionTranslations?: InputMaybe<Scalars['Translations']['input']>;
  textPadding?: InputMaybe<FilterFindManyCatalogFolderTilesTextPaddingInput>;
  textTitleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTextColor?: InputMaybe<Scalars['String']['input']>;
  titleTextSize?: InputMaybe<Scalars['Float']['input']>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumCatalogFolderTilesType>;
  useAdvancedText?: InputMaybe<Scalars['Boolean']['input']>;
  verticalTextAlignement?: InputMaybe<EnumCatalogFolderTilesVerticalTextAlignement>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyCatalogFolderTilesMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyCatalogFolderTilesTextPaddingInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyCatalogFolder_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyCategoryInput = {
  AND?: InputMaybe<Array<FilterFindManyCategoryInput>>;
  OR?: InputMaybe<Array<FilterFindManyCategoryInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyCategoryOperatorsInput>;
  name?: InputMaybe<Scalars['JSON']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCategoryOperatorsInput = {
  _id?: InputMaybe<FilterFindManyCategory_IdOperatorsInput>;
};

export type FilterFindManyCategory_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyContactInformationInput = {
  AND?: InputMaybe<Array<FilterFindManyContactInformationInput>>;
  OR?: InputMaybe<Array<FilterFindManyContactInformationInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyContactInformationOperatorsInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  interlocutor?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<EnumContactInformationState>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyContactInformationOperatorsInput = {
  _id?: InputMaybe<FilterFindManyContactInformation_IdOperatorsInput>;
};

export type FilterFindManyContactInformation_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyCustomerAddressOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyCustomerBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyCustomerCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyCustomerEmailOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyCustomerFirstnameAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyCustomerFirstnameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyCustomerGenderAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyCustomerGenderOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyCustomerInput = {
  AND?: InputMaybe<Array<FilterFindManyCustomerInput>>;
  OR?: InputMaybe<Array<FilterFindManyCustomerInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyCustomerOperatorsInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  firstnameAdditional?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  genderAdditional?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  surnameAdditional?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCustomerOperatorsInput = {
  _id?: InputMaybe<FilterFindManyCustomer_IdOperatorsInput>;
  address?: InputMaybe<FilterFindManyCustomerAddressOperatorsInput>;
  brandId?: InputMaybe<FilterFindManyCustomerBrandIdOperatorsInput>;
  createdById?: InputMaybe<FilterFindManyCustomerCreatedByIdOperatorsInput>;
  email?: InputMaybe<FilterFindManyCustomerEmailOperatorsInput>;
  firstname?: InputMaybe<FilterFindManyCustomerFirstnameOperatorsInput>;
  firstnameAdditional?: InputMaybe<FilterFindManyCustomerFirstnameAdditionalOperatorsInput>;
  gender?: InputMaybe<FilterFindManyCustomerGenderOperatorsInput>;
  genderAdditional?: InputMaybe<FilterFindManyCustomerGenderAdditionalOperatorsInput>;
  surname?: InputMaybe<FilterFindManyCustomerSurnameOperatorsInput>;
  surnameAdditional?: InputMaybe<FilterFindManyCustomerSurnameAdditionalOperatorsInput>;
};

export type FilterFindManyCustomerSurnameAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyCustomerSurnameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyCustomer_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

/** Configures the parameters of one or multiple chunks in the document. */
export type FilterFindManyInputDocumentChunkManifestInput = {
  /** Render-time parameters object, implementing the chunk's parameters schema as given in the output manifest. The type of this property is loosely-typed in GraphQL, but verified at runtime against that schema. If the parameters passed are invalid against the schema, the chunk will be disabled and a manifest warning will be issued. */
  parameters?: InputMaybe<Scalars['JSONObject']['input']>;
  /** A path selector to target one or multiple chunks, since it can be a bash-like glob pattern, ex. "/my-section/my-chunk-123", "/my-section/my-chunk-*", "/**\/my-chunk-*", etc. */
  path?: InputMaybe<Scalars['String']['input']>;
  /** Defines whether the chunk should be rendered in the document. If set "false" on a group chunk, it applies to its children recursively. */
  render?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyItemCustomisationCoverPlanesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItem?: InputMaybe<Scalars['MongoID']['input']>;
  hideForSingleObject?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<EnumItemCustomisationCoverPlanesMode>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  positions?: InputMaybe<FilterFindManyItemCustomisationCoverPlanesPositionsInput>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemCustomisationCoverPlanesPositionsInput = {
  above?: InputMaybe<Scalars['Boolean']['input']>;
  behind?: InputMaybe<Scalars['Boolean']['input']>;
  front?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemCustomisationMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPalette?: InputMaybe<Scalars['MongoID']['input']>;
  materials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumItemCustomisationMaterialsType>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemCustomisationSubObjectsHooksInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation?: InputMaybe<FilterFindManyItemCustomisationSubObjectsHooksOrientationInput>;
  position?: InputMaybe<FilterFindManyItemCustomisationSubObjectsHooksPositionInput>;
  type?: InputMaybe<EnumItemCustomisationSubObjectsHooksType>;
};

export type FilterFindManyItemCustomisationSubObjectsHooksOrientationInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemCustomisationSubObjectsHooksPositionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemCustomisationSubObjectsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  hooks?: InputMaybe<Array<InputMaybe<FilterFindManyItemCustomisationSubObjectsHooksInput>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemCustomisationSymbolicRepresentationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  anglePositionIsRight?: InputMaybe<Scalars['Boolean']['input']>;
  break3D?: InputMaybe<Scalars['Boolean']['input']>;
  colors?: InputMaybe<EnumItemCustomisationSymbolicRepresentationColors>;
  displayDiagonals?: InputMaybe<Scalars['Boolean']['input']>;
  doorType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationDoorType>;
  drawerCount?: InputMaybe<Scalars['Float']['input']>;
  symbolicIcon?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIcon>;
  symbolicIconShape?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconShape>;
  symbolicIconSubType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconSubType>;
  type?: InputMaybe<EnumItemCustomisationSymbolicRepresentationType>;
};

export type FilterFindManyItemDeletedOperatorsInput = {
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemFactSheetInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONObject']['input']>;
  logoPicture?: InputMaybe<Scalars['String']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyItemGuardrailInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  meshes?: InputMaybe<Array<InputMaybe<FilterFindManyItemGuardrailInformationsMeshesInput>>>;
};

export type FilterFindManyItemGuardrailInformationsMeshesDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemGuardrailInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  dimensions?: InputMaybe<FilterFindManyItemGuardrailInformationsMeshesDimensionsInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  options?: InputMaybe<FilterFindManyItemGuardrailInformationsMeshesOptionsInput>;
  placing?: InputMaybe<FilterFindManyItemGuardrailInformationsMeshesPlacingInput>;
  surface?: InputMaybe<FilterFindManyItemGuardrailInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemGuardrailInformationsMeshesType>;
};

export type FilterFindManyItemGuardrailInformationsMeshesOptionsInput = {
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemGuardrailInformationsMeshesOptionsShape>;
};

export type FilterFindManyItemGuardrailInformationsMeshesPlacingInput = {
  elevation?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemGuardrailInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemInput = {
  AND?: InputMaybe<Array<FilterFindManyItemInput>>;
  OR?: InputMaybe<Array<FilterFindManyItemInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyItemOperatorsInput>;
  articleCode?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  buildingWingInfos?: InputMaybe<Scalars['String']['input']>;
  canBeCutAlongHeight?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongLength?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongWidth?: InputMaybe<Scalars['Boolean']['input']>;
  canBeDroppedOnZones?: InputMaybe<Array<EnumItemCanBeDroppedOnZones>>;
  categoriesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  compositeInfos?: InputMaybe<Scalars['String']['input']>;
  consideredAsDroppableZones?: InputMaybe<Array<EnumItemConsideredAsDroppableZones>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  customisationByItemsGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationCoverPlanes?: InputMaybe<Array<FilterFindManyItemCustomisationCoverPlanesInput>>;
  customisationMaterials?: InputMaybe<Array<FilterFindManyItemCustomisationMaterialsInput>>;
  customisationSubObjects?: InputMaybe<Array<FilterFindManyItemCustomisationSubObjectsInput>>;
  customisationSymbolicRepresentation?: InputMaybe<FilterFindManyItemCustomisationSymbolicRepresentationInput>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  factSheet?: InputMaybe<FilterFindManyItemFactSheetInput>;
  guardrailInformations?: InputMaybe<FilterFindManyItemGuardrailInformationsInput>;
  metadata?: InputMaybe<Array<FilterFindManyItemMetadataInput>>;
  minimumPricedDimensions?: InputMaybe<FilterFindManyItemMinimumPricedDimensionsInput>;
  modelUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  outputAssets?: InputMaybe<FilterFindManyItemOutputAssetsInput>;
  physicalHeight?: InputMaybe<Scalars['String']['input']>;
  physicalLength?: InputMaybe<Scalars['String']['input']>;
  physicalWidth?: InputMaybe<Scalars['String']['input']>;
  pillarInformations?: InputMaybe<FilterFindManyItemPillarInformationsInput>;
  priceCoefExclusion?: InputMaybe<Scalars['Boolean']['input']>;
  priceGeneration?: InputMaybe<EnumItemPriceGeneration>;
  priceUnit?: InputMaybe<EnumItemPriceUnit>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  roofInformations?: InputMaybe<FilterFindManyItemRoofInformationsInput>;
  scrapperTag?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stairsInformations?: InputMaybe<FilterFindManyItemStairsInformationsInput>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tooltip3DTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumItemType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
  vegetationInformations?: InputMaybe<FilterFindManyItemVegetationInformationsInput>;
  wallInformations?: InputMaybe<FilterFindManyItemWallInformationsInput>;
};

export type FilterFindManyItemMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyItemMinimumPricedDimensionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyItemNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyItemOperatorsInput = {
  _id?: InputMaybe<FilterFindManyItem_IdOperatorsInput>;
  createdById?: InputMaybe<FilterFindManyItemCreatedByIdOperatorsInput>;
  deleted?: InputMaybe<FilterFindManyItemDeletedOperatorsInput>;
  name?: InputMaybe<FilterFindManyItemNameOperatorsInput>;
  slug?: InputMaybe<FilterFindManyItemSlugOperatorsInput>;
};

export type FilterFindManyItemOutputAssetsCoatingVariantsAlbedoInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type FilterFindManyItemOutputAssetsCoatingVariantsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  albedo?: InputMaybe<FilterFindManyItemOutputAssetsCoatingVariantsAlbedoInput>;
  metallic?: InputMaybe<FilterFindManyItemOutputAssetsCoatingVariantsAlbedoInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  normal?: InputMaybe<FilterFindManyItemOutputAssetsCoatingVariantsAlbedoInput>;
  smoothness?: InputMaybe<FilterFindManyItemOutputAssetsCoatingVariantsAlbedoInput>;
};

export type FilterFindManyItemOutputAssetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  coatingVariants?: InputMaybe<Array<InputMaybe<FilterFindManyItemOutputAssetsCoatingVariantsInput>>>;
};

export type FilterFindManyItemPillarInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  cylinderSides?: InputMaybe<Scalars['Float']['input']>;
  materials?: InputMaybe<Array<InputMaybe<FilterFindManyItemPillarInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterFindManyItemPillarInformationsModelsInput>>>;
  necking?: InputMaybe<FilterFindManyItemPillarInformationsNeckingInput>;
};

export type FilterFindManyItemPillarInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsMaterialsType>;
};

export type FilterFindManyItemPillarInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemPillarInformationsNeckingCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemPillarInformationsNeckingInput = {
  crossSection?: InputMaybe<FilterFindManyItemPillarInformationsNeckingCrossSectionInput>;
  distanceToTop?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsCoveringInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  ridgeTiles?: InputMaybe<FilterFindManyItemRoofInformationsCoveringRidgeTilesInput>;
  sealingThickness?: InputMaybe<Scalars['Float']['input']>;
  spaceBetweenSealingAndTiles?: InputMaybe<Scalars['Float']['input']>;
  tilesThickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsCoveringRidgeTilesInput = {
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsEavesStyleInput = {
  type?: InputMaybe<EnumItemRoofInformationsEavesStyleType>;
};

export type FilterFindManyItemRoofInformationsFlatRoofBorderDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsFlatRoofInput = {
  borderDimensions?: InputMaybe<FilterFindManyItemRoofInformationsFlatRoofBorderDimensionsInput>;
  gravelThickness?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemRoofInformationsFramingInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  pieces?: InputMaybe<Array<InputMaybe<FilterFindManyItemRoofInformationsFramingPiecesInput>>>;
  type?: InputMaybe<EnumItemRoofInformationsFramingType>;
};

export type FilterFindManyItemRoofInformationsFramingPiecesEnd_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsFramingPiecesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  end_coordinate?: InputMaybe<FilterFindManyItemRoofInformationsFramingPiecesEnd_CoordinateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_coordinate?: InputMaybe<FilterFindManyItemRoofInformationsFramingPiecesStart_CoordinateInput>;
  type?: InputMaybe<EnumItemRoofInformationsFramingPiecesType>;
};

export type FilterFindManyItemRoofInformationsFramingPiecesStart_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsGutterInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  covering?: InputMaybe<FilterFindManyItemRoofInformationsCoveringInput>;
  eavesStyle?: InputMaybe<FilterFindManyItemRoofInformationsEavesStyleInput>;
  flatRoof?: InputMaybe<FilterFindManyItemRoofInformationsFlatRoofInput>;
  framing?: InputMaybe<FilterFindManyItemRoofInformationsFramingInput>;
  gutter?: InputMaybe<FilterFindManyItemRoofInformationsGutterInput>;
  materials?: InputMaybe<Array<InputMaybe<FilterFindManyItemRoofInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterFindManyItemRoofInformationsModelsInput>>>;
  overhang?: InputMaybe<FilterFindManyItemRoofInformationsOverhangInput>;
  purlins?: InputMaybe<FilterFindManyItemRoofInformationsPurlinsInput>;
  rafters?: InputMaybe<FilterFindManyItemRoofInformationsRaftersInput>;
  ridgeBoard?: InputMaybe<FilterFindManyItemRoofInformationsRidgeBoardInput>;
  solarPanels?: InputMaybe<FilterFindManyItemRoofInformationsSolarPanelsInput>;
  topPlate?: InputMaybe<FilterFindManyItemRoofInformationsTopPlateInput>;
};

export type FilterFindManyItemRoofInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsMaterialsType>;
};

export type FilterFindManyItemRoofInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsOverhangInput = {
  bargeboard?: InputMaybe<Scalars['Float']['input']>;
  bargeboardPurlins?: InputMaybe<Scalars['Float']['input']>;
  bargeboardRafters?: InputMaybe<Scalars['Float']['input']>;
  eave?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemRoofInformationsPurlinsBottomInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsPurlinsInput = {
  bottom?: InputMaybe<FilterFindManyItemRoofInformationsPurlinsBottomInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  intermediate?: InputMaybe<FilterFindManyItemRoofInformationsPurlinsIntermediateInput>;
  ridge?: InputMaybe<FilterFindManyItemRoofInformationsPurlinsRidgeInput>;
};

export type FilterFindManyItemRoofInformationsPurlinsIntermediateInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsPurlinsRidgeInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsRaftersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsRaftersInput = {
  crossSection?: InputMaybe<FilterFindManyItemRoofInformationsRaftersCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsRidgeBoardCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsRidgeBoardInput = {
  crossSection?: InputMaybe<FilterFindManyItemRoofInformationsRidgeBoardCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemRoofInformationsSolarPanelsFrameInput = {
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsSolarPanelsInput = {
  distanceToRoof?: InputMaybe<Scalars['Float']['input']>;
  frame?: InputMaybe<FilterFindManyItemRoofInformationsSolarPanelsFrameInput>;
  height?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsTopPlateCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemRoofInformationsTopPlateInput = {
  crossSection?: InputMaybe<FilterFindManyItemRoofInformationsTopPlateCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemSlugOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyItemStairsInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  landing?: InputMaybe<FilterFindManyItemStairsInformationsLandingInput>;
  materials?: InputMaybe<Array<InputMaybe<FilterFindManyItemStairsInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterFindManyItemStairsInformationsModelsInput>>>;
  railing?: InputMaybe<FilterFindManyItemStairsInformationsRailingInput>;
  steps?: InputMaybe<FilterFindManyItemStairsInformationsStepsInput>;
  stringers?: InputMaybe<FilterFindManyItemStairsInformationsStringersInput>;
};

export type FilterFindManyItemStairsInformationsLandingInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemStairsInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsMaterialsType>;
};

export type FilterFindManyItemStairsInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemStairsInformationsRailingBalustersInput = {
  radius?: InputMaybe<Scalars['Float']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemStairsInformationsRailingHandrailCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemStairsInformationsRailingHandrailInput = {
  crossSection?: InputMaybe<FilterFindManyItemStairsInformationsRailingHandrailCrossSectionInput>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemStairsInformationsRailingInput = {
  balusters?: InputMaybe<FilterFindManyItemStairsInformationsRailingBalustersInput>;
  handrail?: InputMaybe<FilterFindManyItemStairsInformationsRailingHandrailInput>;
  posts?: InputMaybe<FilterFindManyItemStairsInformationsRailingPostsInput>;
};

export type FilterFindManyItemStairsInformationsRailingPostsCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemStairsInformationsRailingPostsInput = {
  crossSection?: InputMaybe<FilterFindManyItemStairsInformationsRailingPostsCrossSectionInput>;
};

export type FilterFindManyItemStairsInformationsStepsInput = {
  risers?: InputMaybe<FilterFindManyItemStairsInformationsStepsRisersInput>;
  treats?: InputMaybe<FilterFindManyItemStairsInformationsStepsTreatsInput>;
};

export type FilterFindManyItemStairsInformationsStepsRisersInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemStairsInformationsStepsTreatsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  nose?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemStairsInformationsStringersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemStairsInformationsStringersInput = {
  crossSection?: InputMaybe<FilterFindManyItemStairsInformationsStringersCrossSectionInput>;
  overTreat?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemVegetationInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  canBeSelected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemWallInformationsApplicationInput = {
  bothSides?: InputMaybe<Scalars['Boolean']['input']>;
  exteriorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  overRegularWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemWallInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  application?: InputMaybe<FilterFindManyItemWallInformationsApplicationInput>;
  class?: InputMaybe<EnumItemWallInformationsClass>;
  meshes?: InputMaybe<Array<InputMaybe<FilterFindManyItemWallInformationsMeshesInput>>>;
};

export type FilterFindManyItemWallInformationsMeshesDimensionsInput = {
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemWallInformationsMeshesDisplayInput = {
  autoCut?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsHigh?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsLow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemWallInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buildingMaterial?: InputMaybe<EnumItemWallInformationsMeshesBuildingMaterial>;
  dimensions?: InputMaybe<FilterFindManyItemWallInformationsMeshesDimensionsInput>;
  display?: InputMaybe<FilterFindManyItemWallInformationsMeshesDisplayInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<FilterFindManyItemWallInformationsMeshesOptionsInput>;
  overlapPriority?: InputMaybe<Scalars['Float']['input']>;
  placing?: InputMaybe<FilterFindManyItemWallInformationsMeshesPlacingInput>;
  segmentTypes?: InputMaybe<FilterFindManyItemWallInformationsMeshesSegmentTypesInput>;
  surface?: InputMaybe<FilterFindManyItemWallInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemWallInformationsMeshesType>;
};

export type FilterFindManyItemWallInformationsMeshesOptionsInput = {
  closeBack?: InputMaybe<Scalars['Boolean']['input']>;
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeFront?: InputMaybe<Scalars['Boolean']['input']>;
  closeSides?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  nextToDoorsAndWindows?: InputMaybe<Scalars['Boolean']['input']>;
  paintable?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemWallInformationsMeshesOptionsShape>;
  skewOnCorners?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemWallInformationsMeshesPlacingBottomElevationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingBottomElevationReference>;
};

export type FilterFindManyItemWallInformationsMeshesPlacingInput = {
  beamDirection?: InputMaybe<EnumItemWallInformationsMeshesPlacingBeamDirection>;
  bottomElevation?: InputMaybe<FilterFindManyItemWallInformationsMeshesPlacingBottomElevationInput>;
  depthOffset?: InputMaybe<Scalars['Float']['input']>;
  doorPostOffset?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  endDepth?: InputMaybe<FilterFindManyItemWallInformationsMeshesPlacingStartDepthInput>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  moveVerticesAbove?: InputMaybe<Scalars['Float']['input']>;
  pivotIsOnTop?: InputMaybe<Scalars['Boolean']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
  repetitionFilter?: InputMaybe<EnumItemWallInformationsMeshesPlacingRepetitionFilter>;
  startDepth?: InputMaybe<FilterFindManyItemWallInformationsMeshesPlacingStartDepthInput>;
  stretchVertically?: InputMaybe<Scalars['Boolean']['input']>;
  topElevation?: InputMaybe<FilterFindManyItemWallInformationsMeshesPlacingBottomElevationInput>;
};

export type FilterFindManyItemWallInformationsMeshesPlacingStartDepthInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  plusOnTop?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingStartDepthReference>;
};

export type FilterFindManyItemWallInformationsMeshesSegmentTypesInput = {
  doors?: InputMaybe<Scalars['Boolean']['input']>;
  walls?: InputMaybe<Scalars['Boolean']['input']>;
  windows?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItemWallInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
  swapUV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindManyItem_IdOperatorsInput = {
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyItemsGroupInput = {
  AND?: InputMaybe<Array<FilterFindManyItemsGroupInput>>;
  OR?: InputMaybe<Array<FilterFindManyItemsGroupInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyItemsGroupOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  generated?: InputMaybe<Scalars['Boolean']['input']>;
  itemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  option?: InputMaybe<FilterFindManyItemsGroupOptionInput>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  shouldBeOpenInGUI?: InputMaybe<Scalars['Boolean']['input']>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumItemsGroupType>;
};

export type FilterFindManyItemsGroupNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyItemsGroupOperatorsInput = {
  _id?: InputMaybe<FilterFindManyItemsGroup_IdOperatorsInput>;
  name?: InputMaybe<FilterFindManyItemsGroupNameOperatorsInput>;
};

export type FilterFindManyItemsGroupOptionInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  baseItemId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  disableDefaultChoice?: InputMaybe<Scalars['Boolean']['input']>;
  positions?: InputMaybe<Array<FilterFindManyItemsGroupOptionPositionsInput>>;
};

export type FilterFindManyItemsGroupOptionPositionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  margins?: InputMaybe<FilterFindManyItemsGroupOptionPositionsMarginsInput>;
  placement?: InputMaybe<EnumItemsGroupOptionPositionsPlacement>;
  rotation?: InputMaybe<EnumItemsGroupOptionPositionsRotation>;
};

export type FilterFindManyItemsGroupOptionPositionsMarginsInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyItemsGroup_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPaletteColorsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  a?: InputMaybe<Scalars['Float']['input']>;
  b?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  g?: InputMaybe<Scalars['Float']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  r?: InputMaybe<Scalars['Float']['input']>;
  roughness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyPaletteInput = {
  AND?: InputMaybe<Array<FilterFindManyPaletteInput>>;
  OR?: InputMaybe<Array<FilterFindManyPaletteInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPaletteOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colors?: InputMaybe<Array<InputMaybe<FilterFindManyPaletteColorsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumPaletteType>;
};

export type FilterFindManyPaletteNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPaletteOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPalette_IdOperatorsInput>;
  name?: InputMaybe<FilterFindManyPaletteNameOperatorsInput>;
};

export type FilterFindManyPalette_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPictureInput = {
  AND?: InputMaybe<Array<FilterFindManyPictureInput>>;
  OR?: InputMaybe<Array<FilterFindManyPictureInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPictureOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPictureOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPicture_IdOperatorsInput>;
};

export type FilterFindManyPicture_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPipelineJobDeadlineJobIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyPipelineJobInput = {
  AND?: InputMaybe<Array<FilterFindManyPipelineJobInput>>;
  OR?: InputMaybe<Array<FilterFindManyPipelineJobInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPipelineJobOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  completedDate?: InputMaybe<Scalars['Date']['input']>;
  deadlineJobId?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<FilterFindManyPipelineJobSettingsInput>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state?: InputMaybe<EnumPipelineJobState>;
  submitDate?: InputMaybe<Scalars['Date']['input']>;
  /** Only find pipeline jobs that were created for a specific item */
  targetItemId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumPipelineJobType>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPipelineJobOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPipelineJob_IdOperatorsInput>;
  deadlineJobId?: InputMaybe<FilterFindManyPipelineJobDeadlineJobIdOperatorsInput>;
};

export type FilterFindManyPipelineJobSettingsConvertPbrMaterialToAssetBundleInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  assetUrl?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterFindManyPipelineJobSettingsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  convertPBRMaterialToAssetBundle?: InputMaybe<FilterFindManyPipelineJobSettingsConvertPbrMaterialToAssetBundleInput>;
};

export type FilterFindManyPipelineJob_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPlannedMaintenanceInput = {
  AND?: InputMaybe<Array<FilterFindManyPlannedMaintenanceInput>>;
  OR?: InputMaybe<Array<FilterFindManyPlannedMaintenanceInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPlannedMaintenanceOperatorsInput>;
  durationHours?: InputMaybe<Scalars['Float']['input']>;
  reasonTranslations?: InputMaybe<Scalars['Translations']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPlannedMaintenanceOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPlannedMaintenance_IdOperatorsInput>;
};

export type FilterFindManyPlannedMaintenance_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPriceTableInput = {
  AND?: InputMaybe<Array<FilterFindManyPriceTableInput>>;
  OR?: InputMaybe<Array<FilterFindManyPriceTableInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPriceTableOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  currencyName?: InputMaybe<Scalars['String']['input']>;
  displayEan?: InputMaybe<Scalars['Boolean']['input']>;
  globalDiscount?: InputMaybe<Scalars['Float']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  multiplyingCoefficient?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<InputMaybe<FilterFindManyPriceTablePricesInput>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  vatRate?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPriceTableOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPriceTable_IdOperatorsInput>;
};

export type FilterFindManyPriceTablePricesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  articleIdentifier?: InputMaybe<Scalars['String']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  itemsIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  sourceItemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterFindManyPriceTable_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyProductScanInput = {
  AND?: InputMaybe<Array<FilterFindManyProductScanInput>>;
  OR?: InputMaybe<Array<FilterFindManyProductScanInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyProductScanOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  creationDate?: InputMaybe<Scalars['Date']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  scans?: InputMaybe<Array<InputMaybe<FilterFindManyProductScanScansInput>>>;
  size?: InputMaybe<FilterFindManyProductScanSizeInput>;
  state?: InputMaybe<EnumProductScanState>;
  thumbnail?: InputMaybe<FilterFindManyProductScanScansInputImagesInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyProductScanOperatorsInput = {
  _id?: InputMaybe<FilterFindManyProductScan_IdOperatorsInput>;
};

export type FilterFindManyProductScanScansInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  generatedImages?: InputMaybe<Array<InputMaybe<FilterFindManyProductScanScansInputImagesInput>>>;
  inputImages?: InputMaybe<Array<InputMaybe<FilterFindManyProductScanScansInputImagesInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumProductScanScansType>;
};

export type FilterFindManyProductScanScansInputImagesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  format: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type FilterFindManyProductScanSizeInput = {
  height?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyProductScan_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterApartmentUnitBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterApartmentUnitCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterApartmentUnitInput = {
  AND?: InputMaybe<Array<FilterFindManyPromoterApartmentUnitInput>>;
  OR?: InputMaybe<Array<FilterFindManyPromoterApartmentUnitInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPromoterApartmentUnitOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  buildingNumber?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  purchaserFirstName?: InputMaybe<Scalars['String']['input']>;
  purchaserMail?: InputMaybe<Scalars['String']['input']>;
  purchaserSurname?: InputMaybe<Scalars['String']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitState>;
  unitNumber?: InputMaybe<Scalars['String']['input']>;
  unitTypeId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPromoterApartmentUnitOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPromoterApartmentUnit_IdOperatorsInput>;
  brandId?: InputMaybe<FilterFindManyPromoterApartmentUnitBrandIdOperatorsInput>;
  createdById?: InputMaybe<FilterFindManyPromoterApartmentUnitCreatedByIdOperatorsInput>;
  unitTypeId?: InputMaybe<FilterFindManyPromoterApartmentUnitUnitTypeIdOperatorsInput>;
};

export type FilterFindManyPromoterApartmentUnitTypeBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterApartmentUnitTypeCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterApartmentUnitTypeHistoryInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitTypeHistoryState>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterFindManyPromoterApartmentUnitTypeInput = {
  AND?: InputMaybe<Array<FilterFindManyPromoterApartmentUnitTypeInput>>;
  OR?: InputMaybe<Array<FilterFindManyPromoterApartmentUnitTypeInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPromoterApartmentUnitTypeOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  currentVersion?: InputMaybe<Scalars['Int']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONObject']['input']>;
  history?: InputMaybe<Array<FilterFindManyPromoterApartmentUnitTypeHistoryInput>>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  programId?: InputMaybe<Scalars['MongoID']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitTypeState>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPromoterApartmentUnitTypeOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPromoterApartmentUnitType_IdOperatorsInput>;
  brandId?: InputMaybe<FilterFindManyPromoterApartmentUnitTypeBrandIdOperatorsInput>;
  createdById?: InputMaybe<FilterFindManyPromoterApartmentUnitTypeCreatedByIdOperatorsInput>;
  programId?: InputMaybe<FilterFindManyPromoterApartmentUnitTypeProgramIdOperatorsInput>;
};

export type FilterFindManyPromoterApartmentUnitTypeProgramIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterApartmentUnitType_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterApartmentUnitUnitTypeIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterApartmentUnit_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterProgramBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterProgramCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterProgramInput = {
  AND?: InputMaybe<Array<FilterFindManyPromoterProgramInput>>;
  OR?: InputMaybe<Array<FilterFindManyPromoterProgramInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyPromoterProgramOperatorsInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  itemFilter?: InputMaybe<FilterFindManyPromoterProgramItemFilterInput>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planEditor?: InputMaybe<FilterFindManyPromoterProgramPlanEditorInput>;
  planUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  promoterId?: InputMaybe<Scalars['MongoID']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<EnumPromoterProgramState>;
  stylePresetGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
  zipCode?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyPromoterProgramItemFilterInput = {
  itemWhiteList?: InputMaybe<Array<Scalars['MongoID']['input']>>;
};

export type FilterFindManyPromoterProgramNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPromoterProgramOperatorsInput = {
  _id?: InputMaybe<FilterFindManyPromoterProgram_IdOperatorsInput>;
  brandId?: InputMaybe<FilterFindManyPromoterProgramBrandIdOperatorsInput>;
  createdById?: InputMaybe<FilterFindManyPromoterProgramCreatedByIdOperatorsInput>;
  name?: InputMaybe<FilterFindManyPromoterProgramNameOperatorsInput>;
  promoterId?: InputMaybe<FilterFindManyPromoterProgramPromoterIdOperatorsInput>;
  slug?: InputMaybe<FilterFindManyPromoterProgramSlugOperatorsInput>;
};

export type FilterFindManyPromoterProgramPlanEditorInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  dataFormatVersion?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterFindManyPromoterProgramPromoterIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyPromoterProgramSlugOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyPromoterProgram_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManySalesRecordBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManySalesRecordCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterFindManySalesRecordCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManySalesRecordInput = {
  AND?: InputMaybe<Array<FilterFindManySalesRecordInput>>;
  OR?: InputMaybe<Array<FilterFindManySalesRecordInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySalesRecordOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  finalCustomerMetadata?: InputMaybe<Scalars['Metadata']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySalesRecordOperatorsInput = {
  _id?: InputMaybe<FilterFindManySalesRecord_IdOperatorsInput>;
  brandId?: InputMaybe<FilterFindManySalesRecordBrandIdOperatorsInput>;
  createdAt?: InputMaybe<FilterFindManySalesRecordCreatedAtOperatorsInput>;
  createdById?: InputMaybe<FilterFindManySalesRecordCreatedByIdOperatorsInput>;
  updatedAt?: InputMaybe<FilterFindManySalesRecordUpdatedAtOperatorsInput>;
};

export type FilterFindManySalesRecordUpdatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterFindManySalesRecord_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManySaveCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterFindManySaveCreatedByOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManySaveFolderInput = {
  AND?: InputMaybe<Array<FilterFindManySaveFolderInput>>;
  OR?: InputMaybe<Array<FilterFindManySaveFolderInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySaveFolderOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['MongoID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySaveFolderOperatorsInput = {
  _id?: InputMaybe<FilterFindManySaveFolder_IdOperatorsInput>;
};

export type FilterFindManySaveFolder_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManySaveInput = {
  AND?: InputMaybe<Array<FilterFindManySaveInput>>;
  OR?: InputMaybe<Array<FilterFindManySaveInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySaveOperatorsInput>;
  additionalInfo?: InputMaybe<Scalars['JSON']['input']>;
  apartmentUnitTypeId?: InputMaybe<Scalars['MongoID']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  chosenStylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdBy?: InputMaybe<Scalars['MongoID']['input']>;
  createdByMe?: InputMaybe<Scalars['Boolean']['input']>;
  createdFromAP?: InputMaybe<Scalars['MongoID']['input']>;
  customerId?: InputMaybe<Scalars['MongoID']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  dataFormatVersion?: InputMaybe<Scalars['Int']['input']>;
  dataUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isReadonly?: InputMaybe<Scalars['Boolean']['input']>;
  isTemplate?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  moduleKitchenCustomData?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  quantitySurveyJSON?: InputMaybe<Scalars['String']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  storageBytesUsage?: InputMaybe<Scalars['Float']['input']>;
  stylePresetGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tunnelState?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<EnumSaveType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedBy?: InputMaybe<Scalars['MongoID']['input']>;
  visitViewpoints?: InputMaybe<Array<FilterFindManySaveVisitViewpointsInput>>;
};

export type FilterFindManySaveIsTemplateOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type FilterFindManySaveNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySaveOperatorsInput = {
  _id?: InputMaybe<FilterFindManySave_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterFindManySaveCreatedAtOperatorsInput>;
  createdBy?: InputMaybe<FilterFindManySaveCreatedByOperatorsInput>;
  isTemplate?: InputMaybe<FilterFindManySaveIsTemplateOperatorsInput>;
  name?: InputMaybe<FilterFindManySaveNameOperatorsInput>;
  updatedAt?: InputMaybe<FilterFindManySaveUpdatedAtOperatorsInput>;
};

export type FilterFindManySaveUpdatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterFindManySaveVisitViewpointsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation?: InputMaybe<FilterFindManySaveVisitViewpointsOrientationInput>;
  position?: InputMaybe<FilterFindManySaveVisitViewpointsPositionInput>;
};

export type FilterFindManySaveVisitViewpointsOrientationInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManySaveVisitViewpointsPositionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManySave_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManySavesGroupInput = {
  AND?: InputMaybe<Array<FilterFindManySavesGroupInput>>;
  OR?: InputMaybe<Array<FilterFindManySavesGroupInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySavesGroupOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  savesIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumSavesGroupType>;
};

export type FilterFindManySavesGroupNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySavesGroupOperatorsInput = {
  _id?: InputMaybe<FilterFindManySavesGroup_IdOperatorsInput>;
  name?: InputMaybe<FilterFindManySavesGroupNameOperatorsInput>;
};

export type FilterFindManySavesGroup_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManySettingInput = {
  AND?: InputMaybe<Array<FilterFindManySettingInput>>;
  OR?: InputMaybe<Array<FilterFindManySettingInput>>;
  _id?: InputMaybe<Scalars['String']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySettingOperatorsInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySettingOperatorsInput = {
  _id?: InputMaybe<FilterFindManySetting_IdOperatorsInput>;
};

export type FilterFindManySetting_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyStylePresetCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterFindManyStylePresetCustomisationPresetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  chosenItemId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationNameId?: InputMaybe<Scalars['String']['input']>;
  filterTag?: InputMaybe<Scalars['String']['input']>;
  rotationCondition?: InputMaybe<EnumStylePresetCustomisationPresetsRotationCondition>;
};

export type FilterFindManyStylePresetGroupInput = {
  AND?: InputMaybe<Array<FilterFindManyStylePresetGroupInput>>;
  OR?: InputMaybe<Array<FilterFindManyStylePresetGroupInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyStylePresetGroupOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stylePresetIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyStylePresetGroupNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyStylePresetGroupOperatorsInput = {
  _id?: InputMaybe<FilterFindManyStylePresetGroup_IdOperatorsInput>;
  name?: InputMaybe<FilterFindManyStylePresetGroupNameOperatorsInput>;
};

export type FilterFindManyStylePresetGroup_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyStylePresetInput = {
  AND?: InputMaybe<Array<FilterFindManyStylePresetInput>>;
  OR?: InputMaybe<Array<FilterFindManyStylePresetInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyStylePresetOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  customisationPresets?: InputMaybe<Array<InputMaybe<FilterFindManyStylePresetCustomisationPresetsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type FilterFindManyStylePresetNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyStylePresetOperatorsInput = {
  _id?: InputMaybe<FilterFindManyStylePreset_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterFindManyStylePresetCreatedAtOperatorsInput>;
  name?: InputMaybe<FilterFindManyStylePresetNameOperatorsInput>;
  updatedAt?: InputMaybe<FilterFindManyStylePresetUpdatedAtOperatorsInput>;
};

export type FilterFindManyStylePresetUpdatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterFindManyStylePreset_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyTutorialInput = {
  AND?: InputMaybe<Array<FilterFindManyTutorialInput>>;
  OR?: InputMaybe<Array<FilterFindManyTutorialInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyTutorialOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  displayOnlyOnce?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<FilterFindManyTutorialPointInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyTutorialOperatorsInput = {
  _id?: InputMaybe<FilterFindManyTutorial_IdOperatorsInput>;
};

export type FilterFindManyTutorialPointInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  illustration?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<EnumTutorialPointTarget>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
};

export type FilterFindManyTutorial_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyUserCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterFindManyUserCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyUserEmailOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManyUserInput = {
  AND?: InputMaybe<Array<FilterFindManyUserInput>>;
  OR?: InputMaybe<Array<FilterFindManyUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyUserOperatorsInput>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  favoriteItemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  favoriteSavesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type FilterFindManyUserNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyUserOperatorsInput = {
  _id?: InputMaybe<FilterFindManyUser_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterFindManyUserCreatedAtOperatorsInput>;
  createdById?: InputMaybe<FilterFindManyUserCreatedByIdOperatorsInput>;
  email?: InputMaybe<FilterFindManyUserEmailOperatorsInput>;
  name?: InputMaybe<FilterFindManyUserNameOperatorsInput>;
};

export type FilterFindManyUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneAccessPointBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneAccessPointInput = {
  AND?: InputMaybe<Array<FilterFindOneAccessPointInput>>;
  OR?: InputMaybe<Array<FilterFindOneAccessPointInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneAccessPointOperatorsInput>;
  areSavesPubliclyAvailableById?: InputMaybe<Scalars['Boolean']['input']>;
  authorizedCatalogIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  ecotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parametersScrapperId?: InputMaybe<Scalars['MongoID']['input']>;
  parametersTunnelId?: InputMaybe<Scalars['MongoID']['input']>;
  priceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  supportButton?: InputMaybe<FilterFindOneAccessPointSupportButtonInput>;
};

export type FilterFindOneAccessPointNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneAccessPointOperatorsInput = {
  _id?: InputMaybe<FilterFindOneAccessPoint_IdOperatorsInput>;
  brandId?: InputMaybe<FilterFindOneAccessPointBrandIdOperatorsInput>;
  name?: InputMaybe<FilterFindOneAccessPointNameOperatorsInput>;
};

export type FilterFindOneAccessPointSupportButtonInput = {
  icon?: InputMaybe<EnumAccessPointSupportButtonIcon>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumAccessPointSupportButtonType>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneAccessPoint_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneAppletInput = {
  AND?: InputMaybe<Array<FilterFindOneAppletInput>>;
  OR?: InputMaybe<Array<FilterFindOneAppletInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneAppletOperatorsInput>;
  encoding?: InputMaybe<EnumAppletEncoding>;
  indexedDbResetVersion?: InputMaybe<Scalars['String']['input']>;
  intVersion?: InputMaybe<Scalars['Float']['input']>;
  readableVersion?: InputMaybe<Scalars['String']['input']>;
  redirectedVersion?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneAppletOperatorsInput = {
  _id?: InputMaybe<FilterFindOneApplet_IdOperatorsInput>;
  version?: InputMaybe<FilterFindOneAppletVersionOperatorsInput>;
};

export type FilterFindOneAppletVersionOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneApplet_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneBarcodeCollectionBarcodeReferencesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneBarcodeCollectionCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneBarcodeCollectionInput = {
  AND?: InputMaybe<Array<FilterFindOneBarcodeCollectionInput>>;
  OR?: InputMaybe<Array<FilterFindOneBarcodeCollectionInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneBarcodeCollectionOperatorsInput>;
  barcodeReferences?: InputMaybe<Array<FilterFindOneBarcodeCollectionBarcodeReferencesInput>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneBarcodeCollectionOperatorsInput = {
  _id?: InputMaybe<FilterFindOneBarcodeCollection_IdOperatorsInput>;
  createdById?: InputMaybe<FilterFindOneBarcodeCollectionCreatedByIdOperatorsInput>;
};

export type FilterFindOneBarcodeCollection_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneBrandColorsInput = {
  dataProtection?: InputMaybe<Scalars['String']['input']>;
  legalNotice?: InputMaybe<Scalars['String']['input']>;
  loadingScreenBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenLogoPicture?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBorder?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarContent?: InputMaybe<Scalars['String']['input']>;
  loadingScreenText?: InputMaybe<Scalars['String']['input']>;
  meshes?: InputMaybe<FilterFindOneBrandColorsMeshesInput>;
  planElement?: InputMaybe<FilterFindOneBrandColorsPlanElementInput>;
  primary?: InputMaybe<Scalars['String']['input']>;
  questHeaderBackground?: InputMaybe<Scalars['String']['input']>;
  questHeaderBody?: InputMaybe<Scalars['String']['input']>;
  questHeaderTitle?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneBrandColorsMeshesInput = {
  wallCut?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneBrandColorsPlanElementInput = {
  floor?: InputMaybe<Scalars['String']['input']>;
  wall?: InputMaybe<Scalars['String']['input']>;
  window?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneBrandInput = {
  AND?: InputMaybe<Array<FilterFindOneBrandInput>>;
  OR?: InputMaybe<Array<FilterFindOneBrandInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneBrandOperatorsInput>;
  colors?: InputMaybe<FilterFindOneBrandColorsInput>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Only seek for brand the logged-in user is member of. */
  onlyMine?: InputMaybe<Scalars['Boolean']['input']>;
  promoterWebsiteConfiguration?: InputMaybe<FilterFindOneBrandPromoterWebsiteConfigurationInput>;
  satelliteConfiguration?: InputMaybe<FilterFindOneBrandSatelliteConfigurationInput>;
  shareCode?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneBrandOperatorsInput = {
  _id?: InputMaybe<FilterFindOneBrand_IdOperatorsInput>;
  shareCode?: InputMaybe<FilterFindOneBrandShareCodeOperatorsInput>;
  slug?: InputMaybe<FilterFindOneBrandSlugOperatorsInput>;
};

export type FilterFindOneBrandParametersScrapperInput = {
  AND?: InputMaybe<Array<FilterFindOneBrandParametersScrapperInput>>;
  OR?: InputMaybe<Array<FilterFindOneBrandParametersScrapperInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneBrandParametersScrapperOperatorsInput>;
  allowAnonymousSave?: InputMaybe<Scalars['Boolean']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  export?: InputMaybe<Scalars['Boolean']['input']>;
  geometry?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  objects?: InputMaybe<Scalars['Boolean']['input']>;
  postManualSaveTriggerSteps?: InputMaybe<Array<FilterFindOneBrandParametersScrapperPostManualSaveTriggerStepsInput>>;
  screenshots?: InputMaybe<Scalars['Boolean']['input']>;
  steps?: InputMaybe<Array<FilterFindOneBrandParametersScrapperStepsInput>>;
  watermark?: InputMaybe<FilterFindOneBrandParametersScrapperWatermarkInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneBrandParametersScrapperOperatorsInput = {
  _id?: InputMaybe<FilterFindOneBrandParametersScrapper_IdOperatorsInput>;
};

export type FilterFindOneBrandParametersScrapperPostManualSaveTriggerStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  triggerPopup?: InputMaybe<FilterFindOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput>;
  type?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsType>;
};

export type FilterFindOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buttonType?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupButtonType>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  yesNoButtons?: InputMaybe<FilterFindOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput>;
};

export type FilterFindOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput = {
  stateProperty?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneBrandParametersScrapperStepsFilterInput = {
  expression?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneBrandParametersScrapperStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  filter?: InputMaybe<FilterFindOneBrandParametersScrapperStepsFilterInput>;
  map?: InputMaybe<FilterFindOneBrandParametersScrapperStepsMapInput>;
  stepType?: InputMaybe<EnumBrandParametersScrapperStepsStepType>;
  stepVerb?: InputMaybe<Scalars['String']['input']>;
  tap?: InputMaybe<FilterFindOneBrandParametersScrapperStepsTapInput>;
  verbFilter?: InputMaybe<EnumBrandParametersScrapperStepsVerbFilter>;
  verbMap?: InputMaybe<EnumBrandParametersScrapperStepsVerbMap>;
  verbTap?: InputMaybe<EnumBrandParametersScrapperStepsVerbTap>;
};

export type FilterFindOneBrandParametersScrapperStepsMapInput = {
  kitchenPricer?: InputMaybe<FilterFindOneBrandParametersScrapperStepsMapKitchenPricerInput>;
  payloadGenerator?: InputMaybe<FilterFindOneBrandParametersScrapperStepsMapPayloadGeneratorInput>;
  pdfReportGenerator?: InputMaybe<FilterFindOneBrandParametersScrapperStepsMapPdfReportGeneratorInput>;
  plinthCalculator?: InputMaybe<FilterFindOneBrandParametersScrapperStepsMapPlinthCalculatorInput>;
  reportGenerator?: InputMaybe<FilterFindOneBrandParametersScrapperStepsMapReportGeneratorInput>;
  terracePricer?: InputMaybe<FilterFindOneBrandParametersScrapperStepsMapTerracePricerInput>;
};

export type FilterFindOneBrandParametersScrapperStepsMapKitchenPricerInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  barcodeCollectionId?: InputMaybe<Scalars['MongoID']['input']>;
  projectBaseUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneBrandParametersScrapperStepsMapPayloadGeneratorInput = {
  addSaveName?: InputMaybe<Scalars['Boolean']['input']>;
  addUpdateToken?: InputMaybe<Scalars['Boolean']['input']>;
  dynamicParameterForTunnelStateInformation?: InputMaybe<Scalars['String']['input']>;
  tunnelStateKeys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FilterFindOneBrandParametersScrapperStepsMapPdfReportGeneratorInput = {
  payloadType?: InputMaybe<EnumBrandParametersScrapperStepsMapPdfReportGeneratorPayloadType>;
};

export type FilterFindOneBrandParametersScrapperStepsMapPlinthCalculatorInput = {
  bigPlinthId?: InputMaybe<Scalars['MongoID']['input']>;
  littlePlinthId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterFindOneBrandParametersScrapperStepsMapReportGeneratorInput = {
  chunksManifest?: InputMaybe<Array<FilterFindOneInputDocumentChunkManifestInput>>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<EnumBrandParametersScrapperStepsMapReportGeneratorMode>;
};

export type FilterFindOneBrandParametersScrapperStepsMapTerracePricerInput = {
  itemsCatalogId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterFindOneBrandParametersScrapperStepsTapInput = {
  outputToApi?: InputMaybe<FilterFindOneBrandParametersScrapperStepsTapOutputToApiInput>;
  sendEmail?: InputMaybe<FilterFindOneBrandParametersScrapperStepsTapSendEmailInput>;
};

export type FilterFindOneBrandParametersScrapperStepsTapOutputToApiInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  signPayload?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneBrandParametersScrapperStepsTapSendEmailInput = {
  attachmentName?: InputMaybe<Scalars['String']['input']>;
  dynamicParameterEmailAdress?: InputMaybe<Scalars['String']['input']>;
  emailSourceType?: InputMaybe<EnumBrandParametersScrapperStepsTapSendEmailEmailSourceType>;
  sendReportAsAttachment?: InputMaybe<Scalars['Boolean']['input']>;
  staticEmailAdress?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneBrandParametersScrapperWatermarkInput = {
  alpha?: InputMaybe<Scalars['Float']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  repetition?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneBrandParametersScrapper_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneBrandPromoterWebsiteConfigurationInput = {
  acquirerValidateUnitAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  metadataConfiguration?: InputMaybe<FilterFindOneBrandPromoterWebsiteConfigurationMetadataConfigurationInput>;
  operatorTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  promoterValidateTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  unitTypeSaveModelId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterFindOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataType>;
};

export type FilterFindOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataType>;
};

export type FilterFindOneBrandPromoterWebsiteConfigurationMetadataConfigurationInput = {
  apartmentUnitMetadata?: InputMaybe<Array<FilterFindOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput>>;
  apartmentUnitTypeIdMetadataKey?: InputMaybe<Scalars['String']['input']>;
  apartmentUnitTypeMetadata?: InputMaybe<Array<FilterFindOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput>>;
  programMetadata?: InputMaybe<Array<FilterFindOneBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput>>;
};

export type FilterFindOneBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataType>;
};

export type FilterFindOneBrandSatelliteConfigurationInput = {
  satelliteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneBrandShareCodeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneBrandSlugOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneBrand_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneCatalogFolderInput = {
  AND?: InputMaybe<Array<FilterFindOneCatalogFolderInput>>;
  OR?: InputMaybe<Array<FilterFindOneCatalogFolderInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneCatalogFolderOperatorsInput>;
  associatedEcotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  brand?: InputMaybe<Scalars['MongoID']['input']>;
  /** Filter catalogs by parent brand id. */
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  iconId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<FilterFindOneCatalogFolderMetadataInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  rootId?: InputMaybe<Scalars['MongoID']['input']>;
  sharedWithIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailId?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tiles?: InputMaybe<Array<InputMaybe<FilterFindOneCatalogFolderTilesInput>>>;
  tilesBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  tilesColumnAmount?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnGap?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  tilesRowGap?: InputMaybe<Scalars['Float']['input']>;
  tilesRowSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  type?: InputMaybe<EnumCatalogFolderType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  virtual?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneCatalogFolderMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneCatalogFolderOperatorsInput = {
  _id?: InputMaybe<FilterFindOneCatalogFolder_IdOperatorsInput>;
};

export type FilterFindOneCatalogFolderTilesImagePlacementInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneCatalogFolderTilesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  advancedTextTranslations?: InputMaybe<Scalars['Translations']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundOpacity?: InputMaybe<Scalars['Float']['input']>;
  borderRadius?: InputMaybe<Scalars['Float']['input']>;
  catalogSourceId?: InputMaybe<Scalars['MongoID']['input']>;
  construction?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionTextSize?: InputMaybe<Scalars['Float']['input']>;
  folder?: InputMaybe<Scalars['MongoID']['input']>;
  hasShadow?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  horizontalTextAlignement?: InputMaybe<EnumCatalogFolderTilesHorizontalTextAlignement>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  imagePlacement?: InputMaybe<FilterFindOneCatalogFolderTilesImagePlacementInput>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isImagePlacementFree?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  item?: InputMaybe<Scalars['MongoID']['input']>;
  itemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  mask?: InputMaybe<Scalars['Boolean']['input']>;
  maskColor?: InputMaybe<Scalars['String']['input']>;
  maskOpacity?: InputMaybe<Scalars['Float']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<FilterFindOneCatalogFolderTilesMetadataInput>>>;
  posX?: InputMaybe<Scalars['Float']['input']>;
  posY?: InputMaybe<Scalars['Float']['input']>;
  saveSelectedInTunnelStateVariable?: InputMaybe<Scalars['String']['input']>;
  stylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textDescriptionTranslations?: InputMaybe<Scalars['Translations']['input']>;
  textPadding?: InputMaybe<FilterFindOneCatalogFolderTilesTextPaddingInput>;
  textTitleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTextColor?: InputMaybe<Scalars['String']['input']>;
  titleTextSize?: InputMaybe<Scalars['Float']['input']>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumCatalogFolderTilesType>;
  useAdvancedText?: InputMaybe<Scalars['Boolean']['input']>;
  verticalTextAlignement?: InputMaybe<EnumCatalogFolderTilesVerticalTextAlignement>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneCatalogFolderTilesMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneCatalogFolderTilesTextPaddingInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneCatalogFolder_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneCustomerAddressOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneCustomerBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneCustomerCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneCustomerEmailOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneCustomerFirstnameAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneCustomerFirstnameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneCustomerGenderAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneCustomerGenderOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneCustomerInput = {
  AND?: InputMaybe<Array<FilterFindOneCustomerInput>>;
  OR?: InputMaybe<Array<FilterFindOneCustomerInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneCustomerOperatorsInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  firstnameAdditional?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  genderAdditional?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  surnameAdditional?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneCustomerOperatorsInput = {
  _id?: InputMaybe<FilterFindOneCustomer_IdOperatorsInput>;
  address?: InputMaybe<FilterFindOneCustomerAddressOperatorsInput>;
  brandId?: InputMaybe<FilterFindOneCustomerBrandIdOperatorsInput>;
  createdById?: InputMaybe<FilterFindOneCustomerCreatedByIdOperatorsInput>;
  email?: InputMaybe<FilterFindOneCustomerEmailOperatorsInput>;
  firstname?: InputMaybe<FilterFindOneCustomerFirstnameOperatorsInput>;
  firstnameAdditional?: InputMaybe<FilterFindOneCustomerFirstnameAdditionalOperatorsInput>;
  gender?: InputMaybe<FilterFindOneCustomerGenderOperatorsInput>;
  genderAdditional?: InputMaybe<FilterFindOneCustomerGenderAdditionalOperatorsInput>;
  surname?: InputMaybe<FilterFindOneCustomerSurnameOperatorsInput>;
  surnameAdditional?: InputMaybe<FilterFindOneCustomerSurnameAdditionalOperatorsInput>;
};

export type FilterFindOneCustomerSurnameAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneCustomerSurnameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneCustomer_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

/** Configures the parameters of one or multiple chunks in the document. */
export type FilterFindOneInputDocumentChunkManifestInput = {
  /** Render-time parameters object, implementing the chunk's parameters schema as given in the output manifest. The type of this property is loosely-typed in GraphQL, but verified at runtime against that schema. If the parameters passed are invalid against the schema, the chunk will be disabled and a manifest warning will be issued. */
  parameters?: InputMaybe<Scalars['JSONObject']['input']>;
  /** A path selector to target one or multiple chunks, since it can be a bash-like glob pattern, ex. "/my-section/my-chunk-123", "/my-section/my-chunk-*", "/**\/my-chunk-*", etc. */
  path?: InputMaybe<Scalars['String']['input']>;
  /** Defines whether the chunk should be rendered in the document. If set "false" on a group chunk, it applies to its children recursively. */
  render?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneItemCustomisationCoverPlanesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItem?: InputMaybe<Scalars['MongoID']['input']>;
  hideForSingleObject?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<EnumItemCustomisationCoverPlanesMode>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  positions?: InputMaybe<FilterFindOneItemCustomisationCoverPlanesPositionsInput>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemCustomisationCoverPlanesPositionsInput = {
  above?: InputMaybe<Scalars['Boolean']['input']>;
  behind?: InputMaybe<Scalars['Boolean']['input']>;
  front?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemCustomisationMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPalette?: InputMaybe<Scalars['MongoID']['input']>;
  materials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumItemCustomisationMaterialsType>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemCustomisationSubObjectsHooksInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation?: InputMaybe<FilterFindOneItemCustomisationSubObjectsHooksOrientationInput>;
  position?: InputMaybe<FilterFindOneItemCustomisationSubObjectsHooksPositionInput>;
  type?: InputMaybe<EnumItemCustomisationSubObjectsHooksType>;
};

export type FilterFindOneItemCustomisationSubObjectsHooksOrientationInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemCustomisationSubObjectsHooksPositionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemCustomisationSubObjectsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  hooks?: InputMaybe<Array<InputMaybe<FilterFindOneItemCustomisationSubObjectsHooksInput>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemCustomisationSymbolicRepresentationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  anglePositionIsRight?: InputMaybe<Scalars['Boolean']['input']>;
  break3D?: InputMaybe<Scalars['Boolean']['input']>;
  colors?: InputMaybe<EnumItemCustomisationSymbolicRepresentationColors>;
  displayDiagonals?: InputMaybe<Scalars['Boolean']['input']>;
  doorType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationDoorType>;
  drawerCount?: InputMaybe<Scalars['Float']['input']>;
  symbolicIcon?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIcon>;
  symbolicIconShape?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconShape>;
  symbolicIconSubType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconSubType>;
  type?: InputMaybe<EnumItemCustomisationSymbolicRepresentationType>;
};

export type FilterFindOneItemFactSheetInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONObject']['input']>;
  logoPicture?: InputMaybe<Scalars['String']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneItemGuardrailInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  meshes?: InputMaybe<Array<InputMaybe<FilterFindOneItemGuardrailInformationsMeshesInput>>>;
};

export type FilterFindOneItemGuardrailInformationsMeshesDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemGuardrailInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  dimensions?: InputMaybe<FilterFindOneItemGuardrailInformationsMeshesDimensionsInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  options?: InputMaybe<FilterFindOneItemGuardrailInformationsMeshesOptionsInput>;
  placing?: InputMaybe<FilterFindOneItemGuardrailInformationsMeshesPlacingInput>;
  surface?: InputMaybe<FilterFindOneItemGuardrailInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemGuardrailInformationsMeshesType>;
};

export type FilterFindOneItemGuardrailInformationsMeshesOptionsInput = {
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemGuardrailInformationsMeshesOptionsShape>;
};

export type FilterFindOneItemGuardrailInformationsMeshesPlacingInput = {
  elevation?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemGuardrailInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemInput = {
  AND?: InputMaybe<Array<FilterFindOneItemInput>>;
  OR?: InputMaybe<Array<FilterFindOneItemInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneItemOperatorsInput>;
  articleCode?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  buildingWingInfos?: InputMaybe<Scalars['String']['input']>;
  canBeCutAlongHeight?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongLength?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongWidth?: InputMaybe<Scalars['Boolean']['input']>;
  canBeDroppedOnZones?: InputMaybe<Array<EnumItemCanBeDroppedOnZones>>;
  categoriesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  compositeInfos?: InputMaybe<Scalars['String']['input']>;
  consideredAsDroppableZones?: InputMaybe<Array<EnumItemConsideredAsDroppableZones>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  customisationByItemsGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationCoverPlanes?: InputMaybe<Array<FilterFindOneItemCustomisationCoverPlanesInput>>;
  customisationMaterials?: InputMaybe<Array<FilterFindOneItemCustomisationMaterialsInput>>;
  customisationSubObjects?: InputMaybe<Array<FilterFindOneItemCustomisationSubObjectsInput>>;
  customisationSymbolicRepresentation?: InputMaybe<FilterFindOneItemCustomisationSymbolicRepresentationInput>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  factSheet?: InputMaybe<FilterFindOneItemFactSheetInput>;
  guardrailInformations?: InputMaybe<FilterFindOneItemGuardrailInformationsInput>;
  metadata?: InputMaybe<Array<FilterFindOneItemMetadataInput>>;
  minimumPricedDimensions?: InputMaybe<FilterFindOneItemMinimumPricedDimensionsInput>;
  modelUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  outputAssets?: InputMaybe<FilterFindOneItemOutputAssetsInput>;
  physicalHeight?: InputMaybe<Scalars['String']['input']>;
  physicalLength?: InputMaybe<Scalars['String']['input']>;
  physicalWidth?: InputMaybe<Scalars['String']['input']>;
  pillarInformations?: InputMaybe<FilterFindOneItemPillarInformationsInput>;
  priceCoefExclusion?: InputMaybe<Scalars['Boolean']['input']>;
  priceGeneration?: InputMaybe<EnumItemPriceGeneration>;
  priceUnit?: InputMaybe<EnumItemPriceUnit>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  roofInformations?: InputMaybe<FilterFindOneItemRoofInformationsInput>;
  scrapperTag?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stairsInformations?: InputMaybe<FilterFindOneItemStairsInformationsInput>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tooltip3DTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumItemType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
  vegetationInformations?: InputMaybe<FilterFindOneItemVegetationInformationsInput>;
  wallInformations?: InputMaybe<FilterFindOneItemWallInformationsInput>;
};

export type FilterFindOneItemMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneItemMinimumPricedDimensionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneItemNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneItemOperatorsInput = {
  _id?: InputMaybe<FilterFindOneItem_IdOperatorsInput>;
  createdById?: InputMaybe<FilterFindOneItemCreatedByIdOperatorsInput>;
  name?: InputMaybe<FilterFindOneItemNameOperatorsInput>;
  slug?: InputMaybe<FilterFindOneItemSlugOperatorsInput>;
};

export type FilterFindOneItemOutputAssetsCoatingVariantsAlbedoInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type FilterFindOneItemOutputAssetsCoatingVariantsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  albedo?: InputMaybe<FilterFindOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  metallic?: InputMaybe<FilterFindOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  normal?: InputMaybe<FilterFindOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  smoothness?: InputMaybe<FilterFindOneItemOutputAssetsCoatingVariantsAlbedoInput>;
};

export type FilterFindOneItemOutputAssetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  coatingVariants?: InputMaybe<Array<InputMaybe<FilterFindOneItemOutputAssetsCoatingVariantsInput>>>;
};

export type FilterFindOneItemPillarInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  cylinderSides?: InputMaybe<Scalars['Float']['input']>;
  materials?: InputMaybe<Array<InputMaybe<FilterFindOneItemPillarInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterFindOneItemPillarInformationsModelsInput>>>;
  necking?: InputMaybe<FilterFindOneItemPillarInformationsNeckingInput>;
};

export type FilterFindOneItemPillarInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsMaterialsType>;
};

export type FilterFindOneItemPillarInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemPillarInformationsNeckingCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemPillarInformationsNeckingInput = {
  crossSection?: InputMaybe<FilterFindOneItemPillarInformationsNeckingCrossSectionInput>;
  distanceToTop?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsCoveringInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  ridgeTiles?: InputMaybe<FilterFindOneItemRoofInformationsCoveringRidgeTilesInput>;
  sealingThickness?: InputMaybe<Scalars['Float']['input']>;
  spaceBetweenSealingAndTiles?: InputMaybe<Scalars['Float']['input']>;
  tilesThickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsCoveringRidgeTilesInput = {
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsEavesStyleInput = {
  type?: InputMaybe<EnumItemRoofInformationsEavesStyleType>;
};

export type FilterFindOneItemRoofInformationsFlatRoofBorderDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsFlatRoofInput = {
  borderDimensions?: InputMaybe<FilterFindOneItemRoofInformationsFlatRoofBorderDimensionsInput>;
  gravelThickness?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemRoofInformationsFramingInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  pieces?: InputMaybe<Array<InputMaybe<FilterFindOneItemRoofInformationsFramingPiecesInput>>>;
  type?: InputMaybe<EnumItemRoofInformationsFramingType>;
};

export type FilterFindOneItemRoofInformationsFramingPiecesEnd_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsFramingPiecesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  end_coordinate?: InputMaybe<FilterFindOneItemRoofInformationsFramingPiecesEnd_CoordinateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_coordinate?: InputMaybe<FilterFindOneItemRoofInformationsFramingPiecesStart_CoordinateInput>;
  type?: InputMaybe<EnumItemRoofInformationsFramingPiecesType>;
};

export type FilterFindOneItemRoofInformationsFramingPiecesStart_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsGutterInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  covering?: InputMaybe<FilterFindOneItemRoofInformationsCoveringInput>;
  eavesStyle?: InputMaybe<FilterFindOneItemRoofInformationsEavesStyleInput>;
  flatRoof?: InputMaybe<FilterFindOneItemRoofInformationsFlatRoofInput>;
  framing?: InputMaybe<FilterFindOneItemRoofInformationsFramingInput>;
  gutter?: InputMaybe<FilterFindOneItemRoofInformationsGutterInput>;
  materials?: InputMaybe<Array<InputMaybe<FilterFindOneItemRoofInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterFindOneItemRoofInformationsModelsInput>>>;
  overhang?: InputMaybe<FilterFindOneItemRoofInformationsOverhangInput>;
  purlins?: InputMaybe<FilterFindOneItemRoofInformationsPurlinsInput>;
  rafters?: InputMaybe<FilterFindOneItemRoofInformationsRaftersInput>;
  ridgeBoard?: InputMaybe<FilterFindOneItemRoofInformationsRidgeBoardInput>;
  solarPanels?: InputMaybe<FilterFindOneItemRoofInformationsSolarPanelsInput>;
  topPlate?: InputMaybe<FilterFindOneItemRoofInformationsTopPlateInput>;
};

export type FilterFindOneItemRoofInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsMaterialsType>;
};

export type FilterFindOneItemRoofInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsOverhangInput = {
  bargeboard?: InputMaybe<Scalars['Float']['input']>;
  bargeboardPurlins?: InputMaybe<Scalars['Float']['input']>;
  bargeboardRafters?: InputMaybe<Scalars['Float']['input']>;
  eave?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemRoofInformationsPurlinsBottomInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsPurlinsInput = {
  bottom?: InputMaybe<FilterFindOneItemRoofInformationsPurlinsBottomInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  intermediate?: InputMaybe<FilterFindOneItemRoofInformationsPurlinsIntermediateInput>;
  ridge?: InputMaybe<FilterFindOneItemRoofInformationsPurlinsRidgeInput>;
};

export type FilterFindOneItemRoofInformationsPurlinsIntermediateInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsPurlinsRidgeInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsRaftersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsRaftersInput = {
  crossSection?: InputMaybe<FilterFindOneItemRoofInformationsRaftersCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsRidgeBoardCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsRidgeBoardInput = {
  crossSection?: InputMaybe<FilterFindOneItemRoofInformationsRidgeBoardCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemRoofInformationsSolarPanelsFrameInput = {
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsSolarPanelsInput = {
  distanceToRoof?: InputMaybe<Scalars['Float']['input']>;
  frame?: InputMaybe<FilterFindOneItemRoofInformationsSolarPanelsFrameInput>;
  height?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsTopPlateCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemRoofInformationsTopPlateInput = {
  crossSection?: InputMaybe<FilterFindOneItemRoofInformationsTopPlateCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemSlugOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneItemStairsInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  landing?: InputMaybe<FilterFindOneItemStairsInformationsLandingInput>;
  materials?: InputMaybe<Array<InputMaybe<FilterFindOneItemStairsInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterFindOneItemStairsInformationsModelsInput>>>;
  railing?: InputMaybe<FilterFindOneItemStairsInformationsRailingInput>;
  steps?: InputMaybe<FilterFindOneItemStairsInformationsStepsInput>;
  stringers?: InputMaybe<FilterFindOneItemStairsInformationsStringersInput>;
};

export type FilterFindOneItemStairsInformationsLandingInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemStairsInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsMaterialsType>;
};

export type FilterFindOneItemStairsInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemStairsInformationsRailingBalustersInput = {
  radius?: InputMaybe<Scalars['Float']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemStairsInformationsRailingHandrailCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemStairsInformationsRailingHandrailInput = {
  crossSection?: InputMaybe<FilterFindOneItemStairsInformationsRailingHandrailCrossSectionInput>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemStairsInformationsRailingInput = {
  balusters?: InputMaybe<FilterFindOneItemStairsInformationsRailingBalustersInput>;
  handrail?: InputMaybe<FilterFindOneItemStairsInformationsRailingHandrailInput>;
  posts?: InputMaybe<FilterFindOneItemStairsInformationsRailingPostsInput>;
};

export type FilterFindOneItemStairsInformationsRailingPostsCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemStairsInformationsRailingPostsInput = {
  crossSection?: InputMaybe<FilterFindOneItemStairsInformationsRailingPostsCrossSectionInput>;
};

export type FilterFindOneItemStairsInformationsStepsInput = {
  risers?: InputMaybe<FilterFindOneItemStairsInformationsStepsRisersInput>;
  treats?: InputMaybe<FilterFindOneItemStairsInformationsStepsTreatsInput>;
};

export type FilterFindOneItemStairsInformationsStepsRisersInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemStairsInformationsStepsTreatsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  nose?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemStairsInformationsStringersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemStairsInformationsStringersInput = {
  crossSection?: InputMaybe<FilterFindOneItemStairsInformationsStringersCrossSectionInput>;
  overTreat?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemVegetationInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  canBeSelected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemWallInformationsApplicationInput = {
  bothSides?: InputMaybe<Scalars['Boolean']['input']>;
  exteriorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  overRegularWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemWallInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  application?: InputMaybe<FilterFindOneItemWallInformationsApplicationInput>;
  class?: InputMaybe<EnumItemWallInformationsClass>;
  meshes?: InputMaybe<Array<InputMaybe<FilterFindOneItemWallInformationsMeshesInput>>>;
};

export type FilterFindOneItemWallInformationsMeshesDimensionsInput = {
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemWallInformationsMeshesDisplayInput = {
  autoCut?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsHigh?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsLow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemWallInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buildingMaterial?: InputMaybe<EnumItemWallInformationsMeshesBuildingMaterial>;
  dimensions?: InputMaybe<FilterFindOneItemWallInformationsMeshesDimensionsInput>;
  display?: InputMaybe<FilterFindOneItemWallInformationsMeshesDisplayInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<FilterFindOneItemWallInformationsMeshesOptionsInput>;
  overlapPriority?: InputMaybe<Scalars['Float']['input']>;
  placing?: InputMaybe<FilterFindOneItemWallInformationsMeshesPlacingInput>;
  segmentTypes?: InputMaybe<FilterFindOneItemWallInformationsMeshesSegmentTypesInput>;
  surface?: InputMaybe<FilterFindOneItemWallInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemWallInformationsMeshesType>;
};

export type FilterFindOneItemWallInformationsMeshesOptionsInput = {
  closeBack?: InputMaybe<Scalars['Boolean']['input']>;
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeFront?: InputMaybe<Scalars['Boolean']['input']>;
  closeSides?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  nextToDoorsAndWindows?: InputMaybe<Scalars['Boolean']['input']>;
  paintable?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemWallInformationsMeshesOptionsShape>;
  skewOnCorners?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemWallInformationsMeshesPlacingBottomElevationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingBottomElevationReference>;
};

export type FilterFindOneItemWallInformationsMeshesPlacingInput = {
  beamDirection?: InputMaybe<EnumItemWallInformationsMeshesPlacingBeamDirection>;
  bottomElevation?: InputMaybe<FilterFindOneItemWallInformationsMeshesPlacingBottomElevationInput>;
  depthOffset?: InputMaybe<Scalars['Float']['input']>;
  doorPostOffset?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  endDepth?: InputMaybe<FilterFindOneItemWallInformationsMeshesPlacingStartDepthInput>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  moveVerticesAbove?: InputMaybe<Scalars['Float']['input']>;
  pivotIsOnTop?: InputMaybe<Scalars['Boolean']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
  repetitionFilter?: InputMaybe<EnumItemWallInformationsMeshesPlacingRepetitionFilter>;
  startDepth?: InputMaybe<FilterFindOneItemWallInformationsMeshesPlacingStartDepthInput>;
  stretchVertically?: InputMaybe<Scalars['Boolean']['input']>;
  topElevation?: InputMaybe<FilterFindOneItemWallInformationsMeshesPlacingBottomElevationInput>;
};

export type FilterFindOneItemWallInformationsMeshesPlacingStartDepthInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  plusOnTop?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingStartDepthReference>;
};

export type FilterFindOneItemWallInformationsMeshesSegmentTypesInput = {
  doors?: InputMaybe<Scalars['Boolean']['input']>;
  walls?: InputMaybe<Scalars['Boolean']['input']>;
  windows?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItemWallInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
  swapUV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterFindOneItem_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneItemsGroupInput = {
  AND?: InputMaybe<Array<FilterFindOneItemsGroupInput>>;
  OR?: InputMaybe<Array<FilterFindOneItemsGroupInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneItemsGroupOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  generated?: InputMaybe<Scalars['Boolean']['input']>;
  itemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  option?: InputMaybe<FilterFindOneItemsGroupOptionInput>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  shouldBeOpenInGUI?: InputMaybe<Scalars['Boolean']['input']>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumItemsGroupType>;
};

export type FilterFindOneItemsGroupNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneItemsGroupOperatorsInput = {
  _id?: InputMaybe<FilterFindOneItemsGroup_IdOperatorsInput>;
  name?: InputMaybe<FilterFindOneItemsGroupNameOperatorsInput>;
};

export type FilterFindOneItemsGroupOptionInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  baseItemId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  disableDefaultChoice?: InputMaybe<Scalars['Boolean']['input']>;
  positions?: InputMaybe<Array<FilterFindOneItemsGroupOptionPositionsInput>>;
};

export type FilterFindOneItemsGroupOptionPositionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  margins?: InputMaybe<FilterFindOneItemsGroupOptionPositionsMarginsInput>;
  placement?: InputMaybe<EnumItemsGroupOptionPositionsPlacement>;
  rotation?: InputMaybe<EnumItemsGroupOptionPositionsRotation>;
};

export type FilterFindOneItemsGroupOptionPositionsMarginsInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneItemsGroup_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePaletteColorsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  a?: InputMaybe<Scalars['Float']['input']>;
  b?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  g?: InputMaybe<Scalars['Float']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  r?: InputMaybe<Scalars['Float']['input']>;
  roughness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOnePaletteInput = {
  AND?: InputMaybe<Array<FilterFindOnePaletteInput>>;
  OR?: InputMaybe<Array<FilterFindOnePaletteInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOnePaletteOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colors?: InputMaybe<Array<InputMaybe<FilterFindOnePaletteColorsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumPaletteType>;
};

export type FilterFindOnePaletteNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePaletteOperatorsInput = {
  _id?: InputMaybe<FilterFindOnePalette_IdOperatorsInput>;
  name?: InputMaybe<FilterFindOnePaletteNameOperatorsInput>;
};

export type FilterFindOnePalette_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePictureInput = {
  AND?: InputMaybe<Array<FilterFindOnePictureInput>>;
  OR?: InputMaybe<Array<FilterFindOnePictureInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOnePictureOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePictureOperatorsInput = {
  _id?: InputMaybe<FilterFindOnePicture_IdOperatorsInput>;
};

export type FilterFindOnePicture_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePipelineJobDeadlineJobIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOnePipelineJobInput = {
  AND?: InputMaybe<Array<FilterFindOnePipelineJobInput>>;
  OR?: InputMaybe<Array<FilterFindOnePipelineJobInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOnePipelineJobOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  completedDate?: InputMaybe<Scalars['Date']['input']>;
  deadlineJobId?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<FilterFindOnePipelineJobSettingsInput>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state?: InputMaybe<EnumPipelineJobState>;
  submitDate?: InputMaybe<Scalars['Date']['input']>;
  /** Only find pipeline jobs that were created for a specific item */
  targetItemId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumPipelineJobType>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePipelineJobOperatorsInput = {
  _id?: InputMaybe<FilterFindOnePipelineJob_IdOperatorsInput>;
  deadlineJobId?: InputMaybe<FilterFindOnePipelineJobDeadlineJobIdOperatorsInput>;
};

export type FilterFindOnePipelineJobSettingsConvertPbrMaterialToAssetBundleInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  assetUrl?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterFindOnePipelineJobSettingsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  convertPBRMaterialToAssetBundle?: InputMaybe<FilterFindOnePipelineJobSettingsConvertPbrMaterialToAssetBundleInput>;
};

export type FilterFindOnePipelineJob_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePlannedMaintenanceInput = {
  AND?: InputMaybe<Array<FilterFindOnePlannedMaintenanceInput>>;
  OR?: InputMaybe<Array<FilterFindOnePlannedMaintenanceInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOnePlannedMaintenanceOperatorsInput>;
  durationHours?: InputMaybe<Scalars['Float']['input']>;
  reasonTranslations?: InputMaybe<Scalars['Translations']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePlannedMaintenanceOperatorsInput = {
  _id?: InputMaybe<FilterFindOnePlannedMaintenance_IdOperatorsInput>;
};

export type FilterFindOnePlannedMaintenance_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePriceTableInput = {
  AND?: InputMaybe<Array<FilterFindOnePriceTableInput>>;
  OR?: InputMaybe<Array<FilterFindOnePriceTableInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOnePriceTableOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  currencyName?: InputMaybe<Scalars['String']['input']>;
  displayEan?: InputMaybe<Scalars['Boolean']['input']>;
  globalDiscount?: InputMaybe<Scalars['Float']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  multiplyingCoefficient?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<InputMaybe<FilterFindOnePriceTablePricesInput>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  vatRate?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePriceTableOperatorsInput = {
  _id?: InputMaybe<FilterFindOnePriceTable_IdOperatorsInput>;
};

export type FilterFindOnePriceTablePricesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  articleIdentifier?: InputMaybe<Scalars['String']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  itemsIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  sourceItemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterFindOnePriceTable_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneProductScanInput = {
  AND?: InputMaybe<Array<FilterFindOneProductScanInput>>;
  OR?: InputMaybe<Array<FilterFindOneProductScanInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneProductScanOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  creationDate?: InputMaybe<Scalars['Date']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  scans?: InputMaybe<Array<InputMaybe<FilterFindOneProductScanScansInput>>>;
  size?: InputMaybe<FilterFindOneProductScanSizeInput>;
  state?: InputMaybe<EnumProductScanState>;
  thumbnail?: InputMaybe<FilterFindOneProductScanScansInputImagesInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneProductScanOperatorsInput = {
  _id?: InputMaybe<FilterFindOneProductScan_IdOperatorsInput>;
};

export type FilterFindOneProductScanScansInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  generatedImages?: InputMaybe<Array<InputMaybe<FilterFindOneProductScanScansInputImagesInput>>>;
  inputImages?: InputMaybe<Array<InputMaybe<FilterFindOneProductScanScansInputImagesInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumProductScanScansType>;
};

export type FilterFindOneProductScanScansInputImagesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  format: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type FilterFindOneProductScanSizeInput = {
  height?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneProductScan_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterApartmentUnitBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterApartmentUnitCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterApartmentUnitInput = {
  AND?: InputMaybe<Array<FilterFindOnePromoterApartmentUnitInput>>;
  OR?: InputMaybe<Array<FilterFindOnePromoterApartmentUnitInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOnePromoterApartmentUnitOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  buildingNumber?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  purchaserFirstName?: InputMaybe<Scalars['String']['input']>;
  purchaserMail?: InputMaybe<Scalars['String']['input']>;
  purchaserSurname?: InputMaybe<Scalars['String']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitState>;
  unitNumber?: InputMaybe<Scalars['String']['input']>;
  unitTypeId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePromoterApartmentUnitOperatorsInput = {
  _id?: InputMaybe<FilterFindOnePromoterApartmentUnit_IdOperatorsInput>;
  brandId?: InputMaybe<FilterFindOnePromoterApartmentUnitBrandIdOperatorsInput>;
  createdById?: InputMaybe<FilterFindOnePromoterApartmentUnitCreatedByIdOperatorsInput>;
  unitTypeId?: InputMaybe<FilterFindOnePromoterApartmentUnitUnitTypeIdOperatorsInput>;
};

export type FilterFindOnePromoterApartmentUnitTypeBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterApartmentUnitTypeCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterApartmentUnitTypeHistoryInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitTypeHistoryState>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterFindOnePromoterApartmentUnitTypeInput = {
  AND?: InputMaybe<Array<FilterFindOnePromoterApartmentUnitTypeInput>>;
  OR?: InputMaybe<Array<FilterFindOnePromoterApartmentUnitTypeInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOnePromoterApartmentUnitTypeOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  currentVersion?: InputMaybe<Scalars['Int']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONObject']['input']>;
  history?: InputMaybe<Array<FilterFindOnePromoterApartmentUnitTypeHistoryInput>>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  programId?: InputMaybe<Scalars['MongoID']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitTypeState>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePromoterApartmentUnitTypeOperatorsInput = {
  _id?: InputMaybe<FilterFindOnePromoterApartmentUnitType_IdOperatorsInput>;
  brandId?: InputMaybe<FilterFindOnePromoterApartmentUnitTypeBrandIdOperatorsInput>;
  createdById?: InputMaybe<FilterFindOnePromoterApartmentUnitTypeCreatedByIdOperatorsInput>;
  programId?: InputMaybe<FilterFindOnePromoterApartmentUnitTypeProgramIdOperatorsInput>;
};

export type FilterFindOnePromoterApartmentUnitTypeProgramIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterApartmentUnitType_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterApartmentUnitUnitTypeIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterApartmentUnit_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterProgramBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterProgramCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterProgramInput = {
  AND?: InputMaybe<Array<FilterFindOnePromoterProgramInput>>;
  OR?: InputMaybe<Array<FilterFindOnePromoterProgramInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOnePromoterProgramOperatorsInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  itemFilter?: InputMaybe<FilterFindOnePromoterProgramItemFilterInput>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planEditor?: InputMaybe<FilterFindOnePromoterProgramPlanEditorInput>;
  planUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  promoterId?: InputMaybe<Scalars['MongoID']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<EnumPromoterProgramState>;
  stylePresetGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
  zipCode?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOnePromoterProgramItemFilterInput = {
  itemWhiteList?: InputMaybe<Array<Scalars['MongoID']['input']>>;
};

export type FilterFindOnePromoterProgramNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePromoterProgramOperatorsInput = {
  _id?: InputMaybe<FilterFindOnePromoterProgram_IdOperatorsInput>;
  brandId?: InputMaybe<FilterFindOnePromoterProgramBrandIdOperatorsInput>;
  createdById?: InputMaybe<FilterFindOnePromoterProgramCreatedByIdOperatorsInput>;
  name?: InputMaybe<FilterFindOnePromoterProgramNameOperatorsInput>;
  promoterId?: InputMaybe<FilterFindOnePromoterProgramPromoterIdOperatorsInput>;
  slug?: InputMaybe<FilterFindOnePromoterProgramSlugOperatorsInput>;
};

export type FilterFindOnePromoterProgramPlanEditorInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  dataFormatVersion?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterFindOnePromoterProgramPromoterIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOnePromoterProgramSlugOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOnePromoterProgram_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneSalesRecordBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneSalesRecordCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterFindOneSalesRecordCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneSalesRecordInput = {
  AND?: InputMaybe<Array<FilterFindOneSalesRecordInput>>;
  OR?: InputMaybe<Array<FilterFindOneSalesRecordInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneSalesRecordOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  finalCustomerMetadata?: InputMaybe<Scalars['Metadata']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSalesRecordOperatorsInput = {
  _id?: InputMaybe<FilterFindOneSalesRecord_IdOperatorsInput>;
  brandId?: InputMaybe<FilterFindOneSalesRecordBrandIdOperatorsInput>;
  createdAt?: InputMaybe<FilterFindOneSalesRecordCreatedAtOperatorsInput>;
  createdById?: InputMaybe<FilterFindOneSalesRecordCreatedByIdOperatorsInput>;
  updatedAt?: InputMaybe<FilterFindOneSalesRecordUpdatedAtOperatorsInput>;
};

export type FilterFindOneSalesRecordUpdatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterFindOneSalesRecord_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneTutorialInput = {
  AND?: InputMaybe<Array<FilterFindOneTutorialInput>>;
  OR?: InputMaybe<Array<FilterFindOneTutorialInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneTutorialOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  displayOnlyOnce?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<FilterFindOneTutorialPointInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneTutorialOperatorsInput = {
  _id?: InputMaybe<FilterFindOneTutorial_IdOperatorsInput>;
};

export type FilterFindOneTutorialPointInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  illustration?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<EnumTutorialPointTarget>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
};

export type FilterFindOneTutorial_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneUserCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterFindOneUserCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneUserEmailOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneUserInput = {
  AND?: InputMaybe<Array<FilterFindOneUserInput>>;
  OR?: InputMaybe<Array<FilterFindOneUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneUserOperatorsInput>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  favoriteItemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  favoriteSavesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type FilterFindOneUserNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneUserOperatorsInput = {
  _id?: InputMaybe<FilterFindOneUser_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterFindOneUserCreatedAtOperatorsInput>;
  createdById?: InputMaybe<FilterFindOneUserCreatedByIdOperatorsInput>;
  email?: InputMaybe<FilterFindOneUserEmailOperatorsInput>;
  name?: InputMaybe<FilterFindOneUserNameOperatorsInput>;
};

export type FilterFindOneUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneAccessPointBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneAccessPointInput = {
  AND?: InputMaybe<Array<FilterRemoveOneAccessPointInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneAccessPointInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneAccessPointOperatorsInput>;
  areSavesPubliclyAvailableById?: InputMaybe<Scalars['Boolean']['input']>;
  authorizedCatalogIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  ecotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parametersScrapperId?: InputMaybe<Scalars['MongoID']['input']>;
  parametersTunnelId?: InputMaybe<Scalars['MongoID']['input']>;
  priceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  supportButton?: InputMaybe<FilterRemoveOneAccessPointSupportButtonInput>;
};

export type FilterRemoveOneAccessPointNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneAccessPointOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneAccessPoint_IdOperatorsInput>;
  brandId?: InputMaybe<FilterRemoveOneAccessPointBrandIdOperatorsInput>;
  name?: InputMaybe<FilterRemoveOneAccessPointNameOperatorsInput>;
};

export type FilterRemoveOneAccessPointSupportButtonInput = {
  icon?: InputMaybe<EnumAccessPointSupportButtonIcon>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumAccessPointSupportButtonType>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneAccessPoint_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneBarcodeCollectionBarcodeReferencesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBarcodeCollectionCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneBarcodeCollectionInput = {
  AND?: InputMaybe<Array<FilterRemoveOneBarcodeCollectionInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneBarcodeCollectionInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneBarcodeCollectionOperatorsInput>;
  barcodeReferences?: InputMaybe<Array<FilterRemoveOneBarcodeCollectionBarcodeReferencesInput>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneBarcodeCollectionOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneBarcodeCollection_IdOperatorsInput>;
  createdById?: InputMaybe<FilterRemoveOneBarcodeCollectionCreatedByIdOperatorsInput>;
};

export type FilterRemoveOneBarcodeCollection_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneBrandColorsInput = {
  dataProtection?: InputMaybe<Scalars['String']['input']>;
  legalNotice?: InputMaybe<Scalars['String']['input']>;
  loadingScreenBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenLogoPicture?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBorder?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarContent?: InputMaybe<Scalars['String']['input']>;
  loadingScreenText?: InputMaybe<Scalars['String']['input']>;
  meshes?: InputMaybe<FilterRemoveOneBrandColorsMeshesInput>;
  planElement?: InputMaybe<FilterRemoveOneBrandColorsPlanElementInput>;
  primary?: InputMaybe<Scalars['String']['input']>;
  questHeaderBackground?: InputMaybe<Scalars['String']['input']>;
  questHeaderBody?: InputMaybe<Scalars['String']['input']>;
  questHeaderTitle?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandColorsMeshesInput = {
  wallCut?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandColorsPlanElementInput = {
  floor?: InputMaybe<Scalars['String']['input']>;
  wall?: InputMaybe<Scalars['String']['input']>;
  window?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandInput = {
  AND?: InputMaybe<Array<FilterRemoveOneBrandInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneBrandInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneBrandOperatorsInput>;
  colors?: InputMaybe<FilterRemoveOneBrandColorsInput>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promoterWebsiteConfiguration?: InputMaybe<FilterRemoveOneBrandPromoterWebsiteConfigurationInput>;
  satelliteConfiguration?: InputMaybe<FilterRemoveOneBrandSatelliteConfigurationInput>;
  shareCode?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneBrandOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneBrand_IdOperatorsInput>;
  shareCode?: InputMaybe<FilterRemoveOneBrandShareCodeOperatorsInput>;
  slug?: InputMaybe<FilterRemoveOneBrandSlugOperatorsInput>;
};

export type FilterRemoveOneBrandParametersPricingInput = {
  AND?: InputMaybe<Array<FilterRemoveOneBrandParametersPricingInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneBrandParametersPricingInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneBrandParametersPricingOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  useArticleCode?: InputMaybe<Scalars['Boolean']['input']>;
  useEAN?: InputMaybe<Scalars['Boolean']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneBrandParametersPricingOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneBrandParametersPricing_IdOperatorsInput>;
};

export type FilterRemoveOneBrandParametersPricing_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneBrandParametersScrapperInput = {
  AND?: InputMaybe<Array<FilterRemoveOneBrandParametersScrapperInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneBrandParametersScrapperInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneBrandParametersScrapperOperatorsInput>;
  allowAnonymousSave?: InputMaybe<Scalars['Boolean']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  export?: InputMaybe<Scalars['Boolean']['input']>;
  geometry?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  objects?: InputMaybe<Scalars['Boolean']['input']>;
  postManualSaveTriggerSteps?: InputMaybe<Array<FilterRemoveOneBrandParametersScrapperPostManualSaveTriggerStepsInput>>;
  screenshots?: InputMaybe<Scalars['Boolean']['input']>;
  steps?: InputMaybe<Array<FilterRemoveOneBrandParametersScrapperStepsInput>>;
  watermark?: InputMaybe<FilterRemoveOneBrandParametersScrapperWatermarkInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneBrandParametersScrapperOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneBrandParametersScrapper_IdOperatorsInput>;
};

export type FilterRemoveOneBrandParametersScrapperPostManualSaveTriggerStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  triggerPopup?: InputMaybe<FilterRemoveOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput>;
  type?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsType>;
};

export type FilterRemoveOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buttonType?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupButtonType>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  yesNoButtons?: InputMaybe<FilterRemoveOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput>;
};

export type FilterRemoveOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput = {
  stateProperty?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandParametersScrapperStepsFilterInput = {
  expression?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandParametersScrapperStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  filter?: InputMaybe<FilterRemoveOneBrandParametersScrapperStepsFilterInput>;
  map?: InputMaybe<FilterRemoveOneBrandParametersScrapperStepsMapInput>;
  stepType?: InputMaybe<EnumBrandParametersScrapperStepsStepType>;
  stepVerb?: InputMaybe<Scalars['String']['input']>;
  tap?: InputMaybe<FilterRemoveOneBrandParametersScrapperStepsTapInput>;
  verbFilter?: InputMaybe<EnumBrandParametersScrapperStepsVerbFilter>;
  verbMap?: InputMaybe<EnumBrandParametersScrapperStepsVerbMap>;
  verbTap?: InputMaybe<EnumBrandParametersScrapperStepsVerbTap>;
};

export type FilterRemoveOneBrandParametersScrapperStepsMapInput = {
  kitchenPricer?: InputMaybe<FilterRemoveOneBrandParametersScrapperStepsMapKitchenPricerInput>;
  payloadGenerator?: InputMaybe<FilterRemoveOneBrandParametersScrapperStepsMapPayloadGeneratorInput>;
  pdfReportGenerator?: InputMaybe<FilterRemoveOneBrandParametersScrapperStepsMapPdfReportGeneratorInput>;
  plinthCalculator?: InputMaybe<FilterRemoveOneBrandParametersScrapperStepsMapPlinthCalculatorInput>;
  reportGenerator?: InputMaybe<FilterRemoveOneBrandParametersScrapperStepsMapReportGeneratorInput>;
  terracePricer?: InputMaybe<FilterRemoveOneBrandParametersScrapperStepsMapTerracePricerInput>;
};

export type FilterRemoveOneBrandParametersScrapperStepsMapKitchenPricerInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  barcodeCollectionId?: InputMaybe<Scalars['MongoID']['input']>;
  projectBaseUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandParametersScrapperStepsMapPayloadGeneratorInput = {
  addSaveName?: InputMaybe<Scalars['Boolean']['input']>;
  addUpdateToken?: InputMaybe<Scalars['Boolean']['input']>;
  dynamicParameterForTunnelStateInformation?: InputMaybe<Scalars['String']['input']>;
  tunnelStateKeys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FilterRemoveOneBrandParametersScrapperStepsMapPdfReportGeneratorInput = {
  payloadType?: InputMaybe<EnumBrandParametersScrapperStepsMapPdfReportGeneratorPayloadType>;
};

export type FilterRemoveOneBrandParametersScrapperStepsMapPlinthCalculatorInput = {
  bigPlinthId?: InputMaybe<Scalars['MongoID']['input']>;
  littlePlinthId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterRemoveOneBrandParametersScrapperStepsMapReportGeneratorInput = {
  chunksManifest?: InputMaybe<Array<FilterRemoveOneInputDocumentChunkManifestInput>>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<EnumBrandParametersScrapperStepsMapReportGeneratorMode>;
};

export type FilterRemoveOneBrandParametersScrapperStepsMapTerracePricerInput = {
  itemsCatalogId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterRemoveOneBrandParametersScrapperStepsTapInput = {
  outputToApi?: InputMaybe<FilterRemoveOneBrandParametersScrapperStepsTapOutputToApiInput>;
  sendEmail?: InputMaybe<FilterRemoveOneBrandParametersScrapperStepsTapSendEmailInput>;
};

export type FilterRemoveOneBrandParametersScrapperStepsTapOutputToApiInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  signPayload?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneBrandParametersScrapperStepsTapSendEmailInput = {
  attachmentName?: InputMaybe<Scalars['String']['input']>;
  dynamicParameterEmailAdress?: InputMaybe<Scalars['String']['input']>;
  emailSourceType?: InputMaybe<EnumBrandParametersScrapperStepsTapSendEmailEmailSourceType>;
  sendReportAsAttachment?: InputMaybe<Scalars['Boolean']['input']>;
  staticEmailAdress?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandParametersScrapperWatermarkInput = {
  alpha?: InputMaybe<Scalars['Float']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  repetition?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneBrandParametersScrapper_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneBrandParametersTunnelApertureParametersInput = {
  doorClassicDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntryDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntrySidelightDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorExteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doorInteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doubleDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleSwingDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  garageDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  simpleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  slitWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  windowCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  windowDefaultItem?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandParametersTunnelColorsParametersInput = {
  nameHelpAtlas?: InputMaybe<Scalars['String']['input']>;
  nameOptionsAtlas?: InputMaybe<Scalars['String']['input']>;
  nameToolsAtlas?: InputMaybe<Scalars['String']['input']>;
  primary?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandParametersTunnelCustomLinkButtonInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandParametersTunnelDefaultCameraParametersInput = {
  visitCameraParameters?: InputMaybe<FilterRemoveOneBrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput>;
};

export type FilterRemoveOneBrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput = {
  defaultVisitFieldOfView?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneBrandParametersTunnelDefaultCoatingParametersInput = {
  defaultExteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultGardenFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultInteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterRemoveOneBrandParametersTunnelInput = {
  AND?: InputMaybe<Array<FilterRemoveOneBrandParametersTunnelInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneBrandParametersTunnelInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneBrandParametersTunnelOperatorsInput>;
  apertureParameters?: InputMaybe<FilterRemoveOneBrandParametersTunnelApertureParametersInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colorsParameters?: InputMaybe<FilterRemoveOneBrandParametersTunnelColorsParametersInput>;
  customLinkButton?: InputMaybe<FilterRemoveOneBrandParametersTunnelCustomLinkButtonInput>;
  defaultCameraParameters?: InputMaybe<FilterRemoveOneBrandParametersTunnelDefaultCameraParametersInput>;
  defaultCoatingParameters?: InputMaybe<FilterRemoveOneBrandParametersTunnelDefaultCoatingParametersInput>;
  defaultDayTime?: InputMaybe<Scalars['Float']['input']>;
  defaultSnapDistance?: InputMaybe<Scalars['Float']['input']>;
  disableHeaderShadow?: InputMaybe<Scalars['Boolean']['input']>;
  displayCartItemNumber?: InputMaybe<Scalars['Boolean']['input']>;
  displayCustomisationTagFurnitureOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displayFurnitureSubstitutesOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displaySaveName?: InputMaybe<Scalars['Boolean']['input']>;
  displayStepsHeader?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  globalOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  includeAllBrandItemsInCache?: InputMaybe<Scalars['Boolean']['input']>;
  initialStepIfLoadingSave?: InputMaybe<Scalars['Float']['input']>;
  isReloadFromLocalStorageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  logoLinkOnClick?: InputMaybe<Scalars['String']['input']>;
  logoPictureReference?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  persistentVariables?: InputMaybe<Array<FilterRemoveOneBrandParametersTunnelPersistentVariablesInput>>;
  preload?: InputMaybe<Scalars['Boolean']['input']>;
  savePanelParameters?: InputMaybe<FilterRemoveOneBrandParametersTunnelSavePanelParametersInput>;
  steps?: InputMaybe<Array<FilterRemoveOneBrandParametersTunnelStepInput>>;
  wallParameters?: InputMaybe<FilterRemoveOneBrandParametersTunnelWallParametersInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneBrandParametersTunnelOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneBrandParametersTunnel_IdOperatorsInput>;
};

export type FilterRemoveOneBrandParametersTunnelPersistentVariablesInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandParametersTunnelSavePanelParametersInput = {
  isCustomerModuleEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isExportButtonEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneBrandParametersTunnelStepInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  analytics?: InputMaybe<FilterRemoveOneBrandParametersTunnelStepsAnalyticsInput>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  isShownInStepper?: InputMaybe<Scalars['Boolean']['input']>;
  module?: InputMaybe<EnumBrandParametersTunnelStepsModule>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  resetTunnelOnActivation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneBrandParametersTunnelStepsAnalyticsChoiceReducerInput = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  stateProperties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FilterRemoveOneBrandParametersTunnelStepsAnalyticsInput = {
  choiceReducer?: InputMaybe<FilterRemoveOneBrandParametersTunnelStepsAnalyticsChoiceReducerInput>;
};

export type FilterRemoveOneBrandParametersTunnelWallParametersExteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type FilterRemoveOneBrandParametersTunnelWallParametersInput = {
  doorLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  exteriorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  exteriorWallThickness?: InputMaybe<FilterRemoveOneBrandParametersTunnelWallParametersExteriorWallThicknessInput>;
  floorHeight?: InputMaybe<Scalars['Float']['input']>;
  groundFloorLevel?: InputMaybe<Scalars['Float']['input']>;
  innerHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorWallThickness?: InputMaybe<FilterRemoveOneBrandParametersTunnelWallParametersInteriorWallThicknessInput>;
  optionsPanelWallConfig?: InputMaybe<FilterRemoveOneBrandParametersTunnelWallParametersOptionsPanelWallConfigInput>;
  windowLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  windowSillLevel?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneBrandParametersTunnelWallParametersInteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type FilterRemoveOneBrandParametersTunnelWallParametersOptionsPanelWallConfigInput = {
  displayOnlyWallType?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightExteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightInteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessDropdown?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessInput?: InputMaybe<Scalars['Boolean']['input']>;
  usePartitionLabelForInteriorWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneBrandParametersTunnel_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneBrandPromoterWebsiteConfigurationInput = {
  acquirerValidateUnitAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  metadataConfiguration?: InputMaybe<FilterRemoveOneBrandPromoterWebsiteConfigurationMetadataConfigurationInput>;
  operatorTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  promoterValidateTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  unitTypeSaveModelId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterRemoveOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataType>;
};

export type FilterRemoveOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataType>;
};

export type FilterRemoveOneBrandPromoterWebsiteConfigurationMetadataConfigurationInput = {
  apartmentUnitMetadata?: InputMaybe<Array<FilterRemoveOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput>>;
  apartmentUnitTypeIdMetadataKey?: InputMaybe<Scalars['String']['input']>;
  apartmentUnitTypeMetadata?: InputMaybe<Array<FilterRemoveOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput>>;
  programMetadata?: InputMaybe<Array<FilterRemoveOneBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput>>;
};

export type FilterRemoveOneBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataType>;
};

export type FilterRemoveOneBrandSatelliteConfigurationInput = {
  satelliteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneBrandShareCodeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneBrandSlugOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneBrand_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneCatalogFolderInput = {
  AND?: InputMaybe<Array<FilterRemoveOneCatalogFolderInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneCatalogFolderInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneCatalogFolderOperatorsInput>;
  associatedEcotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  brand?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  iconId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<FilterRemoveOneCatalogFolderMetadataInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  rootId?: InputMaybe<Scalars['MongoID']['input']>;
  sharedWithIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailId?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tiles?: InputMaybe<Array<InputMaybe<FilterRemoveOneCatalogFolderTilesInput>>>;
  tilesBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  tilesColumnAmount?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnGap?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  tilesRowGap?: InputMaybe<Scalars['Float']['input']>;
  tilesRowSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  type?: InputMaybe<EnumCatalogFolderType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  virtual?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneCatalogFolderMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneCatalogFolderOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneCatalogFolder_IdOperatorsInput>;
};

export type FilterRemoveOneCatalogFolderTilesImagePlacementInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneCatalogFolderTilesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  advancedTextTranslations?: InputMaybe<Scalars['Translations']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundOpacity?: InputMaybe<Scalars['Float']['input']>;
  borderRadius?: InputMaybe<Scalars['Float']['input']>;
  catalogSourceId?: InputMaybe<Scalars['MongoID']['input']>;
  construction?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionTextSize?: InputMaybe<Scalars['Float']['input']>;
  folder?: InputMaybe<Scalars['MongoID']['input']>;
  hasShadow?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  horizontalTextAlignement?: InputMaybe<EnumCatalogFolderTilesHorizontalTextAlignement>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  imagePlacement?: InputMaybe<FilterRemoveOneCatalogFolderTilesImagePlacementInput>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isImagePlacementFree?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  item?: InputMaybe<Scalars['MongoID']['input']>;
  itemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  mask?: InputMaybe<Scalars['Boolean']['input']>;
  maskColor?: InputMaybe<Scalars['String']['input']>;
  maskOpacity?: InputMaybe<Scalars['Float']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<FilterRemoveOneCatalogFolderTilesMetadataInput>>>;
  posX?: InputMaybe<Scalars['Float']['input']>;
  posY?: InputMaybe<Scalars['Float']['input']>;
  saveSelectedInTunnelStateVariable?: InputMaybe<Scalars['String']['input']>;
  stylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textDescriptionTranslations?: InputMaybe<Scalars['Translations']['input']>;
  textPadding?: InputMaybe<FilterRemoveOneCatalogFolderTilesTextPaddingInput>;
  textTitleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTextColor?: InputMaybe<Scalars['String']['input']>;
  titleTextSize?: InputMaybe<Scalars['Float']['input']>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumCatalogFolderTilesType>;
  useAdvancedText?: InputMaybe<Scalars['Boolean']['input']>;
  verticalTextAlignement?: InputMaybe<EnumCatalogFolderTilesVerticalTextAlignement>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneCatalogFolderTilesMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneCatalogFolderTilesTextPaddingInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneCatalogFolder_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneCustomerAddressOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneCustomerBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneCustomerCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneCustomerEmailOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneCustomerFirstnameAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneCustomerFirstnameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneCustomerGenderAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneCustomerGenderOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneCustomerInput = {
  AND?: InputMaybe<Array<FilterRemoveOneCustomerInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneCustomerInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneCustomerOperatorsInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  firstnameAdditional?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  genderAdditional?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  surnameAdditional?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneCustomerOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneCustomer_IdOperatorsInput>;
  address?: InputMaybe<FilterRemoveOneCustomerAddressOperatorsInput>;
  brandId?: InputMaybe<FilterRemoveOneCustomerBrandIdOperatorsInput>;
  createdById?: InputMaybe<FilterRemoveOneCustomerCreatedByIdOperatorsInput>;
  email?: InputMaybe<FilterRemoveOneCustomerEmailOperatorsInput>;
  firstname?: InputMaybe<FilterRemoveOneCustomerFirstnameOperatorsInput>;
  firstnameAdditional?: InputMaybe<FilterRemoveOneCustomerFirstnameAdditionalOperatorsInput>;
  gender?: InputMaybe<FilterRemoveOneCustomerGenderOperatorsInput>;
  genderAdditional?: InputMaybe<FilterRemoveOneCustomerGenderAdditionalOperatorsInput>;
  surname?: InputMaybe<FilterRemoveOneCustomerSurnameOperatorsInput>;
  surnameAdditional?: InputMaybe<FilterRemoveOneCustomerSurnameAdditionalOperatorsInput>;
};

export type FilterRemoveOneCustomerSurnameAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneCustomerSurnameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneCustomer_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

/** Configures the parameters of one or multiple chunks in the document. */
export type FilterRemoveOneInputDocumentChunkManifestInput = {
  /** Render-time parameters object, implementing the chunk's parameters schema as given in the output manifest. The type of this property is loosely-typed in GraphQL, but verified at runtime against that schema. If the parameters passed are invalid against the schema, the chunk will be disabled and a manifest warning will be issued. */
  parameters?: InputMaybe<Scalars['JSONObject']['input']>;
  /** A path selector to target one or multiple chunks, since it can be a bash-like glob pattern, ex. "/my-section/my-chunk-123", "/my-section/my-chunk-*", "/**\/my-chunk-*", etc. */
  path?: InputMaybe<Scalars['String']['input']>;
  /** Defines whether the chunk should be rendered in the document. If set "false" on a group chunk, it applies to its children recursively. */
  render?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneItemCustomisationCoverPlanesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItem?: InputMaybe<Scalars['MongoID']['input']>;
  hideForSingleObject?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<EnumItemCustomisationCoverPlanesMode>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  positions?: InputMaybe<FilterRemoveOneItemCustomisationCoverPlanesPositionsInput>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemCustomisationCoverPlanesPositionsInput = {
  above?: InputMaybe<Scalars['Boolean']['input']>;
  behind?: InputMaybe<Scalars['Boolean']['input']>;
  front?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemCustomisationMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPalette?: InputMaybe<Scalars['MongoID']['input']>;
  materials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumItemCustomisationMaterialsType>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemCustomisationSubObjectsHooksInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation?: InputMaybe<FilterRemoveOneItemCustomisationSubObjectsHooksOrientationInput>;
  position?: InputMaybe<FilterRemoveOneItemCustomisationSubObjectsHooksPositionInput>;
  type?: InputMaybe<EnumItemCustomisationSubObjectsHooksType>;
};

export type FilterRemoveOneItemCustomisationSubObjectsHooksOrientationInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemCustomisationSubObjectsHooksPositionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemCustomisationSubObjectsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  hooks?: InputMaybe<Array<InputMaybe<FilterRemoveOneItemCustomisationSubObjectsHooksInput>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemCustomisationSymbolicRepresentationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  anglePositionIsRight?: InputMaybe<Scalars['Boolean']['input']>;
  break3D?: InputMaybe<Scalars['Boolean']['input']>;
  colors?: InputMaybe<EnumItemCustomisationSymbolicRepresentationColors>;
  displayDiagonals?: InputMaybe<Scalars['Boolean']['input']>;
  doorType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationDoorType>;
  drawerCount?: InputMaybe<Scalars['Float']['input']>;
  symbolicIcon?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIcon>;
  symbolicIconShape?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconShape>;
  symbolicIconSubType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconSubType>;
  type?: InputMaybe<EnumItemCustomisationSymbolicRepresentationType>;
};

export type FilterRemoveOneItemFactSheetInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONObject']['input']>;
  logoPicture?: InputMaybe<Scalars['String']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneItemGuardrailInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  meshes?: InputMaybe<Array<InputMaybe<FilterRemoveOneItemGuardrailInformationsMeshesInput>>>;
};

export type FilterRemoveOneItemGuardrailInformationsMeshesDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemGuardrailInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  dimensions?: InputMaybe<FilterRemoveOneItemGuardrailInformationsMeshesDimensionsInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  options?: InputMaybe<FilterRemoveOneItemGuardrailInformationsMeshesOptionsInput>;
  placing?: InputMaybe<FilterRemoveOneItemGuardrailInformationsMeshesPlacingInput>;
  surface?: InputMaybe<FilterRemoveOneItemGuardrailInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemGuardrailInformationsMeshesType>;
};

export type FilterRemoveOneItemGuardrailInformationsMeshesOptionsInput = {
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemGuardrailInformationsMeshesOptionsShape>;
};

export type FilterRemoveOneItemGuardrailInformationsMeshesPlacingInput = {
  elevation?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemGuardrailInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemInput = {
  AND?: InputMaybe<Array<FilterRemoveOneItemInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneItemInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneItemOperatorsInput>;
  articleCode?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  buildingWingInfos?: InputMaybe<Scalars['String']['input']>;
  canBeCutAlongHeight?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongLength?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongWidth?: InputMaybe<Scalars['Boolean']['input']>;
  canBeDroppedOnZones?: InputMaybe<Array<EnumItemCanBeDroppedOnZones>>;
  categoriesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  compositeInfos?: InputMaybe<Scalars['String']['input']>;
  consideredAsDroppableZones?: InputMaybe<Array<EnumItemConsideredAsDroppableZones>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  customisationByItemsGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationCoverPlanes?: InputMaybe<Array<FilterRemoveOneItemCustomisationCoverPlanesInput>>;
  customisationMaterials?: InputMaybe<Array<FilterRemoveOneItemCustomisationMaterialsInput>>;
  customisationSubObjects?: InputMaybe<Array<FilterRemoveOneItemCustomisationSubObjectsInput>>;
  customisationSymbolicRepresentation?: InputMaybe<FilterRemoveOneItemCustomisationSymbolicRepresentationInput>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  factSheet?: InputMaybe<FilterRemoveOneItemFactSheetInput>;
  guardrailInformations?: InputMaybe<FilterRemoveOneItemGuardrailInformationsInput>;
  metadata?: InputMaybe<Array<FilterRemoveOneItemMetadataInput>>;
  minimumPricedDimensions?: InputMaybe<FilterRemoveOneItemMinimumPricedDimensionsInput>;
  modelUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  outputAssets?: InputMaybe<FilterRemoveOneItemOutputAssetsInput>;
  physicalHeight?: InputMaybe<Scalars['String']['input']>;
  physicalLength?: InputMaybe<Scalars['String']['input']>;
  physicalWidth?: InputMaybe<Scalars['String']['input']>;
  pillarInformations?: InputMaybe<FilterRemoveOneItemPillarInformationsInput>;
  priceCoefExclusion?: InputMaybe<Scalars['Boolean']['input']>;
  priceGeneration?: InputMaybe<EnumItemPriceGeneration>;
  priceUnit?: InputMaybe<EnumItemPriceUnit>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  roofInformations?: InputMaybe<FilterRemoveOneItemRoofInformationsInput>;
  scrapperTag?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stairsInformations?: InputMaybe<FilterRemoveOneItemStairsInformationsInput>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tooltip3DTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumItemType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
  vegetationInformations?: InputMaybe<FilterRemoveOneItemVegetationInformationsInput>;
  wallInformations?: InputMaybe<FilterRemoveOneItemWallInformationsInput>;
};

export type FilterRemoveOneItemMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneItemMinimumPricedDimensionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneItemNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneItemOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneItem_IdOperatorsInput>;
  createdById?: InputMaybe<FilterRemoveOneItemCreatedByIdOperatorsInput>;
  name?: InputMaybe<FilterRemoveOneItemNameOperatorsInput>;
  slug?: InputMaybe<FilterRemoveOneItemSlugOperatorsInput>;
};

export type FilterRemoveOneItemOutputAssetsCoatingVariantsAlbedoInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type FilterRemoveOneItemOutputAssetsCoatingVariantsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  albedo?: InputMaybe<FilterRemoveOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  metallic?: InputMaybe<FilterRemoveOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  normal?: InputMaybe<FilterRemoveOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  smoothness?: InputMaybe<FilterRemoveOneItemOutputAssetsCoatingVariantsAlbedoInput>;
};

export type FilterRemoveOneItemOutputAssetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  coatingVariants?: InputMaybe<Array<InputMaybe<FilterRemoveOneItemOutputAssetsCoatingVariantsInput>>>;
};

export type FilterRemoveOneItemPillarInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  cylinderSides?: InputMaybe<Scalars['Float']['input']>;
  materials?: InputMaybe<Array<InputMaybe<FilterRemoveOneItemPillarInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterRemoveOneItemPillarInformationsModelsInput>>>;
  necking?: InputMaybe<FilterRemoveOneItemPillarInformationsNeckingInput>;
};

export type FilterRemoveOneItemPillarInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsMaterialsType>;
};

export type FilterRemoveOneItemPillarInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemPillarInformationsNeckingCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemPillarInformationsNeckingInput = {
  crossSection?: InputMaybe<FilterRemoveOneItemPillarInformationsNeckingCrossSectionInput>;
  distanceToTop?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsCoveringInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  ridgeTiles?: InputMaybe<FilterRemoveOneItemRoofInformationsCoveringRidgeTilesInput>;
  sealingThickness?: InputMaybe<Scalars['Float']['input']>;
  spaceBetweenSealingAndTiles?: InputMaybe<Scalars['Float']['input']>;
  tilesThickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsCoveringRidgeTilesInput = {
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsEavesStyleInput = {
  type?: InputMaybe<EnumItemRoofInformationsEavesStyleType>;
};

export type FilterRemoveOneItemRoofInformationsFlatRoofBorderDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsFlatRoofInput = {
  borderDimensions?: InputMaybe<FilterRemoveOneItemRoofInformationsFlatRoofBorderDimensionsInput>;
  gravelThickness?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemRoofInformationsFramingInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  pieces?: InputMaybe<Array<InputMaybe<FilterRemoveOneItemRoofInformationsFramingPiecesInput>>>;
  type?: InputMaybe<EnumItemRoofInformationsFramingType>;
};

export type FilterRemoveOneItemRoofInformationsFramingPiecesEnd_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsFramingPiecesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  end_coordinate?: InputMaybe<FilterRemoveOneItemRoofInformationsFramingPiecesEnd_CoordinateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_coordinate?: InputMaybe<FilterRemoveOneItemRoofInformationsFramingPiecesStart_CoordinateInput>;
  type?: InputMaybe<EnumItemRoofInformationsFramingPiecesType>;
};

export type FilterRemoveOneItemRoofInformationsFramingPiecesStart_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsGutterInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  covering?: InputMaybe<FilterRemoveOneItemRoofInformationsCoveringInput>;
  eavesStyle?: InputMaybe<FilterRemoveOneItemRoofInformationsEavesStyleInput>;
  flatRoof?: InputMaybe<FilterRemoveOneItemRoofInformationsFlatRoofInput>;
  framing?: InputMaybe<FilterRemoveOneItemRoofInformationsFramingInput>;
  gutter?: InputMaybe<FilterRemoveOneItemRoofInformationsGutterInput>;
  materials?: InputMaybe<Array<InputMaybe<FilterRemoveOneItemRoofInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterRemoveOneItemRoofInformationsModelsInput>>>;
  overhang?: InputMaybe<FilterRemoveOneItemRoofInformationsOverhangInput>;
  purlins?: InputMaybe<FilterRemoveOneItemRoofInformationsPurlinsInput>;
  rafters?: InputMaybe<FilterRemoveOneItemRoofInformationsRaftersInput>;
  ridgeBoard?: InputMaybe<FilterRemoveOneItemRoofInformationsRidgeBoardInput>;
  solarPanels?: InputMaybe<FilterRemoveOneItemRoofInformationsSolarPanelsInput>;
  topPlate?: InputMaybe<FilterRemoveOneItemRoofInformationsTopPlateInput>;
};

export type FilterRemoveOneItemRoofInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsMaterialsType>;
};

export type FilterRemoveOneItemRoofInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsOverhangInput = {
  bargeboard?: InputMaybe<Scalars['Float']['input']>;
  bargeboardPurlins?: InputMaybe<Scalars['Float']['input']>;
  bargeboardRafters?: InputMaybe<Scalars['Float']['input']>;
  eave?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemRoofInformationsPurlinsBottomInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsPurlinsInput = {
  bottom?: InputMaybe<FilterRemoveOneItemRoofInformationsPurlinsBottomInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  intermediate?: InputMaybe<FilterRemoveOneItemRoofInformationsPurlinsIntermediateInput>;
  ridge?: InputMaybe<FilterRemoveOneItemRoofInformationsPurlinsRidgeInput>;
};

export type FilterRemoveOneItemRoofInformationsPurlinsIntermediateInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsPurlinsRidgeInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsRaftersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsRaftersInput = {
  crossSection?: InputMaybe<FilterRemoveOneItemRoofInformationsRaftersCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsRidgeBoardCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsRidgeBoardInput = {
  crossSection?: InputMaybe<FilterRemoveOneItemRoofInformationsRidgeBoardCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemRoofInformationsSolarPanelsFrameInput = {
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsSolarPanelsInput = {
  distanceToRoof?: InputMaybe<Scalars['Float']['input']>;
  frame?: InputMaybe<FilterRemoveOneItemRoofInformationsSolarPanelsFrameInput>;
  height?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsTopPlateCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemRoofInformationsTopPlateInput = {
  crossSection?: InputMaybe<FilterRemoveOneItemRoofInformationsTopPlateCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemSlugOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneItemStairsInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  landing?: InputMaybe<FilterRemoveOneItemStairsInformationsLandingInput>;
  materials?: InputMaybe<Array<InputMaybe<FilterRemoveOneItemStairsInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterRemoveOneItemStairsInformationsModelsInput>>>;
  railing?: InputMaybe<FilterRemoveOneItemStairsInformationsRailingInput>;
  steps?: InputMaybe<FilterRemoveOneItemStairsInformationsStepsInput>;
  stringers?: InputMaybe<FilterRemoveOneItemStairsInformationsStringersInput>;
};

export type FilterRemoveOneItemStairsInformationsLandingInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemStairsInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsMaterialsType>;
};

export type FilterRemoveOneItemStairsInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemStairsInformationsRailingBalustersInput = {
  radius?: InputMaybe<Scalars['Float']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemStairsInformationsRailingHandrailCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemStairsInformationsRailingHandrailInput = {
  crossSection?: InputMaybe<FilterRemoveOneItemStairsInformationsRailingHandrailCrossSectionInput>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemStairsInformationsRailingInput = {
  balusters?: InputMaybe<FilterRemoveOneItemStairsInformationsRailingBalustersInput>;
  handrail?: InputMaybe<FilterRemoveOneItemStairsInformationsRailingHandrailInput>;
  posts?: InputMaybe<FilterRemoveOneItemStairsInformationsRailingPostsInput>;
};

export type FilterRemoveOneItemStairsInformationsRailingPostsCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemStairsInformationsRailingPostsInput = {
  crossSection?: InputMaybe<FilterRemoveOneItemStairsInformationsRailingPostsCrossSectionInput>;
};

export type FilterRemoveOneItemStairsInformationsStepsInput = {
  risers?: InputMaybe<FilterRemoveOneItemStairsInformationsStepsRisersInput>;
  treats?: InputMaybe<FilterRemoveOneItemStairsInformationsStepsTreatsInput>;
};

export type FilterRemoveOneItemStairsInformationsStepsRisersInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemStairsInformationsStepsTreatsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  nose?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemStairsInformationsStringersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemStairsInformationsStringersInput = {
  crossSection?: InputMaybe<FilterRemoveOneItemStairsInformationsStringersCrossSectionInput>;
  overTreat?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemVegetationInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  canBeSelected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemWallInformationsApplicationInput = {
  bothSides?: InputMaybe<Scalars['Boolean']['input']>;
  exteriorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  overRegularWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemWallInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  application?: InputMaybe<FilterRemoveOneItemWallInformationsApplicationInput>;
  class?: InputMaybe<EnumItemWallInformationsClass>;
  meshes?: InputMaybe<Array<InputMaybe<FilterRemoveOneItemWallInformationsMeshesInput>>>;
};

export type FilterRemoveOneItemWallInformationsMeshesDimensionsInput = {
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemWallInformationsMeshesDisplayInput = {
  autoCut?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsHigh?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsLow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemWallInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buildingMaterial?: InputMaybe<EnumItemWallInformationsMeshesBuildingMaterial>;
  dimensions?: InputMaybe<FilterRemoveOneItemWallInformationsMeshesDimensionsInput>;
  display?: InputMaybe<FilterRemoveOneItemWallInformationsMeshesDisplayInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<FilterRemoveOneItemWallInformationsMeshesOptionsInput>;
  overlapPriority?: InputMaybe<Scalars['Float']['input']>;
  placing?: InputMaybe<FilterRemoveOneItemWallInformationsMeshesPlacingInput>;
  segmentTypes?: InputMaybe<FilterRemoveOneItemWallInformationsMeshesSegmentTypesInput>;
  surface?: InputMaybe<FilterRemoveOneItemWallInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemWallInformationsMeshesType>;
};

export type FilterRemoveOneItemWallInformationsMeshesOptionsInput = {
  closeBack?: InputMaybe<Scalars['Boolean']['input']>;
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeFront?: InputMaybe<Scalars['Boolean']['input']>;
  closeSides?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  nextToDoorsAndWindows?: InputMaybe<Scalars['Boolean']['input']>;
  paintable?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemWallInformationsMeshesOptionsShape>;
  skewOnCorners?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemWallInformationsMeshesPlacingBottomElevationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingBottomElevationReference>;
};

export type FilterRemoveOneItemWallInformationsMeshesPlacingInput = {
  beamDirection?: InputMaybe<EnumItemWallInformationsMeshesPlacingBeamDirection>;
  bottomElevation?: InputMaybe<FilterRemoveOneItemWallInformationsMeshesPlacingBottomElevationInput>;
  depthOffset?: InputMaybe<Scalars['Float']['input']>;
  doorPostOffset?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  endDepth?: InputMaybe<FilterRemoveOneItemWallInformationsMeshesPlacingStartDepthInput>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  moveVerticesAbove?: InputMaybe<Scalars['Float']['input']>;
  pivotIsOnTop?: InputMaybe<Scalars['Boolean']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
  repetitionFilter?: InputMaybe<EnumItemWallInformationsMeshesPlacingRepetitionFilter>;
  startDepth?: InputMaybe<FilterRemoveOneItemWallInformationsMeshesPlacingStartDepthInput>;
  stretchVertically?: InputMaybe<Scalars['Boolean']['input']>;
  topElevation?: InputMaybe<FilterRemoveOneItemWallInformationsMeshesPlacingBottomElevationInput>;
};

export type FilterRemoveOneItemWallInformationsMeshesPlacingStartDepthInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  plusOnTop?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingStartDepthReference>;
};

export type FilterRemoveOneItemWallInformationsMeshesSegmentTypesInput = {
  doors?: InputMaybe<Scalars['Boolean']['input']>;
  walls?: InputMaybe<Scalars['Boolean']['input']>;
  windows?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItemWallInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
  swapUV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterRemoveOneItem_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneItemsGroupInput = {
  AND?: InputMaybe<Array<FilterRemoveOneItemsGroupInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneItemsGroupInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneItemsGroupOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  generated?: InputMaybe<Scalars['Boolean']['input']>;
  itemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  option?: InputMaybe<FilterRemoveOneItemsGroupOptionInput>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  shouldBeOpenInGUI?: InputMaybe<Scalars['Boolean']['input']>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumItemsGroupType>;
};

export type FilterRemoveOneItemsGroupNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneItemsGroupOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneItemsGroup_IdOperatorsInput>;
  name?: InputMaybe<FilterRemoveOneItemsGroupNameOperatorsInput>;
};

export type FilterRemoveOneItemsGroupOptionInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  baseItemId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  disableDefaultChoice?: InputMaybe<Scalars['Boolean']['input']>;
  positions?: InputMaybe<Array<FilterRemoveOneItemsGroupOptionPositionsInput>>;
};

export type FilterRemoveOneItemsGroupOptionPositionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  margins?: InputMaybe<FilterRemoveOneItemsGroupOptionPositionsMarginsInput>;
  placement?: InputMaybe<EnumItemsGroupOptionPositionsPlacement>;
  rotation?: InputMaybe<EnumItemsGroupOptionPositionsRotation>;
};

export type FilterRemoveOneItemsGroupOptionPositionsMarginsInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneItemsGroup_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOnePaletteColorsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  a?: InputMaybe<Scalars['Float']['input']>;
  b?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  g?: InputMaybe<Scalars['Float']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  r?: InputMaybe<Scalars['Float']['input']>;
  roughness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOnePaletteInput = {
  AND?: InputMaybe<Array<FilterRemoveOnePaletteInput>>;
  OR?: InputMaybe<Array<FilterRemoveOnePaletteInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOnePaletteOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colors?: InputMaybe<Array<InputMaybe<FilterRemoveOnePaletteColorsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumPaletteType>;
};

export type FilterRemoveOnePaletteNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOnePaletteOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOnePalette_IdOperatorsInput>;
  name?: InputMaybe<FilterRemoveOnePaletteNameOperatorsInput>;
};

export type FilterRemoveOnePalette_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOnePictureInput = {
  AND?: InputMaybe<Array<FilterRemoveOnePictureInput>>;
  OR?: InputMaybe<Array<FilterRemoveOnePictureInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOnePictureOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOnePictureOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOnePicture_IdOperatorsInput>;
};

export type FilterRemoveOnePicture_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOnePipelineJobDeadlineJobIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOnePipelineJobInput = {
  AND?: InputMaybe<Array<FilterRemoveOnePipelineJobInput>>;
  OR?: InputMaybe<Array<FilterRemoveOnePipelineJobInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOnePipelineJobOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  completedDate?: InputMaybe<Scalars['Date']['input']>;
  deadlineJobId?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<FilterRemoveOnePipelineJobSettingsInput>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state?: InputMaybe<EnumPipelineJobState>;
  submitDate?: InputMaybe<Scalars['Date']['input']>;
  type?: InputMaybe<EnumPipelineJobType>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOnePipelineJobOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOnePipelineJob_IdOperatorsInput>;
  deadlineJobId?: InputMaybe<FilterRemoveOnePipelineJobDeadlineJobIdOperatorsInput>;
};

export type FilterRemoveOnePipelineJobSettingsConvertPbrMaterialToAssetBundleInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  assetUrl?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterRemoveOnePipelineJobSettingsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  convertPBRMaterialToAssetBundle?: InputMaybe<FilterRemoveOnePipelineJobSettingsConvertPbrMaterialToAssetBundleInput>;
};

export type FilterRemoveOnePipelineJob_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOnePlannedMaintenanceInput = {
  AND?: InputMaybe<Array<FilterRemoveOnePlannedMaintenanceInput>>;
  OR?: InputMaybe<Array<FilterRemoveOnePlannedMaintenanceInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOnePlannedMaintenanceOperatorsInput>;
  durationHours?: InputMaybe<Scalars['Float']['input']>;
  reasonTranslations?: InputMaybe<Scalars['Translations']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOnePlannedMaintenanceOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOnePlannedMaintenance_IdOperatorsInput>;
};

export type FilterRemoveOnePlannedMaintenance_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOnePriceTableInput = {
  AND?: InputMaybe<Array<FilterRemoveOnePriceTableInput>>;
  OR?: InputMaybe<Array<FilterRemoveOnePriceTableInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOnePriceTableOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  currencyName?: InputMaybe<Scalars['String']['input']>;
  displayEan?: InputMaybe<Scalars['Boolean']['input']>;
  globalDiscount?: InputMaybe<Scalars['Float']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  multiplyingCoefficient?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<InputMaybe<FilterRemoveOnePriceTablePricesInput>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  vatRate?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOnePriceTableOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOnePriceTable_IdOperatorsInput>;
};

export type FilterRemoveOnePriceTablePricesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  articleIdentifier?: InputMaybe<Scalars['String']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  itemsIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  sourceItemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterRemoveOnePriceTable_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneProductScanInput = {
  AND?: InputMaybe<Array<FilterRemoveOneProductScanInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneProductScanInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneProductScanOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  creationDate?: InputMaybe<Scalars['Date']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  scans?: InputMaybe<Array<InputMaybe<FilterRemoveOneProductScanScansInput>>>;
  size?: InputMaybe<FilterRemoveOneProductScanSizeInput>;
  state?: InputMaybe<EnumProductScanState>;
  thumbnail?: InputMaybe<FilterRemoveOneProductScanScansInputImagesInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneProductScanOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneProductScan_IdOperatorsInput>;
};

export type FilterRemoveOneProductScanScansInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  generatedImages?: InputMaybe<Array<InputMaybe<FilterRemoveOneProductScanScansInputImagesInput>>>;
  inputImages?: InputMaybe<Array<InputMaybe<FilterRemoveOneProductScanScansInputImagesInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumProductScanScansType>;
};

export type FilterRemoveOneProductScanScansInputImagesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  format: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type FilterRemoveOneProductScanSizeInput = {
  height?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneProductScan_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneSalesRecordBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneSalesRecordCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterRemoveOneSalesRecordCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneSalesRecordInput = {
  AND?: InputMaybe<Array<FilterRemoveOneSalesRecordInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneSalesRecordInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneSalesRecordOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  finalCustomerMetadata?: InputMaybe<Scalars['Metadata']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneSalesRecordOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneSalesRecord_IdOperatorsInput>;
  brandId?: InputMaybe<FilterRemoveOneSalesRecordBrandIdOperatorsInput>;
  createdAt?: InputMaybe<FilterRemoveOneSalesRecordCreatedAtOperatorsInput>;
  createdById?: InputMaybe<FilterRemoveOneSalesRecordCreatedByIdOperatorsInput>;
  updatedAt?: InputMaybe<FilterRemoveOneSalesRecordUpdatedAtOperatorsInput>;
};

export type FilterRemoveOneSalesRecordUpdatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterRemoveOneSalesRecord_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneSaveCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterRemoveOneSaveCreatedByOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneSaveFolderInput = {
  AND?: InputMaybe<Array<FilterRemoveOneSaveFolderInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneSaveFolderInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneSaveFolderOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['MongoID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneSaveFolderOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneSaveFolder_IdOperatorsInput>;
};

export type FilterRemoveOneSaveFolder_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneSaveInput = {
  AND?: InputMaybe<Array<FilterRemoveOneSaveInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneSaveInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneSaveOperatorsInput>;
  additionalInfo?: InputMaybe<Scalars['JSON']['input']>;
  apartmentUnitTypeId?: InputMaybe<Scalars['MongoID']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  chosenStylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdBy?: InputMaybe<Scalars['MongoID']['input']>;
  createdFromAP?: InputMaybe<Scalars['MongoID']['input']>;
  customerId?: InputMaybe<Scalars['MongoID']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  dataFormatVersion?: InputMaybe<Scalars['Int']['input']>;
  dataUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isReadonly?: InputMaybe<Scalars['Boolean']['input']>;
  isTemplate?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  moduleKitchenCustomData?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  quantitySurveyJSON?: InputMaybe<Scalars['String']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  storageBytesUsage?: InputMaybe<Scalars['Float']['input']>;
  stylePresetGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tunnelState?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<EnumSaveType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedBy?: InputMaybe<Scalars['MongoID']['input']>;
  visitViewpoints?: InputMaybe<Array<FilterRemoveOneSaveVisitViewpointsInput>>;
};

export type FilterRemoveOneSaveIsTemplateOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type FilterRemoveOneSaveNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneSaveOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneSave_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterRemoveOneSaveCreatedAtOperatorsInput>;
  createdBy?: InputMaybe<FilterRemoveOneSaveCreatedByOperatorsInput>;
  isTemplate?: InputMaybe<FilterRemoveOneSaveIsTemplateOperatorsInput>;
  name?: InputMaybe<FilterRemoveOneSaveNameOperatorsInput>;
  updatedAt?: InputMaybe<FilterRemoveOneSaveUpdatedAtOperatorsInput>;
};

export type FilterRemoveOneSaveUpdatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterRemoveOneSaveVisitViewpointsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation?: InputMaybe<FilterRemoveOneSaveVisitViewpointsOrientationInput>;
  position?: InputMaybe<FilterRemoveOneSaveVisitViewpointsPositionInput>;
};

export type FilterRemoveOneSaveVisitViewpointsOrientationInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneSaveVisitViewpointsPositionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneSave_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneSavesGroupInput = {
  AND?: InputMaybe<Array<FilterRemoveOneSavesGroupInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneSavesGroupInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneSavesGroupOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  savesIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumSavesGroupType>;
};

export type FilterRemoveOneSavesGroupNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneSavesGroupOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneSavesGroup_IdOperatorsInput>;
  name?: InputMaybe<FilterRemoveOneSavesGroupNameOperatorsInput>;
};

export type FilterRemoveOneSavesGroup_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneStylePresetCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterRemoveOneStylePresetCustomisationPresetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  chosenItemId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationNameId?: InputMaybe<Scalars['String']['input']>;
  filterTag?: InputMaybe<Scalars['String']['input']>;
  rotationCondition?: InputMaybe<EnumStylePresetCustomisationPresetsRotationCondition>;
};

export type FilterRemoveOneStylePresetGroupInput = {
  AND?: InputMaybe<Array<FilterRemoveOneStylePresetGroupInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneStylePresetGroupInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneStylePresetGroupOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stylePresetIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneStylePresetGroupNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneStylePresetGroupOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneStylePresetGroup_IdOperatorsInput>;
  name?: InputMaybe<FilterRemoveOneStylePresetGroupNameOperatorsInput>;
};

export type FilterRemoveOneStylePresetGroup_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneStylePresetInput = {
  AND?: InputMaybe<Array<FilterRemoveOneStylePresetInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneStylePresetInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneStylePresetOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  customisationPresets?: InputMaybe<Array<InputMaybe<FilterRemoveOneStylePresetCustomisationPresetsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type FilterRemoveOneStylePresetNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneStylePresetOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneStylePreset_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterRemoveOneStylePresetCreatedAtOperatorsInput>;
  name?: InputMaybe<FilterRemoveOneStylePresetNameOperatorsInput>;
  updatedAt?: InputMaybe<FilterRemoveOneStylePresetUpdatedAtOperatorsInput>;
};

export type FilterRemoveOneStylePresetUpdatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterRemoveOneStylePreset_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneTutorialInput = {
  AND?: InputMaybe<Array<FilterRemoveOneTutorialInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneTutorialInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneTutorialOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  displayOnlyOnce?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<FilterRemoveOneTutorialPointInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneTutorialOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneTutorial_IdOperatorsInput>;
};

export type FilterRemoveOneTutorialPointInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  illustration?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<EnumTutorialPointTarget>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
};

export type FilterRemoveOneTutorial_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneUserCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterRemoveOneUserCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneUserEmailOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneUserInput = {
  AND?: InputMaybe<Array<FilterRemoveOneUserInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneUserOperatorsInput>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  favoriteItemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  favoriteSavesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type FilterRemoveOneUserNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneUserOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneUser_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterRemoveOneUserCreatedAtOperatorsInput>;
  createdById?: InputMaybe<FilterRemoveOneUserCreatedByIdOperatorsInput>;
  email?: InputMaybe<FilterRemoveOneUserEmailOperatorsInput>;
  name?: InputMaybe<FilterRemoveOneUserNameOperatorsInput>;
};

export type FilterRemoveOneUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneAccessPointBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneAccessPointInput = {
  AND?: InputMaybe<Array<FilterUpdateOneAccessPointInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneAccessPointInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneAccessPointOperatorsInput>;
  areSavesPubliclyAvailableById?: InputMaybe<Scalars['Boolean']['input']>;
  authorizedCatalogIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  ecotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parametersScrapperId?: InputMaybe<Scalars['MongoID']['input']>;
  parametersTunnelId?: InputMaybe<Scalars['MongoID']['input']>;
  priceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  supportButton?: InputMaybe<FilterUpdateOneAccessPointSupportButtonInput>;
};

export type FilterUpdateOneAccessPointNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneAccessPointOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneAccessPoint_IdOperatorsInput>;
  brandId?: InputMaybe<FilterUpdateOneAccessPointBrandIdOperatorsInput>;
  name?: InputMaybe<FilterUpdateOneAccessPointNameOperatorsInput>;
};

export type FilterUpdateOneAccessPointSupportButtonInput = {
  icon?: InputMaybe<EnumAccessPointSupportButtonIcon>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumAccessPointSupportButtonType>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneAccessPoint_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneBarcodeCollectionBarcodeReferencesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBarcodeCollectionCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneBarcodeCollectionInput = {
  AND?: InputMaybe<Array<FilterUpdateOneBarcodeCollectionInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneBarcodeCollectionInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneBarcodeCollectionOperatorsInput>;
  barcodeReferences?: InputMaybe<Array<FilterUpdateOneBarcodeCollectionBarcodeReferencesInput>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneBarcodeCollectionOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneBarcodeCollection_IdOperatorsInput>;
  createdById?: InputMaybe<FilterUpdateOneBarcodeCollectionCreatedByIdOperatorsInput>;
};

export type FilterUpdateOneBarcodeCollection_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneBrandColorsInput = {
  dataProtection?: InputMaybe<Scalars['String']['input']>;
  legalNotice?: InputMaybe<Scalars['String']['input']>;
  loadingScreenBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenLogoPicture?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBorder?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarContent?: InputMaybe<Scalars['String']['input']>;
  loadingScreenText?: InputMaybe<Scalars['String']['input']>;
  meshes?: InputMaybe<FilterUpdateOneBrandColorsMeshesInput>;
  planElement?: InputMaybe<FilterUpdateOneBrandColorsPlanElementInput>;
  primary?: InputMaybe<Scalars['String']['input']>;
  questHeaderBackground?: InputMaybe<Scalars['String']['input']>;
  questHeaderBody?: InputMaybe<Scalars['String']['input']>;
  questHeaderTitle?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandColorsMeshesInput = {
  wallCut?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandColorsPlanElementInput = {
  floor?: InputMaybe<Scalars['String']['input']>;
  wall?: InputMaybe<Scalars['String']['input']>;
  window?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandInput = {
  AND?: InputMaybe<Array<FilterUpdateOneBrandInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneBrandInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneBrandOperatorsInput>;
  colors?: InputMaybe<FilterUpdateOneBrandColorsInput>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promoterWebsiteConfiguration?: InputMaybe<FilterUpdateOneBrandPromoterWebsiteConfigurationInput>;
  satelliteConfiguration?: InputMaybe<FilterUpdateOneBrandSatelliteConfigurationInput>;
  shareCode?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneBrandOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneBrand_IdOperatorsInput>;
  shareCode?: InputMaybe<FilterUpdateOneBrandShareCodeOperatorsInput>;
  slug?: InputMaybe<FilterUpdateOneBrandSlugOperatorsInput>;
};

export type FilterUpdateOneBrandParametersPricingInput = {
  AND?: InputMaybe<Array<FilterUpdateOneBrandParametersPricingInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneBrandParametersPricingInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneBrandParametersPricingOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  useArticleCode?: InputMaybe<Scalars['Boolean']['input']>;
  useEAN?: InputMaybe<Scalars['Boolean']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneBrandParametersPricingOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneBrandParametersPricing_IdOperatorsInput>;
};

export type FilterUpdateOneBrandParametersPricing_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneBrandParametersScrapperInput = {
  AND?: InputMaybe<Array<FilterUpdateOneBrandParametersScrapperInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneBrandParametersScrapperInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneBrandParametersScrapperOperatorsInput>;
  allowAnonymousSave?: InputMaybe<Scalars['Boolean']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  export?: InputMaybe<Scalars['Boolean']['input']>;
  geometry?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  objects?: InputMaybe<Scalars['Boolean']['input']>;
  postManualSaveTriggerSteps?: InputMaybe<Array<FilterUpdateOneBrandParametersScrapperPostManualSaveTriggerStepsInput>>;
  screenshots?: InputMaybe<Scalars['Boolean']['input']>;
  steps?: InputMaybe<Array<FilterUpdateOneBrandParametersScrapperStepsInput>>;
  watermark?: InputMaybe<FilterUpdateOneBrandParametersScrapperWatermarkInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneBrandParametersScrapperOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneBrandParametersScrapper_IdOperatorsInput>;
};

export type FilterUpdateOneBrandParametersScrapperPostManualSaveTriggerStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  triggerPopup?: InputMaybe<FilterUpdateOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput>;
  type?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsType>;
};

export type FilterUpdateOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buttonType?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupButtonType>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  yesNoButtons?: InputMaybe<FilterUpdateOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput>;
};

export type FilterUpdateOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput = {
  stateProperty?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandParametersScrapperStepsFilterInput = {
  expression?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandParametersScrapperStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  filter?: InputMaybe<FilterUpdateOneBrandParametersScrapperStepsFilterInput>;
  map?: InputMaybe<FilterUpdateOneBrandParametersScrapperStepsMapInput>;
  stepType?: InputMaybe<EnumBrandParametersScrapperStepsStepType>;
  stepVerb?: InputMaybe<Scalars['String']['input']>;
  tap?: InputMaybe<FilterUpdateOneBrandParametersScrapperStepsTapInput>;
  verbFilter?: InputMaybe<EnumBrandParametersScrapperStepsVerbFilter>;
  verbMap?: InputMaybe<EnumBrandParametersScrapperStepsVerbMap>;
  verbTap?: InputMaybe<EnumBrandParametersScrapperStepsVerbTap>;
};

export type FilterUpdateOneBrandParametersScrapperStepsMapInput = {
  kitchenPricer?: InputMaybe<FilterUpdateOneBrandParametersScrapperStepsMapKitchenPricerInput>;
  payloadGenerator?: InputMaybe<FilterUpdateOneBrandParametersScrapperStepsMapPayloadGeneratorInput>;
  pdfReportGenerator?: InputMaybe<FilterUpdateOneBrandParametersScrapperStepsMapPdfReportGeneratorInput>;
  plinthCalculator?: InputMaybe<FilterUpdateOneBrandParametersScrapperStepsMapPlinthCalculatorInput>;
  reportGenerator?: InputMaybe<FilterUpdateOneBrandParametersScrapperStepsMapReportGeneratorInput>;
  terracePricer?: InputMaybe<FilterUpdateOneBrandParametersScrapperStepsMapTerracePricerInput>;
};

export type FilterUpdateOneBrandParametersScrapperStepsMapKitchenPricerInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  barcodeCollectionId?: InputMaybe<Scalars['MongoID']['input']>;
  projectBaseUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandParametersScrapperStepsMapPayloadGeneratorInput = {
  addSaveName?: InputMaybe<Scalars['Boolean']['input']>;
  addUpdateToken?: InputMaybe<Scalars['Boolean']['input']>;
  dynamicParameterForTunnelStateInformation?: InputMaybe<Scalars['String']['input']>;
  tunnelStateKeys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FilterUpdateOneBrandParametersScrapperStepsMapPdfReportGeneratorInput = {
  payloadType?: InputMaybe<EnumBrandParametersScrapperStepsMapPdfReportGeneratorPayloadType>;
};

export type FilterUpdateOneBrandParametersScrapperStepsMapPlinthCalculatorInput = {
  bigPlinthId?: InputMaybe<Scalars['MongoID']['input']>;
  littlePlinthId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterUpdateOneBrandParametersScrapperStepsMapReportGeneratorInput = {
  chunksManifest?: InputMaybe<Array<FilterUpdateOneInputDocumentChunkManifestInput>>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<EnumBrandParametersScrapperStepsMapReportGeneratorMode>;
};

export type FilterUpdateOneBrandParametersScrapperStepsMapTerracePricerInput = {
  itemsCatalogId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterUpdateOneBrandParametersScrapperStepsTapInput = {
  outputToApi?: InputMaybe<FilterUpdateOneBrandParametersScrapperStepsTapOutputToApiInput>;
  sendEmail?: InputMaybe<FilterUpdateOneBrandParametersScrapperStepsTapSendEmailInput>;
};

export type FilterUpdateOneBrandParametersScrapperStepsTapOutputToApiInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  signPayload?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneBrandParametersScrapperStepsTapSendEmailInput = {
  attachmentName?: InputMaybe<Scalars['String']['input']>;
  dynamicParameterEmailAdress?: InputMaybe<Scalars['String']['input']>;
  emailSourceType?: InputMaybe<EnumBrandParametersScrapperStepsTapSendEmailEmailSourceType>;
  sendReportAsAttachment?: InputMaybe<Scalars['Boolean']['input']>;
  staticEmailAdress?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandParametersScrapperWatermarkInput = {
  alpha?: InputMaybe<Scalars['Float']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  repetition?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneBrandParametersScrapper_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneBrandParametersTunnelApertureParametersInput = {
  doorClassicDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntryDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntrySidelightDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorExteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doorInteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doubleDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleSwingDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  garageDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  simpleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  slitWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  windowCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  windowDefaultItem?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandParametersTunnelColorsParametersInput = {
  nameHelpAtlas?: InputMaybe<Scalars['String']['input']>;
  nameOptionsAtlas?: InputMaybe<Scalars['String']['input']>;
  nameToolsAtlas?: InputMaybe<Scalars['String']['input']>;
  primary?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandParametersTunnelCustomLinkButtonInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandParametersTunnelDefaultCameraParametersInput = {
  visitCameraParameters?: InputMaybe<FilterUpdateOneBrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput>;
};

export type FilterUpdateOneBrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput = {
  defaultVisitFieldOfView?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneBrandParametersTunnelDefaultCoatingParametersInput = {
  defaultExteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultGardenFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultInteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterUpdateOneBrandParametersTunnelInput = {
  AND?: InputMaybe<Array<FilterUpdateOneBrandParametersTunnelInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneBrandParametersTunnelInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneBrandParametersTunnelOperatorsInput>;
  apertureParameters?: InputMaybe<FilterUpdateOneBrandParametersTunnelApertureParametersInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colorsParameters?: InputMaybe<FilterUpdateOneBrandParametersTunnelColorsParametersInput>;
  customLinkButton?: InputMaybe<FilterUpdateOneBrandParametersTunnelCustomLinkButtonInput>;
  defaultCameraParameters?: InputMaybe<FilterUpdateOneBrandParametersTunnelDefaultCameraParametersInput>;
  defaultCoatingParameters?: InputMaybe<FilterUpdateOneBrandParametersTunnelDefaultCoatingParametersInput>;
  defaultDayTime?: InputMaybe<Scalars['Float']['input']>;
  defaultSnapDistance?: InputMaybe<Scalars['Float']['input']>;
  disableHeaderShadow?: InputMaybe<Scalars['Boolean']['input']>;
  displayCartItemNumber?: InputMaybe<Scalars['Boolean']['input']>;
  displayCustomisationTagFurnitureOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displayFurnitureSubstitutesOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displaySaveName?: InputMaybe<Scalars['Boolean']['input']>;
  displayStepsHeader?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  globalOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  includeAllBrandItemsInCache?: InputMaybe<Scalars['Boolean']['input']>;
  initialStepIfLoadingSave?: InputMaybe<Scalars['Float']['input']>;
  isReloadFromLocalStorageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  logoLinkOnClick?: InputMaybe<Scalars['String']['input']>;
  logoPictureReference?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  persistentVariables?: InputMaybe<Array<FilterUpdateOneBrandParametersTunnelPersistentVariablesInput>>;
  preload?: InputMaybe<Scalars['Boolean']['input']>;
  savePanelParameters?: InputMaybe<FilterUpdateOneBrandParametersTunnelSavePanelParametersInput>;
  steps?: InputMaybe<Array<FilterUpdateOneBrandParametersTunnelStepInput>>;
  wallParameters?: InputMaybe<FilterUpdateOneBrandParametersTunnelWallParametersInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneBrandParametersTunnelOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneBrandParametersTunnel_IdOperatorsInput>;
};

export type FilterUpdateOneBrandParametersTunnelPersistentVariablesInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandParametersTunnelSavePanelParametersInput = {
  isCustomerModuleEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isExportButtonEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneBrandParametersTunnelStepInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  analytics?: InputMaybe<FilterUpdateOneBrandParametersTunnelStepsAnalyticsInput>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  isShownInStepper?: InputMaybe<Scalars['Boolean']['input']>;
  module?: InputMaybe<EnumBrandParametersTunnelStepsModule>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  resetTunnelOnActivation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneBrandParametersTunnelStepsAnalyticsChoiceReducerInput = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  stateProperties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FilterUpdateOneBrandParametersTunnelStepsAnalyticsInput = {
  choiceReducer?: InputMaybe<FilterUpdateOneBrandParametersTunnelStepsAnalyticsChoiceReducerInput>;
};

export type FilterUpdateOneBrandParametersTunnelWallParametersExteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type FilterUpdateOneBrandParametersTunnelWallParametersInput = {
  doorLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  exteriorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  exteriorWallThickness?: InputMaybe<FilterUpdateOneBrandParametersTunnelWallParametersExteriorWallThicknessInput>;
  floorHeight?: InputMaybe<Scalars['Float']['input']>;
  groundFloorLevel?: InputMaybe<Scalars['Float']['input']>;
  innerHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorWallThickness?: InputMaybe<FilterUpdateOneBrandParametersTunnelWallParametersInteriorWallThicknessInput>;
  optionsPanelWallConfig?: InputMaybe<FilterUpdateOneBrandParametersTunnelWallParametersOptionsPanelWallConfigInput>;
  windowLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  windowSillLevel?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneBrandParametersTunnelWallParametersInteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type FilterUpdateOneBrandParametersTunnelWallParametersOptionsPanelWallConfigInput = {
  displayOnlyWallType?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightExteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightInteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessDropdown?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessInput?: InputMaybe<Scalars['Boolean']['input']>;
  usePartitionLabelForInteriorWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneBrandParametersTunnel_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneBrandPromoterWebsiteConfigurationInput = {
  acquirerValidateUnitAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  metadataConfiguration?: InputMaybe<FilterUpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationInput>;
  operatorTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  promoterValidateTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  unitTypeSaveModelId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterUpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataType>;
};

export type FilterUpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataType>;
};

export type FilterUpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationInput = {
  apartmentUnitMetadata?: InputMaybe<Array<FilterUpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput>>;
  apartmentUnitTypeIdMetadataKey?: InputMaybe<Scalars['String']['input']>;
  apartmentUnitTypeMetadata?: InputMaybe<Array<FilterUpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput>>;
  programMetadata?: InputMaybe<Array<FilterUpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput>>;
};

export type FilterUpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataType>;
};

export type FilterUpdateOneBrandSatelliteConfigurationInput = {
  satelliteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneBrandShareCodeOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneBrandSlugOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneBrand_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneCatalogFolderInput = {
  AND?: InputMaybe<Array<FilterUpdateOneCatalogFolderInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneCatalogFolderInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneCatalogFolderOperatorsInput>;
  associatedEcotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  brand?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  iconId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<FilterUpdateOneCatalogFolderMetadataInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  rootId?: InputMaybe<Scalars['MongoID']['input']>;
  sharedWithIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailId?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tiles?: InputMaybe<Array<InputMaybe<FilterUpdateOneCatalogFolderTilesInput>>>;
  tilesBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  tilesColumnAmount?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnGap?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  tilesRowGap?: InputMaybe<Scalars['Float']['input']>;
  tilesRowSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  type?: InputMaybe<EnumCatalogFolderType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  virtual?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneCatalogFolderMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneCatalogFolderOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneCatalogFolder_IdOperatorsInput>;
};

export type FilterUpdateOneCatalogFolderTilesImagePlacementInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneCatalogFolderTilesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  advancedTextTranslations?: InputMaybe<Scalars['Translations']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundOpacity?: InputMaybe<Scalars['Float']['input']>;
  borderRadius?: InputMaybe<Scalars['Float']['input']>;
  catalogSourceId?: InputMaybe<Scalars['MongoID']['input']>;
  construction?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionTextSize?: InputMaybe<Scalars['Float']['input']>;
  folder?: InputMaybe<Scalars['MongoID']['input']>;
  hasShadow?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  horizontalTextAlignement?: InputMaybe<EnumCatalogFolderTilesHorizontalTextAlignement>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  imagePlacement?: InputMaybe<FilterUpdateOneCatalogFolderTilesImagePlacementInput>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isImagePlacementFree?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  item?: InputMaybe<Scalars['MongoID']['input']>;
  itemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  mask?: InputMaybe<Scalars['Boolean']['input']>;
  maskColor?: InputMaybe<Scalars['String']['input']>;
  maskOpacity?: InputMaybe<Scalars['Float']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<FilterUpdateOneCatalogFolderTilesMetadataInput>>>;
  posX?: InputMaybe<Scalars['Float']['input']>;
  posY?: InputMaybe<Scalars['Float']['input']>;
  saveSelectedInTunnelStateVariable?: InputMaybe<Scalars['String']['input']>;
  stylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textDescriptionTranslations?: InputMaybe<Scalars['Translations']['input']>;
  textPadding?: InputMaybe<FilterUpdateOneCatalogFolderTilesTextPaddingInput>;
  textTitleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTextColor?: InputMaybe<Scalars['String']['input']>;
  titleTextSize?: InputMaybe<Scalars['Float']['input']>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumCatalogFolderTilesType>;
  useAdvancedText?: InputMaybe<Scalars['Boolean']['input']>;
  verticalTextAlignement?: InputMaybe<EnumCatalogFolderTilesVerticalTextAlignement>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneCatalogFolderTilesMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneCatalogFolderTilesTextPaddingInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneCatalogFolder_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneCustomerAddressOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneCustomerBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneCustomerCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneCustomerEmailOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneCustomerFirstnameAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneCustomerFirstnameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneCustomerGenderAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneCustomerGenderOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneCustomerInput = {
  AND?: InputMaybe<Array<FilterUpdateOneCustomerInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneCustomerInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneCustomerOperatorsInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  firstnameAdditional?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  genderAdditional?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  surnameAdditional?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneCustomerOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneCustomer_IdOperatorsInput>;
  address?: InputMaybe<FilterUpdateOneCustomerAddressOperatorsInput>;
  brandId?: InputMaybe<FilterUpdateOneCustomerBrandIdOperatorsInput>;
  createdById?: InputMaybe<FilterUpdateOneCustomerCreatedByIdOperatorsInput>;
  email?: InputMaybe<FilterUpdateOneCustomerEmailOperatorsInput>;
  firstname?: InputMaybe<FilterUpdateOneCustomerFirstnameOperatorsInput>;
  firstnameAdditional?: InputMaybe<FilterUpdateOneCustomerFirstnameAdditionalOperatorsInput>;
  gender?: InputMaybe<FilterUpdateOneCustomerGenderOperatorsInput>;
  genderAdditional?: InputMaybe<FilterUpdateOneCustomerGenderAdditionalOperatorsInput>;
  surname?: InputMaybe<FilterUpdateOneCustomerSurnameOperatorsInput>;
  surnameAdditional?: InputMaybe<FilterUpdateOneCustomerSurnameAdditionalOperatorsInput>;
};

export type FilterUpdateOneCustomerSurnameAdditionalOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneCustomerSurnameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneCustomer_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

/** Configures the parameters of one or multiple chunks in the document. */
export type FilterUpdateOneInputDocumentChunkManifestInput = {
  /** Render-time parameters object, implementing the chunk's parameters schema as given in the output manifest. The type of this property is loosely-typed in GraphQL, but verified at runtime against that schema. If the parameters passed are invalid against the schema, the chunk will be disabled and a manifest warning will be issued. */
  parameters?: InputMaybe<Scalars['JSONObject']['input']>;
  /** A path selector to target one or multiple chunks, since it can be a bash-like glob pattern, ex. "/my-section/my-chunk-123", "/my-section/my-chunk-*", "/**\/my-chunk-*", etc. */
  path?: InputMaybe<Scalars['String']['input']>;
  /** Defines whether the chunk should be rendered in the document. If set "false" on a group chunk, it applies to its children recursively. */
  render?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneItemCustomisationCoverPlanesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItem?: InputMaybe<Scalars['MongoID']['input']>;
  hideForSingleObject?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<EnumItemCustomisationCoverPlanesMode>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  positions?: InputMaybe<FilterUpdateOneItemCustomisationCoverPlanesPositionsInput>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemCustomisationCoverPlanesPositionsInput = {
  above?: InputMaybe<Scalars['Boolean']['input']>;
  behind?: InputMaybe<Scalars['Boolean']['input']>;
  front?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemCustomisationMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPalette?: InputMaybe<Scalars['MongoID']['input']>;
  materials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumItemCustomisationMaterialsType>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemCustomisationSubObjectsHooksInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation?: InputMaybe<FilterUpdateOneItemCustomisationSubObjectsHooksOrientationInput>;
  position?: InputMaybe<FilterUpdateOneItemCustomisationSubObjectsHooksPositionInput>;
  type?: InputMaybe<EnumItemCustomisationSubObjectsHooksType>;
};

export type FilterUpdateOneItemCustomisationSubObjectsHooksOrientationInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemCustomisationSubObjectsHooksPositionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemCustomisationSubObjectsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  hooks?: InputMaybe<Array<InputMaybe<FilterUpdateOneItemCustomisationSubObjectsHooksInput>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemCustomisationSymbolicRepresentationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  anglePositionIsRight?: InputMaybe<Scalars['Boolean']['input']>;
  break3D?: InputMaybe<Scalars['Boolean']['input']>;
  colors?: InputMaybe<EnumItemCustomisationSymbolicRepresentationColors>;
  displayDiagonals?: InputMaybe<Scalars['Boolean']['input']>;
  doorType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationDoorType>;
  drawerCount?: InputMaybe<Scalars['Float']['input']>;
  symbolicIcon?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIcon>;
  symbolicIconShape?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconShape>;
  symbolicIconSubType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconSubType>;
  type?: InputMaybe<EnumItemCustomisationSymbolicRepresentationType>;
};

export type FilterUpdateOneItemFactSheetInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONObject']['input']>;
  logoPicture?: InputMaybe<Scalars['String']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneItemGuardrailInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  meshes?: InputMaybe<Array<InputMaybe<FilterUpdateOneItemGuardrailInformationsMeshesInput>>>;
};

export type FilterUpdateOneItemGuardrailInformationsMeshesDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemGuardrailInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  dimensions?: InputMaybe<FilterUpdateOneItemGuardrailInformationsMeshesDimensionsInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  options?: InputMaybe<FilterUpdateOneItemGuardrailInformationsMeshesOptionsInput>;
  placing?: InputMaybe<FilterUpdateOneItemGuardrailInformationsMeshesPlacingInput>;
  surface?: InputMaybe<FilterUpdateOneItemGuardrailInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemGuardrailInformationsMeshesType>;
};

export type FilterUpdateOneItemGuardrailInformationsMeshesOptionsInput = {
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemGuardrailInformationsMeshesOptionsShape>;
};

export type FilterUpdateOneItemGuardrailInformationsMeshesPlacingInput = {
  elevation?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemGuardrailInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemInput = {
  AND?: InputMaybe<Array<FilterUpdateOneItemInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneItemInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneItemOperatorsInput>;
  articleCode?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  buildingWingInfos?: InputMaybe<Scalars['String']['input']>;
  canBeCutAlongHeight?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongLength?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongWidth?: InputMaybe<Scalars['Boolean']['input']>;
  canBeDroppedOnZones?: InputMaybe<Array<EnumItemCanBeDroppedOnZones>>;
  categoriesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  compositeInfos?: InputMaybe<Scalars['String']['input']>;
  consideredAsDroppableZones?: InputMaybe<Array<EnumItemConsideredAsDroppableZones>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  customisationByItemsGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationCoverPlanes?: InputMaybe<Array<FilterUpdateOneItemCustomisationCoverPlanesInput>>;
  customisationMaterials?: InputMaybe<Array<FilterUpdateOneItemCustomisationMaterialsInput>>;
  customisationSubObjects?: InputMaybe<Array<FilterUpdateOneItemCustomisationSubObjectsInput>>;
  customisationSymbolicRepresentation?: InputMaybe<FilterUpdateOneItemCustomisationSymbolicRepresentationInput>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  factSheet?: InputMaybe<FilterUpdateOneItemFactSheetInput>;
  guardrailInformations?: InputMaybe<FilterUpdateOneItemGuardrailInformationsInput>;
  metadata?: InputMaybe<Array<FilterUpdateOneItemMetadataInput>>;
  minimumPricedDimensions?: InputMaybe<FilterUpdateOneItemMinimumPricedDimensionsInput>;
  modelUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  outputAssets?: InputMaybe<FilterUpdateOneItemOutputAssetsInput>;
  physicalHeight?: InputMaybe<Scalars['String']['input']>;
  physicalLength?: InputMaybe<Scalars['String']['input']>;
  physicalWidth?: InputMaybe<Scalars['String']['input']>;
  pillarInformations?: InputMaybe<FilterUpdateOneItemPillarInformationsInput>;
  priceCoefExclusion?: InputMaybe<Scalars['Boolean']['input']>;
  priceGeneration?: InputMaybe<EnumItemPriceGeneration>;
  priceUnit?: InputMaybe<EnumItemPriceUnit>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  roofInformations?: InputMaybe<FilterUpdateOneItemRoofInformationsInput>;
  scrapperTag?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stairsInformations?: InputMaybe<FilterUpdateOneItemStairsInformationsInput>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tooltip3DTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumItemType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
  vegetationInformations?: InputMaybe<FilterUpdateOneItemVegetationInformationsInput>;
  wallInformations?: InputMaybe<FilterUpdateOneItemWallInformationsInput>;
};

export type FilterUpdateOneItemMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneItemMinimumPricedDimensionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneItemNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneItemOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneItem_IdOperatorsInput>;
  createdById?: InputMaybe<FilterUpdateOneItemCreatedByIdOperatorsInput>;
  name?: InputMaybe<FilterUpdateOneItemNameOperatorsInput>;
  slug?: InputMaybe<FilterUpdateOneItemSlugOperatorsInput>;
};

export type FilterUpdateOneItemOutputAssetsCoatingVariantsAlbedoInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type FilterUpdateOneItemOutputAssetsCoatingVariantsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  albedo?: InputMaybe<FilterUpdateOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  metallic?: InputMaybe<FilterUpdateOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  normal?: InputMaybe<FilterUpdateOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  smoothness?: InputMaybe<FilterUpdateOneItemOutputAssetsCoatingVariantsAlbedoInput>;
};

export type FilterUpdateOneItemOutputAssetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  coatingVariants?: InputMaybe<Array<InputMaybe<FilterUpdateOneItemOutputAssetsCoatingVariantsInput>>>;
};

export type FilterUpdateOneItemPillarInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  cylinderSides?: InputMaybe<Scalars['Float']['input']>;
  materials?: InputMaybe<Array<InputMaybe<FilterUpdateOneItemPillarInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterUpdateOneItemPillarInformationsModelsInput>>>;
  necking?: InputMaybe<FilterUpdateOneItemPillarInformationsNeckingInput>;
};

export type FilterUpdateOneItemPillarInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsMaterialsType>;
};

export type FilterUpdateOneItemPillarInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemPillarInformationsNeckingCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemPillarInformationsNeckingInput = {
  crossSection?: InputMaybe<FilterUpdateOneItemPillarInformationsNeckingCrossSectionInput>;
  distanceToTop?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsCoveringInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  ridgeTiles?: InputMaybe<FilterUpdateOneItemRoofInformationsCoveringRidgeTilesInput>;
  sealingThickness?: InputMaybe<Scalars['Float']['input']>;
  spaceBetweenSealingAndTiles?: InputMaybe<Scalars['Float']['input']>;
  tilesThickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsCoveringRidgeTilesInput = {
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsEavesStyleInput = {
  type?: InputMaybe<EnumItemRoofInformationsEavesStyleType>;
};

export type FilterUpdateOneItemRoofInformationsFlatRoofBorderDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsFlatRoofInput = {
  borderDimensions?: InputMaybe<FilterUpdateOneItemRoofInformationsFlatRoofBorderDimensionsInput>;
  gravelThickness?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemRoofInformationsFramingInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  pieces?: InputMaybe<Array<InputMaybe<FilterUpdateOneItemRoofInformationsFramingPiecesInput>>>;
  type?: InputMaybe<EnumItemRoofInformationsFramingType>;
};

export type FilterUpdateOneItemRoofInformationsFramingPiecesEnd_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsFramingPiecesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  end_coordinate?: InputMaybe<FilterUpdateOneItemRoofInformationsFramingPiecesEnd_CoordinateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_coordinate?: InputMaybe<FilterUpdateOneItemRoofInformationsFramingPiecesStart_CoordinateInput>;
  type?: InputMaybe<EnumItemRoofInformationsFramingPiecesType>;
};

export type FilterUpdateOneItemRoofInformationsFramingPiecesStart_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsGutterInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  covering?: InputMaybe<FilterUpdateOneItemRoofInformationsCoveringInput>;
  eavesStyle?: InputMaybe<FilterUpdateOneItemRoofInformationsEavesStyleInput>;
  flatRoof?: InputMaybe<FilterUpdateOneItemRoofInformationsFlatRoofInput>;
  framing?: InputMaybe<FilterUpdateOneItemRoofInformationsFramingInput>;
  gutter?: InputMaybe<FilterUpdateOneItemRoofInformationsGutterInput>;
  materials?: InputMaybe<Array<InputMaybe<FilterUpdateOneItemRoofInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterUpdateOneItemRoofInformationsModelsInput>>>;
  overhang?: InputMaybe<FilterUpdateOneItemRoofInformationsOverhangInput>;
  purlins?: InputMaybe<FilterUpdateOneItemRoofInformationsPurlinsInput>;
  rafters?: InputMaybe<FilterUpdateOneItemRoofInformationsRaftersInput>;
  ridgeBoard?: InputMaybe<FilterUpdateOneItemRoofInformationsRidgeBoardInput>;
  solarPanels?: InputMaybe<FilterUpdateOneItemRoofInformationsSolarPanelsInput>;
  topPlate?: InputMaybe<FilterUpdateOneItemRoofInformationsTopPlateInput>;
};

export type FilterUpdateOneItemRoofInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsMaterialsType>;
};

export type FilterUpdateOneItemRoofInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsOverhangInput = {
  bargeboard?: InputMaybe<Scalars['Float']['input']>;
  bargeboardPurlins?: InputMaybe<Scalars['Float']['input']>;
  bargeboardRafters?: InputMaybe<Scalars['Float']['input']>;
  eave?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemRoofInformationsPurlinsBottomInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsPurlinsInput = {
  bottom?: InputMaybe<FilterUpdateOneItemRoofInformationsPurlinsBottomInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  intermediate?: InputMaybe<FilterUpdateOneItemRoofInformationsPurlinsIntermediateInput>;
  ridge?: InputMaybe<FilterUpdateOneItemRoofInformationsPurlinsRidgeInput>;
};

export type FilterUpdateOneItemRoofInformationsPurlinsIntermediateInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsPurlinsRidgeInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsRaftersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsRaftersInput = {
  crossSection?: InputMaybe<FilterUpdateOneItemRoofInformationsRaftersCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsRidgeBoardCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsRidgeBoardInput = {
  crossSection?: InputMaybe<FilterUpdateOneItemRoofInformationsRidgeBoardCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemRoofInformationsSolarPanelsFrameInput = {
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsSolarPanelsInput = {
  distanceToRoof?: InputMaybe<Scalars['Float']['input']>;
  frame?: InputMaybe<FilterUpdateOneItemRoofInformationsSolarPanelsFrameInput>;
  height?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsTopPlateCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemRoofInformationsTopPlateInput = {
  crossSection?: InputMaybe<FilterUpdateOneItemRoofInformationsTopPlateCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemSlugOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneItemStairsInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  landing?: InputMaybe<FilterUpdateOneItemStairsInformationsLandingInput>;
  materials?: InputMaybe<Array<InputMaybe<FilterUpdateOneItemStairsInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<FilterUpdateOneItemStairsInformationsModelsInput>>>;
  railing?: InputMaybe<FilterUpdateOneItemStairsInformationsRailingInput>;
  steps?: InputMaybe<FilterUpdateOneItemStairsInformationsStepsInput>;
  stringers?: InputMaybe<FilterUpdateOneItemStairsInformationsStringersInput>;
};

export type FilterUpdateOneItemStairsInformationsLandingInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemStairsInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsMaterialsType>;
};

export type FilterUpdateOneItemStairsInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemStairsInformationsRailingBalustersInput = {
  radius?: InputMaybe<Scalars['Float']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemStairsInformationsRailingHandrailCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemStairsInformationsRailingHandrailInput = {
  crossSection?: InputMaybe<FilterUpdateOneItemStairsInformationsRailingHandrailCrossSectionInput>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemStairsInformationsRailingInput = {
  balusters?: InputMaybe<FilterUpdateOneItemStairsInformationsRailingBalustersInput>;
  handrail?: InputMaybe<FilterUpdateOneItemStairsInformationsRailingHandrailInput>;
  posts?: InputMaybe<FilterUpdateOneItemStairsInformationsRailingPostsInput>;
};

export type FilterUpdateOneItemStairsInformationsRailingPostsCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemStairsInformationsRailingPostsInput = {
  crossSection?: InputMaybe<FilterUpdateOneItemStairsInformationsRailingPostsCrossSectionInput>;
};

export type FilterUpdateOneItemStairsInformationsStepsInput = {
  risers?: InputMaybe<FilterUpdateOneItemStairsInformationsStepsRisersInput>;
  treats?: InputMaybe<FilterUpdateOneItemStairsInformationsStepsTreatsInput>;
};

export type FilterUpdateOneItemStairsInformationsStepsRisersInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemStairsInformationsStepsTreatsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  nose?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemStairsInformationsStringersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemStairsInformationsStringersInput = {
  crossSection?: InputMaybe<FilterUpdateOneItemStairsInformationsStringersCrossSectionInput>;
  overTreat?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemVegetationInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  canBeSelected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemWallInformationsApplicationInput = {
  bothSides?: InputMaybe<Scalars['Boolean']['input']>;
  exteriorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  overRegularWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemWallInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  application?: InputMaybe<FilterUpdateOneItemWallInformationsApplicationInput>;
  class?: InputMaybe<EnumItemWallInformationsClass>;
  meshes?: InputMaybe<Array<InputMaybe<FilterUpdateOneItemWallInformationsMeshesInput>>>;
};

export type FilterUpdateOneItemWallInformationsMeshesDimensionsInput = {
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemWallInformationsMeshesDisplayInput = {
  autoCut?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsHigh?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsLow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemWallInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buildingMaterial?: InputMaybe<EnumItemWallInformationsMeshesBuildingMaterial>;
  dimensions?: InputMaybe<FilterUpdateOneItemWallInformationsMeshesDimensionsInput>;
  display?: InputMaybe<FilterUpdateOneItemWallInformationsMeshesDisplayInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<FilterUpdateOneItemWallInformationsMeshesOptionsInput>;
  overlapPriority?: InputMaybe<Scalars['Float']['input']>;
  placing?: InputMaybe<FilterUpdateOneItemWallInformationsMeshesPlacingInput>;
  segmentTypes?: InputMaybe<FilterUpdateOneItemWallInformationsMeshesSegmentTypesInput>;
  surface?: InputMaybe<FilterUpdateOneItemWallInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemWallInformationsMeshesType>;
};

export type FilterUpdateOneItemWallInformationsMeshesOptionsInput = {
  closeBack?: InputMaybe<Scalars['Boolean']['input']>;
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeFront?: InputMaybe<Scalars['Boolean']['input']>;
  closeSides?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  nextToDoorsAndWindows?: InputMaybe<Scalars['Boolean']['input']>;
  paintable?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemWallInformationsMeshesOptionsShape>;
  skewOnCorners?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemWallInformationsMeshesPlacingBottomElevationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingBottomElevationReference>;
};

export type FilterUpdateOneItemWallInformationsMeshesPlacingInput = {
  beamDirection?: InputMaybe<EnumItemWallInformationsMeshesPlacingBeamDirection>;
  bottomElevation?: InputMaybe<FilterUpdateOneItemWallInformationsMeshesPlacingBottomElevationInput>;
  depthOffset?: InputMaybe<Scalars['Float']['input']>;
  doorPostOffset?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  endDepth?: InputMaybe<FilterUpdateOneItemWallInformationsMeshesPlacingStartDepthInput>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  moveVerticesAbove?: InputMaybe<Scalars['Float']['input']>;
  pivotIsOnTop?: InputMaybe<Scalars['Boolean']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
  repetitionFilter?: InputMaybe<EnumItemWallInformationsMeshesPlacingRepetitionFilter>;
  startDepth?: InputMaybe<FilterUpdateOneItemWallInformationsMeshesPlacingStartDepthInput>;
  stretchVertically?: InputMaybe<Scalars['Boolean']['input']>;
  topElevation?: InputMaybe<FilterUpdateOneItemWallInformationsMeshesPlacingBottomElevationInput>;
};

export type FilterUpdateOneItemWallInformationsMeshesPlacingStartDepthInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  plusOnTop?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingStartDepthReference>;
};

export type FilterUpdateOneItemWallInformationsMeshesSegmentTypesInput = {
  doors?: InputMaybe<Scalars['Boolean']['input']>;
  walls?: InputMaybe<Scalars['Boolean']['input']>;
  windows?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItemWallInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
  swapUV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterUpdateOneItem_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneItemsGroupInput = {
  AND?: InputMaybe<Array<FilterUpdateOneItemsGroupInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneItemsGroupInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneItemsGroupOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  generated?: InputMaybe<Scalars['Boolean']['input']>;
  itemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  option?: InputMaybe<FilterUpdateOneItemsGroupOptionInput>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  shouldBeOpenInGUI?: InputMaybe<Scalars['Boolean']['input']>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumItemsGroupType>;
};

export type FilterUpdateOneItemsGroupNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneItemsGroupOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneItemsGroup_IdOperatorsInput>;
  name?: InputMaybe<FilterUpdateOneItemsGroupNameOperatorsInput>;
};

export type FilterUpdateOneItemsGroupOptionInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  baseItemId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  disableDefaultChoice?: InputMaybe<Scalars['Boolean']['input']>;
  positions?: InputMaybe<Array<FilterUpdateOneItemsGroupOptionPositionsInput>>;
};

export type FilterUpdateOneItemsGroupOptionPositionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  margins?: InputMaybe<FilterUpdateOneItemsGroupOptionPositionsMarginsInput>;
  placement?: InputMaybe<EnumItemsGroupOptionPositionsPlacement>;
  rotation?: InputMaybe<EnumItemsGroupOptionPositionsRotation>;
};

export type FilterUpdateOneItemsGroupOptionPositionsMarginsInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneItemsGroup_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOnePaletteColorsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  a?: InputMaybe<Scalars['Float']['input']>;
  b?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  g?: InputMaybe<Scalars['Float']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  r?: InputMaybe<Scalars['Float']['input']>;
  roughness?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOnePaletteInput = {
  AND?: InputMaybe<Array<FilterUpdateOnePaletteInput>>;
  OR?: InputMaybe<Array<FilterUpdateOnePaletteInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOnePaletteOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colors?: InputMaybe<Array<InputMaybe<FilterUpdateOnePaletteColorsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumPaletteType>;
};

export type FilterUpdateOnePaletteNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOnePaletteOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOnePalette_IdOperatorsInput>;
  name?: InputMaybe<FilterUpdateOnePaletteNameOperatorsInput>;
};

export type FilterUpdateOnePalette_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOnePictureInput = {
  AND?: InputMaybe<Array<FilterUpdateOnePictureInput>>;
  OR?: InputMaybe<Array<FilterUpdateOnePictureInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOnePictureOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOnePictureOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOnePicture_IdOperatorsInput>;
};

export type FilterUpdateOnePicture_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOnePipelineJobDeadlineJobIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOnePipelineJobInput = {
  AND?: InputMaybe<Array<FilterUpdateOnePipelineJobInput>>;
  OR?: InputMaybe<Array<FilterUpdateOnePipelineJobInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOnePipelineJobOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  completedDate?: InputMaybe<Scalars['Date']['input']>;
  deadlineJobId?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<FilterUpdateOnePipelineJobSettingsInput>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state?: InputMaybe<EnumPipelineJobState>;
  submitDate?: InputMaybe<Scalars['Date']['input']>;
  type?: InputMaybe<EnumPipelineJobType>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOnePipelineJobOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOnePipelineJob_IdOperatorsInput>;
  deadlineJobId?: InputMaybe<FilterUpdateOnePipelineJobDeadlineJobIdOperatorsInput>;
};

export type FilterUpdateOnePipelineJobSettingsConvertPbrMaterialToAssetBundleInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  assetUrl?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterUpdateOnePipelineJobSettingsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  convertPBRMaterialToAssetBundle?: InputMaybe<FilterUpdateOnePipelineJobSettingsConvertPbrMaterialToAssetBundleInput>;
};

export type FilterUpdateOnePipelineJob_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOnePlannedMaintenanceInput = {
  AND?: InputMaybe<Array<FilterUpdateOnePlannedMaintenanceInput>>;
  OR?: InputMaybe<Array<FilterUpdateOnePlannedMaintenanceInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOnePlannedMaintenanceOperatorsInput>;
  durationHours?: InputMaybe<Scalars['Float']['input']>;
  reasonTranslations?: InputMaybe<Scalars['Translations']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOnePlannedMaintenanceOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOnePlannedMaintenance_IdOperatorsInput>;
};

export type FilterUpdateOnePlannedMaintenance_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOnePriceTableInput = {
  AND?: InputMaybe<Array<FilterUpdateOnePriceTableInput>>;
  OR?: InputMaybe<Array<FilterUpdateOnePriceTableInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOnePriceTableOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  currencyName?: InputMaybe<Scalars['String']['input']>;
  displayEan?: InputMaybe<Scalars['Boolean']['input']>;
  globalDiscount?: InputMaybe<Scalars['Float']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  multiplyingCoefficient?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<InputMaybe<FilterUpdateOnePriceTablePricesInput>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  vatRate?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOnePriceTableOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOnePriceTable_IdOperatorsInput>;
};

export type FilterUpdateOnePriceTablePricesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  articleIdentifier?: InputMaybe<Scalars['String']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  itemsIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  sourceItemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type FilterUpdateOnePriceTable_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneProductScanInput = {
  AND?: InputMaybe<Array<FilterUpdateOneProductScanInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneProductScanInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneProductScanOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  creationDate?: InputMaybe<Scalars['Date']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  scans?: InputMaybe<Array<InputMaybe<FilterUpdateOneProductScanScansInput>>>;
  size?: InputMaybe<FilterUpdateOneProductScanSizeInput>;
  state?: InputMaybe<EnumProductScanState>;
  thumbnail?: InputMaybe<FilterUpdateOneProductScanScansInputImagesInput>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneProductScanOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneProductScan_IdOperatorsInput>;
};

export type FilterUpdateOneProductScanScansInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  generatedImages?: InputMaybe<Array<InputMaybe<FilterUpdateOneProductScanScansInputImagesInput>>>;
  inputImages?: InputMaybe<Array<InputMaybe<FilterUpdateOneProductScanScansInputImagesInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumProductScanScansType>;
};

export type FilterUpdateOneProductScanScansInputImagesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  format: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type FilterUpdateOneProductScanSizeInput = {
  height?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneProductScan_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneSalesRecordBrandIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneSalesRecordCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterUpdateOneSalesRecordCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneSalesRecordInput = {
  AND?: InputMaybe<Array<FilterUpdateOneSalesRecordInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneSalesRecordInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneSalesRecordOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  finalCustomerMetadata?: InputMaybe<Scalars['Metadata']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneSalesRecordOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneSalesRecord_IdOperatorsInput>;
  brandId?: InputMaybe<FilterUpdateOneSalesRecordBrandIdOperatorsInput>;
  createdAt?: InputMaybe<FilterUpdateOneSalesRecordCreatedAtOperatorsInput>;
  createdById?: InputMaybe<FilterUpdateOneSalesRecordCreatedByIdOperatorsInput>;
  updatedAt?: InputMaybe<FilterUpdateOneSalesRecordUpdatedAtOperatorsInput>;
};

export type FilterUpdateOneSalesRecordUpdatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterUpdateOneSalesRecord_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneSaveCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterUpdateOneSaveCreatedByOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneSaveFolderInput = {
  AND?: InputMaybe<Array<FilterUpdateOneSaveFolderInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneSaveFolderInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneSaveFolderOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['MongoID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneSaveFolderOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneSaveFolder_IdOperatorsInput>;
};

export type FilterUpdateOneSaveFolder_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneSaveInput = {
  AND?: InputMaybe<Array<FilterUpdateOneSaveInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneSaveInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneSaveOperatorsInput>;
  additionalInfo?: InputMaybe<Scalars['JSON']['input']>;
  apartmentUnitTypeId?: InputMaybe<Scalars['MongoID']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  chosenStylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdBy?: InputMaybe<Scalars['MongoID']['input']>;
  createdFromAP?: InputMaybe<Scalars['MongoID']['input']>;
  customerId?: InputMaybe<Scalars['MongoID']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  dataFormatVersion?: InputMaybe<Scalars['Int']['input']>;
  dataUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isReadonly?: InputMaybe<Scalars['Boolean']['input']>;
  isTemplate?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  moduleKitchenCustomData?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  quantitySurveyJSON?: InputMaybe<Scalars['String']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  storageBytesUsage?: InputMaybe<Scalars['Float']['input']>;
  stylePresetGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tunnelState?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<EnumSaveType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedBy?: InputMaybe<Scalars['MongoID']['input']>;
  visitViewpoints?: InputMaybe<Array<FilterUpdateOneSaveVisitViewpointsInput>>;
};

export type FilterUpdateOneSaveIsTemplateOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type FilterUpdateOneSaveNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneSaveOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneSave_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterUpdateOneSaveCreatedAtOperatorsInput>;
  createdBy?: InputMaybe<FilterUpdateOneSaveCreatedByOperatorsInput>;
  isTemplate?: InputMaybe<FilterUpdateOneSaveIsTemplateOperatorsInput>;
  name?: InputMaybe<FilterUpdateOneSaveNameOperatorsInput>;
  updatedAt?: InputMaybe<FilterUpdateOneSaveUpdatedAtOperatorsInput>;
};

export type FilterUpdateOneSaveUpdatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterUpdateOneSaveVisitViewpointsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation?: InputMaybe<FilterUpdateOneSaveVisitViewpointsOrientationInput>;
  position?: InputMaybe<FilterUpdateOneSaveVisitViewpointsPositionInput>;
};

export type FilterUpdateOneSaveVisitViewpointsOrientationInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneSaveVisitViewpointsPositionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneSave_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneSavesGroupInput = {
  AND?: InputMaybe<Array<FilterUpdateOneSavesGroupInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneSavesGroupInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneSavesGroupOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  savesIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumSavesGroupType>;
};

export type FilterUpdateOneSavesGroupNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneSavesGroupOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneSavesGroup_IdOperatorsInput>;
  name?: InputMaybe<FilterUpdateOneSavesGroupNameOperatorsInput>;
};

export type FilterUpdateOneSavesGroup_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneStylePresetCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterUpdateOneStylePresetCustomisationPresetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  chosenItemId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationNameId?: InputMaybe<Scalars['String']['input']>;
  filterTag?: InputMaybe<Scalars['String']['input']>;
  rotationCondition?: InputMaybe<EnumStylePresetCustomisationPresetsRotationCondition>;
};

export type FilterUpdateOneStylePresetGroupInput = {
  AND?: InputMaybe<Array<FilterUpdateOneStylePresetGroupInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneStylePresetGroupInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneStylePresetGroupOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stylePresetIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneStylePresetGroupNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneStylePresetGroupOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneStylePresetGroup_IdOperatorsInput>;
  name?: InputMaybe<FilterUpdateOneStylePresetGroupNameOperatorsInput>;
};

export type FilterUpdateOneStylePresetGroup_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneStylePresetInput = {
  AND?: InputMaybe<Array<FilterUpdateOneStylePresetInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneStylePresetInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneStylePresetOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  customisationPresets?: InputMaybe<Array<InputMaybe<FilterUpdateOneStylePresetCustomisationPresetsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type FilterUpdateOneStylePresetNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneStylePresetOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneStylePreset_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterUpdateOneStylePresetCreatedAtOperatorsInput>;
  name?: InputMaybe<FilterUpdateOneStylePresetNameOperatorsInput>;
  updatedAt?: InputMaybe<FilterUpdateOneStylePresetUpdatedAtOperatorsInput>;
};

export type FilterUpdateOneStylePresetUpdatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterUpdateOneStylePreset_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneTutorialInput = {
  AND?: InputMaybe<Array<FilterUpdateOneTutorialInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneTutorialInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneTutorialOperatorsInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  displayOnlyOnce?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<FilterUpdateOneTutorialPointInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneTutorialOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneTutorial_IdOperatorsInput>;
};

export type FilterUpdateOneTutorialPointInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  illustration?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<EnumTutorialPointTarget>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
};

export type FilterUpdateOneTutorial_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneUserCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type FilterUpdateOneUserCreatedByIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneUserEmailOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneUserInput = {
  AND?: InputMaybe<Array<FilterUpdateOneUserInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneUserOperatorsInput>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  favoriteItemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  favoriteSavesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type FilterUpdateOneUserNameOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneUserOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneUser_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterUpdateOneUserCreatedAtOperatorsInput>;
  createdById?: InputMaybe<FilterUpdateOneUserCreatedByIdOperatorsInput>;
  email?: InputMaybe<FilterUpdateOneUserEmailOperatorsInput>;
  name?: InputMaybe<FilterUpdateOneUserNameOperatorsInput>;
};

export type FilterUpdateOneUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type HealthCheckQueueJob = Job & {
  __typename?: 'HealthCheckQueueJob';
  /** A unique ID for the job. */
  _id: Scalars['String']['output'];
  /** When the job was created. */
  createdAt: Scalars['Date']['output'];
  /** When the job finished (completed or failed). */
  finishedAt?: Maybe<Scalars['Date']['output']>;
  /** The name-type of the job. A queue may have multiple job types. */
  name: Scalars['String']['output'];
  /** When the job was processed (started). */
  processedAt?: Maybe<Scalars['Date']['output']>;
  /** Job queue this job is in. */
  queue: Scalars['String']['output'];
  /** Resulting value of a completed job. Null if the job is not in completed state. */
  result?: Maybe<Array<SystemPrerequisite>>;
  state: JobState;
};

export type ImageUploadCredentials = {
  __typename?: 'ImageUploadCredentials';
  expiry: Scalars['Date']['output'];
  fileUrl: Scalars['String']['output'];
  sasUrl: Scalars['String']['output'];
};

/** Configures the parameters of one or multiple chunks in the document. */
export type InputDocumentChunkManifest = {
  __typename?: 'InputDocumentChunkManifest';
  /** Render-time parameters object, implementing the chunk's parameters schema as given in the output manifest. The type of this property is loosely-typed in GraphQL, but verified at runtime against that schema. If the parameters passed are invalid against the schema, the chunk will be disabled and a manifest warning will be issued. */
  parameters?: Maybe<Scalars['JSONObject']['output']>;
  /** A path selector to target one or multiple chunks, since it can be a bash-like glob pattern, ex. "/my-section/my-chunk-123", "/my-section/my-chunk-*", "/**\/my-chunk-*", etc. */
  path: Scalars['String']['output'];
  /** Defines whether the chunk should be rendered in the document. If set "false" on a group chunk, it applies to its children recursively. */
  render: Scalars['Boolean']['output'];
};

/** Configures the parameters of one or multiple chunks in the document. */
export type InputDocumentChunkManifestInput = {
  /** Render-time parameters object, implementing the chunk's parameters schema as given in the output manifest. The type of this property is loosely-typed in GraphQL, but verified at runtime against that schema. If the parameters passed are invalid against the schema, the chunk will be disabled and a manifest warning will be issued. */
  parameters?: InputMaybe<Scalars['JSONObject']['input']>;
  /** A path selector to target one or multiple chunks, since it can be a bash-like glob pattern, ex. "/my-section/my-chunk-123", "/my-section/my-chunk-*", "/**\/my-chunk-*", etc. */
  path: Scalars['String']['input'];
  /** Defines whether the chunk should be rendered in the document. If set "false" on a group chunk, it applies to its children recursively. */
  render?: Scalars['Boolean']['input'];
};

/** Allows to customize some parameters and variables for the generated document. */
export type InputDocumentManifestInput = {
  chunks?: InputMaybe<Array<InputDocumentChunkManifestInput>>;
  /**
   * Locale code to use for the document, if supported by the document (ex. "en", "fr-fr", etc).
   * If left empty, one will be inferred from a compatible request header if any, otherwise "en-us" will be used.
   */
  locale?: InputMaybe<Scalars['String']['input']>;
  /**
   * Offset in minutes from UTC, to use for date/time formatting, if supported by the document.
   * If left empty, one will be inferred from a compatible request header if any, otherwise UTC (+0) will be used.
   */
  timeZoneOffset?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Title of the PDF document. It is usually displayed in the PDF reader's title bar and used to name the generated file.
   * If left empty, a default title will be chosen by the generator, depending on the context.
   */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Item = {
  __typename?: 'Item';
  _id: Scalars['MongoID']['output'];
  accessToken: Scalars['String']['output'];
  articleCode?: Maybe<Scalars['String']['output']>;
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  buildingWingInfos?: Maybe<Scalars['String']['output']>;
  canBeCutAlongHeight?: Maybe<Scalars['Boolean']['output']>;
  canBeCutAlongLength?: Maybe<Scalars['Boolean']['output']>;
  canBeCutAlongWidth?: Maybe<Scalars['Boolean']['output']>;
  canBeDroppedOnZones: Array<EnumItemCanBeDroppedOnZones>;
  categories: Array<Category>;
  categoriesIds: Array<Scalars['MongoID']['output']>;
  compositeInfos?: Maybe<Scalars['String']['output']>;
  consideredAsDroppableZones: Array<EnumItemConsideredAsDroppableZones>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['MongoID']['output']>;
  customisationByItemsGroup?: Maybe<ItemsGroup>;
  customisationByItemsGroupId?: Maybe<Scalars['MongoID']['output']>;
  customisationCountertop?: Maybe<CustomisationCountertop>;
  customisationCoverPlanes: Array<ItemCustomisationCoverPlanes>;
  customisationMaterials: Array<ItemCustomisationMaterials>;
  customisationSubObjects: Array<ItemCustomisationSubObjects>;
  customisationSymbolicRepresentation?: Maybe<ItemCustomisationSymbolicRepresentation>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  ean?: Maybe<Scalars['String']['output']>;
  factSheet: ItemFactSheet;
  guardrailInformations?: Maybe<ItemGuardrailInformations>;
  metadata: Array<ItemMetadata>;
  minimumPricedDimensions?: Maybe<ItemMinimumPricedDimensions>;
  /**
   * Base64-encoded SHA-256 hash of the blob pointed by modelUrl.
   * Null if modelUrl is null, never null otherwise.
   */
  modelSha256?: Maybe<Scalars['String']['output']>;
  /**
   * Size in bytes of the blob pointed by modelUrl.
   * If modelUrl is null, this value will be 0.
   */
  modelSize: Scalars['Int']['output'];
  modelUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  outputAssets?: Maybe<ItemOutputAssets>;
  physicalHeight?: Maybe<Scalars['String']['output']>;
  physicalLength?: Maybe<Scalars['String']['output']>;
  physicalWidth?: Maybe<Scalars['String']['output']>;
  pillarInformations?: Maybe<ItemPillarInformations>;
  priceCoefExclusion?: Maybe<Scalars['Boolean']['output']>;
  priceGeneration?: Maybe<EnumItemPriceGeneration>;
  priceUnit?: Maybe<EnumItemPriceUnit>;
  publicName: Scalars['String']['output'];
  publicNameTranslations: Scalars['Translations']['output'];
  roofInformations?: Maybe<ItemRoofInformations>;
  scrapperTag?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  stairsInformations?: Maybe<ItemStairsInformations>;
  tags: Array<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  tooltip3D: Scalars['String']['output'];
  tooltip3DTranslations: Scalars['Translations']['output'];
  type?: Maybe<EnumItemType>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  updatedById?: Maybe<Scalars['MongoID']['output']>;
  vegetationInformations?: Maybe<ItemVegetationInformations>;
  wallInformations?: Maybe<ItemWallInformations>;
};


export type ItemCategoriesArgs = {
  filter?: InputMaybe<FilterFindManyCategoryInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCategoryInput>;
};


export type ItemPublicNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ItemTooltip3DArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ItemCustomisationCoverPlanes = {
  __typename?: 'ItemCustomisationCoverPlanes';
  _id?: Maybe<Scalars['MongoID']['output']>;
  associatedItem?: Maybe<Scalars['MongoID']['output']>;
  hideForSingleObject?: Maybe<Scalars['Boolean']['output']>;
  mode?: Maybe<EnumItemCustomisationCoverPlanesMode>;
  nameId?: Maybe<Scalars['String']['output']>;
  positions?: Maybe<ItemCustomisationCoverPlanesPositions>;
  showOnStart?: Maybe<Scalars['Boolean']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type ItemCustomisationCoverPlanesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItem?: InputMaybe<Scalars['MongoID']['input']>;
  hideForSingleObject?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<EnumItemCustomisationCoverPlanesMode>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  positions?: InputMaybe<ItemCustomisationCoverPlanesPositionsInput>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemCustomisationCoverPlanesPositions = {
  __typename?: 'ItemCustomisationCoverPlanesPositions';
  above?: Maybe<Scalars['Boolean']['output']>;
  behind?: Maybe<Scalars['Boolean']['output']>;
  front?: Maybe<Scalars['Boolean']['output']>;
  left?: Maybe<Scalars['Boolean']['output']>;
  right?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemCustomisationCoverPlanesPositionsInput = {
  above?: InputMaybe<Scalars['Boolean']['input']>;
  behind?: InputMaybe<Scalars['Boolean']['input']>;
  front?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemCustomisationMaterials = {
  __typename?: 'ItemCustomisationMaterials';
  _id?: Maybe<Scalars['MongoID']['output']>;
  associatedItemsGroup?: Maybe<Scalars['MongoID']['output']>;
  associatedPalette?: Maybe<Scalars['MongoID']['output']>;
  materials?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  nameId?: Maybe<Scalars['String']['output']>;
  nameTranslations: Scalars['Translations']['output'];
  showOnStart?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<EnumItemCustomisationMaterialsType>;
  weight?: Maybe<Scalars['Float']['output']>;
};


export type ItemCustomisationMaterialsNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ItemCustomisationMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPalette?: InputMaybe<Scalars['MongoID']['input']>;
  materials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumItemCustomisationMaterialsType>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemCustomisationSubObjects = {
  __typename?: 'ItemCustomisationSubObjects';
  _id?: Maybe<Scalars['MongoID']['output']>;
  associatedItemsGroup?: Maybe<Scalars['MongoID']['output']>;
  hooks?: Maybe<Array<Maybe<ItemCustomisationSubObjectsHooks>>>;
  name: Scalars['String']['output'];
  nameId?: Maybe<Scalars['String']['output']>;
  nameTranslations: Scalars['Translations']['output'];
  showOnStart?: Maybe<Scalars['Boolean']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};


export type ItemCustomisationSubObjectsNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ItemCustomisationSubObjectsHooks = {
  __typename?: 'ItemCustomisationSubObjectsHooks';
  _id?: Maybe<Scalars['MongoID']['output']>;
  orientation?: Maybe<ItemCustomisationSubObjectsHooksOrientation>;
  position?: Maybe<ItemCustomisationSubObjectsHooksPosition>;
  type?: Maybe<EnumItemCustomisationSubObjectsHooksType>;
};

export type ItemCustomisationSubObjectsHooksInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation?: InputMaybe<ItemCustomisationSubObjectsHooksOrientationInput>;
  position?: InputMaybe<ItemCustomisationSubObjectsHooksPositionInput>;
  type?: InputMaybe<EnumItemCustomisationSubObjectsHooksType>;
};

export type ItemCustomisationSubObjectsHooksOrientation = {
  __typename?: 'ItemCustomisationSubObjectsHooksOrientation';
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
  z?: Maybe<Scalars['Float']['output']>;
};

export type ItemCustomisationSubObjectsHooksOrientationInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemCustomisationSubObjectsHooksPosition = {
  __typename?: 'ItemCustomisationSubObjectsHooksPosition';
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
  z?: Maybe<Scalars['Float']['output']>;
};

export type ItemCustomisationSubObjectsHooksPositionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemCustomisationSubObjectsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  hooks?: InputMaybe<Array<InputMaybe<ItemCustomisationSubObjectsHooksInput>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemCustomisationSymbolicRepresentation = {
  __typename?: 'ItemCustomisationSymbolicRepresentation';
  _id?: Maybe<Scalars['MongoID']['output']>;
  anglePositionIsRight?: Maybe<Scalars['Boolean']['output']>;
  break3D?: Maybe<Scalars['Boolean']['output']>;
  colors?: Maybe<EnumItemCustomisationSymbolicRepresentationColors>;
  displayDiagonals?: Maybe<Scalars['Boolean']['output']>;
  doorType?: Maybe<EnumItemCustomisationSymbolicRepresentationDoorType>;
  drawerCount?: Maybe<Scalars['Float']['output']>;
  symbolicIcon?: Maybe<EnumItemCustomisationSymbolicRepresentationSymbolicIcon>;
  symbolicIconShape?: Maybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconShape>;
  symbolicIconSubType?: Maybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconSubType>;
  type?: Maybe<EnumItemCustomisationSymbolicRepresentationType>;
};

export type ItemCustomisationSymbolicRepresentationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  anglePositionIsRight?: InputMaybe<Scalars['Boolean']['input']>;
  break3D?: InputMaybe<Scalars['Boolean']['input']>;
  colors?: InputMaybe<EnumItemCustomisationSymbolicRepresentationColors>;
  displayDiagonals?: InputMaybe<Scalars['Boolean']['input']>;
  doorType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationDoorType>;
  drawerCount?: InputMaybe<Scalars['Float']['input']>;
  symbolicIcon?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIcon>;
  symbolicIconShape?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconShape>;
  symbolicIconSubType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconSubType>;
  type?: InputMaybe<EnumItemCustomisationSymbolicRepresentationType>;
};

export type ItemFactSheet = {
  __typename?: 'ItemFactSheet';
  _id?: Maybe<Scalars['MongoID']['output']>;
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  descriptionJson?: Maybe<Scalars['JSONObject']['output']>;
  logoPicture?: Maybe<Scalars['String']['output']>;
  pictureUrl?: Maybe<Scalars['String']['output']>;
};

export type ItemFactSheetInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONObject']['input']>;
  logoPicture?: InputMaybe<Scalars['String']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ItemGuardrailInformations = {
  __typename?: 'ItemGuardrailInformations';
  _id?: Maybe<Scalars['MongoID']['output']>;
  meshes?: Maybe<Array<Maybe<ItemGuardrailInformationsMeshes>>>;
};

export type ItemGuardrailInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  meshes?: InputMaybe<Array<InputMaybe<ItemGuardrailInformationsMeshesInput>>>;
};

export type ItemGuardrailInformationsMeshes = {
  __typename?: 'ItemGuardrailInformationsMeshes';
  _id?: Maybe<Scalars['MongoID']['output']>;
  dimensions?: Maybe<ItemGuardrailInformationsMeshesDimensions>;
  materialId?: Maybe<Scalars['MongoID']['output']>;
  meshId?: Maybe<Scalars['MongoID']['output']>;
  options?: Maybe<ItemGuardrailInformationsMeshesOptions>;
  placing?: Maybe<ItemGuardrailInformationsMeshesPlacing>;
  surface?: Maybe<ItemGuardrailInformationsMeshesSurface>;
  type?: Maybe<EnumItemGuardrailInformationsMeshesType>;
};

export type ItemGuardrailInformationsMeshesDimensions = {
  __typename?: 'ItemGuardrailInformationsMeshesDimensions';
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  thickness?: Maybe<Scalars['Float']['output']>;
};

export type ItemGuardrailInformationsMeshesDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemGuardrailInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  dimensions?: InputMaybe<ItemGuardrailInformationsMeshesDimensionsInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  options?: InputMaybe<ItemGuardrailInformationsMeshesOptionsInput>;
  placing?: InputMaybe<ItemGuardrailInformationsMeshesPlacingInput>;
  surface?: InputMaybe<ItemGuardrailInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemGuardrailInformationsMeshesType>;
};

export type ItemGuardrailInformationsMeshesOptions = {
  __typename?: 'ItemGuardrailInformationsMeshesOptions';
  closeBottom?: Maybe<Scalars['Boolean']['output']>;
  closeTop?: Maybe<Scalars['Boolean']['output']>;
  shape?: Maybe<EnumItemGuardrailInformationsMeshesOptionsShape>;
};

export type ItemGuardrailInformationsMeshesOptionsInput = {
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemGuardrailInformationsMeshesOptionsShape>;
};

export type ItemGuardrailInformationsMeshesPlacing = {
  __typename?: 'ItemGuardrailInformationsMeshesPlacing';
  elevation?: Maybe<Scalars['Float']['output']>;
  endContraction?: Maybe<Scalars['Float']['output']>;
  gap?: Maybe<Scalars['Float']['output']>;
  idealDistance?: Maybe<Scalars['Float']['output']>;
  idealGapDistance?: Maybe<Scalars['Float']['output']>;
  placeEndPillarsDiagonally?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemGuardrailInformationsMeshesPlacingInput = {
  elevation?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemGuardrailInformationsMeshesSurface = {
  __typename?: 'ItemGuardrailInformationsMeshesSurface';
  clampU?: Maybe<Scalars['Boolean']['output']>;
  clampV?: Maybe<Scalars['Boolean']['output']>;
  stretchU?: Maybe<Scalars['Boolean']['output']>;
  stretchV?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemGuardrailInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemMetadata = {
  __typename?: 'ItemMetadata';
  _id?: Maybe<Scalars['MongoID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ItemMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ItemMinimumPricedDimensions = {
  __typename?: 'ItemMinimumPricedDimensions';
  _id?: Maybe<Scalars['MongoID']['output']>;
  depth?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type ItemMinimumPricedDimensionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type ItemOutputAssets = {
  __typename?: 'ItemOutputAssets';
  _id?: Maybe<Scalars['MongoID']['output']>;
  coatingVariants?: Maybe<Array<Maybe<ItemOutputAssetsCoatingVariants>>>;
};

export type ItemOutputAssetsCoatingVariants = {
  __typename?: 'ItemOutputAssetsCoatingVariants';
  _id?: Maybe<Scalars['MongoID']['output']>;
  albedo?: Maybe<ItemOutputAssetsCoatingVariantsAlbedo>;
  metallic?: Maybe<ItemOutputAssetsCoatingVariantsAlbedo>;
  name?: Maybe<Scalars['String']['output']>;
  normal?: Maybe<ItemOutputAssetsCoatingVariantsAlbedo>;
  smoothness?: Maybe<ItemOutputAssetsCoatingVariantsAlbedo>;
};

export type ItemOutputAssetsCoatingVariantsAlbedo = {
  __typename?: 'ItemOutputAssetsCoatingVariantsAlbedo';
  _id?: Maybe<Scalars['MongoID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type ItemOutputAssetsCoatingVariantsAlbedoInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type ItemOutputAssetsCoatingVariantsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  albedo?: InputMaybe<ItemOutputAssetsCoatingVariantsAlbedoInput>;
  metallic?: InputMaybe<ItemOutputAssetsCoatingVariantsAlbedoInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  normal?: InputMaybe<ItemOutputAssetsCoatingVariantsAlbedoInput>;
  smoothness?: InputMaybe<ItemOutputAssetsCoatingVariantsAlbedoInput>;
};

export type ItemOutputAssetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  coatingVariants?: InputMaybe<Array<InputMaybe<ItemOutputAssetsCoatingVariantsInput>>>;
};

export type ItemPillarInformations = {
  __typename?: 'ItemPillarInformations';
  _id?: Maybe<Scalars['MongoID']['output']>;
  cylinderSides?: Maybe<Scalars['Float']['output']>;
  materials?: Maybe<Array<Maybe<ItemPillarInformationsMaterials>>>;
  models?: Maybe<Array<Maybe<ItemPillarInformationsModels>>>;
  necking?: Maybe<ItemPillarInformationsNecking>;
};

export type ItemPillarInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  cylinderSides?: InputMaybe<Scalars['Float']['input']>;
  materials?: InputMaybe<Array<InputMaybe<ItemPillarInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<ItemPillarInformationsModelsInput>>>;
  necking?: InputMaybe<ItemPillarInformationsNeckingInput>;
};

export type ItemPillarInformationsMaterials = {
  __typename?: 'ItemPillarInformationsMaterials';
  _id?: Maybe<Scalars['MongoID']['output']>;
  materialId?: Maybe<Scalars['MongoID']['output']>;
  type?: Maybe<EnumItemPillarInformationsMaterialsType>;
};

export type ItemPillarInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsMaterialsType>;
};

export type ItemPillarInformationsModels = {
  __typename?: 'ItemPillarInformationsModels';
  _id?: Maybe<Scalars['MongoID']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  modelId?: Maybe<Scalars['MongoID']['output']>;
  type?: Maybe<EnumItemPillarInformationsModelsType>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemPillarInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemPillarInformationsNecking = {
  __typename?: 'ItemPillarInformationsNecking';
  crossSection?: Maybe<ItemPillarInformationsNeckingCrossSection>;
  distanceToTop?: Maybe<Scalars['Float']['output']>;
};

export type ItemPillarInformationsNeckingCrossSection = {
  __typename?: 'ItemPillarInformationsNeckingCrossSection';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemPillarInformationsNeckingCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemPillarInformationsNeckingInput = {
  crossSection?: InputMaybe<ItemPillarInformationsNeckingCrossSectionInput>;
  distanceToTop?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformations = {
  __typename?: 'ItemRoofInformations';
  _id?: Maybe<Scalars['MongoID']['output']>;
  covering?: Maybe<ItemRoofInformationsCovering>;
  eavesStyle?: Maybe<ItemRoofInformationsEavesStyle>;
  flatRoof?: Maybe<ItemRoofInformationsFlatRoof>;
  framing?: Maybe<ItemRoofInformationsFraming>;
  gutter?: Maybe<ItemRoofInformationsGutter>;
  materials?: Maybe<Array<Maybe<ItemRoofInformationsMaterials>>>;
  models?: Maybe<Array<Maybe<ItemRoofInformationsModels>>>;
  overhang?: Maybe<ItemRoofInformationsOverhang>;
  purlins?: Maybe<ItemRoofInformationsPurlins>;
  rafters?: Maybe<ItemRoofInformationsRafters>;
  ridgeBoard?: Maybe<ItemRoofInformationsRidgeBoard>;
  solarPanels?: Maybe<ItemRoofInformationsSolarPanels>;
  topPlate?: Maybe<ItemRoofInformationsTopPlate>;
};

export type ItemRoofInformationsCovering = {
  __typename?: 'ItemRoofInformationsCovering';
  included?: Maybe<Scalars['Boolean']['output']>;
  ridgeTiles?: Maybe<ItemRoofInformationsCoveringRidgeTiles>;
  sealingThickness?: Maybe<Scalars['Float']['output']>;
  spaceBetweenSealingAndTiles?: Maybe<Scalars['Float']['output']>;
  tilesThickness?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsCoveringInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  ridgeTiles?: InputMaybe<ItemRoofInformationsCoveringRidgeTilesInput>;
  sealingThickness?: InputMaybe<Scalars['Float']['input']>;
  spaceBetweenSealingAndTiles?: InputMaybe<Scalars['Float']['input']>;
  tilesThickness?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsCoveringRidgeTiles = {
  __typename?: 'ItemRoofInformationsCoveringRidgeTiles';
  innerRadius?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsCoveringRidgeTilesInput = {
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsEavesStyle = {
  __typename?: 'ItemRoofInformationsEavesStyle';
  type?: Maybe<EnumItemRoofInformationsEavesStyleType>;
};

export type ItemRoofInformationsEavesStyleInput = {
  type?: InputMaybe<EnumItemRoofInformationsEavesStyleType>;
};

export type ItemRoofInformationsFlatRoof = {
  __typename?: 'ItemRoofInformationsFlatRoof';
  borderDimensions?: Maybe<ItemRoofInformationsFlatRoofBorderDimensions>;
  gravelThickness?: Maybe<Scalars['Float']['output']>;
  included?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemRoofInformationsFlatRoofBorderDimensions = {
  __typename?: 'ItemRoofInformationsFlatRoofBorderDimensions';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsFlatRoofBorderDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsFlatRoofInput = {
  borderDimensions?: InputMaybe<ItemRoofInformationsFlatRoofBorderDimensionsInput>;
  gravelThickness?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemRoofInformationsFraming = {
  __typename?: 'ItemRoofInformationsFraming';
  included?: Maybe<Scalars['Boolean']['output']>;
  pieces?: Maybe<Array<Maybe<ItemRoofInformationsFramingPieces>>>;
  type?: Maybe<EnumItemRoofInformationsFramingType>;
};

export type ItemRoofInformationsFramingInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  pieces?: InputMaybe<Array<InputMaybe<ItemRoofInformationsFramingPiecesInput>>>;
  type?: InputMaybe<EnumItemRoofInformationsFramingType>;
};

export type ItemRoofInformationsFramingPieces = {
  __typename?: 'ItemRoofInformationsFramingPieces';
  _id?: Maybe<Scalars['MongoID']['output']>;
  end_coordinate?: Maybe<ItemRoofInformationsFramingPiecesEnd_Coordinate>;
  name?: Maybe<Scalars['String']['output']>;
  start_coordinate?: Maybe<ItemRoofInformationsFramingPiecesStart_Coordinate>;
  type?: Maybe<EnumItemRoofInformationsFramingPiecesType>;
};

export type ItemRoofInformationsFramingPiecesEnd_Coordinate = {
  __typename?: 'ItemRoofInformationsFramingPiecesEnd_coordinate';
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsFramingPiecesEnd_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsFramingPiecesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  end_coordinate?: InputMaybe<ItemRoofInformationsFramingPiecesEnd_CoordinateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_coordinate?: InputMaybe<ItemRoofInformationsFramingPiecesStart_CoordinateInput>;
  type?: InputMaybe<EnumItemRoofInformationsFramingPiecesType>;
};

export type ItemRoofInformationsFramingPiecesStart_Coordinate = {
  __typename?: 'ItemRoofInformationsFramingPiecesStart_coordinate';
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsFramingPiecesStart_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsGutter = {
  __typename?: 'ItemRoofInformationsGutter';
  included?: Maybe<Scalars['Boolean']['output']>;
  innerRadius?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsGutterInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  covering?: InputMaybe<ItemRoofInformationsCoveringInput>;
  eavesStyle?: InputMaybe<ItemRoofInformationsEavesStyleInput>;
  flatRoof?: InputMaybe<ItemRoofInformationsFlatRoofInput>;
  framing?: InputMaybe<ItemRoofInformationsFramingInput>;
  gutter?: InputMaybe<ItemRoofInformationsGutterInput>;
  materials?: InputMaybe<Array<InputMaybe<ItemRoofInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<ItemRoofInformationsModelsInput>>>;
  overhang?: InputMaybe<ItemRoofInformationsOverhangInput>;
  purlins?: InputMaybe<ItemRoofInformationsPurlinsInput>;
  rafters?: InputMaybe<ItemRoofInformationsRaftersInput>;
  ridgeBoard?: InputMaybe<ItemRoofInformationsRidgeBoardInput>;
  solarPanels?: InputMaybe<ItemRoofInformationsSolarPanelsInput>;
  topPlate?: InputMaybe<ItemRoofInformationsTopPlateInput>;
};

export type ItemRoofInformationsMaterials = {
  __typename?: 'ItemRoofInformationsMaterials';
  _id?: Maybe<Scalars['MongoID']['output']>;
  materialId?: Maybe<Scalars['MongoID']['output']>;
  type?: Maybe<EnumItemRoofInformationsMaterialsType>;
};

export type ItemRoofInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsMaterialsType>;
};

export type ItemRoofInformationsModels = {
  __typename?: 'ItemRoofInformationsModels';
  _id?: Maybe<Scalars['MongoID']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  modelId?: Maybe<Scalars['MongoID']['output']>;
  type?: Maybe<EnumItemRoofInformationsModelsType>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsOverhang = {
  __typename?: 'ItemRoofInformationsOverhang';
  bargeboard?: Maybe<Scalars['Float']['output']>;
  bargeboardPurlins?: Maybe<Scalars['Float']['output']>;
  bargeboardRafters?: Maybe<Scalars['Float']['output']>;
  eave?: Maybe<Scalars['Float']['output']>;
  included?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemRoofInformationsOverhangInput = {
  bargeboard?: InputMaybe<Scalars['Float']['input']>;
  bargeboardPurlins?: InputMaybe<Scalars['Float']['input']>;
  bargeboardRafters?: InputMaybe<Scalars['Float']['input']>;
  eave?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemRoofInformationsPurlins = {
  __typename?: 'ItemRoofInformationsPurlins';
  bottom?: Maybe<ItemRoofInformationsPurlinsBottom>;
  included?: Maybe<Scalars['Boolean']['output']>;
  intermediate?: Maybe<ItemRoofInformationsPurlinsIntermediate>;
  ridge?: Maybe<ItemRoofInformationsPurlinsRidge>;
};

export type ItemRoofInformationsPurlinsBottom = {
  __typename?: 'ItemRoofInformationsPurlinsBottom';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsPurlinsBottomInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsPurlinsInput = {
  bottom?: InputMaybe<ItemRoofInformationsPurlinsBottomInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  intermediate?: InputMaybe<ItemRoofInformationsPurlinsIntermediateInput>;
  ridge?: InputMaybe<ItemRoofInformationsPurlinsRidgeInput>;
};

export type ItemRoofInformationsPurlinsIntermediate = {
  __typename?: 'ItemRoofInformationsPurlinsIntermediate';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsPurlinsIntermediateInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsPurlinsRidge = {
  __typename?: 'ItemRoofInformationsPurlinsRidge';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsPurlinsRidgeInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsRafters = {
  __typename?: 'ItemRoofInformationsRafters';
  crossSection?: Maybe<ItemRoofInformationsRaftersCrossSection>;
  included?: Maybe<Scalars['Boolean']['output']>;
  typicalDistance?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsRaftersCrossSection = {
  __typename?: 'ItemRoofInformationsRaftersCrossSection';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsRaftersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsRaftersInput = {
  crossSection?: InputMaybe<ItemRoofInformationsRaftersCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsRidgeBoard = {
  __typename?: 'ItemRoofInformationsRidgeBoard';
  crossSection?: Maybe<ItemRoofInformationsRidgeBoardCrossSection>;
  included?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemRoofInformationsRidgeBoardCrossSection = {
  __typename?: 'ItemRoofInformationsRidgeBoardCrossSection';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsRidgeBoardCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsRidgeBoardInput = {
  crossSection?: InputMaybe<ItemRoofInformationsRidgeBoardCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemRoofInformationsSolarPanels = {
  __typename?: 'ItemRoofInformationsSolarPanels';
  distanceToRoof?: Maybe<Scalars['Float']['output']>;
  frame?: Maybe<ItemRoofInformationsSolarPanelsFrame>;
  height?: Maybe<Scalars['Float']['output']>;
  included?: Maybe<Scalars['Boolean']['output']>;
  thickness?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsSolarPanelsFrame = {
  __typename?: 'ItemRoofInformationsSolarPanelsFrame';
  thickness?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsSolarPanelsFrameInput = {
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsSolarPanelsInput = {
  distanceToRoof?: InputMaybe<Scalars['Float']['input']>;
  frame?: InputMaybe<ItemRoofInformationsSolarPanelsFrameInput>;
  height?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsTopPlate = {
  __typename?: 'ItemRoofInformationsTopPlate';
  crossSection?: Maybe<ItemRoofInformationsTopPlateCrossSection>;
  included?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemRoofInformationsTopPlateCrossSection = {
  __typename?: 'ItemRoofInformationsTopPlateCrossSection';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemRoofInformationsTopPlateCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemRoofInformationsTopPlateInput = {
  crossSection?: InputMaybe<ItemRoofInformationsTopPlateCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemStairsInformations = {
  __typename?: 'ItemStairsInformations';
  _id?: Maybe<Scalars['MongoID']['output']>;
  landing?: Maybe<ItemStairsInformationsLanding>;
  materials?: Maybe<Array<Maybe<ItemStairsInformationsMaterials>>>;
  models?: Maybe<Array<Maybe<ItemStairsInformationsModels>>>;
  railing?: Maybe<ItemStairsInformationsRailing>;
  steps?: Maybe<ItemStairsInformationsSteps>;
  stringers?: Maybe<ItemStairsInformationsStringers>;
};

export type ItemStairsInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  landing?: InputMaybe<ItemStairsInformationsLandingInput>;
  materials?: InputMaybe<Array<InputMaybe<ItemStairsInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<ItemStairsInformationsModelsInput>>>;
  railing?: InputMaybe<ItemStairsInformationsRailingInput>;
  steps?: InputMaybe<ItemStairsInformationsStepsInput>;
  stringers?: InputMaybe<ItemStairsInformationsStringersInput>;
};

export type ItemStairsInformationsLanding = {
  __typename?: 'ItemStairsInformationsLanding';
  height?: Maybe<Scalars['Float']['output']>;
};

export type ItemStairsInformationsLandingInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemStairsInformationsMaterials = {
  __typename?: 'ItemStairsInformationsMaterials';
  _id?: Maybe<Scalars['MongoID']['output']>;
  materialId?: Maybe<Scalars['MongoID']['output']>;
  type?: Maybe<EnumItemStairsInformationsMaterialsType>;
};

export type ItemStairsInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsMaterialsType>;
};

export type ItemStairsInformationsModels = {
  __typename?: 'ItemStairsInformationsModels';
  _id?: Maybe<Scalars['MongoID']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  modelId?: Maybe<Scalars['MongoID']['output']>;
  type?: Maybe<EnumItemStairsInformationsModelsType>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemStairsInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemStairsInformationsRailing = {
  __typename?: 'ItemStairsInformationsRailing';
  balusters?: Maybe<ItemStairsInformationsRailingBalusters>;
  handrail?: Maybe<ItemStairsInformationsRailingHandrail>;
  posts?: Maybe<ItemStairsInformationsRailingPosts>;
};

export type ItemStairsInformationsRailingBalusters = {
  __typename?: 'ItemStairsInformationsRailingBalusters';
  radius?: Maybe<Scalars['Float']['output']>;
  typicalDistance?: Maybe<Scalars['Float']['output']>;
};

export type ItemStairsInformationsRailingBalustersInput = {
  radius?: InputMaybe<Scalars['Float']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemStairsInformationsRailingHandrail = {
  __typename?: 'ItemStairsInformationsRailingHandrail';
  crossSection?: Maybe<ItemStairsInformationsRailingHandrailCrossSection>;
  elevation?: Maybe<Scalars['Float']['output']>;
};

export type ItemStairsInformationsRailingHandrailCrossSection = {
  __typename?: 'ItemStairsInformationsRailingHandrailCrossSection';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemStairsInformationsRailingHandrailCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemStairsInformationsRailingHandrailInput = {
  crossSection?: InputMaybe<ItemStairsInformationsRailingHandrailCrossSectionInput>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemStairsInformationsRailingInput = {
  balusters?: InputMaybe<ItemStairsInformationsRailingBalustersInput>;
  handrail?: InputMaybe<ItemStairsInformationsRailingHandrailInput>;
  posts?: InputMaybe<ItemStairsInformationsRailingPostsInput>;
};

export type ItemStairsInformationsRailingPosts = {
  __typename?: 'ItemStairsInformationsRailingPosts';
  crossSection?: Maybe<ItemStairsInformationsRailingPostsCrossSection>;
};

export type ItemStairsInformationsRailingPostsCrossSection = {
  __typename?: 'ItemStairsInformationsRailingPostsCrossSection';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemStairsInformationsRailingPostsCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemStairsInformationsRailingPostsInput = {
  crossSection?: InputMaybe<ItemStairsInformationsRailingPostsCrossSectionInput>;
};

export type ItemStairsInformationsSteps = {
  __typename?: 'ItemStairsInformationsSteps';
  risers?: Maybe<ItemStairsInformationsStepsRisers>;
  treats?: Maybe<ItemStairsInformationsStepsTreats>;
};

export type ItemStairsInformationsStepsInput = {
  risers?: InputMaybe<ItemStairsInformationsStepsRisersInput>;
  treats?: InputMaybe<ItemStairsInformationsStepsTreatsInput>;
};

export type ItemStairsInformationsStepsRisers = {
  __typename?: 'ItemStairsInformationsStepsRisers';
  height?: Maybe<Scalars['Float']['output']>;
  thickness?: Maybe<Scalars['Float']['output']>;
};

export type ItemStairsInformationsStepsRisersInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemStairsInformationsStepsTreats = {
  __typename?: 'ItemStairsInformationsStepsTreats';
  height?: Maybe<Scalars['Float']['output']>;
  nose?: Maybe<Scalars['Float']['output']>;
};

export type ItemStairsInformationsStepsTreatsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  nose?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemStairsInformationsStringers = {
  __typename?: 'ItemStairsInformationsStringers';
  crossSection?: Maybe<ItemStairsInformationsStringersCrossSection>;
  overTreat?: Maybe<Scalars['Float']['output']>;
};

export type ItemStairsInformationsStringersCrossSection = {
  __typename?: 'ItemStairsInformationsStringersCrossSection';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ItemStairsInformationsStringersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemStairsInformationsStringersInput = {
  crossSection?: InputMaybe<ItemStairsInformationsStringersCrossSectionInput>;
  overTreat?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemVegetationInformations = {
  __typename?: 'ItemVegetationInformations';
  _id?: Maybe<Scalars['MongoID']['output']>;
  canBeSelected: Scalars['Boolean']['output'];
};

export type ItemVegetationInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  canBeSelected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemWallInformations = {
  __typename?: 'ItemWallInformations';
  _id?: Maybe<Scalars['MongoID']['output']>;
  application?: Maybe<ItemWallInformationsApplication>;
  class?: Maybe<EnumItemWallInformationsClass>;
  meshes?: Maybe<Array<Maybe<ItemWallInformationsMeshes>>>;
};

export type ItemWallInformationsApplication = {
  __typename?: 'ItemWallInformationsApplication';
  bothSides?: Maybe<Scalars['Boolean']['output']>;
  exteriorFacesExteriorWalls?: Maybe<Scalars['Boolean']['output']>;
  interiorFacesExteriorWalls?: Maybe<Scalars['Boolean']['output']>;
  interiorWalls?: Maybe<Scalars['Boolean']['output']>;
  overRegularWall?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemWallInformationsApplicationInput = {
  bothSides?: InputMaybe<Scalars['Boolean']['input']>;
  exteriorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  overRegularWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemWallInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  application?: InputMaybe<ItemWallInformationsApplicationInput>;
  class?: InputMaybe<EnumItemWallInformationsClass>;
  meshes?: InputMaybe<Array<InputMaybe<ItemWallInformationsMeshesInput>>>;
};

export type ItemWallInformationsMeshes = {
  __typename?: 'ItemWallInformationsMeshes';
  _id?: Maybe<Scalars['MongoID']['output']>;
  buildingMaterial?: Maybe<EnumItemWallInformationsMeshesBuildingMaterial>;
  dimensions?: Maybe<ItemWallInformationsMeshesDimensions>;
  display?: Maybe<ItemWallInformationsMeshesDisplay>;
  materialId?: Maybe<Scalars['MongoID']['output']>;
  meshId?: Maybe<Scalars['MongoID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<ItemWallInformationsMeshesOptions>;
  overlapPriority?: Maybe<Scalars['Float']['output']>;
  placing?: Maybe<ItemWallInformationsMeshesPlacing>;
  segmentTypes?: Maybe<ItemWallInformationsMeshesSegmentTypes>;
  surface?: Maybe<ItemWallInformationsMeshesSurface>;
  type?: Maybe<EnumItemWallInformationsMeshesType>;
};

export type ItemWallInformationsMeshesDimensions = {
  __typename?: 'ItemWallInformationsMeshesDimensions';
  length?: Maybe<Scalars['Float']['output']>;
  thickness?: Maybe<Scalars['Float']['output']>;
};

export type ItemWallInformationsMeshesDimensionsInput = {
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemWallInformationsMeshesDisplay = {
  __typename?: 'ItemWallInformationsMeshesDisplay';
  autoCut?: Maybe<Scalars['Boolean']['output']>;
  whenWallsHigh?: Maybe<Scalars['Boolean']['output']>;
  whenWallsLow?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemWallInformationsMeshesDisplayInput = {
  autoCut?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsHigh?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsLow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemWallInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buildingMaterial?: InputMaybe<EnumItemWallInformationsMeshesBuildingMaterial>;
  dimensions?: InputMaybe<ItemWallInformationsMeshesDimensionsInput>;
  display?: InputMaybe<ItemWallInformationsMeshesDisplayInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<ItemWallInformationsMeshesOptionsInput>;
  overlapPriority?: InputMaybe<Scalars['Float']['input']>;
  placing?: InputMaybe<ItemWallInformationsMeshesPlacingInput>;
  segmentTypes?: InputMaybe<ItemWallInformationsMeshesSegmentTypesInput>;
  surface?: InputMaybe<ItemWallInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemWallInformationsMeshesType>;
};

export type ItemWallInformationsMeshesOptions = {
  __typename?: 'ItemWallInformationsMeshesOptions';
  closeBack?: Maybe<Scalars['Boolean']['output']>;
  closeBottom?: Maybe<Scalars['Boolean']['output']>;
  closeFront?: Maybe<Scalars['Boolean']['output']>;
  closeSides?: Maybe<Scalars['Boolean']['output']>;
  closeTop?: Maybe<Scalars['Boolean']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  nextToDoorsAndWindows?: Maybe<Scalars['Boolean']['output']>;
  paintable?: Maybe<Scalars['Boolean']['output']>;
  shape?: Maybe<EnumItemWallInformationsMeshesOptionsShape>;
  skewOnCorners?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemWallInformationsMeshesOptionsInput = {
  closeBack?: InputMaybe<Scalars['Boolean']['input']>;
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeFront?: InputMaybe<Scalars['Boolean']['input']>;
  closeSides?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  nextToDoorsAndWindows?: InputMaybe<Scalars['Boolean']['input']>;
  paintable?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemWallInformationsMeshesOptionsShape>;
  skewOnCorners?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemWallInformationsMeshesPlacing = {
  __typename?: 'ItemWallInformationsMeshesPlacing';
  beamDirection?: Maybe<EnumItemWallInformationsMeshesPlacingBeamDirection>;
  bottomElevation?: Maybe<ItemWallInformationsMeshesPlacingBottomElevation>;
  depthOffset?: Maybe<Scalars['Float']['output']>;
  doorPostOffset?: Maybe<Scalars['Float']['output']>;
  endContraction?: Maybe<Scalars['Float']['output']>;
  endDepth?: Maybe<ItemWallInformationsMeshesPlacingStartDepth>;
  gap?: Maybe<Scalars['Float']['output']>;
  idealDistance?: Maybe<Scalars['Float']['output']>;
  idealGapDistance?: Maybe<Scalars['Float']['output']>;
  moveVerticesAbove?: Maybe<Scalars['Float']['output']>;
  pivotIsOnTop?: Maybe<Scalars['Boolean']['output']>;
  placeEndPillarsDiagonally?: Maybe<Scalars['Boolean']['output']>;
  repetitionFilter?: Maybe<EnumItemWallInformationsMeshesPlacingRepetitionFilter>;
  startDepth?: Maybe<ItemWallInformationsMeshesPlacingStartDepth>;
  stretchVertically?: Maybe<Scalars['Boolean']['output']>;
  topElevation?: Maybe<ItemWallInformationsMeshesPlacingBottomElevation>;
};

export type ItemWallInformationsMeshesPlacingBottomElevation = {
  __typename?: 'ItemWallInformationsMeshesPlacingBottomElevation';
  _id?: Maybe<Scalars['MongoID']['output']>;
  elevation?: Maybe<Scalars['Float']['output']>;
  reference?: Maybe<EnumItemWallInformationsMeshesPlacingBottomElevationReference>;
};

export type ItemWallInformationsMeshesPlacingBottomElevationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingBottomElevationReference>;
};

export type ItemWallInformationsMeshesPlacingInput = {
  beamDirection?: InputMaybe<EnumItemWallInformationsMeshesPlacingBeamDirection>;
  bottomElevation?: InputMaybe<ItemWallInformationsMeshesPlacingBottomElevationInput>;
  depthOffset?: InputMaybe<Scalars['Float']['input']>;
  doorPostOffset?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  endDepth?: InputMaybe<ItemWallInformationsMeshesPlacingStartDepthInput>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  moveVerticesAbove?: InputMaybe<Scalars['Float']['input']>;
  pivotIsOnTop?: InputMaybe<Scalars['Boolean']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
  repetitionFilter?: InputMaybe<EnumItemWallInformationsMeshesPlacingRepetitionFilter>;
  startDepth?: InputMaybe<ItemWallInformationsMeshesPlacingStartDepthInput>;
  stretchVertically?: InputMaybe<Scalars['Boolean']['input']>;
  topElevation?: InputMaybe<ItemWallInformationsMeshesPlacingBottomElevationInput>;
};

export type ItemWallInformationsMeshesPlacingStartDepth = {
  __typename?: 'ItemWallInformationsMeshesPlacingStartDepth';
  _id?: Maybe<Scalars['MongoID']['output']>;
  depth?: Maybe<Scalars['Float']['output']>;
  plusOnTop?: Maybe<Scalars['Float']['output']>;
  reference?: Maybe<EnumItemWallInformationsMeshesPlacingStartDepthReference>;
};

export type ItemWallInformationsMeshesPlacingStartDepthInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  plusOnTop?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingStartDepthReference>;
};

export type ItemWallInformationsMeshesSegmentTypes = {
  __typename?: 'ItemWallInformationsMeshesSegmentTypes';
  doors?: Maybe<Scalars['Boolean']['output']>;
  walls?: Maybe<Scalars['Boolean']['output']>;
  windows?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemWallInformationsMeshesSegmentTypesInput = {
  doors?: InputMaybe<Scalars['Boolean']['input']>;
  walls?: InputMaybe<Scalars['Boolean']['input']>;
  windows?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemWallInformationsMeshesSurface = {
  __typename?: 'ItemWallInformationsMeshesSurface';
  clampU?: Maybe<Scalars['Boolean']['output']>;
  clampV?: Maybe<Scalars['Boolean']['output']>;
  stretchU?: Maybe<Scalars['Boolean']['output']>;
  stretchV?: Maybe<Scalars['Boolean']['output']>;
  swapUV?: Maybe<Scalars['Boolean']['output']>;
};

export type ItemWallInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
  swapUV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemsGroup = {
  __typename?: 'ItemsGroup';
  _id: Scalars['MongoID']['output'];
  brandId: Scalars['MongoID']['output'];
  choiceIsMandatory: Scalars['Boolean']['output'];
  generated: Scalars['Boolean']['output'];
  items: Array<Item>;
  itemsIds: Array<Scalars['MongoID']['output']>;
  name: Scalars['String']['output'];
  option?: Maybe<ItemsGroupOption>;
  publicName: Scalars['String']['output'];
  publicNameTranslations: Scalars['Translations']['output'];
  shouldBeOpenInGUI: Scalars['Boolean']['output'];
  thumbnailPictureName?: Maybe<Scalars['String']['output']>;
  type: EnumItemsGroupType;
};


export type ItemsGroupPublicNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ItemsGroupOption = {
  __typename?: 'ItemsGroupOption';
  _id?: Maybe<Scalars['MongoID']['output']>;
  baseItem?: Maybe<Item>;
  baseItemId?: Maybe<Scalars['MongoID']['output']>;
  choiceIsMandatory?: Maybe<Scalars['Boolean']['output']>;
  disableDefaultChoice?: Maybe<Scalars['Boolean']['output']>;
  positions: Array<ItemsGroupOptionPositions>;
};

export type ItemsGroupOptionInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  baseItemId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  disableDefaultChoice?: InputMaybe<Scalars['Boolean']['input']>;
  positions?: InputMaybe<Array<ItemsGroupOptionPositionsInput>>;
};

export type ItemsGroupOptionPositions = {
  __typename?: 'ItemsGroupOptionPositions';
  _id?: Maybe<Scalars['MongoID']['output']>;
  margins?: Maybe<ItemsGroupOptionPositionsMargins>;
  placement: EnumItemsGroupOptionPositionsPlacement;
  rotation: EnumItemsGroupOptionPositionsRotation;
};

export type ItemsGroupOptionPositionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  margins?: InputMaybe<ItemsGroupOptionPositionsMarginsInput>;
  placement: EnumItemsGroupOptionPositionsPlacement;
  rotation: EnumItemsGroupOptionPositionsRotation;
};

export type ItemsGroupOptionPositionsMargins = {
  __typename?: 'ItemsGroupOptionPositionsMargins';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
  z: Scalars['Float']['output'];
};

export type ItemsGroupOptionPositionsMarginsInput = {
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
  z: Scalars['Float']['input'];
};

export type Job = {
  /** A unique ID for the job. */
  _id: Scalars['String']['output'];
  /** When the job was created. */
  createdAt: Scalars['Date']['output'];
  /** When the job finished (completed or failed). */
  finishedAt?: Maybe<Scalars['Date']['output']>;
  /** The name-type of the job. A queue may have multiple job types. */
  name: Scalars['String']['output'];
  /** When the job was processed (started). */
  processedAt?: Maybe<Scalars['Date']['output']>;
  /** Job queue this job is in. */
  queue: Scalars['String']['output'];
  state: JobState;
};

export enum JobState {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Delayed = 'DELAYED',
  Failed = 'FAILED',
  Unknown = 'UNKNOWN',
  Waiting = 'WAITING',
  WaitingChildren = 'WAITING_CHILDREN'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Creates a copy of a given AccessPoint, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  accessPointCloneById?: Maybe<CreateOneAccessPointPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  accessPointCreateOne?: Maybe<CreateOneAccessPointPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  accessPointRemoveById?: Maybe<RemoveByIdAccessPointPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  accessPointRemoveOne?: Maybe<RemoveOneAccessPointPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  accessPointUpdateById?: Maybe<UpdateByIdAccessPointPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  accessPointUpdateOne?: Maybe<UpdateOneAccessPointPayload>;
  /**
   * Creates a copy of a given Applet, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  appletCloneById?: Maybe<CreateOneAppletPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  appletCreateOne?: Maybe<CreateOneAppletPayload>;
  /**
   * Creates a copy of a given BarcodeCollection, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  barcodeCollectionCloneById?: Maybe<CreateOneBarcodeCollectionPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  barcodeCollectionCreateOne?: Maybe<CreateOneBarcodeCollectionPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  barcodeCollectionRemoveById?: Maybe<RemoveByIdBarcodeCollectionPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  barcodeCollectionRemoveOne?: Maybe<RemoveOneBarcodeCollectionPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  barcodeCollectionUpdateById?: Maybe<UpdateByIdBarcodeCollectionPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  barcodeCollectionUpdateOne?: Maybe<UpdateOneBarcodeCollectionPayload>;
  /**
   * Creates a copy of a given Brand, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  brandCloneById?: Maybe<CreateOneBrandPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  brandCreateOne?: Maybe<CreateOneBrandPayload>;
  /**
   * Creates a copy of a given PriceTable, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  brandParametersPriceTableCloneById?: Maybe<CreateOnePriceTablePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  brandParametersPriceTableCreateOne?: Maybe<CreateOnePriceTablePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  brandParametersPriceTableRemoveById?: Maybe<RemoveByIdPriceTablePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  brandParametersPriceTableRemoveOne?: Maybe<RemoveOnePriceTablePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  brandParametersPriceTableUpdateById?: Maybe<UpdateByIdPriceTablePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  brandParametersPriceTableUpdateOne?: Maybe<UpdateOnePriceTablePayload>;
  /** Update some prices in a price table */
  brandParametersPriceTableUpdatePrices: PriceTable;
  /**
   * Creates a copy of a given BrandParametersPricing, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  brandParametersPricingCloneById?: Maybe<CreateOneBrandParametersPricingPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  brandParametersPricingCreateOne?: Maybe<CreateOneBrandParametersPricingPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  brandParametersPricingRemoveById?: Maybe<RemoveByIdBrandParametersPricingPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  brandParametersPricingRemoveOne?: Maybe<RemoveOneBrandParametersPricingPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  brandParametersPricingUpdateById?: Maybe<UpdateByIdBrandParametersPricingPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  brandParametersPricingUpdateOne?: Maybe<UpdateOneBrandParametersPricingPayload>;
  /**
   * Creates a copy of a given BrandParametersScrapper, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  brandParametersScrapperCloneById?: Maybe<CreateOneBrandParametersScrapperPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  brandParametersScrapperCreateOne?: Maybe<CreateOneBrandParametersScrapperPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  brandParametersScrapperRemoveById?: Maybe<RemoveByIdBrandParametersScrapperPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  brandParametersScrapperRemoveOne?: Maybe<RemoveOneBrandParametersScrapperPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  brandParametersScrapperUpdateById?: Maybe<UpdateByIdBrandParametersScrapperPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  brandParametersScrapperUpdateOne?: Maybe<UpdateOneBrandParametersScrapperPayload>;
  /**
   * Creates a copy of a given BrandParametersTunnel, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  brandParametersTunnelCloneById?: Maybe<CreateOneBrandParametersTunnelPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  brandParametersTunnelCreateOne?: Maybe<CreateOneBrandParametersTunnelPayload>;
  /** Empty the associated cache bundle of this tunnel. */
  brandParametersTunnelEmptyCacheResolver?: Maybe<Scalars['Success']['output']>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  brandParametersTunnelRemoveById?: Maybe<RemoveByIdBrandParametersTunnelPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  brandParametersTunnelRemoveOne?: Maybe<RemoveOneBrandParametersTunnelPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  brandParametersTunnelUpdateById?: Maybe<UpdateByIdBrandParametersTunnelPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  brandParametersTunnelUpdateOne?: Maybe<UpdateOneBrandParametersTunnelPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  brandRemoveById?: Maybe<RemoveByIdBrandPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  brandRemoveOne?: Maybe<RemoveOneBrandPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  brandUpdateById?: Maybe<UpdateByIdBrandPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  brandUpdateOne?: Maybe<UpdateOneBrandPayload>;
  /**
   * Adds an user to your brand, as a membership.
   * Under the hood, the user can be either created or added from an existing account, [see the explainer](https://notion.so/6e51216632064582814ac8d19d509500#10679be7b4684e5f9093c2d5319c4b20).
   * If the user was already part of your brand, an error will be thrown.
   */
  brandUsersAdd: BrandMembership;
  /**
   * Attaches an anonymous save to a given user of your brand.
   * This is useful when you let users create saves anonymously, but later want to reattach that save to the user when they have created an account, for example.
   * Throws an error if the save was already claimed (except if it's already owned by the user you want to attach the save to).
   */
  brandUsersAttachSave: Save;
  /**
   * Assigns a new set of roles to an user of your brand (the set specified here erases the previous set).
   * Attention, an user with access to this query will be able to promote its own account to a more powerful set of roles, or demote other users. Users granted with such a power must be of trust.
   * This operates on the membership document only, to modify the User itself use the `brandUsersUpdate` mutation instead.
   * Do not forget you can run multiple mutations in a single request if you want to update both.
   */
  brandUsersGrant: BrandMembership;
  /**
   * Creates an authorization token to log in as the given user, provided that the user is a member of your brand.
   * This can be used to transparently log in one of your users on myDecoCloud Designer, or for other uses.
   * The returned authorization token is scoped to the brand, and will provide access to resources of your brand only, and not to all the content the user may have access to (ie. in other brands).
   * [See the explainer](https://notion.so/6e51216632064582814ac8d19d509500#10679be7b4684e5f9093c2d5319c4b20).
   */
  brandUsersLogin: BrandUsersLoginPayload;
  /**
   * Merges two users of your brand by reassigning everything the source user produced and modified in the scope of the brand to the target user. Finally, the source user is removed from the memberships of the brand.
   * However, the source user still exists after that (and still has ownership of the content not belonging to the brand), but from the point of view of your brand, it'll be just like the source user was deleted.
   * No changes are performed on the target user, nor on the target membership (e.g. billing settings), if needed those operations must be performed separately.
   *
   * The following contents in your brand will be updated to be reassigned to the target user:
   *
   * - Memberships (*added by* and then removal of the source user membership)
   * - Saves (*created by*)
   * - Virtual visits (*created by, updated by*)
   * - When merging an administrator or other privileged users:
   *   - Barcode collections (*created by, updated by*)
   *   - Catalogs (*created by*)
   *   - Items (*created by*)
   *   - Sales records (*created by*)
   */
  brandUsersMerge: BrandUsersMergePayload;
  /**
   * Removes an user from your brand's memberships.
   * Please note that the underlying user is not deleted. However, they won't be able to use private resources from your brand anymore.
   * If the user was not part of your brand, an error will be thrown.
   */
  brandUsersRemove: Scalars['Success']['output'];
  /**
   * Updates an user of your brand.
   * To modify the user's membership instead (roles or metadata), use the `brandUsersGrant` mutation instead.
   * Do not forget you can run multiple mutations in a single request if you want to update both.
   */
  brandUsersUpdate: User;
  /**
   * Creates a copy of a given CatalogFolder, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  catalogFolderCloneById?: Maybe<CreateOneCatalogFolderPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  catalogFolderCreateOne?: Maybe<CreateOneCatalogFolderPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  catalogFolderRemoveById?: Maybe<RemoveByIdCatalogFolderPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  catalogFolderRemoveOne?: Maybe<RemoveOneCatalogFolderPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  catalogFolderUpdateById?: Maybe<UpdateByIdCatalogFolderPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  catalogFolderUpdateOne?: Maybe<UpdateOneCatalogFolderPayload>;
  contactInformationChangeState?: Maybe<Scalars['Success']['output']>;
  contactInformationNewContact?: Maybe<Scalars['Success']['output']>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  contactInformationRemoveById?: Maybe<RemoveByIdContactInformationPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  contactInformationUpdateById?: Maybe<UpdateByIdContactInformationPayload>;
  /**
   * Creates a copy of a given Customer, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  customerCloneById?: Maybe<CreateOneCustomerPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  customerCreateOne?: Maybe<CreateOneCustomerPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  customerRemoveById?: Maybe<RemoveByIdCustomerPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  customerRemoveOne?: Maybe<RemoveOneCustomerPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  customerUpdateById?: Maybe<UpdateByIdCustomerPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  customerUpdateOne?: Maybe<UpdateOneCustomerPayload>;
  /**
   * Creates a copy of a given Item, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  itemCloneById?: Maybe<CreateOneItemPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  itemCreateOne?: Maybe<CreateOneItemPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  itemRemoveById?: Maybe<RemoveByIdItemPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  itemRemoveOne?: Maybe<RemoveOneItemPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  itemUpdateById?: Maybe<UpdateByIdItemPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  itemUpdateOne?: Maybe<UpdateOneItemPayload>;
  /**
   * Creates a copy of a given ItemsGroup, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  itemsGroupCloneById?: Maybe<CreateOneItemsGroupPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  itemsGroupCreateOne?: Maybe<CreateOneItemsGroupPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  itemsGroupRemoveById?: Maybe<RemoveByIdItemsGroupPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  itemsGroupRemoveOne?: Maybe<RemoveOneItemsGroupPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  itemsGroupUpdateById?: Maybe<UpdateByIdItemsGroupPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  itemsGroupUpdateOne?: Maybe<UpdateOneItemsGroupPayload>;
  /**
   * Creates a copy of a given Palette, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  paletteCloneById?: Maybe<CreateOnePalettePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  paletteCreateOne?: Maybe<CreateOnePalettePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  paletteRemoveById?: Maybe<RemoveByIdPalettePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  paletteRemoveOne?: Maybe<RemoveOnePalettePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  paletteUpdateById?: Maybe<UpdateByIdPalettePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  paletteUpdateOne?: Maybe<UpdateOnePalettePayload>;
  /**
   * Creates a copy of a given Picture, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  pictureCloneById?: Maybe<CreateOnePicturePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  pictureCreateOne?: Maybe<CreateOnePicturePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  pictureRemoveById?: Maybe<RemoveByIdPicturePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  pictureRemoveOne?: Maybe<RemoveOnePicturePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  pictureUpdateById?: Maybe<UpdateByIdPicturePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  pictureUpdateOne?: Maybe<UpdateOnePicturePayload>;
  /** Submit a new asset conversion job */
  pipelineConvertSubmit: Scalars['MongoID']['output'];
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  pipelineJobRemoveById?: Maybe<RemoveByIdPipelineJobPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  pipelineJobRemoveOne?: Maybe<RemoveOnePipelineJobPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  pipelineJobUpdateById?: Maybe<UpdateByIdPipelineJobPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  pipelineJobUpdateOne?: Maybe<UpdateOnePipelineJobPayload>;
  /**
   * Creates a copy of a given PlannedMaintenance, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  plannedMaintenanceCloneById?: Maybe<CreateOnePlannedMaintenancePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  plannedMaintenanceCreateOne?: Maybe<CreateOnePlannedMaintenancePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  plannedMaintenanceRemoveById?: Maybe<RemoveByIdPlannedMaintenancePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  plannedMaintenanceRemoveOne?: Maybe<RemoveOnePlannedMaintenancePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  plannedMaintenanceUpdateById?: Maybe<UpdateByIdPlannedMaintenancePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  plannedMaintenanceUpdateOne?: Maybe<UpdateOnePlannedMaintenancePayload>;
  /**
   * Creates a copy of a given PriceTable, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  priceTableCloneById?: Maybe<CreateOnePriceTablePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  priceTableCreateOne?: Maybe<CreateOnePriceTablePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  priceTableRemoveById?: Maybe<RemoveByIdPriceTablePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  priceTableRemoveOne?: Maybe<RemoveOnePriceTablePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  priceTableUpdateById?: Maybe<UpdateByIdPriceTablePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  priceTableUpdateOne?: Maybe<UpdateOnePriceTablePayload>;
  /** Update some prices in a price table */
  priceTableUpdatePrices: PriceTable;
  /** [Required API Key: productScanConvert] Use this to add a generated image (the PBR result for example) to the ProductScan and get the shared key to upload it to azure */
  productScanAddGeneratedImage?: Maybe<ImageUploadCredentials>;
  /** [Required API Key: productScanUpload] Use this to add a BANE scan image to the ProductScan and get the shared key to upload it to azure */
  productScanAddInputImage?: Maybe<ImageUploadCredentials>;
  /** [Required API Key: productScanUpload] Use this to add a thumbnail image to the ProductScan and get the shared key to upload it to azure */
  productScanAddThumbnailImage?: Maybe<ImageUploadCredentials>;
  /**
   * Creates a copy of a given ProductScan, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  productScanCloneById?: Maybe<CreateOneProductScanPayload>;
  /** [Required API Key: productScanUpload] Create a product-scan from the BANE device. */
  productScanCreateOne?: Maybe<CreateOneProductScanPayload>;
  /** [Required API Key: productScanUpload] When all the images in the ProductScan has been downloaded, use this to notify it is complete */
  productScanMarkAsComplete?: Maybe<Scalars['Boolean']['output']>;
  /**
   *
   *         [Required API Key: productScanConvert]
   *         When all the images in the ProductScan has been converted, use this to notify it is converted
   */
  productScanMarkAsConverted?: Maybe<Scalars['Boolean']['output']>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  productScanRemoveById?: Maybe<RemoveByIdProductScanPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  productScanRemoveOne?: Maybe<RemoveOneProductScanPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  productScanUpdateById?: Maybe<UpdateByIdProductScanPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  productScanUpdateOne?: Maybe<UpdateOneProductScanPayload>;
  /**
   * Creates a copy of a given PromoterApartmentUnit, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  promoterApartmentUnitCloneById?: Maybe<CreateOnePromoterApartmentUnitPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  promoterApartmentUnitCreateOne?: Maybe<CreateOnePromoterApartmentUnitPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  promoterApartmentUnitRemoveById?: Maybe<RemoveByIdPromoterApartmentUnitPayload>;
  promoterApartmentUnitSendChangesNotificationEmail?: Maybe<Scalars['Success']['output']>;
  /**
   * Creates a copy of a given PromoterApartmentUnitType, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  promoterApartmentUnitTypeCloneById?: Maybe<CreateOnePromoterApartmentUnitTypePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  promoterApartmentUnitTypeCreateOne?: Maybe<CreateOnePromoterApartmentUnitTypePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  promoterApartmentUnitTypeRemoveById?: Maybe<RemoveByIdPromoterApartmentUnitTypePayload>;
  promoterApartmentUnitTypeSendChangesNotificationEmail?: Maybe<Scalars['Success']['output']>;
  /** Transfers all units of the given type to another type in a single batch call. Returns the amount of transferred units. */
  promoterApartmentUnitTypeTransferUnits?: Maybe<PromoterApartmentUnitTypeTransferUnitsResult>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  promoterApartmentUnitTypeUpdateById?: Maybe<UpdateByIdPromoterApartmentUnitTypePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  promoterApartmentUnitUpdateById?: Maybe<UpdateByIdPromoterApartmentUnitPayload>;
  /**
   * Creates a copy of a given PromoterProgram, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  promoterProgramCloneById?: Maybe<CreateOnePromoterProgramPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  promoterProgramCreateOne?: Maybe<CreateOnePromoterProgramPayload>;
  /** Renders plans from the plan editor from myDecoCloud RED, in a PDF file. Returns a job token to follow generation progress and/or retrieve the resulting URL of PDF. */
  promoterProgramPlansDocumentCreate: Scalars['JobToken']['output'];
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  promoterProgramRemoveById?: Maybe<RemoveByIdPromoterProgramPayload>;
  /** Creates a PDF report for the given program. Reports are not a generic feature, generating a report must be specifically supported for brand the program is in. Returns a job token to follow generation progress and/or retrieve the resulting URL of PDF. */
  promoterProgramReportDocumentCreate: Scalars['JobToken']['output'];
  /** Removes all units from a program, and eventually unit types and unit enumeration tool data too. */
  promoterProgramResetUnits?: Maybe<PromoterProgramResetUnitsResult>;
  promoterProgramSyncSatelliteApartmentUnitEnumeration?: Maybe<Scalars['Success']['output']>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  promoterProgramUpdateById?: Maybe<UpdateByIdPromoterProgramPayload>;
  /**
   * Creates a copy of a given SalesRecord, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  salesRecordCloneById?: Maybe<CreateOneSalesRecordPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  salesRecordCreateOne?: Maybe<CreateOneSalesRecordPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  salesRecordRemoveById?: Maybe<RemoveByIdSalesRecordPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  salesRecordRemoveOne?: Maybe<RemoveOneSalesRecordPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  salesRecordUpdateById?: Maybe<UpdateByIdSalesRecordPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  salesRecordUpdateOne?: Maybe<UpdateOneSalesRecordPayload>;
  /**
   * Creates a copy of a given Construction, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  saveCloneById?: Maybe<CreateOneSavePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  saveCreateOne?: Maybe<CreateOneSavePayload>;
  /**
   * Creates a copy of a given SaveFolder, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  saveFolderCloneById?: Maybe<CreateOneSaveFolderPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  saveFolderCreateOne?: Maybe<CreateOneSaveFolderPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  saveFolderRemoveById?: Maybe<RemoveByIdSaveFolderPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  saveFolderRemoveOne?: Maybe<RemoveOneSaveFolderPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  saveFolderUpdateById?: Maybe<UpdateByIdSaveFolderPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  saveFolderUpdateOne?: Maybe<UpdateOneSaveFolderPayload>;
  /** Given a save ID, sets `Save.lastSuccessfulLoadAt` to the current date. */
  saveMarkSuccessfulLoad: Scalars['Success']['output'];
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  saveRemoveOne?: Maybe<RemoveOneSavePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  saveUpdateOne?: Maybe<UpdateOneSavePayload>;
  /**
   * Creates a copy of a given SavesGroup, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  savesGroupCloneById?: Maybe<CreateOneSavesGroupPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  savesGroupCreateOne?: Maybe<CreateOneSavesGroupPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  savesGroupRemoveById?: Maybe<RemoveByIdSavesGroupPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  savesGroupRemoveOne?: Maybe<RemoveOneSavesGroupPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  savesGroupUpdateById?: Maybe<UpdateByIdSavesGroupPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  savesGroupUpdateOne?: Maybe<UpdateOneSavesGroupPayload>;
  /**
   * Creates a copy of a given Setting, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  settingCloneById?: Maybe<CreateOneSettingPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  settingCreateOne?: Maybe<CreateOneSettingPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  settingRemoveById?: Maybe<RemoveByIdSettingPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  settingUpdateById?: Maybe<UpdateByIdSettingPayload>;
  /**
   * Creates a copy of a given StylePreset, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  stylePresetCloneById?: Maybe<CreateOneStylePresetPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  stylePresetCreateOne?: Maybe<CreateOneStylePresetPayload>;
  /**
   * Creates a copy of a given StylePresetGroup, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  stylePresetGroupCloneById?: Maybe<CreateOneStylePresetGroupPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  stylePresetGroupCreateOne?: Maybe<CreateOneStylePresetGroupPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  stylePresetGroupRemoveById?: Maybe<RemoveByIdStylePresetGroupPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  stylePresetGroupRemoveOne?: Maybe<RemoveOneStylePresetGroupPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  stylePresetGroupUpdateById?: Maybe<UpdateByIdStylePresetGroupPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  stylePresetGroupUpdateOne?: Maybe<UpdateOneStylePresetGroupPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  stylePresetRemoveById?: Maybe<RemoveByIdStylePresetPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  stylePresetRemoveOne?: Maybe<RemoveOneStylePresetPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  stylePresetUpdateById?: Maybe<UpdateByIdStylePresetPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  stylePresetUpdateOne?: Maybe<UpdateOneStylePresetPayload>;
  /**
   * Creates a copy of a given Tutorial, and returns the new document.
   * However, when present, some metadata properties like _id, createdAt, createdById, updatedAt, updatedById and slug will be reset.
   * The _id property of sub-documents will also be reset to a new value.
   */
  tutorialCloneById?: Maybe<CreateOneTutorialPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  tutorialCreateOne?: Maybe<CreateOneTutorialPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  tutorialRemoveById?: Maybe<RemoveByIdTutorialPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  tutorialRemoveOne?: Maybe<RemoveOneTutorialPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  tutorialUpdateById?: Maybe<UpdateByIdTutorialPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  tutorialUpdateOne?: Maybe<UpdateOneTutorialPayload>;
  userAccountLogin: UserAccountLogin;
  userAccountLoginWithPassword: UserAccountLogin;
  userAccountLoginWithTotpToken: UserAccountLogin;
  userAccountSendVolatileTotpTokenByEmail?: Maybe<Scalars['Success']['output']>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  userRemoveOne?: Maybe<RemoveOneUserPayload>;
  userSetItemFavorite?: Maybe<Scalars['Success']['output']>;
  userSetPassword: User;
  userSetSaveFavorite?: Maybe<Scalars['Success']['output']>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateOne?: Maybe<UpdateOneUserPayload>;
  watsonCluesWitness?: Maybe<Scalars['Success']['output']>;
};


export type MutationAccessPointCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationAccessPointCreateOneArgs = {
  record: CreateOneAccessPointInput;
};


export type MutationAccessPointRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationAccessPointRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneAccessPointInput>;
  sort?: InputMaybe<SortRemoveOneAccessPointInput>;
};


export type MutationAccessPointUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdAccessPointInput;
};


export type MutationAccessPointUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneAccessPointInput>;
  record: UpdateOneAccessPointInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneAccessPointInput>;
};


export type MutationAppletCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationAppletCreateOneArgs = {
  record: CreateOneAppletInput;
};


export type MutationBarcodeCollectionCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBarcodeCollectionCreateOneArgs = {
  record: CreateOneBarcodeCollectionInput;
};


export type MutationBarcodeCollectionRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBarcodeCollectionRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneBarcodeCollectionInput>;
  sort?: InputMaybe<SortRemoveOneBarcodeCollectionInput>;
};


export type MutationBarcodeCollectionUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdBarcodeCollectionInput;
};


export type MutationBarcodeCollectionUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneBarcodeCollectionInput>;
  record: UpdateOneBarcodeCollectionInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneBarcodeCollectionInput>;
};


export type MutationBrandCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBrandCreateOneArgs = {
  record: CreateOneBrandInput;
};


export type MutationBrandParametersPriceTableCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBrandParametersPriceTableCreateOneArgs = {
  record: CreateOnePriceTableInput;
};


export type MutationBrandParametersPriceTableRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBrandParametersPriceTableRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnePriceTableInput>;
  sort?: InputMaybe<SortRemoveOnePriceTableInput>;
};


export type MutationBrandParametersPriceTableUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdPriceTableInput;
};


export type MutationBrandParametersPriceTableUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnePriceTableInput>;
  record: UpdateOnePriceTableInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOnePriceTableInput>;
};


export type MutationBrandParametersPriceTableUpdatePricesArgs = {
  _id: Scalars['MongoID']['input'];
  prices?: InputMaybe<Array<InputMaybe<PriceTablePricesInput>>>;
  useArticleCode: Scalars['Boolean']['input'];
  useEan: Scalars['Boolean']['input'];
};


export type MutationBrandParametersPricingCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBrandParametersPricingCreateOneArgs = {
  record: CreateOneBrandParametersPricingInput;
};


export type MutationBrandParametersPricingRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBrandParametersPricingRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneBrandParametersPricingInput>;
  sort?: InputMaybe<SortRemoveOneBrandParametersPricingInput>;
};


export type MutationBrandParametersPricingUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdBrandParametersPricingInput;
};


export type MutationBrandParametersPricingUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneBrandParametersPricingInput>;
  record: UpdateOneBrandParametersPricingInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneBrandParametersPricingInput>;
};


export type MutationBrandParametersScrapperCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBrandParametersScrapperCreateOneArgs = {
  record: CreateOneBrandParametersScrapperInput;
};


export type MutationBrandParametersScrapperRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBrandParametersScrapperRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneBrandParametersScrapperInput>;
  sort?: InputMaybe<SortRemoveOneBrandParametersScrapperInput>;
};


export type MutationBrandParametersScrapperUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdBrandParametersScrapperInput;
};


export type MutationBrandParametersScrapperUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneBrandParametersScrapperInput>;
  record: UpdateOneBrandParametersScrapperInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneBrandParametersScrapperInput>;
};


export type MutationBrandParametersTunnelCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBrandParametersTunnelCreateOneArgs = {
  record: CreateOneBrandParametersTunnelInput;
};


export type MutationBrandParametersTunnelEmptyCacheResolverArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBrandParametersTunnelRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBrandParametersTunnelRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneBrandParametersTunnelInput>;
  sort?: InputMaybe<SortRemoveOneBrandParametersTunnelInput>;
};


export type MutationBrandParametersTunnelUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdBrandParametersTunnelInput;
};


export type MutationBrandParametersTunnelUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneBrandParametersTunnelInput>;
  record: UpdateOneBrandParametersTunnelInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneBrandParametersTunnelInput>;
};


export type MutationBrandRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationBrandRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneBrandInput>;
  sort?: InputMaybe<SortRemoveOneBrandInput>;
};


export type MutationBrandUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdBrandInput;
};


export type MutationBrandUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneBrandInput>;
  record: UpdateOneBrandInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneBrandInput>;
};


export type MutationBrandUsersAddArgs = {
  brandId: Scalars['MongoID']['input'];
  record: BrandUsersAddRecord;
};


export type MutationBrandUsersAttachSaveArgs = {
  brandId: Scalars['MongoID']['input'];
  saveId: Scalars['MongoID']['input'];
  userId: Scalars['MongoID']['input'];
};


export type MutationBrandUsersGrantArgs = {
  brandId: Scalars['MongoID']['input'];
  metadata: Scalars['Metadata']['input'];
  roles: Array<Scalars['String']['input']>;
  userId: Scalars['MongoID']['input'];
};


export type MutationBrandUsersLoginArgs = {
  brandId: Scalars['MongoID']['input'];
  userId: Scalars['MongoID']['input'];
};


export type MutationBrandUsersMergeArgs = {
  brandId: Scalars['MongoID']['input'];
  dryMode?: Scalars['Boolean']['input'];
  sourceUserId: Scalars['MongoID']['input'];
  targetUserId: Scalars['MongoID']['input'];
};


export type MutationBrandUsersRemoveArgs = {
  brandId: Scalars['MongoID']['input'];
  userId: Scalars['MongoID']['input'];
};


export type MutationBrandUsersUpdateArgs = {
  brandId: Scalars['MongoID']['input'];
  record: BrandUsersUpdateRecord;
  userId: Scalars['MongoID']['input'];
};


export type MutationCatalogFolderCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationCatalogFolderCreateOneArgs = {
  record: CreateOneCatalogFolderInput;
};


export type MutationCatalogFolderRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationCatalogFolderRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneCatalogFolderInput>;
  sort?: InputMaybe<SortRemoveOneCatalogFolderInput>;
};


export type MutationCatalogFolderUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdCatalogFolderInput;
};


export type MutationCatalogFolderUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneCatalogFolderInput>;
  record: UpdateOneCatalogFolderInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneCatalogFolderInput>;
};


export type MutationContactInformationChangeStateArgs = {
  _id: Scalars['MongoID']['input'];
  interlocutor?: InputMaybe<Scalars['String']['input']>;
  state: EnumContactInformationState;
};


export type MutationContactInformationNewContactArgs = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  message: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationContactInformationRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationContactInformationUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdContactInformationInput;
};


export type MutationCustomerCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationCustomerCreateOneArgs = {
  record: CreateOneCustomerInput;
};


export type MutationCustomerRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationCustomerRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneCustomerInput>;
  sort?: InputMaybe<SortRemoveOneCustomerInput>;
};


export type MutationCustomerUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdCustomerInput;
};


export type MutationCustomerUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneCustomerInput>;
  record: UpdateOneCustomerInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneCustomerInput>;
};


export type MutationItemCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationItemCreateOneArgs = {
  record: CreateOneItemInput;
};


export type MutationItemRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationItemRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneItemInput>;
  sort?: InputMaybe<SortRemoveOneItemInput>;
};


export type MutationItemUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdItemInput;
};


export type MutationItemUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneItemInput>;
  record: UpdateOneItemInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneItemInput>;
};


export type MutationItemsGroupCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationItemsGroupCreateOneArgs = {
  record: CreateOneItemsGroupInput;
};


export type MutationItemsGroupRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationItemsGroupRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneItemsGroupInput>;
  sort?: InputMaybe<SortRemoveOneItemsGroupInput>;
};


export type MutationItemsGroupUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdItemsGroupInput;
};


export type MutationItemsGroupUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneItemsGroupInput>;
  record: UpdateOneItemsGroupInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneItemsGroupInput>;
};


export type MutationPaletteCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPaletteCreateOneArgs = {
  record: CreateOnePaletteInput;
};


export type MutationPaletteRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPaletteRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnePaletteInput>;
  sort?: InputMaybe<SortRemoveOnePaletteInput>;
};


export type MutationPaletteUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdPaletteInput;
};


export type MutationPaletteUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnePaletteInput>;
  record: UpdateOnePaletteInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOnePaletteInput>;
};


export type MutationPictureCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPictureCreateOneArgs = {
  record: CreateOnePictureInput;
};


export type MutationPictureRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPictureRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnePictureInput>;
  sort?: InputMaybe<SortRemoveOnePictureInput>;
};


export type MutationPictureUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdPictureInput;
};


export type MutationPictureUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnePictureInput>;
  record: UpdateOnePictureInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOnePictureInput>;
};


export type MutationPipelineConvertSubmitArgs = {
  itemId: Scalars['MongoID']['input'];
};


export type MutationPipelineJobRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPipelineJobRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnePipelineJobInput>;
  sort?: InputMaybe<SortRemoveOnePipelineJobInput>;
};


export type MutationPipelineJobUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdPipelineJobInput;
};


export type MutationPipelineJobUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnePipelineJobInput>;
  record: UpdateOnePipelineJobInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOnePipelineJobInput>;
};


export type MutationPlannedMaintenanceCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPlannedMaintenanceCreateOneArgs = {
  record: CreateOnePlannedMaintenanceInput;
};


export type MutationPlannedMaintenanceRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPlannedMaintenanceRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnePlannedMaintenanceInput>;
  sort?: InputMaybe<SortRemoveOnePlannedMaintenanceInput>;
};


export type MutationPlannedMaintenanceUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdPlannedMaintenanceInput;
};


export type MutationPlannedMaintenanceUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnePlannedMaintenanceInput>;
  record: UpdateOnePlannedMaintenanceInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOnePlannedMaintenanceInput>;
};


export type MutationPriceTableCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPriceTableCreateOneArgs = {
  record: CreateOnePriceTableInput;
};


export type MutationPriceTableRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPriceTableRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOnePriceTableInput>;
  sort?: InputMaybe<SortRemoveOnePriceTableInput>;
};


export type MutationPriceTableUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdPriceTableInput;
};


export type MutationPriceTableUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOnePriceTableInput>;
  record: UpdateOnePriceTableInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOnePriceTableInput>;
};


export type MutationPriceTableUpdatePricesArgs = {
  _id: Scalars['MongoID']['input'];
  prices?: InputMaybe<Array<InputMaybe<PriceTablePricesInput>>>;
  useArticleCode: Scalars['Boolean']['input'];
  useEan: Scalars['Boolean']['input'];
};


export type MutationProductScanAddGeneratedImageArgs = {
  imageExtension: Scalars['String']['input'];
  imageName: Scalars['String']['input'];
  materialScanName: Scalars['String']['input'];
  productScanId: Scalars['MongoID']['input'];
};


export type MutationProductScanAddInputImageArgs = {
  imageExtension: Scalars['String']['input'];
  imageName: Scalars['String']['input'];
  materialScanName: Scalars['String']['input'];
  materialScanType: EnumProductScanScansType;
  productScanId: Scalars['MongoID']['input'];
};


export type MutationProductScanAddThumbnailImageArgs = {
  imageExtension: Scalars['String']['input'];
  imageName: Scalars['String']['input'];
  productScanId: Scalars['MongoID']['input'];
};


export type MutationProductScanCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationProductScanCreateOneArgs = {
  productScanToArchive?: InputMaybe<Scalars['MongoID']['input']>;
  record: CreateOneProductScanInput;
};


export type MutationProductScanMarkAsCompleteArgs = {
  productScanId: Scalars['MongoID']['input'];
};


export type MutationProductScanMarkAsConvertedArgs = {
  productScanId: Scalars['MongoID']['input'];
};


export type MutationProductScanRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationProductScanRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneProductScanInput>;
  sort?: InputMaybe<SortRemoveOneProductScanInput>;
};


export type MutationProductScanUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdProductScanInput;
};


export type MutationProductScanUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneProductScanInput>;
  record: UpdateOneProductScanInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneProductScanInput>;
};


export type MutationPromoterApartmentUnitCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPromoterApartmentUnitCreateOneArgs = {
  record: CreateOnePromoterApartmentUnitInput;
};


export type MutationPromoterApartmentUnitRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPromoterApartmentUnitSendChangesNotificationEmailArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPromoterApartmentUnitTypeCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPromoterApartmentUnitTypeCreateOneArgs = {
  record: CreateOnePromoterApartmentUnitTypeInput;
};


export type MutationPromoterApartmentUnitTypeRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPromoterApartmentUnitTypeSendChangesNotificationEmailArgs = {
  _id: Scalars['MongoID']['input'];
  programId: Scalars['MongoID']['input'];
};


export type MutationPromoterApartmentUnitTypeTransferUnitsArgs = {
  deleteSourceUnitType?: Scalars['Boolean']['input'];
  sourceUnitTypeId: Scalars['MongoID']['input'];
  targetUnitTypeId: Scalars['MongoID']['input'];
};


export type MutationPromoterApartmentUnitTypeUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdPromoterApartmentUnitTypeInput;
};


export type MutationPromoterApartmentUnitUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdPromoterApartmentUnitInput;
};


export type MutationPromoterProgramCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPromoterProgramCreateOneArgs = {
  record: CreateOnePromoterProgramInput;
};


export type MutationPromoterProgramPlansDocumentCreateArgs = {
  manifest?: InputMaybe<InputDocumentManifestInput>;
  programId: Scalars['MongoID']['input'];
};


export type MutationPromoterProgramRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationPromoterProgramReportDocumentCreateArgs = {
  manifest?: InputMaybe<InputDocumentManifestInput>;
  programId: Scalars['MongoID']['input'];
};


export type MutationPromoterProgramResetUnitsArgs = {
  programId: Scalars['MongoID']['input'];
  resetPlanEditorData?: Scalars['Boolean']['input'];
  resetUnitTypes?: Scalars['Boolean']['input'];
};


export type MutationPromoterProgramSyncSatelliteApartmentUnitEnumerationArgs = {
  dryMode?: Scalars['Boolean']['input'];
  programId: Scalars['MongoID']['input'];
};


export type MutationPromoterProgramUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdPromoterProgramInput;
};


export type MutationSalesRecordCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationSalesRecordCreateOneArgs = {
  record: CreateOneSalesRecordInput;
};


export type MutationSalesRecordRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationSalesRecordRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneSalesRecordInput>;
  sort?: InputMaybe<SortRemoveOneSalesRecordInput>;
};


export type MutationSalesRecordUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdSalesRecordInput;
};


export type MutationSalesRecordUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneSalesRecordInput>;
  record: UpdateOneSalesRecordInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneSalesRecordInput>;
};


export type MutationSaveCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationSaveCreateOneArgs = {
  record: CreateOneSaveInput;
};


export type MutationSaveFolderCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationSaveFolderCreateOneArgs = {
  record: CreateOneSaveFolderInput;
};


export type MutationSaveFolderRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationSaveFolderRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneSaveFolderInput>;
  sort?: InputMaybe<SortRemoveOneSaveFolderInput>;
};


export type MutationSaveFolderUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdSaveFolderInput;
};


export type MutationSaveFolderUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneSaveFolderInput>;
  record: UpdateOneSaveFolderInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneSaveFolderInput>;
};


export type MutationSaveMarkSuccessfulLoadArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationSaveRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneSaveInput>;
  sort?: InputMaybe<SortRemoveOneSaveInput>;
};


export type MutationSaveUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneSaveInput>;
  record: UpdateOneSaveInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneSaveInput>;
  updateToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSavesGroupCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationSavesGroupCreateOneArgs = {
  record: CreateOneSavesGroupInput;
};


export type MutationSavesGroupRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationSavesGroupRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneSavesGroupInput>;
  sort?: InputMaybe<SortRemoveOneSavesGroupInput>;
};


export type MutationSavesGroupUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdSavesGroupInput;
};


export type MutationSavesGroupUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneSavesGroupInput>;
  record: UpdateOneSavesGroupInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneSavesGroupInput>;
};


export type MutationSettingCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationSettingCreateOneArgs = {
  record: CreateOneSettingInput;
};


export type MutationSettingRemoveByIdArgs = {
  _id: Scalars['String']['input'];
};


export type MutationSettingUpdateByIdArgs = {
  _id: Scalars['String']['input'];
  record: UpdateByIdSettingInput;
};


export type MutationStylePresetCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationStylePresetCreateOneArgs = {
  record: CreateOneStylePresetInput;
};


export type MutationStylePresetGroupCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationStylePresetGroupCreateOneArgs = {
  record: CreateOneStylePresetGroupInput;
};


export type MutationStylePresetGroupRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationStylePresetGroupRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneStylePresetGroupInput>;
  sort?: InputMaybe<SortRemoveOneStylePresetGroupInput>;
};


export type MutationStylePresetGroupUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdStylePresetGroupInput;
};


export type MutationStylePresetGroupUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneStylePresetGroupInput>;
  record: UpdateOneStylePresetGroupInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneStylePresetGroupInput>;
};


export type MutationStylePresetRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationStylePresetRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneStylePresetInput>;
  sort?: InputMaybe<SortRemoveOneStylePresetInput>;
};


export type MutationStylePresetUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdStylePresetInput;
};


export type MutationStylePresetUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneStylePresetInput>;
  record: UpdateOneStylePresetInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneStylePresetInput>;
};


export type MutationTutorialCloneByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationTutorialCreateOneArgs = {
  record: CreateOneTutorialInput;
};


export type MutationTutorialRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationTutorialRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneTutorialInput>;
  sort?: InputMaybe<SortRemoveOneTutorialInput>;
};


export type MutationTutorialUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdTutorialInput;
};


export type MutationTutorialUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneTutorialInput>;
  record: UpdateOneTutorialInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneTutorialInput>;
};


export type MutationUserAccountLoginArgs = {
  email: Scalars['String']['input'];
};


export type MutationUserAccountLoginWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUserAccountLoginWithTotpTokenArgs = {
  email: Scalars['String']['input'];
  totp: Scalars['String']['input'];
};


export type MutationUserAccountSendVolatileTotpTokenByEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationUserRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneUserInput>;
  sort?: InputMaybe<SortRemoveOneUserInput>;
};


export type MutationUserSetItemFavoriteArgs = {
  isFavorite: Scalars['Boolean']['input'];
  itemId: Scalars['MongoID']['input'];
};


export type MutationUserSetPasswordArgs = {
  password: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};


export type MutationUserSetSaveFavoriteArgs = {
  isFavorite: Scalars['Boolean']['input'];
  saveId: Scalars['MongoID']['input'];
};


export type MutationUserUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdUserInput;
};


export type MutationUserUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneUserInput>;
  record: UpdateOneUserInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneUserInput>;
};


export type MutationWatsonCluesWitnessArgs = {
  clues: Array<Scalars['JSONObject']['input']>;
};

/** Describes the parameters of one chunk in the document. */
export type OutputDocumentChunkManifest = {
  __typename?: 'OutputDocumentChunkManifest';
  /** Parameters currently set for that chunk. This will be the chunk's default parameters unless they have been overriden by the user in the input manifest. The value here implements the schema defined by `parametersJtd`. */
  parameters?: Maybe<Scalars['JSONObject']['output']>;
  /** A JSON Type Definition (RFC 8927, https://jsontypedef.com) schema of the parameters that the chunk accepts or requires for render. Parameter values chosen by the user are to be sent within the input manifest. */
  parametersJtd?: Maybe<Scalars['JSONObject']['output']>;
  /** Index of the parent chunk in the list (OutputDocumentManifest.chunks), or null if the chunk is at the root of the document */
  parent?: Maybe<Scalars['Int']['output']>;
  /** An absolute ID for the chunk in the document, than can notably be used in InputDocumentManifest.selector. It is not necessarily unique (implementation-dependent). */
  path: Scalars['String']['output'];
  /** Will the chunk be rendered in the document? */
  render: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  warnings: Array<OutputDocumentChunkManifestWarning>;
};

/** A generation warning that might signal a configuration mistake, missing data, etc. */
export type OutputDocumentChunkManifestWarning = {
  __typename?: 'OutputDocumentChunkManifestWarning';
  /** A link to fix the problem, if applicable. */
  link?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

/** Contains info about the generated document, like its title or authors, and the list of chunk it contains with the parameters they accept, or eventual (pre-)generation warnings. */
export type OutputDocumentManifest = {
  __typename?: 'OutputDocumentManifest';
  /** All warnings from all chunks condensed in one list. */
  allWarnings: Array<OutputDocumentChunkManifestWarning>;
  author: Scalars['String']['output'];
  chunks: Array<OutputDocumentChunkManifest>;
  document: Scalars['String']['output'];
  locale: Scalars['String']['output'];
  timeZoneOffset: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int']['output'];
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  itemCount?: Maybe<Scalars['Int']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  perPage: Scalars['Int']['output'];
};

export type Palette = {
  __typename?: 'Palette';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  colors?: Maybe<Array<Maybe<PaletteColors>>>;
  name: Scalars['String']['output'];
  type: EnumPaletteType;
};

export type PaletteColors = {
  __typename?: 'PaletteColors';
  _id?: Maybe<Scalars['MongoID']['output']>;
  a?: Maybe<Scalars['Float']['output']>;
  b: Scalars['Float']['output'];
  code?: Maybe<Scalars['String']['output']>;
  g: Scalars['Float']['output'];
  metallic?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  nameTranslations: Scalars['Translations']['output'];
  r: Scalars['Float']['output'];
  roughness?: Maybe<Scalars['Float']['output']>;
};


export type PaletteColorsNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PaletteColorsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  a?: InputMaybe<Scalars['Float']['input']>;
  b: Scalars['Float']['input'];
  code?: InputMaybe<Scalars['String']['input']>;
  g: Scalars['Float']['input'];
  metallic?: InputMaybe<Scalars['Float']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  r: Scalars['Float']['input'];
  roughness?: InputMaybe<Scalars['Float']['input']>;
};

/** A connection to a list of items. */
export type PaletteConnection = {
  __typename?: 'PaletteConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<PaletteEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PaletteEdge = {
  __typename?: 'PaletteEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Palette;
};

/** List of items with pagination. */
export type PalettePagination = {
  __typename?: 'PalettePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<Palette>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Picture = {
  __typename?: 'Picture';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  url: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type PictureConnection = {
  __typename?: 'PictureConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<PictureEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PictureEdge = {
  __typename?: 'PictureEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Picture;
};

/** List of items with pagination. */
export type PicturePagination = {
  __typename?: 'PicturePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<Picture>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PipelineJob = {
  __typename?: 'PipelineJob';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  completedDate?: Maybe<Scalars['Date']['output']>;
  deadlineJobId: Scalars['String']['output'];
  settings?: Maybe<PipelineJobSettings>;
  startDate?: Maybe<Scalars['Date']['output']>;
  state?: Maybe<EnumPipelineJobState>;
  submitDate?: Maybe<Scalars['Date']['output']>;
  type?: Maybe<EnumPipelineJobType>;
};

/** A connection to a list of items. */
export type PipelineJobConnection = {
  __typename?: 'PipelineJobConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<PipelineJobEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PipelineJobEdge = {
  __typename?: 'PipelineJobEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: PipelineJob;
};

/** List of items with pagination. */
export type PipelineJobPagination = {
  __typename?: 'PipelineJobPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<PipelineJob>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PipelineJobSettings = {
  __typename?: 'PipelineJobSettings';
  _id?: Maybe<Scalars['MongoID']['output']>;
  convertPBRMaterialToAssetBundle?: Maybe<PipelineJobSettingsConvertPbrMaterialToAssetBundle>;
};

export type PipelineJobSettingsConvertPbrMaterialToAssetBundle = {
  __typename?: 'PipelineJobSettingsConvertPBRMaterialToAssetBundle';
  _id?: Maybe<Scalars['MongoID']['output']>;
  assetUrl: Scalars['String']['output'];
  itemId: Scalars['MongoID']['output'];
};

export type PlannedMaintenance = {
  __typename?: 'PlannedMaintenance';
  _id: Scalars['MongoID']['output'];
  durationHours: Scalars['Float']['output'];
  reason: Scalars['String']['output'];
  reasonTranslations: Scalars['Translations']['output'];
  startDate: Scalars['Date']['output'];
};


export type PlannedMaintenanceReasonArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type PlannedMaintenanceConnection = {
  __typename?: 'PlannedMaintenanceConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<PlannedMaintenanceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PlannedMaintenanceEdge = {
  __typename?: 'PlannedMaintenanceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: PlannedMaintenance;
};

/** List of items with pagination. */
export type PlannedMaintenancePagination = {
  __typename?: 'PlannedMaintenancePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<PlannedMaintenance>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PriceTable = {
  __typename?: 'PriceTable';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  currencyName?: Maybe<Scalars['String']['output']>;
  displayEan: Scalars['Boolean']['output'];
  globalDiscount?: Maybe<Scalars['Float']['output']>;
  moniker?: Maybe<Scalars['String']['output']>;
  multiplyingCoefficient: Scalars['Float']['output'];
  name?: Maybe<Scalars['String']['output']>;
  prices: Array<Maybe<PriceTablePrices>>;
  symbol?: Maybe<Scalars['String']['output']>;
  vatRate: Scalars['Float']['output'];
};

export type PriceTablePrices = {
  __typename?: 'PriceTablePrices';
  _id?: Maybe<Scalars['MongoID']['output']>;
  articleIdentifier?: Maybe<Scalars['String']['output']>;
  ean?: Maybe<Scalars['String']['output']>;
  itemsIds?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  price?: Maybe<Scalars['Float']['output']>;
  sourceItemId?: Maybe<Scalars['MongoID']['output']>;
};

export type PriceTablePricesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  articleIdentifier?: InputMaybe<Scalars['String']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  itemsIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  sourceItemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type ProductScan = {
  __typename?: 'ProductScan';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  creationDate?: Maybe<Scalars['Date']['output']>;
  metallic: Scalars['Float']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  productName: Scalars['String']['output'];
  reference: Scalars['String']['output'];
  scans?: Maybe<Array<Maybe<ProductScanScans>>>;
  size?: Maybe<ProductScanSize>;
  state?: Maybe<EnumProductScanState>;
  thumbnail?: Maybe<ProductScanScansInputImages>;
};

/** A connection to a list of items. */
export type ProductScanConnection = {
  __typename?: 'ProductScanConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<ProductScanEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductScanEdge = {
  __typename?: 'ProductScanEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: ProductScan;
};

/** List of items with pagination. */
export type ProductScanPagination = {
  __typename?: 'ProductScanPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<ProductScan>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type ProductScanScans = {
  __typename?: 'ProductScanScans';
  _id?: Maybe<Scalars['MongoID']['output']>;
  generatedImages?: Maybe<Array<Maybe<ProductScanScansInputImages>>>;
  inputImages?: Maybe<Array<Maybe<ProductScanScansInputImages>>>;
  name: Scalars['String']['output'];
  type?: Maybe<EnumProductScanScansType>;
};

export type ProductScanScansInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  generatedImages?: InputMaybe<Array<InputMaybe<ProductScanScansInputImagesInput>>>;
  inputImages?: InputMaybe<Array<InputMaybe<ProductScanScansInputImagesInput>>>;
  name: Scalars['String']['input'];
  type?: InputMaybe<EnumProductScanScansType>;
};

export type ProductScanScansInputImages = {
  __typename?: 'ProductScanScansInputImages';
  _id?: Maybe<Scalars['MongoID']['output']>;
  format: Scalars['String']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ProductScanScansInputImagesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  format: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type ProductScanSize = {
  __typename?: 'ProductScanSize';
  height: Scalars['String']['output'];
  length: Scalars['String']['output'];
  width: Scalars['String']['output'];
};

export type ProductScanSizeInput = {
  height: Scalars['String']['input'];
  length: Scalars['String']['input'];
  width: Scalars['String']['input'];
};

export type PromoterApartmentUnit = {
  __typename?: 'PromoterApartmentUnit';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  buildingNumber?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['MongoID']['output']>;
  floor?: Maybe<Scalars['String']['output']>;
  metadata: Scalars['Metadata']['output'];
  purchaserFirstName?: Maybe<Scalars['String']['output']>;
  purchaserMail?: Maybe<Scalars['String']['output']>;
  purchaserSurname?: Maybe<Scalars['String']['output']>;
  save?: Maybe<Save>;
  saveId?: Maybe<Scalars['MongoID']['output']>;
  state: EnumPromoterApartmentUnitState;
  unitNumber: Scalars['String']['output'];
  unitType: PromoterApartmentUnitType;
  unitTypeId: Scalars['MongoID']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['MongoID']['output']>;
};

/** A connection to a list of items. */
export type PromoterApartmentUnitConnection = {
  __typename?: 'PromoterApartmentUnitConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<PromoterApartmentUnitEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PromoterApartmentUnitEdge = {
  __typename?: 'PromoterApartmentUnitEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: PromoterApartmentUnit;
};

/** List of items with pagination. */
export type PromoterApartmentUnitPagination = {
  __typename?: 'PromoterApartmentUnitPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<PromoterApartmentUnit>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PromoterApartmentUnitType = {
  __typename?: 'PromoterApartmentUnitType';
  _id: Scalars['MongoID']['output'];
  apartmentUnits: Array<PromoterApartmentUnit>;
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['MongoID']['output']>;
  currentVersion: Scalars['Int']['output'];
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  descriptionJson?: Maybe<Scalars['JSONObject']['output']>;
  history: Array<PromoterApartmentUnitTypeHistory>;
  metadata: Scalars['Metadata']['output'];
  name: Scalars['String']['output'];
  program: PromoterProgram;
  programId: Scalars['MongoID']['output'];
  saveFolder?: Maybe<SaveFolder>;
  saveFolderId?: Maybe<Scalars['MongoID']['output']>;
  state: EnumPromoterApartmentUnitTypeState;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['MongoID']['output']>;
};


export type PromoterApartmentUnitTypeApartmentUnitsArgs = {
  filter?: InputMaybe<FilterFindManyPromoterApartmentUnitInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPromoterApartmentUnitInput>;
};

/** A connection to a list of items. */
export type PromoterApartmentUnitTypeConnection = {
  __typename?: 'PromoterApartmentUnitTypeConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<PromoterApartmentUnitTypeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PromoterApartmentUnitTypeEdge = {
  __typename?: 'PromoterApartmentUnitTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: PromoterApartmentUnitType;
};

export type PromoterApartmentUnitTypeHistory = {
  __typename?: 'PromoterApartmentUnitTypeHistory';
  _id?: Maybe<Scalars['MongoID']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  save?: Maybe<Save>;
  saveId?: Maybe<Scalars['MongoID']['output']>;
  state: EnumPromoterApartmentUnitTypeHistoryState;
  version: Scalars['Int']['output'];
};

export type PromoterApartmentUnitTypeHistoryInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitTypeHistoryState>;
  version: Scalars['Int']['input'];
};

/** List of items with pagination. */
export type PromoterApartmentUnitTypePagination = {
  __typename?: 'PromoterApartmentUnitTypePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<PromoterApartmentUnitType>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PromoterApartmentUnitTypeTransferUnitsResult = {
  __typename?: 'PromoterApartmentUnitTypeTransferUnitsResult';
  sourceUnitType: PromoterApartmentUnitType;
  targetUnitType: PromoterApartmentUnitType;
  transferredUnitsCount: Scalars['Int']['output'];
};

export type PromoterProgram = {
  __typename?: 'PromoterProgram';
  _id: Scalars['MongoID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  apartmentUnitTypes: Array<PromoterApartmentUnitType>;
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['MongoID']['output']>;
  isArchived: Scalars['Boolean']['output'];
  itemFilter: PromoterProgramItemFilter;
  metadata: Scalars['Metadata']['output'];
  name: Scalars['String']['output'];
  planEditor: PromoterProgramPlanEditor;
  planUrls: Array<Scalars['String']['output']>;
  promoter?: Maybe<User>;
  promoterId?: Maybe<Scalars['MongoID']['output']>;
  saveFolder?: Maybe<SaveFolder>;
  saveFolderId?: Maybe<Scalars['MongoID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  state: EnumPromoterProgramState;
  stylePresetGroup?: Maybe<StylePresetGroup>;
  stylePresetGroupId?: Maybe<Scalars['MongoID']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['MongoID']['output']>;
  zipCode?: Maybe<Scalars['Float']['output']>;
};


export type PromoterProgramApartmentUnitTypesArgs = {
  filter?: InputMaybe<FilterFindManyPromoterApartmentUnitTypeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPromoterApartmentUnitTypeInput>;
};

/** A connection to a list of items. */
export type PromoterProgramConnection = {
  __typename?: 'PromoterProgramConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<PromoterProgramEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PromoterProgramEdge = {
  __typename?: 'PromoterProgramEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: PromoterProgram;
};

export type PromoterProgramItemFilter = {
  __typename?: 'PromoterProgramItemFilter';
  itemWhiteList: Array<Scalars['MongoID']['output']>;
  whiteListItems: Array<Item>;
};

export type PromoterProgramItemFilterInput = {
  itemWhiteList?: InputMaybe<Array<Scalars['MongoID']['input']>>;
};

/** List of items with pagination. */
export type PromoterProgramPagination = {
  __typename?: 'PromoterProgramPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<PromoterProgram>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PromoterProgramPlanEditor = {
  __typename?: 'PromoterProgramPlanEditor';
  data: Scalars['JSON']['output'];
  dataFormatVersion: Scalars['Int']['output'];
};

export type PromoterProgramPlanEditorInput = {
  data: Scalars['JSON']['input'];
  dataFormatVersion?: InputMaybe<Scalars['Int']['input']>;
};

export type PromoterProgramResetUnitsResult = {
  __typename?: 'PromoterProgramResetUnitsResult';
  deletedUnitTypesCount: Scalars['Int']['output'];
  deletedUnitsCount: Scalars['Int']['output'];
  program: PromoterProgram;
};

export type PublicUser = {
  __typename?: 'PublicUser';
  _id: Scalars['MongoID']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PuppeteerPdfQueueJob = Job & {
  __typename?: 'PuppeteerPdfQueueJob';
  /** A unique ID for the job. */
  _id: Scalars['String']['output'];
  /** When the job was created. */
  createdAt: Scalars['Date']['output'];
  /** When the job finished (completed or failed). */
  finishedAt?: Maybe<Scalars['Date']['output']>;
  /** The name-type of the job. A queue may have multiple job types. */
  name: Scalars['String']['output'];
  /** When the job was processed (started). */
  processedAt?: Maybe<Scalars['Date']['output']>;
  /** Job queue this job is in. */
  queue: Scalars['String']['output'];
  /** Resulting value of a completed job. Null if the job is not in completed state. */
  result?: Maybe<PuppeteerPdfQueueResult>;
  state: JobState;
};

export type PuppeteerPdfQueueResult = {
  __typename?: 'PuppeteerPdfQueueResult';
  /** URL of the generated PDF, or its base64 representation depending on generation options. */
  pdf: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  accessPointConnection?: Maybe<AccessPointConnection>;
  accessPointFindById?: Maybe<AccessPoint>;
  accessPointFindByIds: Array<AccessPoint>;
  accessPointFindMany: Array<AccessPoint>;
  accessPointFindOne?: Maybe<AccessPoint>;
  accessPointPagination?: Maybe<AccessPointPagination>;
  appletConnection?: Maybe<AppletConnection>;
  appletFindById?: Maybe<Applet>;
  appletFindByIds: Array<Applet>;
  /** Find an Applet by version (use "latest" for the current one), and following version redirect(s). */
  appletFindByVersion?: Maybe<Applet>;
  appletFindMany: Array<Applet>;
  appletFindOne?: Maybe<Applet>;
  appletPagination?: Maybe<AppletPagination>;
  barcodeCollectionConnection?: Maybe<BarcodeCollectionConnection>;
  barcodeCollectionFindById?: Maybe<BarcodeCollection>;
  barcodeCollectionFindByIds: Array<BarcodeCollection>;
  barcodeCollectionFindMany: Array<BarcodeCollection>;
  barcodeCollectionFindOne?: Maybe<BarcodeCollection>;
  barcodeCollectionPagination?: Maybe<BarcodeCollectionPagination>;
  brandConnection?: Maybe<BrandConnection>;
  brandFindById?: Maybe<Brand>;
  brandFindByIds: Array<Brand>;
  brandFindMany: Array<Brand>;
  brandFindOne?: Maybe<Brand>;
  /** Find public info from a brand by id */
  brandFindPublicInfoById?: Maybe<BrandPublicInfo>;
  brandPagination?: Maybe<BrandPagination>;
  brandParametersPriceTableFindById?: Maybe<PriceTable>;
  brandParametersPriceTableFindByIds: Array<PriceTable>;
  brandParametersPriceTableFindMany: Array<PriceTable>;
  brandParametersPriceTableFindOne?: Maybe<PriceTable>;
  brandParametersPricingFindById?: Maybe<BrandParametersPricing>;
  brandParametersPricingFindByIds: Array<BrandParametersPricing>;
  brandParametersPricingFindMany: Array<BrandParametersPricing>;
  brandParametersScrapperConnection?: Maybe<BrandParametersScrapperConnection>;
  brandParametersScrapperFindById?: Maybe<BrandParametersScrapper>;
  brandParametersScrapperFindByIds: Array<BrandParametersScrapper>;
  brandParametersScrapperFindMany: Array<BrandParametersScrapper>;
  brandParametersScrapperFindOne?: Maybe<BrandParametersScrapper>;
  brandParametersScrapperPagination?: Maybe<BrandParametersScrapperPagination>;
  brandParametersTunnelFindById?: Maybe<BrandParametersTunnel>;
  brandParametersTunnelFindByIds: Array<BrandParametersTunnel>;
  brandParametersTunnelFindMany: Array<BrandParametersTunnel>;
  catalogFolderFindById?: Maybe<CatalogFolder>;
  catalogFolderFindByIds: Array<CatalogFolder>;
  catalogFolderFindMany: Array<CatalogFolder>;
  catalogFolderFindOne?: Maybe<CatalogFolder>;
  contactInformationFindById?: Maybe<ContactInformation>;
  contactInformationFindMany: Array<ContactInformation>;
  contactInformationPagination?: Maybe<ContactInformationPagination>;
  customerConnection?: Maybe<CustomerConnection>;
  customerFindById?: Maybe<Customer>;
  customerFindByIds: Array<Customer>;
  customerFindMany: Array<Customer>;
  customerFindOne?: Maybe<Customer>;
  customerPagination?: Maybe<CustomerPagination>;
  itemCategoryFindById?: Maybe<Category>;
  itemCategoryFindMany: Array<Category>;
  itemFindById?: Maybe<Item>;
  itemFindByIds: Array<Item>;
  itemFindMany: Array<Item>;
  itemFindOne?: Maybe<Item>;
  itemsGroupFindById?: Maybe<ItemsGroup>;
  itemsGroupFindByIds: Array<ItemsGroup>;
  itemsGroupFindMany: Array<ItemsGroup>;
  itemsGroupFindOne?: Maybe<ItemsGroup>;
  /** Retrieves a job from a token you've got in a response. */
  jobFindFromToken?: Maybe<AnyJob>;
  monitoringSystemPrerequisitesList: Array<SystemPrerequisite>;
  monitoringSystemPrerequisitesSummary: SystemPrerequisitesSummary;
  paletteConnection?: Maybe<PaletteConnection>;
  paletteFindById?: Maybe<Palette>;
  paletteFindByIds: Array<Palette>;
  paletteFindMany: Array<Palette>;
  paletteFindOne?: Maybe<Palette>;
  palettePagination?: Maybe<PalettePagination>;
  pictureConnection?: Maybe<PictureConnection>;
  pictureFindById?: Maybe<Picture>;
  pictureFindByIds: Array<Picture>;
  pictureFindMany: Array<Picture>;
  pictureFindOne?: Maybe<Picture>;
  /** Find the system image from the given brand or the default image from the default brand */
  pictureFindSystemPicture?: Maybe<Picture>;
  picturePagination?: Maybe<PicturePagination>;
  pipelineJobConnection?: Maybe<PipelineJobConnection>;
  pipelineJobFindById?: Maybe<PipelineJob>;
  pipelineJobFindByIds: Array<PipelineJob>;
  pipelineJobFindMany: Array<PipelineJob>;
  pipelineJobFindOne?: Maybe<PipelineJob>;
  pipelineJobPagination?: Maybe<PipelineJobPagination>;
  plannedMaintenanceConnection?: Maybe<PlannedMaintenanceConnection>;
  plannedMaintenanceFindById?: Maybe<PlannedMaintenance>;
  plannedMaintenanceFindByIds: Array<PlannedMaintenance>;
  plannedMaintenanceFindMany: Array<PlannedMaintenance>;
  plannedMaintenanceFindNextToDisplay?: Maybe<PlannedMaintenance>;
  plannedMaintenanceFindOne?: Maybe<PlannedMaintenance>;
  plannedMaintenancePagination?: Maybe<PlannedMaintenancePagination>;
  priceTableFindById?: Maybe<PriceTable>;
  priceTableFindByIds: Array<PriceTable>;
  priceTableFindMany: Array<PriceTable>;
  priceTableFindOne?: Maybe<PriceTable>;
  productScanConnection?: Maybe<ProductScanConnection>;
  productScanFindById?: Maybe<ProductScan>;
  productScanFindByIds: Array<ProductScan>;
  productScanFindMany: Array<ProductScan>;
  /** Get the productScan in state "to_convert". This resolver is for API keys of type "productScanConvert" */
  productScanFindManyToConvert: Array<ProductScan>;
  productScanFindOne?: Maybe<ProductScan>;
  productScanPagination?: Maybe<ProductScanPagination>;
  promoterApartmentUnitConnection?: Maybe<PromoterApartmentUnitConnection>;
  promoterApartmentUnitFindById?: Maybe<PromoterApartmentUnit>;
  promoterApartmentUnitFindByIds: Array<PromoterApartmentUnit>;
  promoterApartmentUnitFindMany: Array<PromoterApartmentUnit>;
  promoterApartmentUnitFindOne?: Maybe<PromoterApartmentUnit>;
  promoterApartmentUnitPagination?: Maybe<PromoterApartmentUnitPagination>;
  promoterApartmentUnitTypeConnection?: Maybe<PromoterApartmentUnitTypeConnection>;
  promoterApartmentUnitTypeFindById?: Maybe<PromoterApartmentUnitType>;
  promoterApartmentUnitTypeFindByIds: Array<PromoterApartmentUnitType>;
  promoterApartmentUnitTypeFindMany: Array<PromoterApartmentUnitType>;
  promoterApartmentUnitTypeFindOne?: Maybe<PromoterApartmentUnitType>;
  promoterApartmentUnitTypePagination?: Maybe<PromoterApartmentUnitTypePagination>;
  promoterProgramConnection?: Maybe<PromoterProgramConnection>;
  promoterProgramFindById?: Maybe<PromoterProgram>;
  promoterProgramFindByIds: Array<PromoterProgram>;
  promoterProgramFindMany: Array<PromoterProgram>;
  promoterProgramFindOne?: Maybe<PromoterProgram>;
  promoterProgramPagination?: Maybe<PromoterProgramPagination>;
  /** Allows to obtain a document manifest for the "create" mutation counterpart of this document. */
  promoterProgramPlansDocumentManifest: OutputDocumentManifest;
  /** Allows to obtain a document manifest for the "create" mutation counterpart of this document. */
  promoterProgramReportDocumentManifest: OutputDocumentManifest;
  salesRecordConnection?: Maybe<SalesRecordConnection>;
  salesRecordFindById?: Maybe<SalesRecord>;
  salesRecordFindByIds: Array<SalesRecord>;
  salesRecordFindMany: Array<SalesRecord>;
  salesRecordFindOne?: Maybe<SalesRecord>;
  salesRecordPagination?: Maybe<SalesRecordPagination>;
  saveConnection?: Maybe<SaveConnection>;
  saveFindById?: Maybe<Save>;
  saveFindByIds: Array<Save>;
  saveFindMany: Array<Save>;
  saveFolderFindById?: Maybe<SaveFolder>;
  saveFolderFindByIds: Array<SaveFolder>;
  saveFolderFindMany: Array<SaveFolder>;
  savePagination?: Maybe<SavePagination>;
  savesGroupFindById?: Maybe<SavesGroup>;
  savesGroupFindByIds: Array<SavesGroup>;
  savesGroupFindMany: Array<SavesGroup>;
  settingFindById?: Maybe<Setting>;
  settingFindByIds: Array<Setting>;
  settingFindMany: Array<Setting>;
  stylePresetFindById?: Maybe<StylePreset>;
  stylePresetFindByIds: Array<StylePreset>;
  stylePresetFindMany: Array<StylePreset>;
  stylePresetGroupFindById?: Maybe<StylePresetGroup>;
  stylePresetGroupFindByIds: Array<StylePresetGroup>;
  stylePresetGroupFindMany: Array<StylePresetGroup>;
  stylePresetPagination?: Maybe<StylePresetPagination>;
  tutorialConnection?: Maybe<TutorialConnection>;
  tutorialFindById?: Maybe<Tutorial>;
  tutorialFindByIds: Array<Tutorial>;
  tutorialFindMany: Array<Tutorial>;
  tutorialFindOne?: Maybe<Tutorial>;
  tutorialPagination?: Maybe<TutorialPagination>;
  /** Obtain basic information about an account, based on the email. Null if the account does not exists, always non-null otherwise. */
  userAccountLoginInfo?: Maybe<UserAccountLoginInfo>;
  userConnection?: Maybe<UserConnection>;
  /** Get the current user using the authentication token set in the HTTP headers */
  userCurrent?: Maybe<User>;
  userFindById?: Maybe<User>;
  userFindByIds: Array<User>;
  userFindMany: Array<User>;
  userFindOne?: Maybe<User>;
  userPagination?: Maybe<UserPagination>;
  /** Run Sherlock's BrandEntryPointTraffic inference module */
  watsonInferencesBrandEntryPointTraffic?: Maybe<BrandEntryPointTrafficInferenceOutput>;
  /** Run Sherlock's BrandUniqueVisitors inference module */
  watsonInferencesBrandUniqueVisitors?: Maybe<BrandUniqueVisitorsInferenceOutput>;
  /** Run Sherlock's TunnelFunnel inference module */
  watsonInferencesTunnelFunnel?: Maybe<TunnelFunnelInferenceOutput>;
  /** Run Sherlock's TunnelStepChoices inference module */
  watsonInferencesTunnelStepChoices?: Maybe<TunnelStepChoicesInferenceOutput>;
  /** Run Sherlock's TunnelStepDuration inference module */
  watsonInferencesTunnelStepDuration?: Maybe<TunnelStepDurationInferenceOutput>;
  /** Run Sherlock's UserActive inference module */
  watsonInferencesUserActive?: Maybe<UserActiveInferenceOutput>;
  /** Run Sherlock's UserActivity inference module */
  watsonInferencesUserActivity?: Maybe<UserActivityInferenceOutput>;
  /** Run Sherlock's UserSessionsCount inference module */
  watsonInferencesUserSessionsCount?: Maybe<UserSessionsCountInferenceOutput>;
};


export type QueryAccessPointConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyAccessPointInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionAccessPointEnum>;
};


export type QueryAccessPointFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryAccessPointFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsAccessPointInput>;
};


export type QueryAccessPointFindManyArgs = {
  filter?: InputMaybe<FilterFindManyAccessPointInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyAccessPointInput>;
};


export type QueryAccessPointFindOneArgs = {
  filter?: InputMaybe<FilterFindOneAccessPointInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneAccessPointInput>;
};


export type QueryAccessPointPaginationArgs = {
  filter?: InputMaybe<FilterFindManyAccessPointInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyAccessPointInput>;
};


export type QueryAppletConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyAppletInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionAppletEnum>;
};


export type QueryAppletFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryAppletFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsAppletInput>;
};


export type QueryAppletFindByVersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryAppletFindManyArgs = {
  filter?: InputMaybe<FilterFindManyAppletInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyAppletInput>;
};


export type QueryAppletFindOneArgs = {
  filter?: InputMaybe<FilterFindOneAppletInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneAppletInput>;
};


export type QueryAppletPaginationArgs = {
  filter?: InputMaybe<FilterFindManyAppletInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyAppletInput>;
};


export type QueryBarcodeCollectionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyBarcodeCollectionInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionBarcodeCollectionEnum>;
};


export type QueryBarcodeCollectionFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryBarcodeCollectionFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsBarcodeCollectionInput>;
};


export type QueryBarcodeCollectionFindManyArgs = {
  filter?: InputMaybe<FilterFindManyBarcodeCollectionInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBarcodeCollectionInput>;
};


export type QueryBarcodeCollectionFindOneArgs = {
  filter?: InputMaybe<FilterFindOneBarcodeCollectionInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneBarcodeCollectionInput>;
};


export type QueryBarcodeCollectionPaginationArgs = {
  filter?: InputMaybe<FilterFindManyBarcodeCollectionInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBarcodeCollectionInput>;
};


export type QueryBrandConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyBrandInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionBrandEnum>;
};


export type QueryBrandFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryBrandFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsBrandInput>;
};


export type QueryBrandFindManyArgs = {
  filter?: InputMaybe<FilterFindManyBrandInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBrandInput>;
};


export type QueryBrandFindOneArgs = {
  filter?: InputMaybe<FilterFindOneBrandInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneBrandInput>;
};


export type QueryBrandFindPublicInfoByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryBrandPaginationArgs = {
  filter?: InputMaybe<FilterFindManyBrandInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBrandInput>;
};


export type QueryBrandParametersPriceTableFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryBrandParametersPriceTableFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsPriceTableInput>;
};


export type QueryBrandParametersPriceTableFindManyArgs = {
  filter?: InputMaybe<FilterFindManyPriceTableInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPriceTableInput>;
};


export type QueryBrandParametersPriceTableFindOneArgs = {
  filter?: InputMaybe<FilterFindOnePriceTableInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOnePriceTableInput>;
};


export type QueryBrandParametersPricingFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryBrandParametersPricingFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsBrandParametersPricingInput>;
};


export type QueryBrandParametersPricingFindManyArgs = {
  filter?: InputMaybe<FilterFindManyBrandParametersPricingInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBrandParametersPricingInput>;
};


export type QueryBrandParametersScrapperConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyBrandParametersScrapperInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionBrandParametersScrapperEnum>;
};


export type QueryBrandParametersScrapperFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryBrandParametersScrapperFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsBrandParametersScrapperInput>;
};


export type QueryBrandParametersScrapperFindManyArgs = {
  filter?: InputMaybe<FilterFindManyBrandParametersScrapperInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBrandParametersScrapperInput>;
};


export type QueryBrandParametersScrapperFindOneArgs = {
  filter?: InputMaybe<FilterFindOneBrandParametersScrapperInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneBrandParametersScrapperInput>;
};


export type QueryBrandParametersScrapperPaginationArgs = {
  filter?: InputMaybe<FilterFindManyBrandParametersScrapperInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBrandParametersScrapperInput>;
};


export type QueryBrandParametersTunnelFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryBrandParametersTunnelFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsBrandParametersTunnelInput>;
};


export type QueryBrandParametersTunnelFindManyArgs = {
  filter?: InputMaybe<FilterFindManyBrandParametersTunnelInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBrandParametersTunnelInput>;
};


export type QueryCatalogFolderFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryCatalogFolderFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsCatalogFolderInput>;
};


export type QueryCatalogFolderFindManyArgs = {
  filter?: InputMaybe<FilterFindManyCatalogFolderInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCatalogFolderInput>;
};


export type QueryCatalogFolderFindOneArgs = {
  filter?: InputMaybe<FilterFindOneCatalogFolderInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneCatalogFolderInput>;
};


export type QueryContactInformationFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryContactInformationFindManyArgs = {
  filter?: InputMaybe<FilterFindManyContactInformationInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyContactInformationInput>;
};


export type QueryContactInformationPaginationArgs = {
  filter?: InputMaybe<FilterFindManyContactInformationInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyContactInformationInput>;
};


export type QueryCustomerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyCustomerInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionCustomerEnum>;
};


export type QueryCustomerFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryCustomerFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsCustomerInput>;
};


export type QueryCustomerFindManyArgs = {
  filter?: InputMaybe<FilterFindManyCustomerInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCustomerInput>;
};


export type QueryCustomerFindOneArgs = {
  filter?: InputMaybe<FilterFindOneCustomerInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneCustomerInput>;
};


export type QueryCustomerPaginationArgs = {
  filter?: InputMaybe<FilterFindManyCustomerInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCustomerInput>;
};


export type QueryItemCategoryFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryItemCategoryFindManyArgs = {
  filter?: InputMaybe<FilterFindManyCategoryInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCategoryInput>;
};


export type QueryItemFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryItemFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsItemInput>;
};


export type QueryItemFindManyArgs = {
  filter?: InputMaybe<FilterFindManyItemInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyItemInput>;
};


export type QueryItemFindOneArgs = {
  filter?: InputMaybe<FilterFindOneItemInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneItemInput>;
};


export type QueryItemsGroupFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryItemsGroupFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsItemsGroupInput>;
};


export type QueryItemsGroupFindManyArgs = {
  filter?: InputMaybe<FilterFindManyItemsGroupInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyItemsGroupInput>;
};


export type QueryItemsGroupFindOneArgs = {
  filter?: InputMaybe<FilterFindOneItemsGroupInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneItemsGroupInput>;
};


export type QueryJobFindFromTokenArgs = {
  token: Scalars['JobToken']['input'];
};


export type QueryMonitoringSystemPrerequisitesListArgs = {
  cache?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMonitoringSystemPrerequisitesSummaryArgs = {
  cache?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPaletteConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyPaletteInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionPaletteEnum>;
};


export type QueryPaletteFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryPaletteFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsPaletteInput>;
};


export type QueryPaletteFindManyArgs = {
  filter?: InputMaybe<FilterFindManyPaletteInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPaletteInput>;
};


export type QueryPaletteFindOneArgs = {
  filter?: InputMaybe<FilterFindOnePaletteInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOnePaletteInput>;
};


export type QueryPalettePaginationArgs = {
  filter?: InputMaybe<FilterFindManyPaletteInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPaletteInput>;
};


export type QueryPictureConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyPictureInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionPictureEnum>;
};


export type QueryPictureFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryPictureFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsPictureInput>;
};


export type QueryPictureFindManyArgs = {
  filter?: InputMaybe<FilterFindManyPictureInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPictureInput>;
};


export type QueryPictureFindOneArgs = {
  filter?: InputMaybe<FilterFindOnePictureInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOnePictureInput>;
};


export type QueryPictureFindSystemPictureArgs = {
  brandId: Scalars['MongoID']['input'];
  defaultName: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type QueryPicturePaginationArgs = {
  filter?: InputMaybe<FilterFindManyPictureInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPictureInput>;
};


export type QueryPipelineJobConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyPipelineJobInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionPipelineJobEnum>;
};


export type QueryPipelineJobFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryPipelineJobFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsPipelineJobInput>;
};


export type QueryPipelineJobFindManyArgs = {
  filter?: InputMaybe<FilterFindManyPipelineJobInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPipelineJobInput>;
};


export type QueryPipelineJobFindOneArgs = {
  filter?: InputMaybe<FilterFindOnePipelineJobInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOnePipelineJobInput>;
};


export type QueryPipelineJobPaginationArgs = {
  filter?: InputMaybe<FilterFindManyPipelineJobInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPipelineJobInput>;
};


export type QueryPlannedMaintenanceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyPlannedMaintenanceInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionPlannedMaintenanceEnum>;
};


export type QueryPlannedMaintenanceFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryPlannedMaintenanceFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsPlannedMaintenanceInput>;
};


export type QueryPlannedMaintenanceFindManyArgs = {
  filter?: InputMaybe<FilterFindManyPlannedMaintenanceInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPlannedMaintenanceInput>;
};


export type QueryPlannedMaintenanceFindOneArgs = {
  filter?: InputMaybe<FilterFindOnePlannedMaintenanceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOnePlannedMaintenanceInput>;
};


export type QueryPlannedMaintenancePaginationArgs = {
  filter?: InputMaybe<FilterFindManyPlannedMaintenanceInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPlannedMaintenanceInput>;
};


export type QueryPriceTableFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryPriceTableFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsPriceTableInput>;
};


export type QueryPriceTableFindManyArgs = {
  filter?: InputMaybe<FilterFindManyPriceTableInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPriceTableInput>;
};


export type QueryPriceTableFindOneArgs = {
  filter?: InputMaybe<FilterFindOnePriceTableInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOnePriceTableInput>;
};


export type QueryProductScanConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyProductScanInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionProductScanEnum>;
};


export type QueryProductScanFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryProductScanFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsProductScanInput>;
};


export type QueryProductScanFindManyArgs = {
  filter?: InputMaybe<FilterFindManyProductScanInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyProductScanInput>;
};


export type QueryProductScanFindManyToConvertArgs = {
  filter?: InputMaybe<FilterFindManyProductScanInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyProductScanInput>;
};


export type QueryProductScanFindOneArgs = {
  filter?: InputMaybe<FilterFindOneProductScanInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneProductScanInput>;
};


export type QueryProductScanPaginationArgs = {
  filter?: InputMaybe<FilterFindManyProductScanInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyProductScanInput>;
};


export type QueryPromoterApartmentUnitConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyPromoterApartmentUnitInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionPromoterApartmentUnitEnum>;
};


export type QueryPromoterApartmentUnitFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryPromoterApartmentUnitFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsPromoterApartmentUnitInput>;
};


export type QueryPromoterApartmentUnitFindManyArgs = {
  filter?: InputMaybe<FilterFindManyPromoterApartmentUnitInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPromoterApartmentUnitInput>;
};


export type QueryPromoterApartmentUnitFindOneArgs = {
  filter?: InputMaybe<FilterFindOnePromoterApartmentUnitInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOnePromoterApartmentUnitInput>;
};


export type QueryPromoterApartmentUnitPaginationArgs = {
  filter?: InputMaybe<FilterFindManyPromoterApartmentUnitInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPromoterApartmentUnitInput>;
};


export type QueryPromoterApartmentUnitTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyPromoterApartmentUnitTypeInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionPromoterApartmentUnitTypeEnum>;
};


export type QueryPromoterApartmentUnitTypeFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryPromoterApartmentUnitTypeFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsPromoterApartmentUnitTypeInput>;
};


export type QueryPromoterApartmentUnitTypeFindManyArgs = {
  filter?: InputMaybe<FilterFindManyPromoterApartmentUnitTypeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPromoterApartmentUnitTypeInput>;
};


export type QueryPromoterApartmentUnitTypeFindOneArgs = {
  filter?: InputMaybe<FilterFindOnePromoterApartmentUnitTypeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOnePromoterApartmentUnitTypeInput>;
};


export type QueryPromoterApartmentUnitTypePaginationArgs = {
  filter?: InputMaybe<FilterFindManyPromoterApartmentUnitTypeInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPromoterApartmentUnitTypeInput>;
};


export type QueryPromoterProgramConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyPromoterProgramInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionPromoterProgramEnum>;
};


export type QueryPromoterProgramFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryPromoterProgramFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsPromoterProgramInput>;
};


export type QueryPromoterProgramFindManyArgs = {
  filter?: InputMaybe<FilterFindManyPromoterProgramInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPromoterProgramInput>;
};


export type QueryPromoterProgramFindOneArgs = {
  filter?: InputMaybe<FilterFindOnePromoterProgramInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOnePromoterProgramInput>;
};


export type QueryPromoterProgramPaginationArgs = {
  filter?: InputMaybe<FilterFindManyPromoterProgramInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyPromoterProgramInput>;
};


export type QueryPromoterProgramPlansDocumentManifestArgs = {
  manifest?: InputMaybe<InputDocumentManifestInput>;
  programId: Scalars['MongoID']['input'];
};


export type QueryPromoterProgramReportDocumentManifestArgs = {
  manifest?: InputMaybe<InputDocumentManifestInput>;
  programId: Scalars['MongoID']['input'];
};


export type QuerySalesRecordConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManySalesRecordInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionSalesRecordEnum>;
};


export type QuerySalesRecordFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QuerySalesRecordFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsSalesRecordInput>;
};


export type QuerySalesRecordFindManyArgs = {
  filter?: InputMaybe<FilterFindManySalesRecordInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManySalesRecordInput>;
};


export type QuerySalesRecordFindOneArgs = {
  filter?: InputMaybe<FilterFindOneSalesRecordInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneSalesRecordInput>;
};


export type QuerySalesRecordPaginationArgs = {
  filter?: InputMaybe<FilterFindManySalesRecordInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManySalesRecordInput>;
};


export type QuerySaveConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManySaveInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isTemplate: Scalars['Boolean']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionSaveEnum>;
};


export type QuerySaveFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QuerySaveFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsSaveInput>;
};


export type QuerySaveFindManyArgs = {
  filter?: InputMaybe<FilterFindManySaveInput>;
  isTemplate: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SortFindManySaveInput>>;
};


export type QuerySaveFolderFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QuerySaveFolderFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsSaveFolderInput>;
};


export type QuerySaveFolderFindManyArgs = {
  filter?: InputMaybe<FilterFindManySaveFolderInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManySaveFolderInput>;
};


export type QuerySavePaginationArgs = {
  filter?: InputMaybe<FilterFindManySaveInput>;
  isTemplate: Scalars['Boolean']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SortFindManySaveInput>>;
};


export type QuerySavesGroupFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QuerySavesGroupFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsSavesGroupInput>;
};


export type QuerySavesGroupFindManyArgs = {
  filter?: InputMaybe<FilterFindManySavesGroupInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManySavesGroupInput>;
};


export type QuerySettingFindByIdArgs = {
  _id: Scalars['String']['input'];
};


export type QuerySettingFindByIdsArgs = {
  _ids: Array<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsSettingInput>;
};


export type QuerySettingFindManyArgs = {
  filter?: InputMaybe<FilterFindManySettingInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManySettingInput>;
};


export type QueryStylePresetFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryStylePresetFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsStylePresetInput>;
};


export type QueryStylePresetFindManyArgs = {
  filter?: InputMaybe<FilterFindManyStylePresetInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SortFindManyStylePresetInput>>;
};


export type QueryStylePresetGroupFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryStylePresetGroupFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsStylePresetGroupInput>;
};


export type QueryStylePresetGroupFindManyArgs = {
  filter?: InputMaybe<FilterFindManyStylePresetGroupInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyStylePresetGroupInput>;
};


export type QueryStylePresetPaginationArgs = {
  filter?: InputMaybe<FilterFindManyStylePresetInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SortFindManyStylePresetInput>>;
};


export type QueryTutorialConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyTutorialInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionTutorialEnum>;
};


export type QueryTutorialFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryTutorialFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsTutorialInput>;
};


export type QueryTutorialFindManyArgs = {
  filter?: InputMaybe<FilterFindManyTutorialInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyTutorialInput>;
};


export type QueryTutorialFindOneArgs = {
  filter?: InputMaybe<FilterFindOneTutorialInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneTutorialInput>;
};


export type QueryTutorialPaginationArgs = {
  filter?: InputMaybe<FilterFindManyTutorialInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyTutorialInput>;
};


export type QueryUserAccountLoginInfoArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyUserInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionUserEnum>;
};


export type QueryUserFindByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryUserFindByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsUserInput>;
};


export type QueryUserFindManyArgs = {
  filter?: InputMaybe<FilterFindManyUserInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyUserInput>;
};


export type QueryUserFindOneArgs = {
  filter?: InputMaybe<FilterFindOneUserInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneUserInput>;
};


export type QueryUserPaginationArgs = {
  filter?: InputMaybe<FilterFindManyUserInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyUserInput>;
};


export type QueryWatsonInferencesBrandEntryPointTrafficArgs = {
  params: BrandEntryPointTrafficInferenceParams;
};


export type QueryWatsonInferencesBrandUniqueVisitorsArgs = {
  params: BrandUniqueVisitorsInferenceParams;
};


export type QueryWatsonInferencesTunnelFunnelArgs = {
  params: TunnelFunnelInferenceParams;
};


export type QueryWatsonInferencesTunnelStepChoicesArgs = {
  params: TunnelStepChoicesInferenceParams;
};


export type QueryWatsonInferencesTunnelStepDurationArgs = {
  params: TunnelStepDurationInferenceParams;
};


export type QueryWatsonInferencesUserActiveArgs = {
  params: UserActiveInferenceParams;
};


export type QueryWatsonInferencesUserActivityArgs = {
  params: UserActivityInferenceParams;
};


export type QueryWatsonInferencesUserSessionsCountArgs = {
  params: UserSessionsCountInferenceParams;
};

export type RemoveByIdAccessPointPayload = {
  __typename?: 'RemoveByIdAccessPointPayload';
  /** Removed document */
  record?: Maybe<AccessPoint>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdBarcodeCollectionPayload = {
  __typename?: 'RemoveByIdBarcodeCollectionPayload';
  /** Removed document */
  record?: Maybe<BarcodeCollection>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdBrandParametersPricingPayload = {
  __typename?: 'RemoveByIdBrandParametersPricingPayload';
  /** Removed document */
  record?: Maybe<BrandParametersPricing>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdBrandParametersScrapperPayload = {
  __typename?: 'RemoveByIdBrandParametersScrapperPayload';
  /** Removed document */
  record?: Maybe<BrandParametersScrapper>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdBrandParametersTunnelPayload = {
  __typename?: 'RemoveByIdBrandParametersTunnelPayload';
  /** Removed document */
  record?: Maybe<BrandParametersTunnel>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdBrandPayload = {
  __typename?: 'RemoveByIdBrandPayload';
  /** Removed document */
  record?: Maybe<Brand>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdCatalogFolderPayload = {
  __typename?: 'RemoveByIdCatalogFolderPayload';
  /** Removed document */
  record?: Maybe<CatalogFolder>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdContactInformationPayload = {
  __typename?: 'RemoveByIdContactInformationPayload';
  /** Removed document */
  record?: Maybe<ContactInformation>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdCustomerPayload = {
  __typename?: 'RemoveByIdCustomerPayload';
  /** Removed document */
  record?: Maybe<Customer>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdItemPayload = {
  __typename?: 'RemoveByIdItemPayload';
  /** Removed document */
  record?: Maybe<Item>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdItemsGroupPayload = {
  __typename?: 'RemoveByIdItemsGroupPayload';
  /** Removed document */
  record?: Maybe<ItemsGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdPalettePayload = {
  __typename?: 'RemoveByIdPalettePayload';
  /** Removed document */
  record?: Maybe<Palette>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdPicturePayload = {
  __typename?: 'RemoveByIdPicturePayload';
  /** Removed document */
  record?: Maybe<Picture>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdPipelineJobPayload = {
  __typename?: 'RemoveByIdPipelineJobPayload';
  /** Removed document */
  record?: Maybe<PipelineJob>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdPlannedMaintenancePayload = {
  __typename?: 'RemoveByIdPlannedMaintenancePayload';
  /** Removed document */
  record?: Maybe<PlannedMaintenance>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdPriceTablePayload = {
  __typename?: 'RemoveByIdPriceTablePayload';
  /** Removed document */
  record?: Maybe<PriceTable>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdProductScanPayload = {
  __typename?: 'RemoveByIdProductScanPayload';
  /** Removed document */
  record?: Maybe<ProductScan>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdPromoterApartmentUnitPayload = {
  __typename?: 'RemoveByIdPromoterApartmentUnitPayload';
  /** Removed document */
  record?: Maybe<PromoterApartmentUnit>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdPromoterApartmentUnitTypePayload = {
  __typename?: 'RemoveByIdPromoterApartmentUnitTypePayload';
  /** Removed document */
  record?: Maybe<PromoterApartmentUnitType>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdPromoterProgramPayload = {
  __typename?: 'RemoveByIdPromoterProgramPayload';
  /** Removed document */
  record?: Maybe<PromoterProgram>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdSalesRecordPayload = {
  __typename?: 'RemoveByIdSalesRecordPayload';
  /** Removed document */
  record?: Maybe<SalesRecord>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdSaveFolderPayload = {
  __typename?: 'RemoveByIdSaveFolderPayload';
  /** Removed document */
  record?: Maybe<SaveFolder>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdSavesGroupPayload = {
  __typename?: 'RemoveByIdSavesGroupPayload';
  /** Removed document */
  record?: Maybe<SavesGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdSettingPayload = {
  __typename?: 'RemoveByIdSettingPayload';
  /** Removed document */
  record?: Maybe<Setting>;
  /** Document ID */
  recordId?: Maybe<Scalars['String']['output']>;
};

export type RemoveByIdStylePresetGroupPayload = {
  __typename?: 'RemoveByIdStylePresetGroupPayload';
  /** Removed document */
  record?: Maybe<StylePresetGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdStylePresetPayload = {
  __typename?: 'RemoveByIdStylePresetPayload';
  /** Removed document */
  record?: Maybe<StylePreset>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdTutorialPayload = {
  __typename?: 'RemoveByIdTutorialPayload';
  /** Removed document */
  record?: Maybe<Tutorial>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdUserPayload = {
  __typename?: 'RemoveByIdUserPayload';
  /** Removed document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneAccessPointPayload = {
  __typename?: 'RemoveOneAccessPointPayload';
  /** Removed document */
  record?: Maybe<AccessPoint>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneBarcodeCollectionPayload = {
  __typename?: 'RemoveOneBarcodeCollectionPayload';
  /** Removed document */
  record?: Maybe<BarcodeCollection>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneBrandParametersPricingPayload = {
  __typename?: 'RemoveOneBrandParametersPricingPayload';
  /** Removed document */
  record?: Maybe<BrandParametersPricing>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneBrandParametersScrapperPayload = {
  __typename?: 'RemoveOneBrandParametersScrapperPayload';
  /** Removed document */
  record?: Maybe<BrandParametersScrapper>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneBrandParametersTunnelPayload = {
  __typename?: 'RemoveOneBrandParametersTunnelPayload';
  /** Removed document */
  record?: Maybe<BrandParametersTunnel>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneBrandPayload = {
  __typename?: 'RemoveOneBrandPayload';
  /** Removed document */
  record?: Maybe<Brand>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneCatalogFolderPayload = {
  __typename?: 'RemoveOneCatalogFolderPayload';
  /** Removed document */
  record?: Maybe<CatalogFolder>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneCustomerPayload = {
  __typename?: 'RemoveOneCustomerPayload';
  /** Removed document */
  record?: Maybe<Customer>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneItemPayload = {
  __typename?: 'RemoveOneItemPayload';
  /** Removed document */
  record?: Maybe<Item>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneItemsGroupPayload = {
  __typename?: 'RemoveOneItemsGroupPayload';
  /** Removed document */
  record?: Maybe<ItemsGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOnePalettePayload = {
  __typename?: 'RemoveOnePalettePayload';
  /** Removed document */
  record?: Maybe<Palette>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOnePicturePayload = {
  __typename?: 'RemoveOnePicturePayload';
  /** Removed document */
  record?: Maybe<Picture>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOnePipelineJobPayload = {
  __typename?: 'RemoveOnePipelineJobPayload';
  /** Removed document */
  record?: Maybe<PipelineJob>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOnePlannedMaintenancePayload = {
  __typename?: 'RemoveOnePlannedMaintenancePayload';
  /** Removed document */
  record?: Maybe<PlannedMaintenance>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOnePriceTablePayload = {
  __typename?: 'RemoveOnePriceTablePayload';
  /** Removed document */
  record?: Maybe<PriceTable>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneProductScanPayload = {
  __typename?: 'RemoveOneProductScanPayload';
  /** Removed document */
  record?: Maybe<ProductScan>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneSalesRecordPayload = {
  __typename?: 'RemoveOneSalesRecordPayload';
  /** Removed document */
  record?: Maybe<SalesRecord>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneSaveFolderPayload = {
  __typename?: 'RemoveOneSaveFolderPayload';
  /** Removed document */
  record?: Maybe<SaveFolder>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneSavePayload = {
  __typename?: 'RemoveOneSavePayload';
  /** Removed document */
  record?: Maybe<Save>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneSavesGroupPayload = {
  __typename?: 'RemoveOneSavesGroupPayload';
  /** Removed document */
  record?: Maybe<SavesGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneStylePresetGroupPayload = {
  __typename?: 'RemoveOneStylePresetGroupPayload';
  /** Removed document */
  record?: Maybe<StylePresetGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneStylePresetPayload = {
  __typename?: 'RemoveOneStylePresetPayload';
  /** Removed document */
  record?: Maybe<StylePreset>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneTutorialPayload = {
  __typename?: 'RemoveOneTutorialPayload';
  /** Removed document */
  record?: Maybe<Tutorial>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneUserPayload = {
  __typename?: 'RemoveOneUserPayload';
  /** Removed document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type SalesRecord = {
  __typename?: 'SalesRecord';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['MongoID']['output']>;
  finalCustomerMetadata?: Maybe<Scalars['Metadata']['output']>;
  metadata: Scalars['Metadata']['output'];
  save: Save;
  saveId: Scalars['MongoID']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['MongoID']['output']>;
};

/** A connection to a list of items. */
export type SalesRecordConnection = {
  __typename?: 'SalesRecordConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<SalesRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SalesRecordEdge = {
  __typename?: 'SalesRecordEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: SalesRecord;
};

/** List of items with pagination. */
export type SalesRecordPagination = {
  __typename?: 'SalesRecordPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<SalesRecord>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Save = {
  __typename?: 'Save';
  _id: Scalars['MongoID']['output'];
  accessPointCreatedFrom?: Maybe<AccessPoint>;
  accessPointCreatedFromId?: Maybe<Scalars['MongoID']['output']>;
  additionalInfo?: Maybe<Scalars['JSON']['output']>;
  apartmentUnitType?: Maybe<PromoterApartmentUnitType>;
  apartmentUnitTypeId?: Maybe<Scalars['MongoID']['output']>;
  brand?: Maybe<Brand>;
  brandId?: Maybe<Scalars['MongoID']['output']>;
  /** Find public info from a brand by id */
  brandPublicInfo?: Maybe<BrandPublicInfo>;
  chosenStylePreset?: Maybe<StylePreset>;
  chosenStylePresetId?: Maybe<Scalars['MongoID']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['MongoID']['output']>;
  createdByPublic?: Maybe<PublicUser>;
  createdFromAP?: Maybe<Scalars['MongoID']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['MongoID']['output']>;
  data: Scalars['String']['output'];
  dataFormatVersion: Scalars['Int']['output'];
  dataUrl?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  isReadonly: Scalars['Boolean']['output'];
  isTemplate: Scalars['Boolean']['output'];
  lastSuccessfulLoadAt?: Maybe<Scalars['Date']['output']>;
  metadata: Scalars['Metadata']['output'];
  moduleKitchenCustomData?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<Save>;
  parentId?: Maybe<Scalars['MongoID']['output']>;
  quantitySurveyJSON?: Maybe<Scalars['String']['output']>;
  referencedItemIds: Array<Scalars['MongoID']['output']>;
  referencedItems: Array<Item>;
  saveFolderId?: Maybe<Scalars['MongoID']['output']>;
  storageBytesUsage: Scalars['Int']['output'];
  stylePresetGroup?: Maybe<StylePresetGroup>;
  stylePresetGroupId?: Maybe<Scalars['MongoID']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  tunnelState?: Maybe<Scalars['JSON']['output']>;
  type: EnumSaveType;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['MongoID']['output']>;
  visitViewpoints: Array<SaveVisitViewpoints>;
};

/** A connection to a list of items. */
export type SaveConnection = {
  __typename?: 'SaveConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<SaveEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SaveEdge = {
  __typename?: 'SaveEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Save;
};

export type SaveFolder = {
  __typename?: 'SaveFolder';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  childrenFolders: Array<SaveFolder>;
  childrenSaves: Array<Save>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<SaveFolder>;
  parentId?: Maybe<Scalars['MongoID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type SaveFolderChildrenFoldersArgs = {
  filter?: InputMaybe<FilterFindManySaveFolderInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManySaveFolderInput>;
};


export type SaveFolderChildrenSavesArgs = {
  filter?: InputMaybe<FilterFindManySaveInput>;
  isTemplate: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SortFindManySaveInput>>;
};

/** List of items with pagination. */
export type SavePagination = {
  __typename?: 'SavePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<Save>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type SaveVisitViewpoints = {
  __typename?: 'SaveVisitViewpoints';
  _id?: Maybe<Scalars['MongoID']['output']>;
  orientation: SaveVisitViewpointsOrientation;
  position: SaveVisitViewpointsPosition;
};

export type SaveVisitViewpointsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation: SaveVisitViewpointsOrientationInput;
  position: SaveVisitViewpointsPositionInput;
};

export type SaveVisitViewpointsOrientation = {
  __typename?: 'SaveVisitViewpointsOrientation';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
  z: Scalars['Float']['output'];
};

export type SaveVisitViewpointsOrientationInput = {
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
  z: Scalars['Float']['input'];
};

export type SaveVisitViewpointsPosition = {
  __typename?: 'SaveVisitViewpointsPosition';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
  z: Scalars['Float']['output'];
};

export type SaveVisitViewpointsPositionInput = {
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
  z: Scalars['Float']['input'];
};

export type SavesGroup = {
  __typename?: 'SavesGroup';
  _id: Scalars['MongoID']['output'];
  brandId: Scalars['MongoID']['output'];
  name: Scalars['String']['output'];
  publicName: Scalars['String']['output'];
  publicNameTranslations: Scalars['Translations']['output'];
  saves: Array<Save>;
  savesIds?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  thumbnailPictureName?: Maybe<Scalars['String']['output']>;
  type: EnumSavesGroupType;
};


export type SavesGroupPublicNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type Setting = {
  __typename?: 'Setting';
  _id: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export enum SortConnectionAccessPointEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionAppletEnum {
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionBarcodeCollectionEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionBrandEnum {
  SharecodeAsc = 'SHARECODE_ASC',
  SharecodeDesc = 'SHARECODE_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionBrandParametersScrapperEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionCustomerEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionPaletteEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionPictureEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionPipelineJobEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionPlannedMaintenanceEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionProductScanEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionPromoterApartmentUnitEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionPromoterApartmentUnitTypeEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionPromoterProgramEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionSalesRecordEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionSaveEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionTutorialEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionUserEnum {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsAccessPointInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsAppletInput {
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsBarcodeCollectionInput {
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsBrandInput {
  SharecodeAsc = 'SHARECODE_ASC',
  SharecodeDesc = 'SHARECODE_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsBrandParametersPricingInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsBrandParametersScrapperInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsBrandParametersTunnelInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsCatalogFolderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsCustomerInput {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstnameadditionalAsc = 'FIRSTNAMEADDITIONAL_ASC',
  FirstnameadditionalDesc = 'FIRSTNAMEADDITIONAL_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  GenderadditionalAsc = 'GENDERADDITIONAL_ASC',
  GenderadditionalDesc = 'GENDERADDITIONAL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  SurnameadditionalAsc = 'SURNAMEADDITIONAL_ASC',
  SurnameadditionalDesc = 'SURNAMEADDITIONAL_DESC',
  SurnameAsc = 'SURNAME_ASC',
  SurnameDesc = 'SURNAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsItemInput {
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsItemsGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPaletteInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPictureInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPipelineJobInput {
  DeadlinejobidAsc = 'DEADLINEJOBID_ASC',
  DeadlinejobidDesc = 'DEADLINEJOBID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPlannedMaintenanceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPriceTableInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsProductScanInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameBrandidAsc = 'NAME__BRANDID_ASC',
  NameBrandidDesc = 'NAME__BRANDID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPromoterApartmentUnitInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  UnittypeidAsc = 'UNITTYPEID_ASC',
  UnittypeidDesc = 'UNITTYPEID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPromoterApartmentUnitTypeInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  ProgramidAsc = 'PROGRAMID_ASC',
  ProgramidDesc = 'PROGRAMID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPromoterProgramInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PromoteridAsc = 'PROMOTERID_ASC',
  PromoteridDesc = 'PROMOTERID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsSalesRecordInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsSaveFolderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsSaveInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyAsc = 'CREATEDBY_ASC',
  CreatedbyDesc = 'CREATEDBY_DESC',
  IstemplateAsc = 'ISTEMPLATE_ASC',
  IstemplateDesc = 'ISTEMPLATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsSavesGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsSettingInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsStylePresetGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsStylePresetInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsTutorialInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsUserInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyAccessPointInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyAppletInput {
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyBarcodeCollectionInput {
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyBrandInput {
  SharecodeAsc = 'SHARECODE_ASC',
  SharecodeDesc = 'SHARECODE_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyBrandParametersPricingInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyBrandParametersScrapperInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyBrandParametersTunnelInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyCatalogFolderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyCategoryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyContactInformationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyCustomerInput {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstnameadditionalAsc = 'FIRSTNAMEADDITIONAL_ASC',
  FirstnameadditionalDesc = 'FIRSTNAMEADDITIONAL_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  GenderadditionalAsc = 'GENDERADDITIONAL_ASC',
  GenderadditionalDesc = 'GENDERADDITIONAL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  SurnameadditionalAsc = 'SURNAMEADDITIONAL_ASC',
  SurnameadditionalDesc = 'SURNAMEADDITIONAL_DESC',
  SurnameAsc = 'SURNAME_ASC',
  SurnameDesc = 'SURNAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyItemInput {
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyItemsGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPaletteInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPictureInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPipelineJobInput {
  DeadlinejobidAsc = 'DEADLINEJOBID_ASC',
  DeadlinejobidDesc = 'DEADLINEJOBID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPlannedMaintenanceInput {
  StartDateAsc = 'START_DATE_ASC',
  StartDateDesc = 'START_DATE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPriceTableInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyProductScanInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameBrandidAsc = 'NAME__BRANDID_ASC',
  NameBrandidDesc = 'NAME__BRANDID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPromoterApartmentUnitInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  UnittypeidAsc = 'UNITTYPEID_ASC',
  UnittypeidDesc = 'UNITTYPEID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPromoterApartmentUnitTypeInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  ProgramidAsc = 'PROGRAMID_ASC',
  ProgramidDesc = 'PROGRAMID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPromoterProgramInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PromoteridAsc = 'PROMOTERID_ASC',
  PromoteridDesc = 'PROMOTERID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySalesRecordInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySaveFolderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySaveInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyAsc = 'CREATEDBY_ASC',
  CreatedbyDesc = 'CREATEDBY_DESC',
  IstemplateAsc = 'ISTEMPLATE_ASC',
  IstemplateDesc = 'ISTEMPLATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySavesGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySettingInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyStylePresetGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyStylePresetInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyTutorialInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyUserInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneAccessPointInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneAppletInput {
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneBarcodeCollectionInput {
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneBrandInput {
  SharecodeAsc = 'SHARECODE_ASC',
  SharecodeDesc = 'SHARECODE_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneBrandParametersScrapperInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneCatalogFolderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneCustomerInput {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstnameadditionalAsc = 'FIRSTNAMEADDITIONAL_ASC',
  FirstnameadditionalDesc = 'FIRSTNAMEADDITIONAL_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  GenderadditionalAsc = 'GENDERADDITIONAL_ASC',
  GenderadditionalDesc = 'GENDERADDITIONAL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  SurnameadditionalAsc = 'SURNAMEADDITIONAL_ASC',
  SurnameadditionalDesc = 'SURNAMEADDITIONAL_DESC',
  SurnameAsc = 'SURNAME_ASC',
  SurnameDesc = 'SURNAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneItemInput {
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneItemsGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOnePaletteInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOnePictureInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOnePipelineJobInput {
  DeadlinejobidAsc = 'DEADLINEJOBID_ASC',
  DeadlinejobidDesc = 'DEADLINEJOBID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOnePlannedMaintenanceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOnePriceTableInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneProductScanInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameBrandidAsc = 'NAME__BRANDID_ASC',
  NameBrandidDesc = 'NAME__BRANDID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOnePromoterApartmentUnitInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  UnittypeidAsc = 'UNITTYPEID_ASC',
  UnittypeidDesc = 'UNITTYPEID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOnePromoterApartmentUnitTypeInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  ProgramidAsc = 'PROGRAMID_ASC',
  ProgramidDesc = 'PROGRAMID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOnePromoterProgramInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PromoteridAsc = 'PROMOTERID_ASC',
  PromoteridDesc = 'PROMOTERID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneSalesRecordInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneTutorialInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneUserInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneAccessPointInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneBarcodeCollectionInput {
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneBrandInput {
  SharecodeAsc = 'SHARECODE_ASC',
  SharecodeDesc = 'SHARECODE_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneBrandParametersPricingInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneBrandParametersScrapperInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneBrandParametersTunnelInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneCatalogFolderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneCustomerInput {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstnameadditionalAsc = 'FIRSTNAMEADDITIONAL_ASC',
  FirstnameadditionalDesc = 'FIRSTNAMEADDITIONAL_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  GenderadditionalAsc = 'GENDERADDITIONAL_ASC',
  GenderadditionalDesc = 'GENDERADDITIONAL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  SurnameadditionalAsc = 'SURNAMEADDITIONAL_ASC',
  SurnameadditionalDesc = 'SURNAMEADDITIONAL_DESC',
  SurnameAsc = 'SURNAME_ASC',
  SurnameDesc = 'SURNAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneItemInput {
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneItemsGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOnePaletteInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOnePictureInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOnePipelineJobInput {
  DeadlinejobidAsc = 'DEADLINEJOBID_ASC',
  DeadlinejobidDesc = 'DEADLINEJOBID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOnePlannedMaintenanceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOnePriceTableInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneProductScanInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameBrandidAsc = 'NAME__BRANDID_ASC',
  NameBrandidDesc = 'NAME__BRANDID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneSalesRecordInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneSaveFolderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneSaveInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyAsc = 'CREATEDBY_ASC',
  CreatedbyDesc = 'CREATEDBY_DESC',
  IstemplateAsc = 'ISTEMPLATE_ASC',
  IstemplateDesc = 'ISTEMPLATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneSavesGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneStylePresetGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneStylePresetInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneTutorialInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneUserInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneAccessPointInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneBarcodeCollectionInput {
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneBrandInput {
  SharecodeAsc = 'SHARECODE_ASC',
  SharecodeDesc = 'SHARECODE_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneBrandParametersPricingInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneBrandParametersScrapperInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneBrandParametersTunnelInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneCatalogFolderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneCustomerInput {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstnameadditionalAsc = 'FIRSTNAMEADDITIONAL_ASC',
  FirstnameadditionalDesc = 'FIRSTNAMEADDITIONAL_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  GenderadditionalAsc = 'GENDERADDITIONAL_ASC',
  GenderadditionalDesc = 'GENDERADDITIONAL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  SurnameadditionalAsc = 'SURNAMEADDITIONAL_ASC',
  SurnameadditionalDesc = 'SURNAMEADDITIONAL_DESC',
  SurnameAsc = 'SURNAME_ASC',
  SurnameDesc = 'SURNAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneItemInput {
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneItemsGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOnePaletteInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOnePictureInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOnePipelineJobInput {
  DeadlinejobidAsc = 'DEADLINEJOBID_ASC',
  DeadlinejobidDesc = 'DEADLINEJOBID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOnePlannedMaintenanceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOnePriceTableInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneProductScanInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameBrandidAsc = 'NAME__BRANDID_ASC',
  NameBrandidDesc = 'NAME__BRANDID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneSalesRecordInput {
  BrandidAsc = 'BRANDID_ASC',
  BrandidDesc = 'BRANDID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneSaveFolderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneSaveInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyAsc = 'CREATEDBY_ASC',
  CreatedbyDesc = 'CREATEDBY_DESC',
  IstemplateAsc = 'ISTEMPLATE_ASC',
  IstemplateDesc = 'ISTEMPLATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneSavesGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneStylePresetGroupInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneStylePresetInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneTutorialInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneUserInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedbyidAsc = 'CREATEDBYID_ASC',
  CreatedbyidDesc = 'CREATEDBYID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type StylePreset = {
  __typename?: 'StylePreset';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  customisationPresets?: Maybe<Array<Maybe<StylePresetCustomisationPresets>>>;
  name: Scalars['String']['output'];
  publicName: Scalars['String']['output'];
  publicNameTranslations: Scalars['Translations']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type StylePresetPublicNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type StylePresetCustomisationPresets = {
  __typename?: 'StylePresetCustomisationPresets';
  _id?: Maybe<Scalars['MongoID']['output']>;
  chosenItemId?: Maybe<Scalars['MongoID']['output']>;
  customisationNameId: Scalars['String']['output'];
  filterTag?: Maybe<Scalars['String']['output']>;
  rotationCondition?: Maybe<EnumStylePresetCustomisationPresetsRotationCondition>;
};

export type StylePresetCustomisationPresetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  chosenItemId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationNameId: Scalars['String']['input'];
  filterTag?: InputMaybe<Scalars['String']['input']>;
  rotationCondition?: InputMaybe<EnumStylePresetCustomisationPresetsRotationCondition>;
};

export type StylePresetGroup = {
  __typename?: 'StylePresetGroup';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  name: Scalars['String']['output'];
  stylePresetIds?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  stylePresets: Array<StylePreset>;
};

/** List of items with pagination. */
export type StylePresetPagination = {
  __typename?: 'StylePresetPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<StylePreset>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Retrieves a job from a token you've got in a response, and receive updates. The subscription is not cancelled server-side after your job completes or fails (because, for example, it could be retried if the queue policy allows it), so you should cancel your subscription client-side, when appropriate. */
  jobSubscribeFromToken?: Maybe<AnyJob>;
};


export type SubscriptionJobSubscribeFromTokenArgs = {
  token: Scalars['JobToken']['input'];
};

export type SystemPrerequisite = {
  __typename?: 'SystemPrerequisite';
  /** Which system prerequisite this one depends on. If the linked system prerquisite is not implemented or does not exist, this one will not be executed. */
  dependsOn?: Maybe<Scalars['String']['output']>;
  /** What is the system prerequisite checking. */
  description: Scalars['String']['output'];
  /** An optional diagnostic message to help the user understand what's actually good or not. */
  diagnostic?: Maybe<Scalars['String']['output']>;
  /** If any, the related error stack trace. */
  error?: Maybe<Scalars['String']['output']>;
  /** Has the system prerequisite been validated? This property is driven by the status. */
  implemented: Scalars['Boolean']['output'];
  /** The system prerequisite identifier. */
  key: Scalars['String']['output'];
  /** More details about the system prerequisite execution. */
  status: SystemPrerequisiteStatus;
};

export enum SystemPrerequisiteStatus {
  Crashed = 'CRASHED',
  Implemented = 'IMPLEMENTED',
  NotChecked = 'NOT_CHECKED',
  NotImplemented = 'NOT_IMPLEMENTED'
}

export type SystemPrerequisitesSummary = {
  __typename?: 'SystemPrerequisitesSummary';
  failing: Array<Scalars['String']['output']>;
  implementedCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type TilePriceInfo = {
  __typename?: 'TilePriceInfo';
  currencyName?: Maybe<Scalars['String']['output']>;
  hasMoreThanOnePrice?: Maybe<Scalars['Boolean']['output']>;
  lowestPriceWithDiscountInCents?: Maybe<Scalars['Float']['output']>;
  lowestPriceWithoutDiscountInCents?: Maybe<Scalars['Float']['output']>;
  moniker?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

export type TunnelFunnelInferenceOutput = {
  __typename?: 'TunnelFunnelInferenceOutput';
  survivorsByStep: Array<TunnelFunnelSurvivorsByStep>;
  tunnelName: Scalars['String']['output'];
};

export type TunnelFunnelInferenceParams = {
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
  tunnelId: Scalars['String']['input'];
};

export type TunnelFunnelSurvivorsByStep = {
  __typename?: 'TunnelFunnelSurvivorsByStep';
  stepId: Scalars['MongoID']['output'];
  stepName?: Maybe<Scalars['String']['output']>;
  survivorsCount?: Maybe<Scalars['Int']['output']>;
};

export type TunnelStepChoicesByStep = {
  __typename?: 'TunnelStepChoicesByStep';
  areChoicesAnalyticsEnabled: Scalars['Boolean']['output'];
  choices: Array<TunnelStepChoicesByStepChoice>;
  stepId: Scalars['MongoID']['output'];
  stepName?: Maybe<Scalars['String']['output']>;
};

export type TunnelStepChoicesByStepChoice = {
  __typename?: 'TunnelStepChoicesByStepChoice';
  choice: Scalars['String']['output'];
  timesChosen: Scalars['Int']['output'];
};

export type TunnelStepChoicesInferenceOutput = {
  __typename?: 'TunnelStepChoicesInferenceOutput';
  choicesByStep: Array<TunnelStepChoicesByStep>;
  tunnelName: Scalars['String']['output'];
};

export type TunnelStepChoicesInferenceParams = {
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
  tunnelId: Scalars['String']['input'];
};

export type TunnelStepDurationDurationByStep = {
  __typename?: 'TunnelStepDurationDurationByStep';
  percentile25?: Maybe<Scalars['Float']['output']>;
  percentile50?: Maybe<Scalars['Float']['output']>;
  percentile75?: Maybe<Scalars['Float']['output']>;
  stepId: Scalars['MongoID']['output'];
  stepName?: Maybe<Scalars['String']['output']>;
};

export type TunnelStepDurationInferenceOutput = {
  __typename?: 'TunnelStepDurationInferenceOutput';
  durationByStep: Array<TunnelStepDurationDurationByStep>;
  tunnelName: Scalars['String']['output'];
};

export type TunnelStepDurationInferenceParams = {
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
  tunnelId: Scalars['String']['input'];
};

export type Tutorial = {
  __typename?: 'Tutorial';
  _id: Scalars['MongoID']['output'];
  brand: Brand;
  brandId: Scalars['MongoID']['output'];
  displayOnlyOnce?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  points: Array<TutorialPoint>;
};

/** A connection to a list of items. */
export type TutorialConnection = {
  __typename?: 'TutorialConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<TutorialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TutorialEdge = {
  __typename?: 'TutorialEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Tutorial;
};

/** List of items with pagination. */
export type TutorialPagination = {
  __typename?: 'TutorialPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<Tutorial>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type TutorialPoint = {
  __typename?: 'TutorialPoint';
  _id?: Maybe<Scalars['MongoID']['output']>;
  illustration?: Maybe<Scalars['String']['output']>;
  target: EnumTutorialPointTarget;
  text: Scalars['String']['output'];
  textTranslations: Scalars['Translations']['output'];
  title: Scalars['String']['output'];
  titleTranslations: Scalars['Translations']['output'];
};


export type TutorialPointTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type TutorialPointTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialPointInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  illustration?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<EnumTutorialPointTarget>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
};

export type UpdateByIdAccessPointInput = {
  areSavesPubliclyAvailableById?: InputMaybe<Scalars['Boolean']['input']>;
  authorizedCatalogIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  ecotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parametersScrapperId?: InputMaybe<Scalars['MongoID']['input']>;
  parametersTunnelId?: InputMaybe<Scalars['MongoID']['input']>;
  priceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  supportButton?: InputMaybe<UpdateByIdAccessPointSupportButtonInput>;
};

export type UpdateByIdAccessPointPayload = {
  __typename?: 'UpdateByIdAccessPointPayload';
  /** Updated document */
  record?: Maybe<AccessPoint>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdAccessPointSupportButtonInput = {
  icon?: InputMaybe<EnumAccessPointSupportButtonIcon>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumAccessPointSupportButtonType>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBarcodeCollectionBarcodeReferencesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBarcodeCollectionInput = {
  barcodeReferences?: InputMaybe<Array<UpdateByIdBarcodeCollectionBarcodeReferencesInput>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateByIdBarcodeCollectionPayload = {
  __typename?: 'UpdateByIdBarcodeCollectionPayload';
  /** Updated document */
  record?: Maybe<BarcodeCollection>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdBrandColorsInput = {
  dataProtection?: InputMaybe<Scalars['String']['input']>;
  legalNotice?: InputMaybe<Scalars['String']['input']>;
  loadingScreenBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenLogoPicture?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBorder?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarContent?: InputMaybe<Scalars['String']['input']>;
  loadingScreenText?: InputMaybe<Scalars['String']['input']>;
  meshes?: InputMaybe<UpdateByIdBrandColorsMeshesInput>;
  planElement?: InputMaybe<UpdateByIdBrandColorsPlanElementInput>;
  primary?: InputMaybe<Scalars['String']['input']>;
  questHeaderBackground?: InputMaybe<Scalars['String']['input']>;
  questHeaderBody?: InputMaybe<Scalars['String']['input']>;
  questHeaderTitle?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBrandColorsMeshesInput = {
  wallCut?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBrandColorsPlanElementInput = {
  floor?: InputMaybe<Scalars['String']['input']>;
  wall?: InputMaybe<Scalars['String']['input']>;
  window?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBrandInput = {
  colors?: InputMaybe<UpdateByIdBrandColorsInput>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promoterWebsiteConfiguration?: InputMaybe<UpdateByIdBrandPromoterWebsiteConfigurationInput>;
  satelliteConfiguration?: InputMaybe<UpdateByIdBrandSatelliteConfigurationInput>;
  shareCode?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateByIdBrandParametersPricingInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  useArticleCode?: InputMaybe<Scalars['Boolean']['input']>;
  useEAN?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdBrandParametersPricingPayload = {
  __typename?: 'UpdateByIdBrandParametersPricingPayload';
  /** Updated document */
  record?: Maybe<BrandParametersPricing>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdBrandParametersScrapperInput = {
  allowAnonymousSave?: InputMaybe<Scalars['Boolean']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  export?: InputMaybe<Scalars['Boolean']['input']>;
  geometry?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  objects?: InputMaybe<Scalars['Boolean']['input']>;
  postManualSaveTriggerSteps?: InputMaybe<Array<UpdateByIdBrandParametersScrapperPostManualSaveTriggerStepsInput>>;
  screenshots?: InputMaybe<Scalars['Boolean']['input']>;
  steps?: InputMaybe<Array<UpdateByIdBrandParametersScrapperStepsInput>>;
  watermark?: InputMaybe<UpdateByIdBrandParametersScrapperWatermarkInput>;
};

export type UpdateByIdBrandParametersScrapperPayload = {
  __typename?: 'UpdateByIdBrandParametersScrapperPayload';
  /** Updated document */
  record?: Maybe<BrandParametersScrapper>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdBrandParametersScrapperPostManualSaveTriggerStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  triggerPopup?: InputMaybe<UpdateByIdBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput>;
  type?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsType>;
};

export type UpdateByIdBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buttonType?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupButtonType>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  yesNoButtons?: InputMaybe<UpdateByIdBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput>;
};

export type UpdateByIdBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput = {
  stateProperty?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBrandParametersScrapperStepsFilterInput = {
  expression?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBrandParametersScrapperStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  filter?: InputMaybe<UpdateByIdBrandParametersScrapperStepsFilterInput>;
  map?: InputMaybe<UpdateByIdBrandParametersScrapperStepsMapInput>;
  stepType?: InputMaybe<EnumBrandParametersScrapperStepsStepType>;
  stepVerb?: InputMaybe<Scalars['String']['input']>;
  tap?: InputMaybe<UpdateByIdBrandParametersScrapperStepsTapInput>;
  verbFilter?: InputMaybe<EnumBrandParametersScrapperStepsVerbFilter>;
  verbMap?: InputMaybe<EnumBrandParametersScrapperStepsVerbMap>;
  verbTap?: InputMaybe<EnumBrandParametersScrapperStepsVerbTap>;
};

export type UpdateByIdBrandParametersScrapperStepsMapInput = {
  kitchenPricer?: InputMaybe<UpdateByIdBrandParametersScrapperStepsMapKitchenPricerInput>;
  payloadGenerator?: InputMaybe<UpdateByIdBrandParametersScrapperStepsMapPayloadGeneratorInput>;
  pdfReportGenerator?: InputMaybe<UpdateByIdBrandParametersScrapperStepsMapPdfReportGeneratorInput>;
  plinthCalculator?: InputMaybe<UpdateByIdBrandParametersScrapperStepsMapPlinthCalculatorInput>;
  reportGenerator?: InputMaybe<UpdateByIdBrandParametersScrapperStepsMapReportGeneratorInput>;
  terracePricer?: InputMaybe<UpdateByIdBrandParametersScrapperStepsMapTerracePricerInput>;
};

export type UpdateByIdBrandParametersScrapperStepsMapKitchenPricerInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  barcodeCollectionId?: InputMaybe<Scalars['MongoID']['input']>;
  projectBaseUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBrandParametersScrapperStepsMapPayloadGeneratorInput = {
  addSaveName?: InputMaybe<Scalars['Boolean']['input']>;
  addUpdateToken?: InputMaybe<Scalars['Boolean']['input']>;
  dynamicParameterForTunnelStateInformation?: InputMaybe<Scalars['String']['input']>;
  tunnelStateKeys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateByIdBrandParametersScrapperStepsMapPdfReportGeneratorInput = {
  payloadType?: InputMaybe<EnumBrandParametersScrapperStepsMapPdfReportGeneratorPayloadType>;
};

export type UpdateByIdBrandParametersScrapperStepsMapPlinthCalculatorInput = {
  bigPlinthId?: InputMaybe<Scalars['MongoID']['input']>;
  littlePlinthId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateByIdBrandParametersScrapperStepsMapReportGeneratorInput = {
  chunksManifest?: InputMaybe<Array<UpdateByIdInputDocumentChunkManifestInput>>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<EnumBrandParametersScrapperStepsMapReportGeneratorMode>;
};

export type UpdateByIdBrandParametersScrapperStepsMapTerracePricerInput = {
  itemsCatalogId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateByIdBrandParametersScrapperStepsTapInput = {
  outputToApi?: InputMaybe<UpdateByIdBrandParametersScrapperStepsTapOutputToApiInput>;
  sendEmail?: InputMaybe<UpdateByIdBrandParametersScrapperStepsTapSendEmailInput>;
};

export type UpdateByIdBrandParametersScrapperStepsTapOutputToApiInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  signPayload?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdBrandParametersScrapperStepsTapSendEmailInput = {
  attachmentName?: InputMaybe<Scalars['String']['input']>;
  dynamicParameterEmailAdress?: InputMaybe<Scalars['String']['input']>;
  emailSourceType?: InputMaybe<EnumBrandParametersScrapperStepsTapSendEmailEmailSourceType>;
  sendReportAsAttachment?: InputMaybe<Scalars['Boolean']['input']>;
  staticEmailAdress?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBrandParametersScrapperWatermarkInput = {
  alpha?: InputMaybe<Scalars['Float']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  repetition?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdBrandParametersTunnelApertureParametersInput = {
  doorClassicDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntryDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntrySidelightDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorExteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doorInteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doubleDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleSwingDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  garageDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  simpleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  slitWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  windowCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  windowDefaultItem?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBrandParametersTunnelColorsParametersInput = {
  nameHelpAtlas?: InputMaybe<Scalars['String']['input']>;
  nameOptionsAtlas?: InputMaybe<Scalars['String']['input']>;
  nameToolsAtlas?: InputMaybe<Scalars['String']['input']>;
  primary?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBrandParametersTunnelCustomLinkButtonInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBrandParametersTunnelDefaultCameraParametersInput = {
  visitCameraParameters?: InputMaybe<UpdateByIdBrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput>;
};

export type UpdateByIdBrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput = {
  defaultVisitFieldOfView?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdBrandParametersTunnelDefaultCoatingParametersInput = {
  defaultExteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultGardenFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultInteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateByIdBrandParametersTunnelInput = {
  apertureParameters?: InputMaybe<UpdateByIdBrandParametersTunnelApertureParametersInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colorsParameters?: InputMaybe<UpdateByIdBrandParametersTunnelColorsParametersInput>;
  customLinkButton?: InputMaybe<UpdateByIdBrandParametersTunnelCustomLinkButtonInput>;
  defaultCameraParameters?: InputMaybe<UpdateByIdBrandParametersTunnelDefaultCameraParametersInput>;
  defaultCoatingParameters?: InputMaybe<UpdateByIdBrandParametersTunnelDefaultCoatingParametersInput>;
  defaultDayTime?: InputMaybe<Scalars['Float']['input']>;
  defaultSnapDistance?: InputMaybe<Scalars['Float']['input']>;
  disableHeaderShadow?: InputMaybe<Scalars['Boolean']['input']>;
  displayCartItemNumber?: InputMaybe<Scalars['Boolean']['input']>;
  displayCustomisationTagFurnitureOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displayFurnitureSubstitutesOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displaySaveName?: InputMaybe<Scalars['Boolean']['input']>;
  displayStepsHeader?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  globalOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  includeAllBrandItemsInCache?: InputMaybe<Scalars['Boolean']['input']>;
  initialStepIfLoadingSave?: InputMaybe<Scalars['Float']['input']>;
  isReloadFromLocalStorageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  logoLinkOnClick?: InputMaybe<Scalars['String']['input']>;
  logoPictureReference?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  persistentVariables?: InputMaybe<Array<UpdateByIdBrandParametersTunnelPersistentVariablesInput>>;
  preload?: InputMaybe<Scalars['Boolean']['input']>;
  savePanelParameters?: InputMaybe<UpdateByIdBrandParametersTunnelSavePanelParametersInput>;
  steps?: InputMaybe<Array<UpdateByIdBrandParametersTunnelStepInput>>;
  wallParameters?: InputMaybe<UpdateByIdBrandParametersTunnelWallParametersInput>;
};

export type UpdateByIdBrandParametersTunnelPayload = {
  __typename?: 'UpdateByIdBrandParametersTunnelPayload';
  /** Updated document */
  record?: Maybe<BrandParametersTunnel>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdBrandParametersTunnelPersistentVariablesInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdBrandParametersTunnelSavePanelParametersInput = {
  isCustomerModuleEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isExportButtonEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdBrandParametersTunnelStepInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  analytics?: InputMaybe<UpdateByIdBrandParametersTunnelStepsAnalyticsInput>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  isShownInStepper?: InputMaybe<Scalars['Boolean']['input']>;
  module?: InputMaybe<EnumBrandParametersTunnelStepsModule>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  resetTunnelOnActivation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdBrandParametersTunnelStepsAnalyticsChoiceReducerInput = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  stateProperties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateByIdBrandParametersTunnelStepsAnalyticsInput = {
  choiceReducer?: InputMaybe<UpdateByIdBrandParametersTunnelStepsAnalyticsChoiceReducerInput>;
};

export type UpdateByIdBrandParametersTunnelWallParametersExteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type UpdateByIdBrandParametersTunnelWallParametersInput = {
  doorLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  exteriorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  exteriorWallThickness?: InputMaybe<UpdateByIdBrandParametersTunnelWallParametersExteriorWallThicknessInput>;
  floorHeight?: InputMaybe<Scalars['Float']['input']>;
  groundFloorLevel?: InputMaybe<Scalars['Float']['input']>;
  innerHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorWallThickness?: InputMaybe<UpdateByIdBrandParametersTunnelWallParametersInteriorWallThicknessInput>;
  optionsPanelWallConfig?: InputMaybe<UpdateByIdBrandParametersTunnelWallParametersOptionsPanelWallConfigInput>;
  windowLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  windowSillLevel?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdBrandParametersTunnelWallParametersInteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type UpdateByIdBrandParametersTunnelWallParametersOptionsPanelWallConfigInput = {
  displayOnlyWallType?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightExteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightInteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessDropdown?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessInput?: InputMaybe<Scalars['Boolean']['input']>;
  usePartitionLabelForInteriorWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdBrandPayload = {
  __typename?: 'UpdateByIdBrandPayload';
  /** Updated document */
  record?: Maybe<Brand>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdBrandPromoterWebsiteConfigurationInput = {
  acquirerValidateUnitAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  metadataConfiguration?: InputMaybe<UpdateByIdBrandPromoterWebsiteConfigurationMetadataConfigurationInput>;
  operatorTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  promoterValidateTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  unitTypeSaveModelId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateByIdBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataType>;
};

export type UpdateByIdBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataType>;
};

export type UpdateByIdBrandPromoterWebsiteConfigurationMetadataConfigurationInput = {
  apartmentUnitMetadata?: InputMaybe<Array<UpdateByIdBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput>>;
  apartmentUnitTypeIdMetadataKey?: InputMaybe<Scalars['String']['input']>;
  apartmentUnitTypeMetadata?: InputMaybe<Array<UpdateByIdBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput>>;
  programMetadata?: InputMaybe<Array<UpdateByIdBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput>>;
};

export type UpdateByIdBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataType>;
};

export type UpdateByIdBrandSatelliteConfigurationInput = {
  satelliteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdCatalogFolderInput = {
  associatedEcotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  brand?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  iconId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<UpdateByIdCatalogFolderMetadataInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  rootId?: InputMaybe<Scalars['MongoID']['input']>;
  sharedWithIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailId?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tiles?: InputMaybe<Array<InputMaybe<UpdateByIdCatalogFolderTilesInput>>>;
  tilesBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  tilesColumnAmount?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnGap?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  tilesRowGap?: InputMaybe<Scalars['Float']['input']>;
  tilesRowSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  type?: InputMaybe<EnumCatalogFolderType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  virtual?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdCatalogFolderMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdCatalogFolderPayload = {
  __typename?: 'UpdateByIdCatalogFolderPayload';
  /** Updated document */
  record?: Maybe<CatalogFolder>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdCatalogFolderTilesImagePlacementInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdCatalogFolderTilesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  advancedTextTranslations?: InputMaybe<Scalars['Translations']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundOpacity?: InputMaybe<Scalars['Float']['input']>;
  borderRadius?: InputMaybe<Scalars['Float']['input']>;
  catalogSourceId?: InputMaybe<Scalars['MongoID']['input']>;
  construction?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionTextSize?: InputMaybe<Scalars['Float']['input']>;
  folder?: InputMaybe<Scalars['MongoID']['input']>;
  hasShadow?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  horizontalTextAlignement?: InputMaybe<EnumCatalogFolderTilesHorizontalTextAlignement>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  imagePlacement?: InputMaybe<UpdateByIdCatalogFolderTilesImagePlacementInput>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isImagePlacementFree?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  item?: InputMaybe<Scalars['MongoID']['input']>;
  itemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  mask?: InputMaybe<Scalars['Boolean']['input']>;
  maskColor?: InputMaybe<Scalars['String']['input']>;
  maskOpacity?: InputMaybe<Scalars['Float']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<UpdateByIdCatalogFolderTilesMetadataInput>>>;
  posX?: InputMaybe<Scalars['Float']['input']>;
  posY?: InputMaybe<Scalars['Float']['input']>;
  saveSelectedInTunnelStateVariable?: InputMaybe<Scalars['String']['input']>;
  stylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textDescriptionTranslations?: InputMaybe<Scalars['Translations']['input']>;
  textPadding?: InputMaybe<UpdateByIdCatalogFolderTilesTextPaddingInput>;
  textTitleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTextColor?: InputMaybe<Scalars['String']['input']>;
  titleTextSize?: InputMaybe<Scalars['Float']['input']>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumCatalogFolderTilesType>;
  useAdvancedText?: InputMaybe<Scalars['Boolean']['input']>;
  verticalTextAlignement?: InputMaybe<EnumCatalogFolderTilesVerticalTextAlignement>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdCatalogFolderTilesMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdCatalogFolderTilesTextPaddingInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdContactInformationInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  interlocutor?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<EnumContactInformationState>;
};

export type UpdateByIdContactInformationPayload = {
  __typename?: 'UpdateByIdContactInformationPayload';
  /** Updated document */
  record?: Maybe<ContactInformation>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdCustomerInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  firstnameAdditional?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  genderAdditional?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  surnameAdditional?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdCustomerPayload = {
  __typename?: 'UpdateByIdCustomerPayload';
  /** Updated document */
  record?: Maybe<Customer>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

/** Configures the parameters of one or multiple chunks in the document. */
export type UpdateByIdInputDocumentChunkManifestInput = {
  /** Render-time parameters object, implementing the chunk's parameters schema as given in the output manifest. The type of this property is loosely-typed in GraphQL, but verified at runtime against that schema. If the parameters passed are invalid against the schema, the chunk will be disabled and a manifest warning will be issued. */
  parameters?: InputMaybe<Scalars['JSONObject']['input']>;
  /** A path selector to target one or multiple chunks, since it can be a bash-like glob pattern, ex. "/my-section/my-chunk-123", "/my-section/my-chunk-*", "/**\/my-chunk-*", etc. */
  path?: InputMaybe<Scalars['String']['input']>;
  /** Defines whether the chunk should be rendered in the document. If set "false" on a group chunk, it applies to its children recursively. */
  render?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemCustomisationCoverPlanesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItem?: InputMaybe<Scalars['MongoID']['input']>;
  hideForSingleObject?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<EnumItemCustomisationCoverPlanesMode>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  positions?: InputMaybe<UpdateByIdItemCustomisationCoverPlanesPositionsInput>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemCustomisationCoverPlanesPositionsInput = {
  above?: InputMaybe<Scalars['Boolean']['input']>;
  behind?: InputMaybe<Scalars['Boolean']['input']>;
  front?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemCustomisationMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPalette?: InputMaybe<Scalars['MongoID']['input']>;
  materials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumItemCustomisationMaterialsType>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemCustomisationSubObjectsHooksInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation?: InputMaybe<UpdateByIdItemCustomisationSubObjectsHooksOrientationInput>;
  position?: InputMaybe<UpdateByIdItemCustomisationSubObjectsHooksPositionInput>;
  type?: InputMaybe<EnumItemCustomisationSubObjectsHooksType>;
};

export type UpdateByIdItemCustomisationSubObjectsHooksOrientationInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemCustomisationSubObjectsHooksPositionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemCustomisationSubObjectsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  hooks?: InputMaybe<Array<InputMaybe<UpdateByIdItemCustomisationSubObjectsHooksInput>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemCustomisationSymbolicRepresentationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  anglePositionIsRight?: InputMaybe<Scalars['Boolean']['input']>;
  break3D?: InputMaybe<Scalars['Boolean']['input']>;
  colors?: InputMaybe<EnumItemCustomisationSymbolicRepresentationColors>;
  displayDiagonals?: InputMaybe<Scalars['Boolean']['input']>;
  doorType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationDoorType>;
  drawerCount?: InputMaybe<Scalars['Float']['input']>;
  symbolicIcon?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIcon>;
  symbolicIconShape?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconShape>;
  symbolicIconSubType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconSubType>;
  type?: InputMaybe<EnumItemCustomisationSymbolicRepresentationType>;
};

export type UpdateByIdItemFactSheetInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONObject']['input']>;
  logoPicture?: InputMaybe<Scalars['String']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdItemGuardrailInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  meshes?: InputMaybe<Array<InputMaybe<UpdateByIdItemGuardrailInformationsMeshesInput>>>;
};

export type UpdateByIdItemGuardrailInformationsMeshesDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemGuardrailInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  dimensions?: InputMaybe<UpdateByIdItemGuardrailInformationsMeshesDimensionsInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  options?: InputMaybe<UpdateByIdItemGuardrailInformationsMeshesOptionsInput>;
  placing?: InputMaybe<UpdateByIdItemGuardrailInformationsMeshesPlacingInput>;
  surface?: InputMaybe<UpdateByIdItemGuardrailInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemGuardrailInformationsMeshesType>;
};

export type UpdateByIdItemGuardrailInformationsMeshesOptionsInput = {
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemGuardrailInformationsMeshesOptionsShape>;
};

export type UpdateByIdItemGuardrailInformationsMeshesPlacingInput = {
  elevation?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemGuardrailInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemInput = {
  articleCode?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  buildingWingInfos?: InputMaybe<Scalars['String']['input']>;
  canBeCutAlongHeight?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongLength?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongWidth?: InputMaybe<Scalars['Boolean']['input']>;
  canBeDroppedOnZones?: InputMaybe<Array<EnumItemCanBeDroppedOnZones>>;
  categoriesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  compositeInfos?: InputMaybe<Scalars['String']['input']>;
  consideredAsDroppableZones?: InputMaybe<Array<EnumItemConsideredAsDroppableZones>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  customisationByItemsGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationCoverPlanes?: InputMaybe<Array<UpdateByIdItemCustomisationCoverPlanesInput>>;
  customisationMaterials?: InputMaybe<Array<UpdateByIdItemCustomisationMaterialsInput>>;
  customisationSubObjects?: InputMaybe<Array<UpdateByIdItemCustomisationSubObjectsInput>>;
  customisationSymbolicRepresentation?: InputMaybe<UpdateByIdItemCustomisationSymbolicRepresentationInput>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  factSheet?: InputMaybe<UpdateByIdItemFactSheetInput>;
  guardrailInformations?: InputMaybe<UpdateByIdItemGuardrailInformationsInput>;
  metadata?: InputMaybe<Array<UpdateByIdItemMetadataInput>>;
  minimumPricedDimensions?: InputMaybe<UpdateByIdItemMinimumPricedDimensionsInput>;
  modelUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  outputAssets?: InputMaybe<UpdateByIdItemOutputAssetsInput>;
  physicalHeight?: InputMaybe<Scalars['String']['input']>;
  physicalLength?: InputMaybe<Scalars['String']['input']>;
  physicalWidth?: InputMaybe<Scalars['String']['input']>;
  pillarInformations?: InputMaybe<UpdateByIdItemPillarInformationsInput>;
  priceCoefExclusion?: InputMaybe<Scalars['Boolean']['input']>;
  priceGeneration?: InputMaybe<EnumItemPriceGeneration>;
  priceUnit?: InputMaybe<EnumItemPriceUnit>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  roofInformations?: InputMaybe<UpdateByIdItemRoofInformationsInput>;
  scrapperTag?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stairsInformations?: InputMaybe<UpdateByIdItemStairsInformationsInput>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tooltip3DTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumItemType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
  vegetationInformations?: InputMaybe<UpdateByIdItemVegetationInformationsInput>;
  wallInformations?: InputMaybe<UpdateByIdItemWallInformationsInput>;
};

export type UpdateByIdItemMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdItemMinimumPricedDimensionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdItemOutputAssetsCoatingVariantsAlbedoInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type UpdateByIdItemOutputAssetsCoatingVariantsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  albedo?: InputMaybe<UpdateByIdItemOutputAssetsCoatingVariantsAlbedoInput>;
  metallic?: InputMaybe<UpdateByIdItemOutputAssetsCoatingVariantsAlbedoInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  normal?: InputMaybe<UpdateByIdItemOutputAssetsCoatingVariantsAlbedoInput>;
  smoothness?: InputMaybe<UpdateByIdItemOutputAssetsCoatingVariantsAlbedoInput>;
};

export type UpdateByIdItemOutputAssetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  coatingVariants?: InputMaybe<Array<InputMaybe<UpdateByIdItemOutputAssetsCoatingVariantsInput>>>;
};

export type UpdateByIdItemPayload = {
  __typename?: 'UpdateByIdItemPayload';
  /** Updated document */
  record?: Maybe<Item>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdItemPillarInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  cylinderSides?: InputMaybe<Scalars['Float']['input']>;
  materials?: InputMaybe<Array<InputMaybe<UpdateByIdItemPillarInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<UpdateByIdItemPillarInformationsModelsInput>>>;
  necking?: InputMaybe<UpdateByIdItemPillarInformationsNeckingInput>;
};

export type UpdateByIdItemPillarInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsMaterialsType>;
};

export type UpdateByIdItemPillarInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemPillarInformationsNeckingCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemPillarInformationsNeckingInput = {
  crossSection?: InputMaybe<UpdateByIdItemPillarInformationsNeckingCrossSectionInput>;
  distanceToTop?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsCoveringInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  ridgeTiles?: InputMaybe<UpdateByIdItemRoofInformationsCoveringRidgeTilesInput>;
  sealingThickness?: InputMaybe<Scalars['Float']['input']>;
  spaceBetweenSealingAndTiles?: InputMaybe<Scalars['Float']['input']>;
  tilesThickness?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsCoveringRidgeTilesInput = {
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsEavesStyleInput = {
  type?: InputMaybe<EnumItemRoofInformationsEavesStyleType>;
};

export type UpdateByIdItemRoofInformationsFlatRoofBorderDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsFlatRoofInput = {
  borderDimensions?: InputMaybe<UpdateByIdItemRoofInformationsFlatRoofBorderDimensionsInput>;
  gravelThickness?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemRoofInformationsFramingInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  pieces?: InputMaybe<Array<InputMaybe<UpdateByIdItemRoofInformationsFramingPiecesInput>>>;
  type?: InputMaybe<EnumItemRoofInformationsFramingType>;
};

export type UpdateByIdItemRoofInformationsFramingPiecesEnd_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsFramingPiecesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  end_coordinate?: InputMaybe<UpdateByIdItemRoofInformationsFramingPiecesEnd_CoordinateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_coordinate?: InputMaybe<UpdateByIdItemRoofInformationsFramingPiecesStart_CoordinateInput>;
  type?: InputMaybe<EnumItemRoofInformationsFramingPiecesType>;
};

export type UpdateByIdItemRoofInformationsFramingPiecesStart_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsGutterInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  covering?: InputMaybe<UpdateByIdItemRoofInformationsCoveringInput>;
  eavesStyle?: InputMaybe<UpdateByIdItemRoofInformationsEavesStyleInput>;
  flatRoof?: InputMaybe<UpdateByIdItemRoofInformationsFlatRoofInput>;
  framing?: InputMaybe<UpdateByIdItemRoofInformationsFramingInput>;
  gutter?: InputMaybe<UpdateByIdItemRoofInformationsGutterInput>;
  materials?: InputMaybe<Array<InputMaybe<UpdateByIdItemRoofInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<UpdateByIdItemRoofInformationsModelsInput>>>;
  overhang?: InputMaybe<UpdateByIdItemRoofInformationsOverhangInput>;
  purlins?: InputMaybe<UpdateByIdItemRoofInformationsPurlinsInput>;
  rafters?: InputMaybe<UpdateByIdItemRoofInformationsRaftersInput>;
  ridgeBoard?: InputMaybe<UpdateByIdItemRoofInformationsRidgeBoardInput>;
  solarPanels?: InputMaybe<UpdateByIdItemRoofInformationsSolarPanelsInput>;
  topPlate?: InputMaybe<UpdateByIdItemRoofInformationsTopPlateInput>;
};

export type UpdateByIdItemRoofInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsMaterialsType>;
};

export type UpdateByIdItemRoofInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsOverhangInput = {
  bargeboard?: InputMaybe<Scalars['Float']['input']>;
  bargeboardPurlins?: InputMaybe<Scalars['Float']['input']>;
  bargeboardRafters?: InputMaybe<Scalars['Float']['input']>;
  eave?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemRoofInformationsPurlinsBottomInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsPurlinsInput = {
  bottom?: InputMaybe<UpdateByIdItemRoofInformationsPurlinsBottomInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  intermediate?: InputMaybe<UpdateByIdItemRoofInformationsPurlinsIntermediateInput>;
  ridge?: InputMaybe<UpdateByIdItemRoofInformationsPurlinsRidgeInput>;
};

export type UpdateByIdItemRoofInformationsPurlinsIntermediateInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsPurlinsRidgeInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsRaftersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsRaftersInput = {
  crossSection?: InputMaybe<UpdateByIdItemRoofInformationsRaftersCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsRidgeBoardCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsRidgeBoardInput = {
  crossSection?: InputMaybe<UpdateByIdItemRoofInformationsRidgeBoardCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemRoofInformationsSolarPanelsFrameInput = {
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsSolarPanelsInput = {
  distanceToRoof?: InputMaybe<Scalars['Float']['input']>;
  frame?: InputMaybe<UpdateByIdItemRoofInformationsSolarPanelsFrameInput>;
  height?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsTopPlateCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemRoofInformationsTopPlateInput = {
  crossSection?: InputMaybe<UpdateByIdItemRoofInformationsTopPlateCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemStairsInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  landing?: InputMaybe<UpdateByIdItemStairsInformationsLandingInput>;
  materials?: InputMaybe<Array<InputMaybe<UpdateByIdItemStairsInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<UpdateByIdItemStairsInformationsModelsInput>>>;
  railing?: InputMaybe<UpdateByIdItemStairsInformationsRailingInput>;
  steps?: InputMaybe<UpdateByIdItemStairsInformationsStepsInput>;
  stringers?: InputMaybe<UpdateByIdItemStairsInformationsStringersInput>;
};

export type UpdateByIdItemStairsInformationsLandingInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemStairsInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsMaterialsType>;
};

export type UpdateByIdItemStairsInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemStairsInformationsRailingBalustersInput = {
  radius?: InputMaybe<Scalars['Float']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemStairsInformationsRailingHandrailCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemStairsInformationsRailingHandrailInput = {
  crossSection?: InputMaybe<UpdateByIdItemStairsInformationsRailingHandrailCrossSectionInput>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemStairsInformationsRailingInput = {
  balusters?: InputMaybe<UpdateByIdItemStairsInformationsRailingBalustersInput>;
  handrail?: InputMaybe<UpdateByIdItemStairsInformationsRailingHandrailInput>;
  posts?: InputMaybe<UpdateByIdItemStairsInformationsRailingPostsInput>;
};

export type UpdateByIdItemStairsInformationsRailingPostsCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemStairsInformationsRailingPostsInput = {
  crossSection?: InputMaybe<UpdateByIdItemStairsInformationsRailingPostsCrossSectionInput>;
};

export type UpdateByIdItemStairsInformationsStepsInput = {
  risers?: InputMaybe<UpdateByIdItemStairsInformationsStepsRisersInput>;
  treats?: InputMaybe<UpdateByIdItemStairsInformationsStepsTreatsInput>;
};

export type UpdateByIdItemStairsInformationsStepsRisersInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemStairsInformationsStepsTreatsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  nose?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemStairsInformationsStringersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemStairsInformationsStringersInput = {
  crossSection?: InputMaybe<UpdateByIdItemStairsInformationsStringersCrossSectionInput>;
  overTreat?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemVegetationInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  canBeSelected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemWallInformationsApplicationInput = {
  bothSides?: InputMaybe<Scalars['Boolean']['input']>;
  exteriorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  overRegularWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemWallInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  application?: InputMaybe<UpdateByIdItemWallInformationsApplicationInput>;
  class?: InputMaybe<EnumItemWallInformationsClass>;
  meshes?: InputMaybe<Array<InputMaybe<UpdateByIdItemWallInformationsMeshesInput>>>;
};

export type UpdateByIdItemWallInformationsMeshesDimensionsInput = {
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemWallInformationsMeshesDisplayInput = {
  autoCut?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsHigh?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsLow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemWallInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buildingMaterial?: InputMaybe<EnumItemWallInformationsMeshesBuildingMaterial>;
  dimensions?: InputMaybe<UpdateByIdItemWallInformationsMeshesDimensionsInput>;
  display?: InputMaybe<UpdateByIdItemWallInformationsMeshesDisplayInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<UpdateByIdItemWallInformationsMeshesOptionsInput>;
  overlapPriority?: InputMaybe<Scalars['Float']['input']>;
  placing?: InputMaybe<UpdateByIdItemWallInformationsMeshesPlacingInput>;
  segmentTypes?: InputMaybe<UpdateByIdItemWallInformationsMeshesSegmentTypesInput>;
  surface?: InputMaybe<UpdateByIdItemWallInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemWallInformationsMeshesType>;
};

export type UpdateByIdItemWallInformationsMeshesOptionsInput = {
  closeBack?: InputMaybe<Scalars['Boolean']['input']>;
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeFront?: InputMaybe<Scalars['Boolean']['input']>;
  closeSides?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  nextToDoorsAndWindows?: InputMaybe<Scalars['Boolean']['input']>;
  paintable?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemWallInformationsMeshesOptionsShape>;
  skewOnCorners?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemWallInformationsMeshesPlacingBottomElevationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingBottomElevationReference>;
};

export type UpdateByIdItemWallInformationsMeshesPlacingInput = {
  beamDirection?: InputMaybe<EnumItemWallInformationsMeshesPlacingBeamDirection>;
  bottomElevation?: InputMaybe<UpdateByIdItemWallInformationsMeshesPlacingBottomElevationInput>;
  depthOffset?: InputMaybe<Scalars['Float']['input']>;
  doorPostOffset?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  endDepth?: InputMaybe<UpdateByIdItemWallInformationsMeshesPlacingStartDepthInput>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  moveVerticesAbove?: InputMaybe<Scalars['Float']['input']>;
  pivotIsOnTop?: InputMaybe<Scalars['Boolean']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
  repetitionFilter?: InputMaybe<EnumItemWallInformationsMeshesPlacingRepetitionFilter>;
  startDepth?: InputMaybe<UpdateByIdItemWallInformationsMeshesPlacingStartDepthInput>;
  stretchVertically?: InputMaybe<Scalars['Boolean']['input']>;
  topElevation?: InputMaybe<UpdateByIdItemWallInformationsMeshesPlacingBottomElevationInput>;
};

export type UpdateByIdItemWallInformationsMeshesPlacingStartDepthInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  plusOnTop?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingStartDepthReference>;
};

export type UpdateByIdItemWallInformationsMeshesSegmentTypesInput = {
  doors?: InputMaybe<Scalars['Boolean']['input']>;
  walls?: InputMaybe<Scalars['Boolean']['input']>;
  windows?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemWallInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
  swapUV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByIdItemsGroupInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  generated?: InputMaybe<Scalars['Boolean']['input']>;
  itemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  option?: InputMaybe<UpdateByIdItemsGroupOptionInput>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  shouldBeOpenInGUI?: InputMaybe<Scalars['Boolean']['input']>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumItemsGroupType>;
};

export type UpdateByIdItemsGroupOptionInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  baseItemId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  disableDefaultChoice?: InputMaybe<Scalars['Boolean']['input']>;
  positions?: InputMaybe<Array<UpdateByIdItemsGroupOptionPositionsInput>>;
};

export type UpdateByIdItemsGroupOptionPositionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  margins?: InputMaybe<UpdateByIdItemsGroupOptionPositionsMarginsInput>;
  placement?: InputMaybe<EnumItemsGroupOptionPositionsPlacement>;
  rotation?: InputMaybe<EnumItemsGroupOptionPositionsRotation>;
};

export type UpdateByIdItemsGroupOptionPositionsMarginsInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdItemsGroupPayload = {
  __typename?: 'UpdateByIdItemsGroupPayload';
  /** Updated document */
  record?: Maybe<ItemsGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdPaletteColorsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  a?: InputMaybe<Scalars['Float']['input']>;
  b?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  g?: InputMaybe<Scalars['Float']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  r?: InputMaybe<Scalars['Float']['input']>;
  roughness?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdPaletteInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colors?: InputMaybe<Array<InputMaybe<UpdateByIdPaletteColorsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumPaletteType>;
};

export type UpdateByIdPalettePayload = {
  __typename?: 'UpdateByIdPalettePayload';
  /** Updated document */
  record?: Maybe<Palette>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdPictureInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdPicturePayload = {
  __typename?: 'UpdateByIdPicturePayload';
  /** Updated document */
  record?: Maybe<Picture>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdPipelineJobInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  completedDate?: InputMaybe<Scalars['Date']['input']>;
  settings?: InputMaybe<UpdateByIdPipelineJobSettingsInput>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state?: InputMaybe<EnumPipelineJobState>;
  submitDate?: InputMaybe<Scalars['Date']['input']>;
  type?: InputMaybe<EnumPipelineJobType>;
};

export type UpdateByIdPipelineJobPayload = {
  __typename?: 'UpdateByIdPipelineJobPayload';
  /** Updated document */
  record?: Maybe<PipelineJob>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdPipelineJobSettingsConvertPbrMaterialToAssetBundleInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  assetUrl?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateByIdPipelineJobSettingsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  convertPBRMaterialToAssetBundle?: InputMaybe<UpdateByIdPipelineJobSettingsConvertPbrMaterialToAssetBundleInput>;
};

export type UpdateByIdPlannedMaintenanceInput = {
  durationHours?: InputMaybe<Scalars['Float']['input']>;
  reasonTranslations?: InputMaybe<Scalars['Translations']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateByIdPlannedMaintenancePayload = {
  __typename?: 'UpdateByIdPlannedMaintenancePayload';
  /** Updated document */
  record?: Maybe<PlannedMaintenance>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdPriceTableInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  currencyName?: InputMaybe<Scalars['String']['input']>;
  displayEan?: InputMaybe<Scalars['Boolean']['input']>;
  globalDiscount?: InputMaybe<Scalars['Float']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  multiplyingCoefficient?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<InputMaybe<UpdateByIdPriceTablePricesInput>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  vatRate?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdPriceTablePayload = {
  __typename?: 'UpdateByIdPriceTablePayload';
  /** Updated document */
  record?: Maybe<PriceTable>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdPriceTablePricesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  articleIdentifier?: InputMaybe<Scalars['String']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  itemsIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  sourceItemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateByIdProductScanInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  creationDate?: InputMaybe<Scalars['Date']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  scans?: InputMaybe<Array<InputMaybe<UpdateByIdProductScanScansInput>>>;
  size?: InputMaybe<UpdateByIdProductScanSizeInput>;
  state?: InputMaybe<EnumProductScanState>;
  thumbnail?: InputMaybe<UpdateByIdProductScanScansInputImagesInput>;
};

export type UpdateByIdProductScanPayload = {
  __typename?: 'UpdateByIdProductScanPayload';
  /** Updated document */
  record?: Maybe<ProductScan>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdProductScanScansInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  generatedImages?: InputMaybe<Array<InputMaybe<UpdateByIdProductScanScansInputImagesInput>>>;
  inputImages?: InputMaybe<Array<InputMaybe<UpdateByIdProductScanScansInputImagesInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumProductScanScansType>;
};

export type UpdateByIdProductScanScansInputImagesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  format: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type UpdateByIdProductScanSizeInput = {
  height?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdPromoterApartmentUnitInput = {
  buildingNumber?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  purchaserFirstName?: InputMaybe<Scalars['String']['input']>;
  purchaserMail?: InputMaybe<Scalars['String']['input']>;
  purchaserSurname?: InputMaybe<Scalars['String']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitState>;
  unitNumber?: InputMaybe<Scalars['String']['input']>;
  unitTypeId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateByIdPromoterApartmentUnitPayload = {
  __typename?: 'UpdateByIdPromoterApartmentUnitPayload';
  /** Updated document */
  record?: Maybe<PromoterApartmentUnit>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdPromoterApartmentUnitTypeHistoryInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  saveId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitTypeHistoryState>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateByIdPromoterApartmentUnitTypeInput = {
  currentVersion?: InputMaybe<Scalars['Int']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONObject']['input']>;
  history?: InputMaybe<Array<UpdateByIdPromoterApartmentUnitTypeHistoryInput>>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  state?: InputMaybe<EnumPromoterApartmentUnitTypeState>;
};

export type UpdateByIdPromoterApartmentUnitTypePayload = {
  __typename?: 'UpdateByIdPromoterApartmentUnitTypePayload';
  /** Updated document */
  record?: Maybe<PromoterApartmentUnitType>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdPromoterProgramInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  itemFilter?: InputMaybe<UpdateByIdPromoterProgramItemFilterInput>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planEditor?: InputMaybe<UpdateByIdPromoterProgramPlanEditorInput>;
  planUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  promoterId?: InputMaybe<Scalars['MongoID']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<EnumPromoterProgramState>;
  stylePresetGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  zipCode?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdPromoterProgramItemFilterInput = {
  itemWhiteList?: InputMaybe<Array<Scalars['MongoID']['input']>>;
};

export type UpdateByIdPromoterProgramPayload = {
  __typename?: 'UpdateByIdPromoterProgramPayload';
  /** Updated document */
  record?: Maybe<PromoterProgram>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdPromoterProgramPlanEditorInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  dataFormatVersion?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateByIdSalesRecordInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  finalCustomerMetadata?: InputMaybe<Scalars['Metadata']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
};

export type UpdateByIdSalesRecordPayload = {
  __typename?: 'UpdateByIdSalesRecordPayload';
  /** Updated document */
  record?: Maybe<SalesRecord>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdSaveFolderInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['MongoID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateByIdSaveFolderPayload = {
  __typename?: 'UpdateByIdSaveFolderPayload';
  /** Updated document */
  record?: Maybe<SaveFolder>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdSavesGroupInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  savesIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumSavesGroupType>;
};

export type UpdateByIdSavesGroupPayload = {
  __typename?: 'UpdateByIdSavesGroupPayload';
  /** Updated document */
  record?: Maybe<SavesGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdSettingInput = {
  role?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateByIdSettingPayload = {
  __typename?: 'UpdateByIdSettingPayload';
  /** Updated document */
  record?: Maybe<Setting>;
  /** Document ID */
  recordId?: Maybe<Scalars['String']['output']>;
};

export type UpdateByIdStylePresetCustomisationPresetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  chosenItemId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationNameId?: InputMaybe<Scalars['String']['input']>;
  filterTag?: InputMaybe<Scalars['String']['input']>;
  rotationCondition?: InputMaybe<EnumStylePresetCustomisationPresetsRotationCondition>;
};

export type UpdateByIdStylePresetGroupInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stylePresetIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type UpdateByIdStylePresetGroupPayload = {
  __typename?: 'UpdateByIdStylePresetGroupPayload';
  /** Updated document */
  record?: Maybe<StylePresetGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdStylePresetInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  customisationPresets?: InputMaybe<Array<InputMaybe<UpdateByIdStylePresetCustomisationPresetsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateByIdStylePresetPayload = {
  __typename?: 'UpdateByIdStylePresetPayload';
  /** Updated document */
  record?: Maybe<StylePreset>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdTutorialInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  displayOnlyOnce?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<UpdateByIdTutorialPointInput>>;
};

export type UpdateByIdTutorialPayload = {
  __typename?: 'UpdateByIdTutorialPayload';
  /** Updated document */
  record?: Maybe<Tutorial>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdTutorialPointInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  illustration?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<EnumTutorialPointTarget>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
};

export type UpdateByIdUserInput = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  favoriteItemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  favoriteSavesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateByIdUserPayload = {
  __typename?: 'UpdateByIdUserPayload';
  /** Updated document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneAccessPointInput = {
  areSavesPubliclyAvailableById?: InputMaybe<Scalars['Boolean']['input']>;
  authorizedCatalogIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  ecotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parametersScrapperId?: InputMaybe<Scalars['MongoID']['input']>;
  parametersTunnelId?: InputMaybe<Scalars['MongoID']['input']>;
  priceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  supportButton?: InputMaybe<UpdateOneAccessPointSupportButtonInput>;
};

export type UpdateOneAccessPointPayload = {
  __typename?: 'UpdateOneAccessPointPayload';
  /** Updated document */
  record?: Maybe<AccessPoint>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneAccessPointSupportButtonInput = {
  icon?: InputMaybe<EnumAccessPointSupportButtonIcon>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumAccessPointSupportButtonType>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBarcodeCollectionBarcodeReferencesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBarcodeCollectionInput = {
  barcodeReferences?: InputMaybe<Array<UpdateOneBarcodeCollectionBarcodeReferencesInput>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateOneBarcodeCollectionPayload = {
  __typename?: 'UpdateOneBarcodeCollectionPayload';
  /** Updated document */
  record?: Maybe<BarcodeCollection>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneBrandColorsInput = {
  dataProtection?: InputMaybe<Scalars['String']['input']>;
  legalNotice?: InputMaybe<Scalars['String']['input']>;
  loadingScreenBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenLogoPicture?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBackground?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarBorder?: InputMaybe<Scalars['String']['input']>;
  loadingScreenProgressBarContent?: InputMaybe<Scalars['String']['input']>;
  loadingScreenText?: InputMaybe<Scalars['String']['input']>;
  meshes?: InputMaybe<UpdateOneBrandColorsMeshesInput>;
  planElement?: InputMaybe<UpdateOneBrandColorsPlanElementInput>;
  primary?: InputMaybe<Scalars['String']['input']>;
  questHeaderBackground?: InputMaybe<Scalars['String']['input']>;
  questHeaderBody?: InputMaybe<Scalars['String']['input']>;
  questHeaderTitle?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBrandColorsMeshesInput = {
  wallCut?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBrandColorsPlanElementInput = {
  floor?: InputMaybe<Scalars['String']['input']>;
  wall?: InputMaybe<Scalars['String']['input']>;
  window?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBrandInput = {
  colors?: InputMaybe<UpdateOneBrandColorsInput>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promoterWebsiteConfiguration?: InputMaybe<UpdateOneBrandPromoterWebsiteConfigurationInput>;
  satelliteConfiguration?: InputMaybe<UpdateOneBrandSatelliteConfigurationInput>;
  shareCode?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateOneBrandParametersPricingInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  useArticleCode?: InputMaybe<Scalars['Boolean']['input']>;
  useEAN?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneBrandParametersPricingPayload = {
  __typename?: 'UpdateOneBrandParametersPricingPayload';
  /** Updated document */
  record?: Maybe<BrandParametersPricing>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneBrandParametersScrapperInput = {
  allowAnonymousSave?: InputMaybe<Scalars['Boolean']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  export?: InputMaybe<Scalars['Boolean']['input']>;
  geometry?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  objects?: InputMaybe<Scalars['Boolean']['input']>;
  postManualSaveTriggerSteps?: InputMaybe<Array<UpdateOneBrandParametersScrapperPostManualSaveTriggerStepsInput>>;
  screenshots?: InputMaybe<Scalars['Boolean']['input']>;
  steps?: InputMaybe<Array<UpdateOneBrandParametersScrapperStepsInput>>;
  watermark?: InputMaybe<UpdateOneBrandParametersScrapperWatermarkInput>;
};

export type UpdateOneBrandParametersScrapperPayload = {
  __typename?: 'UpdateOneBrandParametersScrapperPayload';
  /** Updated document */
  record?: Maybe<BrandParametersScrapper>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneBrandParametersScrapperPostManualSaveTriggerStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  triggerPopup?: InputMaybe<UpdateOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput>;
  type?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsType>;
};

export type UpdateOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buttonType?: InputMaybe<EnumBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupButtonType>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  yesNoButtons?: InputMaybe<UpdateOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput>;
};

export type UpdateOneBrandParametersScrapperPostManualSaveTriggerStepsTriggerPopupYesNoButtonsInput = {
  stateProperty?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBrandParametersScrapperStepsFilterInput = {
  expression?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBrandParametersScrapperStepsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  filter?: InputMaybe<UpdateOneBrandParametersScrapperStepsFilterInput>;
  map?: InputMaybe<UpdateOneBrandParametersScrapperStepsMapInput>;
  stepType?: InputMaybe<EnumBrandParametersScrapperStepsStepType>;
  stepVerb?: InputMaybe<Scalars['String']['input']>;
  tap?: InputMaybe<UpdateOneBrandParametersScrapperStepsTapInput>;
  verbFilter?: InputMaybe<EnumBrandParametersScrapperStepsVerbFilter>;
  verbMap?: InputMaybe<EnumBrandParametersScrapperStepsVerbMap>;
  verbTap?: InputMaybe<EnumBrandParametersScrapperStepsVerbTap>;
};

export type UpdateOneBrandParametersScrapperStepsMapInput = {
  kitchenPricer?: InputMaybe<UpdateOneBrandParametersScrapperStepsMapKitchenPricerInput>;
  payloadGenerator?: InputMaybe<UpdateOneBrandParametersScrapperStepsMapPayloadGeneratorInput>;
  pdfReportGenerator?: InputMaybe<UpdateOneBrandParametersScrapperStepsMapPdfReportGeneratorInput>;
  plinthCalculator?: InputMaybe<UpdateOneBrandParametersScrapperStepsMapPlinthCalculatorInput>;
  reportGenerator?: InputMaybe<UpdateOneBrandParametersScrapperStepsMapReportGeneratorInput>;
  terracePricer?: InputMaybe<UpdateOneBrandParametersScrapperStepsMapTerracePricerInput>;
};

export type UpdateOneBrandParametersScrapperStepsMapKitchenPricerInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  barcodeCollectionId?: InputMaybe<Scalars['MongoID']['input']>;
  projectBaseUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBrandParametersScrapperStepsMapPayloadGeneratorInput = {
  addSaveName?: InputMaybe<Scalars['Boolean']['input']>;
  addUpdateToken?: InputMaybe<Scalars['Boolean']['input']>;
  dynamicParameterForTunnelStateInformation?: InputMaybe<Scalars['String']['input']>;
  tunnelStateKeys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateOneBrandParametersScrapperStepsMapPdfReportGeneratorInput = {
  payloadType?: InputMaybe<EnumBrandParametersScrapperStepsMapPdfReportGeneratorPayloadType>;
};

export type UpdateOneBrandParametersScrapperStepsMapPlinthCalculatorInput = {
  bigPlinthId?: InputMaybe<Scalars['MongoID']['input']>;
  littlePlinthId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateOneBrandParametersScrapperStepsMapReportGeneratorInput = {
  chunksManifest?: InputMaybe<Array<UpdateOneInputDocumentChunkManifestInput>>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<EnumBrandParametersScrapperStepsMapReportGeneratorMode>;
};

export type UpdateOneBrandParametersScrapperStepsMapTerracePricerInput = {
  itemsCatalogId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateOneBrandParametersScrapperStepsTapInput = {
  outputToApi?: InputMaybe<UpdateOneBrandParametersScrapperStepsTapOutputToApiInput>;
  sendEmail?: InputMaybe<UpdateOneBrandParametersScrapperStepsTapSendEmailInput>;
};

export type UpdateOneBrandParametersScrapperStepsTapOutputToApiInput = {
  apiToken?: InputMaybe<Scalars['String']['input']>;
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  signPayload?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneBrandParametersScrapperStepsTapSendEmailInput = {
  attachmentName?: InputMaybe<Scalars['String']['input']>;
  dynamicParameterEmailAdress?: InputMaybe<Scalars['String']['input']>;
  emailSourceType?: InputMaybe<EnumBrandParametersScrapperStepsTapSendEmailEmailSourceType>;
  sendReportAsAttachment?: InputMaybe<Scalars['Boolean']['input']>;
  staticEmailAdress?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBrandParametersScrapperWatermarkInput = {
  alpha?: InputMaybe<Scalars['Float']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  repetition?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneBrandParametersTunnelApertureParametersInput = {
  doorClassicDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntryDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorEntrySidelightDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doorExteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doorInteriorCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  doubleDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleSwingDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  doubleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  garageDoorDefaultItem?: InputMaybe<Scalars['String']['input']>;
  simpleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  slitWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleDoorlikeWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  tripleWindowDefaultItem?: InputMaybe<Scalars['String']['input']>;
  windowCustomisationItemsGroupId?: InputMaybe<Scalars['String']['input']>;
  windowDefaultItem?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBrandParametersTunnelColorsParametersInput = {
  nameHelpAtlas?: InputMaybe<Scalars['String']['input']>;
  nameOptionsAtlas?: InputMaybe<Scalars['String']['input']>;
  nameToolsAtlas?: InputMaybe<Scalars['String']['input']>;
  primary?: InputMaybe<Scalars['String']['input']>;
  secondary?: InputMaybe<Scalars['String']['input']>;
  stepperBackground?: InputMaybe<Scalars['String']['input']>;
  stepperContent?: InputMaybe<Scalars['String']['input']>;
  stepperText?: InputMaybe<Scalars['String']['input']>;
  tertiary?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBrandParametersTunnelCustomLinkButtonInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBrandParametersTunnelDefaultCameraParametersInput = {
  visitCameraParameters?: InputMaybe<UpdateOneBrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput>;
};

export type UpdateOneBrandParametersTunnelDefaultCameraParametersVisitCameraParametersInput = {
  defaultVisitFieldOfView?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneBrandParametersTunnelDefaultCoatingParametersInput = {
  defaultExteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultGardenFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
  defaultInteriorFlooringId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateOneBrandParametersTunnelInput = {
  apertureParameters?: InputMaybe<UpdateOneBrandParametersTunnelApertureParametersInput>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colorsParameters?: InputMaybe<UpdateOneBrandParametersTunnelColorsParametersInput>;
  customLinkButton?: InputMaybe<UpdateOneBrandParametersTunnelCustomLinkButtonInput>;
  defaultCameraParameters?: InputMaybe<UpdateOneBrandParametersTunnelDefaultCameraParametersInput>;
  defaultCoatingParameters?: InputMaybe<UpdateOneBrandParametersTunnelDefaultCoatingParametersInput>;
  defaultDayTime?: InputMaybe<Scalars['Float']['input']>;
  defaultSnapDistance?: InputMaybe<Scalars['Float']['input']>;
  disableHeaderShadow?: InputMaybe<Scalars['Boolean']['input']>;
  displayCartItemNumber?: InputMaybe<Scalars['Boolean']['input']>;
  displayCustomisationTagFurnitureOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displayFurnitureSubstitutesOptions?: InputMaybe<Scalars['Boolean']['input']>;
  displaySaveName?: InputMaybe<Scalars['Boolean']['input']>;
  displayStepsHeader?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  globalOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  includeAllBrandItemsInCache?: InputMaybe<Scalars['Boolean']['input']>;
  initialStepIfLoadingSave?: InputMaybe<Scalars['Float']['input']>;
  isReloadFromLocalStorageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  logoLinkOnClick?: InputMaybe<Scalars['String']['input']>;
  logoPictureReference?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  persistentVariables?: InputMaybe<Array<UpdateOneBrandParametersTunnelPersistentVariablesInput>>;
  preload?: InputMaybe<Scalars['Boolean']['input']>;
  savePanelParameters?: InputMaybe<UpdateOneBrandParametersTunnelSavePanelParametersInput>;
  steps?: InputMaybe<Array<UpdateOneBrandParametersTunnelStepInput>>;
  wallParameters?: InputMaybe<UpdateOneBrandParametersTunnelWallParametersInput>;
};

export type UpdateOneBrandParametersTunnelPayload = {
  __typename?: 'UpdateOneBrandParametersTunnelPayload';
  /** Updated document */
  record?: Maybe<BrandParametersTunnel>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneBrandParametersTunnelPersistentVariablesInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneBrandParametersTunnelSavePanelParametersInput = {
  isCustomerModuleEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isExportButtonEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneBrandParametersTunnelStepInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  analytics?: InputMaybe<UpdateOneBrandParametersTunnelStepsAnalyticsInput>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  htmlTemplate?: InputMaybe<Scalars['String']['input']>;
  isShownInStepper?: InputMaybe<Scalars['Boolean']['input']>;
  module?: InputMaybe<EnumBrandParametersTunnelStepsModule>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  resetTunnelOnActivation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneBrandParametersTunnelStepsAnalyticsChoiceReducerInput = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  stateProperties?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateOneBrandParametersTunnelStepsAnalyticsInput = {
  choiceReducer?: InputMaybe<UpdateOneBrandParametersTunnelStepsAnalyticsChoiceReducerInput>;
};

export type UpdateOneBrandParametersTunnelWallParametersExteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type UpdateOneBrandParametersTunnelWallParametersInput = {
  doorLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  exteriorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  exteriorWallThickness?: InputMaybe<UpdateOneBrandParametersTunnelWallParametersExteriorWallThicknessInput>;
  floorHeight?: InputMaybe<Scalars['Float']['input']>;
  groundFloorLevel?: InputMaybe<Scalars['Float']['input']>;
  innerHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorCeilingLintelHeight?: InputMaybe<Scalars['Float']['input']>;
  interiorWallThickness?: InputMaybe<UpdateOneBrandParametersTunnelWallParametersInteriorWallThicknessInput>;
  optionsPanelWallConfig?: InputMaybe<UpdateOneBrandParametersTunnelWallParametersOptionsPanelWallConfigInput>;
  windowLintelLevel?: InputMaybe<Scalars['Float']['input']>;
  windowSillLevel?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneBrandParametersTunnelWallParametersInteriorWallThicknessInput = {
  canUseCustomValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultWallThickness?: InputMaybe<Scalars['Float']['input']>;
  wallThicknessDropdownValues?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type UpdateOneBrandParametersTunnelWallParametersOptionsPanelWallConfigInput = {
  displayOnlyWallType?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightExteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallHeightInteriorFloor?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessDropdown?: InputMaybe<Scalars['Boolean']['input']>;
  displayWallThicknessInput?: InputMaybe<Scalars['Boolean']['input']>;
  usePartitionLabelForInteriorWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneBrandPayload = {
  __typename?: 'UpdateOneBrandPayload';
  /** Updated document */
  record?: Maybe<Brand>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneBrandPromoterWebsiteConfigurationInput = {
  acquirerValidateUnitAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  metadataConfiguration?: InputMaybe<UpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationInput>;
  operatorTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  promoterValidateTypeAccessPointId?: InputMaybe<Scalars['MongoID']['input']>;
  unitTypeSaveModelId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataType>;
};

export type UpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInEnumerationTool?: InputMaybe<Scalars['Boolean']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataType>;
};

export type UpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationInput = {
  apartmentUnitMetadata?: InputMaybe<Array<UpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitMetadataInput>>;
  apartmentUnitTypeIdMetadataKey?: InputMaybe<Scalars['String']['input']>;
  apartmentUnitTypeMetadata?: InputMaybe<Array<UpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationApartmentUnitTypeMetadataInput>>;
  programMetadata?: InputMaybe<Array<UpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput>>;
};

export type UpdateOneBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  shouldDisplayInIndexTable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumBrandPromoterWebsiteConfigurationMetadataConfigurationProgramMetadataType>;
};

export type UpdateOneBrandSatelliteConfigurationInput = {
  satelliteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneCatalogFolderInput = {
  associatedEcotaxePriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPriceTableId?: InputMaybe<Scalars['MongoID']['input']>;
  brand?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  iconId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<UpdateOneCatalogFolderMetadataInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  rootId?: InputMaybe<Scalars['MongoID']['input']>;
  sharedWithIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailId?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tiles?: InputMaybe<Array<InputMaybe<UpdateOneCatalogFolderTilesInput>>>;
  tilesBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  tilesColumnAmount?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnGap?: InputMaybe<Scalars['Float']['input']>;
  tilesColumnSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  tilesRowGap?: InputMaybe<Scalars['Float']['input']>;
  tilesRowSizes?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  type?: InputMaybe<EnumCatalogFolderType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  virtual?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneCatalogFolderMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneCatalogFolderPayload = {
  __typename?: 'UpdateOneCatalogFolderPayload';
  /** Updated document */
  record?: Maybe<CatalogFolder>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneCatalogFolderTilesImagePlacementInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneCatalogFolderTilesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  advancedTextTranslations?: InputMaybe<Scalars['Translations']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundOpacity?: InputMaybe<Scalars['Float']['input']>;
  borderRadius?: InputMaybe<Scalars['Float']['input']>;
  catalogSourceId?: InputMaybe<Scalars['MongoID']['input']>;
  construction?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionTextSize?: InputMaybe<Scalars['Float']['input']>;
  folder?: InputMaybe<Scalars['MongoID']['input']>;
  hasShadow?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  horizontalTextAlignement?: InputMaybe<EnumCatalogFolderTilesHorizontalTextAlignement>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  imagePlacement?: InputMaybe<UpdateOneCatalogFolderTilesImagePlacementInput>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isImagePlacementFree?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  isShownOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  item?: InputMaybe<Scalars['MongoID']['input']>;
  itemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  mask?: InputMaybe<Scalars['Boolean']['input']>;
  maskColor?: InputMaybe<Scalars['String']['input']>;
  maskOpacity?: InputMaybe<Scalars['Float']['input']>;
  metadata?: InputMaybe<Array<InputMaybe<UpdateOneCatalogFolderTilesMetadataInput>>>;
  posX?: InputMaybe<Scalars['Float']['input']>;
  posY?: InputMaybe<Scalars['Float']['input']>;
  saveSelectedInTunnelStateVariable?: InputMaybe<Scalars['String']['input']>;
  stylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textDescriptionTranslations?: InputMaybe<Scalars['Translations']['input']>;
  textPadding?: InputMaybe<UpdateOneCatalogFolderTilesTextPaddingInput>;
  textTitleTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTextColor?: InputMaybe<Scalars['String']['input']>;
  titleTextSize?: InputMaybe<Scalars['Float']['input']>;
  tooltipTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumCatalogFolderTilesType>;
  useAdvancedText?: InputMaybe<Scalars['Boolean']['input']>;
  verticalTextAlignement?: InputMaybe<EnumCatalogFolderTilesVerticalTextAlignement>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneCatalogFolderTilesMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneCatalogFolderTilesTextPaddingInput = {
  bottom?: InputMaybe<Scalars['Float']['input']>;
  left?: InputMaybe<Scalars['Float']['input']>;
  right?: InputMaybe<Scalars['Float']['input']>;
  top?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneCustomerInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  firstnameAdditional?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  genderAdditional?: InputMaybe<Scalars['String']['input']>;
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  surnameAdditional?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneCustomerPayload = {
  __typename?: 'UpdateOneCustomerPayload';
  /** Updated document */
  record?: Maybe<Customer>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

/** Configures the parameters of one or multiple chunks in the document. */
export type UpdateOneInputDocumentChunkManifestInput = {
  /** Render-time parameters object, implementing the chunk's parameters schema as given in the output manifest. The type of this property is loosely-typed in GraphQL, but verified at runtime against that schema. If the parameters passed are invalid against the schema, the chunk will be disabled and a manifest warning will be issued. */
  parameters?: InputMaybe<Scalars['JSONObject']['input']>;
  /** A path selector to target one or multiple chunks, since it can be a bash-like glob pattern, ex. "/my-section/my-chunk-123", "/my-section/my-chunk-*", "/**\/my-chunk-*", etc. */
  path?: InputMaybe<Scalars['String']['input']>;
  /** Defines whether the chunk should be rendered in the document. If set "false" on a group chunk, it applies to its children recursively. */
  render?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemCustomisationCoverPlanesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItem?: InputMaybe<Scalars['MongoID']['input']>;
  hideForSingleObject?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<EnumItemCustomisationCoverPlanesMode>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  positions?: InputMaybe<UpdateOneItemCustomisationCoverPlanesPositionsInput>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemCustomisationCoverPlanesPositionsInput = {
  above?: InputMaybe<Scalars['Boolean']['input']>;
  behind?: InputMaybe<Scalars['Boolean']['input']>;
  front?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemCustomisationMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  associatedPalette?: InputMaybe<Scalars['MongoID']['input']>;
  materials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<EnumItemCustomisationMaterialsType>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemCustomisationSubObjectsHooksInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation?: InputMaybe<UpdateOneItemCustomisationSubObjectsHooksOrientationInput>;
  position?: InputMaybe<UpdateOneItemCustomisationSubObjectsHooksPositionInput>;
  type?: InputMaybe<EnumItemCustomisationSubObjectsHooksType>;
};

export type UpdateOneItemCustomisationSubObjectsHooksOrientationInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemCustomisationSubObjectsHooksPositionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemCustomisationSubObjectsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  associatedItemsGroup?: InputMaybe<Scalars['MongoID']['input']>;
  hooks?: InputMaybe<Array<InputMaybe<UpdateOneItemCustomisationSubObjectsHooksInput>>>;
  nameId?: InputMaybe<Scalars['String']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  showOnStart?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemCustomisationSymbolicRepresentationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  anglePositionIsRight?: InputMaybe<Scalars['Boolean']['input']>;
  break3D?: InputMaybe<Scalars['Boolean']['input']>;
  colors?: InputMaybe<EnumItemCustomisationSymbolicRepresentationColors>;
  displayDiagonals?: InputMaybe<Scalars['Boolean']['input']>;
  doorType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationDoorType>;
  drawerCount?: InputMaybe<Scalars['Float']['input']>;
  symbolicIcon?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIcon>;
  symbolicIconShape?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconShape>;
  symbolicIconSubType?: InputMaybe<EnumItemCustomisationSymbolicRepresentationSymbolicIconSubType>;
  type?: InputMaybe<EnumItemCustomisationSymbolicRepresentationType>;
};

export type UpdateOneItemFactSheetInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONObject']['input']>;
  logoPicture?: InputMaybe<Scalars['String']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneItemGuardrailInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  meshes?: InputMaybe<Array<InputMaybe<UpdateOneItemGuardrailInformationsMeshesInput>>>;
};

export type UpdateOneItemGuardrailInformationsMeshesDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemGuardrailInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  dimensions?: InputMaybe<UpdateOneItemGuardrailInformationsMeshesDimensionsInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  options?: InputMaybe<UpdateOneItemGuardrailInformationsMeshesOptionsInput>;
  placing?: InputMaybe<UpdateOneItemGuardrailInformationsMeshesPlacingInput>;
  surface?: InputMaybe<UpdateOneItemGuardrailInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemGuardrailInformationsMeshesType>;
};

export type UpdateOneItemGuardrailInformationsMeshesOptionsInput = {
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemGuardrailInformationsMeshesOptionsShape>;
};

export type UpdateOneItemGuardrailInformationsMeshesPlacingInput = {
  elevation?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemGuardrailInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemInput = {
  articleCode?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  buildingWingInfos?: InputMaybe<Scalars['String']['input']>;
  canBeCutAlongHeight?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongLength?: InputMaybe<Scalars['Boolean']['input']>;
  canBeCutAlongWidth?: InputMaybe<Scalars['Boolean']['input']>;
  canBeDroppedOnZones?: InputMaybe<Array<EnumItemCanBeDroppedOnZones>>;
  categoriesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  compositeInfos?: InputMaybe<Scalars['String']['input']>;
  consideredAsDroppableZones?: InputMaybe<Array<EnumItemConsideredAsDroppableZones>>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  customisationByItemsGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationCoverPlanes?: InputMaybe<Array<UpdateOneItemCustomisationCoverPlanesInput>>;
  customisationMaterials?: InputMaybe<Array<UpdateOneItemCustomisationMaterialsInput>>;
  customisationSubObjects?: InputMaybe<Array<UpdateOneItemCustomisationSubObjectsInput>>;
  customisationSymbolicRepresentation?: InputMaybe<UpdateOneItemCustomisationSymbolicRepresentationInput>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  factSheet?: InputMaybe<UpdateOneItemFactSheetInput>;
  guardrailInformations?: InputMaybe<UpdateOneItemGuardrailInformationsInput>;
  metadata?: InputMaybe<Array<UpdateOneItemMetadataInput>>;
  minimumPricedDimensions?: InputMaybe<UpdateOneItemMinimumPricedDimensionsInput>;
  modelUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  outputAssets?: InputMaybe<UpdateOneItemOutputAssetsInput>;
  physicalHeight?: InputMaybe<Scalars['String']['input']>;
  physicalLength?: InputMaybe<Scalars['String']['input']>;
  physicalWidth?: InputMaybe<Scalars['String']['input']>;
  pillarInformations?: InputMaybe<UpdateOneItemPillarInformationsInput>;
  priceCoefExclusion?: InputMaybe<Scalars['Boolean']['input']>;
  priceGeneration?: InputMaybe<EnumItemPriceGeneration>;
  priceUnit?: InputMaybe<EnumItemPriceUnit>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  roofInformations?: InputMaybe<UpdateOneItemRoofInformationsInput>;
  scrapperTag?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stairsInformations?: InputMaybe<UpdateOneItemStairsInformationsInput>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tooltip3DTranslations?: InputMaybe<Scalars['Translations']['input']>;
  type?: InputMaybe<EnumItemType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedById?: InputMaybe<Scalars['MongoID']['input']>;
  vegetationInformations?: InputMaybe<UpdateOneItemVegetationInformationsInput>;
  wallInformations?: InputMaybe<UpdateOneItemWallInformationsInput>;
};

export type UpdateOneItemMetadataInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneItemMinimumPricedDimensionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneItemOutputAssetsCoatingVariantsAlbedoInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type UpdateOneItemOutputAssetsCoatingVariantsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  albedo?: InputMaybe<UpdateOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  metallic?: InputMaybe<UpdateOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  normal?: InputMaybe<UpdateOneItemOutputAssetsCoatingVariantsAlbedoInput>;
  smoothness?: InputMaybe<UpdateOneItemOutputAssetsCoatingVariantsAlbedoInput>;
};

export type UpdateOneItemOutputAssetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  coatingVariants?: InputMaybe<Array<InputMaybe<UpdateOneItemOutputAssetsCoatingVariantsInput>>>;
};

export type UpdateOneItemPayload = {
  __typename?: 'UpdateOneItemPayload';
  /** Updated document */
  record?: Maybe<Item>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneItemPillarInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  cylinderSides?: InputMaybe<Scalars['Float']['input']>;
  materials?: InputMaybe<Array<InputMaybe<UpdateOneItemPillarInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<UpdateOneItemPillarInformationsModelsInput>>>;
  necking?: InputMaybe<UpdateOneItemPillarInformationsNeckingInput>;
};

export type UpdateOneItemPillarInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsMaterialsType>;
};

export type UpdateOneItemPillarInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemPillarInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemPillarInformationsNeckingCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemPillarInformationsNeckingInput = {
  crossSection?: InputMaybe<UpdateOneItemPillarInformationsNeckingCrossSectionInput>;
  distanceToTop?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsCoveringInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  ridgeTiles?: InputMaybe<UpdateOneItemRoofInformationsCoveringRidgeTilesInput>;
  sealingThickness?: InputMaybe<Scalars['Float']['input']>;
  spaceBetweenSealingAndTiles?: InputMaybe<Scalars['Float']['input']>;
  tilesThickness?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsCoveringRidgeTilesInput = {
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsEavesStyleInput = {
  type?: InputMaybe<EnumItemRoofInformationsEavesStyleType>;
};

export type UpdateOneItemRoofInformationsFlatRoofBorderDimensionsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsFlatRoofInput = {
  borderDimensions?: InputMaybe<UpdateOneItemRoofInformationsFlatRoofBorderDimensionsInput>;
  gravelThickness?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemRoofInformationsFramingInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  pieces?: InputMaybe<Array<InputMaybe<UpdateOneItemRoofInformationsFramingPiecesInput>>>;
  type?: InputMaybe<EnumItemRoofInformationsFramingType>;
};

export type UpdateOneItemRoofInformationsFramingPiecesEnd_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsFramingPiecesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  end_coordinate?: InputMaybe<UpdateOneItemRoofInformationsFramingPiecesEnd_CoordinateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_coordinate?: InputMaybe<UpdateOneItemRoofInformationsFramingPiecesStart_CoordinateInput>;
  type?: InputMaybe<EnumItemRoofInformationsFramingPiecesType>;
};

export type UpdateOneItemRoofInformationsFramingPiecesStart_CoordinateInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsGutterInput = {
  included?: InputMaybe<Scalars['Boolean']['input']>;
  innerRadius?: InputMaybe<Scalars['Float']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  covering?: InputMaybe<UpdateOneItemRoofInformationsCoveringInput>;
  eavesStyle?: InputMaybe<UpdateOneItemRoofInformationsEavesStyleInput>;
  flatRoof?: InputMaybe<UpdateOneItemRoofInformationsFlatRoofInput>;
  framing?: InputMaybe<UpdateOneItemRoofInformationsFramingInput>;
  gutter?: InputMaybe<UpdateOneItemRoofInformationsGutterInput>;
  materials?: InputMaybe<Array<InputMaybe<UpdateOneItemRoofInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<UpdateOneItemRoofInformationsModelsInput>>>;
  overhang?: InputMaybe<UpdateOneItemRoofInformationsOverhangInput>;
  purlins?: InputMaybe<UpdateOneItemRoofInformationsPurlinsInput>;
  rafters?: InputMaybe<UpdateOneItemRoofInformationsRaftersInput>;
  ridgeBoard?: InputMaybe<UpdateOneItemRoofInformationsRidgeBoardInput>;
  solarPanels?: InputMaybe<UpdateOneItemRoofInformationsSolarPanelsInput>;
  topPlate?: InputMaybe<UpdateOneItemRoofInformationsTopPlateInput>;
};

export type UpdateOneItemRoofInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsMaterialsType>;
};

export type UpdateOneItemRoofInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemRoofInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsOverhangInput = {
  bargeboard?: InputMaybe<Scalars['Float']['input']>;
  bargeboardPurlins?: InputMaybe<Scalars['Float']['input']>;
  bargeboardRafters?: InputMaybe<Scalars['Float']['input']>;
  eave?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemRoofInformationsPurlinsBottomInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsPurlinsInput = {
  bottom?: InputMaybe<UpdateOneItemRoofInformationsPurlinsBottomInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  intermediate?: InputMaybe<UpdateOneItemRoofInformationsPurlinsIntermediateInput>;
  ridge?: InputMaybe<UpdateOneItemRoofInformationsPurlinsRidgeInput>;
};

export type UpdateOneItemRoofInformationsPurlinsIntermediateInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsPurlinsRidgeInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsRaftersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsRaftersInput = {
  crossSection?: InputMaybe<UpdateOneItemRoofInformationsRaftersCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsRidgeBoardCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsRidgeBoardInput = {
  crossSection?: InputMaybe<UpdateOneItemRoofInformationsRidgeBoardCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemRoofInformationsSolarPanelsFrameInput = {
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsSolarPanelsInput = {
  distanceToRoof?: InputMaybe<Scalars['Float']['input']>;
  frame?: InputMaybe<UpdateOneItemRoofInformationsSolarPanelsFrameInput>;
  height?: InputMaybe<Scalars['Float']['input']>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsTopPlateCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemRoofInformationsTopPlateInput = {
  crossSection?: InputMaybe<UpdateOneItemRoofInformationsTopPlateCrossSectionInput>;
  included?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemStairsInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  landing?: InputMaybe<UpdateOneItemStairsInformationsLandingInput>;
  materials?: InputMaybe<Array<InputMaybe<UpdateOneItemStairsInformationsMaterialsInput>>>;
  models?: InputMaybe<Array<InputMaybe<UpdateOneItemStairsInformationsModelsInput>>>;
  railing?: InputMaybe<UpdateOneItemStairsInformationsRailingInput>;
  steps?: InputMaybe<UpdateOneItemStairsInformationsStepsInput>;
  stringers?: InputMaybe<UpdateOneItemStairsInformationsStringersInput>;
};

export type UpdateOneItemStairsInformationsLandingInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemStairsInformationsMaterialsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsMaterialsType>;
};

export type UpdateOneItemStairsInformationsModelsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  modelId?: InputMaybe<Scalars['MongoID']['input']>;
  type?: InputMaybe<EnumItemStairsInformationsModelsType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemStairsInformationsRailingBalustersInput = {
  radius?: InputMaybe<Scalars['Float']['input']>;
  typicalDistance?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemStairsInformationsRailingHandrailCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemStairsInformationsRailingHandrailInput = {
  crossSection?: InputMaybe<UpdateOneItemStairsInformationsRailingHandrailCrossSectionInput>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemStairsInformationsRailingInput = {
  balusters?: InputMaybe<UpdateOneItemStairsInformationsRailingBalustersInput>;
  handrail?: InputMaybe<UpdateOneItemStairsInformationsRailingHandrailInput>;
  posts?: InputMaybe<UpdateOneItemStairsInformationsRailingPostsInput>;
};

export type UpdateOneItemStairsInformationsRailingPostsCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemStairsInformationsRailingPostsInput = {
  crossSection?: InputMaybe<UpdateOneItemStairsInformationsRailingPostsCrossSectionInput>;
};

export type UpdateOneItemStairsInformationsStepsInput = {
  risers?: InputMaybe<UpdateOneItemStairsInformationsStepsRisersInput>;
  treats?: InputMaybe<UpdateOneItemStairsInformationsStepsTreatsInput>;
};

export type UpdateOneItemStairsInformationsStepsRisersInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemStairsInformationsStepsTreatsInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  nose?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemStairsInformationsStringersCrossSectionInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemStairsInformationsStringersInput = {
  crossSection?: InputMaybe<UpdateOneItemStairsInformationsStringersCrossSectionInput>;
  overTreat?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemVegetationInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  canBeSelected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemWallInformationsApplicationInput = {
  bothSides?: InputMaybe<Scalars['Boolean']['input']>;
  exteriorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorFacesExteriorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  interiorWalls?: InputMaybe<Scalars['Boolean']['input']>;
  overRegularWall?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemWallInformationsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  application?: InputMaybe<UpdateOneItemWallInformationsApplicationInput>;
  class?: InputMaybe<EnumItemWallInformationsClass>;
  meshes?: InputMaybe<Array<InputMaybe<UpdateOneItemWallInformationsMeshesInput>>>;
};

export type UpdateOneItemWallInformationsMeshesDimensionsInput = {
  length?: InputMaybe<Scalars['Float']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemWallInformationsMeshesDisplayInput = {
  autoCut?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsHigh?: InputMaybe<Scalars['Boolean']['input']>;
  whenWallsLow?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemWallInformationsMeshesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  buildingMaterial?: InputMaybe<EnumItemWallInformationsMeshesBuildingMaterial>;
  dimensions?: InputMaybe<UpdateOneItemWallInformationsMeshesDimensionsInput>;
  display?: InputMaybe<UpdateOneItemWallInformationsMeshesDisplayInput>;
  materialId?: InputMaybe<Scalars['MongoID']['input']>;
  meshId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<UpdateOneItemWallInformationsMeshesOptionsInput>;
  overlapPriority?: InputMaybe<Scalars['Float']['input']>;
  placing?: InputMaybe<UpdateOneItemWallInformationsMeshesPlacingInput>;
  segmentTypes?: InputMaybe<UpdateOneItemWallInformationsMeshesSegmentTypesInput>;
  surface?: InputMaybe<UpdateOneItemWallInformationsMeshesSurfaceInput>;
  type?: InputMaybe<EnumItemWallInformationsMeshesType>;
};

export type UpdateOneItemWallInformationsMeshesOptionsInput = {
  closeBack?: InputMaybe<Scalars['Boolean']['input']>;
  closeBottom?: InputMaybe<Scalars['Boolean']['input']>;
  closeFront?: InputMaybe<Scalars['Boolean']['input']>;
  closeSides?: InputMaybe<Scalars['Boolean']['input']>;
  closeTop?: InputMaybe<Scalars['Boolean']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  nextToDoorsAndWindows?: InputMaybe<Scalars['Boolean']['input']>;
  paintable?: InputMaybe<Scalars['Boolean']['input']>;
  shape?: InputMaybe<EnumItemWallInformationsMeshesOptionsShape>;
  skewOnCorners?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemWallInformationsMeshesPlacingBottomElevationInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  elevation?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingBottomElevationReference>;
};

export type UpdateOneItemWallInformationsMeshesPlacingInput = {
  beamDirection?: InputMaybe<EnumItemWallInformationsMeshesPlacingBeamDirection>;
  bottomElevation?: InputMaybe<UpdateOneItemWallInformationsMeshesPlacingBottomElevationInput>;
  depthOffset?: InputMaybe<Scalars['Float']['input']>;
  doorPostOffset?: InputMaybe<Scalars['Float']['input']>;
  endContraction?: InputMaybe<Scalars['Float']['input']>;
  endDepth?: InputMaybe<UpdateOneItemWallInformationsMeshesPlacingStartDepthInput>;
  gap?: InputMaybe<Scalars['Float']['input']>;
  idealDistance?: InputMaybe<Scalars['Float']['input']>;
  idealGapDistance?: InputMaybe<Scalars['Float']['input']>;
  moveVerticesAbove?: InputMaybe<Scalars['Float']['input']>;
  pivotIsOnTop?: InputMaybe<Scalars['Boolean']['input']>;
  placeEndPillarsDiagonally?: InputMaybe<Scalars['Boolean']['input']>;
  repetitionFilter?: InputMaybe<EnumItemWallInformationsMeshesPlacingRepetitionFilter>;
  startDepth?: InputMaybe<UpdateOneItemWallInformationsMeshesPlacingStartDepthInput>;
  stretchVertically?: InputMaybe<Scalars['Boolean']['input']>;
  topElevation?: InputMaybe<UpdateOneItemWallInformationsMeshesPlacingBottomElevationInput>;
};

export type UpdateOneItemWallInformationsMeshesPlacingStartDepthInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  plusOnTop?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<EnumItemWallInformationsMeshesPlacingStartDepthReference>;
};

export type UpdateOneItemWallInformationsMeshesSegmentTypesInput = {
  doors?: InputMaybe<Scalars['Boolean']['input']>;
  walls?: InputMaybe<Scalars['Boolean']['input']>;
  windows?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemWallInformationsMeshesSurfaceInput = {
  clampU?: InputMaybe<Scalars['Boolean']['input']>;
  clampV?: InputMaybe<Scalars['Boolean']['input']>;
  stretchU?: InputMaybe<Scalars['Boolean']['input']>;
  stretchV?: InputMaybe<Scalars['Boolean']['input']>;
  swapUV?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOneItemsGroupInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  generated?: InputMaybe<Scalars['Boolean']['input']>;
  itemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  option?: InputMaybe<UpdateOneItemsGroupOptionInput>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  shouldBeOpenInGUI?: InputMaybe<Scalars['Boolean']['input']>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumItemsGroupType>;
};

export type UpdateOneItemsGroupOptionInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  baseItemId?: InputMaybe<Scalars['MongoID']['input']>;
  choiceIsMandatory?: InputMaybe<Scalars['Boolean']['input']>;
  disableDefaultChoice?: InputMaybe<Scalars['Boolean']['input']>;
  positions?: InputMaybe<Array<UpdateOneItemsGroupOptionPositionsInput>>;
};

export type UpdateOneItemsGroupOptionPositionsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  margins?: InputMaybe<UpdateOneItemsGroupOptionPositionsMarginsInput>;
  placement?: InputMaybe<EnumItemsGroupOptionPositionsPlacement>;
  rotation?: InputMaybe<EnumItemsGroupOptionPositionsRotation>;
};

export type UpdateOneItemsGroupOptionPositionsMarginsInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneItemsGroupPayload = {
  __typename?: 'UpdateOneItemsGroupPayload';
  /** Updated document */
  record?: Maybe<ItemsGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOnePaletteColorsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  a?: InputMaybe<Scalars['Float']['input']>;
  b?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  g?: InputMaybe<Scalars['Float']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  nameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  r?: InputMaybe<Scalars['Float']['input']>;
  roughness?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOnePaletteInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  colors?: InputMaybe<Array<InputMaybe<UpdateOnePaletteColorsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumPaletteType>;
};

export type UpdateOnePalettePayload = {
  __typename?: 'UpdateOnePalettePayload';
  /** Updated document */
  record?: Maybe<Palette>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOnePictureInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOnePicturePayload = {
  __typename?: 'UpdateOnePicturePayload';
  /** Updated document */
  record?: Maybe<Picture>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOnePipelineJobInput = {
  completedDate?: InputMaybe<Scalars['Date']['input']>;
  settings?: InputMaybe<UpdateOnePipelineJobSettingsInput>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state?: InputMaybe<EnumPipelineJobState>;
  submitDate?: InputMaybe<Scalars['Date']['input']>;
  type?: InputMaybe<EnumPipelineJobType>;
};

export type UpdateOnePipelineJobPayload = {
  __typename?: 'UpdateOnePipelineJobPayload';
  /** Updated document */
  record?: Maybe<PipelineJob>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOnePipelineJobSettingsConvertPbrMaterialToAssetBundleInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  assetUrl?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateOnePipelineJobSettingsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  convertPBRMaterialToAssetBundle?: InputMaybe<UpdateOnePipelineJobSettingsConvertPbrMaterialToAssetBundleInput>;
};

export type UpdateOnePlannedMaintenanceInput = {
  durationHours?: InputMaybe<Scalars['Float']['input']>;
  reasonTranslations?: InputMaybe<Scalars['Translations']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateOnePlannedMaintenancePayload = {
  __typename?: 'UpdateOnePlannedMaintenancePayload';
  /** Updated document */
  record?: Maybe<PlannedMaintenance>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOnePriceTableInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  currencyName?: InputMaybe<Scalars['String']['input']>;
  displayEan?: InputMaybe<Scalars['Boolean']['input']>;
  globalDiscount?: InputMaybe<Scalars['Float']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  multiplyingCoefficient?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<InputMaybe<UpdateOnePriceTablePricesInput>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  vatRate?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOnePriceTablePayload = {
  __typename?: 'UpdateOnePriceTablePayload';
  /** Updated document */
  record?: Maybe<PriceTable>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOnePriceTablePricesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  articleIdentifier?: InputMaybe<Scalars['String']['input']>;
  ean?: InputMaybe<Scalars['String']['input']>;
  itemsIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  sourceItemId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateOneProductScanInput = {
  creationDate?: InputMaybe<Scalars['Date']['input']>;
  metallic?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  scans?: InputMaybe<Array<InputMaybe<UpdateOneProductScanScansInput>>>;
  size?: InputMaybe<UpdateOneProductScanSizeInput>;
  state?: InputMaybe<EnumProductScanState>;
  thumbnail?: InputMaybe<UpdateOneProductScanScansInputImagesInput>;
};

export type UpdateOneProductScanPayload = {
  __typename?: 'UpdateOneProductScanPayload';
  /** Updated document */
  record?: Maybe<ProductScan>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneProductScanScansInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  generatedImages?: InputMaybe<Array<InputMaybe<UpdateOneProductScanScansInputImagesInput>>>;
  inputImages?: InputMaybe<Array<InputMaybe<UpdateOneProductScanScansInputImagesInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumProductScanScansType>;
};

export type UpdateOneProductScanScansInputImagesInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  format: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type UpdateOneProductScanSizeInput = {
  height?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneSalesRecordInput = {
  finalCustomerMetadata?: InputMaybe<Scalars['Metadata']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
};

export type UpdateOneSalesRecordPayload = {
  __typename?: 'UpdateOneSalesRecordPayload';
  /** Updated document */
  record?: Maybe<SalesRecord>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneSaveFolderInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['MongoID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateOneSaveFolderPayload = {
  __typename?: 'UpdateOneSaveFolderPayload';
  /** Updated document */
  record?: Maybe<SaveFolder>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneSaveInput = {
  additionalInfo?: InputMaybe<Scalars['JSON']['input']>;
  apartmentUnitTypeId?: InputMaybe<Scalars['MongoID']['input']>;
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  chosenStylePresetId?: InputMaybe<Scalars['MongoID']['input']>;
  createdFromAP?: InputMaybe<Scalars['MongoID']['input']>;
  customerId?: InputMaybe<Scalars['MongoID']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  dataFormatVersion?: InputMaybe<Scalars['Int']['input']>;
  dataUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isReadonly?: InputMaybe<Scalars['Boolean']['input']>;
  isTemplate?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Metadata']['input']>;
  moduleKitchenCustomData?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['MongoID']['input']>;
  quantitySurveyJSON?: InputMaybe<Scalars['String']['input']>;
  saveFolderId?: InputMaybe<Scalars['MongoID']['input']>;
  storageBytesUsage?: InputMaybe<Scalars['Float']['input']>;
  stylePresetGroupId?: InputMaybe<Scalars['MongoID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  tunnelState?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<EnumSaveType>;
  visitViewpoints?: InputMaybe<Array<UpdateOneSaveVisitViewpointsInput>>;
};

export type UpdateOneSavePayload = {
  __typename?: 'UpdateOneSavePayload';
  /** Updated document */
  record?: Maybe<Save>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneSaveVisitViewpointsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  orientation?: InputMaybe<UpdateOneSaveVisitViewpointsOrientationInput>;
  position?: InputMaybe<UpdateOneSaveVisitViewpointsPositionInput>;
};

export type UpdateOneSaveVisitViewpointsOrientationInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneSaveVisitViewpointsPositionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneSavesGroupInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  savesIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  thumbnailPictureName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumSavesGroupType>;
};

export type UpdateOneSavesGroupPayload = {
  __typename?: 'UpdateOneSavesGroupPayload';
  /** Updated document */
  record?: Maybe<SavesGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneStylePresetCustomisationPresetsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  chosenItemId?: InputMaybe<Scalars['MongoID']['input']>;
  customisationNameId?: InputMaybe<Scalars['String']['input']>;
  filterTag?: InputMaybe<Scalars['String']['input']>;
  rotationCondition?: InputMaybe<EnumStylePresetCustomisationPresetsRotationCondition>;
};

export type UpdateOneStylePresetGroupInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stylePresetIds?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type UpdateOneStylePresetGroupPayload = {
  __typename?: 'UpdateOneStylePresetGroupPayload';
  /** Updated document */
  record?: Maybe<StylePresetGroup>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneStylePresetInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  customisationPresets?: InputMaybe<Array<InputMaybe<UpdateOneStylePresetCustomisationPresetsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicNameTranslations?: InputMaybe<Scalars['Translations']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateOneStylePresetPayload = {
  __typename?: 'UpdateOneStylePresetPayload';
  /** Updated document */
  record?: Maybe<StylePreset>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneTutorialInput = {
  brandId?: InputMaybe<Scalars['MongoID']['input']>;
  displayOnlyOnce?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<UpdateOneTutorialPointInput>>;
};

export type UpdateOneTutorialPayload = {
  __typename?: 'UpdateOneTutorialPayload';
  /** Updated document */
  record?: Maybe<Tutorial>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneTutorialPointInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  illustration?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<EnumTutorialPointTarget>;
  textTranslations?: InputMaybe<Scalars['Translations']['input']>;
  titleTranslations?: InputMaybe<Scalars['Translations']['input']>;
};

export type UpdateOneUserInput = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdById?: InputMaybe<Scalars['MongoID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  favoriteItemsIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  favoriteSavesIds?: InputMaybe<Array<Scalars['MongoID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateOneUserPayload = {
  __typename?: 'UpdateOneUserPayload';
  /** Updated document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['MongoID']['output'];
  brands: Array<Brand>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['MongoID']['output']>;
  email: Scalars['String']['output'];
  favoriteItemsIds: Array<Scalars['MongoID']['output']>;
  favoriteSaves: Array<Save>;
  favoriteSavesIds: Array<Scalars['MongoID']['output']>;
  name: Scalars['String']['output'];
  roles: Array<Scalars['String']['output']>;
  saves: Array<Save>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type UserBrandsArgs = {
  filter?: InputMaybe<FilterFindManyBrandInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyBrandInput>;
};


export type UserFavoriteSavesArgs = {
  filter?: InputMaybe<FilterFindManySaveInput>;
  isTemplate: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SortFindManySaveInput>>;
};


export type UserSavesArgs = {
  isTemplate: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SortFindManySaveInput>>;
};

export type UserAccountLogin = {
  __typename?: 'UserAccountLogin';
  token: Scalars['String']['output'];
  user: User;
};

export type UserAccountLoginInfo = {
  __typename?: 'UserAccountLoginInfo';
  /** Whether the user can log in using a password (aka. has a password defined). Indeed, some users may be created and eventually logged in by their brands, so they don't create their account themselves and therefore do not have a password defined. This can be detected by using this property. A password reset is possible for users that do not have a password defined. */
  canLoginWithPassword: Scalars['Boolean']['output'];
  /** The user's name. */
  name: Scalars['String']['output'];
};

export type UserActiveInferenceOutput = {
  __typename?: 'UserActiveInferenceOutput';
  isActive: Scalars['Boolean']['output'];
};

export type UserActiveInferenceParams = {
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
  userId: Scalars['String']['input'];
};

export type UserActivityDurationByDay = {
  __typename?: 'UserActivityDurationByDay';
  app: Scalars['String']['output'];
  date: Scalars['Date']['output'];
  totalSessionsDuration: Scalars['Int']['output'];
};

export type UserActivityInferenceOutput = {
  __typename?: 'UserActivityInferenceOutput';
  durationByDay: Array<UserActivityDurationByDay>;
};

export type UserActivityInferenceParams = {
  apps?: InputMaybe<Array<Scalars['String']['input']>>;
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: User;
};

/** List of items with pagination. */
export type UserPagination = {
  __typename?: 'UserPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type UserSessionsCountByApp = {
  __typename?: 'UserSessionsCountByApp';
  app: Scalars['String']['output'];
  sessionsCount: Scalars['Int']['output'];
};

export type UserSessionsCountInferenceOutput = {
  __typename?: 'UserSessionsCountInferenceOutput';
  sessionsCountByApp: Array<UserSessionsCountByApp>;
  totalSessionsCount: Scalars['Int']['output'];
};

export type UserSessionsCountInferenceParams = {
  apps?: InputMaybe<Array<Scalars['String']['input']>>;
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomisationCountertop = {
  __typename?: 'customisationCountertop';
  _id?: Maybe<Scalars['MongoID']['output']>;
  associatedItem?: Maybe<Scalars['MongoID']['output']>;
  mode?: Maybe<EnumItemCustomisationCoverPlanesMode>;
};

export type FindBrandQueryVariables = Exact<{ [key: string]: never; }>;


export type FindBrandQuery = { __typename?: 'Query', brand?: { __typename?: 'Brand', name: string } | null };


export const FindBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindBrand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"brand"},"name":{"kind":"Name","value":"brandFindOne"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FindBrandQuery, FindBrandQueryVariables>;