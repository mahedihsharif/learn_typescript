// function friendsList(...friends: string[]) {
//   friends.map((friend) => console.log(`Hi, I am ${friend}`));
// }

// friendsList("sajjad", "sharif", "kawser", "Jiyaur");

const myFriends = ["Izaz", "Shuvam", "Mamun"];
const newFriends = ["Sajjad", "Jiyaur", "Kawser"];

myFriends.push(...newFriends);
// console.log(myFriends);

const myBestFriend = {
  fullName: "Kuddus",
  age: 30,
};

const { fullName } = myBestFriend; //you can use similar this, never be use fullName:string, if you declare fullName:string, it will take string as a fullName, actually don't need to declare type in this way

console.log(fullName);
