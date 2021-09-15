const ROUTER_NAME = {
  auth: {
    path: '/auth/:type',
    login: '/auth/login',
    signUp: '/auth/signUp',
    forgot: '/auth/forgot',
  },
  welcome: {
    path: '/welcome'
  },
  dashboard: {
    path: '/dashboard',
  },
  unit: {
    path: '/units'
  },
  wiki: {
    create: 'wiki/create'
  }
};
export default ROUTER_NAME;
