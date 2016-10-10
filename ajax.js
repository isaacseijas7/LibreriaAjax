(function ( w, d, n ) {

	'use strict';

	const READY_STATE_COMPLETE = 4,
		  OK = 200;

	class Ajax{

		constructor() {

			if (w.XMLHttpRequest) {

				this.ajax = new   XMLHttpRequest();

			}else if (w.ActiveXObject) {

				this.ajax =  ActiveXObject("Microsoft.XMLHTTP");

			};

		}

		ejecutar( objectJSON ){

			this.ajax.open( `${objectJSON.type}`, `${objectJSON.url}` );

			this.ajax.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );

			this.ajax.send(objectJSON.data);

			this.ajax.onreadystatechange = function () {

				if (typeof objectJSON.loading == 'function') {

					objectJSON.loading();

				}
				
				if (this.readyState == READY_STATE_COMPLETE) {
					if (this.status == OK) {

						if (typeof objectJSON.success == 'function') {
							objectJSON.success(this.responseText);
						}
					}
				}

			};

		}

	}
	if ( typeof w.ajax==='undefined' ) {
		w.ajax = new Ajax();
	}else {
		console.log( 'Ya existe la librería ajax' );
	}
})( window, document, navigator );