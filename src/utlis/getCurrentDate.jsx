export function getCurrentDateTime() {
    var now = new Date();
    var dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
    var month = now.toLocaleDateString('en-US', { month: 'long' });
    var dayOfMonth = now.getDate();
    var year = now.getFullYear();
    var currentDate = dayOfWeek + ', ' + month + ' ' + dayOfMonth + ', ' + year;
    return currentDate;
}
