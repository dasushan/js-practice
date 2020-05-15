let todo = {
  day: "Monday",
  meetings: 0,
  meetDone: 0,

  addMeeting: function (meets) {
    this.meetings = this.meetings + meets;
  },

  meetingsDone: function (meets) {
    this.meetDone = this.meetDone - meets;
  },

  meetingsSummary: function () {
    let meetingsLeft = this.meetings + this.meetDone;
    return meetingsLeft;
  },
};

todo.addMeeting(5);
todo.addMeeting(10);
todo.meetingsDone(10);
console.log(todo);

console.log("You have " + todo.meetingsSummary() + " Meetings Left");
