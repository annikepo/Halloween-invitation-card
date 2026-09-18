document.addEventListener("DOMContentLoaded", () => {
  const envelopeCard = document.getElementById("envelopeCard");

  if (!envelopeCard) {
    console.error("Could not find #envelopeCard element");
    return;
  }

  envelopeCard.addEventListener("click", () => {
    if (envelopeCard.classList.contains("state-closed")) {
      
      envelopeCard.classList.remove("state-closed");
      envelopeCard.classList.add("state-opening");

      
      setTimeout(() => {
        envelopeCard.classList.remove("state-opening");
        envelopeCard.classList.add("state-open");
      }, 250);
    } else {
      
      envelopeCard.classList.remove("state-open", "state-opening");
      envelopeCard.classList.add("state-closed");
    }
  });
});