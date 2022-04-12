import ApplicationService from "./gittigidiyor/Application/ApplicationService";
import DeveloperService from "./gittigidiyor/Developer/DeveloperService";
import CategoryService from "./gittigidiyor/Category/CategoryService";
import CategoryV2Service from "./gittigidiyor/Category/CategoryV2Service";
import ProductService from "./gittigidiyor/Product/ProductService";

const gg = { ApplicationService, DeveloperService, CategoryService, CategoryV2Service, ProductService };

export default gg;
export { ApplicationService, DeveloperService, CategoryService, CategoryV2Service, ProductService };
module.exports = gg;
