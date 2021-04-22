//sample user object
var userSample= {
  First_Name: 'Johnte',
  Last_Name: 'Madoe',
  Phone_Number: '0702846994',
  Address: []
}
//business Logic
//user object
function UserContact(firstName, lastName, phoneNumber){
  this.First_Name = firstName,
  this.Last_Name = lastName,
  this.Phone_Number = phoneNumber,
  this.Address = []
}
//user Address
function UserAddress(town, city, county){
  this.Town = town,
  this.City = city,
  this.County = county
}

//user Logic

var userSample2 = new UserContact('Magarita','Apondi', '0756789844');
var userSample2Address = new UserAddress('Pemba','Malindi','Mombasa');
userSample2.Address.push(userSample2Address)
console.log(userSample2.Address)