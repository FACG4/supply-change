'use strict'; let precacheConfig=[['/index.html','c96f6aaed5895f77b64cdcb9718b2381'],['/static/css/main.ea904211.css','3b69014dcb3cd54a59ca6cace23ea11b'],['/static/js/main.5f7d2653.js','59e0fa05363ceca3b9197a7735a0392a'],['/static/media/logo.417c52c4.svg','417c52c47d476e895bdb2a6ef5777c2f'],['/static/media/slick.b7c9e1e4.woff','b7c9e1e479de3b53f1e4e30ebac2403a'],['/static/media/slick.ced611da.eot','ced611daf7709cc778da928fec876475'],['/static/media/slick.d41f55a7.ttf','d41f55a78e6f49a5512878df1737e58a'],['/static/media/slick.f97e3bbf.svg','f97e3bbf73254b0112091d0192f17aec'],['/static/media/test.dbcaa939.svg','dbcaa939c3c18f96ba03ebbc6e4a4728']],cacheName=`sw-precache-v3-sw-precache-webpack-plugin-${self.registration?self.registration.scope:''}`,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function (e,t) {
    const n=new URL(e); return '/'===n.pathname.slice(-1)&&(n.pathname+=t),n.toString();
  },cleanResponse=function (t) {
    return t.redirected?('body'in t?Promise.resolve(t.body):t.blob()).then(e => {
      return new Response(e,{ headers: t.headers,status: t.status,statusText: t.statusText });
    }):Promise.resolve(t);
  },createCacheKey=function (e,t,n,a) {
    const r=new URL(e); return a&&r.pathname.match(a)||(r.search+=`${(r.search?'&':'')+encodeURIComponent(t)}=${encodeURIComponent(n)}`),r.toString();
  },isPathWhitelisted=function (e,t) {
    if (0===e.length) return !0; const n=new URL(t).pathname; return e.some(e => {
      return n.match(e);
    });
  },stripIgnoredUrlParameters=function (e,n) {
    const t=new URL(e); return t.hash='',t.search=t.search.slice(1).split('&').map(e => {
      return e.split('=');
    }).filter(t => {
      return n.every(e => {
        return !e.test(t[0]);
      });
    }).map(e => {
      return e.join('=');
    }).join('&'),t.toString();
  },hashParamName='_sw-precache',urlsToCacheKeys=new Map(precacheConfig.map(e => {
    let t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./); return [a.toString(),r];
  })); function setOfCachedUrls(e) {
  return e.keys().then(e => {
    return e.map(e => {
      return e.url;
    });
  }).then(e => {
    return new Set(e);
  });
}self.addEventListener('install',e => {
  e.waitUntil(caches.open(cacheName).then(a => {
    return setOfCachedUrls(a).then(n => {
      return Promise.all(Array.from(urlsToCacheKeys.values()).map(t => {
        if (!n.has(t)) {
          const e=new Request(t,{ credentials: 'same-origin' }); return fetch(e).then(e => {
            if (!e.ok) throw new Error(`Request for ${t} returned a response with status ${e.status}`); return cleanResponse(e).then(e => {
              return a.put(t,e);
            });
          });
        }
      }));
    });
  }).then(() => {
    return self.skipWaiting();
  }));
}),self.addEventListener('activate',e => {
  const n=new Set(urlsToCacheKeys.values()); e.waitUntil(caches.open(cacheName).then(t => {
    return t.keys().then(e => {
      return Promise.all(e.map(e => {
        if (!n.has(e.url)) return t.delete(e);
      }));
    });
  }).then(() => {
    return self.clients.claim();
  }));
}),self.addEventListener('fetch',t => {
  if ('GET'===t.request.method) {
    let e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a='index.html'; (e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n)); const r='/index.html'; !e&&'navigate'===t.request.mode&&isPathWhitelisted(['^(?!\\/__).*'],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(e => {
      return e.match(urlsToCacheKeys.get(n)).then(e => {
        if (e) return e; throw Error('The cached response that was expected is missing.');
      });
    }).catch(e => {
      return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request);
    }));
  }
});
