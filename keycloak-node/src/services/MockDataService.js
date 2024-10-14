import { MockDataModel, DataBaseModel } from "../models/MockDataModel.js";

const mockData = [
    new MockDataModel(1, 'Mario'),
    new MockDataModel(2, 'Wario'),
    new MockDataModel(3, 'Peach'),
    new MockDataModel(4, 'Luigi')
]

const dataBase = new DataBaseModel(mockData);

export const getDataById = async (id) => {
    const parsedId = parseInt(id, 10);
    return await dataBase.getById(parsedId);
}

export const getAllData = async () => {
    return await dataBase.findAll();
}


export const createData = async (name) => {
    dataBase.create(name);
}