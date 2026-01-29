/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.css"
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./js/api.js"
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
(module) {

async function fetchBooksBySubject(subject) {
  const url = `https://openlibrary.org/subjects/${encodeURIComponent(subject)}.json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Errore API: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

async function fetchWorkDetails(workKey) {
  const url = `https://openlibrary.org${workKey}.json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Errore API dettagli: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

module.exports = { fetchBooksBySubject, fetchWorkDetails };


/***/ },

/***/ "./js/main.js"
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

const form = document.getElementById("searchForm");
const input = document.getElementById("subjectInput");
const resultsEl = document.getElementById("results");
const searchBtn = document.getElementById("searchBtn");

const { fetchBooksBySubject, fetchWorkDetails } = __webpack_require__(/*! ./api */ "./js/api.js");
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
} = __webpack_require__(/*! ./ui */ "./js/ui.js");

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




/***/ },

/***/ "./js/ui.js"
/*!******************!*\
  !*** ./js/ui.js ***!
  \******************/
(module) {

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



/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

.top-logo {
   position: relative;
  display: flex;
  justify-content: center;
  margin-top: 0px;
}

.top-logo img {
  height: 250px;
  width: auto;
}

main {
  max-width: 900px;
  margin: 0px auto 60px auto;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
}

/* TITOLO */
main .title {
  text-align: center;
  margin: 0 0 10px 0;
}

/* SOTTOTITOLO */
.subtitle {
  text-align: center;
  margin: 0 0 20px 0;
  color: #444;
}

/* FORM */
form {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
  justify-content: center;
}

input[type="text"] {
  flex: 1;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #ddd;
  outline: none;
  text-align: left;
}

input[type="text"]:focus {
  border-color: #bbb;
}

/* BOTTONI */
button {
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #ddd;
  background: #ffffff;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.08);
}

button:active {
  transform: translateY(1px) scale(0.98);
  box-shadow: none;
}

/* MESSAGGI */
#status {
  color: #333;
  margin: 10px 0;
  text-align: center;
}

#error {
  color: #c62828;
  margin: 10px 0;
  text-align: center;
}

/* RISULTATI */
#results {
  margin-top: 10px;
  border-radius: 14px;
  overflow: hidden;
  text-align: left;
}

#results > div {
  padding: 12px;
  border-bottom: 1px solid #eee;
  background: #fff;
  text-align: left;
}

#results > div:last-child {
  border-bottom: none;
}

/* DETTAGLI */
#details {
  margin-top: 18px;
  padding: 16px;
  background-color: #f3f3f3;
  border-radius: 14px;
}

/* INPUT ERRORE */
input.error {
  border-color: #e53935;
  animation: shake 0.3s;
}

/* ANIMAZIONE */
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

.details-btn {
  margin-top: 8px;
}

.book-card {
  position: relative;
}

.inline-details {
  margin-top: 12px;
  background: #f3f3f3;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  padding: 14px;
}

.inline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.close-details {
  border: none;
  background: transparent;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  padding: 2px 8px;
}

