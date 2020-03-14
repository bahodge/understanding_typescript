"use strict";
const userName = "ben";
let numbers = [1, 2, 3];
// wait for dom to load
setTimeout(() => {
    var _a;
    const button = document.querySelector("button");
    (_a = button) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        console.log("Clicked");
    });
}, 100);
//# sourceMappingURL=app.js.map