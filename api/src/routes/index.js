const { Router } = require('express');

const postProducto = require("../controller/RoutesPost/postProducto");
const crearVenta = require("../controller/RoutesPost/postVenta");
const postVendedor = require("../controller/RoutesPost/postVendedor");
;

const router = Router();

//Routes post:
// router.post('/postProfesional', createProfesional);
router.post("/postvendedor", postVendedor);
router.post("/postproducto", postProducto);
router.post("/postventa", crearVenta);

//Routes gets:
// router.get('/getpacientes', getPaciente);


//Routes Put:
// router.put('/updatepaciente/:dni', updatePaciente);

//Routes Delete
// router.delete('/deletapaciente/:dni', deletePacientes);


module.exports = router;
