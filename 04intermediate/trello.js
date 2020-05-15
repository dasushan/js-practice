let myToDo = {
  day: "Monday",
  meetings: 0,
  meetDone: 0,
};

let addMeeting = (todo, meet = 0) => {
  return (todo.meetings = todo.meetings + meet);
};

let meetDone = (todo, meet) => {
  return (todo.meetDone = todo.meetings - meet);
};

let resetDay = (todo) => {
  todo.meetings = 0;
  todo.meetDone = 0;
};

let summary = (todo) => {
  let meetLeft = todo.meetings - todo.meetDone;
  return `You have ${meetLeft} Mettings left & ${todo.meetDone} Meetings done`;
};

addMeeting(myToDo, 10);
meetDone(myToDo, 5);
console.log(summary(myToDo));
