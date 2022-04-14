import { Lang } from "../_global/Utils";

interface IError {
  errorId: string;
  errorCode: string;
  message: string;
  ciewMessage: string;
}

//#region getPagedSales
enum OrderBy {
  PRODUCT_NO = "P",
  SALE_PRICE = "C",
  LAST_STATUS = "A",
}

enum ByStatus {
  WAIT_PAY = "P",
  WAIT_CARGO = "S",
  WAIT_APPROVE = "C",
  WAIT_MONEY_TRANSFER = "T",
  RETURN = "R",
  COMPLETED = "O",
}

enum OrderType {
  ASC = "A",
  DESC = "D",
}

interface IBuyerInfo {
  username: string;
  name: string;
  surname: string;
  phone: string;
  address: string;
  district: string;
  city: string;
  zipCode: string | null;
}

interface ISale {
  saleCode: string;
  status: string;
  productId: string | number;
  productTitle: string;
  price: number;
  cargoPayment: string;
  amount: number;
  endDate: string;
  buyerInfo: IBuyerInfo;
  thumbImageLink: string;
  lastActionDate: string;
}

interface ISales {
  sale: ISale[];
}

interface ICombinedSaleCodes {
  saleCode: string[];
}
enum DeliveryOption {
  SAME_DAY_DELIVERY = "SAME_DAY_DELIVERY",
  NEXT_DAY_DELIVERY = "NEXT_DAY_DELIVERY",
  REGULAR = "REGULAR",
}

enum ShippingPaymentType {
  BUYER = "BUYER",
  SELLER = "SELLER",
  PAY_IN_THE_BASKET = "PAY_IN_THE_BASKET",
  PLATFORM = "PLATFORM",
}

interface IShippingInfo {
  deliveryOption: DeliveryOption;
  shippingFirmName: string;
  shippingFirmId: number;
  shippingPaymentType: ShippingPaymentType;
  cargoCode: string;
  shippingExpireDate: string;
  shippingNotice?: string;
  combinedSaleCodes?: ICombinedSaleCodes;
}

interface IGetPagedSalesReturn {
  ackCode: string;
  responseTime: string;
  timeElapsed?: string;
  result?: string;
  error?: IError;
  sales: ISales;
  nextPageAvailable: boolean;
  shippingInfo: IShippingInfo;
}

interface IGetPagedSalesResponse {
  return: IGetPagedSalesReturn;
}

interface IGetPagedSalesRequest {
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

  pageNumber: number;
  pageSize: number;
  lang: Lang;
  withData: boolean;
  byUser: string;
  orderBy: OrderBy;
  byStatus: ByStatus;
  orderType: OrderType;
}
//#endregion

//#region getSale

interface IGetSaleReturn {
  ackCode: string;
  responseTime: string;
  timeElapsed?: string;
  result?: string;
  error?: IError;
  sales: ISales;
  shippingInfo: IShippingInfo;
}

interface IGetSaleResponse {
  return: IGetSaleReturn;
}

interface IGetSaleRequest {
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

  saleCode: string | number;
  lang: Lang;
}
//#endregion

export { IGetPagedSalesRequest, IGetPagedSalesResponse, IGetSaleRequest, IGetSaleResponse };
