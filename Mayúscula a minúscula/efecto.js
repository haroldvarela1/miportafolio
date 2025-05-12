function convertir() {
  const texto = document.getElementById('textoUsuario').value;
  const mayusculas = texto.toUpperCase();
  document.getElementById('resultado').textContent = mayusculas;
}