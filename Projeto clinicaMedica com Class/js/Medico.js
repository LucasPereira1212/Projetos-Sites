import { Pessoa } from "./Pessoa.js";

export class Medico extends Pessoa {
  constructor(nome, idade, cpf, especialidade) {
    super(nome, idade, cpf);
    this.especialidade = especialidade;
  }

  agendarConsulta(paciente, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          `Consulta marcada com ${this.nome} para ${paciente.nome} em ${data}`
        );
      }, 1000);
    });
  }
}
