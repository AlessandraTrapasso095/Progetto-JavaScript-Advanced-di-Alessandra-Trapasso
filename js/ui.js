function setStatus(message = "") {
  const statusEl = document.getElementById("status");
  statusEl.textContent = message;
}

function setError(message = "") {
  const errorEl = document.getElementById("error");
  errorEl.textContent = message;
}

function clearResults() {
  const resultsEl = document.getElementById("results");
  resultsEl.innerHTML = "";
}

function clearDetails() {
  const detailsEl = document.getElementById("details");
  detailsEl.innerHTML = "";
}

function renderResults(works) {
  const resultsEl = document.getElementById("results");
  resultsEl.innerHTML = "";

  if (!works || works.length === 0) {
    resultsEl.innerHTML = `<div>Nessun risultato.</div>`;
    return;
  }

  works.slice(0, 5).forEach((work) => {
    const title = work.title || "Titolo non disponibile";

    const authors =
      work.authors && work.authors.length > 0
        ? work.authors.map((a) => a.name).filter(Boolean).join(", ")
        : "Autore non disponibile";

    const key = work.key;

    const row = document.createElement("div");
    row.className = "book-card";
    row.innerHTML = `
    <strong>${title}</strong><br/>
    <span>${authors}</span><br/>
    <button class="details-btn" data-key="${key}" data-title="${title}" data-authors="${authors}">
     Dettagli
    </button>

    <div class="inline-details" hidden></div>
`;
    resultsEl.appendChild(row);
  });
}

function normalizeDescription(description) {
  if (!description) return "Descrizione non disponibile";
  if (typeof description === "string") return description;
  if (typeof description === "object" && description.value) return description.value;
  return "Descrizione non disponibile";
}

function renderInlineDetails(containerEl, { title, authors, description }) {
  containerEl.hidden = false;

  containerEl.innerHTML = `
    <div class="inline-header">
      <strong>Dettagli</strong>
      <button class="close-details" aria-label="Chiudi dettagli">×</button>
    </div>

    <p class="inline-title">${title || "Titolo non disponibile"}</p>
    <p><strong>Autori:</strong> ${authors || "Autore non disponibile"}</p>
    <p>${normalizeDescription(description)}</p>
  `;
}

function closeInlineDetails(containerEl) {
  containerEl.hidden = true;
  containerEl.innerHTML = "";
}

function showSpinner() {
  const sp = document.getElementById("spinner");
  if (sp) sp.hidden = false;
}

function hideSpinner() {
  const sp = document.getElementById("spinner");
  if (sp) sp.hidden = true;
}


module.exports = {
  setStatus,
  setError,
  clearResults,
  clearDetails,
  renderResults,
  renderInlineDetails,
  renderInlineDetails,
  closeInlineDetails,
  showSpinner,
  hideSpinner,

};

