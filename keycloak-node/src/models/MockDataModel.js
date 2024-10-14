
export class MockDataModel {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// mimic the behaviour of sequelize
export class DataBaseModel {
    // do not create a new instance if there is already one (singleton pattern)
    constructor(mockDataStore = []) {
        if (!DataBaseModel.instance) {
          this.mockDataStore = mockDataStore;
          DataBaseModel.instance = this;
        }
        return DataBaseModel.instance;
      }

    create(name) {
        const maxId = Math.max(...this.mockDataStore.map(item => item.id));
        const id = maxId + 1;
        const newData = new MockDataModel(id, name)
        this.mockDataStore.push(newData);
        return newData;
    }
    

    getById(id) {
        return this.mockDataStore.find(item => item.id === id) || null;
    }
    
    findAll() {
        return this.mockDataStore;
    }
}