import moment from 'moment';

export function formatTimeMess(time: Date) {
  return moment(time).calendar(null, {
    lastDay: 'HH:mm DD/MM',
    sameDay: 'HH:mm',
    nextDay: 'HH:mm [Tomorrow]',
    lastWeek: 'HH:mm DD/MM',
    sameElse: 'L',
  });
}
