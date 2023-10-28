import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  usuarios: any[] = [

    {
      "id": 1,
      "username": "jguzman",
      "password": "clave1",
      "nombreCompleto": "Jorge Guzman",
      "email": "j.guzman@profesor.duoc.cl",
      "asignaturas": ["Deep Learning", "Machine Learning"],
      "role": "docente",
      "isactive": true,
      "sede": "Santiago",
      "periodoAcademico": "2023A"
    },
    {
      "id": 2,
      "username": "vpoblete",
      "password": "clave2",
      "nombreCompleto": "Viviana Poblete",
      "email": "v.poblete@profesor.duoc.cl",
      "asignaturas": ["Programacion Web", "Progrmacion de Aplicaciones Moviles"],
      "role": "docente",
      "isactive": true,
      "sede": "Valparaíso",
      "periodoAcademico": "2023A"
    },
    {
      "id": 3,
      "username": "formazabal",
      "password": "clave3",
      "nombreCompleto": "Felipe Ormazabal",
      "email": "f.ormazabal@profesor.duoc.cl",
      "asignaturas": ["Mineria de Datos", "Big Data"],
      "role": "docente",
      "isactive": true,
      "sede": "Concepción",
      "periodoAcademico": "2023A"
    },
    {
      "id": 4,
      "username": "mpina",
      "password": "clave4",
      "nombreCompleto": "Mauricio Pïña",
      "email": "m.pina@duoc.cl",
      "role": "alumno",
      "isactive": true,
      "sede": "Santiago",
      "periodoAcademico": "2023A"
    },
    {
      "id": 5,
      "username": "czudohna",
      "password": "clave5",
      "nombreCompleto": "Cristian Zudohna",
      "email": "c.zudohna@duoc.cl",
      "role": "alumno",
      "isactive": true,
      "sede": "Valparaíso",
      "periodoAcademico": "2023A"
    },
    {
      "id": 6,
      "username": "vhernandez",
      "password": "clave6",
      "nombreCompleto": "Valentino Hernandez",
      "email": "v.hernandez@duoc.cl",
      "role": "alumno",
      "isactive": true,
      "sede": "Concepción",
      "periodoAcademico": "2023A"
    }
];

  
constructor(
  private fb: FormBuilder,
  private toastCtrl: ToastController,
  private router: Router,
  private authService: AuthService
) {
  this.loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
  });
}

async ingresar(event: Event) {
  event.preventDefault();
  
  if (this.loginForm.valid) {
    const nombreUsuario = this.loginForm.get('username')?.value;
    const contraseña = this.loginForm.get('password')?.value;

    // Llamar al servicio para obtener la lista de usuarios
    const usuariosResponse = await this.authService.getAllUsers().toPromise();
    const usuarios = usuariosResponse || []; // asegurarse de que no sea undefined

    // Verificar si el usuario existe en la lista
    const usuario = usuarios.find(user => user.username === nombreUsuario);

    if (!usuario) {
      this.mostrarToast('Usuario no existe, debe registrarse');
    } else if (usuario.password !== contraseña) {
      this.mostrarToast('Revise sus credenciales');
    } else {
      // Usuario autenticado, realiza las operaciones necesarias
      sessionStorage.setItem('username', nombreUsuario);
      sessionStorage.setItem('userrole', usuario.role);

      // Redirigir según el rol
      this.redirigirSegunRol();
    }
  }
}

redirigirSegunRol() {
  const role = sessionStorage.getItem('userrole');
  if (role === 'docente') {
    this.router.navigate(['/homedocente']);
  } else if (role === 'alumno') {
    this.router.navigate(['/homealumno']);
  }


  this.mostrarToast('Has iniciado sesión exitosamente');
}

ngOnInit() {

}



async mostrarToast(message: string) {
  const nombreUsuario = sessionStorage.getItem('username') || '';

  const toast = await this.toastCtrl.create({
    message: `Hola, ${nombreUsuario} ${message}`, // Modificado aquí
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
}