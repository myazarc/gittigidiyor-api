import { Lang } from "../_global/Utils";

/**
 * @description fuck off soap attributes
 */
interface $attributes {
  [name: string]: any;
}

interface ISpec {
  $attributes: $attributes;
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
  base64?: string;
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

interface IInsertAndActivateProductReturn {
  ackCode: string;
  responseTime: string;
  timeElapsed?: string;
  productId?: number;
  result?: string;
  error?: IError;
  descriptionFilterStatus?: string;
}

interface IInsertAndActivateProductResponse {
  return: IInsertAndActivateProductReturn;
}
//#endregion

interface IUpdatePriceRequest {
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

  itemId?: string;
  productId?: string;
  price: number;
  cancelBid: boolean;
  lang: Lang;
}

interface IUpdatePriceReturn extends IInsertAndActivateProductReturn {
  itemId?: string;
}

interface IUpdatePriceResponse {
  return: IUpdatePriceReturn;
}

//#endregion

interface IUpdateStockRequest {
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

  productId: string;
  itemId: string;
  stock: number;
  cancelBid: boolean;
  lang: Lang;
}

interface IUpdateStockReturn extends IInsertAndActivateProductReturn {
  itemId?: string;
}

interface IUpdateStockResponse {
  return: IUpdateStockReturn;
}

//#endregion

interface IUpdateStockAndActivateProductRequest {
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

  productId: string;
  itemId: string;
  stock: number;
  lang: Lang;
}

interface IUpdateStockAndActivateProductReturn extends IInsertAndActivateProductReturn {
  itemId?: string;
}

interface IUpdateStockAndActivateProductResponse {
  return: IUpdateStockAndActivateProductReturn;
}

//#endregion

interface IListItem {
  item: string[] | number[];
}

interface IGetStockAndPriceRequest {
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

  itemIdList?: IListItem;
  productIdList?: IListItem;
  lang: Lang;
}

interface IGetStockAndPriceProduct {
  productId?: string;
  itemId?: string;
  format: Format;
  amount: number;
  soldItemCount: number;
  buyNowPrice: number;
}

interface IGetStockAndPriceProducts {
  product: IGetStockAndPriceProduct[];
}

interface IGetStockAndPriceReturn {
  ackCode: string;
  responseTime: string;
  timeElapsed?: string;
  result?: string;
  error?: IError;
  products: IGetStockAndPriceProducts;
}

interface IGetStockAndPriceResponse {
  return: IGetStockAndPriceReturn;
}

//#endregion

enum GetProductsStatus {
  A = "A",
  L = "L",
  S = "S",
  U = "U",
}

interface IGetProductsRequest {
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

  startOffSet: number;
  /**
   * @description max 100
   */
  rowCount: number;
  status: GetProductsStatus;
  withData: boolean;
  lang: Lang;
}

interface IProducts {
  product: IProduct[];
}

interface IGetProductsReturn {
  ackCode: string;
  responseTime: string;
  timeElapsed?: string;
  productCount: number;
  result?: string;
  error?: IError;
  products: IProducts;
}

interface IGetProductsResponse {
  return: IGetProductsReturn;
}

interface IProductIdList {
  productId: string[] | number[];
}

interface IFinishEarlyReturn {
  ackCode: string;
  responseTime: string;
  timeElapsed?: string;
  result?: string;
  error?: IError;
  productIdList: IProductIdList;
}

interface IFinishEarlyResponse {
  return: IFinishEarlyReturn;
}

interface IFinishEarlyRequest {
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

  itemIdList?: IListItem;
  productIdList?: IListItem;
}

interface IRelistProductReturn {
  ackCode: string;
  responseTime: string;
  timeElapsed?: string;
  result?: string;
  error?: IError;
}

interface IRelistProductResponse {
  return: IRelistProductReturn;
}

interface IRelistProductRequest {
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

  itemIdList?: IListItem;
  productIdList?: IListItem;
}

export {
  IRelistProductRequest,
  IRelistProductResponse,
  IGetProductsResponse,
  IGetProductsRequest,
  IUpdateStockAndActivateProductResponse,
  IUpdateStockAndActivateProductRequest,
  IGetStockAndPriceResponse,
  IGetStockAndPriceRequest,
  IUpdateStockRequest,
  IUpdateStockResponse,
  IUpdatePriceRequest,
  IUpdatePriceResponse,
  IInsertAndActivateProductRequest,
  IInsertAndActivateProductResponse,
  Format,
  ShippingPayment,
  ShippingFeePaymentType,
  ShippingWhere,
  CargoCompany,
  IFinishEarlyRequest,
  IFinishEarlyResponse,
};
