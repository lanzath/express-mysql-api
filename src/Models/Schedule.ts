import { ISchedule } from '../interfaces/ISchedule';
import connection from '../database/connection';

class Schedule {

  public store(schedule: ISchedule): void {
    const sql = `INSERT INTO Schedules SET ?`;

    connection.query(sql, schedule, (err, results) => {
      if (err) console.log(err);
      else console.log(results);
    });
  }
}

export { Schedule };
