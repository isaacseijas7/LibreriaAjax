(function ( w, d, n ) {
	
	'use strict';

	class Acciones{
		
		constructor(){

		}

		showModal (modal) {
			var btnCerrarModal = modal.querySelectorAll('.modal_cerrar');
			modal.classList.add('modal__show');
			modal.style.overflow = 'auto';
			d.querySelector('body').style.overflow = 'hidden';
			for (var i = 0; i < btnCerrarModal.length; i++) {
				btnCerrarModal[i].addEventListener('click' , this.hiddenModal.bind(modal, modal), false)
			}
		}

		hiddenModal (modal) {
			modal.classList.remove('modal__show');
			modal.style.overflow = 'hidden';
			d.querySelector('body').style.overflow = 'auto';
		}

		focusElement (element, time ) {
			setTimeout(function () {
				element.focus();
			}, time)
		}

		serialize(frm){
			let datos = '';
			for (var i = 0; i < frm.elements.length-1; i++) {
	 			datos += frm.elements[i].name+'='+frm.elements[i].value+'&';
			}
			return datos;
		}

		mensajes(tipo, msj){
			let mensaje = `<div class="mensaje__contenedor ${tipo}">`;
					mensaje += `<span class="btn_mensaje_cerrar" onclick="this.parentNode.style.display = 'none'">X</span>`;
					mensaje += `<div class="mensaje">`;
						mensaje += `${msj}`;
					mensaje += `</div>`;
				mensaje += `</div>`;
			return mensaje;
		}

	}

	if (typeof w.acciones==='undefined') {
		w.acciones = new Acciones();
	}else {
		console.log('Ya existe la librería acciones');
	}

})( window, document, navigator );