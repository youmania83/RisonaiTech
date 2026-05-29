/**
 * IndexNow bulk submission — risonaitech.com
 * Run once after deploy:  node submit-indexnow.js
 */

const payload = {
  host: "risonaitech.com",
  key: "d70cbd431202444fbdf24741a8e4877a",
  keyLocation: "https://risonaitech.com/d70cbd431202444fbdf24741a8e4877a.txt",
  urlList: [
    "https://risonaitech.com/",
    "https://risonaitech.com/services",
    "https://risonaitech.com/products",
    "https://risonaitech.com/about",
    "https://risonaitech.com/contact",
    "https://risonaitech.com/services/ai-automation",
    "https://risonaitech.com/services/ai-agent",
    "https://risonaitech.com/services/crm-development",
    "https://risonaitech.com/services/chatbot-development",
    "https://risonaitech.com/services/website-development",
    "https://risonaitech.com/services/whatsapp-automation",
    "https://risonaitech.com/tools/ai-search-audit",
    "https://risonaitech.com/blog",
    "https://risonaitech.com/blog/ai-employee-never-sleeps",
    "https://risonaitech.com/blog/ai-automation-for-indian-smes",
    "https://risonaitech.com/blog/whatsapp-chatbot-for-business-india",
    "https://risonaitech.com/blog/saas-development-cost-india",
    "https://risonaitech.com/delhi",
    "https://risonaitech.com/gurgaon",
    "https://risonaitech.com/panipat",
    "https://risonaitech.com/indore",
    "https://risonaitech.com/ahmedabad",
    "https://risonaitech.com/jaipur",
    "https://risonaitech.com/chandigarh",
    "https://risonaitech.com/new-york",
    "https://risonaitech.com/new-jersey",
    "https://risonaitech.com/london",
    "https://risonaitech.com/locations/india",
    "https://risonaitech.com/privacy",
    "https://risonaitech.com/terms",
  ],
};

async function submit() {
  console.log(`Submitting ${payload.urlList.length} URLs to IndexNow…`);

  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  console.log(`Status: ${res.status} ${res.statusText}`);

  if (res.status === 200) {
    console.log("✅ Success — all URLs submitted to Bing/IndexNow.");
  } else if (res.status === 202) {
    console.log("✅ Accepted (202) — URLs queued for crawling.");
  } else if (res.status === 400) {
    console.error("❌ 400 Bad Request — check key or URL format.");
  } else if (res.status === 403) {
    console.error("❌ 403 Forbidden — key file not accessible yet. Deploy first, then re-run.");
  } else if (res.status === 422) {
    console.error("❌ 422 Unprocessable — URLs don't match the host field.");
  } else if (res.status === 429) {
    console.error("❌ 429 Too Many Requests — wait a few minutes and retry.");
  } else {
    const body = await res.text();
    console.log("Response body:", body);
  }
}

submit().catch(console.error);
