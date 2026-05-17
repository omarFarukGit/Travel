import destinationModel from "../models/destinationModel.js";

const getAllDestinations = async (req, res) => {
  try {
    const result = await destinationModel.find();
    res.status(200).json({
      success: true,
      message: "get all destination successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const createDestinations = async (req, res) => {
  try {
    const destination = req.body;

    const result = await destinationModel.create(destination);

    res.status(200).json({
      success: true,
      message: "get all destination successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getDestinaitionById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await destinationModel.findById(id);

    res.status(200).json({
      success: true,
      message: "get single destination successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const updateDestinations = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      destinationName,
      country,
      category,
      price,
      duration,
      departureDate,
      imageUrl,
      description,
    } = req.body;

    const result = await destinationModel.findByIdAndUpdate(id, {
      destinationName,
      country,
      category,
      price,
      duration,
      departureDate,
      imageUrl,
      description,
    });

    res.status(200).json({
      success: true,
      message: "get all destination successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const deleteDestinations = async (req, res) => {
  try {
    const { id } = req.params;

    await destinationModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "delete  destination successfully",
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const destinationController = {
  getAllDestinations,
  createDestinations,
  getDestinaitionById,
  updateDestinations,
  deleteDestinations,
};
