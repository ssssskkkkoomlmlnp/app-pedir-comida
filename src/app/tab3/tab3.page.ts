import { Component } from '@angular/core';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
list: any;

  constructor(public cartService:CartService) {} 


  crearMensaje ():string{
    let parteProductos = '';
    this.cartService.carrito.forEach(productoCarrito => {
      const mensajeProducto = `- ${productoCarrito.producto.nombre} - ${productoCarrito.cantidad}
      `;
      parteProductos = parteProductos + mensajeProducto;
    })
    // solo se puede usar el foreach en arrays

    const primeraParte = "http://wa.me/+54341303404?text=";
    // uso las esas comillas para crear strings que respete los saltos de linea ``
    const segundaPate = `Hola, quiero hacer un pedido:
 ${parteProductos}
    
Mis datos:
-Nombre : NOMBRE
-Direccion: DIRECCION

Notas:
`; 
    const mensaje = encodeURI(primeraParte+segundaPate);
    return mensaje;
  }

  realizarPedido(){
    window.open(this.crearMensaje(), '_blank');
    this.cartService.vaciarCarrito();
  }
}
