
var myApp = angular.module("myModule", ["ngStorage"])
// myApp.controller("myController", function ($scope, $localStorage) {

myApp.controller("myController", function ($scope) {
    var user = {
        companyname: "",
        address: "",
        email: "",
        number: "",
        Count: ""
    }

    $scope.user = user;
    var num = user.number;

    $scope.mobNumberPattern = /^((\\+91-?)|0)?[0-9]{10}$/;
    // $scope.list = []



    $scope.Save = function () {

        var num = user.number;
        /*for storing single object  in localstorage*/
        // $localStorage.user = user; 

        // var list = [];
        // list = JSON.parse(localStorage.getItem('Data')) ? JSON.parse(localStorage.getItem('Data')) || []
        console.log(num.toString().length)


        list = JSON.parse(localStorage.getItem('Data')) ? JSON.parse(localStorage.getItem('Data')) : []
        if (list.some((v) => { return ((v.email == user.email) || (v.companyname == user.companyname)) })) {
            alert("User already exists");
        }

        else {
            if ((user.companyname != "") && (user.email != "") && (user.number != "" && num.toString().length == 10) && (user.address != "") && (user.Count != "")) {
                list.push(user);
                localStorage.setItem("Data", JSON.stringify(list));
                console.log(list)
            }
            else if (num.toString().length != 10) {
                alert("Enter valid Number")
            }
            else {
                alert(" Enter valid data ")
            }
        }
    }
});



