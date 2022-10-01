const scrollContainer = document.querySelector("body");

scrollContainer.addEventListener("wheel", (evt) => {
  window.scrollBy({ left: -evt.deltaY });
});
