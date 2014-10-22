(function() {
    var root = this;

    var CALENDAR_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var CALENDAR_MONTHS = [
        {
            'month': 'January',
            getDays: function () {
                return 31;
            }
        },
        {
            'month': 'February',
            getDays: function (year) {
                return isLeapYear(year) ? 29 : 28;
            }
        },
        {
            'month': 'March',
            getDays: function () {
                return 31;
            }
        },
        {
            'month': 'April',
            getDays: function () {
                return 30;
            }
        },
        {
            'month': 'May',
            getDays: function () {
                return 31;
            }
        },
        {
            'month': 'June',
            getDays: function () {
                return 30;
            }
        },
        {
            'month': 'July',
            getDays: function () {
                return 31;
            }
        },
        {
            'month': 'August',
            getDays: function () {
                return 31;
            }
        },
        {
            'month': 'September',
            getDays: function () {
                return 30;
            }
        },
        {
            'month': 'October',
            getDays: function () {
                return 31;
            }
        },
        {
            'month': 'November',
            getDays: function () {
                return 30;
            }
        },
        {
            'month': 'December',
            getDays: function () {
                return 31;
            }
        }
    ];

    function isLeapYear(yr) {
        if ((parseInt(yr) % 4) === 0) {
            if (parseInt(yr) % 100 === 0) {
                if (parseInt(yr) % 400 !== 0) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    function getMonth(month) {
        return CALENDAR_MONTHS[month-1];
    }

    root.calUtil = {
        isLeapYear : isLeapYear,
        getMonth : getMonth
    };

}.call(this));