export type Exif = {
  ApertureValue?: number
  BodySerialNumber?: string
  ColorSpace?: number
  Contrast?: number
  CustomRendered?: number
  DateTimeDigitized?: string
  DateTimeOriginal?: string
  ExposureBiasValue?: number
  ExposureMode?: number
  ExposureProgram?: number
  ExposureTime?: number
  FNumber?: number
  Flash?: number
  FocalLength?: number
  FocalLengthIn35mmFormat?: number
  FocalPlaneResolutionUnit?: number
  FocalPlaneXResolution?: number
  FocalPlaneYResolution?: number
  GainControl?: number
  ISO?: number
  LensModel?: string
  LensSpecification?: number[]
  LightSource?: number
  MeteringMode?: number
  PixelXDimension?: number
  PixelYDimension?: number
  RecommendedExposureIndex?: number
  Saturation?: number
  SceneCaptureType?: number
  SensingMethod?: number
  SensitivityType?: number
  Sharpness?: number
  ShutterSpeedValue?: number
  SubSecTimeDigitized?: string
  SubSecTimeOriginal?: string
  SubjectDistanceRange?: number
  WhiteBalance?: number
}

export type Tag = {
  id: string
  label: string
}

export interface ImageDimensions {
  width: number
  height: number
  aspectRatio: number
}

export interface GalleryImage {
  _id: string
  _createdAt: string
  sha1hash: string
  mimeType: string
  alt?: string
  description?: string
  title?: string
  opt?: {
    media?: {
      tags?: { _ref: string; _type: string; weak?: boolean }[]
    }
  }
  metadata: {
    dimensions: ImageDimensions
    lqip?: string
    exif?: Exif
  }
}
