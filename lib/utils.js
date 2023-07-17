export const isBrowser = () => typeof window !== "undefined";

export const textEllipsis = (
  str,
  maxLength,
  { side = "end", ellipsis = "..." } = {},
) => {
  if (str.length > maxLength) {
    switch (side) {
      case "start":
        return ellipsis + str.slice(-(maxLength - ellipsis.length));
      case "end":
      default:
        return str.slice(0, maxLength - ellipsis.length) + ellipsis;
    }
  }
  return str;
};
