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
$(document).ready(function(){
  //getting inputs from form
  var userFirstName = $('#userFirstName').val();
  var userLastName = $('#userLastName').val();
  var userPhoneNumber = $('#phoneNumber').val();
  var userTown = $('#userTown').val();
  var userCity = $('#userCity').val();
  var userCounty = $('#userCounty').val();
  //creating user and address objects using construct
    var User = new UserContact(userFirstName, userLastName, userPhoneNumber);
    var UserAddresses = new UserAddress(userTown, userCity, userCounty);
})