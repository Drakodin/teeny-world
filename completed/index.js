// Uncomment the following line if you want the cloud to move
animate(document.getElementById("animated-cloud"));

// We have a modal in the source code, but we can't see it!
let modal = document.getElementById("info-modal");
let backdrop = document.getElementById("modal-backdrop");

/**
 * Makes the modal visible by removing a class that
 * hides the modal from the render tree.
 */
function showModal() {
    modal.classList.remove('modal-hidden');
    backdrop.classList.remove('modal-hidden');
}

/**
 * Hides the modal by adding a class that overrides
 * the default visibility with an !important declaration
 */
function hideModal() {
    modal.classList.add('modal-hidden');
    backdrop.classList.add('modal-hidden');
}

