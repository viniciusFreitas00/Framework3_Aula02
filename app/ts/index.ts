$("#btnLer").click(() => {
  $.ajax({
    method: "GET",
    url: "http://localhost:8081/Disciplinas/",
    success: montarTabela,
  });
});

function montarTabela(e) {
  console.log(e);
}
