// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   authApiUrl: 'https://accounts.nvne.fr/auth',
//   backendApiUrl: 'https://www.nvne.fr/api',
//   adminUrl: 'http://admin.nvne.fr',
// };

export const environment = {
  production: false,
  clientId: 'service-espace-collaborateur',
  authApiUrl: 'http://localhost:8080/auth',
  backendApiUrl: 'http://localhost:8083/api/espacecollaborateur',
  adminUrl: 'http://localhost:4200',
  homeUrl: 'http://localhost/#',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
