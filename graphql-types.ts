export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
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
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type SkillsCsv */
  childrenSkillsCsv?: Maybe<Array<Maybe<SkillsCsv>>>;
  /** Returns the first child node of type SkillsCsv or null if there are no children of given type on this node */
  childSkillsCsv?: Maybe<SkillsCsv>;
  /** Returns all children nodes filtered by type RecommendationsReceivedCsv */
  childrenRecommendationsReceivedCsv?: Maybe<Array<Maybe<RecommendationsReceivedCsv>>>;
  /** Returns the first child node of type RecommendationsReceivedCsv or null if there are no children of given type on this node */
  childRecommendationsReceivedCsv?: Maybe<RecommendationsReceivedCsv>;
  /** Returns all children nodes filtered by type ProfileCsv */
  childrenProfileCsv?: Maybe<Array<Maybe<ProfileCsv>>>;
  /** Returns the first child node of type ProfileCsv or null if there are no children of given type on this node */
  childProfileCsv?: Maybe<ProfileCsv>;
  /** Returns all children nodes filtered by type PositionsCsv */
  childrenPositionsCsv?: Maybe<Array<Maybe<PositionsCsv>>>;
  /** Returns the first child node of type PositionsCsv or null if there are no children of given type on this node */
  childPositionsCsv?: Maybe<PositionsCsv>;
  /** Returns all children nodes filtered by type OrganizationsCsv */
  childrenOrganizationsCsv?: Maybe<Array<Maybe<OrganizationsCsv>>>;
  /** Returns the first child node of type OrganizationsCsv or null if there are no children of given type on this node */
  childOrganizationsCsv?: Maybe<OrganizationsCsv>;
  /** Returns all children nodes filtered by type LanguagesCsv */
  childrenLanguagesCsv?: Maybe<Array<Maybe<LanguagesCsv>>>;
  /** Returns the first child node of type LanguagesCsv or null if there are no children of given type on this node */
  childLanguagesCsv?: Maybe<LanguagesCsv>;
  /** Returns all children nodes filtered by type EducationCsv */
  childrenEducationCsv?: Maybe<Array<Maybe<EducationCsv>>>;
  /** Returns the first child node of type EducationCsv or null if there are no children of given type on this node */
  childEducationCsv?: Maybe<EducationCsv>;
  /** Returns all children nodes filtered by type ConnectionsCsv */
  childrenConnectionsCsv?: Maybe<Array<Maybe<ConnectionsCsv>>>;
  /** Returns the first child node of type ConnectionsCsv or null if there are no children of given type on this node */
  childConnectionsCsv?: Maybe<ConnectionsCsv>;
  /** Returns all children nodes filtered by type CertificationsCsv */
  childrenCertificationsCsv?: Maybe<Array<Maybe<CertificationsCsv>>>;
  /** Returns the first child node of type CertificationsCsv or null if there are no children of given type on this node */
  childCertificationsCsv?: Maybe<CertificationsCsv>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type FileFields = {
  slug?: Maybe<Scalars['String']>;
  exif?: Maybe<FileFieldsExif>;
};

export type FileFieldsExif = {
  image?: Maybe<FileFieldsExifImage>;
  thumbnail?: Maybe<FileFieldsExifThumbnail>;
  exif?: Maybe<FileFieldsExifExif>;
  gps?: Maybe<FileFieldsExifGps>;
};

export type FileFieldsExifImage = {
  Make?: Maybe<Scalars['String']>;
  Model?: Maybe<Scalars['String']>;
  XResolution?: Maybe<Scalars['Int']>;
  YResolution?: Maybe<Scalars['Int']>;
  ResolutionUnit?: Maybe<Scalars['Int']>;
  Software?: Maybe<Scalars['String']>;
  ModifyDate?: Maybe<Scalars['Date']>;
  ExifOffset?: Maybe<Scalars['Int']>;
  ImageDescription?: Maybe<Scalars['String']>;
  ImageWidth?: Maybe<Scalars['Int']>;
  ImageHeight?: Maybe<Scalars['Int']>;
  BitsPerSample?: Maybe<Array<Maybe<Scalars['Int']>>>;
  PhotometricInterpretation?: Maybe<Scalars['Int']>;
  Orientation?: Maybe<Scalars['Int']>;
  SamplesPerPixel?: Maybe<Scalars['Int']>;
  YCbCrPositioning?: Maybe<Scalars['Int']>;
  GPSInfo?: Maybe<Scalars['Int']>;
};


export type FileFieldsExifImageModifyDateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileFieldsExifThumbnail = {
  Compression?: Maybe<Scalars['Int']>;
  XResolution?: Maybe<Scalars['Int']>;
  YResolution?: Maybe<Scalars['Int']>;
  ResolutionUnit?: Maybe<Scalars['Int']>;
  ThumbnailOffset?: Maybe<Scalars['Int']>;
  ThumbnailLength?: Maybe<Scalars['Int']>;
  YCbCrPositioning?: Maybe<Scalars['Int']>;
};

export type FileFieldsExifExif = {
  _36880?: Maybe<Scalars['String']>;
  ExposureTime?: Maybe<Scalars['Float']>;
  FNumber?: Maybe<Scalars['Float']>;
  ExposureProgram?: Maybe<Scalars['Int']>;
  ISO?: Maybe<Scalars['Int']>;
  SensitivityType?: Maybe<Scalars['Int']>;
  DateTimeOriginal?: Maybe<Scalars['Date']>;
  DateTimeDigitized?: Maybe<Scalars['Date']>;
  ShutterSpeedValue?: Maybe<Scalars['Float']>;
  ApertureValue?: Maybe<Scalars['Float']>;
  ExposureBiasValue?: Maybe<Scalars['Float']>;
  MaxApertureValue?: Maybe<Scalars['Float']>;
  MeteringMode?: Maybe<Scalars['Int']>;
  LightSource?: Maybe<Scalars['Int']>;
  Flash?: Maybe<Scalars['Int']>;
  FocalLength?: Maybe<Scalars['Int']>;
  SubSecTimeOriginal?: Maybe<Scalars['String']>;
  SubSecTimeDigitized?: Maybe<Scalars['String']>;
  ColorSpace?: Maybe<Scalars['Int']>;
  FocalPlaneXResolution?: Maybe<Scalars['Float']>;
  FocalPlaneYResolution?: Maybe<Scalars['Float']>;
  FocalPlaneResolutionUnit?: Maybe<Scalars['Int']>;
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
  BodySerialNumber?: Maybe<Scalars['String']>;
  LensSpecification?: Maybe<Array<Maybe<Scalars['Float']>>>;
  LensModel?: Maybe<Scalars['String']>;
  CompressedBitsPerPixel?: Maybe<Scalars['Int']>;
  SubjectDistance?: Maybe<Scalars['Float']>;
  SubSecTime?: Maybe<Scalars['String']>;
  PixelXDimension?: Maybe<Scalars['Int']>;
  PixelYDimension?: Maybe<Scalars['Int']>;
  InteropOffset?: Maybe<Scalars['Int']>;
};


export type FileFieldsExifExifDateTimeOriginalArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileFieldsExifExifDateTimeDigitizedArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileFieldsExifGps = {
  GPSVersionID?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Directory = Node & {
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
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

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

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  fields?: Maybe<ImageSharpFields>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
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

export type ImageSharpFluid = {
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

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFields = {
  gallery?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
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
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
  format?: InputMaybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
  Notes?: Maybe<Scalars['String']>;
  Grouping?: Maybe<Scalars['String']>;
  Created?: Maybe<Scalars['Date']>;
  Updated?: Maybe<Scalars['Date']>;
  Tags?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterTags>>>;
};


export type MarkdownRemarkFrontmatterCreatedArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterUpdatedArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterTags = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  Grouping?: Maybe<Scalars['String']>;
  Created?: Maybe<Scalars['Date']>;
  Updated?: Maybe<Scalars['Date']>;
  Tags?: Maybe<Array<Maybe<MdxFrontmatterTags>>>;
};


export type MdxFrontmatterCreatedArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MdxFrontmatterUpdatedArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MdxFrontmatterTags = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type Mdx = Node & {
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
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
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: InputMaybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: InputMaybe<Scalars['Int']>;
};

export type SkillsCsv = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  Name?: Maybe<Scalars['String']>;
};

export type RecommendationsReceivedCsv = Node & {
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

export type ProfileCsv = Node & {
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

export type PositionsCsv = Node & {
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

export type OrganizationsCsv = Node & {
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

export type Notion = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  properties?: Maybe<NotionProperties>;
  archived?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  markdownString?: Maybe<Scalars['String']>;
  raw?: Maybe<NotionRaw>;
  json?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
};


export type NotionCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type NotionUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionProperties = {
  Notes?: Maybe<NotionPropertiesNotes>;
  Grouping?: Maybe<NotionPropertiesGrouping>;
  Created?: Maybe<NotionPropertiesCreated>;
  Updated?: Maybe<NotionPropertiesUpdated>;
  Tags?: Maybe<NotionPropertiesTags>;
};

export type NotionPropertiesNotes = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionPropertiesGrouping = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotionPropertiesCreated = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Date']>;
  type?: Maybe<Scalars['String']>;
};


export type NotionPropertiesCreatedValueArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionPropertiesUpdated = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Date']>;
  type?: Maybe<Scalars['String']>;
};


export type NotionPropertiesUpdatedValueArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionPropertiesTags = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<NotionPropertiesTagsValue>>>;
  type?: Maybe<Scalars['String']>;
};

export type NotionPropertiesTagsValue = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type NotionRaw = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  created_time?: Maybe<Scalars['Date']>;
  last_edited_time?: Maybe<Scalars['Date']>;
  parent?: Maybe<NotionRawParent>;
  archived?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<NotionRawProperties>;
  url?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<NotionRawChildren>>>;
};


export type NotionRawCreated_TimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type NotionRawLast_Edited_TimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionRawParent = {
  type?: Maybe<Scalars['String']>;
  database_id?: Maybe<Scalars['String']>;
};

export type NotionRawProperties = {
  Notes?: Maybe<NotionRawPropertiesNotes>;
  Grouping?: Maybe<NotionRawPropertiesGrouping>;
  Name?: Maybe<NotionRawPropertiesName>;
  Created?: Maybe<NotionRawPropertiesCreated>;
  Updated?: Maybe<NotionRawPropertiesUpdated>;
  Tags?: Maybe<NotionRawPropertiesTags>;
};

export type NotionRawPropertiesNotes = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesGrouping = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesName = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Array<Maybe<NotionRawPropertiesNameTitle>>>;
};

export type NotionRawPropertiesNameTitle = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<NotionRawPropertiesNameTitleText>;
  annotations?: Maybe<NotionRawPropertiesNameTitleAnnotations>;
  plain_text?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesNameTitleText = {
  content?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesNameTitleAnnotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type NotionRawPropertiesCreated = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  created_time?: Maybe<Scalars['Date']>;
};


export type NotionRawPropertiesCreatedCreated_TimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionRawPropertiesUpdated = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  last_edited_time?: Maybe<Scalars['Date']>;
};


export type NotionRawPropertiesUpdatedLast_Edited_TimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionRawPropertiesTags = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  multi_select?: Maybe<Array<Maybe<NotionRawPropertiesTagsMulti_Select>>>;
};

export type NotionRawPropertiesTagsMulti_Select = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type NotionRawChildren = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  created_time?: Maybe<Scalars['Date']>;
  last_edited_time?: Maybe<Scalars['Date']>;
  has_children?: Maybe<Scalars['Boolean']>;
  archived?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  paragraph?: Maybe<NotionRawChildrenParagraph>;
  heading_2?: Maybe<NotionRawChildrenHeading_2>;
  bulleted_list_item?: Maybe<NotionRawChildrenBulleted_List_Item>;
  children?: Maybe<Array<Maybe<NotionRawChildrenChildren>>>;
  numbered_list_item?: Maybe<NotionRawChildrenNumbered_List_Item>;
  callout?: Maybe<NotionRawChildrenCallout>;
  image?: Maybe<NotionRawChildrenImage>;
  heading_1?: Maybe<NotionRawChildrenHeading_1>;
  heading_3?: Maybe<NotionRawChildrenHeading_3>;
};


export type NotionRawChildrenCreated_TimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type NotionRawChildrenLast_Edited_TimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionRawChildrenParagraph = {
  text?: Maybe<Array<Maybe<NotionRawChildrenParagraphText>>>;
};

export type NotionRawChildrenParagraphText = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<NotionRawChildrenParagraphTextText>;
  annotations?: Maybe<NotionRawChildrenParagraphTextAnnotations>;
  plain_text?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenParagraphTextText = {
  content?: Maybe<Scalars['String']>;
  link?: Maybe<NotionRawChildrenParagraphTextTextLink>;
};

