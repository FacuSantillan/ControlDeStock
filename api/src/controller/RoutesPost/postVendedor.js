const { Vendedor } = require('../../db')

const postVendedor = async (vendedorData) => {
   const { nombre } = vendedorData;

    const newVendedor = await Vendedor.create({
        nombre
    });

    const result = await Vendedor.findOne({
        where:{ 
            id: newVendedor.id 
        },
        attributes: ['id', 'nombre'],
    })

return result;

};

module.exports=postVendedor;