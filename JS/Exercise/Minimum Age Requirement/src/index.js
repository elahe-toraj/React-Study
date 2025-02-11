function filteredUserList(users) {
  if (!Array.isArray(users)) {
    return "Input must be an array of users";
  }

  const filteredUsers = users.filter(user => user.age > 11);

  const sortedUsers = filteredUsers.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
  return sortedUsers;
}
const filter = filteredUserList;
const users = [
  { name: "ali", age: 10 },
  { name: "hossein", age: 45 },
  { name: "JAVAD", age: 12 },
  { name: "REZA", age: 20 },
  { name: "SAJJAD", age: 11 },
];
console.log(filter(users));
module.exports = filter;
