// Lightweight client-side search: fetches the pre-built index and does a
// simple substring match across title, summary, and tags. No external
// dependencies are required so the site can be built and hosted statically.
(function () {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  const publicationList = document.getElementById("publication-list");
  const emptyMessage = document.querySelector(".search-empty");
  if (!input) return;

  if (publicationList && emptyMessage) {
    const cards = Array.from(publicationList.querySelectorAll(".publication-card[data-search-content]"));

    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      let visibleCount = 0;
      cards.forEach((card) => {
        const matches = !query || card.dataset.searchContent.toLowerCase().includes(query);
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });
      emptyMessage.hidden = visibleCount !== 0;
    });
    return;
  }

  if (!results) return;

  fetch("/search-index.json")
    .then((response) => response.json())
    .then((index) => {
      const lang = document.documentElement.lang || "en";
      const items = index.filter((item) => item.lang === lang);

      function render(list) {
        results.innerHTML = "";
        if (list.length === 0) {
          results.innerHTML = `<p>${lang === "fr" ? "Aucun résultat." : "No results."}</p>`;
          return;
        }
        const ul = document.createElement("ul");
        ul.className = "publication-list";
        list.forEach((item) => {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${item.url}">${item.title}</a><p>${item.summary || ""}</p>`;
          ul.appendChild(li);
        });
        results.appendChild(ul);
      }

      input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        const filtered = items.filter((item) => {
          const haystack = [item.title, item.summary, ...(item.tags || [])].join(" ").toLowerCase();
          return !query || haystack.includes(query);
        });
        render(filtered);
      });
      render(items);
    });
})();
