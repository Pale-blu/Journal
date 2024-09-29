import moment from 'moment';

// Returns an array of week days (Monday to Sunday) and highlights today's date
export function getWeekDaysWithDates() {
    const week = [];
    const today = moment();

    for (let i = 0; i < 7; i++) {
        const day = moment().startOf('week').add(i, 'days');
        week.push({
            day: day.format('dddd'),  // e.g. "Monday"
            date: day.format('MMM D'), // e.g. "Sep 29"
            isToday: day.isSame(today, 'day'),
        });
    }

    return week;
}
