import CategoryService from "./gittigiyor/Category/CategoryService";
import CategoryV2Service from "./gittigiyor/Category/CategoryV2Service";
import ProductService from "./gittigiyor/Product/ProductService";
import { ICategoriesRequest } from "./gittigiyor/Category/ICategoryService";
import { IRequiredCategorySpecsRequest } from "./gittigiyor/Category/ICategoryV2Service";
import { Lang } from "./gittigiyor/_global/Utils";
import { CargoCompany, Format, IInsertAndActivateProductRequest, ShippingPayment, ShippingWhere } from "./gittigiyor/Product/IProductService";

const category = new CategoryService("mustafayazar1020", "kYx34SUVXceyrpXe2W59tppaM9FNMyFF");
const categoryV2 = new CategoryV2Service("mustafayazar1020", "kYx34SUVXceyrpXe2W59tppaM9FNMyFF");
const product = new ProductService("mustafayazar1020", "kYx34SUVXceyrpXe2W59tppaM9FNMyFF", "aA5rt48f3YrZVbabgrFutyrW7BZJTHtj", "XVMxMHPp9vzy26AM");
(async () => {
  try {
    /*
    await category.connect();
    const data: ICategoriesRequest = {
      startOffSet: 0,
      rowCount: 15,
      withSpecs: true,
      withCatalog: false,
      withDeepest: false,
      lang: Lang.TR,
    };
    const [categoryRes] = await category.getCategories(data);

    console.log(JSON.stringify(categoryRes.return.categories.category[7].specs.spec.filter((item) => item.$attributes.required === "true")));*/
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
    const data3 = {
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
  } catch (error) {
    console.error(error);
  }
})();
