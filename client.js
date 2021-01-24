const mensajes=document.querySelector("#mensajes");
const msgForm=document.querySelector("#msgForm");
const socket = io('https://chat-io.vercel.app:3000');

socket.on('message',data=>{
	console.log(data);
	agregarMensaje(data);
});

msgForm.addEventListener('submit', e=>{
	e.preventDefault();
	socket.emit('chatmsg', msgForm.msg.value);
	msgForm.msg.value="";
});

function agregarMensaje(mensaje){
	const html=`<div>${mensaje}</div>`;
	mensajes.innerHTML += html;
}
