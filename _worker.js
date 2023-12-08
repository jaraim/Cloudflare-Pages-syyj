async fetch(request, env) {
  let url = new URL(request.url);
  if (url.pathname.match(/^\/|\/api\/*/)) {
    url.hostname = 'ph.jaraim.top'
    let new_request = new Request(url, request, {
      headers: {
        'X-Forwarded-Host': url.hostname
      }
    });
    return fetch(new_request);
  }
}
