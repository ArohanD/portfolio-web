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
