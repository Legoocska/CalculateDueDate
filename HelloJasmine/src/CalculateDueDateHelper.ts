export default class CalculateDueDateHelper {

  static readonly millisecondsInAnHour = 3600000;
  static readonly millisecondsInADay = 24 * CalculateDueDateHelper.millisecondsInAnHour;
  static readonly millisecondsInAWeek = 7 * CalculateDueDateHelper.millisecondsInADay;
  
  static calculateDueDate(submitDate: Date, turnaroundTime: number): Date {
    const workingDaysToAdd = this.calculateDaysToAdd( turnaroundTime );
    const resolveDate: Date = new Date( submitDate.getTime() );

    resolveDate.setTime( resolveDate.getTime() + workingDaysToAdd.numberOfWeeks * CalculateDueDateHelper.millisecondsInAWeek );
    resolveDate.setTime( resolveDate.getTime() + workingDaysToAdd.numberOfDays * CalculateDueDateHelper.millisecondsInADay );
    resolveDate.setTime( resolveDate.getTime() + workingDaysToAdd.numberOfHours * CalculateDueDateHelper.millisecondsInAnHour );
    return resolveDate;
  }

  private static calculateDaysToAdd( turnaroundtime: number ): WorkingDaysToAdd {
    const daysRemainingAfterWeeksCalc = turnaroundtime % 40;  
    const workingDaysToAdd: WorkingDaysToAdd = {
        numberOfWeeks: Math.floor( turnaroundtime / 40 ),
        numberOfDays: Math.floor( daysRemainingAfterWeeksCalc / 8 ),
        numberOfHours: turnaroundtime % 8
      };
      return workingDaysToAdd;
  }

}

interface WorkingDaysToAdd{
  numberOfWeeks: number;
  numberOfDays: number;
  numberOfHours: number;
};
