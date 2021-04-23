// //business Logic
// //user object
function UserContact(firstName, lastName, phoneNumber) {
  this.First_Name = firstName,
    this.Last_Name = lastName,
    this.Phone_Number = phoneNumber,
    this.Address = []
}
//user Address
function UserAddress(town, city, county) {
  this.Town = town,
    this.City = city,
    this.County = county
}
//Full Name prototype
UserContact.prototype.fullName = function () {
  return this.First_Name + ' ' + this.Last_Name
}
UserContact.prototype.fullAddress = function () {
  for(i=0; i<=User.Address.length; i++){
    return this.Address[i]
  } 
 
}
  //user Logic
  $(document).ready(function () {
    $('form').submit(function (event) {
      event.preventDefault();
      //getting inputs from form
      var userFirstName = $('#userFirstName').val();
      var userLastName = $('#userLastName').val();
      var userPhoneNumber = $('#phoneNumber').val();

      //creating user objects using construct
      var User = new UserContact(userFirstName, userLastName, userPhoneNumber);
      var UserAddresses;
      //collecting address from Form
      $('inputAddress').each(function () {
        var userTown = $(this).find('input#userTown').val();
        var userCity = $(this).find('input#userCity').val();
        var userCounty = $(this).find('input#userCounty').val();
        //creating Address objects using construct
        var UserAddresses = new UserAddress(userTown, userCity, userCounty);
        //adding address to created user Object
        User.Address.push(UserAddresses);
      })

      //Display objects created
      $('#contactlist').append('<li class="contact-list">' + User.fullName() + '</li>');
      $('.contact-list').click(function () {
        $('#contactlist').append(User.Phone_Number);
        $('#contactlist').append(fullAddress())
      })
    })
  })