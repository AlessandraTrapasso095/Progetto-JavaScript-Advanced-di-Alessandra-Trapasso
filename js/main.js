const form = document.getElementById("searchForm");
const input = document.getElementById("subjectInput");
const resultsEl = document.getElementById("results");
const searchBtn = document.getElementById("searchBtn");

const { fetchBooksBySubject, fetchWorkDetails } = require("./api");
const {
  setStatus,
  setError,
  clearResults,
  clearDetails,
  renderResults,
  renderInlineDetails,
  closeInlineDetails,
  showSpinner,
  hideSpinner,
} = require("./ui");

function setSearchLoading(isLoading) {
  searchBtn.disabled = isLoading;
  searchBtn.textContent = isLoading ? "Caricamento..." : "Cerca";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const subject = input.value.trim().toLowerCase();

  setError("");
  setStatus("");
  clearResults();
  clearDetails();

  if (!subject) {
    input.classList.add("error");
    setError("Inserisci una categoria valida (es: fantasy).");
    setTimeout(() => input.classList.remove("error"), 500);
    return;
  }

  try {
    setSearchLoading(true); 
    showSpinner();              
    setStatus("Caricamento libri...");

    const data = await fetchBooksBySubject(subject);
    const works = data.works || [];

    renderResults(works);
    setStatus("");
  } catch (err) {
    console.error("Errore durante la richiesta:", err);
    setStatus("");
    setError("Errore nel recupero dei libri. Riprova con un’altra categoria.");
  } finally {
    setSearchLoading(false); 
    hideSpinner();             
  }
});

resultsEl.addEventListener("click", async (event) => {
  const closeBtn = event.target.closest(".close-details");
  if (closeBtn) {
    const card = closeBtn.closest(".book-card");
    const inline = card.querySelector(".inline-details");
    closeInlineDetails(inline);
    return;
  }

  const btn = event.target.closest(".details-btn");
  if (!btn) return;

  const card = btn.closest(".book-card");
  const inline = card.querySelector(".inline-details");

  document.querySelectorAll(".inline-details").forEach((el) => {
    if (el !== inline) {
      el.hidden = true;
      el.innerHTML = "";
    }
  });

  const workKey = btn.dataset.key;
  const title = btn.dataset.title;
  const authors = btn.dataset.authors;

  try {
    setError("");
    setStatus("Caricamento dettagli...");

    inline.hidden = false;
    inline.innerHTML =`
    <div class="inline-loading">
    <div class="spinner" style="margin:0;"></div>
    <span style="margin-left:10px;">Caricamento dettagli...</span>
    </div>
    `;

    const workData = await fetchWorkDetails(workKey);

    renderInlineDetails(inline, {
      title,
      authors,
      description: workData.description,
    });

    setStatus("");
  } catch (err) {
    console.error("Errore dettagli:", err);
    setStatus("");
    setError("Errore nel recupero dei dettagli del libro.");
    inline.hidden = true;
    inline.innerHTML = "";
  }
});


