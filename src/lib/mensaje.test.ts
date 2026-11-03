// Verificación mínima del armado de mensajes y enlaces. Ejecutar con: npm test
import assert from "node:assert/strict";
import { test } from "node:test";
import { armarMensaje, enlaceCorreo, enlaceWhatsApp } from "./mensaje.ts";

test("mensaje con abejas, lugar y comentario", () => {
  const texto = armarMensaje({
    observo: "abejas",
    localidad: "  Las Piedras ",
    donde: "El techo del galpón",
    mas: "Hay una escalera cerca",
  });
  assert.equal(
    texto,
    "Hola, quiero consultar por un retiro. Estoy en Las Piedras. Veo abejas en el techo del galpón. Hay una escalera cerca. ¿Pueden orientarme sobre cómo continuar?",
  );
});

test("no duplica la preposición si la persona ya la escribió", () => {
  const texto = armarMensaje({ observo: "avispas", localidad: "Pando", donde: "Debajo del alero", mas: "" });
  assert.match(texto, /Veo avispas debajo del alero\./);
  assert.doesNotMatch(texto, /en debajo/);
});

test("opción 'no sé' no identifica el insecto", () => {
  const texto = armarMensaje({ observo: "no-se", localidad: "Canelones", donde: "", mas: "" });
  assert.match(texto, /Veo insectos y no sé si son abejas o avispas\./);
  assert.doesNotMatch(texto, /Veo abejas|Veo avispas/);
});

test("los enlaces codifican tildes, signos y saltos", () => {
  const mensaje = "¿Pueden ayudarme? Soy de Tala & Pando #1";
  const wa = enlaceWhatsApp("59899498294", mensaje);
  assert.equal(new URL(wa).searchParams.get("text"), mensaje);
  assert.ok(wa.startsWith("https://wa.me/59899498294?text="));
  const mail = new URL(enlaceCorreo("a@b.uy", mensaje));
  assert.equal(mail.searchParams.get("body"), mensaje);
  assert.equal(mail.pathname, "a@b.uy");
});
