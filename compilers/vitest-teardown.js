const notifier = require("node-notifier");

const options = {
  title: "QA Exitoso.",
  message: "QA Existoso. Ya puedes continuar haciendo boludeces.",
  type: "info",
};

notifier.notify({
  title: options.title,
  message: options.message,
  sound: true,
  wait: false,
  closeLabel: "QA",
});
