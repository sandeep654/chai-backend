import dns from "dns";

console.log("DNS Servers:", dns.getServers());

dns.resolveSrv(
  "_mongodb._tcp.cluster0.xagy5ic.mongodb.net",
  (err, records) => {
    console.log("Error:", err);
    console.log("Records:", records);
  }
);