.inline-title {
  margin: 0 0 8px 0;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.spinner {
  width: 22px;
  height: 22px;
  border: 3px solid #ddd;
  border-top-color: #555;
  border-radius: 50%;
  margin: 8px auto;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.inline-loading {
  display: flex;
  align-items: center;
  gap: 10px;
}


`, "",{"version":3,"sources":["webpack://./css/style.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,SAAS;EACT,UAAU;AACZ;;AAEA;GACG,kBAAkB;EACnB,aAAa;EACb,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA,gBAAgB;AAChB;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;;AAEA,SAAS;AACT;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,uDAAuD;AACzD;;AAEA;EACE,2BAA2B;EAC3B,2CAA2C;AAC7C;;AAEA;EACE,sCAAsC;EACtC,gBAAgB;AAClB;;AAEA,aAAa;AACb;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,kBAAkB;AACpB;;AAEA,cAAc;AACd;EACE,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,aAAa;AACb;EACE,gBAAgB;EAChB,aAAa;EACb,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA,iBAAiB;AACjB;EACE,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA,eAAe;AACf;EACE,KAAK,wBAAwB,EAAE;EAC/B,MAAM,2BAA2B,EAAE;EACnC,MAAM,0BAA0B,EAAE;EAClC,MAAM,2BAA2B,EAAE;EACnC,OAAO,wBAAwB,EAAE;AACnC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,KAAK,yBAAyB,EAAE;AAClC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX","sourcesContent":["body {\n  font-family: Arial, sans-serif;\n  background-color: #f5f5f5;\n  margin: 0;\n  padding: 0;\n}\n\n.top-logo {\n   position: relative;\n  display: flex;\n  justify-content: center;\n  margin-top: 0px;\n}\n\n.top-logo img {\n  height: 250px;\n  width: auto;\n}\n\nmain {\n  max-width: 900px;\n  margin: 0px auto 60px auto;\n  background-color: #ffffff;\n  padding: 24px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n  text-align: center;\n}\n\n/* TITOLO */\nmain .title {\n  text-align: center;\n  margin: 0 0 10px 0;\n}\n\n/* SOTTOTITOLO */\n.subtitle {\n  text-align: center;\n  margin: 0 0 20px 0;\n  color: #444;\n}\n\n/* FORM */\nform {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 18px;\n  justify-content: center;\n}\n\ninput[type=\"text\"] {\n  flex: 1;\n  padding: 12px;\n  border-radius: 12px;\n  border: 1px solid #ddd;\n  outline: none;\n  text-align: left;\n}\n\ninput[type=\"text\"]:focus {\n  border-color: #bbb;\n}\n\n/* BOTTONI */\nbutton {\n  padding: 12px 16px;\n  border-radius: 12px;\n  border: 1px solid #ddd;\n  background: #ffffff;\n  cursor: pointer;\n  transition: transform 0.12s ease, box-shadow 0.12s ease;\n}\n\nbutton:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.08);\n}\n\nbutton:active {\n  transform: translateY(1px) scale(0.98);\n  box-shadow: none;\n}\n\n/* MESSAGGI */\n#status {\n  color: #333;\n  margin: 10px 0;\n  text-align: center;\n}\n\n#error {\n  color: #c62828;\n  margin: 10px 0;\n  text-align: center;\n}\n\n/* RISULTATI */\n#results {\n  margin-top: 10px;\n  border-radius: 14px;\n  overflow: hidden;\n  text-align: left;\n}\n\n#results > div {\n  padding: 12px;\n  border-bottom: 1px solid #eee;\n  background: #fff;\n  text-align: left;\n}\n\n#results > div:last-child {\n  border-bottom: none;\n}\n\n/* DETTAGLI */\n#details {\n  margin-top: 18px;\n  padding: 16px;\n  background-color: #f3f3f3;\n  border-radius: 14px;\n}\n\n/* INPUT ERRORE */\ninput.error {\n  border-color: #e53935;\n  animation: shake 0.3s;\n}\n\n/* ANIMAZIONE */\n@keyframes shake {\n  0% { transform: translateX(0); }\n  25% { transform: translateX(-5px); }\n  50% { transform: translateX(5px); }\n  75% { transform: translateX(-5px); }\n  100% { transform: translateX(0); }\n}\n\n.details-btn {\n  margin-top: 8px;\n}\n\n.book-card {\n  position: relative;\n}\n\n.inline-details {\n  margin-top: 12px;\n  background: #f3f3f3;\n  border: 1px solid #e6e6e6;\n  border-radius: 12px;\n  padding: 14px;\n}\n\n.inline-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.close-details {\n  border: none;\n  background: transparent;\n  font-size: 22px;\n  line-height: 1;\n  cursor: pointer;\n  padding: 2px 8px;\n}\n\n.inline-title {\n  margin: 0 0 8px 0;\n}\n\nbutton:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n.spinner {\n  width: 22px;\n  height: 22px;\n  border: 3px solid #ddd;\n  border-top-color: #555;\n  border-radius: 50%;\n  margin: 8px auto;\n  animation: spin 0.8s linear infinite;\n}\n\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n.inline-loading {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__(/*! ../css/style.css */ "./css/style.css");
__webpack_require__(/*! ../js/main.js */ "./js/main.js");


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map