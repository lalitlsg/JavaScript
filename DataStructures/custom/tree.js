class Tree {
  constructor(value) {
    this.value = value;
    this.descendents = [];
  }
}

const lalit = new Tree("lalit");
const js = new Tree("js");
const react = new Tree("react");
const css = new Tree("css");
const core = new Tree("core");
const adv = new Tree("adv");
const cls = new Tree("class");
const fun = new Tree("Fun");
const css3 = new Tree("css3");
const scss = new Tree("scss");

lalit.descendents.push(js, react, css);
js.descendents.push(core, adv);
react.descendents.push(cls, fun);
css.descendents.push(css3, scss);
console.log(lalit);
