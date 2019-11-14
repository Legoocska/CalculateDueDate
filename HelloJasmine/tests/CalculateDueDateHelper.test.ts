import CalculateDueDateHelper from '../src/CalculateDueDateHelper';

describe('calculateDueDate', () => {
  
  it('should work whithin the same day', () => {  
    const testDate = new Date( Date.UTC( 2019, 11, 14, 19, 43, 15 ) );
    const hoursToAdd = 2;
    const expectedDate = new Date( Date.UTC( 2019, 11, 14, 21, 43, 15 ) );
    const result = CalculateDueDateHelper.calculateDueDate(testDate, hoursToAdd);

    expect(result.getUTCHours()).toBe(expectedDate.getUTCHours());
  });
});
