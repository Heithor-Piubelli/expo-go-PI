//Classe Abstrata para Serviços de API
export abstract class ApiService<T> {
  //Propriedades protegidas
  protected baseUrl: string;
  protected headers: HeadersInit;

  //Construtor
  constructor(baseUrl: string, token: string) {
    this.baseUrl = baseUrl;
    this.headers = {
      "Content-Type": "application/json",
      Authorization: ` ${token}`,
    };
  }

  //Métodos abstratos
  abstract getById(id: number): Promise<T>;
  abstract getAll(): Promise<T[]>;
  abstract create(data: T): Promise<T>;
  abstract update(id: number, data: Partial<T>): Promise<T>;
  abstract delete(id: number): Promise<void>;

  //Genérico <T> representa o tipo de dado que o
  // serviço irá manipular
}
