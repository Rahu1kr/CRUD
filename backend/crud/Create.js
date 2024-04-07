import { PhoneBook } from "../model/PhoneBook.js";

export const Create = async (req, res) => {
    try {
        const phoneNumber = new PhoneBook(req.body);
        await phoneNumber.save();
        return res.status(201).json({
            status: "Success",
            data: {
                phoneNumber,
            },
        });
    } catch (error) {
        return res.status(500).json({
            status: "Failed",
            message: error,
        });
    }
};

