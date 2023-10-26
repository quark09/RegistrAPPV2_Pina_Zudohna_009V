import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

interface Componentes {
  icon: string;
  nombre: string;
  redirectTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componentes[] = [
    {
      icon: 'timer-outline',
      nombre: 'Noticias',
      redirectTo: '/noticias'
    },
    {
      icon: 'card-outline',
      nombre: 'Credenciales',
      redirectTo: '/roles'
    },
    {
      icon: 'scan-outline',
      nombre: 'Registrar Asistencia',
      redirectTo: '/escanear-qr'
    },
    {
      icon: 'people-outline',
      nombre: 'Sobre Nosotros',
      redirectTo: '/nosotros'
    },
    {
      icon: 'build-outline',
      nombre: 'Ajustes',
      redirectTo: '/ajustes'
    },
  ]
}
