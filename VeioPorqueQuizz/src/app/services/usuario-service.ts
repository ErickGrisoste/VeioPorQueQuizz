import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private api = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  cadastrar(usuario: any) {
    return this.http.post(this.api, usuario);
  }

  listar() {
    return this.http.get(this.api);
  }

  buscarPorId(id: string){
    return this.http.get(`${this.api}/${id}`);
  }

  atualizar(id: string, dados: any){
    return this.http.patch(`${this.api}/${id}`, dados);
  }

  deletar(id: string){
    return this.http.delete(`${this.api}/${id}`)
  }

}