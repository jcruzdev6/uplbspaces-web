globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { createIPX, createIPXMiddleware } from 'ipx';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "jsonApiUrl": "http://localhost:8000",
    "jsonApiPath": "http://localhost:8000/api",
    "webUrl": "http://localhost:3000",
    "recaptchaKey": "6LfB7aEnAAAAAHv_vhCh98eXDKxu7nYBentwNlfq"
  },
  "ipx": {
    "dir": "../public",
    "domains": [],
    "sharp": {},
    "alias": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-InOrXtNXeGOGw5aNHD9KmaFjSFc\"",
    "mtime": "2023-08-14T14:18:20.176Z",
    "size": 6148,
    "path": "../public/.DS_Store"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-08-14T14:18:20.175Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/js/calendar.js": {
    "type": "application/javascript",
    "etag": "\"198a-EDlFyJRl6nFcYcrgv+hN+qQ8DQo\"",
    "mtime": "2023-08-14T14:18:20.067Z",
    "size": 6538,
    "path": "../public/js/calendar.js"
  },
  "/_nuxt/1-1.454090a0.jpg": {
    "type": "image/jpeg",
    "etag": "\"4da6f-+YU9Lz64iPmhqCVM8elz01fgnkA\"",
    "mtime": "2023-08-14T14:18:20.066Z",
    "size": 318063,
    "path": "../public/_nuxt/1-1.454090a0.jpg"
  },
  "/_nuxt/1-2.970eb71a.jpg": {
    "type": "image/jpeg",
    "etag": "\"48371-aNFD9KN/FIkd5L11kMTDdy1ySPI\"",
    "mtime": "2023-08-14T14:18:20.066Z",
    "size": 295793,
    "path": "../public/_nuxt/1-2.970eb71a.jpg"
  },
  "/_nuxt/1-3.2821f357.jpg": {
    "type": "image/jpeg",
    "etag": "\"4e00f-gDdiMk1dPd1NcgdoIVtzoDl8yeQ\"",
    "mtime": "2023-08-14T14:18:20.065Z",
    "size": 319503,
    "path": "../public/_nuxt/1-3.2821f357.jpg"
  },
  "/_nuxt/1-4.8321fa53.jpg": {
    "type": "image/jpeg",
    "etag": "\"4b236-083sIbuBtzlolrY6zvvuafJlLVc\"",
    "mtime": "2023-08-14T14:18:20.064Z",
    "size": 307766,
    "path": "../public/_nuxt/1-4.8321fa53.jpg"
  },
  "/_nuxt/1-5.14a85463.jpg": {
    "type": "image/jpeg",
    "etag": "\"41c33-+mSHsCxAXEgz1yYi5/DWpS84CiQ\"",
    "mtime": "2023-08-14T14:18:20.064Z",
    "size": 269363,
    "path": "../public/_nuxt/1-5.14a85463.jpg"
  },
  "/_nuxt/1.233ffb5d.jpg": {
    "type": "image/jpeg",
    "etag": "\"4a74e-TUZxLimsGX9vAXNKB3tlNRFNo88\"",
    "mtime": "2023-08-14T14:18:20.063Z",
    "size": 304974,
    "path": "../public/_nuxt/1.233ffb5d.jpg"
  },
  "/_nuxt/1.710ec44e.jpg": {
    "type": "image/jpeg",
    "etag": "\"57492-pYlU76fH0kM1QSqmK9ncoZ5DIYc\"",
    "mtime": "2023-08-14T14:18:20.062Z",
    "size": 357522,
    "path": "../public/_nuxt/1.710ec44e.jpg"
  },
  "/_nuxt/10.b7efc5bf.jpg": {
    "type": "image/jpeg",
    "etag": "\"55675-58yNtwrU1qLr0mJ6nHTbOyxuJzw\"",
    "mtime": "2023-08-14T14:18:20.058Z",
    "size": 349813,
    "path": "../public/_nuxt/10.b7efc5bf.jpg"
  },
  "/_nuxt/2.245c06ae.jpg": {
    "type": "image/jpeg",
    "etag": "\"58d73-a9QHMZaIk20hpWQ6lIlJuEQ09UI\"",
    "mtime": "2023-08-14T14:18:20.057Z",
    "size": 363891,
    "path": "../public/_nuxt/2.245c06ae.jpg"
  },
  "/_nuxt/2.91ce6015.jpg": {
    "type": "image/jpeg",
    "etag": "\"294d6-+7cwZMLQ2GxxN/hNIQAcCBmazWE\"",
    "mtime": "2023-08-14T14:18:20.057Z",
    "size": 169174,
    "path": "../public/_nuxt/2.91ce6015.jpg"
  },
  "/_nuxt/3.02281844.jpg": {
    "type": "image/jpeg",
    "etag": "\"46cc2-aVIX4rxFCL/h3G1dMvW1L4y/XgQ\"",
    "mtime": "2023-08-14T14:18:20.056Z",
    "size": 289986,
    "path": "../public/_nuxt/3.02281844.jpg"
  },
  "/_nuxt/3.b23bc5cb.jpg": {
    "type": "image/jpeg",
    "etag": "\"380b8-6FjyPxwuEkcBp9uhGyQ04HCzBEM\"",
    "mtime": "2023-08-14T14:18:20.055Z",
    "size": 229560,
    "path": "../public/_nuxt/3.b23bc5cb.jpg"
  },
  "/_nuxt/4-1.820cd2c2.jpg": {
    "type": "image/jpeg",
    "etag": "\"5a0d3-1KhLg17RYMsh1bX+w1maWNwKrYw\"",
    "mtime": "2023-08-14T14:18:20.055Z",
    "size": 368851,
    "path": "../public/_nuxt/4-1.820cd2c2.jpg"
  },
  "/_nuxt/4-10.4ccadf29.jpg": {
    "type": "image/jpeg",
    "etag": "\"53287-UflF77AU7FxJVkhPCfIABc2z75w\"",
    "mtime": "2023-08-14T14:18:20.054Z",
    "size": 340615,
    "path": "../public/_nuxt/4-10.4ccadf29.jpg"
  },
  "/_nuxt/4-2.05f56e2d.jpg": {
    "type": "image/jpeg",
    "etag": "\"623d8-7rft1TQv5O8lMACO9sG5gxyDFVo\"",
    "mtime": "2023-08-14T14:18:20.054Z",
    "size": 402392,
    "path": "../public/_nuxt/4-2.05f56e2d.jpg"
  },
  "/_nuxt/4-3.1f6c59ee.jpg": {
    "type": "image/jpeg",
    "etag": "\"5bf3a-0p0lmBwTWHkVUiBFL4eBFCax8R0\"",
    "mtime": "2023-08-14T14:18:20.053Z",
    "size": 376634,
    "path": "../public/_nuxt/4-3.1f6c59ee.jpg"
  },
  "/_nuxt/4-4.0399753f.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d8ca-NS9ZZwaAv0ckfMF/XNUt31aXVKw\"",
    "mtime": "2023-08-14T14:18:20.053Z",
    "size": 383178,
    "path": "../public/_nuxt/4-4.0399753f.jpg"
  },
  "/_nuxt/4-5.71687c3a.jpg": {
    "type": "image/jpeg",
    "etag": "\"4e6c4-l8bP46kucJDjjFjGox5/2ncdcJg\"",
    "mtime": "2023-08-14T14:18:20.052Z",
    "size": 321220,
    "path": "../public/_nuxt/4-5.71687c3a.jpg"
  },
  "/_nuxt/4-6.984b9dbb.jpg": {
    "type": "image/jpeg",
    "etag": "\"5c2ca-dKLFMksp0bfbPqwd9n3g2Ekm75A\"",
    "mtime": "2023-08-14T14:18:20.050Z",
    "size": 377546,
    "path": "../public/_nuxt/4-6.984b9dbb.jpg"
  },
  "/_nuxt/4-7.d16d39c8.jpg": {
    "type": "image/jpeg",
    "etag": "\"575aa-QXFI3SVjLlds8yNNMeHGdiN5EW8\"",
    "mtime": "2023-08-14T14:18:20.050Z",
    "size": 357802,
    "path": "../public/_nuxt/4-7.d16d39c8.jpg"
  },
  "/_nuxt/4-8.ccdb8933.jpg": {
    "type": "image/jpeg",
    "etag": "\"5f3a2-NuK1PcQgp7zrslhgowxNsJpxCbU\"",
    "mtime": "2023-08-14T14:18:20.049Z",
    "size": 390050,
    "path": "../public/_nuxt/4-8.ccdb8933.jpg"
  },
  "/_nuxt/4-9.78ce6315.jpg": {
    "type": "image/jpeg",
    "etag": "\"6fced-0tsb7qjy/3FbfLs8dyRKsUn3F5g\"",
    "mtime": "2023-08-14T14:18:20.049Z",
    "size": 457965,
    "path": "../public/_nuxt/4-9.78ce6315.jpg"
  },
  "/_nuxt/4.a130e0fe.jpg": {
    "type": "image/jpeg",
    "etag": "\"1522e-BgMDwXB3St88dRnzSe0sfEg4s5A\"",
    "mtime": "2023-08-14T14:18:20.048Z",
    "size": 86574,
    "path": "../public/_nuxt/4.a130e0fe.jpg"
  },
  "/_nuxt/5-1.fe28af8e.jpg": {
    "type": "image/jpeg",
    "etag": "\"6672d-8h9C/t5m1fThuzN6Ec96ihDIS9o\"",
    "mtime": "2023-08-14T14:18:20.046Z",
    "size": 419629,
    "path": "../public/_nuxt/5-1.fe28af8e.jpg"
  },
  "/_nuxt/5-10.400391d7.jpg": {
    "type": "image/jpeg",
    "etag": "\"6a966-UQ7XFpkjc2qkYYIlphsmSA+iEzA\"",
    "mtime": "2023-08-14T14:18:20.043Z",
    "size": 436582,
    "path": "../public/_nuxt/5-10.400391d7.jpg"
  },
  "/_nuxt/5-11.b12ce93a.jpg": {
    "type": "image/jpeg",
    "etag": "\"6472f-TuoS4L58U2TUInCmvCt7UrfAH3w\"",
    "mtime": "2023-08-14T14:18:20.042Z",
    "size": 411439,
    "path": "../public/_nuxt/5-11.b12ce93a.jpg"
  },
  "/_nuxt/5-12.217a901c.jpg": {
    "type": "image/jpeg",
    "etag": "\"5c621-/qfa4vIdMtmITbz6KK26CXi987A\"",
    "mtime": "2023-08-14T14:18:20.040Z",
    "size": 378401,
    "path": "../public/_nuxt/5-12.217a901c.jpg"
  },
  "/_nuxt/5-13.a94a1833.jpg": {
    "type": "image/jpeg",
    "etag": "\"4c1c4-xU0p0GT6UYG2qWjJi6WZeup2840\"",
    "mtime": "2023-08-14T14:18:20.038Z",
    "size": 311748,
    "path": "../public/_nuxt/5-13.a94a1833.jpg"
  },
  "/_nuxt/5-14.25643dd8.jpg": {
    "type": "image/jpeg",
    "etag": "\"4e8bf-4AP5liAysfDGPEbpZR1w2GXFnpw\"",
    "mtime": "2023-08-14T14:18:20.036Z",
    "size": 321727,
    "path": "../public/_nuxt/5-14.25643dd8.jpg"
  },
  "/_nuxt/5-2.2ff4ec0c.jpg": {
    "type": "image/jpeg",
    "etag": "\"5685e-8+x9hJKfrJlSeA43LG13EHnzDoI\"",
    "mtime": "2023-08-14T14:18:20.035Z",
    "size": 354398,
    "path": "../public/_nuxt/5-2.2ff4ec0c.jpg"
  },
  "/_nuxt/5-3.53edbafb.jpg": {
    "type": "image/jpeg",
    "etag": "\"67a18-yFo9nbeKcDKee2LJ00qDOBphcTo\"",
    "mtime": "2023-08-14T14:18:20.033Z",
    "size": 424472,
    "path": "../public/_nuxt/5-3.53edbafb.jpg"
  },
  "/_nuxt/5-4.cb76a5dd.jpg": {
    "type": "image/jpeg",
    "etag": "\"62f76-Tz8Zm3LMg4xEDOd3lBKeywFFwSo\"",
    "mtime": "2023-08-14T14:18:20.031Z",
    "size": 405366,
    "path": "../public/_nuxt/5-4.cb76a5dd.jpg"
  },
  "/_nuxt/5-5.c6d39af6.jpg": {
    "type": "image/jpeg",
    "etag": "\"578b3-fW93T6vA5NNsnSxJ/H/vHxnJiD0\"",
    "mtime": "2023-08-14T14:18:20.027Z",
    "size": 358579,
    "path": "../public/_nuxt/5-5.c6d39af6.jpg"
  },
  "/_nuxt/5-6.f1848278.jpg": {
    "type": "image/jpeg",
    "etag": "\"5154b-NuRMcMo34DebNQH8s6FbNDLWH70\"",
    "mtime": "2023-08-14T14:18:20.027Z",
    "size": 333131,
    "path": "../public/_nuxt/5-6.f1848278.jpg"
  },
  "/_nuxt/5-7.a6fd50ac.jpg": {
    "type": "image/jpeg",
    "etag": "\"697f7-0rvSCN+v/NLKsjIl+Pyfp+Cv7dA\"",
    "mtime": "2023-08-14T14:18:20.026Z",
    "size": 432119,
    "path": "../public/_nuxt/5-7.a6fd50ac.jpg"
  },
  "/_nuxt/5-8.99f50cc8.jpg": {
    "type": "image/jpeg",
    "etag": "\"69848-7xwadpz+IclhV8M0RqM0QFFiHKc\"",
    "mtime": "2023-08-14T14:18:20.025Z",
    "size": 432200,
    "path": "../public/_nuxt/5-8.99f50cc8.jpg"
  },
  "/_nuxt/5-9.9612050e.jpg": {
    "type": "image/jpeg",
    "etag": "\"61e68-eanzqs0ZEg+QvQFpZ/A9tYyEVS0\"",
    "mtime": "2023-08-14T14:18:20.024Z",
    "size": 401000,
    "path": "../public/_nuxt/5-9.9612050e.jpg"
  },
  "/_nuxt/5.b123b688.jpg": {
    "type": "image/jpeg",
    "etag": "\"519b6-SNOEX/NjYhApw3owS/qQfnk8Qko\"",
    "mtime": "2023-08-14T14:18:20.023Z",
    "size": 334262,
    "path": "../public/_nuxt/5.b123b688.jpg"
  },
  "/_nuxt/6.7ef0e4e5.jpg": {
    "type": "image/jpeg",
    "etag": "\"3df0f-tBAkhfoMNbBpkDnx5yYre8z5DMA\"",
    "mtime": "2023-08-14T14:18:20.022Z",
    "size": 253711,
    "path": "../public/_nuxt/6.7ef0e4e5.jpg"
  },
  "/_nuxt/7-1.0a88c221.jpg": {
    "type": "image/jpeg",
    "etag": "\"78863-vFP+NLcWjnBlRKTehcb8j2g/nIk\"",
    "mtime": "2023-08-14T14:18:20.021Z",
    "size": 493667,
    "path": "../public/_nuxt/7-1.0a88c221.jpg"
  },
  "/_nuxt/7-10.9ee957cb.jpg": {
    "type": "image/jpeg",
    "etag": "\"6e525-0ESypGUQrk5ynyuMjq8SAMiXAuo\"",
    "mtime": "2023-08-14T14:18:20.021Z",
    "size": 451877,
    "path": "../public/_nuxt/7-10.9ee957cb.jpg"
  },
  "/_nuxt/7-11.9ef9ea83.jpg": {
    "type": "image/jpeg",
    "etag": "\"71f30-+bTJ2TUnH348DxPAkmKWrArfzVA\"",
    "mtime": "2023-08-14T14:18:20.020Z",
    "size": 466736,
    "path": "../public/_nuxt/7-11.9ef9ea83.jpg"
  },
  "/_nuxt/7-12.c9086003.jpg": {
    "type": "image/jpeg",
    "etag": "\"6834c-7J93Jvc1cQC+Tmy+b9NNm/LacuQ\"",
    "mtime": "2023-08-14T14:18:20.019Z",
    "size": 426828,
    "path": "../public/_nuxt/7-12.c9086003.jpg"
  },
  "/_nuxt/7-13.43a2c1d5.jpg": {
    "type": "image/jpeg",
    "etag": "\"74150-J7lJe0mFJcSKhLwE4eyfCozh6II\"",
    "mtime": "2023-08-14T14:18:20.018Z",
    "size": 475472,
    "path": "../public/_nuxt/7-13.43a2c1d5.jpg"
  },
  "/_nuxt/7-2.cd91fc61.jpg": {
    "type": "image/jpeg",
    "etag": "\"71ff8-dmjqO/kC1lSHnYqWCC3pIC3af4E\"",
    "mtime": "2023-08-14T14:18:20.016Z",
    "size": 466936,
    "path": "../public/_nuxt/7-2.cd91fc61.jpg"
  },
  "/_nuxt/7-3.89294d7c.jpg": {
    "type": "image/jpeg",
    "etag": "\"625ba-1VTKqmoXde4ujc3YXBelsWAHzTQ\"",
    "mtime": "2023-08-14T14:18:20.015Z",
    "size": 402874,
    "path": "../public/_nuxt/7-3.89294d7c.jpg"
  },
  "/_nuxt/7-4.163920d0.jpg": {
    "type": "image/jpeg",
    "etag": "\"72b8a-CF+KpT+JuPBGwVyZaX4cXheALho\"",
    "mtime": "2023-08-14T14:18:20.014Z",
    "size": 469898,
    "path": "../public/_nuxt/7-4.163920d0.jpg"
  },
  "/_nuxt/7-5.fd03a404.jpg": {
    "type": "image/jpeg",
    "etag": "\"6a516-eB7K6dSlx06oYhHCfC0f6PRGtYY\"",
    "mtime": "2023-08-14T14:18:20.012Z",
    "size": 435478,
    "path": "../public/_nuxt/7-5.fd03a404.jpg"
  },
  "/_nuxt/7-6.ed0f3524.jpg": {
    "type": "image/jpeg",
    "etag": "\"6805a-1o8pRd+XiB+aFKQapmPDpsdENTE\"",
    "mtime": "2023-08-14T14:18:20.011Z",
    "size": 426074,
    "path": "../public/_nuxt/7-6.ed0f3524.jpg"
  },
  "/_nuxt/7-7.31f3a443.jpg": {
    "type": "image/jpeg",
    "etag": "\"5ed01-j5gCX4Q55SxMAC6tTxf+n3cbe8M\"",
    "mtime": "2023-08-14T14:18:20.010Z",
    "size": 388353,
    "path": "../public/_nuxt/7-7.31f3a443.jpg"
  },
  "/_nuxt/7-8.fb0b9305.jpg": {
    "type": "image/jpeg",
    "etag": "\"5f7b0-BSkwfqbVYjXG8f0/0h35WnlH+Qc\"",
    "mtime": "2023-08-14T14:18:20.008Z",
    "size": 391088,
    "path": "../public/_nuxt/7-8.fb0b9305.jpg"
  },
  "/_nuxt/7-9.f08d905b.jpg": {
    "type": "image/jpeg",
    "etag": "\"70800-qgncSeKxFFeyWWMoHMeIqNkSiLY\"",
    "mtime": "2023-08-14T14:18:20.006Z",
    "size": 460800,
    "path": "../public/_nuxt/7-9.f08d905b.jpg"
  },
  "/_nuxt/7.d449e6af.jpg": {
    "type": "image/jpeg",
    "etag": "\"6122b-XBfUh43I1xMqZQN6XY53Zm3HxSs\"",
    "mtime": "2023-08-14T14:18:20.005Z",
    "size": 397867,
    "path": "../public/_nuxt/7.d449e6af.jpg"
  },
  "/_nuxt/8.0a3867b8.jpg": {
    "type": "image/jpeg",
    "etag": "\"4cf78-Gw0959RV40NUif5g88KbCsrVcqQ\"",
    "mtime": "2023-08-14T14:18:20.004Z",
    "size": 315256,
    "path": "../public/_nuxt/8.0a3867b8.jpg"
  },
  "/_nuxt/9.c6a2abed.JPG": {
    "type": "image/jpeg",
    "etag": "\"1e9c7-TqhC5/dFpsqhNujDnlulKXT0tjU\"",
    "mtime": "2023-08-14T14:18:20.004Z",
    "size": 125383,
    "path": "../public/_nuxt/9.c6a2abed.JPG"
  },
  "/_nuxt/AuthStore.e197b3ac.js": {
    "type": "application/javascript",
    "etag": "\"398-M0PPxspea3xw0Q7O4yDVvzV7rQM\"",
    "mtime": "2023-08-14T14:18:20.003Z",
    "size": 920,
    "path": "../public/_nuxt/AuthStore.e197b3ac.js"
  },
  "/_nuxt/Breadcrumbs.d345ee81.js": {
    "type": "application/javascript",
    "etag": "\"26e-fQdkV4ELnBW35VtlPNtR2ey6NM0\"",
    "mtime": "2023-08-14T14:18:20.003Z",
    "size": 622,
    "path": "../public/_nuxt/Breadcrumbs.d345ee81.js"
  },
  "/_nuxt/CaretRight.3493eb81.js": {
    "type": "application/javascript",
    "etag": "\"1e1-LSZpVFqYxx6hgpguhQltH8ulZN4\"",
    "mtime": "2023-08-14T14:18:20.002Z",
    "size": 481,
    "path": "../public/_nuxt/CaretRight.3493eb81.js"
  },
  "/_nuxt/FacilityTypeStore.25e2654d.js": {
    "type": "application/javascript",
    "etag": "\"17a-BMkv+0vEW7+6E9ecxbOOl++dfRY\"",
    "mtime": "2023-08-14T14:18:20.002Z",
    "size": 378,
    "path": "../public/_nuxt/FacilityTypeStore.25e2654d.js"
  },
  "/_nuxt/PageStore.0d57bff5.js": {
    "type": "application/javascript",
    "etag": "\"1bd-omLXLPi6eWOGaB/nIy31c5JKw0g\"",
    "mtime": "2023-08-14T14:18:20.002Z",
    "size": 445,
    "path": "../public/_nuxt/PageStore.0d57bff5.js"
  },
  "/_nuxt/UploadPayment.0fd4dbca.js": {
    "type": "application/javascript",
    "etag": "\"219f-8/VQuTPMptOP+vo+owStAZbdvVo\"",
    "mtime": "2023-08-14T14:18:20.001Z",
    "size": 8607,
    "path": "../public/_nuxt/UploadPayment.0fd4dbca.js"
  },
  "/_nuxt/UploadPayment.8523279e.js": {
    "type": "application/javascript",
    "etag": "\"412f-PjBU+/eJ4sNzy+5pznHsGuslQNY\"",
    "mtime": "2023-08-14T14:18:20.001Z",
    "size": 16687,
    "path": "../public/_nuxt/UploadPayment.8523279e.js"
  },
  "/_nuxt/_id_.2ee1bc13.js": {
    "type": "application/javascript",
    "etag": "\"98e-L2pR4VrG7/LyTXTrxPSFLUtFZCk\"",
    "mtime": "2023-08-14T14:18:20.001Z",
    "size": 2446,
    "path": "../public/_nuxt/_id_.2ee1bc13.js"
  },
  "/_nuxt/_id_.603757b9.js": {
    "type": "application/javascript",
    "etag": "\"42f8-C+quvUnmyNlWbskmuCHQqJRPSYI\"",
    "mtime": "2023-08-14T14:18:20.001Z",
    "size": 17144,
    "path": "../public/_nuxt/_id_.603757b9.js"
  },
  "/_nuxt/_id_.de949015.js": {
    "type": "application/javascript",
    "etag": "\"5bc4-EJSwQpxqln04sFJRBCaGaQ7U7w4\"",
    "mtime": "2023-08-14T14:18:20.000Z",
    "size": 23492,
    "path": "../public/_nuxt/_id_.de949015.js"
  },
  "/_nuxt/auth.714292a3.js": {
    "type": "application/javascript",
    "etag": "\"dd-HOf/ck1lopaIjcbLz+l1mdhkhk0\"",
    "mtime": "2023-08-14T14:18:20.000Z",
    "size": 221,
    "path": "../public/_nuxt/auth.714292a3.js"
  },
  "/_nuxt/composables.4c78a47c.js": {
    "type": "application/javascript",
    "etag": "\"156a-5NZ/KfKbCduutW8YXhMfQHPxfRk\"",
    "mtime": "2023-08-14T14:18:20.000Z",
    "size": 5482,
    "path": "../public/_nuxt/composables.4c78a47c.js"
  },
  "/_nuxt/default.4b1c4cc4.js": {
    "type": "application/javascript",
    "etag": "\"34d-GiTljXHXi2NNqKT2A/Oe450p5i8\"",
    "mtime": "2023-08-14T14:18:19.999Z",
    "size": 845,
    "path": "../public/_nuxt/default.4b1c4cc4.js"
  },
  "/_nuxt/entry.40a6eb38.js": {
    "type": "application/javascript",
    "etag": "\"3d12e-aoa1f1K2hbgLrAmFtqAW6sBQ9Vg\"",
    "mtime": "2023-08-14T14:18:19.999Z",
    "size": 250158,
    "path": "../public/_nuxt/entry.40a6eb38.js"
  },
  "/_nuxt/facility.18c75fb2.js": {
    "type": "application/javascript",
    "etag": "\"107e-TeSd3rb9AI7e8oarDVaDnRfIWOE\"",
    "mtime": "2023-08-14T14:18:19.998Z",
    "size": 4222,
    "path": "../public/_nuxt/facility.18c75fb2.js"
  },
  "/_nuxt/google-logo.c84c3b49.js": {
    "type": "application/javascript",
    "etag": "\"2e0-deXYuX4t0jl4nlFMiAB0HLV7mDE\"",
    "mtime": "2023-08-14T14:18:19.997Z",
    "size": 736,
    "path": "../public/_nuxt/google-logo.c84c3b49.js"
  },
  "/_nuxt/header.10cc8b4d.jpg": {
    "type": "image/jpeg",
    "etag": "\"3fe85-QncX5V4EWxFFgqWoRqQZki8C1sw\"",
    "mtime": "2023-08-14T14:18:19.997Z",
    "size": 261765,
    "path": "../public/_nuxt/header.10cc8b4d.jpg"
  },
  "/_nuxt/header.2dc4a8fb.jpg": {
    "type": "image/jpeg",
    "etag": "\"8dc92-RGDFgvCaJwl8YblNudMZpv6wdRM\"",
    "mtime": "2023-08-14T14:18:19.994Z",
    "size": 580754,
    "path": "../public/_nuxt/header.2dc4a8fb.jpg"
  },
  "/_nuxt/header.61c8bfae.jpg": {
    "type": "image/jpeg",
    "etag": "\"22ffc-tHDcKZr2e1ThesKTTQ7FfC+odi8\"",
    "mtime": "2023-08-14T14:18:19.994Z",
    "size": 143356,
    "path": "../public/_nuxt/header.61c8bfae.jpg"
  },
  "/_nuxt/header.b94c258c.jpg": {
    "type": "image/jpeg",
    "etag": "\"402b4-a9qJq6rqJCjCZRpLw85PCAvxZZ0\"",
    "mtime": "2023-08-14T14:18:19.993Z",
    "size": 262836,
    "path": "../public/_nuxt/header.b94c258c.jpg"
  },
  "/_nuxt/index.8f77c766.js": {
    "type": "application/javascript",
    "etag": "\"5fe-7Hh/JGYTy7/6fYlrBDaDBMFM/jo\"",
    "mtime": "2023-08-14T14:18:19.992Z",
    "size": 1534,
    "path": "../public/_nuxt/index.8f77c766.js"
  },
  "/_nuxt/index.d9dc3386.js": {
    "type": "application/javascript",
    "etag": "\"8a0-5CAFJQVtXagqvJd6LBkx+t8sHqw\"",
    "mtime": "2023-08-14T14:18:19.992Z",
    "size": 2208,
    "path": "../public/_nuxt/index.d9dc3386.js"
  },
  "/_nuxt/index.esm.4c2b265f.js": {
    "type": "application/javascript",
    "etag": "\"fc96-VXQKfzOeysABBzqdNtUI1Fje2tQ\"",
    "mtime": "2023-08-14T14:18:19.992Z",
    "size": 64662,
    "path": "../public/_nuxt/index.esm.4c2b265f.js"
  },
  "/_nuxt/myaccount.11114beb.js": {
    "type": "application/javascript",
    "etag": "\"276-gOYVs5j8rSgKhEzG0RExtHxHY40\"",
    "mtime": "2023-08-14T14:18:19.991Z",
    "size": 630,
    "path": "../public/_nuxt/myaccount.11114beb.js"
  },
  "/_nuxt/mybookings.4d530db1.js": {
    "type": "application/javascript",
    "etag": "\"279-OOVr130tPOLQ66jm1u2OEb0Bk40\"",
    "mtime": "2023-08-14T14:18:19.991Z",
    "size": 633,
    "path": "../public/_nuxt/mybookings.4d530db1.js"
  },
  "/_nuxt/nuxt-img.fa345b65.js": {
    "type": "application/javascript",
    "etag": "\"11ec-tWLnSq8SsvExllO0iehlCYLFFIA\"",
    "mtime": "2023-08-14T14:18:19.990Z",
    "size": 4588,
    "path": "../public/_nuxt/nuxt-img.fa345b65.js"
  },
  "/_nuxt/nuxt-link.18fb6253.js": {
    "type": "application/javascript",
    "etag": "\"1103-k2mgNTJx5I0ndkxLVm/7Mb+wafo\"",
    "mtime": "2023-08-14T14:18:19.990Z",
    "size": 4355,
    "path": "../public/_nuxt/nuxt-link.18fb6253.js"
  },
  "/_nuxt/page.694aa3fd.js": {
    "type": "application/javascript",
    "etag": "\"363-gHWDnYlklVZp3SK5d0jYNr6NQ1s\"",
    "mtime": "2023-08-14T14:18:19.990Z",
    "size": 867,
    "path": "../public/_nuxt/page.694aa3fd.js"
  },
  "/_nuxt/signin.c43af232.js": {
    "type": "application/javascript",
    "etag": "\"af5-6VE4Hac7uOh1zeb4fTgc7uxHYpQ\"",
    "mtime": "2023-08-14T14:18:19.989Z",
    "size": 2805,
    "path": "../public/_nuxt/signin.c43af232.js"
  },
  "/_nuxt/upSeal40.d1b21dc6.png": {
    "type": "image/png",
    "etag": "\"15cc-LhH0NpDMwLOHx8PPXcufgaWDFmo\"",
    "mtime": "2023-08-14T14:18:19.989Z",
    "size": 5580,
    "path": "../public/_nuxt/upSeal40.d1b21dc6.png"
  },
  "/_nuxt/uplbspaces_mono_dark_275.d6ad26f1.png": {
    "type": "image/png",
    "etag": "\"1ab5-tK2FEtVHBrbwbe7bzvku3Hvi6gs\"",
    "mtime": "2023-08-14T14:18:19.988Z",
    "size": 6837,
    "path": "../public/_nuxt/uplbspaces_mono_dark_275.d6ad26f1.png"
  },
  "/_nuxt/useApiFetch.2f581416.js": {
    "type": "application/javascript",
    "etag": "\"39f8-FNU3beckiD1KCdOf8YiK/VIWKnc\"",
    "mtime": "2023-08-14T14:18:19.988Z",
    "size": 14840,
    "path": "../public/_nuxt/useApiFetch.2f581416.js"
  },
  "/_nuxt/useFetchImages.9b9ddee3.js": {
    "type": "application/javascript",
    "etag": "\"3b26-VlCK4fdpucURY+GOQwmf8v+2E+E\"",
    "mtime": "2023-08-14T14:18:19.987Z",
    "size": 15142,
    "path": "../public/_nuxt/useFetchImages.9b9ddee3.js"
  },
  "/images/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-3y++sUAKzaCQmjLBz2v0kvESHgc\"",
    "mtime": "2023-08-14T14:18:20.174Z",
    "size": 6148,
    "path": "../public/images/.DS_Store"
  },
  "/images/aboutus.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e111e-QNVsHfoHP2/4qEcMXQiTbuht0FY\"",
    "mtime": "2023-08-14T14:18:20.169Z",
    "size": 3019038,
    "path": "../public/images/aboutus.jpg"
  },
  "/images/auditorium.jpg": {
    "type": "image/jpeg",
    "etag": "\"58d73-a9QHMZaIk20hpWQ6lIlJuEQ09UI\"",
    "mtime": "2023-08-14T14:18:20.164Z",
    "size": 363891,
    "path": "../public/images/auditorium.jpg"
  },
  "/images/bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"201aaa-lCRjH6050vHgZ6B+TP4I3PYrzPw\"",
    "mtime": "2023-08-14T14:18:20.158Z",
    "size": 2103978,
    "path": "../public/images/bg.jpg"
  },
  "/images/classrooms.jpg": {
    "type": "image/jpeg",
    "etag": "\"43f63-goXLK79vjK3Lcf9Y6WErhUIac2I\"",
    "mtime": "2023-08-14T14:18:20.154Z",
    "size": 278371,
    "path": "../public/images/classrooms.jpg"
  },
  "/images/event.jpg": {
    "type": "image/jpeg",
    "etag": "\"57492-pYlU76fH0kM1QSqmK9ncoZ5DIYc\"",
    "mtime": "2023-08-14T14:18:20.150Z",
    "size": 357522,
    "path": "../public/images/event.jpg"
  },
  "/images/event1.jpg": {
    "type": "image/jpeg",
    "etag": "\"114584-3prR+hAoPqDenrwBmG1YWXJgZ4A\"",
    "mtime": "2023-08-14T14:18:20.148Z",
    "size": 1131908,
    "path": "../public/images/event1.jpg"
  },
  "/images/events.jpg": {
    "type": "image/jpeg",
    "etag": "\"17731-6kpYggR2LZnf2qJHgWBWWvkTGhs\"",
    "mtime": "2023-08-14T14:18:20.145Z",
    "size": 96049,
    "path": "../public/images/events.jpg"
  },
  "/images/facebook-logo.png": {
    "type": "image/png",
    "etag": "\"c47-CmoYjaFGR3qZzr6R7BMzsgpKIK4\"",
    "mtime": "2023-08-14T14:18:20.143Z",
    "size": 3143,
    "path": "../public/images/facebook-logo.png"
  },
  "/images/facebook_signin.png": {
    "type": "image/png",
    "etag": "\"3213-x1yBkvbA2tvx8OJJvbem74G+6mg\"",
    "mtime": "2023-08-14T14:18:20.141Z",
    "size": 12819,
    "path": "../public/images/facebook_signin.png"
  },
  "/images/fields.jpg": {
    "type": "image/jpeg",
    "etag": "\"86f76-/vR5PuMFF+2LJLPHDd2iQayYqHY\"",
    "mtime": "2023-08-14T14:18:20.140Z",
    "size": 552822,
    "path": "../public/images/fields.jpg"
  },
  "/images/google-logo.png": {
    "type": "image/png",
    "etag": "\"1029-PHsEJpNL5GXfquRryIzfA0hn8wk\"",
    "mtime": "2023-08-14T14:18:20.130Z",
    "size": 4137,
    "path": "../public/images/google-logo.png"
  },
  "/images/google.png": {
    "type": "image/png",
    "etag": "\"1158-U3OefjIA1fRk0mex1rB/IQw2KBU\"",
    "mtime": "2023-08-14T14:18:20.129Z",
    "size": 4440,
    "path": "../public/images/google.png"
  },
  "/images/google_signin.png": {
    "type": "image/png",
    "etag": "\"2f05-GCkra7OtFnImX0AuJrNxDO4UCJU\"",
    "mtime": "2023-08-14T14:18:20.128Z",
    "size": 12037,
    "path": "../public/images/google_signin.png"
  },
  "/images/hero1.jpg": {
    "type": "image/jpeg",
    "etag": "\"176142-gKeyYq7ouVIhMF95v6FlEeu2aTs\"",
    "mtime": "2023-08-14T14:18:20.126Z",
    "size": 1532226,
    "path": "../public/images/hero1.jpg"
  },
  "/images/hero2.jpg": {
    "type": "image/jpeg",
    "etag": "\"21b40b-PZeSipSnSmlGcThrw5b6Jw81kJM\"",
    "mtime": "2023-08-14T14:18:20.115Z",
    "size": 2208779,
    "path": "../public/images/hero2.jpg"
  },
  "/images/hostel.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b48f-rwr3uRGYHjQV8n3SbRii8UTxPcs\"",
    "mtime": "2023-08-14T14:18:20.112Z",
    "size": 177295,
    "path": "../public/images/hostel.jpg"
  },
  "/images/hostel1.jpg": {
    "type": "image/jpeg",
    "etag": "\"a4a01-hiSY9AM1gc+5T2ld9FCxDtX4HY4\"",
    "mtime": "2023-08-14T14:18:20.110Z",
    "size": 674305,
    "path": "../public/images/hostel1.jpg"
  },
  "/images/lecture.jpg": {
    "type": "image/jpeg",
    "etag": "\"7be11-f1Wwcr96Lq5C9ek3XbC5qhU3cXc\"",
    "mtime": "2023-08-14T14:18:20.108Z",
    "size": 507409,
    "path": "../public/images/lecture.jpg"
  },
  "/images/lecture1.jpg": {
    "type": "image/jpeg",
    "etag": "\"e7219-fUhrdlXZM4gy7raqNZTRixAeGsA\"",
    "mtime": "2023-08-14T14:18:20.102Z",
    "size": 946713,
    "path": "../public/images/lecture1.jpg"
  },
  "/images/meeting.jpg": {
    "type": "image/jpeg",
    "etag": "\"161b88-6C9xldUuex3+EDbRKJdxY7MAOuI\"",
    "mtime": "2023-08-14T14:18:20.100Z",
    "size": 1448840,
    "path": "../public/images/meeting.jpg"
  },
  "/images/meeting1.jpg": {
    "type": "image/jpeg",
    "etag": "\"161b88-6C9xldUuex3+EDbRKJdxY7MAOuI\"",
    "mtime": "2023-08-14T14:18:20.093Z",
    "size": 1448840,
    "path": "../public/images/meeting1.jpg"
  },
  "/images/ncas.jpg": {
    "type": "image/jpeg",
    "etag": "\"48f6e-wvt+PkvsUi9yQJUreAMTN9S3XBI\"",
    "mtime": "2023-08-14T14:18:20.090Z",
    "size": 298862,
    "path": "../public/images/ncas.jpg"
  },
  "/images/nicolas.jpg": {
    "type": "image/jpeg",
    "etag": "\"613d4-5J3LQ8I3n4/N8I2+5IsVoJXMuSQ\"",
    "mtime": "2023-08-14T14:18:20.089Z",
    "size": 398292,
    "path": "../public/images/nicolas.jpg"
  },
  "/images/redrec.jpg": {
    "type": "image/jpeg",
    "etag": "\"46cc2-aVIX4rxFCL/h3G1dMvW1L4y/XgQ\"",
    "mtime": "2023-08-14T14:18:20.088Z",
    "size": 289986,
    "path": "../public/images/redrec.jpg"
  },
  "/images/umali.jpg": {
    "type": "image/jpeg",
    "etag": "\"40606-aU4tnRaxiXrgCMfGTss+aPmW7iI\"",
    "mtime": "2023-08-14T14:18:20.086Z",
    "size": 263686,
    "path": "../public/images/umali.jpg"
  },
  "/images/upSeal40.png": {
    "type": "image/png",
    "etag": "\"15cc-LhH0NpDMwLOHx8PPXcufgaWDFmo\"",
    "mtime": "2023-08-14T14:18:20.085Z",
    "size": 5580,
    "path": "../public/images/upSeal40.png"
  },
  "/images/upSeal90.png": {
    "type": "image/png",
    "etag": "\"4ab7-slm0Ar+AOfwFGIEvZxUkbtY4Gj4\"",
    "mtime": "2023-08-14T14:18:20.085Z",
    "size": 19127,
    "path": "../public/images/upSeal90.png"
  },
  "/images/up_seal.png": {
    "type": "image/png",
    "etag": "\"1f1b-6oqDdUU1fb0JRWrPnhYh3Z4PJ9g\"",
    "mtime": "2023-08-14T14:18:20.084Z",
    "size": 7963,
    "path": "../public/images/up_seal.png"
  },
  "/images/up_seal_120.png": {
    "type": "image/png",
    "etag": "\"4714-PV+YryBpXc80UR7JRw9bMJNfl44\"",
    "mtime": "2023-08-14T14:18:20.084Z",
    "size": 18196,
    "path": "../public/images/up_seal_120.png"
  },
  "/images/up_seal_150.png": {
    "type": "image/png",
    "etag": "\"6130-QrZO/YcbYUYJTZANstm8azJGlnc\"",
    "mtime": "2023-08-14T14:18:20.084Z",
    "size": 24880,
    "path": "../public/images/up_seal_150.png"
  },
  "/images/up_seal_200.png": {
    "type": "image/png",
    "etag": "\"924a-oMBECjO3mLxEcKpIWtCDMVMrBI0\"",
    "mtime": "2023-08-14T14:18:20.083Z",
    "size": 37450,
    "path": "../public/images/up_seal_200.png"
  },
  "/images/up_seal_90.png": {
    "type": "image/png",
    "etag": "\"4ab7-slm0Ar+AOfwFGIEvZxUkbtY4Gj4\"",
    "mtime": "2023-08-14T14:18:20.083Z",
    "size": 19127,
    "path": "../public/images/up_seal_90.png"
  },
  "/images/uplbspacesDark275.png": {
    "type": "image/png",
    "etag": "\"4216-3eL68u9JaPcdQfcppHi6OHq4DYE\"",
    "mtime": "2023-08-14T14:18:20.080Z",
    "size": 16918,
    "path": "../public/images/uplbspacesDark275.png"
  },
  "/images/uplbspacesLogo275.png": {
    "type": "image/png",
    "etag": "\"3490-Jp+mnt547s5X0U0RQYATQPjPimQ\"",
    "mtime": "2023-08-14T14:18:20.079Z",
    "size": 13456,
    "path": "../public/images/uplbspacesLogo275.png"
  },
  "/images/uplbspaces_colored_270.png": {
    "type": "image/png",
    "etag": "\"37ac-IBZqI91shBs/4vfwUTKvmlcyQzM\"",
    "mtime": "2023-08-14T14:18:20.079Z",
    "size": 14252,
    "path": "../public/images/uplbspaces_colored_270.png"
  },
  "/images/uplbspaces_colored_dark_275.png": {
    "type": "image/png",
    "etag": "\"410b-B91i6Tvb6IdWIXvRcv3eeFocRXI\"",
    "mtime": "2023-08-14T14:18:20.075Z",
    "size": 16651,
    "path": "../public/images/uplbspaces_colored_dark_275.png"
  },
  "/images/uplbspaces_colored_light_275.png": {
    "type": "image/png",
    "etag": "\"3c23-ZAOUt1mN4J7Z/SH68vK9yNBHdrI\"",
    "mtime": "2023-08-14T14:18:20.074Z",
    "size": 15395,
    "path": "../public/images/uplbspaces_colored_light_275.png"
  },
  "/images/uplbspaces_colored_light_icon_25.png": {
    "type": "image/png",
    "etag": "\"9c9-nPdZJBtpMBGYhQ0zr2fQkYiyEE0\"",
    "mtime": "2023-08-14T14:18:20.073Z",
    "size": 2505,
    "path": "../public/images/uplbspaces_colored_light_icon_25.png"
  },
  "/images/uplbspaces_colored_light_icon_45.png": {
    "type": "image/png",
    "etag": "\"c18-/YbU3PDt6bFTrhfXPdjqrYSb4yM\"",
    "mtime": "2023-08-14T14:18:20.072Z",
    "size": 3096,
    "path": "../public/images/uplbspaces_colored_light_icon_45.png"
  },
  "/images/uplbspaces_colored_m.png": {
    "type": "image/png",
    "etag": "\"2733-TonIDhxEY4roRVYz22upR7f5cMM\"",
    "mtime": "2023-08-14T14:18:20.072Z",
    "size": 10035,
    "path": "../public/images/uplbspaces_colored_m.png"
  },
  "/images/uplbspaces_logo_colored_on_dark_sm.png": {
    "type": "image/png",
    "etag": "\"16b4-JdQFJc4nczf4ZCob6VeGtnaSXMI\"",
    "mtime": "2023-08-14T14:18:20.072Z",
    "size": 5812,
    "path": "../public/images/uplbspaces_logo_colored_on_dark_sm.png"
  },
  "/images/uplbspaces_mono_dark_275.png": {
    "type": "image/png",
    "etag": "\"1ab5-tK2FEtVHBrbwbe7bzvku3Hvi6gs\"",
    "mtime": "2023-08-14T14:18:20.071Z",
    "size": 6837,
    "path": "../public/images/uplbspaces_mono_dark_275.png"
  },
  "/images/uplbspaces_mono_light_275.png": {
    "type": "image/png",
    "etag": "\"1a07-sjXX1trRkVHtkYDd5Dzj5IJFkbI\"",
    "mtime": "2023-08-14T14:18:20.071Z",
    "size": 6663,
    "path": "../public/images/uplbspaces_mono_light_275.png"
  },
  "/images/uplbspaces_mono_light_icon_25.png": {
    "type": "image/png",
    "etag": "\"73f-53SS4RuDgi4eK6c+3o6K3q1DiYo\"",
    "mtime": "2023-08-14T14:18:20.070Z",
    "size": 1855,
    "path": "../public/images/uplbspaces_mono_light_icon_25.png"
  },
  "/images/uplbspaces_mono_light_icon_35.png": {
    "type": "image/png",
    "etag": "\"8dc-c1+2Mb7u9kqh4KR1ilZV0gM3SuM\"",
    "mtime": "2023-08-14T14:18:20.070Z",
    "size": 2268,
    "path": "../public/images/uplbspaces_mono_light_icon_35.png"
  },
  "/images/uplbspaces_mono_light_icon_45.png": {
    "type": "image/png",
    "etag": "\"42d-VCKdoXH08CO7Q2x3g/TP4oeDcHY\"",
    "mtime": "2023-08-14T14:18:20.069Z",
    "size": 1069,
    "path": "../public/images/uplbspaces_mono_light_icon_45.png"
  },
  "/images/uplbspaces_mono_white_150.png": {
    "type": "image/png",
    "etag": "\"d83-imkBoSiNW9N8xayhcy0sPJHtgQE\"",
    "mtime": "2023-08-14T14:18:20.069Z",
    "size": 3459,
    "path": "../public/images/uplbspaces_mono_white_150.png"
  },
  "/images/uplbspaces_mono_white_250.png": {
    "type": "image/png",
    "etag": "\"197d-EhlA8UKKLrakzwI7QyRQdfUdwRg\"",
    "mtime": "2023-08-14T14:18:20.068Z",
    "size": 6525,
    "path": "../public/images/uplbspaces_mono_white_250.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _O5wreA = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const ipxOptions = {
    ...opts,
    // TODO: Switch to storage API when ipx supports it
    dir: opts.dir ? fileURLToPath(new URL(opts.dir, globalThis._importMeta_.url)) : void 0
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.node.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.node.req, event.node.res);
  });
});

const _lazy_6maBn1 = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_6maBn1, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _O5wreA, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_6maBn1, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
