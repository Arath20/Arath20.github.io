window.onload=()=>{
 let usuario = JSON.parse(localStorage.getItem("usuario"));
 document.getElementById("imgUser").attributes.src="./img/"+usuario.imagen;
 let arrayTw=[];
 //console.log(usuario);
 //document.getElementById("usuario").innerHTML="Hola"+usuario.nombre;
let txtTweet=document.getElementById("txtTweet");
let btnTweet=document.getElementById("btnTweet");
btnTweet.addEventListener('click',(evt)=>{
  if(txtTweet.ariaValueMax.trim() !=""){
      let obj = {
       img:usuario.imagen,
       nombre:usuario.nombre,
       mensaje:txtTweet.value,
       username:usuario.username,

      };
      arrayTw.push(obj);
     crearPost();
     txtTweet.value="";
  }
});
txtTweet.addEventListener('keyup',(evt)=>{

});
function crearPost(datos){
    console.log(arrayTw);
    var todo="";
arrayTw.forEach(el=>{
 todo+=`<div class="post">
 <div>
     <img src="img/${el.img}" alt="" class="imgUser">
 </div>
 <div>
     <h2> 
         <span>${el.nombre}</span>
         <span>${el.username}</span>
     </h2>
     <div class="textTweet">
     ${el.mensaje}
     </div>
 </div>
</div>`;
});
console.log(todo);
document.getElementById("posts").innerHTML=todo;
}
};