export type NotionRawChildrenParagraphTextTextLink = {
  url?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenParagraphTextAnnotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenHeading_2 = {
  text?: Maybe<Array<Maybe<NotionRawChildrenHeading_2Text>>>;
};

export type NotionRawChildrenHeading_2Text = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<NotionRawChildrenHeading_2TextText>;
  annotations?: Maybe<NotionRawChildrenHeading_2TextAnnotations>;
  plain_text?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenHeading_2TextText = {
  content?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenHeading_2TextAnnotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenBulleted_List_Item = {
  text?: Maybe<Array<Maybe<NotionRawChildrenBulleted_List_ItemText>>>;
};

export type NotionRawChildrenBulleted_List_ItemText = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<NotionRawChildrenBulleted_List_ItemTextText>;
  annotations?: Maybe<NotionRawChildrenBulleted_List_ItemTextAnnotations>;
  plain_text?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenBulleted_List_ItemTextText = {
  content?: Maybe<Scalars['String']>;
  link?: Maybe<NotionRawChildrenBulleted_List_ItemTextTextLink>;
};

export type NotionRawChildrenBulleted_List_ItemTextTextLink = {
  url?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenBulleted_List_ItemTextAnnotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenChildren = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  created_time?: Maybe<Scalars['Date']>;
  last_edited_time?: Maybe<Scalars['Date']>;
  has_children?: Maybe<Scalars['Boolean']>;
  archived?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  bulleted_list_item?: Maybe<NotionRawChildrenChildrenBulleted_List_Item>;
};


export type NotionRawChildrenChildrenCreated_TimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type NotionRawChildrenChildrenLast_Edited_TimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionRawChildrenChildrenBulleted_List_Item = {
  text?: Maybe<Array<Maybe<NotionRawChildrenChildrenBulleted_List_ItemText>>>;
};

export type NotionRawChildrenChildrenBulleted_List_ItemText = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<NotionRawChildrenChildrenBulleted_List_ItemTextText>;
  annotations?: Maybe<NotionRawChildrenChildrenBulleted_List_ItemTextAnnotations>;
  plain_text?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenChildrenBulleted_List_ItemTextText = {
  content?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenChildrenBulleted_List_ItemTextAnnotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenNumbered_List_Item = {
  text?: Maybe<Array<Maybe<NotionRawChildrenNumbered_List_ItemText>>>;
};

export type NotionRawChildrenNumbered_List_ItemText = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<NotionRawChildrenNumbered_List_ItemTextText>;
  annotations?: Maybe<NotionRawChildrenNumbered_List_ItemTextAnnotations>;
  plain_text?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenNumbered_List_ItemTextText = {
  content?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenNumbered_List_ItemTextAnnotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenCallout = {
  text?: Maybe<Array<Maybe<NotionRawChildrenCalloutText>>>;
  icon?: Maybe<NotionRawChildrenCalloutIcon>;
};

export type NotionRawChildrenCalloutText = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<NotionRawChildrenCalloutTextText>;
  annotations?: Maybe<NotionRawChildrenCalloutTextAnnotations>;
  plain_text?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenCalloutTextText = {
  content?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenCalloutTextAnnotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenCalloutIcon = {
  type?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenImage = {
  type?: Maybe<Scalars['String']>;
  file?: Maybe<NotionRawChildrenImageFile>;
  external?: Maybe<NotionRawChildrenImageExternal>;
};

export type NotionRawChildrenImageFile = {
  url?: Maybe<Scalars['String']>;
  expiry_time?: Maybe<Scalars['Date']>;
};


export type NotionRawChildrenImageFileExpiry_TimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type NotionRawChildrenImageExternal = {
  url?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenHeading_1 = {
  text?: Maybe<Array<Maybe<NotionRawChildrenHeading_1Text>>>;
};

export type NotionRawChildrenHeading_1Text = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<NotionRawChildrenHeading_1TextText>;
  annotations?: Maybe<NotionRawChildrenHeading_1TextAnnotations>;
  plain_text?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenHeading_1TextText = {
  content?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenHeading_1TextAnnotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenHeading_3 = {
  text?: Maybe<Array<Maybe<NotionRawChildrenHeading_3Text>>>;
};

export type NotionRawChildrenHeading_3Text = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<NotionRawChildrenHeading_3TextText>;
  annotations?: Maybe<NotionRawChildrenHeading_3TextAnnotations>;
  plain_text?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenHeading_3TextText = {
  content?: Maybe<Scalars['String']>;
};

export type NotionRawChildrenHeading_3TextAnnotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type LanguagesCsv = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  Name?: Maybe<Scalars['String']>;
  Proficiency?: Maybe<Scalars['String']>;
};

export type EducationCsv = Node & {
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
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type EducationCsvEnd_DateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ConnectionsCsv = Node & {
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

export type CertificationsCsv = Node & {
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

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  skillsCsv?: Maybe<SkillsCsv>;
  allSkillsCsv: SkillsCsvConnection;
  recommendationsReceivedCsv?: Maybe<RecommendationsReceivedCsv>;
  allRecommendationsReceivedCsv: RecommendationsReceivedCsvConnection;
  profileCsv?: Maybe<ProfileCsv>;
  allProfileCsv: ProfileCsvConnection;
  positionsCsv?: Maybe<PositionsCsv>;
  allPositionsCsv: PositionsCsvConnection;
  organizationsCsv?: Maybe<OrganizationsCsv>;
  allOrganizationsCsv: OrganizationsCsvConnection;
  notion?: Maybe<Notion>;
  allNotion: NotionConnection;
  languagesCsv?: Maybe<LanguagesCsv>;
  allLanguagesCsv: LanguagesCsvConnection;
  educationCsv?: Maybe<EducationCsv>;
  allEducationCsv: EducationCsvConnection;
  connectionsCsv?: Maybe<ConnectionsCsv>;
  allConnectionsCsv: ConnectionsCsvConnection;
  certificationsCsv?: Maybe<CertificationsCsv>;
  allCertificationsCsv: CertificationsCsvConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  fields?: InputMaybe<FileFieldsFilterInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenSkillsCsv?: InputMaybe<SkillsCsvFilterListInput>;
  childSkillsCsv?: InputMaybe<SkillsCsvFilterInput>;
  childrenRecommendationsReceivedCsv?: InputMaybe<RecommendationsReceivedCsvFilterListInput>;
  childRecommendationsReceivedCsv?: InputMaybe<RecommendationsReceivedCsvFilterInput>;
  childrenProfileCsv?: InputMaybe<ProfileCsvFilterListInput>;
  childProfileCsv?: InputMaybe<ProfileCsvFilterInput>;
  childrenPositionsCsv?: InputMaybe<PositionsCsvFilterListInput>;
  childPositionsCsv?: InputMaybe<PositionsCsvFilterInput>;
  childrenOrganizationsCsv?: InputMaybe<OrganizationsCsvFilterListInput>;
  childOrganizationsCsv?: InputMaybe<OrganizationsCsvFilterInput>;
  childrenLanguagesCsv?: InputMaybe<LanguagesCsvFilterListInput>;
  childLanguagesCsv?: InputMaybe<LanguagesCsvFilterInput>;
  childrenEducationCsv?: InputMaybe<EducationCsvFilterListInput>;
  childEducationCsv?: InputMaybe<EducationCsvFilterInput>;
  childrenConnectionsCsv?: InputMaybe<ConnectionsCsvFilterListInput>;
  childConnectionsCsv?: InputMaybe<ConnectionsCsvFilterInput>;
  childrenCertificationsCsv?: InputMaybe<CertificationsCsvFilterListInput>;
  childCertificationsCsv?: InputMaybe<CertificationsCsvFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  fields?: InputMaybe<ImageSharpFieldsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>;
  sort?: InputMaybe<MarkdownRemarkSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  body?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: InputMaybe<MdxFilterInput>;
  sort?: InputMaybe<MdxSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySkillsCsvArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Name?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllSkillsCsvArgs = {
  filter?: InputMaybe<SkillsCsvFilterInput>;
  sort?: InputMaybe<SkillsCsvSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryRecommendationsReceivedCsvArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  First_Name?: InputMaybe<StringQueryOperatorInput>;
  Last_Name?: InputMaybe<StringQueryOperatorInput>;
  Company?: InputMaybe<StringQueryOperatorInput>;
  Job_Title?: InputMaybe<StringQueryOperatorInput>;
  Text?: InputMaybe<StringQueryOperatorInput>;
  Creation_Date?: InputMaybe<StringQueryOperatorInput>;
  Status?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllRecommendationsReceivedCsvArgs = {
  filter?: InputMaybe<RecommendationsReceivedCsvFilterInput>;
  sort?: InputMaybe<RecommendationsReceivedCsvSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryProfileCsvArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  First_Name?: InputMaybe<StringQueryOperatorInput>;
  Last_Name?: InputMaybe<StringQueryOperatorInput>;
  Maiden_Name?: InputMaybe<StringQueryOperatorInput>;
  Address?: InputMaybe<StringQueryOperatorInput>;
  Birth_Date?: InputMaybe<StringQueryOperatorInput>;
  Headline?: InputMaybe<StringQueryOperatorInput>;
  Summary?: InputMaybe<StringQueryOperatorInput>;
  Industry?: InputMaybe<StringQueryOperatorInput>;
  Zip_Code?: InputMaybe<StringQueryOperatorInput>;
  Geo_Location?: InputMaybe<StringQueryOperatorInput>;
  Twitter_Handles?: InputMaybe<StringQueryOperatorInput>;
  Websites?: InputMaybe<StringQueryOperatorInput>;
  Instant_Messengers?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllProfileCsvArgs = {
  filter?: InputMaybe<ProfileCsvFilterInput>;
  sort?: InputMaybe<ProfileCsvSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryPositionsCsvArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Company_Name?: InputMaybe<StringQueryOperatorInput>;
  Title?: InputMaybe<StringQueryOperatorInput>;
  Description?: InputMaybe<StringQueryOperatorInput>;
  Location?: InputMaybe<StringQueryOperatorInput>;
  Started_On?: InputMaybe<StringQueryOperatorInput>;
  Finished_On?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllPositionsCsvArgs = {
  filter?: InputMaybe<PositionsCsvFilterInput>;
  sort?: InputMaybe<PositionsCsvSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryOrganizationsCsvArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Name?: InputMaybe<StringQueryOperatorInput>;
  Description?: InputMaybe<StringQueryOperatorInput>;
  Position?: InputMaybe<StringQueryOperatorInput>;
  Started_On?: InputMaybe<StringQueryOperatorInput>;
  Finished_On?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllOrganizationsCsvArgs = {
  filter?: InputMaybe<OrganizationsCsvFilterInput>;
  sort?: InputMaybe<OrganizationsCsvSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryNotionArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  properties?: InputMaybe<NotionPropertiesFilterInput>;
  archived?: InputMaybe<BooleanQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  markdownString?: InputMaybe<StringQueryOperatorInput>;
  raw?: InputMaybe<NotionRawFilterInput>;
  json?: InputMaybe<StringQueryOperatorInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
};


export type QueryAllNotionArgs = {
  filter?: InputMaybe<NotionFilterInput>;
  sort?: InputMaybe<NotionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryLanguagesCsvArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Name?: InputMaybe<StringQueryOperatorInput>;
  Proficiency?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllLanguagesCsvArgs = {
  filter?: InputMaybe<LanguagesCsvFilterInput>;
  sort?: InputMaybe<LanguagesCsvSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryEducationCsvArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  School_Name?: InputMaybe<StringQueryOperatorInput>;
  Start_Date?: InputMaybe<DateQueryOperatorInput>;
  End_Date?: InputMaybe<DateQueryOperatorInput>;
  Notes?: InputMaybe<StringQueryOperatorInput>;
  Degree_Name?: InputMaybe<StringQueryOperatorInput>;
  Activities?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllEducationCsvArgs = {
  filter?: InputMaybe<EducationCsvFilterInput>;
  sort?: InputMaybe<EducationCsvSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryConnectionsCsvArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  First_Name?: InputMaybe<StringQueryOperatorInput>;
  Last_Name?: InputMaybe<StringQueryOperatorInput>;
  Email_Address?: InputMaybe<StringQueryOperatorInput>;
  Company?: InputMaybe<StringQueryOperatorInput>;
  Position?: InputMaybe<StringQueryOperatorInput>;
  Connected_On?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllConnectionsCsvArgs = {
  filter?: InputMaybe<ConnectionsCsvFilterInput>;
  sort?: InputMaybe<ConnectionsCsvSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryCertificationsCsvArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Name?: InputMaybe<StringQueryOperatorInput>;
  Url?: InputMaybe<StringQueryOperatorInput>;
  Authority?: InputMaybe<StringQueryOperatorInput>;
  Started_On?: InputMaybe<StringQueryOperatorInput>;
  Finished_On?: InputMaybe<StringQueryOperatorInput>;
  License_Number?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllCertificationsCsvArgs = {
  filter?: InputMaybe<CertificationsCsvFilterInput>;
  sort?: InputMaybe<CertificationsCsvSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FileFieldsFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>;
  exif?: InputMaybe<FileFieldsExifFilterInput>;
};

export type FileFieldsExifFilterInput = {
  image?: InputMaybe<FileFieldsExifImageFilterInput>;
  thumbnail?: InputMaybe<FileFieldsExifThumbnailFilterInput>;
  exif?: InputMaybe<FileFieldsExifExifFilterInput>;
  gps?: InputMaybe<FileFieldsExifGpsFilterInput>;
};

export type FileFieldsExifImageFilterInput = {
  Make?: InputMaybe<StringQueryOperatorInput>;
  Model?: InputMaybe<StringQueryOperatorInput>;
  XResolution?: InputMaybe<IntQueryOperatorInput>;
  YResolution?: InputMaybe<IntQueryOperatorInput>;
  ResolutionUnit?: InputMaybe<IntQueryOperatorInput>;
  Software?: InputMaybe<StringQueryOperatorInput>;
  ModifyDate?: InputMaybe<DateQueryOperatorInput>;
  ExifOffset?: InputMaybe<IntQueryOperatorInput>;
  ImageDescription?: InputMaybe<StringQueryOperatorInput>;
  ImageWidth?: InputMaybe<IntQueryOperatorInput>;
  ImageHeight?: InputMaybe<IntQueryOperatorInput>;
  BitsPerSample?: InputMaybe<IntQueryOperatorInput>;
  PhotometricInterpretation?: InputMaybe<IntQueryOperatorInput>;
  Orientation?: InputMaybe<IntQueryOperatorInput>;
  SamplesPerPixel?: InputMaybe<IntQueryOperatorInput>;
  YCbCrPositioning?: InputMaybe<IntQueryOperatorInput>;
  GPSInfo?: InputMaybe<IntQueryOperatorInput>;
};

export type FileFieldsExifThumbnailFilterInput = {
  Compression?: InputMaybe<IntQueryOperatorInput>;
  XResolution?: InputMaybe<IntQueryOperatorInput>;
  YResolution?: InputMaybe<IntQueryOperatorInput>;
  ResolutionUnit?: InputMaybe<IntQueryOperatorInput>;
  ThumbnailOffset?: InputMaybe<IntQueryOperatorInput>;
  ThumbnailLength?: InputMaybe<IntQueryOperatorInput>;
  YCbCrPositioning?: InputMaybe<IntQueryOperatorInput>;
};

export type FileFieldsExifExifFilterInput = {
  _36880?: InputMaybe<StringQueryOperatorInput>;
  ExposureTime?: InputMaybe<FloatQueryOperatorInput>;
  FNumber?: InputMaybe<FloatQueryOperatorInput>;
  ExposureProgram?: InputMaybe<IntQueryOperatorInput>;
  ISO?: InputMaybe<IntQueryOperatorInput>;
  SensitivityType?: InputMaybe<IntQueryOperatorInput>;
  DateTimeOriginal?: InputMaybe<DateQueryOperatorInput>;
  DateTimeDigitized?: InputMaybe<DateQueryOperatorInput>;
  ShutterSpeedValue?: InputMaybe<FloatQueryOperatorInput>;
  ApertureValue?: InputMaybe<FloatQueryOperatorInput>;
  ExposureBiasValue?: InputMaybe<FloatQueryOperatorInput>;
  MaxApertureValue?: InputMaybe<FloatQueryOperatorInput>;
  MeteringMode?: InputMaybe<IntQueryOperatorInput>;
  LightSource?: InputMaybe<IntQueryOperatorInput>;
  Flash?: InputMaybe<IntQueryOperatorInput>;
  FocalLength?: InputMaybe<IntQueryOperatorInput>;
  SubSecTimeOriginal?: InputMaybe<StringQueryOperatorInput>;
  SubSecTimeDigitized?: InputMaybe<StringQueryOperatorInput>;
  ColorSpace?: InputMaybe<IntQueryOperatorInput>;
  FocalPlaneXResolution?: InputMaybe<FloatQueryOperatorInput>;
  FocalPlaneYResolution?: InputMaybe<FloatQueryOperatorInput>;
  FocalPlaneResolutionUnit?: InputMaybe<IntQueryOperatorInput>;
  SensingMethod?: InputMaybe<IntQueryOperatorInput>;
  CustomRendered?: InputMaybe<IntQueryOperatorInput>;
  ExposureMode?: InputMaybe<IntQueryOperatorInput>;
  WhiteBalance?: InputMaybe<IntQueryOperatorInput>;
  DigitalZoomRatio?: InputMaybe<IntQueryOperatorInput>;
  FocalLengthIn35mmFormat?: InputMaybe<IntQueryOperatorInput>;
  SceneCaptureType?: InputMaybe<IntQueryOperatorInput>;
  GainControl?: InputMaybe<IntQueryOperatorInput>;
  Contrast?: InputMaybe<IntQueryOperatorInput>;
  Saturation?: InputMaybe<IntQueryOperatorInput>;
  Sharpness?: InputMaybe<IntQueryOperatorInput>;
  SubjectDistanceRange?: InputMaybe<IntQueryOperatorInput>;
  BodySerialNumber?: InputMaybe<StringQueryOperatorInput>;
  LensSpecification?: InputMaybe<FloatQueryOperatorInput>;
  LensModel?: InputMaybe<StringQueryOperatorInput>;
  CompressedBitsPerPixel?: InputMaybe<IntQueryOperatorInput>;
  SubjectDistance?: InputMaybe<FloatQueryOperatorInput>;
  SubSecTime?: InputMaybe<StringQueryOperatorInput>;
  PixelXDimension?: InputMaybe<IntQueryOperatorInput>;
  PixelYDimension?: InputMaybe<IntQueryOperatorInput>;
  InteropOffset?: InputMaybe<IntQueryOperatorInput>;
};

export type FileFieldsExifGpsFilterInput = {
  GPSVersionID?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  fields?: InputMaybe<ImageSharpFieldsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFieldsFilterInput = {
  gallery?: InputMaybe<StringQueryOperatorInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type SkillsCsvFilterListInput = {
  elemMatch?: InputMaybe<SkillsCsvFilterInput>;
};

export type SkillsCsvFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Name?: InputMaybe<StringQueryOperatorInput>;
};

export type RecommendationsReceivedCsvFilterListInput = {
  elemMatch?: InputMaybe<RecommendationsReceivedCsvFilterInput>;
};

export type RecommendationsReceivedCsvFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  First_Name?: InputMaybe<StringQueryOperatorInput>;
  Last_Name?: InputMaybe<StringQueryOperatorInput>;
  Company?: InputMaybe<StringQueryOperatorInput>;
  Job_Title?: InputMaybe<StringQueryOperatorInput>;
  Text?: InputMaybe<StringQueryOperatorInput>;
  Creation_Date?: InputMaybe<StringQueryOperatorInput>;
  Status?: InputMaybe<StringQueryOperatorInput>;
};

export type ProfileCsvFilterListInput = {
  elemMatch?: InputMaybe<ProfileCsvFilterInput>;
};

export type ProfileCsvFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  First_Name?: InputMaybe<StringQueryOperatorInput>;
  Last_Name?: InputMaybe<StringQueryOperatorInput>;
  Maiden_Name?: InputMaybe<StringQueryOperatorInput>;
  Address?: InputMaybe<StringQueryOperatorInput>;
  Birth_Date?: InputMaybe<StringQueryOperatorInput>;
  Headline?: InputMaybe<StringQueryOperatorInput>;
  Summary?: InputMaybe<StringQueryOperatorInput>;
  Industry?: InputMaybe<StringQueryOperatorInput>;
  Zip_Code?: InputMaybe<StringQueryOperatorInput>;
  Geo_Location?: InputMaybe<StringQueryOperatorInput>;
  Twitter_Handles?: InputMaybe<StringQueryOperatorInput>;
  Websites?: InputMaybe<StringQueryOperatorInput>;
  Instant_Messengers?: InputMaybe<StringQueryOperatorInput>;
};

export type PositionsCsvFilterListInput = {
  elemMatch?: InputMaybe<PositionsCsvFilterInput>;
};

export type PositionsCsvFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Company_Name?: InputMaybe<StringQueryOperatorInput>;
  Title?: InputMaybe<StringQueryOperatorInput>;
  Description?: InputMaybe<StringQueryOperatorInput>;
  Location?: InputMaybe<StringQueryOperatorInput>;
  Started_On?: InputMaybe<StringQueryOperatorInput>;
  Finished_On?: InputMaybe<StringQueryOperatorInput>;
};

export type OrganizationsCsvFilterListInput = {
  elemMatch?: InputMaybe<OrganizationsCsvFilterInput>;
};

export type OrganizationsCsvFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Name?: InputMaybe<StringQueryOperatorInput>;
  Description?: InputMaybe<StringQueryOperatorInput>;
  Position?: InputMaybe<StringQueryOperatorInput>;
  Started_On?: InputMaybe<StringQueryOperatorInput>;
  Finished_On?: InputMaybe<StringQueryOperatorInput>;
};

export type LanguagesCsvFilterListInput = {
  elemMatch?: InputMaybe<LanguagesCsvFilterInput>;
};

export type LanguagesCsvFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Name?: InputMaybe<StringQueryOperatorInput>;
  Proficiency?: InputMaybe<StringQueryOperatorInput>;
};

export type EducationCsvFilterListInput = {
  elemMatch?: InputMaybe<EducationCsvFilterInput>;
};

export type EducationCsvFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  School_Name?: InputMaybe<StringQueryOperatorInput>;
  Start_Date?: InputMaybe<DateQueryOperatorInput>;
  End_Date?: InputMaybe<DateQueryOperatorInput>;
  Notes?: InputMaybe<StringQueryOperatorInput>;
  Degree_Name?: InputMaybe<StringQueryOperatorInput>;
  Activities?: InputMaybe<StringQueryOperatorInput>;
};

export type ConnectionsCsvFilterListInput = {
  elemMatch?: InputMaybe<ConnectionsCsvFilterInput>;
};

export type ConnectionsCsvFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  First_Name?: InputMaybe<StringQueryOperatorInput>;
  Last_Name?: InputMaybe<StringQueryOperatorInput>;
  Email_Address?: InputMaybe<StringQueryOperatorInput>;
  Company?: InputMaybe<StringQueryOperatorInput>;
  Position?: InputMaybe<StringQueryOperatorInput>;
  Connected_On?: InputMaybe<StringQueryOperatorInput>;
};

export type CertificationsCsvFilterListInput = {
  elemMatch?: InputMaybe<CertificationsCsvFilterInput>;
};

export type CertificationsCsvFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  Name?: InputMaybe<StringQueryOperatorInput>;
  Url?: InputMaybe<StringQueryOperatorInput>;
  Authority?: InputMaybe<StringQueryOperatorInput>;
  Started_On?: InputMaybe<StringQueryOperatorInput>;
  Finished_On?: InputMaybe<StringQueryOperatorInput>;
  License_Number?: InputMaybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
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
  | 'fields___exif___image___Make'
  | 'fields___exif___image___Model'
  | 'fields___exif___image___XResolution'
  | 'fields___exif___image___YResolution'
  | 'fields___exif___image___ResolutionUnit'
  | 'fields___exif___image___Software'
  | 'fields___exif___image___ModifyDate'
  | 'fields___exif___image___ExifOffset'
  | 'fields___exif___image___ImageDescription'
  | 'fields___exif___image___ImageWidth'
  | 'fields___exif___image___ImageHeight'
  | 'fields___exif___image___BitsPerSample'
  | 'fields___exif___image___PhotometricInterpretation'
  | 'fields___exif___image___Orientation'
  | 'fields___exif___image___SamplesPerPixel'
  | 'fields___exif___image___YCbCrPositioning'
  | 'fields___exif___image___GPSInfo'
  | 'fields___exif___thumbnail___Compression'
  | 'fields___exif___thumbnail___XResolution'
  | 'fields___exif___thumbnail___YResolution'
  | 'fields___exif___thumbnail___ResolutionUnit'
  | 'fields___exif___thumbnail___ThumbnailOffset'
  | 'fields___exif___thumbnail___ThumbnailLength'
  | 'fields___exif___thumbnail___YCbCrPositioning'
  | 'fields___exif___exif____36880'
  | 'fields___exif___exif___ExposureTime'
  | 'fields___exif___exif___FNumber'
  | 'fields___exif___exif___ExposureProgram'
  | 'fields___exif___exif___ISO'
  | 'fields___exif___exif___SensitivityType'
  | 'fields___exif___exif___DateTimeOriginal'
  | 'fields___exif___exif___DateTimeDigitized'
  | 'fields___exif___exif___ShutterSpeedValue'
  | 'fields___exif___exif___ApertureValue'
  | 'fields___exif___exif___ExposureBiasValue'
  | 'fields___exif___exif___MaxApertureValue'
  | 'fields___exif___exif___MeteringMode'
  | 'fields___exif___exif___LightSource'
  | 'fields___exif___exif___Flash'
  | 'fields___exif___exif___FocalLength'
  | 'fields___exif___exif___SubSecTimeOriginal'
  | 'fields___exif___exif___SubSecTimeDigitized'
  | 'fields___exif___exif___ColorSpace'
  | 'fields___exif___exif___FocalPlaneXResolution'
  | 'fields___exif___exif___FocalPlaneYResolution'
  | 'fields___exif___exif___FocalPlaneResolutionUnit'
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
  | 'fields___exif___exif___BodySerialNumber'
  | 'fields___exif___exif___LensSpecification'
  | 'fields___exif___exif___LensModel'
  | 'fields___exif___exif___CompressedBitsPerPixel'
  | 'fields___exif___exif___SubjectDistance'
  | 'fields___exif___exif___SubSecTime'
  | 'fields___exif___exif___PixelXDimension'
  | 'fields___exif___exif___PixelYDimension'
  | 'fields___exif___exif___InteropOffset'
  | 'fields___exif___gps___GPSVersionID'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___fields___gallery'
  | 'childrenImageSharp___fields___order'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
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
  | 'childImageSharp___gatsbyImageData'
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
  | 'childSkillsCsv___id'
  | 'childSkillsCsv___parent___id'
  | 'childSkillsCsv___parent___parent___id'
  | 'childSkillsCsv___parent___parent___children'
  | 'childSkillsCsv___parent___children'
  | 'childSkillsCsv___parent___children___id'
  | 'childSkillsCsv___parent___children___children'
  | 'childSkillsCsv___parent___internal___content'
  | 'childSkillsCsv___parent___internal___contentDigest'
  | 'childSkillsCsv___parent___internal___description'
  | 'childSkillsCsv___parent___internal___fieldOwners'
  | 'childSkillsCsv___parent___internal___ignoreType'
  | 'childSkillsCsv___parent___internal___mediaType'
  | 'childSkillsCsv___parent___internal___owner'
  | 'childSkillsCsv___parent___internal___type'
  | 'childSkillsCsv___children'
  | 'childSkillsCsv___children___id'
  | 'childSkillsCsv___children___parent___id'
  | 'childSkillsCsv___children___parent___children'
  | 'childSkillsCsv___children___children'
  | 'childSkillsCsv___children___children___id'
  | 'childSkillsCsv___children___children___children'
  | 'childSkillsCsv___children___internal___content'
  | 'childSkillsCsv___children___internal___contentDigest'
  | 'childSkillsCsv___children___internal___description'
  | 'childSkillsCsv___children___internal___fieldOwners'
  | 'childSkillsCsv___children___internal___ignoreType'
  | 'childSkillsCsv___children___internal___mediaType'
  | 'childSkillsCsv___children___internal___owner'
  | 'childSkillsCsv___children___internal___type'
  | 'childSkillsCsv___internal___content'
  | 'childSkillsCsv___internal___contentDigest'
  | 'childSkillsCsv___internal___description'
  | 'childSkillsCsv___internal___fieldOwners'
  | 'childSkillsCsv___internal___ignoreType'
  | 'childSkillsCsv___internal___mediaType'
  | 'childSkillsCsv___internal___owner'
  | 'childSkillsCsv___internal___type'
  | 'childSkillsCsv___Name'
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
  | 'childRecommendationsReceivedCsv___id'
  | 'childRecommendationsReceivedCsv___parent___id'
  | 'childRecommendationsReceivedCsv___parent___parent___id'
  | 'childRecommendationsReceivedCsv___parent___parent___children'
  | 'childRecommendationsReceivedCsv___parent___children'
  | 'childRecommendationsReceivedCsv___parent___children___id'
  | 'childRecommendationsReceivedCsv___parent___children___children'
  | 'childRecommendationsReceivedCsv___parent___internal___content'
  | 'childRecommendationsReceivedCsv___parent___internal___contentDigest'
  | 'childRecommendationsReceivedCsv___parent___internal___description'
  | 'childRecommendationsReceivedCsv___parent___internal___fieldOwners'
  | 'childRecommendationsReceivedCsv___parent___internal___ignoreType'
  | 'childRecommendationsReceivedCsv___parent___internal___mediaType'
  | 'childRecommendationsReceivedCsv___parent___internal___owner'
  | 'childRecommendationsReceivedCsv___parent___internal___type'
  | 'childRecommendationsReceivedCsv___children'
  | 'childRecommendationsReceivedCsv___children___id'
  | 'childRecommendationsReceivedCsv___children___parent___id'
  | 'childRecommendationsReceivedCsv___children___parent___children'
  | 'childRecommendationsReceivedCsv___children___children'
  | 'childRecommendationsReceivedCsv___children___children___id'
  | 'childRecommendationsReceivedCsv___children___children___children'
  | 'childRecommendationsReceivedCsv___children___internal___content'
  | 'childRecommendationsReceivedCsv___children___internal___contentDigest'
  | 'childRecommendationsReceivedCsv___children___internal___description'
  | 'childRecommendationsReceivedCsv___children___internal___fieldOwners'
  | 'childRecommendationsReceivedCsv___children___internal___ignoreType'
  | 'childRecommendationsReceivedCsv___children___internal___mediaType'
  | 'childRecommendationsReceivedCsv___children___internal___owner'
  | 'childRecommendationsReceivedCsv___children___internal___type'
  | 'childRecommendationsReceivedCsv___internal___content'
  | 'childRecommendationsReceivedCsv___internal___contentDigest'
  | 'childRecommendationsReceivedCsv___internal___description'
  | 'childRecommendationsReceivedCsv___internal___fieldOwners'
  | 'childRecommendationsReceivedCsv___internal___ignoreType'
  | 'childRecommendationsReceivedCsv___internal___mediaType'
  | 'childRecommendationsReceivedCsv___internal___owner'
  | 'childRecommendationsReceivedCsv___internal___type'
  | 'childRecommendationsReceivedCsv___First_Name'
  | 'childRecommendationsReceivedCsv___Last_Name'
  | 'childRecommendationsReceivedCsv___Company'
  | 'childRecommendationsReceivedCsv___Job_Title'
  | 'childRecommendationsReceivedCsv___Text'
  | 'childRecommendationsReceivedCsv___Creation_Date'
  | 'childRecommendationsReceivedCsv___Status'
  | 'childrenProfileCsv'
  | 'childrenProfileCsv___id'
  | 'childrenProfileCsv___parent___id'
  | 'childrenProfileCsv___parent___parent___id'
  | 'childrenProfileCsv___parent___parent___children'
  | 'childrenProfileCsv___parent___children'
  | 'childrenProfileCsv___parent___children___id'
  | 'childrenProfileCsv___parent___children___children'
  | 'childrenProfileCsv___parent___internal___content'
  | 'childrenProfileCsv___parent___internal___contentDigest'
  | 'childrenProfileCsv___parent___internal___description'
  | 'childrenProfileCsv___parent___internal___fieldOwners'
  | 'childrenProfileCsv___parent___internal___ignoreType'
  | 'childrenProfileCsv___parent___internal___mediaType'
  | 'childrenProfileCsv___parent___internal___owner'
  | 'childrenProfileCsv___parent___internal___type'
  | 'childrenProfileCsv___children'
  | 'childrenProfileCsv___children___id'
  | 'childrenProfileCsv___children___parent___id'
  | 'childrenProfileCsv___children___parent___children'
  | 'childrenProfileCsv___children___children'
  | 'childrenProfileCsv___children___children___id'
  | 'childrenProfileCsv___children___children___children'
  | 'childrenProfileCsv___children___internal___content'
  | 'childrenProfileCsv___children___internal___contentDigest'
  | 'childrenProfileCsv___children___internal___description'
  | 'childrenProfileCsv___children___internal___fieldOwners'
  | 'childrenProfileCsv___children___internal___ignoreType'
  | 'childrenProfileCsv___children___internal___mediaType'
  | 'childrenProfileCsv___children___internal___owner'
  | 'childrenProfileCsv___children___internal___type'
  | 'childrenProfileCsv___internal___content'
  | 'childrenProfileCsv___internal___contentDigest'
  | 'childrenProfileCsv___internal___description'
  | 'childrenProfileCsv___internal___fieldOwners'
  | 'childrenProfileCsv___internal___ignoreType'
  | 'childrenProfileCsv___internal___mediaType'
  | 'childrenProfileCsv___internal___owner'
  | 'childrenProfileCsv___internal___type'
  | 'childrenProfileCsv___First_Name'
  | 'childrenProfileCsv___Last_Name'
  | 'childrenProfileCsv___Maiden_Name'
  | 'childrenProfileCsv___Address'
  | 'childrenProfileCsv___Birth_Date'
  | 'childrenProfileCsv___Headline'
  | 'childrenProfileCsv___Summary'
  | 'childrenProfileCsv___Industry'
  | 'childrenProfileCsv___Zip_Code'
  | 'childrenProfileCsv___Geo_Location'
  | 'childrenProfileCsv___Twitter_Handles'
  | 'childrenProfileCsv___Websites'
  | 'childrenProfileCsv___Instant_Messengers'
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
  | 'childPositionsCsv___id'
  | 'childPositionsCsv___parent___id'
  | 'childPositionsCsv___parent___parent___id'
  | 'childPositionsCsv___parent___parent___children'
  | 'childPositionsCsv___parent___children'
  | 'childPositionsCsv___parent___children___id'
  | 'childPositionsCsv___parent___children___children'
  | 'childPositionsCsv___parent___internal___content'
  | 'childPositionsCsv___parent___internal___contentDigest'
  | 'childPositionsCsv___parent___internal___description'
  | 'childPositionsCsv___parent___internal___fieldOwners'
  | 'childPositionsCsv___parent___internal___ignoreType'
  | 'childPositionsCsv___parent___internal___mediaType'
  | 'childPositionsCsv___parent___internal___owner'
  | 'childPositionsCsv___parent___internal___type'
  | 'childPositionsCsv___children'
  | 'childPositionsCsv___children___id'
  | 'childPositionsCsv___children___parent___id'
  | 'childPositionsCsv___children___parent___children'
  | 'childPositionsCsv___children___children'
  | 'childPositionsCsv___children___children___id'
  | 'childPositionsCsv___children___children___children'
  | 'childPositionsCsv___children___internal___content'
  | 'childPositionsCsv___children___internal___contentDigest'
  | 'childPositionsCsv___children___internal___description'
  | 'childPositionsCsv___children___internal___fieldOwners'
  | 'childPositionsCsv___children___internal___ignoreType'
  | 'childPositionsCsv___children___internal___mediaType'
  | 'childPositionsCsv___children___internal___owner'
  | 'childPositionsCsv___children___internal___type'
  | 'childPositionsCsv___internal___content'
  | 'childPositionsCsv___internal___contentDigest'
  | 'childPositionsCsv___internal___description'
  | 'childPositionsCsv___internal___fieldOwners'
  | 'childPositionsCsv___internal___ignoreType'
  | 'childPositionsCsv___internal___mediaType'
  | 'childPositionsCsv___internal___owner'
  | 'childPositionsCsv___internal___type'
  | 'childPositionsCsv___Company_Name'
  | 'childPositionsCsv___Title'
  | 'childPositionsCsv___Description'
  | 'childPositionsCsv___Location'
  | 'childPositionsCsv___Started_On'
  | 'childPositionsCsv___Finished_On'
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
  | 'childOrganizationsCsv___id'
  | 'childOrganizationsCsv___parent___id'
  | 'childOrganizationsCsv___parent___parent___id'
  | 'childOrganizationsCsv___parent___parent___children'
  | 'childOrganizationsCsv___parent___children'
  | 'childOrganizationsCsv___parent___children___id'
  | 'childOrganizationsCsv___parent___children___children'
  | 'childOrganizationsCsv___parent___internal___content'
  | 'childOrganizationsCsv___parent___internal___contentDigest'
  | 'childOrganizationsCsv___parent___internal___description'
  | 'childOrganizationsCsv___parent___internal___fieldOwners'
  | 'childOrganizationsCsv___parent___internal___ignoreType'
  | 'childOrganizationsCsv___parent___internal___mediaType'
  | 'childOrganizationsCsv___parent___internal___owner'
  | 'childOrganizationsCsv___parent___internal___type'
  | 'childOrganizationsCsv___children'
  | 'childOrganizationsCsv___children___id'
  | 'childOrganizationsCsv___children___parent___id'
  | 'childOrganizationsCsv___children___parent___children'
  | 'childOrganizationsCsv___children___children'
  | 'childOrganizationsCsv___children___children___id'
  | 'childOrganizationsCsv___children___children___children'
  | 'childOrganizationsCsv___children___internal___content'
  | 'childOrganizationsCsv___children___internal___contentDigest'
  | 'childOrganizationsCsv___children___internal___description'
  | 'childOrganizationsCsv___children___internal___fieldOwners'
  | 'childOrganizationsCsv___children___internal___ignoreType'
  | 'childOrganizationsCsv___children___internal___mediaType'
  | 'childOrganizationsCsv___children___internal___owner'
  | 'childOrganizationsCsv___children___internal___type'
  | 'childOrganizationsCsv___internal___content'
  | 'childOrganizationsCsv___internal___contentDigest'
  | 'childOrganizationsCsv___internal___description'
  | 'childOrganizationsCsv___internal___fieldOwners'
  | 'childOrganizationsCsv___internal___ignoreType'
  | 'childOrganizationsCsv___internal___mediaType'
  | 'childOrganizationsCsv___internal___owner'
  | 'childOrganizationsCsv___internal___type'
  | 'childOrganizationsCsv___Name'
  | 'childOrganizationsCsv___Description'
  | 'childOrganizationsCsv___Position'
  | 'childOrganizationsCsv___Started_On'
  | 'childOrganizationsCsv___Finished_On'
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
  | 'childLanguagesCsv___id'
  | 'childLanguagesCsv___parent___id'
  | 'childLanguagesCsv___parent___parent___id'
  | 'childLanguagesCsv___parent___parent___children'
  | 'childLanguagesCsv___parent___children'
  | 'childLanguagesCsv___parent___children___id'
  | 'childLanguagesCsv___parent___children___children'
  | 'childLanguagesCsv___parent___internal___content'
  | 'childLanguagesCsv___parent___internal___contentDigest'
  | 'childLanguagesCsv___parent___internal___description'
  | 'childLanguagesCsv___parent___internal___fieldOwners'
  | 'childLanguagesCsv___parent___internal___ignoreType'
  | 'childLanguagesCsv___parent___internal___mediaType'
  | 'childLanguagesCsv___parent___internal___owner'
  | 'childLanguagesCsv___parent___internal___type'
  | 'childLanguagesCsv___children'
  | 'childLanguagesCsv___children___id'
  | 'childLanguagesCsv___children___parent___id'
  | 'childLanguagesCsv___children___parent___children'
  | 'childLanguagesCsv___children___children'
  | 'childLanguagesCsv___children___children___id'
  | 'childLanguagesCsv___children___children___children'
  | 'childLanguagesCsv___children___internal___content'
  | 'childLanguagesCsv___children___internal___contentDigest'
  | 'childLanguagesCsv___children___internal___description'
  | 'childLanguagesCsv___children___internal___fieldOwners'
  | 'childLanguagesCsv___children___internal___ignoreType'
  | 'childLanguagesCsv___children___internal___mediaType'
  | 'childLanguagesCsv___children___internal___owner'
  | 'childLanguagesCsv___children___internal___type'
  | 'childLanguagesCsv___internal___content'
  | 'childLanguagesCsv___internal___contentDigest'
  | 'childLanguagesCsv___internal___description'
  | 'childLanguagesCsv___internal___fieldOwners'
  | 'childLanguagesCsv___internal___ignoreType'
  | 'childLanguagesCsv___internal___mediaType'
  | 'childLanguagesCsv___internal___owner'
  | 'childLanguagesCsv___internal___type'
  | 'childLanguagesCsv___Name'
  | 'childLanguagesCsv___Proficiency'
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
  | 'childEducationCsv___id'
  | 'childEducationCsv___parent___id'
  | 'childEducationCsv___parent___parent___id'
  | 'childEducationCsv___parent___parent___children'
  | 'childEducationCsv___parent___children'
  | 'childEducationCsv___parent___children___id'
  | 'childEducationCsv___parent___children___children'
  | 'childEducationCsv___parent___internal___content'
  | 'childEducationCsv___parent___internal___contentDigest'
  | 'childEducationCsv___parent___internal___description'
  | 'childEducationCsv___parent___internal___fieldOwners'
  | 'childEducationCsv___parent___internal___ignoreType'
  | 'childEducationCsv___parent___internal___mediaType'
  | 'childEducationCsv___parent___internal___owner'
  | 'childEducationCsv___parent___internal___type'
  | 'childEducationCsv___children'
  | 'childEducationCsv___children___id'
  | 'childEducationCsv___children___parent___id'
  | 'childEducationCsv___children___parent___children'
  | 'childEducationCsv___children___children'
  | 'childEducationCsv___children___children___id'
  | 'childEducationCsv___children___children___children'
  | 'childEducationCsv___children___internal___content'
  | 'childEducationCsv___children___internal___contentDigest'
  | 'childEducationCsv___children___internal___description'
  | 'childEducationCsv___children___internal___fieldOwners'
  | 'childEducationCsv___children___internal___ignoreType'
  | 'childEducationCsv___children___internal___mediaType'
  | 'childEducationCsv___children___internal___owner'
  | 'childEducationCsv___children___internal___type'
  | 'childEducationCsv___internal___content'
  | 'childEducationCsv___internal___contentDigest'
  | 'childEducationCsv___internal___description'
  | 'childEducationCsv___internal___fieldOwners'
  | 'childEducationCsv___internal___ignoreType'
  | 'childEducationCsv___internal___mediaType'
  | 'childEducationCsv___internal___owner'
  | 'childEducationCsv___internal___type'
  | 'childEducationCsv___School_Name'
  | 'childEducationCsv___Start_Date'
  | 'childEducationCsv___End_Date'
  | 'childEducationCsv___Notes'
  | 'childEducationCsv___Degree_Name'
  | 'childEducationCsv___Activities'
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
  | 'childConnectionsCsv___id'
  | 'childConnectionsCsv___parent___id'
  | 'childConnectionsCsv___parent___parent___id'
  | 'childConnectionsCsv___parent___parent___children'
  | 'childConnectionsCsv___parent___children'
  | 'childConnectionsCsv___parent___children___id'
  | 'childConnectionsCsv___parent___children___children'
  | 'childConnectionsCsv___parent___internal___content'
  | 'childConnectionsCsv___parent___internal___contentDigest'
  | 'childConnectionsCsv___parent___internal___description'
  | 'childConnectionsCsv___parent___internal___fieldOwners'
  | 'childConnectionsCsv___parent___internal___ignoreType'
  | 'childConnectionsCsv___parent___internal___mediaType'
  | 'childConnectionsCsv___parent___internal___owner'
  | 'childConnectionsCsv___parent___internal___type'
  | 'childConnectionsCsv___children'
  | 'childConnectionsCsv___children___id'
  | 'childConnectionsCsv___children___parent___id'
  | 'childConnectionsCsv___children___parent___children'
  | 'childConnectionsCsv___children___children'
  | 'childConnectionsCsv___children___children___id'
  | 'childConnectionsCsv___children___children___children'
  | 'childConnectionsCsv___children___internal___content'
  | 'childConnectionsCsv___children___internal___contentDigest'
  | 'childConnectionsCsv___children___internal___description'
  | 'childConnectionsCsv___children___internal___fieldOwners'
  | 'childConnectionsCsv___children___internal___ignoreType'
  | 'childConnectionsCsv___children___internal___mediaType'
  | 'childConnectionsCsv___children___internal___owner'
  | 'childConnectionsCsv___children___internal___type'
  | 'childConnectionsCsv___internal___content'
  | 'childConnectionsCsv___internal___contentDigest'
  | 'childConnectionsCsv___internal___description'
  | 'childConnectionsCsv___internal___fieldOwners'
  | 'childConnectionsCsv___internal___ignoreType'
  | 'childConnectionsCsv___internal___mediaType'
  | 'childConnectionsCsv___internal___owner'
  | 'childConnectionsCsv___internal___type'
  | 'childConnectionsCsv___First_Name'
  | 'childConnectionsCsv___Last_Name'
  | 'childConnectionsCsv___Email_Address'
  | 'childConnectionsCsv___Company'
  | 'childConnectionsCsv___Position'
  | 'childConnectionsCsv___Connected_On'
  | 'childrenCertificationsCsv'
  | 'childrenCertificationsCsv___id'
  | 'childrenCertificationsCsv___parent___id'
  | 'childrenCertificationsCsv___parent___parent___id'
  | 'childrenCertificationsCsv___parent___parent___children'
  | 'childrenCertificationsCsv___parent___children'
  | 'childrenCertificationsCsv___parent___children___id'
  | 'childrenCertificationsCsv___parent___children___children'
  | 'childrenCertificationsCsv___parent___internal___content'
  | 'childrenCertificationsCsv___parent___internal___contentDigest'
  | 'childrenCertificationsCsv___parent___internal___description'
  | 'childrenCertificationsCsv___parent___internal___fieldOwners'
  | 'childrenCertificationsCsv___parent___internal___ignoreType'
  | 'childrenCertificationsCsv___parent___internal___mediaType'
  | 'childrenCertificationsCsv___parent___internal___owner'
  | 'childrenCertificationsCsv___parent___internal___type'
  | 'childrenCertificationsCsv___children'
  | 'childrenCertificationsCsv___children___id'
  | 'childrenCertificationsCsv___children___parent___id'
  | 'childrenCertificationsCsv___children___parent___children'
  | 'childrenCertificationsCsv___children___children'
  | 'childrenCertificationsCsv___children___children___id'
  | 'childrenCertificationsCsv___children___children___children'
  | 'childrenCertificationsCsv___children___internal___content'
  | 'childrenCertificationsCsv___children___internal___contentDigest'
  | 'childrenCertificationsCsv___children___internal___description'
  | 'childrenCertificationsCsv___children___internal___fieldOwners'
  | 'childrenCertificationsCsv___children___internal___ignoreType'
  | 'childrenCertificationsCsv___children___internal___mediaType'
  | 'childrenCertificationsCsv___children___internal___owner'
  | 'childrenCertificationsCsv___children___internal___type'
  | 'childrenCertificationsCsv___internal___content'
  | 'childrenCertificationsCsv___internal___contentDigest'
  | 'childrenCertificationsCsv___internal___description'
  | 'childrenCertificationsCsv___internal___fieldOwners'
  | 'childrenCertificationsCsv___internal___ignoreType'
  | 'childrenCertificationsCsv___internal___mediaType'
  | 'childrenCertificationsCsv___internal___owner'
  | 'childrenCertificationsCsv___internal___type'
  | 'childrenCertificationsCsv___Name'
  | 'childrenCertificationsCsv___Url'
  | 'childrenCertificationsCsv___Authority'
  | 'childrenCertificationsCsv___Started_On'
  | 'childrenCertificationsCsv___Finished_On'
  | 'childrenCertificationsCsv___License_Number'
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

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  fields?: InputMaybe<FileFieldsFilterInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenSkillsCsv?: InputMaybe<SkillsCsvFilterListInput>;
  childSkillsCsv?: InputMaybe<SkillsCsvFilterInput>;
  childrenRecommendationsReceivedCsv?: InputMaybe<RecommendationsReceivedCsvFilterListInput>;
  childRecommendationsReceivedCsv?: InputMaybe<RecommendationsReceivedCsvFilterInput>;
  childrenProfileCsv?: InputMaybe<ProfileCsvFilterListInput>;
  childProfileCsv?: InputMaybe<ProfileCsvFilterInput>;
  childrenPositionsCsv?: InputMaybe<PositionsCsvFilterListInput>;
  childPositionsCsv?: InputMaybe<PositionsCsvFilterInput>;
  childrenOrganizationsCsv?: InputMaybe<OrganizationsCsvFilterListInput>;
  childOrganizationsCsv?: InputMaybe<OrganizationsCsvFilterInput>;
  childrenLanguagesCsv?: InputMaybe<LanguagesCsvFilterListInput>;
  childLanguagesCsv?: InputMaybe<LanguagesCsvFilterInput>;
  childrenEducationCsv?: InputMaybe<EducationCsvFilterListInput>;
  childEducationCsv?: InputMaybe<EducationCsvFilterInput>;
  childrenConnectionsCsv?: InputMaybe<ConnectionsCsvFilterListInput>;
  childConnectionsCsv?: InputMaybe<ConnectionsCsvFilterInput>;
  childrenCertificationsCsv?: InputMaybe<CertificationsCsvFilterListInput>;
  childCertificationsCsv?: InputMaybe<CertificationsCsvFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
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

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___url'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
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

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
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
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
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
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
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

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
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

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
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

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
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
  | 'gatsbyImageData'
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

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  Notes?: InputMaybe<StringQueryOperatorInput>;
  Grouping?: InputMaybe<StringQueryOperatorInput>;
  Created?: InputMaybe<DateQueryOperatorInput>;
  Updated?: InputMaybe<DateQueryOperatorInput>;
  Tags?: InputMaybe<MarkdownRemarkFrontmatterTagsFilterListInput>;
};

export type MarkdownRemarkFrontmatterTagsFilterListInput = {
  elemMatch?: InputMaybe<MarkdownRemarkFrontmatterTagsFilterInput>;
};

export type MarkdownRemarkFrontmatterTagsFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  depth?: InputMaybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___Notes'
  | 'frontmatter___Grouping'
  | 'frontmatter___Created'
  | 'frontmatter___Updated'
  | 'frontmatter___Tags'
  | 'frontmatter___Tags___id'
  | 'frontmatter___Tags___name'
  | 'frontmatter___Tags___color'
  | 'excerpt'
  | 'rawMarkdownBody'
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

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type MarkdownRemarkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MdxFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  Notes?: InputMaybe<StringQueryOperatorInput>;
  Grouping?: InputMaybe<StringQueryOperatorInput>;
  Created?: InputMaybe<DateQueryOperatorInput>;
  Updated?: InputMaybe<DateQueryOperatorInput>;
  Tags?: InputMaybe<MdxFrontmatterTagsFilterListInput>;
};

export type MdxFrontmatterTagsFilterListInput = {
  elemMatch?: InputMaybe<MdxFrontmatterTagsFilterInput>;
};

export type MdxFrontmatterTagsFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: InputMaybe<MdxHeadingMdxFilterInput>;
};

export type MdxHeadingMdxFilterInput = {
  value?: InputMaybe<StringQueryOperatorInput>;
  depth?: InputMaybe<IntQueryOperatorInput>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

export type MdxConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___Notes'
  | 'frontmatter___Grouping'
  | 'frontmatter___Created'
  | 'frontmatter___Updated'
  | 'frontmatter___Tags'
  | 'frontmatter___Tags___id'
  | 'frontmatter___Tags___name'
  | 'frontmatter___Tags___color'
  | 'slug'
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

export type MdxGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxFilterInput = {
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  body?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type MdxSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MdxFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SkillsCsvConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SkillsCsvEdge>;
  nodes: Array<SkillsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SkillsCsvGroupConnection>;
};


export type SkillsCsvConnectionDistinctArgs = {
  field: SkillsCsvFieldsEnum;
};


export type SkillsCsvConnectionMaxArgs = {
  field: SkillsCsvFieldsEnum;
};


export type SkillsCsvConnectionMinArgs = {
  field: SkillsCsvFieldsEnum;
};


export type SkillsCsvConnectionSumArgs = {
  field: SkillsCsvFieldsEnum;
};


export type SkillsCsvConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SkillsCsvFieldsEnum;
};

export type SkillsCsvEdge = {
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

export type SkillsCsvGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SkillsCsvEdge>;
  nodes: Array<SkillsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SkillsCsvGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SkillsCsvGroupConnectionDistinctArgs = {
  field: SkillsCsvFieldsEnum;
};


export type SkillsCsvGroupConnectionMaxArgs = {
  field: SkillsCsvFieldsEnum;
};


export type SkillsCsvGroupConnectionMinArgs = {
  field: SkillsCsvFieldsEnum;
};


export type SkillsCsvGroupConnectionSumArgs = {
  field: SkillsCsvFieldsEnum;
};


export type SkillsCsvGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SkillsCsvFieldsEnum;
};

export type SkillsCsvSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SkillsCsvFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type RecommendationsReceivedCsvConnection = {
  totalCount: Scalars['Int'];
  edges: Array<RecommendationsReceivedCsvEdge>;
  nodes: Array<RecommendationsReceivedCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<RecommendationsReceivedCsvGroupConnection>;
};


export type RecommendationsReceivedCsvConnectionDistinctArgs = {
  field: RecommendationsReceivedCsvFieldsEnum;
};


export type RecommendationsReceivedCsvConnectionMaxArgs = {
  field: RecommendationsReceivedCsvFieldsEnum;
};


export type RecommendationsReceivedCsvConnectionMinArgs = {
  field: RecommendationsReceivedCsvFieldsEnum;
};


export type RecommendationsReceivedCsvConnectionSumArgs = {
  field: RecommendationsReceivedCsvFieldsEnum;
};


export type RecommendationsReceivedCsvConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: RecommendationsReceivedCsvFieldsEnum;
};

export type RecommendationsReceivedCsvEdge = {
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

export type RecommendationsReceivedCsvGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<RecommendationsReceivedCsvEdge>;
  nodes: Array<RecommendationsReceivedCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<RecommendationsReceivedCsvGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type RecommendationsReceivedCsvGroupConnectionDistinctArgs = {
  field: RecommendationsReceivedCsvFieldsEnum;
};


export type RecommendationsReceivedCsvGroupConnectionMaxArgs = {
  field: RecommendationsReceivedCsvFieldsEnum;
};


export type RecommendationsReceivedCsvGroupConnectionMinArgs = {
  field: RecommendationsReceivedCsvFieldsEnum;
};


export type RecommendationsReceivedCsvGroupConnectionSumArgs = {
  field: RecommendationsReceivedCsvFieldsEnum;
};


export type RecommendationsReceivedCsvGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: RecommendationsReceivedCsvFieldsEnum;
};

export type RecommendationsReceivedCsvSortInput = {
  fields?: InputMaybe<Array<InputMaybe<RecommendationsReceivedCsvFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ProfileCsvConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProfileCsvEdge>;
  nodes: Array<ProfileCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ProfileCsvGroupConnection>;
};


export type ProfileCsvConnectionDistinctArgs = {
  field: ProfileCsvFieldsEnum;
};


export type ProfileCsvConnectionMaxArgs = {
  field: ProfileCsvFieldsEnum;
};


export type ProfileCsvConnectionMinArgs = {
  field: ProfileCsvFieldsEnum;
};


export type ProfileCsvConnectionSumArgs = {
  field: ProfileCsvFieldsEnum;
};


export type ProfileCsvConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ProfileCsvFieldsEnum;
};

export type ProfileCsvEdge = {
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

export type ProfileCsvGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProfileCsvEdge>;
  nodes: Array<ProfileCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ProfileCsvGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ProfileCsvGroupConnectionDistinctArgs = {
  field: ProfileCsvFieldsEnum;
};


export type ProfileCsvGroupConnectionMaxArgs = {
  field: ProfileCsvFieldsEnum;
};


export type ProfileCsvGroupConnectionMinArgs = {
  field: ProfileCsvFieldsEnum;
};


export type ProfileCsvGroupConnectionSumArgs = {
  field: ProfileCsvFieldsEnum;
};


export type ProfileCsvGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ProfileCsvFieldsEnum;
};

export type ProfileCsvSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ProfileCsvFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PositionsCsvConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PositionsCsvEdge>;
  nodes: Array<PositionsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PositionsCsvGroupConnection>;
};


export type PositionsCsvConnectionDistinctArgs = {
  field: PositionsCsvFieldsEnum;
};


export type PositionsCsvConnectionMaxArgs = {
  field: PositionsCsvFieldsEnum;
};


export type PositionsCsvConnectionMinArgs = {
  field: PositionsCsvFieldsEnum;
};


export type PositionsCsvConnectionSumArgs = {
  field: PositionsCsvFieldsEnum;
};


export type PositionsCsvConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PositionsCsvFieldsEnum;
};

export type PositionsCsvEdge = {
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

export type PositionsCsvGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PositionsCsvEdge>;
  nodes: Array<PositionsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PositionsCsvGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type PositionsCsvGroupConnectionDistinctArgs = {
  field: PositionsCsvFieldsEnum;
};


export type PositionsCsvGroupConnectionMaxArgs = {
  field: PositionsCsvFieldsEnum;
};


export type PositionsCsvGroupConnectionMinArgs = {
  field: PositionsCsvFieldsEnum;
};


export type PositionsCsvGroupConnectionSumArgs = {
  field: PositionsCsvFieldsEnum;
};


export type PositionsCsvGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PositionsCsvFieldsEnum;
};

export type PositionsCsvSortInput = {
  fields?: InputMaybe<Array<InputMaybe<PositionsCsvFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type OrganizationsCsvConnection = {
  totalCount: Scalars['Int'];
  edges: Array<OrganizationsCsvEdge>;
  nodes: Array<OrganizationsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<OrganizationsCsvGroupConnection>;
};


export type OrganizationsCsvConnectionDistinctArgs = {
  field: OrganizationsCsvFieldsEnum;
};


export type OrganizationsCsvConnectionMaxArgs = {
  field: OrganizationsCsvFieldsEnum;
};


export type OrganizationsCsvConnectionMinArgs = {
  field: OrganizationsCsvFieldsEnum;
};


export type OrganizationsCsvConnectionSumArgs = {
  field: OrganizationsCsvFieldsEnum;
};


export type OrganizationsCsvConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: OrganizationsCsvFieldsEnum;
};

export type OrganizationsCsvEdge = {
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

export type OrganizationsCsvGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<OrganizationsCsvEdge>;
  nodes: Array<OrganizationsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<OrganizationsCsvGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type OrganizationsCsvGroupConnectionDistinctArgs = {
  field: OrganizationsCsvFieldsEnum;
};


export type OrganizationsCsvGroupConnectionMaxArgs = {
  field: OrganizationsCsvFieldsEnum;
};


export type OrganizationsCsvGroupConnectionMinArgs = {
  field: OrganizationsCsvFieldsEnum;
};


export type OrganizationsCsvGroupConnectionSumArgs = {
  field: OrganizationsCsvFieldsEnum;
};


export type OrganizationsCsvGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: OrganizationsCsvFieldsEnum;
};

export type OrganizationsCsvSortInput = {
  fields?: InputMaybe<Array<InputMaybe<OrganizationsCsvFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type NotionPropertiesFilterInput = {
  Notes?: InputMaybe<NotionPropertiesNotesFilterInput>;
  Grouping?: InputMaybe<NotionPropertiesGroupingFilterInput>;
  Created?: InputMaybe<NotionPropertiesCreatedFilterInput>;
  Updated?: InputMaybe<NotionPropertiesUpdatedFilterInput>;
  Tags?: InputMaybe<NotionPropertiesTagsFilterInput>;
};

export type NotionPropertiesNotesFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionPropertiesGroupingFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionPropertiesCreatedFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DateQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionPropertiesUpdatedFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DateQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionPropertiesTagsFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<NotionPropertiesTagsValueFilterListInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionPropertiesTagsValueFilterListInput = {
  elemMatch?: InputMaybe<NotionPropertiesTagsValueFilterInput>;
};

export type NotionPropertiesTagsValueFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawFilterInput = {
  object?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  created_time?: InputMaybe<DateQueryOperatorInput>;
  last_edited_time?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NotionRawParentFilterInput>;
  archived?: InputMaybe<BooleanQueryOperatorInput>;
  properties?: InputMaybe<NotionRawPropertiesFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NotionRawChildrenFilterListInput>;
};

export type NotionRawParentFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  database_id?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesFilterInput = {
  Notes?: InputMaybe<NotionRawPropertiesNotesFilterInput>;
  Grouping?: InputMaybe<NotionRawPropertiesGroupingFilterInput>;
  Name?: InputMaybe<NotionRawPropertiesNameFilterInput>;
  Created?: InputMaybe<NotionRawPropertiesCreatedFilterInput>;
  Updated?: InputMaybe<NotionRawPropertiesUpdatedFilterInput>;
  Tags?: InputMaybe<NotionRawPropertiesTagsFilterInput>;
};

export type NotionRawPropertiesNotesFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  rich_text?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesGroupingFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  rich_text?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesNameFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<NotionRawPropertiesNameTitleFilterListInput>;
};

export type NotionRawPropertiesNameTitleFilterListInput = {
  elemMatch?: InputMaybe<NotionRawPropertiesNameTitleFilterInput>;
};

export type NotionRawPropertiesNameTitleFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<NotionRawPropertiesNameTitleTextFilterInput>;
  annotations?: InputMaybe<NotionRawPropertiesNameTitleAnnotationsFilterInput>;
  plain_text?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesNameTitleTextFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesNameTitleAnnotationsFilterInput = {
  bold?: InputMaybe<BooleanQueryOperatorInput>;
  italic?: InputMaybe<BooleanQueryOperatorInput>;
  strikethrough?: InputMaybe<BooleanQueryOperatorInput>;
  underline?: InputMaybe<BooleanQueryOperatorInput>;
  code?: InputMaybe<BooleanQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawPropertiesCreatedFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  created_time?: InputMaybe<DateQueryOperatorInput>;
};

export type NotionRawPropertiesUpdatedFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  last_edited_time?: InputMaybe<DateQueryOperatorInput>;
};

export type NotionRawPropertiesTagsFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  multi_select?: InputMaybe<NotionRawPropertiesTagsMulti_SelectFilterListInput>;
};

export type NotionRawPropertiesTagsMulti_SelectFilterListInput = {
  elemMatch?: InputMaybe<NotionRawPropertiesTagsMulti_SelectFilterInput>;
};

export type NotionRawPropertiesTagsMulti_SelectFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenFilterListInput = {
  elemMatch?: InputMaybe<NotionRawChildrenFilterInput>;
};

export type NotionRawChildrenFilterInput = {
  object?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  created_time?: InputMaybe<DateQueryOperatorInput>;
  last_edited_time?: InputMaybe<DateQueryOperatorInput>;
  has_children?: InputMaybe<BooleanQueryOperatorInput>;
  archived?: InputMaybe<BooleanQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  paragraph?: InputMaybe<NotionRawChildrenParagraphFilterInput>;
  heading_2?: InputMaybe<NotionRawChildrenHeading_2FilterInput>;
  bulleted_list_item?: InputMaybe<NotionRawChildrenBulleted_List_ItemFilterInput>;
  children?: InputMaybe<NotionRawChildrenChildrenFilterListInput>;
  numbered_list_item?: InputMaybe<NotionRawChildrenNumbered_List_ItemFilterInput>;
  callout?: InputMaybe<NotionRawChildrenCalloutFilterInput>;
  image?: InputMaybe<NotionRawChildrenImageFilterInput>;
  heading_1?: InputMaybe<NotionRawChildrenHeading_1FilterInput>;
  heading_3?: InputMaybe<NotionRawChildrenHeading_3FilterInput>;
};

export type NotionRawChildrenParagraphFilterInput = {
  text?: InputMaybe<NotionRawChildrenParagraphTextFilterListInput>;
};

export type NotionRawChildrenParagraphTextFilterListInput = {
  elemMatch?: InputMaybe<NotionRawChildrenParagraphTextFilterInput>;
};

export type NotionRawChildrenParagraphTextFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<NotionRawChildrenParagraphTextTextFilterInput>;
  annotations?: InputMaybe<NotionRawChildrenParagraphTextAnnotationsFilterInput>;
  plain_text?: InputMaybe<StringQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenParagraphTextTextFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<NotionRawChildrenParagraphTextTextLinkFilterInput>;
};

export type NotionRawChildrenParagraphTextTextLinkFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenParagraphTextAnnotationsFilterInput = {
  bold?: InputMaybe<BooleanQueryOperatorInput>;
  italic?: InputMaybe<BooleanQueryOperatorInput>;
  strikethrough?: InputMaybe<BooleanQueryOperatorInput>;
  underline?: InputMaybe<BooleanQueryOperatorInput>;
  code?: InputMaybe<BooleanQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenHeading_2FilterInput = {
  text?: InputMaybe<NotionRawChildrenHeading_2TextFilterListInput>;
};

export type NotionRawChildrenHeading_2TextFilterListInput = {
  elemMatch?: InputMaybe<NotionRawChildrenHeading_2TextFilterInput>;
};

export type NotionRawChildrenHeading_2TextFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<NotionRawChildrenHeading_2TextTextFilterInput>;
  annotations?: InputMaybe<NotionRawChildrenHeading_2TextAnnotationsFilterInput>;
  plain_text?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenHeading_2TextTextFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenHeading_2TextAnnotationsFilterInput = {
  bold?: InputMaybe<BooleanQueryOperatorInput>;
  italic?: InputMaybe<BooleanQueryOperatorInput>;
  strikethrough?: InputMaybe<BooleanQueryOperatorInput>;
  underline?: InputMaybe<BooleanQueryOperatorInput>;
  code?: InputMaybe<BooleanQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenBulleted_List_ItemFilterInput = {
  text?: InputMaybe<NotionRawChildrenBulleted_List_ItemTextFilterListInput>;
};

export type NotionRawChildrenBulleted_List_ItemTextFilterListInput = {
  elemMatch?: InputMaybe<NotionRawChildrenBulleted_List_ItemTextFilterInput>;
};

export type NotionRawChildrenBulleted_List_ItemTextFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<NotionRawChildrenBulleted_List_ItemTextTextFilterInput>;
  annotations?: InputMaybe<NotionRawChildrenBulleted_List_ItemTextAnnotationsFilterInput>;
  plain_text?: InputMaybe<StringQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenBulleted_List_ItemTextTextFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<NotionRawChildrenBulleted_List_ItemTextTextLinkFilterInput>;
};

export type NotionRawChildrenBulleted_List_ItemTextTextLinkFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenBulleted_List_ItemTextAnnotationsFilterInput = {
  bold?: InputMaybe<BooleanQueryOperatorInput>;
  italic?: InputMaybe<BooleanQueryOperatorInput>;
  strikethrough?: InputMaybe<BooleanQueryOperatorInput>;
  underline?: InputMaybe<BooleanQueryOperatorInput>;
  code?: InputMaybe<BooleanQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenChildrenFilterListInput = {
  elemMatch?: InputMaybe<NotionRawChildrenChildrenFilterInput>;
};

export type NotionRawChildrenChildrenFilterInput = {
  object?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  created_time?: InputMaybe<DateQueryOperatorInput>;
  last_edited_time?: InputMaybe<DateQueryOperatorInput>;
  has_children?: InputMaybe<BooleanQueryOperatorInput>;
  archived?: InputMaybe<BooleanQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  bulleted_list_item?: InputMaybe<NotionRawChildrenChildrenBulleted_List_ItemFilterInput>;
};

export type NotionRawChildrenChildrenBulleted_List_ItemFilterInput = {
  text?: InputMaybe<NotionRawChildrenChildrenBulleted_List_ItemTextFilterListInput>;
};

export type NotionRawChildrenChildrenBulleted_List_ItemTextFilterListInput = {
  elemMatch?: InputMaybe<NotionRawChildrenChildrenBulleted_List_ItemTextFilterInput>;
};

export type NotionRawChildrenChildrenBulleted_List_ItemTextFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<NotionRawChildrenChildrenBulleted_List_ItemTextTextFilterInput>;
  annotations?: InputMaybe<NotionRawChildrenChildrenBulleted_List_ItemTextAnnotationsFilterInput>;
  plain_text?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenChildrenBulleted_List_ItemTextTextFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenChildrenBulleted_List_ItemTextAnnotationsFilterInput = {
  bold?: InputMaybe<BooleanQueryOperatorInput>;
  italic?: InputMaybe<BooleanQueryOperatorInput>;
  strikethrough?: InputMaybe<BooleanQueryOperatorInput>;
  underline?: InputMaybe<BooleanQueryOperatorInput>;
  code?: InputMaybe<BooleanQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenNumbered_List_ItemFilterInput = {
  text?: InputMaybe<NotionRawChildrenNumbered_List_ItemTextFilterListInput>;
};

export type NotionRawChildrenNumbered_List_ItemTextFilterListInput = {
  elemMatch?: InputMaybe<NotionRawChildrenNumbered_List_ItemTextFilterInput>;
};

export type NotionRawChildrenNumbered_List_ItemTextFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<NotionRawChildrenNumbered_List_ItemTextTextFilterInput>;
  annotations?: InputMaybe<NotionRawChildrenNumbered_List_ItemTextAnnotationsFilterInput>;
  plain_text?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenNumbered_List_ItemTextTextFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenNumbered_List_ItemTextAnnotationsFilterInput = {
  bold?: InputMaybe<BooleanQueryOperatorInput>;
  italic?: InputMaybe<BooleanQueryOperatorInput>;
  strikethrough?: InputMaybe<BooleanQueryOperatorInput>;
  underline?: InputMaybe<BooleanQueryOperatorInput>;
  code?: InputMaybe<BooleanQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenCalloutFilterInput = {
  text?: InputMaybe<NotionRawChildrenCalloutTextFilterListInput>;
  icon?: InputMaybe<NotionRawChildrenCalloutIconFilterInput>;
};

export type NotionRawChildrenCalloutTextFilterListInput = {
  elemMatch?: InputMaybe<NotionRawChildrenCalloutTextFilterInput>;
};

export type NotionRawChildrenCalloutTextFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<NotionRawChildrenCalloutTextTextFilterInput>;
  annotations?: InputMaybe<NotionRawChildrenCalloutTextAnnotationsFilterInput>;
  plain_text?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenCalloutTextTextFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenCalloutTextAnnotationsFilterInput = {
  bold?: InputMaybe<BooleanQueryOperatorInput>;
  italic?: InputMaybe<BooleanQueryOperatorInput>;
  strikethrough?: InputMaybe<BooleanQueryOperatorInput>;
  underline?: InputMaybe<BooleanQueryOperatorInput>;
  code?: InputMaybe<BooleanQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenCalloutIconFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  emoji?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenImageFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  file?: InputMaybe<NotionRawChildrenImageFileFilterInput>;
  external?: InputMaybe<NotionRawChildrenImageExternalFilterInput>;
};

export type NotionRawChildrenImageFileFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>;
  expiry_time?: InputMaybe<DateQueryOperatorInput>;
};

export type NotionRawChildrenImageExternalFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenHeading_1FilterInput = {
  text?: InputMaybe<NotionRawChildrenHeading_1TextFilterListInput>;
};

export type NotionRawChildrenHeading_1TextFilterListInput = {
  elemMatch?: InputMaybe<NotionRawChildrenHeading_1TextFilterInput>;
};

export type NotionRawChildrenHeading_1TextFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<NotionRawChildrenHeading_1TextTextFilterInput>;
  annotations?: InputMaybe<NotionRawChildrenHeading_1TextAnnotationsFilterInput>;
  plain_text?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenHeading_1TextTextFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenHeading_1TextAnnotationsFilterInput = {
  bold?: InputMaybe<BooleanQueryOperatorInput>;
  italic?: InputMaybe<BooleanQueryOperatorInput>;
  strikethrough?: InputMaybe<BooleanQueryOperatorInput>;
  underline?: InputMaybe<BooleanQueryOperatorInput>;
  code?: InputMaybe<BooleanQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenHeading_3FilterInput = {
  text?: InputMaybe<NotionRawChildrenHeading_3TextFilterListInput>;
};

export type NotionRawChildrenHeading_3TextFilterListInput = {
  elemMatch?: InputMaybe<NotionRawChildrenHeading_3TextFilterInput>;
};

export type NotionRawChildrenHeading_3TextFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<NotionRawChildrenHeading_3TextTextFilterInput>;
  annotations?: InputMaybe<NotionRawChildrenHeading_3TextAnnotationsFilterInput>;
  plain_text?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenHeading_3TextTextFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
};

export type NotionRawChildrenHeading_3TextAnnotationsFilterInput = {
  bold?: InputMaybe<BooleanQueryOperatorInput>;
  italic?: InputMaybe<BooleanQueryOperatorInput>;
  strikethrough?: InputMaybe<BooleanQueryOperatorInput>;
  underline?: InputMaybe<BooleanQueryOperatorInput>;
  code?: InputMaybe<BooleanQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: InputMaybe<MdxFilterInput>;
};

export type NotionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<NotionEdge>;
  nodes: Array<Notion>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<NotionGroupConnection>;
};


export type NotionConnectionDistinctArgs = {
  field: NotionFieldsEnum;
};


export type NotionConnectionMaxArgs = {
  field: NotionFieldsEnum;
};


export type NotionConnectionMinArgs = {
  field: NotionFieldsEnum;
};


export type NotionConnectionSumArgs = {
  field: NotionFieldsEnum;
};


export type NotionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: NotionFieldsEnum;
};

export type NotionEdge = {
  next?: Maybe<Notion>;
  node: Notion;
  previous?: Maybe<Notion>;
};

export type NotionFieldsEnum =
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
  | 'title'
  | 'properties___Notes___id'
  | 'properties___Notes___key'
  | 'properties___Notes___value'
  | 'properties___Notes___type'
  | 'properties___Grouping___id'
  | 'properties___Grouping___key'
  | 'properties___Grouping___value'
  | 'properties___Grouping___type'
  | 'properties___Created___id'
  | 'properties___Created___key'
  | 'properties___Created___value'
  | 'properties___Created___type'
  | 'properties___Updated___id'
  | 'properties___Updated___key'
  | 'properties___Updated___value'
  | 'properties___Updated___type'
  | 'properties___Tags___id'
  | 'properties___Tags___key'
  | 'properties___Tags___value'
  | 'properties___Tags___value___id'
  | 'properties___Tags___value___name'
  | 'properties___Tags___value___color'
  | 'properties___Tags___type'
  | 'archived'
  | 'createdAt'
  | 'updatedAt'
  | 'markdownString'
  | 'raw___object'
  | 'raw___id'
  | 'raw___created_time'
  | 'raw___last_edited_time'
  | 'raw___parent___type'
  | 'raw___parent___database_id'
  | 'raw___archived'
  | 'raw___properties___Notes___id'
  | 'raw___properties___Notes___type'
  | 'raw___properties___Notes___rich_text'
  | 'raw___properties___Grouping___id'
  | 'raw___properties___Grouping___type'
  | 'raw___properties___Grouping___rich_text'
  | 'raw___properties___Name___id'
  | 'raw___properties___Name___type'
  | 'raw___properties___Name___title'
  | 'raw___properties___Created___id'
  | 'raw___properties___Created___type'
  | 'raw___properties___Created___created_time'
  | 'raw___properties___Updated___id'
  | 'raw___properties___Updated___type'
  | 'raw___properties___Updated___last_edited_time'
  | 'raw___properties___Tags___id'
  | 'raw___properties___Tags___type'
  | 'raw___properties___Tags___multi_select'
  | 'raw___url'
  | 'raw___children'
  | 'raw___children___object'
  | 'raw___children___id'
  | 'raw___children___created_time'
  | 'raw___children___last_edited_time'
  | 'raw___children___has_children'
  | 'raw___children___archived'
  | 'raw___children___type'
  | 'raw___children___paragraph___text'
  | 'raw___children___heading_2___text'
  | 'raw___children___bulleted_list_item___text'
  | 'raw___children___children'
  | 'raw___children___children___object'
  | 'raw___children___children___id'
  | 'raw___children___children___created_time'
  | 'raw___children___children___last_edited_time'
  | 'raw___children___children___has_children'
  | 'raw___children___children___archived'
  | 'raw___children___children___type'
  | 'raw___children___numbered_list_item___text'
  | 'raw___children___callout___text'
  | 'raw___children___image___type'
  | 'raw___children___heading_1___text'
  | 'raw___children___heading_3___text'
  | 'json'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark___id'
  | 'childrenMarkdownRemark___frontmatter___title'
  | 'childrenMarkdownRemark___frontmatter___Notes'
  | 'childrenMarkdownRemark___frontmatter___Grouping'
  | 'childrenMarkdownRemark___frontmatter___Created'
  | 'childrenMarkdownRemark___frontmatter___Updated'
  | 'childrenMarkdownRemark___frontmatter___Tags'
  | 'childrenMarkdownRemark___frontmatter___Tags___id'
  | 'childrenMarkdownRemark___frontmatter___Tags___name'
  | 'childrenMarkdownRemark___frontmatter___Tags___color'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___html'
  | 'childrenMarkdownRemark___htmlAst'
  | 'childrenMarkdownRemark___excerptAst'
  | 'childrenMarkdownRemark___headings'
  | 'childrenMarkdownRemark___headings___id'
  | 'childrenMarkdownRemark___headings___value'
  | 'childrenMarkdownRemark___headings___depth'
  | 'childrenMarkdownRemark___timeToRead'
  | 'childrenMarkdownRemark___tableOfContents'
  | 'childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenMarkdownRemark___wordCount___sentences'
  | 'childrenMarkdownRemark___wordCount___words'
  | 'childrenMarkdownRemark___parent___id'
  | 'childrenMarkdownRemark___parent___parent___id'
  | 'childrenMarkdownRemark___parent___parent___children'
  | 'childrenMarkdownRemark___parent___children'
  | 'childrenMarkdownRemark___parent___children___id'
  | 'childrenMarkdownRemark___parent___children___children'
  | 'childrenMarkdownRemark___parent___internal___content'
  | 'childrenMarkdownRemark___parent___internal___contentDigest'
  | 'childrenMarkdownRemark___parent___internal___description'
  | 'childrenMarkdownRemark___parent___internal___fieldOwners'
  | 'childrenMarkdownRemark___parent___internal___ignoreType'
  | 'childrenMarkdownRemark___parent___internal___mediaType'
  | 'childrenMarkdownRemark___parent___internal___owner'
  | 'childrenMarkdownRemark___parent___internal___type'
  | 'childrenMarkdownRemark___children'
  | 'childrenMarkdownRemark___children___id'
  | 'childrenMarkdownRemark___children___parent___id'
  | 'childrenMarkdownRemark___children___parent___children'
  | 'childrenMarkdownRemark___children___children'
  | 'childrenMarkdownRemark___children___children___id'
  | 'childrenMarkdownRemark___children___children___children'
  | 'childrenMarkdownRemark___children___internal___content'
  | 'childrenMarkdownRemark___children___internal___contentDigest'
  | 'childrenMarkdownRemark___children___internal___description'
  | 'childrenMarkdownRemark___children___internal___fieldOwners'
  | 'childrenMarkdownRemark___children___internal___ignoreType'
  | 'childrenMarkdownRemark___children___internal___mediaType'
  | 'childrenMarkdownRemark___children___internal___owner'
  | 'childrenMarkdownRemark___children___internal___type'
  | 'childrenMarkdownRemark___internal___content'
  | 'childrenMarkdownRemark___internal___contentDigest'
  | 'childrenMarkdownRemark___internal___description'
  | 'childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenMarkdownRemark___internal___ignoreType'
  | 'childrenMarkdownRemark___internal___mediaType'
  | 'childrenMarkdownRemark___internal___owner'
  | 'childrenMarkdownRemark___internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___Notes'
  | 'childMarkdownRemark___frontmatter___Grouping'
  | 'childMarkdownRemark___frontmatter___Created'
  | 'childMarkdownRemark___frontmatter___Updated'
  | 'childMarkdownRemark___frontmatter___Tags'
  | 'childMarkdownRemark___frontmatter___Tags___id'
  | 'childMarkdownRemark___frontmatter___Tags___name'
  | 'childMarkdownRemark___frontmatter___Tags___color'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
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
  | 'childMarkdownRemark___internal___type'
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___Notes'
  | 'childrenMdx___frontmatter___Grouping'
  | 'childrenMdx___frontmatter___Created'
  | 'childrenMdx___frontmatter___Updated'
  | 'childrenMdx___frontmatter___Tags'
  | 'childrenMdx___frontmatter___Tags___id'
  | 'childrenMdx___frontmatter___Tags___name'
  | 'childrenMdx___frontmatter___Tags___color'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___Notes'
  | 'childMdx___frontmatter___Grouping'
  | 'childMdx___frontmatter___Created'
  | 'childMdx___frontmatter___Updated'
  | 'childMdx___frontmatter___Tags'
  | 'childMdx___frontmatter___Tags___id'
  | 'childMdx___frontmatter___Tags___name'
  | 'childMdx___frontmatter___Tags___color'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type';

export type NotionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<NotionEdge>;
  nodes: Array<Notion>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<NotionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type NotionGroupConnectionDistinctArgs = {
  field: NotionFieldsEnum;
};


export type NotionGroupConnectionMaxArgs = {
  field: NotionFieldsEnum;
};


export type NotionGroupConnectionMinArgs = {
  field: NotionFieldsEnum;
};


export type NotionGroupConnectionSumArgs = {
  field: NotionFieldsEnum;
};


export type NotionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: NotionFieldsEnum;
};

export type NotionFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  properties?: InputMaybe<NotionPropertiesFilterInput>;
  archived?: InputMaybe<BooleanQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  markdownString?: InputMaybe<StringQueryOperatorInput>;
  raw?: InputMaybe<NotionRawFilterInput>;
  json?: InputMaybe<StringQueryOperatorInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
};

export type NotionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<NotionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type LanguagesCsvConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LanguagesCsvEdge>;
  nodes: Array<LanguagesCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<LanguagesCsvGroupConnection>;
};


