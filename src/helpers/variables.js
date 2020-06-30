export const screen = (size) => {
  let sizeq = "";
  switch (size) {
    case "sm":
      sizeq = "639px";
      break;
    case "md":
      sizeq = "767px";
      break;
    case "lg":
      sizeq = "1023px";
      break;
    case "1279px":
      sizeq = "1279px";
      break;
    default:
      sizeq = "639px";
      break;
  }
  return (content) => `@media (max-width: ${sizeq}){${content}}`;
};
