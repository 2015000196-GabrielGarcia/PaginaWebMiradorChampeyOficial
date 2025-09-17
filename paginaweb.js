document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const platillo = document.getElementById("platillo").value;
  const cantidad = document.getElementById("cantidad").value;
  const direccion = document.getElementById("direccion").value;

  if (platillo && cantidad && direccion) {
    document.getElementById("mensajeOrden").textContent =
      `✅ Tu pedido de ${cantidad} ${platillo}(s) será enviado a ${direccion}. ¡Gracias por preferirnos!`;
  } else {
    document.getElementById("mensajeOrden").textContent =
      "⚠️ Por favor completa todos los campos.";
  }
});
