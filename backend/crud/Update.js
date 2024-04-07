import { PhoneBook } from "../model/PhoneBook.js";

export const Update = async (req, res) => {
    const updatedPhone = await PhoneBook.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    try {
        return res.status(200).json({
            status: "Success",
            data: {
                updatedPhone,
            },
        });
    } catch (error) {
        console.log(error);
    }
}