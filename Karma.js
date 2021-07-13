function signup() {
    var firstName = document.getElementById('firstName').value;
    var verifFirstName = verifLength(firstName, 4);
    if (verifFirstName) {
        document.getElementById('firstNameError').innerHTML = "";
    } else {
        document.getElementById('firstNameError').innerHTML = "First name have at least 4 charactére";
        document.getElementById('firstNameError').style.color = "red";
    }
    var lastName = document.getElementById('lastName').value;
    var verifLastName = verifLength(lastName, 5);
    if (verifLastName) {
        document.getElementById('lastNameError').innerHTML = "";
    } else {
        document.getElementById('lastNameError').innerHTML = "Last name have at least 5 charactére";
        document.getElementById('lastNameError').style.color = "red";
    }
    var email = document.getElementById('email').value;
    var verifEmail = validateEmail(email);
    if (verifEmail) {
        document.getElementById('emailError').innerHTML = "";
    } else {
        document.getElementById('emailError').innerHTML = "invalide email";
        document.getElementById('emailError').style.color = "red";
    }
    var pwd = document.getElementById('pwd').value;
    var verifPwd = verifLength(pwd, 8);
    if (verifPwd) {
        document.getElementById('pwdEroor').innerHTML = "";
    } else {
        document.getElementById('pwdEroor').innerHTML = "password have at least 8 charactére";
        document.getElementById('pwdEroor').style.color = "red";
    }
    var confirmPwd = document.getElementById('confirmPwd').value;
    if (pwd == confirmPwd) {
        document.getElementById('confPwdEroor').innerHTML = "";
    } else {
        document.getElementById('confPwdEroor').innerHTML = "password invalide";
        document.getElementById('confPwdEroor').style.color = "red";
    }
    var tel = document.getElementById('tel').value;
    if (tel.length == 8) {
        document.getElementById('telError').innerHTML = "";
    } else {
        document.getElementById('telError').innerHTML = "tel have at least 8 charactére";
        document.getElementById('telError').style.color = "red";
    }


    console.log('my name', firstName)
    console.log('my last name', lastName)
    console.log('my email', email)
    console.log('my password', pwd)
    console.log('my confirm', confirmPwd)
    console.log('my number', tel)
    

    if (verifFirstName && verifLastName && verifEmail && verifPwd && (pwd == confirmPwd) && (tel.length == 8)) {
        //   Récupération de l'id

        var idUser = JSON.parse(localStorage.getItem("idUser") || "1");

        //  regroupement des valeurs dans un objet JSON

        var user = {
            id: idUser,
            firstName: firstName,
            lastName: lastName,
            email: email,
            pwd: pwd,
            confirmPwd: confirmPwd,
            tel: tel,
            role: "user"

        };

        // recupertaion des anciens utilisateurs 

        var users = JSON.parse(localStorage.getItem("users") || "[]");

        // ajout de l'objet user dans le tableau users 

        users.push(user);

        //  sauvegarde des utilisateurs

        localStorage.setItem("users", JSON.stringify(users));

        // incrémantation de l'id et sauvegarde 

        localStorage.setItem("idUser", idUser + 1);

    }
}

function verifLength(chaine, nb) {
    return chaine.length >= nb;
}


function validateEmail(email) {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase());
}