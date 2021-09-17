"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tables = void 0;
class Tables {
    constructor(connection) {
        this.connection = connection;
        this.createScheduleTable();
    }
    createScheduleTable() {
        const sql = `
      CREATE TABLE IF NOT EXISTS Schedules
        (
          id int NOT NULL AUTO_INCREMENT,
          customer varchar(50) NOT NULL,
          pet varchar(20),
          service varchar(20) NOT NULL,
          date datetime NOT NULL,
          status varchar(20) NOT NULL,
          notes text,
          createdAt timestamp NOT NULL,
          PRIMARY KEY(id)
        )
    `;
        this.connection.query(sql, err => {
            if (err)
                console.log(err);
            else
                console.log('Table created successfully');
        });
    }
}
exports.Tables = Tables;
