const proxy = new Proxy({
  '/': {
    target: 'https://ph.jaraim.top',
    changeOrigin: true
  }
}, {
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.headers['X-Forwarded-Host'] = req.headers['Host']
  }
});

async function fetch(request, env) {
  return await fetch(proxy(request));
}
