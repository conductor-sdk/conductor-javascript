import { fetchCatchDns } from "./fetchCatchDns";
const fetchCache = fetchCatchDns(fetch);

export { fetchCache };
