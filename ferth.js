function submitSearch(e) {
  pageNumber = 0;
  fetchResults(e);
}

function fetchResults(e) {
  // Use preventDefault() to stop the form submitting
  e.preventDefault();

  // Assemble the full URL
  let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;

  if (startDate.value !== "") {
    url = `${url}&begin_date=${startDate.value}`;
  }

  if (endDate.value !== "") {
    url = `${url}&end_date=${endDate.value}`;
  }
}
