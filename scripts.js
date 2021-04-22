//sample user object
var town = {
  Name:'Akula'
}
var city = {
  Name:'Nairofi'
}
var county = {
  Name:'Nairofe'
}
var userSample= {
  First_Name: 'Johnte',
  Last_Name: 'Madoe',
  Phone_Number: '0702846994',
  Address: [town, city, county]
}
console.log(userSample.Address[0])
//business Logic
//user object
function UserContact(firstName, lastName, phoneNumber){
  this.First_Name = firstName,
  this.Last_Name = lastName,
  this.Phone_Number = phoneNumber,
  this.Address = []
}
//user Logic
var userSample2 = new UserContact('Magarita','Apondi', '0756789844');
console.log(userSample2)