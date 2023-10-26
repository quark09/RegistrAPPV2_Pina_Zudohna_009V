import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homedocente',
  templateUrl: './homedocente.page.html',
  styleUrls: ['./homedocente.page.scss'],
})
export class HomedocentePage implements OnInit {
  inactivityTimer: any;
  usuario: any;


  constructor(
    private menuCtrl: MenuController,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  mostrarMenu() {
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }

  async mostrarToast(message: string) {
    const nombreUsuario = this.usuario ? this.usuario.username : '';

    const toast = await this.toastCtrl.create({
      message: `¡Hola! ${nombreUsuario} ${message}`,
      duration: 2000,
      color: 'success',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'happy',
        },
      ],
    });
    toast.present();
  }

  // Reiniciar el temporizador de inactividad
  reiniciarTemporizador() {
    clearTimeout(this.inactivityTimer);
    this.inactivityTimer = setTimeout(() => {
      this.mostrarToast('Usuario Inactivo, será redirigido al inicio de sesión');
      this.router.navigateByUrl('/login');
    }, 60 * 1000);
  }

  ngOnInit() {
    this.inactivityTimer = setTimeout(() => {
      this.mostrarToast('Usuario Inactivo, será redirigido al inicio de sesión');
      this.router.navigateByUrl('/login');
    }, 60 * 1000);
  }
}
