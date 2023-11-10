import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constant/categorias';
import { Categoria } from 'src/app/core/interfaces/Categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {
  
  categoria : Categoria | undefined;

  constructor(
    private activatedRoute : ActivatedRoute
  ) { 
    activatedRoute.params.subscribe(params => {
    this.categoria = CATEGORIAS.find (categoria => categoria.nombre === params['nombre'])
    })
  }


}
