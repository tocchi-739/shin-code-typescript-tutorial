import SaySomething from "./saySomething";

const root: HTMLElement | null = document.getElementById("root");

const saySomeshing = new SaySomething("Hello TypeScript");
saySomeshing.sayText(root);
