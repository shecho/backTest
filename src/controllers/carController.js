import Car from '../models/Car'

const ctrl = {};
ctrl.create = (req, res) => {
        res.json({
          message: "crear vehiculo",
        });
 
}
ctrl.update = (req, res) => {
        res.json({
          message: "Actualizar vehiculo",
        });
 
}
ctrl.delete = (req, res) => {
        res.json({
          message: "eliminar vehiculo",
        });
 
}

export default ctrl