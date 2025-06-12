window.onload = () => {
  const ref = new URLSearchParams(window.location.search).get('ref') || 'default';
  const link = `https://paiddail.com/app?ref=${ref}`;
  document.getElementById('referral-link').innerText = link;
  new QRCode(document.getElementById("qrcode"), {
    text: link,
    width: 128,
    height: 128
  });
};