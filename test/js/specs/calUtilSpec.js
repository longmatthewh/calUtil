describe('calUtil', function() {

    describe('isLeapYear', function() {
       it('returns false if year is not evenly divisble by 4', function() {
           expect(calUtil.isLeapYear(2013)).toBe(false);
       });

       it('returns false if year is not evenly divisble by 100 or 4', function() {
           expect(calUtil.isLeapYear(2013)).toBe(false);
       });

       it('returns false if year is not evenly divisble by 400 or 100 or 4', function() {
           expect(calUtil.isLeapYear(2013)).toBe(false);
       });

       it('returns true if year is evenly divisble by 400 and 100 and 4', function() {
           expect(calUtil.isLeapYear(2000)).toBe(true);
       });

       it('returns true if year is evenly divisble by 4, but not 100', function() {
           expect(calUtil.isLeapYear(2016)).toBe(true);
       });
    });

    describe('getMonth', function() {
        describe('January', function() {
            it('has 31 days', function() {
                expect(calUtil.getMonth(1).getDays()).toBe(31);
                expect(calUtil.getMonth(1).month).toBe('January');
            });
        });

        describe('February', function() {
            it('has 29 days if year is a leap year', function() {
                expect(calUtil.getMonth(2).getDays(2016)).toBe(29);
                expect(calUtil.getMonth(2).month).toBe('February');
            });
            it('has 28 days if year is NOT a leap year', function() {
                expect(calUtil.getMonth(2).getDays(2015)).toBe(28);
            });
        });

        describe('March', function() {
            it('has 31 days', function() {
                expect(calUtil.getMonth(3).getDays()).toBe(31);
                expect(calUtil.getMonth(3).month).toBe('March');
            });
        });

        describe('April', function() {
            it('has 30 days', function() {
                expect(calUtil.getMonth(4).getDays()).toBe(30);
                expect(calUtil.getMonth(4).month).toBe('April');
            });
        });

        describe('May', function() {
            it('has 31 days', function() {
                expect(calUtil.getMonth(5).getDays()).toBe(31);
                expect(calUtil.getMonth(5).month).toBe('May');
            });
        });

        describe('June', function() {
            it('has 30 days', function() {
                expect(calUtil.getMonth(6).getDays()).toBe(30);
                expect(calUtil.getMonth(6).month).toBe('June');
            });
        });

        describe('July', function() {
            it('has 31 days', function() {
                expect(calUtil.getMonth(7).getDays()).toBe(31);
                expect(calUtil.getMonth(7).month).toBe('July');
            });
        });

        describe('August', function() {
            it('has 31 days', function() {
                expect(calUtil.getMonth(8).getDays()).toBe(31);
                expect(calUtil.getMonth(8).month).toBe('August');
            });
        });

        describe('September', function() {
            it('has 30 days', function() {
                expect(calUtil.getMonth(9).getDays()).toBe(30);
                expect(calUtil.getMonth(9).month).toBe('September');
            });
        });

        describe('October', function() {
            it('has 31 days', function() {
                expect(calUtil.getMonth(10).getDays()).toBe(31);
                expect(calUtil.getMonth(10).month).toBe('October');
            });
        });

        describe('November', function() {
            it('has 30 days', function() {
                expect(calUtil.getMonth(11).getDays()).toBe(30);
                expect(calUtil.getMonth(11).month).toBe('November');
            });
        });

        describe('December', function() {
            it('has 31 days', function() {
                expect(calUtil.getMonth(12).getDays()).toBe(31);
                expect(calUtil.getMonth(12).month).toBe('December');
            });
        });
    });
});