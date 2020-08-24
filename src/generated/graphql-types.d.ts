export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type CertificationsCsv = Node & {
  __typename?: 'CertificationsCsv';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  Name?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
  Authority?: Maybe<Scalars['String']>;
  Started_On?: Maybe<Scalars['String']>;
  Finished_On?: Maybe<Scalars['String']>;
  License_Number?: Maybe<Scalars['String']>;
};

export type CertificationsCsvConnection = {
  __typename?: 'CertificationsCsvConnection';
  totalCount: Scalars['Int'];
  edges: Array<CertificationsCsvEdge>;
  nodes: Array<CertificationsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<CertificationsCsvGroupConnection>;
};


export type CertificationsCsvConnectionDistinctArgs = {
  field: CertificationsCsvFieldsEnum;
};


export type CertificationsCsvConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: CertificationsCsvFieldsEnum;
};

export type CertificationsCsvEdge = {
  __typename?: 'CertificationsCsvEdge';
  next?: Maybe<CertificationsCsv>;
  node: CertificationsCsv;
  previous?: Maybe<CertificationsCsv>;
};

export type CertificationsCsvFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'Name'
  | 'Url'
  | 'Authority'
  | 'Started_On'
  | 'Finished_On'
  | 'License_Number';

export type CertificationsCsvFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Name?: Maybe<StringQueryOperatorInput>;
  Url?: Maybe<StringQueryOperatorInput>;
  Authority?: Maybe<StringQueryOperatorInput>;
  Started_On?: Maybe<StringQueryOperatorInput>;
  Finished_On?: Maybe<StringQueryOperatorInput>;
  License_Number?: Maybe<StringQueryOperatorInput>;
};

export type CertificationsCsvGroupConnection = {
  __typename?: 'CertificationsCsvGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<CertificationsCsvEdge>;
  nodes: Array<CertificationsCsv>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type CertificationsCsvSortInput = {
  fields?: Maybe<Array<Maybe<CertificationsCsvFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ConnectionsCsv = Node & {
  __typename?: 'ConnectionsCsv';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  First_Name?: Maybe<Scalars['String']>;
  Last_Name?: Maybe<Scalars['String']>;
  Email_Address?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Position?: Maybe<Scalars['String']>;
  Connected_On?: Maybe<Scalars['String']>;
};

export type ConnectionsCsvConnection = {
  __typename?: 'ConnectionsCsvConnection';
  totalCount: Scalars['Int'];
  edges: Array<ConnectionsCsvEdge>;
  nodes: Array<ConnectionsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ConnectionsCsvGroupConnection>;
};


export type ConnectionsCsvConnectionDistinctArgs = {
  field: ConnectionsCsvFieldsEnum;
};


export type ConnectionsCsvConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ConnectionsCsvFieldsEnum;
};

export type ConnectionsCsvEdge = {
  __typename?: 'ConnectionsCsvEdge';
  next?: Maybe<ConnectionsCsv>;
  node: ConnectionsCsv;
  previous?: Maybe<ConnectionsCsv>;
};

export type ConnectionsCsvFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'First_Name'
  | 'Last_Name'
  | 'Email_Address'
  | 'Company'
  | 'Position'
  | 'Connected_On';

export type ConnectionsCsvFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  First_Name?: Maybe<StringQueryOperatorInput>;
  Last_Name?: Maybe<StringQueryOperatorInput>;
  Email_Address?: Maybe<StringQueryOperatorInput>;
  Company?: Maybe<StringQueryOperatorInput>;
  Position?: Maybe<StringQueryOperatorInput>;
  Connected_On?: Maybe<StringQueryOperatorInput>;
};

export type ConnectionsCsvFilterListInput = {
  elemMatch?: Maybe<ConnectionsCsvFilterInput>;
};

export type ConnectionsCsvGroupConnection = {
  __typename?: 'ConnectionsCsvGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ConnectionsCsvEdge>;
  nodes: Array<ConnectionsCsv>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ConnectionsCsvSortInput = {
  fields?: Maybe<Array<Maybe<ConnectionsCsvFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type EducationCsv = Node & {
  __typename?: 'EducationCsv';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  School_Name?: Maybe<Scalars['String']>;
  Start_Date?: Maybe<Scalars['Date']>;
  End_Date?: Maybe<Scalars['Date']>;
  Notes?: Maybe<Scalars['String']>;
  Degree_Name?: Maybe<Scalars['String']>;
  Activities?: Maybe<Scalars['String']>;
};


export type EducationCsvStart_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type EducationCsvEnd_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type EducationCsvConnection = {
  __typename?: 'EducationCsvConnection';
  totalCount: Scalars['Int'];
  edges: Array<EducationCsvEdge>;
  nodes: Array<EducationCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<EducationCsvGroupConnection>;
};


export type EducationCsvConnectionDistinctArgs = {
  field: EducationCsvFieldsEnum;
};


export type EducationCsvConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: EducationCsvFieldsEnum;
};

export type EducationCsvEdge = {
  __typename?: 'EducationCsvEdge';
  next?: Maybe<EducationCsv>;
  node: EducationCsv;
  previous?: Maybe<EducationCsv>;
};

export type EducationCsvFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'School_Name'
  | 'Start_Date'
  | 'End_Date'
  | 'Notes'
  | 'Degree_Name'
  | 'Activities';

export type EducationCsvFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  School_Name?: Maybe<StringQueryOperatorInput>;
  Start_Date?: Maybe<DateQueryOperatorInput>;
  End_Date?: Maybe<DateQueryOperatorInput>;
  Notes?: Maybe<StringQueryOperatorInput>;
  Degree_Name?: Maybe<StringQueryOperatorInput>;
  Activities?: Maybe<StringQueryOperatorInput>;
};

export type EducationCsvFilterListInput = {
  elemMatch?: Maybe<EducationCsvFilterInput>;
};

