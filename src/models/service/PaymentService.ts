import { IPayment } from "../interface/IPayment";
import { ApiService } from "./ApiService";

export default class PaymentService extends ApiService<IPayment> {
  constructor() {
    super(
      "http://10.63.48.45:8080/pagamentos",
      "da39a3ee5e6b4b0d3255bfef95601890afd80709"
    );
  }

  // Retorna { id, client_secret }
  async paymentIntent(
    valor: number
  ): Promise<{ id: string; client_secret: string }> { //client_secret é meio que um extrato gerado para o cliente
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ valor }),
    });

    const text = await response.text();
    console.log("Resposta POST:", text);

    if (!response.ok) throw new Error(`HTTP ${response.status}: ${text}`);

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("JSON inválido: " + text);
    }

    if (!data.id || !data.client_secret) {
      throw new Error("Faltam id ou client_secret: " + JSON.stringify(data));
    }

    return { id: data.id, client_secret: data.client_secret };
  }

  // Usa o ID do PaymentIntent
  async confirmPayment(paymentIntentId: string): Promise<IPayment> {
    const response = await fetch(this.baseUrl, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify({ id_pagamentos: paymentIntentId }),
    });

    const text = await response.text();
    console.log("Resposta PUT:", text);

    if (!response.ok) throw new Error(`Falha na confirmação: ${text}`);

    return JSON.parse(text);
  }
  //Métodos não utilizados
  getById(): Promise<IPayment> {
    throw new Error("Não implementado");
  }
  getAll(): Promise<IPayment[]> {
    throw new Error("Não implementado");
  }
  create(): Promise<IPayment> {
    throw new Error("Não implementado");
  }
  update(): Promise<IPayment> {
    throw new Error("Não implementado");
  }
  delete(): Promise<void> {
    throw new Error("Não implementado");
  }
}
