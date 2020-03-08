var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenidos al Buscador de Trabajos Github', subtitle: 'Aprieta el siguiente botón' });
});

module.exports = router;
