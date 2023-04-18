function downloadCv() {
  fetch("gs-cv-final.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "gs-cv-final.pdf";
      alink.click();
    });
  });
}

export { downloadCv };
