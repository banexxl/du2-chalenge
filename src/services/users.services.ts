import BaseHttpService from './base-http.service'

const apiClient = BaseHttpService();

const getUser = async (id: number) => {
          return await apiClient.getUserById("/user", id);
}

const userServices = {
          getUser,
}
export default userServices;