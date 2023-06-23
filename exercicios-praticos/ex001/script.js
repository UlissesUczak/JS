function load() {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var date = new Date();
  //var hour = date.getHours();
  var hour =15;
  msg.innerHTML = `Agora são ${hour} horas.`;
  if (hour >= 0 && hour < 12) {
    img.src = "manha.jpg";
    document.body.style.background = '#FECA6C'
  } else if (hour >= 12 && hour < 18) {
    img.src = "tarde.jpg";
    document.body.style.background = '#9F836E'
  } else {
    img.src = "noite.jpg";
    document.body.style.background = '#175E8A'
  }
}
