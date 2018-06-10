export default function() {
  switch (new Date().getHours()) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return 'night';
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return 'morning';
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      return 'afternoon';
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      return 'evening';
    default:
      return 'day';
  }
}
