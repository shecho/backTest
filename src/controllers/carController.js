import Car from "../models/Car";

const ctrl = {};
ctrl.list = (req, res) => {
  res.json({
    message: "Listar todos los vehiculos",
  });
};
ctrl.create = (req, res) => {
  res.json({
    message: "crear vehiculo",
  });
};
ctrl.update = (req, res) => {
  res.json({
    message: "Actualizar vehiculo",
  });
};
ctrl.delete = (req, res) => {
  res.json({
    message: "eliminar vehiculo",
  });
};

export default ctrl;
