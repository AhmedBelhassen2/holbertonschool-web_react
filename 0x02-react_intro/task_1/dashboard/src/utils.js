export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
let boolean;
if (isIndex) {
    boolean = "Holberton School";
  } else {
    boolean = "Holberton School main dashboard";
  }

  return boolean;
}