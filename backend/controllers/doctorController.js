import doctorModel from "../models/doctorsModel.js";

const changeavailability = async (req, res) => {

  try {

    const { docId } = req.body;
    const doctor = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !doctor.available,
    });
    res
      .status(200)
      .json({ success: true, message: "Availability changed successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { changeavailability };
