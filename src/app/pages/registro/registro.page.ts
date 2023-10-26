import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;
  usuarios: any[] = [
      {
        "id": 1,
        "username": "jguzman",
        "password": "clave1",
        "nombreCompleto": "Jorge Guzman",
        "email": "j.guzman@profesor.duoc.cl",
        "asignatura1": "Deep Learning",
        "asignatura2": "Machine Learning",
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
        "asignatura1": "Programacion Web", 
        "asignatura2": "Progrmacion de Aplicaciones Moviles",
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
        "asignatura1": "Mineria de Datos", 
        "asignatura2": "Big Data",
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
        "asignatura1": "Deep Learning",
        "asignatura2": "Machine Learning",
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
        "asignatura1": "Mineria de Datos", 
        "asignatura2": "Big Data",
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
        "asignatura1": "Mineria de Datos", 
        "asignatura2": "Big Data",
        "role": "alumno",
        "isactive": true,
        "sede": "Concepción",
        "periodoAcademico": "2023A"
      },
    ];
    usuario: any;
    inactivityTimer: any;
    
    constructor(private fb: FormBuilder, private toastCtrl: ToastController, private router: Router) {
      this.formularioRegistro = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(11)]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
        nombreCompleto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
        role: ['', [Validators.required]],
        asignatura1: ['', [Validators.required]], 
        asignatura2: ['', [Validators.required]],
        isactive: [true],
        sede: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        periodoAcademico: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(6)]]
      });
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
  
    async crearCuenta(event: Event) {
      if (event instanceof KeyboardEvent && event.key === "Enter") {
        event.preventDefault();
        if (this.formularioRegistro.valid) {
          const nombreCompleto = this.formularioRegistro.get('nombreCompleto')?.value;
          const nombreUsuario = this.formularioRegistro.get('username')?.value;
          const email = this.formularioRegistro.get('email ')?.value;
          const rol = this.formularioRegistro.get('role')?.value;
          const contraseña = this.formularioRegistro.get('password')?.value;
          const sede = this.formularioRegistro.get('sede')?.value;
          const asignaturas1 = this.formularioRegistro.get('asignaturas1')?.value;
          const asignaturas2 = this.formularioRegistro.get('asignaturas2')?.value;
          const periodoAcademico = this.formularioRegistro.get('periodoAcademico')?.value;

  
          const usuario = this.usuarios.find(u => u.username === nombreUsuario);
  
          if (usuario.role === 'docente') {
            this.router.navigate(['/homedocente']);
          }

          if (usuario.role === 'alumno') {
            this.router.navigate(['/homealumno']);
          }
  
          this.usuario = usuario;
          this.mostrarToast('Te has registrado exitosamente');

        }
      }
    }
  
    ngOnInit() {
    }
  }