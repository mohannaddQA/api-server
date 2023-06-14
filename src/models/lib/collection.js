class Collection {
  constructor(table) {
    // insteade of table , the parameter name we used in the demo was model , but i feel table make more sense
    this.table = table;
  }

  async add(obj) {
    let newRecord = await this.table.create(obj);
    return newRecord;
  }

  async read(id = null) {
    let records = null;
    if (id) {
      records = await this.table.findOne({ where: { id: id } });
    } else {
      records = await this.table.findAll();
    }
    return records;
  }

  async update(obj, id) {
    let foundRedord = await this.table.findOne({ where: { id: id } });
    let updatedRedord = await foundRedord.update(obj);
    return updatedRedord;
  }

  async delete(id) {
    let record = await this.table.destroy({ where: { id: id } });
    return record;
  }

  async readAutherWithHisBooks(id, table) {
    let record = await this.table.findOne({
      where: { id: id },
      include: table,
    });
    return record;
  }
  // this is a work around , not a real join
  // async readCustomerOrders(id) {
  //     let record = await this.table.findAll({
  //         where: { customerId: id }
  //     })
  //     return record;
  // }
}

module.exports = Collection;
