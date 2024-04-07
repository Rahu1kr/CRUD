import { PhoneBook } from "../model/PhoneBook.js";

export const Delete = async (req, res) => {
    await PhoneBook.findByIdAndDelete(req.params.id);
    try {
        return res.status(204).json({
            status: "Success",
            data: {},
        });
    } catch (error) {
        return res.status(500).json({
            status: "Failed",
            message: error,
        });
    }
};