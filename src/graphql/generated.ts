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
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  where?: InputMaybe<ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: InputMaybe<ImageTransformationInput>;
  document?: InputMaybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Challenge = Node & {
  __typename?: 'Challenge';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Challenge>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** List of Challenge versions */
  history: Array<Version>;
};


export type ChallengeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ChallengeCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ChallengeUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ChallengePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ChallengeScheduledInArgs = {
  where?: InputMaybe<ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ChallengeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type ChallengeConnectInput = {
  /** Document to connect */
  where: ChallengeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ChallengeConnection = {
  __typename?: 'ChallengeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ChallengeEdge>;
  aggregate: Aggregate;
};

export type ChallengeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
  cl4e8k4ev0anm01xu7gc87fn9?: InputMaybe<LessonCreateManyInlineInput>;
};

export type ChallengeCreateManyInlineInput = {
  /** Create and connect multiple existing Challenge documents */
  create?: InputMaybe<Array<ChallengeCreateInput>>;
  /** Connect multiple existing Challenge documents */
  connect?: InputMaybe<Array<ChallengeWhereUniqueInput>>;
};

export type ChallengeCreateOneInlineInput = {
  /** Create and connect one Challenge document */
  create?: InputMaybe<ChallengeCreateInput>;
  /** Connect one existing Challenge document */
  connect?: InputMaybe<ChallengeWhereUniqueInput>;
};

/** An edge in a connection. */
export type ChallengeEdge = {
  __typename?: 'ChallengeEdge';
  /** The item at the end of the edge. */
  node: Challenge;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ChallengeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChallengeWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
};

export enum ChallengeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ChallengeUpdateInput = {
  url?: InputMaybe<Scalars['String']>;
  cl4e8k4ev0anm01xu7gc87fn9?: InputMaybe<LessonUpdateManyInlineInput>;
};

export type ChallengeUpdateManyInlineInput = {
  /** Create and connect multiple Challenge documents */
  create?: InputMaybe<Array<ChallengeCreateInput>>;
  /** Connect multiple existing Challenge documents */
  connect?: InputMaybe<Array<ChallengeConnectInput>>;
  /** Override currently-connected documents with multiple existing Challenge documents */
  set?: InputMaybe<Array<ChallengeWhereUniqueInput>>;
  /** Update multiple Challenge documents */
  update?: InputMaybe<Array<ChallengeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Challenge documents */
  upsert?: InputMaybe<Array<ChallengeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Challenge documents */
  disconnect?: InputMaybe<Array<ChallengeWhereUniqueInput>>;
  /** Delete multiple Challenge documents */
  delete?: InputMaybe<Array<ChallengeWhereUniqueInput>>;
};

export type ChallengeUpdateManyInput = {
  url?: InputMaybe<Scalars['String']>;
};

export type ChallengeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ChallengeWhereInput;
  /** Update many input */
  data: ChallengeUpdateManyInput;
};

export type ChallengeUpdateOneInlineInput = {
  /** Create and connect one Challenge document */
  create?: InputMaybe<ChallengeCreateInput>;
  /** Update single Challenge document */
  update?: InputMaybe<ChallengeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Challenge document */
  upsert?: InputMaybe<ChallengeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Challenge document */
  connect?: InputMaybe<ChallengeWhereUniqueInput>;
  /** Disconnect currently connected Challenge document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Challenge document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type ChallengeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ChallengeWhereUniqueInput;
  /** Document to update */
  data: ChallengeUpdateInput;
};

export type ChallengeUpsertInput = {
  /** Create document if it didn't exist */
  create: ChallengeCreateInput;
  /** Update document if it exists */
  update: ChallengeUpdateInput;
};

export type ChallengeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ChallengeWhereUniqueInput;
  /** Upsert data */
  data: ChallengeUpsertInput;
};

/** Identifies documents */
export type ChallengeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChallengeWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
};

/** References Challenge record uniquely */
export type ChallengeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type Lesson = Node & {
  __typename?: 'Lesson';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Lesson>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  slug: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** The ID of the Youtube video. */
  videoId: Scalars['String'];
  availableAt?: Maybe<Scalars['DateTime']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  challenge?: Maybe<Challenge>;
  teacher?: Maybe<Teacher>;
  lessonType: LessonType;
  scheduledIn: Array<ScheduledOperation>;
  /** List of Lesson versions */
  history: Array<Version>;
};


