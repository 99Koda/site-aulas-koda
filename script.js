const discord = "99koda";

function copyDiscord() {
  navigator.clipboard?.writeText(discord);
  alert("Discord copiado: " + discord);
}

function selectService(service) {
  const select = document.getElementById("service");
  [...select.options].forEach((option) => {
    if (option.text === service) select.value = option.text;
  });
  document.getElementById("agendar").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const service = document.getElementById("service").value;
  const name = document.getElementById("name").value.trim();
  const studentDiscord = document.getElementById("studentDiscord").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const note = document.getElementById("note").value.trim();

  const dateFormatted = new Date(date + "T12:00:00").toLocaleDateString("pt-BR");

  const message =
`Olá, Koda! Quero solicitar uma aula/análise.

Serviço: ${service}
Nome/Nick: ${name}
Meu Discord: ${studentDiscord}
Data desejada: ${dateFormatted}
Horário desejado: ${time}
${note ? "Observação: " + note : ""}

Aguardo a confirmação do horário e as instruções para pagamento via Pix.`;

  document.getElementById("message").value = message;
  document.getElementById("result").hidden = false;
  document.getElementById("result").scrollIntoView({ behavior: "smooth", block: "nearest" });
});

function copyMessage() {
  const message = document.getElementById("message");
  message.select();
  navigator.clipboard?.writeText(message.value);
  alert("Mensagem copiada! Agora envie para o Koda no Discord.");
}

document.getElementById("date").min = new Date().toISOString().split("T")[0];
