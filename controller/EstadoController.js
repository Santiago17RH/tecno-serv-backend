const EstadoModel = require("../model/models/EstadoModel");

const EstadoController = {
    getAllEstados: async (req, res) => {
        try {
            let EstadosCreadas = await EstadoModel.findAll();
            console.log(EstadosCreadas);
            res.json({ message: "Consulta realizada con exito", EstadosCreadas });
        } catch (error) {
            console.error("Error al obtener estados:", error);
            res.status(500).json({ message: "Error al obtener estados"});
        }
    },

    createNewEstado: async (req, res) => {
        try {
            let { EstadoUsuario } = req.body;
            let resultadoEstado = await EstadoModel.create({ tipo_Estado: EstadoUsuario });
            res.json({ message: "Estado Creado Con Éxito", resultadoEstado });
        } catch (error) {
            console.error("Error al crear un nuevo estado:", error);
            res.status(500).json({ message: "Error al crear un nuevo estado" });
        }
    },

    updateEstado: async (req, res) => {
        try {
            let { idEstado, EstadoUsuario } = req.body;
            let resultadoAcEstado = await EstadoModel.update(
                { tipo_Estado: EstadoUsuario },
                { where: { id_Estado: idEstado } }
            );
            res.json({ message: "Estado Actualizado Con Éxito", resultadoAcEstado });
        } catch (error) {
            console.error("Error al actualizar estado:", error);
            res.status(500).json({ message: "Error al actualizar estado" });
        }
    }
};

module.exports = EstadoController;