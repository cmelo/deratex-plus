
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 31042, hash: 'd9dc18c55d198ad7144db1268092262ec8beeb252cf270116adac8462ce54ab7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22571, hash: '9c6dfa00ffe7d53baa4390f1affea67dff5ea28eeafca00baa064533a4255d0f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 165217, hash: 'c3b6c9c0992143ad1f3f7a92ed5045dbce4cacad4bc9b38625290d94d45e956c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LTGNFP4M.css': {size: 14429, hash: 'tmHSJqifa9I', text: () => import('./assets-chunks/styles-LTGNFP4M_css.mjs').then(m => m.default)}
  },
};
