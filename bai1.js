// bai 1
const matchEvents = [
    [5, '⚽ Goal'],
    [17, '⚽ Goal'],
    [30, '🔄 Substitution'],
    [45, '🟨 Yellow Card'],
    [64, '🟨 Yellow Card'],
    [75, '⚽ Goal'],
    [80, '🔴 Red Card'],
  ];
  
  matchEvents.forEach((event, index) => {
    if (event[0] === 64 && event[1] === '🟨 Yellow Card') {
      matchEvents.splice(index, 1);
    }
  });
  
  const totalMinutes = 90;
  const totalEvents = matchEvents.length;
  const averageEventsPer9Minutes = totalEvents / (totalMinutes / 9);
  console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi 9 phút`);
  
  matchEvents.forEach((event) => {
    const minute = event[0];
    const action = event[1];
    const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
    console.log(`${half} ${minute}: ${action}`);
  });
  
  
