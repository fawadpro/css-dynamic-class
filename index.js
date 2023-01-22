/** @format */

import { kebabCase, random } from "lodash";

const camelToKebab = (str) => {
  return kebabCase(str);
};

const style = document.createElement("style");
document.head.appendChild(style);

let generatedClasses = {};

function createStyles(styles) {
  const newClasses = {};
  Object.keys(styles).forEach((className) => {
    let generatedClassName = "";
    generatedClassName +=
      String.fromCharCode(random(97, 122)) +
      String.fromCharCode(random(97, 122)) +
      String.fromCharCode(random(97, 122)) +
      String.fromCharCode(random(97, 122)) +
      String.fromCharCode(random(97, 122)) +
      String.fromCharCode(random(97, 122)) +
      String.fromCharCode(random(97, 122)) +
      String.fromCharCode(random(97, 122)) +
      String.fromCharCode(random(97, 122)) +
      String.fromCharCode(random(97, 122));
    generatedClassName += random(100, 999);
    const css = {};
    Object.entries(styles[className]).forEach(([key, value]) => {
      const cssKey = camelToKebab(key);
      if (typeof value === "number" && key !== "zIndex") {
        css[cssKey] = `${value}px`;
      } else {
        css[cssKey] = value;
      }
    });
    generatedClasses[generatedClassName] = css;
    newClasses[className] = generatedClassName;
  });

  // convert styles object to a string
  const stylesString = Object.entries(generatedClasses)
    .map(
      ([className, css]) =>
        `.${className} { ${Object.entries(css)
          .map(([key, value]) => `${key}: ${value}`)
          .join(";")} }`
    )
    .join("");

  // add the styles to the stylesheet
  style.innerHTML = stylesString;
  return newClasses;
}
export const useStyles = (styles) => {
  const classes = createStyles(styles);
  return classes;
};
