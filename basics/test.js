let user = {
  username: "Harshit",
  age: 20,
  message: function () {
    console.log(`Hello ${this.username}`);
  },
};
console.log(user);
user.message();
