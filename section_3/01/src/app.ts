const userName = "ben";
let numbers = [1, 2, 3];

// wait for dom to load
setTimeout(() => {
  const button = document.querySelector("button")!;

  button?.addEventListener("click", () => {
    console.log("Clicked");
  });
}, 100);
