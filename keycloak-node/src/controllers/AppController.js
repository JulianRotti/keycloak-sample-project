import * as mockDataService from "../services/MockDataService.js";

export const getDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await mockDataService.getDataById(id);
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: 'Data not found.' })
        }
    } catch (error) {
        res.status(500).json({ error: `Failed to get data by id: ${error.message}` });
    }
};

export const getAllData = async (req, res) => {
    try {
        const allData = await mockDataService.getAllData();
        res.status(200).json(allData);
    } catch (error) {
        res.status(500).json({ error: `Failed to get all data: ${error.message}` });
    }
};

export const postData = async (req, res) => {
    try {
        const { name } = req.body
        const newData = await mockDataService.createData(name);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ error: `Failed to create data: ${error.message}` });
    }
};