export type LanguagesCsvConnectionDistinctArgs = {
  field: LanguagesCsvFieldsEnum;
};


export type LanguagesCsvConnectionMaxArgs = {
  field: LanguagesCsvFieldsEnum;
};


export type LanguagesCsvConnectionMinArgs = {
  field: LanguagesCsvFieldsEnum;
};


export type LanguagesCsvConnectionSumArgs = {
  field: LanguagesCsvFieldsEnum;
};


export type LanguagesCsvConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: LanguagesCsvFieldsEnum;
};

export type LanguagesCsvEdge = {
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

export type LanguagesCsvGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LanguagesCsvEdge>;
  nodes: Array<LanguagesCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<LanguagesCsvGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type LanguagesCsvGroupConnectionDistinctArgs = {
  field: LanguagesCsvFieldsEnum;
};


export type LanguagesCsvGroupConnectionMaxArgs = {
  field: LanguagesCsvFieldsEnum;
};


export type LanguagesCsvGroupConnectionMinArgs = {
  field: LanguagesCsvFieldsEnum;
};


export type LanguagesCsvGroupConnectionSumArgs = {
  field: LanguagesCsvFieldsEnum;
};


export type LanguagesCsvGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: LanguagesCsvFieldsEnum;
};

export type LanguagesCsvSortInput = {
  fields?: InputMaybe<Array<InputMaybe<LanguagesCsvFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type EducationCsvConnection = {
  totalCount: Scalars['Int'];
  edges: Array<EducationCsvEdge>;
  nodes: Array<EducationCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<EducationCsvGroupConnection>;
};


export type EducationCsvConnectionDistinctArgs = {
  field: EducationCsvFieldsEnum;
};


export type EducationCsvConnectionMaxArgs = {
  field: EducationCsvFieldsEnum;
};


export type EducationCsvConnectionMinArgs = {
  field: EducationCsvFieldsEnum;
};


export type EducationCsvConnectionSumArgs = {
  field: EducationCsvFieldsEnum;
};


export type EducationCsvConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: EducationCsvFieldsEnum;
};

