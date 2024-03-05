const { Vendedor } = require("../../db");

const createVendedor = async (vendedorData) => {
    const { nombre, apellido } = vendedorData;

    const newVendedor = await Vendedor.create({
        nombre,
        apellido,
    });

    const result = await Vendedor.findOne({
        where: {
            id: newVendedor.id, 
        },
        attributes: ["nombre", "apellido"]
    });
     
        return result;
};

module.exports = createVendedor;