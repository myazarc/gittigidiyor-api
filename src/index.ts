import ApplicationService from "./gittigidiyor/Application/ApplicationService";
import DeveloperService from "./gittigidiyor/Developer/DeveloperService";
import CategoryService from "./gittigidiyor/Category/CategoryService";
import CategoryV2Service from "./gittigidiyor/Category/CategoryV2Service";
import ProductService from "./gittigidiyor/Product/ProductService";
import OrderService from "./gittigidiyor/Order/OrderService";

const gg = { ApplicationService, DeveloperService, CategoryService, CategoryV2Service, ProductService, OrderService };

export default gg;
export { ApplicationService, DeveloperService, CategoryService, CategoryV2Service, ProductService, OrderService };
module.exports = gg;
