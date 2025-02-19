console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345")); 

function validatePassword (pass1, pass2) { // a function validating if two passwords match
    if(pass1.length < 8 || pass2.length < 8){ // if it has at least 8 characters
        return false; // if the password is less than 8 characters, return false
    }

    var num = false; // signifies if pass has a number; false = no number, true is otherwise
    var lowercase = false; // signifies if pass has a lowercase letter; false = no lowercase letter, true is otherwise
    var uppercase = false; // signifies if pass has a upercase letter; false = no uppercase letter, true is otherwise

    for(var i = 0; i < pass1.length; i++){ // checks if the two passwords match
        if(pass1[i] != pass2[i]){ //  if the letters differed between the two passwords, return false
            return false;
        }
        if(Number.isInteger(pass1[i]) == false){ // if there is at least one number, make num true
            num = true;
        }
        if(pass1[i] > 96 || pass1[i] < 123){ // ASCII code range for lowercase letters
            lowercase = true;
        }
        if(pass1[i] > 65 || pass1[i] < 90){ // ASCII code range for lowercase letters
            uppercase = true;
        }
    }

    if(num == false && lowercase == false && uppercase == false){ // if there is not at least one number, lowercase, or uppercase letter return false
        return false;
    }


    return true;

}

function reversePassword (validpass) { // function that reverses the validated password
    var newpass = ""; // string variable where the new reversed characters of the validated password is concatenated
    var passlength = validpass.length - 1; // integer variable holding the last index of the validated password
    for(var i = 0; i < validpass.length; i++){
        newpass = newpass + validpass[passlength]; // concatenate the latest letter to the beginning of newpass
        passlength--;
    }
    return newpass; // return newpass
}

function storePassword (inputname, pass1, pass2) { // stores password ro an object
    
    var newpass; // holds value of the newpassword
    if(validatePassword(pass1,pass2) == true){
        newpass = reversePassword(pass1);
    }else {
        newpass = pass1;
    }

    let user = { // creates new object 'user' with features: name and newpassword
        name: inputname,
        newpassword: newpass
    }
    return user;
}