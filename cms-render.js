
export async function fetchJSON(path) {
  const res = await fetch(path);
  return res.json();
}

export async function applySiteSettings() {
  const settings = await fetchJSON('/content/settings.json');
  document.querySelector('[data-site-title]').innerText = settings.site_title;
  document.querySelector('[data-site-footer]').innerText = settings.footer_text;
  document.querySelector('[data-site-logo]').src = settings.logo;
}

export async function renderProducts() {
  const container = document.getElementById('products-list');
  const files = ["sample.json"];
  container.innerHTML = "";
  for (let file of files) {
    const p = await fetchJSON('/content/products/' + file);
    container.innerHTML += `<div><h3>${p.name}</h3><p>${p.price}</p><p>${p.description}</p><img src="${p.image}" width="100"/></div>`;
  }
}

export async function renderOffers() {
  const container = document.getElementById('offers-list');
  const files = ["sample.json"];
  container.innerHTML = "";
  for (let file of files) {
    const o = await fetchJSON('/content/offers/' + file);
    container.innerHTML += `<div><h4>${o.title}</h4><p>${o.details}</p></div>`;
  }
}

export async function renderHome() {
  const home = await fetchJSON('/content/pages/home.json');
  document.querySelector('[data-hero-title]').innerText = home.hero_title;
  document.querySelector('[data-hero-tagline]').innerText = home.hero_tagline;
  document.querySelector('[data-hero-image]').src = home.hero_image;
}
