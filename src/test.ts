import CategoryService from "./gittigidiyor/Category/CategoryService";
import CategoryV2Service from "./gittigidiyor/Category/CategoryV2Service";
import ProductService from "./gittigidiyor/Product/ProductService";
import { ICategoriesRequest } from "./gittigidiyor/Category/ICategoryService";
import { IRequiredCategorySpecsRequest } from "./gittigidiyor/Category/ICategoryV2Service";
import { Lang } from "./gittigidiyor/_global/Utils";
import {
  CargoCompany,
  Format,
  IInsertAndActivateProductRequest,
  IUpdateStockAndActivateProductRequest,
  IUpdateStockRequest,
  ShippingPayment,
  ShippingWhere,
} from "./gittigidiyor/Product/IProductService";

const category = new CategoryService("mustafayazar1020", "kYx34SUVXceyrpXe2W59tppaM9FNMyFF");
const categoryV2 = new CategoryV2Service("mustafayazar1020", "kYx34SUVXceyrpXe2W59tppaM9FNMyFF");
const product = new ProductService("mustafayazar1020", "kYx34SUVXceyrpXe2W59tppaM9FNMyFF", "aA5rt48f3YrZVbabgrFutyrW7BZJTHtj", "XVMxMHPp9vzy26AM");
(async () => {
  try {
    await category.connect();
    const data: ICategoriesRequest = {
      startOffSet: 0,
      rowCount: 50,
      withSpecs: true,
      withCatalog: true,
      withDeepest: true,
      lang: Lang.TR,
    };
    const [categoryRes] = await category.getCategories(data);

    console.log(categoryRes);
    //------------------------------------------------------------------------------------------------------------------------//
    /*
    await categoryV2.connect();
    
    //------------------------------------------------------------------------------------------------------------------------//

    const data2: IRequiredCategorySpecsRequest = {
      lang: Lang.TR,
      categoryCode: "bcd",
    };
    const [res2] = await categoryV2.getRequiredCategorySpecs(data2);
    console.log(res2.return.requiredSpecs.spec);
*/
    /*
    const data3: IInsertAndActivateProductRequest = {
      itemId: "PRODER1",
      product: {
        categoryCode: "bcd",
        //storeCategoryId: string;
        title: "TEst Ürünlerim",
        //subtitle: string | null;
        specs: {
          spec: [
            {
              $attributes: {
                name: "Marka",
                value: "Asus",
              },
            },
            {
              $attributes: {
                name: "Model",
                value: "TUF B350M-Plus",
              },
            },
            {
              $attributes: {
                name: "Yonga Seti Üreticisi",
                value: "Belirtilmemiş",
              },
            },
            {
              $attributes: {
                name: "İşlemci Soketi",
                value: "Belirtilmemiş",
              },
            },
            {
              $attributes: {
                name: "Bellek Teknolojisi",
                value: "Belirtilmemiş",
              },
            },
            {
              $attributes: {
                name: "Durum",
                value: "İkinci El",
              },
            },
            {
              $attributes: {
                name: "Garanti",
                value: "Yok",
              },
            },
            {
              $attributes: {
                name: "Garanti Süresi",
                value: "Yok",
              },
            },
          ],
        },
        photos: {
          photo: [
            {
              $attributes: { photoId: 0 },
              url: "http://prodereticaret.com/uploads/img/tasXP3olD2pRFsuC.png",
              //base64:'',
            },
          ],
        },
        description: "test açıklama ena az 15 karakter olmalı",
        //startDate: string | null;
        //catelogId: string | null;
        //catalogDetail: string | null;
        //catalogFilter: string | null;
        format: Format.S,
        //startPrice: number | null;
        buyNowPrice: 999.99,
        //netEarning: number | null;
        listingDays: 360,
        pageTemplate: 1,
        productCount: 17,
        cargoDetail: {
          city: 34,
          shippingPayment: ShippingPayment.S,
          shippingWhere: ShippingWhere.COUNTRY,
          cargoCompanyDetails: {
            cargoCompanyDetail: {
              name: CargoCompany.UPS,
              cityPrice: 0,
              countryPrice: 0,
            },
          },
          shippingTime: {
            days: "today",
            beforeTime: "11:17",
          },
        },
        affiliateOption: false,
        boldOption: false,
        catalogOption: false,
        vitrineOption: false,
        //globalTradeItemNo: string;
        //manufacturerPartNo: string;
      },
      forceToSpecEntry: false,
      nextDateOption: false,
      lang: Lang.TR,
    };
    await product.connect();

    const [res3] = await product.insertAndActivateProduct(data3);
    console.log(res3);
    */
    /*
    await product.connect();
    const data4: IUpdateStockAndActivateProductRequest = {
      productId: "782460084",
      itemId: "PRODER1",
      stock: 2,
      lang: Lang.TR,
    };

    const [res4] = await product.updateStockAndActivateProduct(data4);
    console.log(res4);
    */
  } catch (error) {
    console.error(error);
  }
})();
