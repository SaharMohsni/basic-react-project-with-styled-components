
import dayjs from 'dayjs';
import { padWithZeros } from './timeFormatter.helper';


// Get residual seconds
function getResidualSeconds(currentDay, timestampDay) {
    const seconds = timestampDay.diff(currentDay, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}

// Get residual minutes
function getResidualMinutes(currentDay, timestampDay) {
    const minutes = timestampDay.diff(currentDay, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}

// Get residual hours
function getResidualHours(currentDay, timestampDay) {
    const hours = timestampDay.diff(currentDay, 'hours') % 24;
    return padWithZeros(hours, 2);
}

// Get residual days
function getResidualDays(currentDay, timestampDay) {
    const days = timestampDay.diff(currentDay, 'days');
    return days.toString();
}




/************************************** Convert time ******************************************/
export function getResidualTimeUntilMsTimestamp(timestampMs) {
  const timestampDay = dayjs(timestampMs);
  const currentDay = dayjs();
  if (timestampDay.isBefore(currentDay)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }
  return {
    seconds: getResidualSeconds(currentDay, timestampDay),
    minutes: getResidualMinutes(currentDay, timestampDay),
    hours: getResidualHours(currentDay, timestampDay),
    days: getResidualDays(currentDay, timestampDay),
  };
}