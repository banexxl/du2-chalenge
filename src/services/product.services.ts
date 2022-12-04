import BaseHttpService from './base-http.service'

const apiClient = BaseHttpService();

const getAll = async () => {
          return await apiClient.getAllProducts("/products");
}

const getById = async (id: string) => {
          return await apiClient.getProductById(`products/${id}`);
}

const productServices = {
          getAll,
          getById,
}
export default productServices;