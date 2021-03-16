$("#btnLer").click(() => {
  $.ajax({
    method: "GET",
    url: "http://localhost:8081/Disciplinas/",
    success: (e) => {
      $("#tbody").html("");
      e.forEach((element) => {
        montarTabela(element);
      });
    },
  });
});

function montarTabela(data) {
  $("#tbody").append(`
      <tr>
        <td scope="col">${data.id}</td>
        <td scope="col">${data.nome}</td>
        <td scope="col">${data.DataInicio}</td>
        <td scope="col">${data.Valor}</td>
        <td scope="col">${data.Optativa}</td>
      </tr>`);
}
