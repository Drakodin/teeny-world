// DO NOT MODIFY THIS FILE
// This file provides simple animations to elements on the screen

/**
 * Applies a simple sliding animation infinitely on clouds
 * @param {HTMLElement} node The cloud element on the screen.
 */
function animate(node) {
    if (node.classList.contains("anim-slide")) {
        node.classList.remove("anim-slide");
    } else {
        node.classList.add("anim-slide");
    }
}