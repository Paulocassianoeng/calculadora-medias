// Objetivo: Adicionar uma nova linha à tabela de atividades.
function addRow() {
  const table = document
    .getElementById("activities-table")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.innerHTML = '<input type="text" name="atividade" />';
  cell2.innerHTML = '<input type="number" name="nota" />';
  cell3.innerHTML = '<button onclick="removeRow(this)">Remover</button>';
}

// Objetivo: Remover a linha da tabela de atividades.
function removeRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Objetivo: Calcular a média das notas inseridas na tabela.
function calculateAverage() {
  const table = document.getElementById("activities-table");
  const rows = table
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");
  let total = 0;
  let count = 0;
  let hasError = false;

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    const nota = parseFloat(cells[1].getElementsByTagName("input")[0].value);

    if (isNaN(nota)) {
      hasError = true; // Indica que houve um erro.
      cells[1].getElementsByTagName("input")[0].style.borderColor = "red";
    } else {
      total += nota;
      count++;
      cells[1].getElementsByTagName("input")[0].style.borderColor = "";
    }
  }

  // Se houver algum erro, exibe um alerta.
  if (hasError) {
    alert("Por favor, insira um número válido em todas as notas.");
  } else {
    const average = total / count;
    const resultText = `Média: ${average.toFixed(2)}`;
    document.getElementById("average-result").innerText = resultText;

    // Exibe a imagem de aprovado ou reprovado.
    const resultImage = document.getElementById("result-image");
    if (average >= 6) {
      resultImage.src = "./images/aprovado.png";
      resultImage.alt = "Aprovado";
    } else {
      resultImage.src = "./images/reprovado.png";
      resultImage.alt = "Reprovado";
    }
    resultImage.style.display = "block";
  }
}