export type LessonDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type LessonCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonChallengeArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonTeacherArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonScheduledInArgs = {
  where?: InputMaybe<ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type LessonConnectInput = {
  /** Document to connect */
  where: LessonWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type LessonConnection = {
  __typename?: 'LessonConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<LessonEdge>;
  aggregate: Aggregate;
};

export type LessonCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  slug: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  videoId: Scalars['String'];
  availableAt?: InputMaybe<Scalars['DateTime']>;
  challenge?: InputMaybe<ChallengeCreateOneInlineInput>;
  teacher?: InputMaybe<TeacherCreateOneInlineInput>;
  lessonType: LessonType;
};

export type LessonCreateManyInlineInput = {
  /** Create and connect multiple existing Lesson documents */
  create?: InputMaybe<Array<LessonCreateInput>>;
  /** Connect multiple existing Lesson documents */
  connect?: InputMaybe<Array<LessonWhereUniqueInput>>;
};

export type LessonCreateOneInlineInput = {
  /** Create and connect one Lesson document */
  create?: InputMaybe<LessonCreateInput>;
  /** Connect one existing Lesson document */
  connect?: InputMaybe<LessonWhereUniqueInput>;
};

/** An edge in a connection. */
export type LessonEdge = {
  __typename?: 'LessonEdge';
  /** The item at the end of the edge. */
  node: Lesson;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type LessonManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  videoId_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']>;
  availableAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  availableAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  availableAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  availableAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  availableAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  availableAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  availableAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  availableAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  challenge?: InputMaybe<ChallengeWhereInput>;
  teacher?: InputMaybe<TeacherWhereInput>;
  lessonType?: InputMaybe<LessonType>;
  /** All values that are not equal to given value. */
  lessonType_not?: InputMaybe<LessonType>;
  /** All values that are contained in given list. */
  lessonType_in?: InputMaybe<Array<LessonType>>;
  /** All values that are not contained in given list. */
  lessonType_not_in?: InputMaybe<Array<LessonType>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
};

export enum LessonOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  VideoIdAsc = 'videoId_ASC',
  VideoIdDesc = 'videoId_DESC',
  AvailableAtAsc = 'availableAt_ASC',
  AvailableAtDesc = 'availableAt_DESC',
  LessonTypeAsc = 'lessonType_ASC',
  LessonTypeDesc = 'lessonType_DESC'
}

export enum LessonType {
  Class = 'class',
  Live = 'live'
}

export type LessonUpdateInput = {
  title?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['String']>;
  availableAt?: InputMaybe<Scalars['DateTime']>;
  challenge?: InputMaybe<ChallengeUpdateOneInlineInput>;
  teacher?: InputMaybe<TeacherUpdateOneInlineInput>;
  lessonType?: InputMaybe<LessonType>;
};

export type LessonUpdateManyInlineInput = {
  /** Create and connect multiple Lesson documents */
  create?: InputMaybe<Array<LessonCreateInput>>;
  /** Connect multiple existing Lesson documents */
  connect?: InputMaybe<Array<LessonConnectInput>>;
  /** Override currently-connected documents with multiple existing Lesson documents */
  set?: InputMaybe<Array<LessonWhereUniqueInput>>;
  /** Update multiple Lesson documents */
  update?: InputMaybe<Array<LessonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Lesson documents */
  upsert?: InputMaybe<Array<LessonUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Lesson documents */
  disconnect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  /** Delete multiple Lesson documents */
  delete?: InputMaybe<Array<LessonWhereUniqueInput>>;
};

export type LessonUpdateManyInput = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['String']>;
  availableAt?: InputMaybe<Scalars['DateTime']>;
  lessonType?: InputMaybe<LessonType>;
};

export type LessonUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: LessonWhereInput;
  /** Update many input */
  data: LessonUpdateManyInput;
};

export type LessonUpdateOneInlineInput = {
  /** Create and connect one Lesson document */
  create?: InputMaybe<LessonCreateInput>;
  /** Update single Lesson document */
  update?: InputMaybe<LessonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Lesson document */
  upsert?: InputMaybe<LessonUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Lesson document */
  connect?: InputMaybe<LessonWhereUniqueInput>;
  /** Disconnect currently connected Lesson document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Lesson document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type LessonUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: LessonWhereUniqueInput;
  /** Document to update */
  data: LessonUpdateInput;
};

export type LessonUpsertInput = {
  /** Create document if it didn't exist */
  create: LessonCreateInput;
  /** Update document if it exists */
  update: LessonUpdateInput;
};

export type LessonUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: LessonWhereUniqueInput;
  /** Upsert data */
  data: LessonUpsertInput;
};

/** Identifies documents */
export type LessonWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  videoId_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']>;
  availableAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  availableAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  availableAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  availableAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  availableAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  availableAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  availableAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  availableAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  challenge?: InputMaybe<ChallengeWhereInput>;
  teacher?: InputMaybe<TeacherWhereInput>;
  lessonType?: InputMaybe<LessonType>;
  /** All values that are not equal to given value. */
  lessonType_not?: InputMaybe<LessonType>;
  /** All values that are contained in given list. */
  lessonType_in?: InputMaybe<Array<LessonType>>;
  /** All values that are not contained in given list. */
  lessonType_not_in?: InputMaybe<Array<LessonType>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
};

