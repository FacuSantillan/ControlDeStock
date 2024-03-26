const getAllFromVendedor = require("../controller/RoutesGet/getAllFromVendedor");
const getAllFactura = require("../controller/RoutesGet/getAllFromFactura")


const getVendedors = async(req, res) => {
    try {
        const response = await getAllFromVendedor();

        if(response.length){
            res.status(200).json(response); 
        } else {
            res.status(400).json('No hay reservas momentaneamente.'); 
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

const getFacturas = async(req, res) => {
    try {
        const response = await getAllFactura();

        if(response.length){
            res.status(200).json(response); 
        } else {
            res.status(400).json('No hay facturas momentaneamente.'); 
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};


module.exports = {
    getVendedors,
    getFacturas
}