export type EducationCsvGroupConnection = {
  __typename?: 'EducationCsvGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<EducationCsvEdge>;
  nodes: Array<EducationCsv>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type EducationCsvSortInput = {
  fields?: Maybe<Array<Maybe<EducationCsvFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  fields?: Maybe<FileFields>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childCertificationsCsv?: Maybe<CertificationsCsv>;
  childrenEducationCsv?: Maybe<Array<Maybe<EducationCsv>>>;
  childrenConnectionsCsv?: Maybe<Array<Maybe<ConnectionsCsv>>>;
  childrenLanguagesCsv?: Maybe<Array<Maybe<LanguagesCsv>>>;
  childrenOrganizationsCsv?: Maybe<Array<Maybe<OrganizationsCsv>>>;
  childrenPositionsCsv?: Maybe<Array<Maybe<PositionsCsv>>>;
  childrenRecommendationsReceivedCsv?: Maybe<Array<Maybe<RecommendationsReceivedCsv>>>;
  childProfileCsv?: Maybe<ProfileCsv>;
  childrenSkillsCsv?: Maybe<Array<Maybe<SkillsCsv>>>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFields = {
  __typename?: 'FileFields';
  slug?: Maybe<Scalars['String']>;
  exif?: Maybe<FileFieldsExif>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'fields___slug'
  | 'fields___exif___image___ImageWidth'
  | 'fields___exif___image___ImageHeight'
  | 'fields___exif___image___BitsPerSample'
  | 'fields___exif___image___PhotometricInterpretation'
  | 'fields___exif___image___Make'
  | 'fields___exif___image___Model'
  | 'fields___exif___image___Orientation'
  | 'fields___exif___image___SamplesPerPixel'
  | 'fields___exif___image___XResolution'
  | 'fields___exif___image___YResolution'
  | 'fields___exif___image___ResolutionUnit'
  | 'fields___exif___image___Software'
  | 'fields___exif___image___ModifyDate'
  | 'fields___exif___image___YCbCrPositioning'
  | 'fields___exif___image___ExifOffset'
  | 'fields___exif___image___GPSInfo'
  | 'fields___exif___image___ImageDescription'
  | 'fields___exif___thumbnail___Compression'
  | 'fields___exif___thumbnail___XResolution'
  | 'fields___exif___thumbnail___YResolution'
  | 'fields___exif___thumbnail___ResolutionUnit'
  | 'fields___exif___thumbnail___ThumbnailOffset'
  | 'fields___exif___thumbnail___ThumbnailLength'
  | 'fields___exif___exif____36880'
  | 'fields___exif___exif___ExposureTime'
  | 'fields___exif___exif___FNumber'
  | 'fields___exif___exif___ExposureProgram'
  | 'fields___exif___exif___ISO'
  | 'fields___exif___exif___DateTimeOriginal'
  | 'fields___exif___exif___DateTimeDigitized'
  | 'fields___exif___exif___CompressedBitsPerPixel'
  | 'fields___exif___exif___ShutterSpeedValue'
  | 'fields___exif___exif___ApertureValue'
  | 'fields___exif___exif___ExposureBiasValue'
  | 'fields___exif___exif___MaxApertureValue'
  | 'fields___exif___exif___SubjectDistance'
  | 'fields___exif___exif___MeteringMode'
  | 'fields___exif___exif___LightSource'
  | 'fields___exif___exif___Flash'
  | 'fields___exif___exif___FocalLength'
  | 'fields___exif___exif___SubSecTime'
  | 'fields___exif___exif___SubSecTimeOriginal'
  | 'fields___exif___exif___SubSecTimeDigitized'
  | 'fields___exif___exif___ColorSpace'
  | 'fields___exif___exif___PixelXDimension'
  | 'fields___exif___exif___PixelYDimension'
  | 'fields___exif___exif___InteropOffset'
  | 'fields___exif___exif___SensingMethod'
  | 'fields___exif___exif___CustomRendered'
  | 'fields___exif___exif___ExposureMode'
  | 'fields___exif___exif___WhiteBalance'
  | 'fields___exif___exif___DigitalZoomRatio'
  | 'fields___exif___exif___FocalLengthIn35mmFormat'
  | 'fields___exif___exif___SceneCaptureType'
  | 'fields___exif___exif___GainControl'
  | 'fields___exif___exif___Contrast'
  | 'fields___exif___exif___Saturation'
  | 'fields___exif___exif___Sharpness'
  | 'fields___exif___exif___SubjectDistanceRange'
  | 'fields___exif___exif___SensitivityType'
  | 'fields___exif___exif___FocalPlaneXResolution'
  | 'fields___exif___exif___FocalPlaneYResolution'
  | 'fields___exif___exif___FocalPlaneResolutionUnit'
  | 'fields___exif___exif___BodySerialNumber'
  | 'fields___exif___exif___LensSpecification'
  | 'fields___exif___exif___LensModel'
  | 'fields___exif___gps___GPSVersionID'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___fields___gallery'
  | 'childImageSharp___fields___order'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childCertificationsCsv___id'
  | 'childCertificationsCsv___parent___id'
  | 'childCertificationsCsv___parent___parent___id'
  | 'childCertificationsCsv___parent___parent___children'
  | 'childCertificationsCsv___parent___children'
  | 'childCertificationsCsv___parent___children___id'
  | 'childCertificationsCsv___parent___children___children'
  | 'childCertificationsCsv___parent___internal___content'
  | 'childCertificationsCsv___parent___internal___contentDigest'
  | 'childCertificationsCsv___parent___internal___description'
  | 'childCertificationsCsv___parent___internal___fieldOwners'
  | 'childCertificationsCsv___parent___internal___ignoreType'
  | 'childCertificationsCsv___parent___internal___mediaType'
  | 'childCertificationsCsv___parent___internal___owner'
  | 'childCertificationsCsv___parent___internal___type'
  | 'childCertificationsCsv___children'
  | 'childCertificationsCsv___children___id'
  | 'childCertificationsCsv___children___parent___id'
  | 'childCertificationsCsv___children___parent___children'
  | 'childCertificationsCsv___children___children'
  | 'childCertificationsCsv___children___children___id'
  | 'childCertificationsCsv___children___children___children'
  | 'childCertificationsCsv___children___internal___content'
  | 'childCertificationsCsv___children___internal___contentDigest'
  | 'childCertificationsCsv___children___internal___description'
  | 'childCertificationsCsv___children___internal___fieldOwners'
  | 'childCertificationsCsv___children___internal___ignoreType'
  | 'childCertificationsCsv___children___internal___mediaType'
  | 'childCertificationsCsv___children___internal___owner'
  | 'childCertificationsCsv___children___internal___type'
  | 'childCertificationsCsv___internal___content'
  | 'childCertificationsCsv___internal___contentDigest'
  | 'childCertificationsCsv___internal___description'
  | 'childCertificationsCsv___internal___fieldOwners'
  | 'childCertificationsCsv___internal___ignoreType'
  | 'childCertificationsCsv___internal___mediaType'
  | 'childCertificationsCsv___internal___owner'
  | 'childCertificationsCsv___internal___type'
  | 'childCertificationsCsv___Name'
  | 'childCertificationsCsv___Url'
  | 'childCertificationsCsv___Authority'
  | 'childCertificationsCsv___Started_On'
  | 'childCertificationsCsv___Finished_On'
  | 'childCertificationsCsv___License_Number'
  | 'childrenEducationCsv'
  | 'childrenEducationCsv___id'
  | 'childrenEducationCsv___parent___id'
  | 'childrenEducationCsv___parent___parent___id'
  | 'childrenEducationCsv___parent___parent___children'
  | 'childrenEducationCsv___parent___children'
  | 'childrenEducationCsv___parent___children___id'
  | 'childrenEducationCsv___parent___children___children'
  | 'childrenEducationCsv___parent___internal___content'
  | 'childrenEducationCsv___parent___internal___contentDigest'
  | 'childrenEducationCsv___parent___internal___description'
  | 'childrenEducationCsv___parent___internal___fieldOwners'
  | 'childrenEducationCsv___parent___internal___ignoreType'
  | 'childrenEducationCsv___parent___internal___mediaType'
  | 'childrenEducationCsv___parent___internal___owner'
  | 'childrenEducationCsv___parent___internal___type'
  | 'childrenEducationCsv___children'
  | 'childrenEducationCsv___children___id'
  | 'childrenEducationCsv___children___parent___id'
  | 'childrenEducationCsv___children___parent___children'
  | 'childrenEducationCsv___children___children'
  | 'childrenEducationCsv___children___children___id'
  | 'childrenEducationCsv___children___children___children'
  | 'childrenEducationCsv___children___internal___content'
  | 'childrenEducationCsv___children___internal___contentDigest'
  | 'childrenEducationCsv___children___internal___description'
  | 'childrenEducationCsv___children___internal___fieldOwners'
  | 'childrenEducationCsv___children___internal___ignoreType'
  | 'childrenEducationCsv___children___internal___mediaType'
  | 'childrenEducationCsv___children___internal___owner'
  | 'childrenEducationCsv___children___internal___type'
  | 'childrenEducationCsv___internal___content'
  | 'childrenEducationCsv___internal___contentDigest'
  | 'childrenEducationCsv___internal___description'
  | 'childrenEducationCsv___internal___fieldOwners'
  | 'childrenEducationCsv___internal___ignoreType'
  | 'childrenEducationCsv___internal___mediaType'
  | 'childrenEducationCsv___internal___owner'
  | 'childrenEducationCsv___internal___type'
  | 'childrenEducationCsv___School_Name'
  | 'childrenEducationCsv___Start_Date'
  | 'childrenEducationCsv___End_Date'
  | 'childrenEducationCsv___Notes'
  | 'childrenEducationCsv___Degree_Name'
  | 'childrenEducationCsv___Activities'
  | 'childrenConnectionsCsv'
  | 'childrenConnectionsCsv___id'
  | 'childrenConnectionsCsv___parent___id'
  | 'childrenConnectionsCsv___parent___parent___id'
  | 'childrenConnectionsCsv___parent___parent___children'
  | 'childrenConnectionsCsv___parent___children'
  | 'childrenConnectionsCsv___parent___children___id'
  | 'childrenConnectionsCsv___parent___children___children'
  | 'childrenConnectionsCsv___parent___internal___content'
  | 'childrenConnectionsCsv___parent___internal___contentDigest'
  | 'childrenConnectionsCsv___parent___internal___description'
  | 'childrenConnectionsCsv___parent___internal___fieldOwners'
  | 'childrenConnectionsCsv___parent___internal___ignoreType'
  | 'childrenConnectionsCsv___parent___internal___mediaType'
  | 'childrenConnectionsCsv___parent___internal___owner'
  | 'childrenConnectionsCsv___parent___internal___type'
  | 'childrenConnectionsCsv___children'
  | 'childrenConnectionsCsv___children___id'
  | 'childrenConnectionsCsv___children___parent___id'
  | 'childrenConnectionsCsv___children___parent___children'
  | 'childrenConnectionsCsv___children___children'
  | 'childrenConnectionsCsv___children___children___id'
  | 'childrenConnectionsCsv___children___children___children'
  | 'childrenConnectionsCsv___children___internal___content'
  | 'childrenConnectionsCsv___children___internal___contentDigest'
  | 'childrenConnectionsCsv___children___internal___description'
  | 'childrenConnectionsCsv___children___internal___fieldOwners'
  | 'childrenConnectionsCsv___children___internal___ignoreType'
  | 'childrenConnectionsCsv___children___internal___mediaType'
  | 'childrenConnectionsCsv___children___internal___owner'
  | 'childrenConnectionsCsv___children___internal___type'
  | 'childrenConnectionsCsv___internal___content'
  | 'childrenConnectionsCsv___internal___contentDigest'
  | 'childrenConnectionsCsv___internal___description'
  | 'childrenConnectionsCsv___internal___fieldOwners'
  | 'childrenConnectionsCsv___internal___ignoreType'
  | 'childrenConnectionsCsv___internal___mediaType'
  | 'childrenConnectionsCsv___internal___owner'
  | 'childrenConnectionsCsv___internal___type'
  | 'childrenConnectionsCsv___First_Name'
  | 'childrenConnectionsCsv___Last_Name'
  | 'childrenConnectionsCsv___Email_Address'
  | 'childrenConnectionsCsv___Company'
  | 'childrenConnectionsCsv___Position'
  | 'childrenConnectionsCsv___Connected_On'
  | 'childrenLanguagesCsv'
  | 'childrenLanguagesCsv___id'
  | 'childrenLanguagesCsv___parent___id'
  | 'childrenLanguagesCsv___parent___parent___id'
  | 'childrenLanguagesCsv___parent___parent___children'
  | 'childrenLanguagesCsv___parent___children'
  | 'childrenLanguagesCsv___parent___children___id'
  | 'childrenLanguagesCsv___parent___children___children'
  | 'childrenLanguagesCsv___parent___internal___content'
  | 'childrenLanguagesCsv___parent___internal___contentDigest'
  | 'childrenLanguagesCsv___parent___internal___description'
  | 'childrenLanguagesCsv___parent___internal___fieldOwners'
  | 'childrenLanguagesCsv___parent___internal___ignoreType'
  | 'childrenLanguagesCsv___parent___internal___mediaType'
  | 'childrenLanguagesCsv___parent___internal___owner'
  | 'childrenLanguagesCsv___parent___internal___type'
  | 'childrenLanguagesCsv___children'
  | 'childrenLanguagesCsv___children___id'
  | 'childrenLanguagesCsv___children___parent___id'
  | 'childrenLanguagesCsv___children___parent___children'
  | 'childrenLanguagesCsv___children___children'
  | 'childrenLanguagesCsv___children___children___id'
  | 'childrenLanguagesCsv___children___children___children'
  | 'childrenLanguagesCsv___children___internal___content'
  | 'childrenLanguagesCsv___children___internal___contentDigest'
  | 'childrenLanguagesCsv___children___internal___description'
  | 'childrenLanguagesCsv___children___internal___fieldOwners'
  | 'childrenLanguagesCsv___children___internal___ignoreType'
  | 'childrenLanguagesCsv___children___internal___mediaType'
  | 'childrenLanguagesCsv___children___internal___owner'
  | 'childrenLanguagesCsv___children___internal___type'
  | 'childrenLanguagesCsv___internal___content'
  | 'childrenLanguagesCsv___internal___contentDigest'
  | 'childrenLanguagesCsv___internal___description'
  | 'childrenLanguagesCsv___internal___fieldOwners'
  | 'childrenLanguagesCsv___internal___ignoreType'
  | 'childrenLanguagesCsv___internal___mediaType'
  | 'childrenLanguagesCsv___internal___owner'
  | 'childrenLanguagesCsv___internal___type'
  | 'childrenLanguagesCsv___Name'
  | 'childrenLanguagesCsv___Proficiency'
  | 'childrenOrganizationsCsv'
  | 'childrenOrganizationsCsv___id'
  | 'childrenOrganizationsCsv___parent___id'
  | 'childrenOrganizationsCsv___parent___parent___id'
  | 'childrenOrganizationsCsv___parent___parent___children'
  | 'childrenOrganizationsCsv___parent___children'
  | 'childrenOrganizationsCsv___parent___children___id'
  | 'childrenOrganizationsCsv___parent___children___children'
  | 'childrenOrganizationsCsv___parent___internal___content'
  | 'childrenOrganizationsCsv___parent___internal___contentDigest'
  | 'childrenOrganizationsCsv___parent___internal___description'
  | 'childrenOrganizationsCsv___parent___internal___fieldOwners'
  | 'childrenOrganizationsCsv___parent___internal___ignoreType'
  | 'childrenOrganizationsCsv___parent___internal___mediaType'
  | 'childrenOrganizationsCsv___parent___internal___owner'
  | 'childrenOrganizationsCsv___parent___internal___type'
  | 'childrenOrganizationsCsv___children'
  | 'childrenOrganizationsCsv___children___id'
  | 'childrenOrganizationsCsv___children___parent___id'
  | 'childrenOrganizationsCsv___children___parent___children'
  | 'childrenOrganizationsCsv___children___children'
  | 'childrenOrganizationsCsv___children___children___id'
  | 'childrenOrganizationsCsv___children___children___children'
  | 'childrenOrganizationsCsv___children___internal___content'
  | 'childrenOrganizationsCsv___children___internal___contentDigest'
  | 'childrenOrganizationsCsv___children___internal___description'
  | 'childrenOrganizationsCsv___children___internal___fieldOwners'
  | 'childrenOrganizationsCsv___children___internal___ignoreType'
  | 'childrenOrganizationsCsv___children___internal___mediaType'
  | 'childrenOrganizationsCsv___children___internal___owner'
  | 'childrenOrganizationsCsv___children___internal___type'
  | 'childrenOrganizationsCsv___internal___content'
  | 'childrenOrganizationsCsv___internal___contentDigest'
  | 'childrenOrganizationsCsv___internal___description'
  | 'childrenOrganizationsCsv___internal___fieldOwners'
  | 'childrenOrganizationsCsv___internal___ignoreType'
  | 'childrenOrganizationsCsv___internal___mediaType'
  | 'childrenOrganizationsCsv___internal___owner'
  | 'childrenOrganizationsCsv___internal___type'
  | 'childrenOrganizationsCsv___Name'
  | 'childrenOrganizationsCsv___Description'
  | 'childrenOrganizationsCsv___Position'
  | 'childrenOrganizationsCsv___Started_On'
  | 'childrenOrganizationsCsv___Finished_On'
  | 'childrenPositionsCsv'
  | 'childrenPositionsCsv___id'
  | 'childrenPositionsCsv___parent___id'
  | 'childrenPositionsCsv___parent___parent___id'
  | 'childrenPositionsCsv___parent___parent___children'
  | 'childrenPositionsCsv___parent___children'
  | 'childrenPositionsCsv___parent___children___id'
  | 'childrenPositionsCsv___parent___children___children'
  | 'childrenPositionsCsv___parent___internal___content'
  | 'childrenPositionsCsv___parent___internal___contentDigest'
  | 'childrenPositionsCsv___parent___internal___description'
  | 'childrenPositionsCsv___parent___internal___fieldOwners'
  | 'childrenPositionsCsv___parent___internal___ignoreType'
  | 'childrenPositionsCsv___parent___internal___mediaType'
  | 'childrenPositionsCsv___parent___internal___owner'
  | 'childrenPositionsCsv___parent___internal___type'
  | 'childrenPositionsCsv___children'
  | 'childrenPositionsCsv___children___id'
  | 'childrenPositionsCsv___children___parent___id'
  | 'childrenPositionsCsv___children___parent___children'
  | 'childrenPositionsCsv___children___children'
  | 'childrenPositionsCsv___children___children___id'
  | 'childrenPositionsCsv___children___children___children'
  | 'childrenPositionsCsv___children___internal___content'
  | 'childrenPositionsCsv___children___internal___contentDigest'
  | 'childrenPositionsCsv___children___internal___description'
  | 'childrenPositionsCsv___children___internal___fieldOwners'
  | 'childrenPositionsCsv___children___internal___ignoreType'
  | 'childrenPositionsCsv___children___internal___mediaType'
  | 'childrenPositionsCsv___children___internal___owner'
  | 'childrenPositionsCsv___children___internal___type'
  | 'childrenPositionsCsv___internal___content'
  | 'childrenPositionsCsv___internal___contentDigest'
  | 'childrenPositionsCsv___internal___description'
  | 'childrenPositionsCsv___internal___fieldOwners'
  | 'childrenPositionsCsv___internal___ignoreType'
  | 'childrenPositionsCsv___internal___mediaType'
  | 'childrenPositionsCsv___internal___owner'
  | 'childrenPositionsCsv___internal___type'
  | 'childrenPositionsCsv___Company_Name'
  | 'childrenPositionsCsv___Title'
  | 'childrenPositionsCsv___Description'
  | 'childrenPositionsCsv___Location'
  | 'childrenPositionsCsv___Started_On'
  | 'childrenPositionsCsv___Finished_On'
  | 'childrenRecommendationsReceivedCsv'
  | 'childrenRecommendationsReceivedCsv___id'
  | 'childrenRecommendationsReceivedCsv___parent___id'
  | 'childrenRecommendationsReceivedCsv___parent___parent___id'
  | 'childrenRecommendationsReceivedCsv___parent___parent___children'
  | 'childrenRecommendationsReceivedCsv___parent___children'
  | 'childrenRecommendationsReceivedCsv___parent___children___id'
  | 'childrenRecommendationsReceivedCsv___parent___children___children'
  | 'childrenRecommendationsReceivedCsv___parent___internal___content'
  | 'childrenRecommendationsReceivedCsv___parent___internal___contentDigest'
  | 'childrenRecommendationsReceivedCsv___parent___internal___description'
  | 'childrenRecommendationsReceivedCsv___parent___internal___fieldOwners'
  | 'childrenRecommendationsReceivedCsv___parent___internal___ignoreType'
  | 'childrenRecommendationsReceivedCsv___parent___internal___mediaType'
  | 'childrenRecommendationsReceivedCsv___parent___internal___owner'
  | 'childrenRecommendationsReceivedCsv___parent___internal___type'
  | 'childrenRecommendationsReceivedCsv___children'
  | 'childrenRecommendationsReceivedCsv___children___id'
  | 'childrenRecommendationsReceivedCsv___children___parent___id'
  | 'childrenRecommendationsReceivedCsv___children___parent___children'
  | 'childrenRecommendationsReceivedCsv___children___children'
  | 'childrenRecommendationsReceivedCsv___children___children___id'
  | 'childrenRecommendationsReceivedCsv___children___children___children'
  | 'childrenRecommendationsReceivedCsv___children___internal___content'
  | 'childrenRecommendationsReceivedCsv___children___internal___contentDigest'
  | 'childrenRecommendationsReceivedCsv___children___internal___description'
  | 'childrenRecommendationsReceivedCsv___children___internal___fieldOwners'
  | 'childrenRecommendationsReceivedCsv___children___internal___ignoreType'
  | 'childrenRecommendationsReceivedCsv___children___internal___mediaType'
  | 'childrenRecommendationsReceivedCsv___children___internal___owner'
  | 'childrenRecommendationsReceivedCsv___children___internal___type'
  | 'childrenRecommendationsReceivedCsv___internal___content'
  | 'childrenRecommendationsReceivedCsv___internal___contentDigest'
  | 'childrenRecommendationsReceivedCsv___internal___description'
  | 'childrenRecommendationsReceivedCsv___internal___fieldOwners'
  | 'childrenRecommendationsReceivedCsv___internal___ignoreType'
  | 'childrenRecommendationsReceivedCsv___internal___mediaType'
  | 'childrenRecommendationsReceivedCsv___internal___owner'
  | 'childrenRecommendationsReceivedCsv___internal___type'
  | 'childrenRecommendationsReceivedCsv___First_Name'
  | 'childrenRecommendationsReceivedCsv___Last_Name'
  | 'childrenRecommendationsReceivedCsv___Company'
  | 'childrenRecommendationsReceivedCsv___Job_Title'
  | 'childrenRecommendationsReceivedCsv___Text'
  | 'childrenRecommendationsReceivedCsv___Creation_Date'
  | 'childrenRecommendationsReceivedCsv___Status'
  | 'childProfileCsv___id'
  | 'childProfileCsv___parent___id'
  | 'childProfileCsv___parent___parent___id'
  | 'childProfileCsv___parent___parent___children'
  | 'childProfileCsv___parent___children'
  | 'childProfileCsv___parent___children___id'
  | 'childProfileCsv___parent___children___children'
  | 'childProfileCsv___parent___internal___content'
  | 'childProfileCsv___parent___internal___contentDigest'
  | 'childProfileCsv___parent___internal___description'
  | 'childProfileCsv___parent___internal___fieldOwners'
  | 'childProfileCsv___parent___internal___ignoreType'
  | 'childProfileCsv___parent___internal___mediaType'
  | 'childProfileCsv___parent___internal___owner'
  | 'childProfileCsv___parent___internal___type'
  | 'childProfileCsv___children'
  | 'childProfileCsv___children___id'
  | 'childProfileCsv___children___parent___id'
  | 'childProfileCsv___children___parent___children'
  | 'childProfileCsv___children___children'
  | 'childProfileCsv___children___children___id'
  | 'childProfileCsv___children___children___children'
  | 'childProfileCsv___children___internal___content'
  | 'childProfileCsv___children___internal___contentDigest'
  | 'childProfileCsv___children___internal___description'
  | 'childProfileCsv___children___internal___fieldOwners'
  | 'childProfileCsv___children___internal___ignoreType'
  | 'childProfileCsv___children___internal___mediaType'
  | 'childProfileCsv___children___internal___owner'
  | 'childProfileCsv___children___internal___type'
  | 'childProfileCsv___internal___content'
  | 'childProfileCsv___internal___contentDigest'
  | 'childProfileCsv___internal___description'
  | 'childProfileCsv___internal___fieldOwners'
  | 'childProfileCsv___internal___ignoreType'
  | 'childProfileCsv___internal___mediaType'
  | 'childProfileCsv___internal___owner'
  | 'childProfileCsv___internal___type'
  | 'childProfileCsv___First_Name'
  | 'childProfileCsv___Last_Name'
  | 'childProfileCsv___Maiden_Name'
  | 'childProfileCsv___Address'
  | 'childProfileCsv___Birth_Date'
  | 'childProfileCsv___Headline'
  | 'childProfileCsv___Summary'
  | 'childProfileCsv___Industry'
  | 'childProfileCsv___Zip_Code'
  | 'childProfileCsv___Geo_Location'
  | 'childProfileCsv___Twitter_Handles'
  | 'childProfileCsv___Websites'
  | 'childProfileCsv___Instant_Messengers'
  | 'childrenSkillsCsv'
  | 'childrenSkillsCsv___id'
  | 'childrenSkillsCsv___parent___id'
  | 'childrenSkillsCsv___parent___parent___id'
  | 'childrenSkillsCsv___parent___parent___children'
  | 'childrenSkillsCsv___parent___children'
  | 'childrenSkillsCsv___parent___children___id'
  | 'childrenSkillsCsv___parent___children___children'
  | 'childrenSkillsCsv___parent___internal___content'
  | 'childrenSkillsCsv___parent___internal___contentDigest'
  | 'childrenSkillsCsv___parent___internal___description'
  | 'childrenSkillsCsv___parent___internal___fieldOwners'
  | 'childrenSkillsCsv___parent___internal___ignoreType'
  | 'childrenSkillsCsv___parent___internal___mediaType'
  | 'childrenSkillsCsv___parent___internal___owner'
  | 'childrenSkillsCsv___parent___internal___type'
  | 'childrenSkillsCsv___children'
  | 'childrenSkillsCsv___children___id'
  | 'childrenSkillsCsv___children___parent___id'
  | 'childrenSkillsCsv___children___parent___children'
  | 'childrenSkillsCsv___children___children'
  | 'childrenSkillsCsv___children___children___id'
  | 'childrenSkillsCsv___children___children___children'
  | 'childrenSkillsCsv___children___internal___content'
  | 'childrenSkillsCsv___children___internal___contentDigest'
  | 'childrenSkillsCsv___children___internal___description'
  | 'childrenSkillsCsv___children___internal___fieldOwners'
  | 'childrenSkillsCsv___children___internal___ignoreType'
  | 'childrenSkillsCsv___children___internal___mediaType'
  | 'childrenSkillsCsv___children___internal___owner'
  | 'childrenSkillsCsv___children___internal___type'
  | 'childrenSkillsCsv___internal___content'
  | 'childrenSkillsCsv___internal___contentDigest'
  | 'childrenSkillsCsv___internal___description'
  | 'childrenSkillsCsv___internal___fieldOwners'
  | 'childrenSkillsCsv___internal___ignoreType'
  | 'childrenSkillsCsv___internal___mediaType'
  | 'childrenSkillsCsv___internal___owner'
  | 'childrenSkillsCsv___internal___type'
  | 'childrenSkillsCsv___Name'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___frontmatter___images'
  | 'childMarkdownRemark___frontmatter___imageJustification'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type FileFieldsExif = {
  __typename?: 'FileFieldsExif';
  image?: Maybe<FileFieldsExifImage>;
  thumbnail?: Maybe<FileFieldsExifThumbnail>;
  exif?: Maybe<FileFieldsExifExif>;
  gps?: Maybe<FileFieldsExifGps>;
};

export type FileFieldsExifExif = {
  __typename?: 'FileFieldsExifExif';
  _36880?: Maybe<Scalars['String']>;
  ExposureTime?: Maybe<Scalars['Float']>;
  FNumber?: Maybe<Scalars['Float']>;
  ExposureProgram?: Maybe<Scalars['Int']>;
  ISO?: Maybe<Scalars['Int']>;
  DateTimeOriginal?: Maybe<Scalars['Date']>;
  DateTimeDigitized?: Maybe<Scalars['Date']>;
  CompressedBitsPerPixel?: Maybe<Scalars['Int']>;
  ShutterSpeedValue?: Maybe<Scalars['Float']>;
  ApertureValue?: Maybe<Scalars['Float']>;
  ExposureBiasValue?: Maybe<Scalars['Float']>;
  MaxApertureValue?: Maybe<Scalars['Float']>;
  SubjectDistance?: Maybe<Scalars['Float']>;
  MeteringMode?: Maybe<Scalars['Int']>;
  LightSource?: Maybe<Scalars['Int']>;
  Flash?: Maybe<Scalars['Int']>;
  FocalLength?: Maybe<Scalars['Int']>;
  SubSecTime?: Maybe<Scalars['String']>;
  SubSecTimeOriginal?: Maybe<Scalars['String']>;
  SubSecTimeDigitized?: Maybe<Scalars['String']>;
  ColorSpace?: Maybe<Scalars['Int']>;
  PixelXDimension?: Maybe<Scalars['Int']>;
  PixelYDimension?: Maybe<Scalars['Int']>;
  InteropOffset?: Maybe<Scalars['Int']>;
  SensingMethod?: Maybe<Scalars['Int']>;
  CustomRendered?: Maybe<Scalars['Int']>;
  ExposureMode?: Maybe<Scalars['Int']>;
  WhiteBalance?: Maybe<Scalars['Int']>;
  DigitalZoomRatio?: Maybe<Scalars['Int']>;
  FocalLengthIn35mmFormat?: Maybe<Scalars['Int']>;
  SceneCaptureType?: Maybe<Scalars['Int']>;
  GainControl?: Maybe<Scalars['Int']>;
  Contrast?: Maybe<Scalars['Int']>;
  Saturation?: Maybe<Scalars['Int']>;
  Sharpness?: Maybe<Scalars['Int']>;
  SubjectDistanceRange?: Maybe<Scalars['Int']>;
  SensitivityType?: Maybe<Scalars['Int']>;
  FocalPlaneXResolution?: Maybe<Scalars['Float']>;
  FocalPlaneYResolution?: Maybe<Scalars['Float']>;
  FocalPlaneResolutionUnit?: Maybe<Scalars['Int']>;
  BodySerialNumber?: Maybe<Scalars['String']>;
  LensSpecification?: Maybe<Array<Maybe<Scalars['Float']>>>;
  LensModel?: Maybe<Scalars['String']>;
};


export type FileFieldsExifExifDateTimeOriginalArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileFieldsExifExifDateTimeDigitizedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileFieldsExifExifFilterInput = {
  _36880?: Maybe<StringQueryOperatorInput>;
  ExposureTime?: Maybe<FloatQueryOperatorInput>;
  FNumber?: Maybe<FloatQueryOperatorInput>;
  ExposureProgram?: Maybe<IntQueryOperatorInput>;
  ISO?: Maybe<IntQueryOperatorInput>;
  DateTimeOriginal?: Maybe<DateQueryOperatorInput>;
  DateTimeDigitized?: Maybe<DateQueryOperatorInput>;
  CompressedBitsPerPixel?: Maybe<IntQueryOperatorInput>;
  ShutterSpeedValue?: Maybe<FloatQueryOperatorInput>;
  ApertureValue?: Maybe<FloatQueryOperatorInput>;
  ExposureBiasValue?: Maybe<FloatQueryOperatorInput>;
  MaxApertureValue?: Maybe<FloatQueryOperatorInput>;
  SubjectDistance?: Maybe<FloatQueryOperatorInput>;
  MeteringMode?: Maybe<IntQueryOperatorInput>;
  LightSource?: Maybe<IntQueryOperatorInput>;
  Flash?: Maybe<IntQueryOperatorInput>;
  FocalLength?: Maybe<IntQueryOperatorInput>;
  SubSecTime?: Maybe<StringQueryOperatorInput>;
  SubSecTimeOriginal?: Maybe<StringQueryOperatorInput>;
  SubSecTimeDigitized?: Maybe<StringQueryOperatorInput>;
  ColorSpace?: Maybe<IntQueryOperatorInput>;
  PixelXDimension?: Maybe<IntQueryOperatorInput>;
  PixelYDimension?: Maybe<IntQueryOperatorInput>;
  InteropOffset?: Maybe<IntQueryOperatorInput>;
  SensingMethod?: Maybe<IntQueryOperatorInput>;
  CustomRendered?: Maybe<IntQueryOperatorInput>;
  ExposureMode?: Maybe<IntQueryOperatorInput>;
  WhiteBalance?: Maybe<IntQueryOperatorInput>;
  DigitalZoomRatio?: Maybe<IntQueryOperatorInput>;
  FocalLengthIn35mmFormat?: Maybe<IntQueryOperatorInput>;
  SceneCaptureType?: Maybe<IntQueryOperatorInput>;
  GainControl?: Maybe<IntQueryOperatorInput>;
  Contrast?: Maybe<IntQueryOperatorInput>;
  Saturation?: Maybe<IntQueryOperatorInput>;
  Sharpness?: Maybe<IntQueryOperatorInput>;
  SubjectDistanceRange?: Maybe<IntQueryOperatorInput>;
  SensitivityType?: Maybe<IntQueryOperatorInput>;
  FocalPlaneXResolution?: Maybe<FloatQueryOperatorInput>;
  FocalPlaneYResolution?: Maybe<FloatQueryOperatorInput>;
  FocalPlaneResolutionUnit?: Maybe<IntQueryOperatorInput>;
  BodySerialNumber?: Maybe<StringQueryOperatorInput>;
  LensSpecification?: Maybe<FloatQueryOperatorInput>;
  LensModel?: Maybe<StringQueryOperatorInput>;
};

export type FileFieldsExifFilterInput = {
  image?: Maybe<FileFieldsExifImageFilterInput>;
  thumbnail?: Maybe<FileFieldsExifThumbnailFilterInput>;
  exif?: Maybe<FileFieldsExifExifFilterInput>;
  gps?: Maybe<FileFieldsExifGpsFilterInput>;
};

export type FileFieldsExifGps = {
  __typename?: 'FileFieldsExifGps';
  GPSVersionID?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileFieldsExifGpsFilterInput = {
  GPSVersionID?: Maybe<IntQueryOperatorInput>;
};

export type FileFieldsExifImage = {
  __typename?: 'FileFieldsExifImage';
  ImageWidth?: Maybe<Scalars['Int']>;
  ImageHeight?: Maybe<Scalars['Int']>;
  BitsPerSample?: Maybe<Array<Maybe<Scalars['Int']>>>;
  PhotometricInterpretation?: Maybe<Scalars['Int']>;
  Make?: Maybe<Scalars['String']>;
  Model?: Maybe<Scalars['String']>;
  Orientation?: Maybe<Scalars['Int']>;
  SamplesPerPixel?: Maybe<Scalars['Int']>;
  XResolution?: Maybe<Scalars['Int']>;
  YResolution?: Maybe<Scalars['Int']>;
  ResolutionUnit?: Maybe<Scalars['Int']>;
  Software?: Maybe<Scalars['String']>;
  ModifyDate?: Maybe<Scalars['Date']>;
  YCbCrPositioning?: Maybe<Scalars['Int']>;
  ExifOffset?: Maybe<Scalars['Int']>;
  GPSInfo?: Maybe<Scalars['Int']>;
  ImageDescription?: Maybe<Scalars['String']>;
};


export type FileFieldsExifImageModifyDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileFieldsExifImageFilterInput = {
  ImageWidth?: Maybe<IntQueryOperatorInput>;
  ImageHeight?: Maybe<IntQueryOperatorInput>;
  BitsPerSample?: Maybe<IntQueryOperatorInput>;
  PhotometricInterpretation?: Maybe<IntQueryOperatorInput>;
  Make?: Maybe<StringQueryOperatorInput>;
  Model?: Maybe<StringQueryOperatorInput>;
  Orientation?: Maybe<IntQueryOperatorInput>;
  SamplesPerPixel?: Maybe<IntQueryOperatorInput>;
  XResolution?: Maybe<IntQueryOperatorInput>;
  YResolution?: Maybe<IntQueryOperatorInput>;
  ResolutionUnit?: Maybe<IntQueryOperatorInput>;
  Software?: Maybe<StringQueryOperatorInput>;
  ModifyDate?: Maybe<DateQueryOperatorInput>;
  YCbCrPositioning?: Maybe<IntQueryOperatorInput>;
  ExifOffset?: Maybe<IntQueryOperatorInput>;
  GPSInfo?: Maybe<IntQueryOperatorInput>;
  ImageDescription?: Maybe<StringQueryOperatorInput>;
};

export type FileFieldsExifThumbnail = {
  __typename?: 'FileFieldsExifThumbnail';
  Compression?: Maybe<Scalars['Int']>;
  XResolution?: Maybe<Scalars['Int']>;
  YResolution?: Maybe<Scalars['Int']>;
  ResolutionUnit?: Maybe<Scalars['Int']>;
  ThumbnailOffset?: Maybe<Scalars['Int']>;
  ThumbnailLength?: Maybe<Scalars['Int']>;
};

export type FileFieldsExifThumbnailFilterInput = {
  Compression?: Maybe<IntQueryOperatorInput>;
  XResolution?: Maybe<IntQueryOperatorInput>;
  YResolution?: Maybe<IntQueryOperatorInput>;
  ResolutionUnit?: Maybe<IntQueryOperatorInput>;
  ThumbnailOffset?: Maybe<IntQueryOperatorInput>;
  ThumbnailLength?: Maybe<IntQueryOperatorInput>;
};

export type FileFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  exif?: Maybe<FileFieldsExifFilterInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<FileFieldsFilterInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childCertificationsCsv?: Maybe<CertificationsCsvFilterInput>;
  childrenEducationCsv?: Maybe<EducationCsvFilterListInput>;
  childrenConnectionsCsv?: Maybe<ConnectionsCsvFilterListInput>;
  childrenLanguagesCsv?: Maybe<LanguagesCsvFilterListInput>;
  childrenOrganizationsCsv?: Maybe<OrganizationsCsvFilterListInput>;
  childrenPositionsCsv?: Maybe<PositionsCsvFilterListInput>;
  childrenRecommendationsReceivedCsv?: Maybe<RecommendationsReceivedCsvFilterListInput>;
  childProfileCsv?: Maybe<ProfileCsvFilterInput>;
  childrenSkillsCsv?: Maybe<SkillsCsvFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type HeadingsMdx = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  fields?: Maybe<ImageSharpFields>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFields = {
  __typename?: 'ImageSharpFields';
  gallery?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'fields___gallery'
  | 'fields___order'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFieldsFilterInput = {
  gallery?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  fields?: Maybe<ImageSharpFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type LanguagesCsv = Node & {
  __typename?: 'LanguagesCsv';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  Name?: Maybe<Scalars['String']>;
  Proficiency?: Maybe<Scalars['String']>;
};

export type LanguagesCsvConnection = {
  __typename?: 'LanguagesCsvConnection';
  totalCount: Scalars['Int'];
  edges: Array<LanguagesCsvEdge>;
  nodes: Array<LanguagesCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<LanguagesCsvGroupConnection>;
};


export type LanguagesCsvConnectionDistinctArgs = {
  field: LanguagesCsvFieldsEnum;
};


export type LanguagesCsvConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: LanguagesCsvFieldsEnum;
};

export type LanguagesCsvEdge = {
  __typename?: 'LanguagesCsvEdge';
  next?: Maybe<LanguagesCsv>;
  node: LanguagesCsv;
  previous?: Maybe<LanguagesCsv>;
};

export type LanguagesCsvFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'Name'
  | 'Proficiency';

export type LanguagesCsvFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Name?: Maybe<StringQueryOperatorInput>;
  Proficiency?: Maybe<StringQueryOperatorInput>;
};

export type LanguagesCsvFilterListInput = {
  elemMatch?: Maybe<LanguagesCsvFilterInput>;
};

export type LanguagesCsvGroupConnection = {
  __typename?: 'LanguagesCsvGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<LanguagesCsvEdge>;
  nodes: Array<LanguagesCsv>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type LanguagesCsvSortInput = {
  fields?: Maybe<Array<Maybe<LanguagesCsvFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownExcerptFormats = 
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum = 
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___date'
  | 'frontmatter___images'
  | 'frontmatter___imageJustification'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  images?: Maybe<Scalars['Boolean']>;
  imageJustification?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  images?: Maybe<BooleanQueryOperatorInput>;
  imageJustification?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type Mdx = Node & {
  __typename?: 'Mdx';
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
  __typename?: 'MdxConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: 'MdxEdge';
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFieldsEnum = 
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: 'MdxFrontmatter';
  title: Scalars['String'];
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx';
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: 'MdxWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type OrganizationsCsv = Node & {
  __typename?: 'OrganizationsCsv';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Position?: Maybe<Scalars['String']>;
  Started_On?: Maybe<Scalars['String']>;
  Finished_On?: Maybe<Scalars['String']>;
};

export type OrganizationsCsvConnection = {
  __typename?: 'OrganizationsCsvConnection';
  totalCount: Scalars['Int'];
  edges: Array<OrganizationsCsvEdge>;
  nodes: Array<OrganizationsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<OrganizationsCsvGroupConnection>;
};


export type OrganizationsCsvConnectionDistinctArgs = {
  field: OrganizationsCsvFieldsEnum;
};


export type OrganizationsCsvConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: OrganizationsCsvFieldsEnum;
};

export type OrganizationsCsvEdge = {
  __typename?: 'OrganizationsCsvEdge';
  next?: Maybe<OrganizationsCsv>;
  node: OrganizationsCsv;
  previous?: Maybe<OrganizationsCsv>;
};

export type OrganizationsCsvFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'Name'
  | 'Description'
  | 'Position'
  | 'Started_On'
  | 'Finished_On';

export type OrganizationsCsvFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Name?: Maybe<StringQueryOperatorInput>;
  Description?: Maybe<StringQueryOperatorInput>;
  Position?: Maybe<StringQueryOperatorInput>;
  Started_On?: Maybe<StringQueryOperatorInput>;
  Finished_On?: Maybe<StringQueryOperatorInput>;
};

export type OrganizationsCsvFilterListInput = {
  elemMatch?: Maybe<OrganizationsCsvFilterInput>;
};

export type OrganizationsCsvGroupConnection = {
  __typename?: 'OrganizationsCsvGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<OrganizationsCsvEdge>;
  nodes: Array<OrganizationsCsv>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type OrganizationsCsvSortInput = {
  fields?: Maybe<Array<Maybe<OrganizationsCsvFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PositionsCsv = Node & {
  __typename?: 'PositionsCsv';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  Company_Name?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Started_On?: Maybe<Scalars['String']>;
  Finished_On?: Maybe<Scalars['String']>;
};

export type PositionsCsvConnection = {
  __typename?: 'PositionsCsvConnection';
  totalCount: Scalars['Int'];
  edges: Array<PositionsCsvEdge>;
  nodes: Array<PositionsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PositionsCsvGroupConnection>;
};


export type PositionsCsvConnectionDistinctArgs = {
  field: PositionsCsvFieldsEnum;
};


export type PositionsCsvConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PositionsCsvFieldsEnum;
};

export type PositionsCsvEdge = {
  __typename?: 'PositionsCsvEdge';
  next?: Maybe<PositionsCsv>;
  node: PositionsCsv;
  previous?: Maybe<PositionsCsv>;
};

export type PositionsCsvFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'Company_Name'
  | 'Title'
  | 'Description'
  | 'Location'
  | 'Started_On'
  | 'Finished_On';

export type PositionsCsvFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Company_Name?: Maybe<StringQueryOperatorInput>;
  Title?: Maybe<StringQueryOperatorInput>;
  Description?: Maybe<StringQueryOperatorInput>;
  Location?: Maybe<StringQueryOperatorInput>;
  Started_On?: Maybe<StringQueryOperatorInput>;
  Finished_On?: Maybe<StringQueryOperatorInput>;
};

export type PositionsCsvFilterListInput = {
  elemMatch?: Maybe<PositionsCsvFilterInput>;
};

export type PositionsCsvGroupConnection = {
  __typename?: 'PositionsCsvGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PositionsCsvEdge>;
  nodes: Array<PositionsCsv>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PositionsCsvSortInput = {
  fields?: Maybe<Array<Maybe<PositionsCsvFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type ProfileCsv = Node & {
  __typename?: 'ProfileCsv';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  First_Name?: Maybe<Scalars['String']>;
  Last_Name?: Maybe<Scalars['String']>;
  Maiden_Name?: Maybe<Scalars['String']>;
  Address?: Maybe<Scalars['String']>;
  Birth_Date?: Maybe<Scalars['String']>;
  Headline?: Maybe<Scalars['String']>;
  Summary?: Maybe<Scalars['String']>;
  Industry?: Maybe<Scalars['String']>;
  Zip_Code?: Maybe<Scalars['String']>;
  Geo_Location?: Maybe<Scalars['String']>;
  Twitter_Handles?: Maybe<Scalars['String']>;
  Websites?: Maybe<Scalars['String']>;
  Instant_Messengers?: Maybe<Scalars['String']>;
};

export type ProfileCsvConnection = {
  __typename?: 'ProfileCsvConnection';
  totalCount: Scalars['Int'];
  edges: Array<ProfileCsvEdge>;
  nodes: Array<ProfileCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ProfileCsvGroupConnection>;
};


export type ProfileCsvConnectionDistinctArgs = {
  field: ProfileCsvFieldsEnum;
};


export type ProfileCsvConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ProfileCsvFieldsEnum;
};

export type ProfileCsvEdge = {
  __typename?: 'ProfileCsvEdge';
  next?: Maybe<ProfileCsv>;
  node: ProfileCsv;
  previous?: Maybe<ProfileCsv>;
};

export type ProfileCsvFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'First_Name'
  | 'Last_Name'
  | 'Maiden_Name'
  | 'Address'
  | 'Birth_Date'
  | 'Headline'
  | 'Summary'
  | 'Industry'
  | 'Zip_Code'
  | 'Geo_Location'
  | 'Twitter_Handles'
  | 'Websites'
  | 'Instant_Messengers';

export type ProfileCsvFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  First_Name?: Maybe<StringQueryOperatorInput>;
  Last_Name?: Maybe<StringQueryOperatorInput>;
  Maiden_Name?: Maybe<StringQueryOperatorInput>;
  Address?: Maybe<StringQueryOperatorInput>;
  Birth_Date?: Maybe<StringQueryOperatorInput>;
  Headline?: Maybe<StringQueryOperatorInput>;
  Summary?: Maybe<StringQueryOperatorInput>;
  Industry?: Maybe<StringQueryOperatorInput>;
  Zip_Code?: Maybe<StringQueryOperatorInput>;
  Geo_Location?: Maybe<StringQueryOperatorInput>;
  Twitter_Handles?: Maybe<StringQueryOperatorInput>;
  Websites?: Maybe<StringQueryOperatorInput>;
  Instant_Messengers?: Maybe<StringQueryOperatorInput>;
};

export type ProfileCsvGroupConnection = {
  __typename?: 'ProfileCsvGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ProfileCsvEdge>;
  nodes: Array<ProfileCsv>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ProfileCsvSortInput = {
  fields?: Maybe<Array<Maybe<ProfileCsvFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  connectionsCsv?: Maybe<ConnectionsCsv>;
  allConnectionsCsv: ConnectionsCsvConnection;
  positionsCsv?: Maybe<PositionsCsv>;
  allPositionsCsv: PositionsCsvConnection;
  skillsCsv?: Maybe<SkillsCsv>;
  allSkillsCsv: SkillsCsvConnection;
  profileCsv?: Maybe<ProfileCsv>;
  allProfileCsv: ProfileCsvConnection;
  recommendationsReceivedCsv?: Maybe<RecommendationsReceivedCsv>;
  allRecommendationsReceivedCsv: RecommendationsReceivedCsvConnection;
  organizationsCsv?: Maybe<OrganizationsCsv>;
  allOrganizationsCsv: OrganizationsCsvConnection;
  languagesCsv?: Maybe<LanguagesCsv>;
  allLanguagesCsv: LanguagesCsvConnection;
  educationCsv?: Maybe<EducationCsv>;
  allEducationCsv: EducationCsvConnection;
  certificationsCsv?: Maybe<CertificationsCsv>;
  allCertificationsCsv: CertificationsCsvConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<FileFieldsFilterInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childCertificationsCsv?: Maybe<CertificationsCsvFilterInput>;
  childrenEducationCsv?: Maybe<EducationCsvFilterListInput>;
  childrenConnectionsCsv?: Maybe<ConnectionsCsvFilterListInput>;
  childrenLanguagesCsv?: Maybe<LanguagesCsvFilterListInput>;
  childrenOrganizationsCsv?: Maybe<OrganizationsCsvFilterListInput>;
  childrenPositionsCsv?: Maybe<PositionsCsvFilterListInput>;
  childrenRecommendationsReceivedCsv?: Maybe<RecommendationsReceivedCsvFilterListInput>;
  childProfileCsv?: Maybe<ProfileCsvFilterInput>;
  childrenSkillsCsv?: Maybe<SkillsCsvFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  fields?: Maybe<ImageSharpFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryConnectionsCsvArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  First_Name?: Maybe<StringQueryOperatorInput>;
  Last_Name?: Maybe<StringQueryOperatorInput>;
  Email_Address?: Maybe<StringQueryOperatorInput>;
  Company?: Maybe<StringQueryOperatorInput>;
  Position?: Maybe<StringQueryOperatorInput>;
  Connected_On?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllConnectionsCsvArgs = {
  filter?: Maybe<ConnectionsCsvFilterInput>;
  sort?: Maybe<ConnectionsCsvSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPositionsCsvArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Company_Name?: Maybe<StringQueryOperatorInput>;
  Title?: Maybe<StringQueryOperatorInput>;
  Description?: Maybe<StringQueryOperatorInput>;
  Location?: Maybe<StringQueryOperatorInput>;
  Started_On?: Maybe<StringQueryOperatorInput>;
  Finished_On?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllPositionsCsvArgs = {
  filter?: Maybe<PositionsCsvFilterInput>;
  sort?: Maybe<PositionsCsvSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySkillsCsvArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Name?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSkillsCsvArgs = {
  filter?: Maybe<SkillsCsvFilterInput>;
  sort?: Maybe<SkillsCsvSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryProfileCsvArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  First_Name?: Maybe<StringQueryOperatorInput>;
  Last_Name?: Maybe<StringQueryOperatorInput>;
  Maiden_Name?: Maybe<StringQueryOperatorInput>;
  Address?: Maybe<StringQueryOperatorInput>;
  Birth_Date?: Maybe<StringQueryOperatorInput>;
  Headline?: Maybe<StringQueryOperatorInput>;
  Summary?: Maybe<StringQueryOperatorInput>;
  Industry?: Maybe<StringQueryOperatorInput>;
  Zip_Code?: Maybe<StringQueryOperatorInput>;
  Geo_Location?: Maybe<StringQueryOperatorInput>;
  Twitter_Handles?: Maybe<StringQueryOperatorInput>;
  Websites?: Maybe<StringQueryOperatorInput>;
  Instant_Messengers?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllProfileCsvArgs = {
  filter?: Maybe<ProfileCsvFilterInput>;
  sort?: Maybe<ProfileCsvSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryRecommendationsReceivedCsvArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  First_Name?: Maybe<StringQueryOperatorInput>;
  Last_Name?: Maybe<StringQueryOperatorInput>;
  Company?: Maybe<StringQueryOperatorInput>;
  Job_Title?: Maybe<StringQueryOperatorInput>;
  Text?: Maybe<StringQueryOperatorInput>;
  Creation_Date?: Maybe<StringQueryOperatorInput>;
  Status?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllRecommendationsReceivedCsvArgs = {
  filter?: Maybe<RecommendationsReceivedCsvFilterInput>;
  sort?: Maybe<RecommendationsReceivedCsvSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryOrganizationsCsvArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Name?: Maybe<StringQueryOperatorInput>;
  Description?: Maybe<StringQueryOperatorInput>;
  Position?: Maybe<StringQueryOperatorInput>;
  Started_On?: Maybe<StringQueryOperatorInput>;
  Finished_On?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllOrganizationsCsvArgs = {
  filter?: Maybe<OrganizationsCsvFilterInput>;
  sort?: Maybe<OrganizationsCsvSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryLanguagesCsvArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Name?: Maybe<StringQueryOperatorInput>;
  Proficiency?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllLanguagesCsvArgs = {
  filter?: Maybe<LanguagesCsvFilterInput>;
  sort?: Maybe<LanguagesCsvSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryEducationCsvArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  School_Name?: Maybe<StringQueryOperatorInput>;
  Start_Date?: Maybe<DateQueryOperatorInput>;
  End_Date?: Maybe<DateQueryOperatorInput>;
  Notes?: Maybe<StringQueryOperatorInput>;
  Degree_Name?: Maybe<StringQueryOperatorInput>;
  Activities?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllEducationCsvArgs = {
  filter?: Maybe<EducationCsvFilterInput>;
  sort?: Maybe<EducationCsvSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryCertificationsCsvArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Name?: Maybe<StringQueryOperatorInput>;
  Url?: Maybe<StringQueryOperatorInput>;
  Authority?: Maybe<StringQueryOperatorInput>;
  Started_On?: Maybe<StringQueryOperatorInput>;
  Finished_On?: Maybe<StringQueryOperatorInput>;
  License_Number?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllCertificationsCsvArgs = {
  filter?: Maybe<CertificationsCsvFilterInput>;
  sort?: Maybe<CertificationsCsvSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type RecommendationsReceivedCsv = Node & {
  __typename?: 'RecommendationsReceivedCsv';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  First_Name?: Maybe<Scalars['String']>;
  Last_Name?: Maybe<Scalars['String']>;
  Company?: Maybe<Scalars['String']>;
  Job_Title?: Maybe<Scalars['String']>;
  Text?: Maybe<Scalars['String']>;
  Creation_Date?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
};

export type RecommendationsReceivedCsvConnection = {
  __typename?: 'RecommendationsReceivedCsvConnection';
  totalCount: Scalars['Int'];
  edges: Array<RecommendationsReceivedCsvEdge>;
  nodes: Array<RecommendationsReceivedCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<RecommendationsReceivedCsvGroupConnection>;
};


export type RecommendationsReceivedCsvConnectionDistinctArgs = {
  field: RecommendationsReceivedCsvFieldsEnum;
};


export type RecommendationsReceivedCsvConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: RecommendationsReceivedCsvFieldsEnum;
};

export type RecommendationsReceivedCsvEdge = {
  __typename?: 'RecommendationsReceivedCsvEdge';
  next?: Maybe<RecommendationsReceivedCsv>;
  node: RecommendationsReceivedCsv;
  previous?: Maybe<RecommendationsReceivedCsv>;
};

export type RecommendationsReceivedCsvFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'First_Name'
  | 'Last_Name'
  | 'Company'
  | 'Job_Title'
  | 'Text'
  | 'Creation_Date'
  | 'Status';

export type RecommendationsReceivedCsvFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  First_Name?: Maybe<StringQueryOperatorInput>;
  Last_Name?: Maybe<StringQueryOperatorInput>;
  Company?: Maybe<StringQueryOperatorInput>;
  Job_Title?: Maybe<StringQueryOperatorInput>;
  Text?: Maybe<StringQueryOperatorInput>;
  Creation_Date?: Maybe<StringQueryOperatorInput>;
  Status?: Maybe<StringQueryOperatorInput>;
};

export type RecommendationsReceivedCsvFilterListInput = {
  elemMatch?: Maybe<RecommendationsReceivedCsvFilterInput>;
};

export type RecommendationsReceivedCsvGroupConnection = {
  __typename?: 'RecommendationsReceivedCsvGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<RecommendationsReceivedCsvEdge>;
  nodes: Array<RecommendationsReceivedCsv>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type RecommendationsReceivedCsvSortInput = {
  fields?: Maybe<Array<Maybe<RecommendationsReceivedCsvFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  slug?: Maybe<Scalars['String']>;
  queryRegex?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  imageQuery?: Maybe<Scalars['String']>;
  content?: Maybe<SitePageContextContent>;
};

export type SitePageContextContent = {
  __typename?: 'SitePageContextContent';
  html?: Maybe<Scalars['String']>;
  parent?: Maybe<SitePageContextContentParent>;
  frontmatter?: Maybe<SitePageContextContentFrontmatter>;
};

export type SitePageContextContentFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<SitePageContextContentParentFilterInput>;
  frontmatter?: Maybe<SitePageContextContentFrontmatterFilterInput>;
};

export type SitePageContextContentFrontmatter = {
  __typename?: 'SitePageContextContentFrontmatter';
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  images?: Maybe<Scalars['Boolean']>;
  imageJustification?: Maybe<Scalars['String']>;
};

export type SitePageContextContentFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  images?: Maybe<BooleanQueryOperatorInput>;
  imageJustification?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentParent = {
  __typename?: 'SitePageContextContentParent';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};

export type SitePageContextContentParentFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  queryRegex?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  imageQuery?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<SitePageContextContentFilterInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'context___queryRegex'
  | 'context___title'
  | 'context___imageQuery'
  | 'context___content___html'
  | 'context___content___parent___id'
  | 'context___content___parent___name'
  | 'context___content___parent___relativeDirectory'
  | 'context___content___parent___relativePath'
  | 'context___content___frontmatter___title'
  | 'context___content___frontmatter___date'
  | 'context___content___frontmatter___images'
  | 'context___content___frontmatter___imageJustification'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___implementation___info'
  | 'pluginCreator___pluginOptions___dest'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___implementation___info'
  | 'pluginOptions___dest'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  implementation?: Maybe<SitePluginPluginOptionsImplementation>;
  dest?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  implementation?: Maybe<SitePluginPluginOptionsImplementationFilterInput>;
  dest?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsImplementation = {
  __typename?: 'SitePluginPluginOptionsImplementation';
  info?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsImplementationFilterInput = {
  info?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SkillsCsv = Node & {
  __typename?: 'SkillsCsv';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  Name?: Maybe<Scalars['String']>;
};

export type SkillsCsvConnection = {
  __typename?: 'SkillsCsvConnection';
  totalCount: Scalars['Int'];
  edges: Array<SkillsCsvEdge>;
  nodes: Array<SkillsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SkillsCsvGroupConnection>;
};


export type SkillsCsvConnectionDistinctArgs = {
  field: SkillsCsvFieldsEnum;
};


export type SkillsCsvConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SkillsCsvFieldsEnum;
};

export type SkillsCsvEdge = {
  __typename?: 'SkillsCsvEdge';
  next?: Maybe<SkillsCsv>;
  node: SkillsCsv;
  previous?: Maybe<SkillsCsv>;
};

export type SkillsCsvFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'Name';

export type SkillsCsvFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Name?: Maybe<StringQueryOperatorInput>;
};

export type SkillsCsvFilterListInput = {
  elemMatch?: Maybe<SkillsCsvFilterInput>;
};

export type SkillsCsvGroupConnection = {
  __typename?: 'SkillsCsvGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SkillsCsvEdge>;
  nodes: Array<SkillsCsv>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SkillsCsvSortInput = {
  fields?: Maybe<Array<Maybe<SkillsCsvFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

