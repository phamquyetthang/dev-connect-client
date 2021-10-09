const ROUTER_NAME = {
  root: '/',
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
  },
  todo: {
    path: '/todo'
  }
};
export default ROUTER_NAME;
