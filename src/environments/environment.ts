// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  siteUrl:"Buraya api adresi yazılacak", //Api Adresinin Sonunda / işareti olmalı https://example.com/
  pizzasApi:"api/pizzas/",
  categoriesApi:"api/categories/",
  ordersApi:"api/orders/",
  orderHelpersApi:"api/orderHelpers/",
  sizesApi:"api/sizes/",
  authApi:"api/auth/",
  statusApi: "api/statuses/",
  commentsApi: "api/comments/",
  slidersApi:"api/campaignsliders/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
