import BaseHttpService from './base-http.service'

const apiClient = BaseHttpService();

const getUser = async (id: number) => {
          return await apiClient.getUserById(`/users`, id);
}


const userServices = {
          getUser,
}
export default userServices;