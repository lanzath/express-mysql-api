import { Connection } from 'mysql';

export class Tables {

  constructor(private connection: Connection) {
    this.createScheduleTable();
    this.createPetsTable();
  }

  public createScheduleTable(): void {
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
      if (err) console.log(err);
      else console.log('Schedule table created successfully');
    });
  }

  public createPetsTable(): void {
    const query = `
      CREATE TABLE IF NOT EXISTS Pets
      (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(50),
        image varchar(200),
        createdAt timestamp NOT NULL,
        PRIMARY KEY (id)
      )
    `;

    this.connection.query(query, (err) => {
      if (err) console.log(err);
      else console.log('Pets table created successfully');
    });
  }
}
