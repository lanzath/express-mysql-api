import { Connection } from 'mysql';

export class Tables {

  constructor(private connection: Connection) {
    this.createScheduleTable();
  }

  public createScheduleTable(): void {
    const sql = `
      CREATE TABLE IF NOT EXISTS Schedules
        (
          id int NOT NULL AUTO_INCREMENT,
          customer varchar(50) NOT NULL,
          pet varchar(20),
          service varchar(20) NOT NULL,
          status varchar(20) NOT NULL,
          notes text,
          PRIMARY KEY(id)
        )
    `;

    this.connection.query(sql, err => {
      if (err) console.log(err);
      else console.log('Table created successfully');
    });
  }
}
