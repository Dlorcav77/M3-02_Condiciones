const verificar   = document.querySelector("#verificar");
const mensaje     = document.querySelector("#mensaje");
const inputImg1   = document.querySelector("#iImg1");
const inputImg2   = document.querySelector("#iImg2");
const inputImg3   = document.querySelector("#iImg3");

verificar.addEventListener("click", () => {
  const img1 = +inputImg1.value;
  const img2 = +inputImg2.value;
  const img3 = +inputImg3.value;
  const suma = img1 + img2 + img3;

  if(suma > 10)
  {
    mensaje.textContent= 'Llevas demasiados Stickers' ;
    return;
  }
  if(suma === 0)
  {
    mensaje.textContent= 'no puedes seleccionar 0 Stickers' ;
    return;
  }
  mensaje.textContent= "Llevas " + suma + " Stickers";

  
});