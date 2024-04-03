const { Router } = require('express');

const postProducto = require("../controller/RoutesPost/postProducto");
const crearVenta = require("../controller/RoutesPost/postVenta");
const postVendedor = require("../controller/RoutesPost/postVendedor");

const { getVendedors,
        getFacturas,
        getVentas } = require("./handles")

const router = Router();

//Routes post:
// router.post('/postProfesional', createProfesional);
router.post("/postvendedor", postVendedor);
router.post("/postproducto", postProducto);
router.post("/postventa", crearVenta);

//Routes gets:
// router.get('/getpacientes', getPaciente);
router.get('/getvendedor', getVendedors);
router.get('/getfacturas', getFacturas);
router.get("/getventas", getVentas);

//Routes Put:
// router.put('/updatepaciente/:dni', updatePaciente);

//Routes Delete
// router.delete('/deletapaciente/:dni', deletePacientes);


module.exports = router;
