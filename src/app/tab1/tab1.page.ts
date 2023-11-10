import { Component } from '@angular/core';
import { Categoria } from '../core/interfaces/Categoria';
import { CATEGORIAS } from '../core/constant/categorias';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

categorias:Categoria[] = CATEGORIAS
}
