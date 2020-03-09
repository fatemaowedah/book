
'use strict'
var Customer = [];
var packages = 700;
var myform = document.getElementById('info');
console.log(myform);
// add Event Listener
myform.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = event.target.name.value;
    var phone = event.target.phone.value;
    var email = event.target.email.value;
    var country = event.target.country.value;
    var noOfPeople = event.target.noOfPeople.value;
    var messageTA = event.target.messageTA.value;
    // create new object
    var cust = new Booking (name,phone,email,country,noOfPeople,messageTA);
    cust.sale();
    // make the local storage
    var custString = JSON.stringify(Customer);
  localStorage.setItem('customerBooking', custString);
    // empty the form
  event.target.name.value= "";
  event.target.phone.value= "";
  event.target.email.value= "";
  event.target.country.value= "";
  event.target.noOfPeople.value="";
  event.target.messageTA.value="";

});
// make constructor
function Booking (name,phone,email,country,noOfPeople,messageTA){
this.name = name;
this.phone = phone;
this.email = email;
this.country = country;
this.noOfPeople = noOfPeople;
this.messageTA = messageTA;
this.finalPrice=0;
// make if clause to make discount
Booking.prototype.sale = function(){
    if (this.noOfPeople < 3) {
        packages = packages - (packages * 10/100) ;
    }else if (this.noOfPeople < 5){
        packages = packages - (packages * 20/100) ;
    }else if (this.noOfPeople < 7){
        packages = packages - (packages * 30/100) ;
    }else if (this.noOfPeople > 7){
        packages = packages - (packages * 40/100) ;
    }
    this.finalPrice=packages*noOfPeople;
}
Customer.push(this);
}
