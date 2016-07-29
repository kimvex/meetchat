var cat = require('catlistener');

cat.stylus({
  options: ['compila','escucha','observa'],
  css: './app/css',
  stylus: './app/stylus/estilo.styl'
});

cat.broserify({
  original: './app/js/script.js',
  compilado: './app/js/scripts.js',
  presets: true
});
