document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector("#envelopeCard");
  const button = document.querySelector("#animateButton");

  if (!card || !button) {
    console.error("Card or button was not found.");
    return;
  }

  let isOpening = false;
  let isOpen = false;

  function openInvitation() {
    if (isOpening || isOpen) {
      return;
    }

    isOpening = true;

    card.classList.remove("state-closed");
    card.classList.add("state-opening");

    window.setTimeout(() => {
      card.classList.remove("state-opening");
      card.classList.add("state-open");

      button.disabled = false;
      button.textContent = "Close invitation";

      isOpening = false;
      isOpen = true;
    }, 1800);
  }

  function closeInvitation() {
    if (isOpening || !isOpen) {
      return;
    }

    card.classList.remove("state-open");
    card.classList.add("state-closed");

    button.textContent = "Open invitation";
    isOpen = false;
  }

  /*
    Clicking the closed envelope starts the opening animation.
  */
  card.addEventListener("click", (event) => {
    if (event.target === button) {
      return;
    }

    if (!isOpen) {
      openInvitation();
    }
  });

  /*
    The button works after the invitation has opened.
  */
  button.addEventListener("click", (event) => {
    event.stopPropagation();

    if (isOpen) {
      closeInvitation();
    } else {
      openInvitation();
    }
  });
});