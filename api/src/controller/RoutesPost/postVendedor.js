const { Vendedor } = require('../../db')

const postVendedor = async (req, res) => {
    try {
        const { nombre } = req.body;

        const newVendedor = await Vendedor.create({
            nombre
        });
    
        const result = await Vendedor.findOne({
            where:{ 
                id: newVendedor.id 
            },
            attributes: ['id', 'nombre'],
        })
    
    res.status(201).json(result);

    } catch (error) {
       res.status(500).json({ error: error.message }) 
    }

};

module.exports = postVendedor;