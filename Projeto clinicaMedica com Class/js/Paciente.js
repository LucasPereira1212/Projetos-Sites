import { Pessoa } from "./Pessoa.js";

export class Paciente extends Pessoa {
  constructor(nome, idade, cpf) {
    super(nome, idade, cpf);
  }
}
