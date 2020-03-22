setTimeout(() => {
  // Wait for dom to load
  const Logger = (logString: string) => {
    return (constructor: Function) => {
      console.log(logString);
      console.log(constructor);
    };
  };

  function WithTemplate(template: string, hookId: string) {
    return function(_: Function) {
      const hookEl = document.querySelector(`#${hookId}`);
      if (hookEl) {
        hookEl.innerHTML = template;
      }
    };
  }

  @WithTemplate("<h1>My Person</h1>", "app")
  @Logger("logging...")
  class Person {
    name = "Ben";

    constructor() {
      console.log("Creating person");
    }
  }

  const person = new Person();

  console.log(person);
}, 500);
