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
