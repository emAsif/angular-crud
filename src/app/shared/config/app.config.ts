export const Config = {
  apiMethods: {
    post: 'post',
    put: 'put',
    delete: 'delete',
    get: 'get',
    patch: 'patch'
  },
  apiStatusCode: {
    serverError: 500,
    notFound: 404,
    success: 200,
    notAuthenticated: 403,
    unAuthorized: 401,
    timeout: 408,
    noInternet: 0,
    unprocessable: 422
  },
  endpoint: {},
  message: {
    loginText: 'Akelius'
  },
};
