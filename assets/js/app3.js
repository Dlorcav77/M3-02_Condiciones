const cod1      = document.querySelector("#cod1");
const cod2      = document.querySelector("#cod2");
const cod3      = document.querySelector("#cod3");
const ingresar  = document.querySelector("#ingresar");
const mensaje   = document.querySelector("#mensaje");

ingresar.addEventListener("click", () => {

  const codigo1 = +cod1.value;
  const codigo2 = +cod2.value;
  const codigo3 = +cod3.value;

  if(codigo1===9 && codigo2===9 && codigo3===1)
  {
    mensaje.textContent= 'PassWord 1 correcto' ;
    return;
  }
  if(codigo1===7 && codigo2===1 && codigo3===4)
  {
    mensaje.textContent= 'PassWord 2 correcto' ;
    return;
  }

  mensaje.textContent= 'PassWord incorrecto' ;
});