/** References Lesson record uniquely */
export type LessonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one subscriber */
  createSubscriber?: Maybe<Subscriber>;
  /** Update one subscriber */
  updateSubscriber?: Maybe<Subscriber>;
  /** Delete one subscriber from _all_ existing stages. Returns deleted document. */
  deleteSubscriber?: Maybe<Subscriber>;
  /** Upsert one subscriber */
  upsertSubscriber?: Maybe<Subscriber>;
  /** Publish one subscriber */
  publishSubscriber?: Maybe<Subscriber>;
  /** Unpublish one subscriber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSubscriber?: Maybe<Subscriber>;
  /** Update many Subscriber documents */
  updateManySubscribersConnection: SubscriberConnection;
  /** Delete many Subscriber documents, return deleted documents */
  deleteManySubscribersConnection: SubscriberConnection;
  /** Publish many Subscriber documents */
  publishManySubscribersConnection: SubscriberConnection;
  /** Find many Subscriber documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySubscribersConnection: SubscriberConnection;
  /**
   * Update many subscribers
   * @deprecated Please use the new paginated many mutation (updateManySubscribersConnection)
   */
  updateManySubscribers: BatchPayload;
  /**
   * Delete many Subscriber documents
   * @deprecated Please use the new paginated many mutation (deleteManySubscribersConnection)
   */
  deleteManySubscribers: BatchPayload;
  /**
   * Publish many Subscriber documents
   * @deprecated Please use the new paginated many mutation (publishManySubscribersConnection)
   */
  publishManySubscribers: BatchPayload;
  /**
   * Unpublish many Subscriber documents
   * @deprecated Please use the new paginated many mutation (unpublishManySubscribersConnection)
   */
  unpublishManySubscribers: BatchPayload;
  /** Schedule to publish one subscriber */
  schedulePublishSubscriber?: Maybe<Subscriber>;
  /** Unpublish one subscriber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSubscriber?: Maybe<Subscriber>;
  /** Create one lesson */
  createLesson?: Maybe<Lesson>;
  /** Update one lesson */
  updateLesson?: Maybe<Lesson>;
  /** Delete one lesson from _all_ existing stages. Returns deleted document. */
  deleteLesson?: Maybe<Lesson>;
  /** Upsert one lesson */
  upsertLesson?: Maybe<Lesson>;
  /** Publish one lesson */
  publishLesson?: Maybe<Lesson>;
  /** Unpublish one lesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLesson?: Maybe<Lesson>;
  /** Update many Lesson documents */
  updateManyLessonsConnection: LessonConnection;
  /** Delete many Lesson documents, return deleted documents */
  deleteManyLessonsConnection: LessonConnection;
  /** Publish many Lesson documents */
  publishManyLessonsConnection: LessonConnection;
  /** Find many Lesson documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLessonsConnection: LessonConnection;
  /**
   * Update many lessons
   * @deprecated Please use the new paginated many mutation (updateManyLessonsConnection)
   */
  updateManyLessons: BatchPayload;
  /**
   * Delete many Lesson documents
   * @deprecated Please use the new paginated many mutation (deleteManyLessonsConnection)
   */
  deleteManyLessons: BatchPayload;
  /**
   * Publish many Lesson documents
   * @deprecated Please use the new paginated many mutation (publishManyLessonsConnection)
   */
  publishManyLessons: BatchPayload;
  /**
   * Unpublish many Lesson documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLessonsConnection)
   */
  unpublishManyLessons: BatchPayload;
  /** Schedule to publish one lesson */
  schedulePublishLesson?: Maybe<Lesson>;
  /** Unpublish one lesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLesson?: Maybe<Lesson>;
  /** Create one challenge */
  createChallenge?: Maybe<Challenge>;
  /** Update one challenge */
  updateChallenge?: Maybe<Challenge>;
  /** Delete one challenge from _all_ existing stages. Returns deleted document. */
  deleteChallenge?: Maybe<Challenge>;
  /** Upsert one challenge */
  upsertChallenge?: Maybe<Challenge>;
  /** Publish one challenge */
  publishChallenge?: Maybe<Challenge>;
  /** Unpublish one challenge from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishChallenge?: Maybe<Challenge>;
  /** Update many Challenge documents */
  updateManyChallengesConnection: ChallengeConnection;
  /** Delete many Challenge documents, return deleted documents */
  deleteManyChallengesConnection: ChallengeConnection;
  /** Publish many Challenge documents */
  publishManyChallengesConnection: ChallengeConnection;
  /** Find many Challenge documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyChallengesConnection: ChallengeConnection;
  /**
   * Update many challenges
   * @deprecated Please use the new paginated many mutation (updateManyChallengesConnection)
   */
  updateManyChallenges: BatchPayload;
  /**
   * Delete many Challenge documents
   * @deprecated Please use the new paginated many mutation (deleteManyChallengesConnection)
   */
  deleteManyChallenges: BatchPayload;
  /**
   * Publish many Challenge documents
   * @deprecated Please use the new paginated many mutation (publishManyChallengesConnection)
   */
  publishManyChallenges: BatchPayload;
  /**
   * Unpublish many Challenge documents
   * @deprecated Please use the new paginated many mutation (unpublishManyChallengesConnection)
   */
  unpublishManyChallenges: BatchPayload;
  /** Schedule to publish one challenge */
  schedulePublishChallenge?: Maybe<Challenge>;
  /** Unpublish one challenge from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishChallenge?: Maybe<Challenge>;
  /** Create one teacher */
  createTeacher?: Maybe<Teacher>;
  /** Update one teacher */
  updateTeacher?: Maybe<Teacher>;
  /** Delete one teacher from _all_ existing stages. Returns deleted document. */
  deleteTeacher?: Maybe<Teacher>;
  /** Upsert one teacher */
  upsertTeacher?: Maybe<Teacher>;
  /** Publish one teacher */
  publishTeacher?: Maybe<Teacher>;
  /** Unpublish one teacher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTeacher?: Maybe<Teacher>;
  /** Update many Teacher documents */
  updateManyTeachersConnection: TeacherConnection;
  /** Delete many Teacher documents, return deleted documents */
  deleteManyTeachersConnection: TeacherConnection;
  /** Publish many Teacher documents */
  publishManyTeachersConnection: TeacherConnection;
  /** Find many Teacher documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTeachersConnection: TeacherConnection;
  /**
   * Update many teachers
   * @deprecated Please use the new paginated many mutation (updateManyTeachersConnection)
   */
  updateManyTeachers: BatchPayload;
  /**
   * Delete many Teacher documents
   * @deprecated Please use the new paginated many mutation (deleteManyTeachersConnection)
   */
  deleteManyTeachers: BatchPayload;
  /**
   * Publish many Teacher documents
   * @deprecated Please use the new paginated many mutation (publishManyTeachersConnection)
   */
  publishManyTeachers: BatchPayload;
  /**
   * Unpublish many Teacher documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTeachersConnection)
   */
  unpublishManyTeachers: BatchPayload;
  /** Schedule to publish one teacher */
  schedulePublishTeacher?: Maybe<Teacher>;
  /** Unpublish one teacher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTeacher?: Maybe<Teacher>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
  from?: InputMaybe<Stage>;
  to?: Array<Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
  stage?: InputMaybe<Stage>;
  from?: Array<Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationScheduleUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
  data: ScheduledReleaseUpdateInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationCreateSubscriberArgs = {
  data: SubscriberCreateInput;
};


export type MutationUpdateSubscriberArgs = {
  where: SubscriberWhereUniqueInput;
  data: SubscriberUpdateInput;
};


export type MutationDeleteSubscriberArgs = {
  where: SubscriberWhereUniqueInput;
};


export type MutationUpsertSubscriberArgs = {
  where: SubscriberWhereUniqueInput;
  upsert: SubscriberUpsertInput;
};


export type MutationPublishSubscriberArgs = {
  where: SubscriberWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishSubscriberArgs = {
  where: SubscriberWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManySubscribersConnectionArgs = {
  where?: InputMaybe<SubscriberManyWhereInput>;
  data: SubscriberUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteManySubscribersConnectionArgs = {
  where?: InputMaybe<SubscriberManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationPublishManySubscribersConnectionArgs = {
  where?: InputMaybe<SubscriberManyWhereInput>;
  from?: InputMaybe<Stage>;
  to?: Array<Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationUnpublishManySubscribersConnectionArgs = {
  where?: InputMaybe<SubscriberManyWhereInput>;
  stage?: InputMaybe<Stage>;
  from?: Array<Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateManySubscribersArgs = {
  where?: InputMaybe<SubscriberManyWhereInput>;
  data: SubscriberUpdateManyInput;
};


export type MutationDeleteManySubscribersArgs = {
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationPublishManySubscribersArgs = {
  where?: InputMaybe<SubscriberManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManySubscribersArgs = {
  where?: InputMaybe<SubscriberManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationSchedulePublishSubscriberArgs = {
  where: SubscriberWhereUniqueInput;
  to?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationScheduleUnpublishSubscriberArgs = {
  where: SubscriberWhereUniqueInput;
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateLessonArgs = {
  data: LessonCreateInput;
};


export type MutationUpdateLessonArgs = {
  where: LessonWhereUniqueInput;
  data: LessonUpdateInput;
};


export type MutationDeleteLessonArgs = {
  where: LessonWhereUniqueInput;
};


export type MutationUpsertLessonArgs = {
  where: LessonWhereUniqueInput;
  upsert: LessonUpsertInput;
};


export type MutationPublishLessonArgs = {
  where: LessonWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishLessonArgs = {
  where: LessonWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyLessonsConnectionArgs = {
  where?: InputMaybe<LessonManyWhereInput>;
  data: LessonUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteManyLessonsConnectionArgs = {
  where?: InputMaybe<LessonManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationPublishManyLessonsConnectionArgs = {
  where?: InputMaybe<LessonManyWhereInput>;
  from?: InputMaybe<Stage>;
  to?: Array<Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationUnpublishManyLessonsConnectionArgs = {
  where?: InputMaybe<LessonManyWhereInput>;
  stage?: InputMaybe<Stage>;
  from?: Array<Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateManyLessonsArgs = {
  where?: InputMaybe<LessonManyWhereInput>;
  data: LessonUpdateManyInput;
};


export type MutationDeleteManyLessonsArgs = {
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationPublishManyLessonsArgs = {
  where?: InputMaybe<LessonManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyLessonsArgs = {
  where?: InputMaybe<LessonManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationSchedulePublishLessonArgs = {
  where: LessonWhereUniqueInput;
  to?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationScheduleUnpublishLessonArgs = {
  where: LessonWhereUniqueInput;
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateChallengeArgs = {
  data: ChallengeCreateInput;
};


export type MutationUpdateChallengeArgs = {
  where: ChallengeWhereUniqueInput;
  data: ChallengeUpdateInput;
};


export type MutationDeleteChallengeArgs = {
  where: ChallengeWhereUniqueInput;
};


export type MutationUpsertChallengeArgs = {
  where: ChallengeWhereUniqueInput;
  upsert: ChallengeUpsertInput;
};


export type MutationPublishChallengeArgs = {
  where: ChallengeWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishChallengeArgs = {
  where: ChallengeWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyChallengesConnectionArgs = {
  where?: InputMaybe<ChallengeManyWhereInput>;
  data: ChallengeUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteManyChallengesConnectionArgs = {
  where?: InputMaybe<ChallengeManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationPublishManyChallengesConnectionArgs = {
  where?: InputMaybe<ChallengeManyWhereInput>;
  from?: InputMaybe<Stage>;
  to?: Array<Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationUnpublishManyChallengesConnectionArgs = {
  where?: InputMaybe<ChallengeManyWhereInput>;
  stage?: InputMaybe<Stage>;
  from?: Array<Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateManyChallengesArgs = {
  where?: InputMaybe<ChallengeManyWhereInput>;
  data: ChallengeUpdateManyInput;
};


export type MutationDeleteManyChallengesArgs = {
  where?: InputMaybe<ChallengeManyWhereInput>;
};


export type MutationPublishManyChallengesArgs = {
  where?: InputMaybe<ChallengeManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyChallengesArgs = {
  where?: InputMaybe<ChallengeManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationSchedulePublishChallengeArgs = {
  where: ChallengeWhereUniqueInput;
  to?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationScheduleUnpublishChallengeArgs = {
  where: ChallengeWhereUniqueInput;
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateTeacherArgs = {
  data: TeacherCreateInput;
};


export type MutationUpdateTeacherArgs = {
  where: TeacherWhereUniqueInput;
  data: TeacherUpdateInput;
};


export type MutationDeleteTeacherArgs = {
  where: TeacherWhereUniqueInput;
};


export type MutationUpsertTeacherArgs = {
  where: TeacherWhereUniqueInput;
  upsert: TeacherUpsertInput;
};


export type MutationPublishTeacherArgs = {
  where: TeacherWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishTeacherArgs = {
  where: TeacherWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyTeachersConnectionArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
  data: TeacherUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteManyTeachersConnectionArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationPublishManyTeachersConnectionArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
  from?: InputMaybe<Stage>;
  to?: Array<Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationUnpublishManyTeachersConnectionArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
  stage?: InputMaybe<Stage>;
  from?: Array<Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateManyTeachersArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
  data: TeacherUpdateManyInput;
};


export type MutationDeleteManyTeachersArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationPublishManyTeachersArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyTeachersArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationSchedulePublishTeacherArgs = {
  where: TeacherWhereUniqueInput;
  to?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationScheduleUnpublishTeacherArgs = {
  where: TeacherWhereUniqueInput;
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve multiple subscribers */
  subscribers: Array<Subscriber>;
  /** Retrieve a single subscriber */
  subscriber?: Maybe<Subscriber>;
  /** Retrieve multiple subscribers using the Relay connection interface */
  subscribersConnection: SubscriberConnection;
  /** Retrieve document version */
  subscriberVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple lessons */
  lessons: Array<Lesson>;
  /** Retrieve a single lesson */
  lesson?: Maybe<Lesson>;
  /** Retrieve multiple lessons using the Relay connection interface */
  lessonsConnection: LessonConnection;
  /** Retrieve document version */
  lessonVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple challenges */
  challenges: Array<Challenge>;
  /** Retrieve a single challenge */
  challenge?: Maybe<Challenge>;
  /** Retrieve multiple challenges using the Relay connection interface */
  challengesConnection: ChallengeConnection;
  /** Retrieve document version */
  challengeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple teachers */
  teachers: Array<Teacher>;
  /** Retrieve a single teacher */
  teacher?: Maybe<Teacher>;
  /** Retrieve multiple teachers using the Relay connection interface */
  teachersConnection: TeacherConnection;
  /** Retrieve document version */
  teacherVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersArgs = {
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: InputMaybe<AssetWhereInput>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: InputMaybe<AssetWhereInput>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryScheduledOperationsArgs = {
  where?: InputMaybe<ScheduledOperationWhereInput>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryScheduledOperationsConnectionArgs = {
  where?: InputMaybe<ScheduledOperationWhereInput>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryScheduledReleasesArgs = {
  where?: InputMaybe<ScheduledReleaseWhereInput>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryScheduledReleasesConnectionArgs = {
  where?: InputMaybe<ScheduledReleaseWhereInput>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySubscribersArgs = {
  where?: InputMaybe<SubscriberWhereInput>;
  orderBy?: InputMaybe<SubscriberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySubscriberArgs = {
  where: SubscriberWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySubscribersConnectionArgs = {
  where?: InputMaybe<SubscriberWhereInput>;
  orderBy?: InputMaybe<SubscriberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySubscriberVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLessonsArgs = {
  where?: InputMaybe<LessonWhereInput>;
  orderBy?: InputMaybe<LessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryLessonArgs = {
  where: LessonWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryLessonsConnectionArgs = {
  where?: InputMaybe<LessonWhereInput>;
  orderBy?: InputMaybe<LessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryLessonVersionArgs = {
  where: VersionWhereInput;
};


export type QueryChallengesArgs = {
  where?: InputMaybe<ChallengeWhereInput>;
  orderBy?: InputMaybe<ChallengeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryChallengeArgs = {
  where: ChallengeWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryChallengesConnectionArgs = {
  where?: InputMaybe<ChallengeWhereInput>;
  orderBy?: InputMaybe<ChallengeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryChallengeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTeachersArgs = {
  where?: InputMaybe<TeacherWhereInput>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTeacherArgs = {
  where: TeacherWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTeachersConnectionArgs = {
  where?: InputMaybe<TeacherWhereInput>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTeacherVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** operation Status */
  status: ScheduledOperationStatus;
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Challenge | Lesson | Subscriber | Teacher;

export type ScheduledOperationConnectInput = {
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  aggregate: Aggregate;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** The item at the end of the edge. */
  node: ScheduledOperation;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
};

export enum ScheduledOperationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Pending = 'PENDING',
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Canceled = 'CANCELED'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** Release Status */
  status: ScheduledReleaseStatus;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  where?: InputMaybe<ScheduledOperationWhereInput>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  aggregate: Aggregate;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** The item at the end of the edge. */
  node: ScheduledRelease;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
};

export enum ScheduledReleaseOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Pending = 'PENDING',
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
  Failed = 'FAILED'
}

export type ScheduledReleaseUpdateInput = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ScheduledReleaseWhereInput;
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type Subscriber = Node & {
  __typename?: 'Subscriber';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Subscriber>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** List of Subscriber versions */
  history: Array<Version>;
};


export type SubscriberDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type SubscriberCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberScheduledInArgs = {
  where?: InputMaybe<ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type SubscriberConnectInput = {
  /** Document to connect */
  where: SubscriberWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SubscriberConnection = {
  __typename?: 'SubscriberConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SubscriberEdge>;
  aggregate: Aggregate;
};

export type SubscriberCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email: Scalars['String'];
};

export type SubscriberCreateManyInlineInput = {
  /** Create and connect multiple existing Subscriber documents */
  create?: InputMaybe<Array<SubscriberCreateInput>>;
  /** Connect multiple existing Subscriber documents */
  connect?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
};

export type SubscriberCreateOneInlineInput = {
  /** Create and connect one Subscriber document */
  create?: InputMaybe<SubscriberCreateInput>;
  /** Connect one existing Subscriber document */
  connect?: InputMaybe<SubscriberWhereUniqueInput>;
};

/** An edge in a connection. */
export type SubscriberEdge = {
  __typename?: 'SubscriberEdge';
  /** The item at the end of the edge. */
  node: Subscriber;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type SubscriberManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriberWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
};

export enum SubscriberOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC'
}

export type SubscriberUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type SubscriberUpdateManyInlineInput = {
  /** Create and connect multiple Subscriber documents */
  create?: InputMaybe<Array<SubscriberCreateInput>>;
  /** Connect multiple existing Subscriber documents */
  connect?: InputMaybe<Array<SubscriberConnectInput>>;
  /** Override currently-connected documents with multiple existing Subscriber documents */
  set?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Update multiple Subscriber documents */
  update?: InputMaybe<Array<SubscriberUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Subscriber documents */
  upsert?: InputMaybe<Array<SubscriberUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Subscriber documents */
  disconnect?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Delete multiple Subscriber documents */
  delete?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
};

export type SubscriberUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type SubscriberUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SubscriberWhereInput;
  /** Update many input */
  data: SubscriberUpdateManyInput;
};

export type SubscriberUpdateOneInlineInput = {
  /** Create and connect one Subscriber document */
  create?: InputMaybe<SubscriberCreateInput>;
  /** Update single Subscriber document */
  update?: InputMaybe<SubscriberUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Subscriber document */
  upsert?: InputMaybe<SubscriberUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Subscriber document */
  connect?: InputMaybe<SubscriberWhereUniqueInput>;
  /** Disconnect currently connected Subscriber document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Subscriber document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type SubscriberUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SubscriberWhereUniqueInput;
  /** Document to update */
  data: SubscriberUpdateInput;
};

export type SubscriberUpsertInput = {
  /** Create document if it didn't exist */
  create: SubscriberCreateInput;
  /** Update document if it exists */
  update: SubscriberUpdateInput;
};

export type SubscriberUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SubscriberWhereUniqueInput;
  /** Upsert data */
  data: SubscriberUpsertInput;
};

/** Identifies documents */
export type SubscriberWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriberWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
};

/** References Subscriber record uniquely */
export type SubscriberWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type Teacher = Node & {
  __typename?: 'Teacher';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Teacher>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  bio: Scalars['String'];
  avatarURL: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  lessons: Array<Lesson>;
  scheduledIn: Array<ScheduledOperation>;
  /** List of Teacher versions */
  history: Array<Version>;
};


export type TeacherDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type TeacherCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TeacherUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TeacherPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TeacherLessonsArgs = {
  where?: InputMaybe<LessonWhereInput>;
  orderBy?: InputMaybe<LessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TeacherScheduledInArgs = {
  where?: InputMaybe<ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TeacherHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};

export type TeacherConnectInput = {
  /** Document to connect */
  where: TeacherWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type TeacherConnection = {
  __typename?: 'TeacherConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<TeacherEdge>;
  aggregate: Aggregate;
};

export type TeacherCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  bio: Scalars['String'];
  avatarURL: Scalars['String'];
  lessons?: InputMaybe<LessonCreateManyInlineInput>;
};

export type TeacherCreateManyInlineInput = {
  /** Create and connect multiple existing Teacher documents */
  create?: InputMaybe<Array<TeacherCreateInput>>;
  /** Connect multiple existing Teacher documents */
  connect?: InputMaybe<Array<TeacherWhereUniqueInput>>;
};

export type TeacherCreateOneInlineInput = {
  /** Create and connect one Teacher document */
  create?: InputMaybe<TeacherCreateInput>;
  /** Connect one existing Teacher document */
  connect?: InputMaybe<TeacherWhereUniqueInput>;
};

/** An edge in a connection. */
export type TeacherEdge = {
  __typename?: 'TeacherEdge';
  /** The item at the end of the edge. */
  node: Teacher;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type TeacherManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  avatarURL?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  avatarURL_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatarURL_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  avatarURL_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  avatarURL_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatarURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatarURL_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  avatarURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatarURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatarURL_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  lessons_every?: InputMaybe<LessonWhereInput>;
  lessons_some?: InputMaybe<LessonWhereInput>;
  lessons_none?: InputMaybe<LessonWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
};

export enum TeacherOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  AvatarUrlAsc = 'avatarURL_ASC',
  AvatarUrlDesc = 'avatarURL_DESC'
}

export type TeacherUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  avatarURL?: InputMaybe<Scalars['String']>;
  lessons?: InputMaybe<LessonUpdateManyInlineInput>;
};

export type TeacherUpdateManyInlineInput = {
  /** Create and connect multiple Teacher documents */
  create?: InputMaybe<Array<TeacherCreateInput>>;
  /** Connect multiple existing Teacher documents */
  connect?: InputMaybe<Array<TeacherConnectInput>>;
  /** Override currently-connected documents with multiple existing Teacher documents */
  set?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Update multiple Teacher documents */
  update?: InputMaybe<Array<TeacherUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Teacher documents */
  upsert?: InputMaybe<Array<TeacherUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Teacher documents */
  disconnect?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Delete multiple Teacher documents */
  delete?: InputMaybe<Array<TeacherWhereUniqueInput>>;
};

export type TeacherUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  avatarURL?: InputMaybe<Scalars['String']>;
};

export type TeacherUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: TeacherWhereInput;
  /** Update many input */
  data: TeacherUpdateManyInput;
};

export type TeacherUpdateOneInlineInput = {
  /** Create and connect one Teacher document */
  create?: InputMaybe<TeacherCreateInput>;
  /** Update single Teacher document */
  update?: InputMaybe<TeacherUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Teacher document */
  upsert?: InputMaybe<TeacherUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Teacher document */
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  /** Disconnect currently connected Teacher document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Teacher document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type TeacherUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TeacherWhereUniqueInput;
  /** Document to update */
  data: TeacherUpdateInput;
};

export type TeacherUpsertInput = {
  /** Create document if it didn't exist */
  create: TeacherCreateInput;
  /** Update document if it exists */
  update: TeacherUpdateInput;
};

export type TeacherUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TeacherWhereUniqueInput;
  /** Upsert data */
  data: TeacherUpsertInput;
};

/** Identifies documents */
export type TeacherWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  avatarURL?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  avatarURL_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatarURL_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  avatarURL_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  avatarURL_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatarURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatarURL_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  avatarURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatarURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatarURL_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereInput>;
  updatedBy?: InputMaybe<UserWhereInput>;
  publishedBy?: InputMaybe<UserWhereInput>;
  lessons_every?: InputMaybe<LessonWhereInput>;
  lessons_some?: InputMaybe<LessonWhereInput>;
  lessons_none?: InputMaybe<LessonWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
};

/** References Teacher record uniquely */
export type TeacherWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type UserConnectInput = {
  /** Document to connect */
  where: UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type CreateSubscriberMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateSubscriberMutation = { __typename?: 'Mutation', createSubscriber?: { __typename?: 'Subscriber', id: string } | null };

export type GetLessonBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetLessonBySlugQuery = { __typename?: 'Query', lesson?: { __typename?: 'Lesson', title: string, videoId: string, description?: string | null, teacher?: { __typename?: 'Teacher', name: string, bio: string, avatarURL: string } | null } | null };

export type GetLessonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLessonsQuery = { __typename?: 'Query', lessons: Array<{ __typename?: 'Lesson', id: string, availableAt?: any | null, title: string, slug: string, lessonType: LessonType }> };


export const CreateSubscriberDocument = gql`
    mutation CreateSubscriber($name: String!, $email: String!) {
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}
    `;
export type CreateSubscriberMutationFn = Apollo.MutationFunction<CreateSubscriberMutation, CreateSubscriberMutationVariables>;

/**
 * __useCreateSubscriberMutation__
 *
 * To run a mutation, you first call `useCreateSubscriberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubscriberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubscriberMutation, { data, loading, error }] = useCreateSubscriberMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateSubscriberMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubscriberMutation, CreateSubscriberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubscriberMutation, CreateSubscriberMutationVariables>(CreateSubscriberDocument, options);
      }
export type CreateSubscriberMutationHookResult = ReturnType<typeof useCreateSubscriberMutation>;
export type CreateSubscriberMutationResult = Apollo.MutationResult<CreateSubscriberMutation>;
export type CreateSubscriberMutationOptions = Apollo.BaseMutationOptions<CreateSubscriberMutation, CreateSubscriberMutationVariables>;
export const GetLessonBySlugDocument = gql`
    query GetLessonBySlug($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      name
      bio
      avatarURL
    }
  }
}
    `;

/**
 * __useGetLessonBySlugQuery__
 *
 * To run a query within a React component, call `useGetLessonBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetLessonBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetLessonBySlugQuery, GetLessonBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLessonBySlugQuery, GetLessonBySlugQueryVariables>(GetLessonBySlugDocument, options);
      }
export function useGetLessonBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonBySlugQuery, GetLessonBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLessonBySlugQuery, GetLessonBySlugQueryVariables>(GetLessonBySlugDocument, options);
        }
export type GetLessonBySlugQueryHookResult = ReturnType<typeof useGetLessonBySlugQuery>;
export type GetLessonBySlugLazyQueryHookResult = ReturnType<typeof useGetLessonBySlugLazyQuery>;
export type GetLessonBySlugQueryResult = Apollo.QueryResult<GetLessonBySlugQuery, GetLessonBySlugQueryVariables>;
export const GetLessonsDocument = gql`
    query GetLessons {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    availableAt
    title
    slug
    lessonType
  }
}
    `;

/**
 * __useGetLessonsQuery__
 *
 * To run a query within a React component, call `useGetLessonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLessonsQuery(baseOptions?: Apollo.QueryHookOptions<GetLessonsQuery, GetLessonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLessonsQuery, GetLessonsQueryVariables>(GetLessonsDocument, options);
      }
export function useGetLessonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonsQuery, GetLessonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLessonsQuery, GetLessonsQueryVariables>(GetLessonsDocument, options);
        }
export type GetLessonsQueryHookResult = ReturnType<typeof useGetLessonsQuery>;
export type GetLessonsLazyQueryHookResult = ReturnType<typeof useGetLessonsLazyQuery>;
export type GetLessonsQueryResult = Apollo.QueryResult<GetLessonsQuery, GetLessonsQueryVariables>;