export type EducationCsvEdge = {
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

export type EducationCsvGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<EducationCsvEdge>;
  nodes: Array<EducationCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<EducationCsvGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type EducationCsvGroupConnectionDistinctArgs = {
  field: EducationCsvFieldsEnum;
};


export type EducationCsvGroupConnectionMaxArgs = {
  field: EducationCsvFieldsEnum;
};


export type EducationCsvGroupConnectionMinArgs = {
  field: EducationCsvFieldsEnum;
};


export type EducationCsvGroupConnectionSumArgs = {
  field: EducationCsvFieldsEnum;
};


export type EducationCsvGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: EducationCsvFieldsEnum;
};

export type EducationCsvSortInput = {
  fields?: InputMaybe<Array<InputMaybe<EducationCsvFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ConnectionsCsvConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ConnectionsCsvEdge>;
  nodes: Array<ConnectionsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ConnectionsCsvGroupConnection>;
};


export type ConnectionsCsvConnectionDistinctArgs = {
  field: ConnectionsCsvFieldsEnum;
};


export type ConnectionsCsvConnectionMaxArgs = {
  field: ConnectionsCsvFieldsEnum;
};


export type ConnectionsCsvConnectionMinArgs = {
  field: ConnectionsCsvFieldsEnum;
};


export type ConnectionsCsvConnectionSumArgs = {
  field: ConnectionsCsvFieldsEnum;
};


