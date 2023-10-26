import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-credenciales',
  templateUrl: 'credenciales.page.html',
  styleUrls: ['credenciales.page.scss'],
})
export class CredencialesPage {

  constructor(private menuCtrl: MenuController) {}

  mostrarMenu(){
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }

}
