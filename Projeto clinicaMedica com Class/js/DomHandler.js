export class DomHandler {
  static atualizarListaPaciente(pacientes) {
    const selectPaciente = document.getElementById("selectPaciente");
    selectPaciente.innerHTML = `<option>--Selecione o paciente--</option>`;

    pacientes.forEach((paciente) => {
      const option = document.createElement("option");
      option.value = paciente.nome;
      option.textContent = paciente.nome;
      selectPaciente.appendChild(option);
    });
  }

  static atualizarListaMedico(medicos) {
    const selectMedico = document.getElementById("selectMedico");
    selectMedico.innerHTML = `<option>--Selecione um Médico--</option>`;

    medicos.forEach((medico) => {
      const option = document.createElement("option");
      option.value = medico.nome;
      option.textContent = `${medico.nome} - ${medico.especialidade}`;
      selectMedico.appendChild(option);
    });
  }

  static exibirConsulta(mensagem) {
    const listaConsulta = document.getElementById("listaConsultas");

    const consultas = Array.from(listaConsulta.getElementsByTagName("li"));
    const consultaExiste = consultas.some((li) =>
      li.textContent.includes(mensagem)
    );

    if (consultaExiste) {
      alert("Essa consulta já foi agendada");
      return;
    }

    const li = document.createElement("li");
    li.classList.add("consulta-item");
    li.textContent = mensagem;

    const btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.classList.add("btn-cancelar");

    btnCancelar.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(btnCancelar);
    listaConsulta.appendChild(li);
  }
}
