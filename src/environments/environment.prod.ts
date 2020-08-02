export const environment = {
  production: true,
  baseUrl: '/',
  entityMetaSessionKey: 'EntityData',
  appDateFormat: 'yyy-MM-dd',
  snackBarSavedMessage: 'Saved to Session storage',
  snackBarDuration: 3000
};
environment.snackBarSavedMessage += ` '`  + environment.entityMetaSessionKey  + `'`;