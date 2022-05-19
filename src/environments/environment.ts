// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //restApiBasePathUrl: 'http://192.168.130.43:3000',
  restApiBasePathUrl: 'http://localhost:3000',
  endpoints: {
    payment: { url: 'payments' },
    client: { url: '' },
    login: { url: '' },
    area: { url: 'areas' },
    society: { url: '' },
    monthStats: { url: '' },
    areaStats: { url: '' },
    user: { url: 'users' },
    userProfile: {url: 'profile'},
    changePassword: {url: 'users/change_password'}
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
