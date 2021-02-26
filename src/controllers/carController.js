import Car from "../models/Car";

const ctrl = {};
ctrl.list = async(req, res) => {
  const cars = await Car.find();
  res.json({
    message: "Listar todos los vehiculos",
    cars
  });
};
ctrl.create = async(req, res) => {
  const { marca, fabrication_time, date } = req.body;
  const newCar = new Car({
    marca,
    fabrication_time,
    date,
  });
  await newCar.save();
  res.json({
    message: "crear vehiculo",
    newCar
  });
};
ctrl.update =async (req, res) => {
  res.json({
    message: "Actualizar vehiculo",
  });
};
ctrl.delete = async(req, res) => {
  res.json({
    message: "eliminar vehiculo",
  });
};

export default ctrl;
