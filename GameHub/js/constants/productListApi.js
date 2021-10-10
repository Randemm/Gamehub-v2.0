let url = "https://www.skoleapi.one/wp-json/wc/v3/products";
let username = "ck_36d4f68df89f4e82aef99dd9bf8bf87cb05350d1";
let password = "cs_71f857f152b9711abbc7f4e3f95ae1e0cb133bed";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

let headers = new Headers();
headers.append("Authorization", "Basic " + btoa(username + ":" + password));

export async function getList() {
  var response = await fetch(url + "?per_page=20", {
    method: "GET",
    headers: headers,
  });
  return await response.json();
}

export async function getProduct() {
  var response = await fetch(url + "/" + productId, {
    method: "GET",
    headers: headers,
  });
  return await response.json();
}

// Remove html tags
export function strip(html) {
  let doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}
