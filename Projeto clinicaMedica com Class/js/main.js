import { Paciente } from "./Paciente.js";
import { Medico } from "./Medico.js";
import { DomHandler } from "./DomHandler.js";

let medicos = [];
let pacientes = [];

async function carregarDados() {
  try {
    const responseMedico = await fetch("./data/medicos.json");
    const medicosData = await responseMedico.json();

    medicos = medicosData.map(
      (medico) =>
        new Medico(medico.nome, medico.idade, medico.cpf, medico.especialidade)
    );

    DomHandler.atualizarListaMedico(medicos);

    const responsePaciente = await fetch("./data/pacientes.json");
    const pacientesData = await responsePaciente.json();

    pacientes = pacientesData.map(
      ({ nome, idade, cpf }) => new Paciente(nome, idade, cpf)
    );

    DomHandler.atualizarListaPaciente(pacientes);
  } catch (error) {
    console.error("Erro ao carregar os dados", error);
  }
}

function formataData(data) {
  const [ano, mes, dia] = data.split("-");

  return `${dia}/${mes}/${ano}`;
}

function agendarConsulta() {
  const pacienteSelecionado = document.getElementById("selectPaciente").value;
  const medicoSelecionado = document.getElementById("selectMedico").value;
  const dataSelecionado = document.getElementById("inputData").value;

  if (!pacienteSelecionado || !medicoSelecionado || !dataSelecionado) {
    alert("Por favor, selecione um paciente, um médico e uma data");
  }

  const paciente = pacientes.find((p) => p.nome === pacienteSelecionado);
  const medico = medicos.find((m) => m.nome === medicoSelecionado);

  if (paciente && medico) {
    medico
      .agendarConsulta(paciente, formataData(dataSelecionado))
      .then((mensagem) => {
        DomHandler.exibirConsulta(mensagem);
      });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  carregarDados();
  document
    .getElementById("btnAgendar")
    .addEventListener("click", agendarConsulta);
});
