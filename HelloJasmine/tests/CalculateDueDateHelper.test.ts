import CalculateDueDateHelper from '../src/CalculateDueDateHelper';

describe('calculateDueDate', () => {
  let testDate: Date;

  beforeEach( () => {
    testDate = new Date( Date.UTC( 2019, 10, 14, 19, 43, 15 ) );
  } );
  
  it('should work whithin the same day', () => {
    const hoursToAdd = 2;
    const expectedDate = new Date( Date.UTC( 2019, 10, 14, 21, 43, 15 ) );
    const result = CalculateDueDateHelper.calculateDueDate(testDate, hoursToAdd);

    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  it('should push work to the next day', () => {
    const hoursToAdd = 8;
    const expectedDate = new Date( Date.UTC( 2019, 10, 15, 19, 43, 15 ) );
    const result = CalculateDueDateHelper.calculateDueDate(testDate, hoursToAdd);

    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  it('should push work to the next week', () => {
    const hoursToAdd = 40;
    const expectedDate = new Date( Date.UTC( 2019, 10, 21, 19, 43, 15 ) );
    const result = CalculateDueDateHelper.calculateDueDate(testDate, hoursToAdd);

    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  it('should push work to the next year without problem', () => {
    const customTestDate = new Date( Date.UTC( 2019, 10, 14, 19, 43, 15 ) );
    // 77 working days is 616 hours
    const hoursToAdd = 616;

    // 77 weekdays from the custom test date
    const expectedDate = new Date( Date.UTC( 2020, 2, 2, 19, 43, 15 ) );
    const result = CalculateDueDateHelper.calculateDueDate(customTestDate, hoursToAdd);

    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  describe( 'on Sunday', () => {
    it('should push work next week ', () => {  
      const hoursToAdd = 24;
      const expectedDateMonday = new Date( Date.UTC( 2019, 10, 18, 19, 43, 15 ) );
      const result = CalculateDueDateHelper.calculateDueDate(testDate, hoursToAdd);

      expect(result.getTime()).toBe(expectedDateMonday.getTime());
    });
  } );

  describe( 'on Saturday', () => {
    it('should push work next week ', () => {  
      const hoursToAdd = 16;
      const expectedDateMonday = new Date( Date.UTC( 2019, 10, 18, 19, 43, 15 ) );
      const result = CalculateDueDateHelper.calculateDueDate(testDate, hoursToAdd);

      expect(result.getTime()).toBe(expectedDateMonday.getTime());
    });
  } );
});
