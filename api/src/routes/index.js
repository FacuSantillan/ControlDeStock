const { Router } = require('express');

const { createVendedor,
        createProducto } = require("./handlers");

const router = Router();

//Routes post:
// router.post('/postProfesional', createProfesional);
router.post("/postvendedor", createVendedor)
router.post("/postproducto", createProducto)

//Routes gets:
// router.get('/getpacientes', getPaciente);


//Routes Put:
// router.put('/updatepaciente/:dni', updatePaciente);

//Routes Delete
// router.delete('/deletapaciente/:dni', deletePacientes);


module.exports = router;
