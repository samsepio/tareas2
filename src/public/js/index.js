
let titulo=document.getElementById('titulo');
let descripcion=document.getElementById('descripcion');
let errorA=document.getElementById('errorA');
let errorB=document.getElementById('errorB');
let agregar=document.getElementById('agregar');

agregar.addEventListener('click',(evento)=>{
	if(titulo.value==""){
		errorA.innerHTML+='campo hobligatorio';
		errorA.style.color="red";
		errorA.style.fontFamily="sans-serif";
		evento.preventDefault();
	};
	if(descripcion.value=""){
		errorB.innerHTML+='campo hobligatorio';
		errorB.style.color="red";
		errorB.style.fontFamily="sans-serif";
		evento.preventDefault();
	};
});
