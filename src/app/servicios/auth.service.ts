import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient: HttpClient) { }

  registrarUsuario(nuevoUsuario: Users): Observable<Users> {
    return this.httpClient.post<Users>(`${environment.apiUrl}/usuarios`, nuevoUsuario);
  }

  

  


  getAllUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }

  getUserById(username: string): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?username=${username}`);
  }

  isLoggedIn() {
    return sessionStorage.getItem('username') !== null;
  }

  getUserRole() {
    return sessionStorage.getItem('userrole') !== null ? sessionStorage.getItem('userrole')?.toString() : '';
  }

  isExistent() {
    return this.isLoggedIn();
  }

  logout() {
    // Limpiar cualquier información de autenticación, por ejemplo, eliminar los elementos de sessionStorage
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userrole');
  }
}
