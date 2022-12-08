import axios from 'axios';

const { REACT_APP_BASE_API_URL } = process.env;

const BaseHttpService = () => {
          let BASE_URL = REACT_APP_BASE_API_URL;

          let _accessToken: string | null = null;

          const getAllProducts = (endpoint: string) => {

                    return axios.get(`${BASE_URL}` + endpoint, {
                              headers: {
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*',
                                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                              }
                    })
                              .then(res => {
                                        return res.data
                                        // res.json()
                              })
                              .catch((error) => {
                                        alert(error.message);
                              })
          }


          const getProductById = (endpoint: string, id: number) => {

                    return axios.get(BASE_URL + `/products/${id}`, {
                              headers: {
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*',
                                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                              }
                    })
                              .then(res => {
                                        return res.data
                              })
                              .catch((error) => {
                                        alert("Error message: " + error.message);
                              })
          }

          const getUserById = (endpoint: string, id: number) => {

                    return axios.get(BASE_URL + `/users/${id}`, {
                              headers: {
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*',
                                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                              }
                    })
                              .then(res => {
                                        return res.data
                              })
                              .catch((error) => {
                                        alert("Error message: " + error.message);
                              })
          }

          const loginUser = async (endpoint: string, username: string, password: string) => {

                    return await axios(BASE_URL + endpoint, {
                              method: "POST",
                              data: {
                                        username: username,
                                        password: password
                              },
                              headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*'
                              },
                    })
                              .then((res: any) => {
                                        return localStorage.setItem("access_token", res.data.token)
                              })
                              .catch(error => {
                                        alert(error.message)
                              })


          }

          const post = async (endpoint: string, data = {}, options = {}) => {
                    options = { ...options, ..._getCommonOptions() };
                    return axios.post(`${BASE_URL}/${endpoint}`, data, options)
                              .catch(error => _handleHttpError(error));
          }

          const put = async (endpoint: string, data = {}, options = {}) => {
                    options = { ...options, ..._getCommonOptions() };
                    return axios.put(`${BASE_URL}/${endpoint}`, data, options)
                              .catch(error => _handleHttpError(error));
          }

          const remove = async (endpoint: string, options = {}) => {
                    options = { ...options, ..._getCommonOptions() };
                    return axios.delete(`${BASE_URL}/${endpoint}`, options)
                              .catch(error => _handleHttpError(error));
          }

          const patch = async (endpoint: string, data = {}, options = {}) => {
                    options = { ...options, ..._getCommonOptions() };
                    return axios.patch(`${BASE_URL}/${endpoint}`, data, options)
                              .catch(error => _handleHttpError(error));
          }

          const _handleHttpError = (error: any) => {
                    return error;
          }

          const _getCommonOptions = () => {
                    const token = loadToken();
                    return {
                              headers: {
                                        Authorization: `Bearer ${token}`,
                              },
                    };
          }

          const getAccessToken = () => {
                    return _accessToken ? _accessToken : loadToken();
          }

          const saveToken = (accessToken: string) => {
                    _accessToken = accessToken;
                    return localStorage.setItem('accessToken', accessToken);
          }

          const loadToken = () => {
                    const token = localStorage.getItem('access_token');
                    _accessToken = token;
                    return token;
          }

          const removeToken = () => {
                    localStorage.removeItem('access_token');
          }

          return {
                    getAllProducts,
                    getProductById,
                    getUserById,
                    loginUser,
                    post,
                    put,
                    remove,
                    patch,
                    getAccessToken,
                    saveToken,
                    loadToken,
                    removeToken
          };
}

export default BaseHttpService;
