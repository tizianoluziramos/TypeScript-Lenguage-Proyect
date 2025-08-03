/**
 * Convierte una cadena JSX muy simple en JavaScript puro con DOM nativo.
 * Limitaciones: solo soporta JSX básico como <div>, <h1>, <p>, props simples y children.
 */
export function jsxAJavaScriptPuro(jsx: string): string {
  // Mapa de etiquetas JSX a código JavaScript
  return jsx.replace(
    /<(\w+)([^>]*)>(.*?)<\/\1>/gs,
    (match, tag, attrs, children) => {
      const el = `const ${tag}El = document.createElement('${tag}');`;
      const setAttrs =
        (attrs || "")
          .match(/\w+=".*?"/g)
          ?.map((attr: string) => {
            const [name, value] = attr.split("=");
            return `${tag}El.setAttribute("${name}", ${value});`;
          })
          ?.join("\n") || "";
      const setChildren = children.trim()
        ? `${tag}El.textContent = ${JSON.stringify(children.trim())};`
        : "";
      return [el, setAttrs, setChildren].filter(Boolean).join("\n");
    }
  );
}