export type ConnectionsCsvConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ConnectionsCsvFieldsEnum;
};

export type ConnectionsCsvEdge = {
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

export type ConnectionsCsvGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ConnectionsCsvEdge>;
  nodes: Array<ConnectionsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ConnectionsCsvGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ConnectionsCsvGroupConnectionDistinctArgs = {
  field: ConnectionsCsvFieldsEnum;
};


export type ConnectionsCsvGroupConnectionMaxArgs = {
  field: ConnectionsCsvFieldsEnum;
};


export type ConnectionsCsvGroupConnectionMinArgs = {
  field: ConnectionsCsvFieldsEnum;
};


export type ConnectionsCsvGroupConnectionSumArgs = {
  field: ConnectionsCsvFieldsEnum;
};


export type ConnectionsCsvGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ConnectionsCsvFieldsEnum;
};

export type ConnectionsCsvSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ConnectionsCsvFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CertificationsCsvConnection = {
  totalCount: Scalars['Int'];
  edges: Array<CertificationsCsvEdge>;
  nodes: Array<CertificationsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<CertificationsCsvGroupConnection>;
};


export type CertificationsCsvConnectionDistinctArgs = {
  field: CertificationsCsvFieldsEnum;
};


export type CertificationsCsvConnectionMaxArgs = {
  field: CertificationsCsvFieldsEnum;
};


