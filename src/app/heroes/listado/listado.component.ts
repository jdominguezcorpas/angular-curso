import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  heroes : string[] = ['Spiderman','Ironman','Hulk','Thror'];
  heroesBorrados : string[] = [];
  hayActivo : boolean = true;
  hayBorrado : boolean = false;

  borrarHeroe() {
    const borrado = this.heroes.pop();
    if (borrado != undefined) this.heroesBorrados.push(borrado);
    if (this.heroes.length > 0) {
      this.hayActivo = true;
    } else {
      this.hayActivo = false;
    }
    if (this.heroesBorrados.length > 0) {
      this.hayBorrado = true;
    } else {
      this.hayBorrado = false;
    }
  }
}
