export const environment = {
  production: true,
 // restApiBasePathUrl: 'http://192.168.130.43:3000',
  restApiBasePathUrl: 'http://localhost:3000',
  endpoints: {
    payment: { url: 'payments' },
    client: { url: 'clients' },
    login: { url: 'auth/login' },
    area: { url: 'areas' },
    society: { url: 'societies' },
    monthStats: { url: '' },
    areaStats: { url: '' },
    user: { url: 'users' },
    userProfile: {url: 'profile'},
    changePassword: {url: 'users/change_password'},
  },
};
