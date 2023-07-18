const fetchCatchDns = require("./request/fetchCatchDns").fetchCatchDns;

let fetchImplementation = fetch;
const nodeFetch = require("node-fetch");
if (nodeFetch) {
  const nodeFetchWrapper = async (input, options = {}) => {
    const res = await fetch(input.toString(), options);
    return res;
  };

  const fetchCache = fetchCatchDns(nodeFetchWrapper, {
    headerFactory: (headers) => new nodeFetch.Headers(headers || {}),
  });
  fetchImplementation = fetchCache;
} else {
  fetchImplementation = fetchCatchDns(fetch);
}

module.exports = fetchImplementation;
