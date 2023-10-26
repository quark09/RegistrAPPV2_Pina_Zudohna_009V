import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard {

  constructor(
    private authservice: AuthService,
    private toast: ToastController,
    private router: Router
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authservice.isLoggedIn()) {
      this.showToast('Debe iniciar sesión'); // Muestra un mensaje de tostada si el usuario no está autenticado.
      this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión.
      return false; // Evita que se permita el acceso a la ruta protegida.
    }
    // Si el usuario está autenticado, permite el acceso a la ruta protegida.
    return true;
  }

  async showToast(msg: any) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
