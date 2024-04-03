const getAllFromVendedor = require("../controller/RoutesGet/getAllFromVendedor");
const getAllFactura = require("../controller/RoutesGet/getAllFromFactura")
const getAllVenta = require("../controller/RoutesGet/getAllFromVenta")

const getVendedors = async(req, res) => {
    try {
        const response = await getAllFromVendedor();

        if(response.length){
            res.status(200).json(response); 
        } else {
            res.status(400).json('No hay vendedores momentaneamente.'); 
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

const getVentas = async(req, res) => {
    try {
        const response = await getAllVenta();

        if(response.length){
            res.status(200).json(response); 
        } else {
            res.status(400).json('No hay ventas momentaneamente.'); 
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = {
    getVendedors,
    getFacturas,
    getVentas
}