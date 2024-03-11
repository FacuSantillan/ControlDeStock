const { Router } = require('express');

const { postVenta, createVendedor, createProducto, getProductos, getVendedores } = require("./handlers");

const router = Router();

//Routes post:
// router.post('/postProfesional', createProfesional);
router.post("/postventa", postVenta);
router.post("/postvendedor", createVendedor);
router.post("/postproducto", createProducto);


//Routes gets:
// router.get('/getpacientes', getPaciente);
router.get("/getproductos", getProductos);
router.get("/getvendedores", getVendedores)

//Routes Put:
// router.put('/updatepaciente/:dni', updatePaciente);

//Routes Delete
// router.delete('/deletapaciente/:dni', deletePacientes);


module.exports = router;
