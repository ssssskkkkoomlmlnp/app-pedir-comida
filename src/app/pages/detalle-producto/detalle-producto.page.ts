import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constant/categorias';
import { Producto } from 'src/app/core/interfaces/producto';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage {

  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService: CartService
    ) { 
    activatedRoute.params.subscribe(params => {
      this.buscarProdcto(params['nombre'])
    })
  }

  cantidad=1;

  buscarProdcto(nombreProductoABuscar:string){
    CATEGORIAS
    for (let i = 0; i < CATEGORIAS.length; i++) {
      const categoriaActual = CATEGORIAS[i];
      for (let j = 0; j < categoriaActual.productos.length; j++) {
        const productoActual = categoriaActual.productos[j];
        if(productoActual.nombre === nombreProductoABuscar){
          this.producto = productoActual
        }
       // console.log(productoActual.nombre, nombreProductoABuscar,productoActual.nombre === nombreProductoABuscar)
      }    
    }
  }

  

  ngOnInit() {
  }

  producto:Producto = { 
    imagen: 'def',
    nombre: 'nombre producto',
    descripcion: 'descripcion producto',
    precio: 2000
  }
}