export type CertificationsCsvConnectionMinArgs = {
  field: CertificationsCsvFieldsEnum;
};


export type CertificationsCsvConnectionSumArgs = {
  field: CertificationsCsvFieldsEnum;
};


export type CertificationsCsvConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: CertificationsCsvFieldsEnum;
};

export type CertificationsCsvEdge = {
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

export type CertificationsCsvGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<CertificationsCsvEdge>;
  nodes: Array<CertificationsCsv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<CertificationsCsvGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type CertificationsCsvGroupConnectionDistinctArgs = {
  field: CertificationsCsvFieldsEnum;
};


export type CertificationsCsvGroupConnectionMaxArgs = {
  field: CertificationsCsvFieldsEnum;
};


export type CertificationsCsvGroupConnectionMinArgs = {
  field: CertificationsCsvFieldsEnum;
};


export type CertificationsCsvGroupConnectionSumArgs = {
  field: CertificationsCsvFieldsEnum;
};


export type CertificationsCsvGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: CertificationsCsvFieldsEnum;
};

export type CertificationsCsvSortInput = {
  fields?: InputMaybe<Array<InputMaybe<CertificationsCsvFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQueryQuery = { allSitePage: { nodes: Array<{ path: string }> } };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { imageSharp?: { fixed?: { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string } | null | undefined } | null | undefined };

export type PhotoOrderToolQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PhotoOrderToolQueryQuery = { allImageSharp: { nodes: Array<{ id: string, fields?: { gallery?: string | null | undefined, order?: number | null | undefined } | null | undefined, fixed?: { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string } | null | undefined }> } };

export type HomeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeDataQuery = { homeImages: { nodes: Array<{ name: string, childImageSharp?: { fluid?: { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string } | null | undefined, fixed?: { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string } | null | undefined } | null | undefined }> } };

export type PhotoSplashQueryVariables = Exact<{ [key: string]: never; }>;


export type PhotoSplashQuery = { allDirectory: { nodes: Array<{ relativePath: string }> }, allImageSharp: { nodes: Array<{ parent?: { id: string, name: string, relativePath: string } | {} | null | undefined, fixed?: { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string } | null | undefined, fields?: { gallery?: string | null | undefined, order?: number | null | undefined } | null | undefined }> } };

export type ResumeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ResumeQueryQuery = { allPositionsCsv: { nodes: Array<{ Company_Name?: string | null | undefined, Description?: string | null | undefined, Finished_On?: string | null | undefined, Location?: string | null | undefined, Started_On?: string | null | undefined, Title?: string | null | undefined }> } };

export type NotionPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type NotionPagesQuery = { allNotion: { totalCount: number, nodes: Array<{ childMarkdownRemark?: { excerpt?: string | null | undefined, html?: string | null | undefined, timeToRead?: number | null | undefined, frontmatter?: { Updated?: any | null | undefined, Created?: any | null | undefined, title?: string | null | undefined, Grouping?: string | null | undefined, Tags?: Array<{ color?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined }> } };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { allMarkdownRemark: { nodes: Array<{ rawMarkdownBody?: string | null | undefined, excerpt?: string | null | undefined, frontmatter?: { title?: string | null | undefined } | null | undefined, parent?: { name: string, relativePath: string } | {} | null | undefined }> }, allFile: { nodes: Array<{ relativePath: string, relativeDirectory: string, publicURL?: string | null | undefined, childImageSharp?: { fixed?: { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string } | null | undefined } | null | undefined }> } };

export type GalleryDataQueryVariables = Exact<{
  queryRegex?: InputMaybe<Scalars['String']>;
}>;


export type GalleryDataQuery = { allFile: { nodes: Array<{ relativePath: string, fields?: { slug?: string | null | undefined } | null | undefined, childImageSharp?: { id: string, fields?: { order?: number | null | undefined } | null | undefined, fluid?: { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string } | null | undefined, fixed?: { src: string } | null | undefined } | null | undefined }> } };

export type ImagePageQueryQueryVariables = Exact<{
  imageQuery?: InputMaybe<Scalars['String']>;
  nextNode?: InputMaybe<Scalars['String']>;
  prevNode?: InputMaybe<Scalars['String']>;
}>;


export type ImagePageQueryQuery = { current?: { id: string, fields?: { gallery?: string | null | undefined } | null | undefined, fluid?: { originalName?: string | null | undefined, base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string } | null | undefined, fixed?: { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string } | null | undefined, metaImage?: { src: string } | null | undefined, parent?: { id: string, name: string, fields?: { exif?: { exif?: { ISO?: number | null | undefined, DateTimeOriginal?: any | null | undefined, ExposureTime?: number | null | undefined, FNumber?: number | null | undefined, FocalLength?: number | null | undefined, FocalLengthIn35mmFormat?: number | null | undefined, ShutterSpeedValue?: number | null | undefined, ApertureValue?: number | null | undefined } | null | undefined, image?: { GPSInfo?: number | null | undefined, Model?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined } | null | undefined, next?: { id: string, fluid?: { originalName?: string | null | undefined, base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string } | null | undefined, fixed?: { originalName?: string | null | undefined, base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string } | null | undefined } | null | undefined, previous?: { id: string, fluid?: { originalName?: string | null | undefined, base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string } | null | undefined, fixed?: { originalName?: string | null | undefined, base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string } | null | undefined } | null | undefined };

export type GatsbyImageSharpFixedFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFluidFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };
