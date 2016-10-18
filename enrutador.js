(function ( w, d, n, xhr ) {
	
	'use strict';

	class Enrutador{
		
		constructor( marco ){

			this.marco = marco;
			this.rutas = {};

		}

		addRuta( ruta, plantilla, controlador, cargar ){
			
			this.rutas[ruta] = {
				plantilla: plantilla, 
				controlador: controlador, 
				cargar: cargar
			}

		}

		manejadorRutas(){
			let hash = w.location.hash.substring(1) || '/',
				destino = this.rutas[hash],
				self = this;

			if (destino && destino.plantilla) {
				xhr.ejecutar({
					type: 'GET',
					url: destino.plantilla,
					loading: function(){
						self.marco.innerHTML = 'Cargando vista...';
					},
					success: function(datos){
						self.marco.innerHTML = datos;

						if (typeof self.rutas[hash].cargar === 'function' ) {
							self.rutas[hash].cargar();	
						}

					}
				});
			}else {
				w.location.hash = '#/';
			}

		}

	}

	var marco = d.querySelector('#vistas');	

	if (typeof w.enrutador==='undefined') {
		w.enrutador = new Enrutador(marco);
		w.addEventListener('load', enrutador.manejadorRutas.bind(enrutador), false);
		w.addEventListener('hashchange', enrutador.manejadorRutas.bind(enrutador), false);
	}else {
		console.log('Ya existe la librería ajax');
	}

})( window, document, navigator, ajax );