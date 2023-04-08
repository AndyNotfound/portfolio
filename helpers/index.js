async function fetchData({ url, method = "GET" }) {
  let base_url;
  if (typeof window !== "undefined") {
    base_url = window.location.origin;
  } 
  else {
    base_url = "https://gohand-silitonga.vercel.app/";
  }
  const response = await fetch(`${base_url}/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  if (response.ok) return jsonResponse;
  throw new Error(JSON.stringify(jsonResponse));
}

function downloadCv() {
  // using Java Script method to get PDF file
  fetch("gs-cv-final.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "gs-cv-final.pdf";
      alink.click();
    });
  });
}

export { fetchData, downloadCv };
