import { PhoneBook } from "../model/PhoneBook.js";

export const Read = async (req, res) => {
    try {
        const phoneNumbers = await PhoneBook.find();
        return res.status(200).json({
            status: "Success",
            data: {
                phoneNumbers,
            },
        });
    } catch (error) {
        return res.status(500).json({
            status: "Failed",
            message: error,
        });
    }
};