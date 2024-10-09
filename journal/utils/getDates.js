import moment from 'moment';

// Pass 'short' as a parameter to get short day names
export const getWeekDaysWithDates = (format = 'long') => {
    const weekDays = [];
    const today = moment();

    for (let i = 0; i < 7; i++) {
        const day = moment().startOf('week').add(i, 'days');
        weekDays.push({
            day: format === 'short' ? day.format('ddd') : day.format('dddd'),  // 'Mon', 'Tue', etc.
            date: day.format('D'),
            isToday: day.isSame(today, 'day'),
        });
    }

    return weekDays;
};
