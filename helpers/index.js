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

function sendEmail() {
  const userAgent = navigator.userAgent;
  const mobileRegex = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/;
  if (mobileRegex.test(userAgent)) {
    window.open(
      "mailto:Andy.Notfound@gmail.com?subject=Hi Gohand, I am interested in working with you",
      "_blank"
    );
  } else {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=Andy.Notfound@gmail.com&su=Hi Gohand, I am interested in working with you"
    );
  }
}

export { downloadCv, sendEmail };
