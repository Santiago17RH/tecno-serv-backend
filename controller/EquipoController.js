const EquipoModel = require("../model/models/EquipoModel");


const EquipoController = {
    getAllEquipos: async (req, res) => {
        try {
            let equipos = await EquipoModel.findAll();
            res.json({ message: "Consulta realizada con éxito", equipos });
        } catch (error) {
            console.error("Error al obtener equipos:", error);
            res.status(500).json({ message: "Error al obtener equipos" });
        }
    },

    createNewEquipo: async (req, res) => {
        try{
            let{
                idEquipo,
                placaNumeroSerie,
                contingencia,
                procesador,
                descripcion,
                sistemaOperativo,
                ram,
                alacenamiento
            } = req.body;

            let resultadoNewEquipo = await EquipoModel.create({
                id_equipo: idEquipo,
                placa_numero_serie: placaNumeroSerie,
                contingencia: contingencia,
                procesador: procesador,
                descripcion: descripcion,
                sistema_operativo: sistemaOperativo,
                ram: ram,
                alacenamiento: alacenamiento,

            });
            res.status(201).json({
                message: "Equipo Creado Con Exito",
                resultadoNewEquipo
            });
        } catch (error) {
            console.error("Error al crear un nuevo equipo:", error);
            res.status(500).json({ message: "Error al crear un nuevo equipo" });
        }
    },

    updateEquipo: async (req, res) => {
        
    }
};

module.exports = EquipoController;
