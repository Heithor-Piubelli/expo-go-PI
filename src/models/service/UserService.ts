//Classe Concreta para Serviços de Produto

import { User } from "../types/User";
import { ApiService } from "./ApiService";

export default class UserService extends ApiService<User> {
  
  //Construtor
  constructor() {
    super(
      "http://10.63.48.45:8080/clientes",
      "da39a3ee5e6b4b0d3255bfef95601890afd80709"
    );
  }

   async getAll(email?: string, password?: string): Promise<User[]> {
    const response = await fetch(
      this.baseUrl + `/?email=${email}&senha=${password}`,
      {
        method: "GET",
        headers: this.headers,
      }
    );
    const json = await response.json();
    return json.data;
  }

  //Implementação dos métodos abstratos
  async getById(id: number): Promise<User> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "GET",
      headers: this.headers,
    });
    return response.json();
  }

  
  async create(data: User): Promise<User> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    const response = await fetch(`${this.baseUrl}${id}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async delete(id: number): Promise<void> {
    await fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
      headers: this.headers,
    });
  }
}
