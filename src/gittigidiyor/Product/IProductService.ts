import { Lang } from "../_global/Utils";

/**
 * @description fuck off soap attributes
 */
interface $attributes {
  [name: string]: any;
}

interface ISpec {
  $attributes: $attributes[];
}

interface ISpecs {
  spec: ISpec[];
}

/**
 * @description one Attribute for photoID
 */
interface IPhoto {
  $attributes: $attributes;
  url: string;
  base64: string;
}

interface IPhotos {
  photo: IPhoto[];
}

/**
 * @description S: Satıcı Öder(Ücretsiz Kargo) <br> B: Alıcı Öder(Ücretli Kargo) <br> O: Online Teslimat
 */
enum ShippingPayment {
  S = "S",
  B = "B",
  O = "O",
}

/**
 * @description city: Ürün şehir içi kargolanır. <br> country: Ürün Tüm Türkiye
 */
enum ShippingWhere {
  CITY = "city",
  COUNTRY = "country",
}

interface ICargoCompanyDetail {
  name: CargoCompany;
  value?: string;
  cityPrice: number;
  countryPrice: number;
}

interface ICargoCompanyDetails {
  cargoCompanyDetail: ICargoCompanyDetail;
}

interface IShippingTime {
  days: string;
  /**
   * @example 10:00-17:00
   */
  beforeTime: string;
}

interface IProductPackageSize {
  desi?: number;
  width?: number;
  height?: number;
  depth?: number;
  weight?: number;
}

enum CargoCompany {
  ARAS = "aras",
  BORUSAN = "borusan",
  CEVA = "ceva",
  DHL = "dhl",
  OTHER = "other",
  FEDEX = "fedex",
  FILLO = "fillo",
  HOROZ = "horoz",
  MNG = "mng",
  NARPOST = "narpost",
  PTT = "ptt",
  SURAT = "surat",
  TNT = "tnt",
  TEZEL = "tezel",
  UPS = "ups",
  VARAN = "varan",
  YURTICI = "yurtici",
}

interface ICargoCompanies {
  cargoCompany: CargoCompany;
}

enum ShippingFeePaymentType {
  PAY_IN_THE_BASKET = "PAY_IN_THE_BASKET",
}

interface ICargoDetail {
  city: number;
  shippingPayment: ShippingPayment;
  shippingWhere: ShippingWhere;
  cargoCompanyDetails: ICargoCompanyDetails;
  shippingTime: IShippingTime;
  productPackageSize?: IProductPackageSize;
  cargoCompanies?: ICargoCompanies;
  shippingFeePaymentType?: ShippingFeePaymentType;
}

interface ISameDayDeliveryType {
  lastReceivingTime: string;
  shippingFirmId: number;
}

interface ISameDayDeliveryTypes {
  sameDayDeliveryType: ISameDayDeliveryType;
}

enum Format {
  F = "F",
  S = "S",
}

interface IProduct {
  categoryCode: string;
  storeCategoryId?: string;
  title: string;
  subtitle?: string;
  specs: ISpecs;
  photos: IPhotos;
  description: string;
  startDate?: string;
  catelogId?: string;
  catalogDetail?: string;
  catalogFilter?: string;
  format: Format;
  startPrice?: number;
  buyNowPrice: number;
  netEarning?: number;
  listingDays: number;
  productCount: number;
  cargoDetail: ICargoDetail;
  affiliateOption?: boolean;
  boldOption: boolean;
  catalogOption: boolean;
  vitrineOption: boolean;
  globalTradeItemNo?: string;
  manufacturerPartNo?: string;
  sameDayDeliveryTypes?: ISameDayDeliveryTypes;
  pageTemplate: number;
}

interface IInsertAndActivateProductRequest {
  /**
   * @description Auto filled
   */
  apiKey?: string;
  /**
   * @description Auto calced and filled
   */
  sign?: string;
  /**
   * @description Auto filled
   */
  time?: number;

  itemId: string;
  product: IProduct;
  forceToSpecEntry: boolean;
  nextDateOption: boolean;
  lang: Lang;
}

interface IError {
  errorId: string;
  errorCode: string;
  message: string;
  ciewMessage: string;
}

interface ICategoriesReturn {
  ackCode: string;
  responseTime: string;
  timeElapsed?: string;
  productId?: number;
  result?: string;
  error?: IError;
  descriptionFilterStatus?: string;
}

interface IInsertAndActivateProductResponse {
  return: ICategoriesReturn;
}

export { IInsertAndActivateProductRequest, IInsertAndActivateProductResponse, Format, ShippingPayment, ShippingFeePaymentType, ShippingWhere, CargoCompany };
