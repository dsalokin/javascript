// replacer при stringify: при циклической ссылке (value == meetup) возвращаем undefined. key != "" чтобы не выкинуть корень
let room = { number: 23 };
let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room
};
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));
