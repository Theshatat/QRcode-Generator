let qrText = document.querySelector(".inputs input");
let qrImg = document.querySelector(".qrcode img");
let qrImgBox = document.querySelector(".qrcode");
let btn = document.querySelector(".btn button");

function generateQRCode() {
  if (qrText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    qrImgBox.classList.add("show");
  }
}
