
let signUp = document.getElementsByClassName("sign-up")[0];
let logIn = document.getElementsByClassName("log-in")[0];
let main = document.getElementsByTagName("main")[0];

/*Buttons */
let logButton = document.getElementById("log");
let signButton = document.getElementById("register");

/*Note how the click uses a double quotes.*/
logButton.addEventListener("click",function (){
    /* main.style.animation = "mainAnimation 2s linear";*/
    main.style.transform = "rotateY(360deg)";
    signUp.style.display = "block";
    logIn.style.display = "none";
});
/*trying*/
signButton.addEventListener("click",function (){
    /*main.style.animation = "mainAnimation 2s linear";*/
    /*You have to re-rotate it to 0 for it
    to show the rotate effect, because if
    you dont change it to zero it will remain in the same state*/
    main.style.transform = "rotateY(0deg)";
    logIn.style.display = "flex";
    signUp.style.display = "none";
});

/*The validation part.*/
let firstName = document.querySelectorAll(".FirstName");
let labelFirst  = document.querySelectorAll(".label-first")
let initialLabelText = []
labelFirst.forEach(function(value,index){
    initialLabelText[index] = value.innerHTML
})
firstName.forEach( function(fname,index){
    // funny thing the change event is only working after we click elsewhere and not as the text changes
    fname.addEventListener("keyup",function(e){
    labelFirst.forEach(function(value,lindex){
        // since the label and the input will be using same indexes differentiate them with their indexes.
        if(lindex == index){
            let result = e.target.value
            //let result = e.target.value.match(/^\w+$/);
            if(result != ""){
                value.innerHTML = initialLabelText[lindex]
                value.classList.remove("label-invalid")
                value.classList.add("label-valid")
                fname.classList.remove("label-invalid")
                fname.classList.add("label-valid")
                fname.value = e.target.value;
            }
            else if(result == ""){
                value.classList.remove("label-valid")
                value.classList.add("label-invalid")
                fname.classList.remove("label-valid")
                fname.classList.add("label-invalid")
                value.innerHTML = "Input a value for the First Name please";
                fname.value = "";
            }
            else{
                value.classList.remove("label-valid")
                value.classList.add("label-invalid")
                fname.classList.remove("label-valid")
                fname.classList.add("label-invalid")
                value.innerHTML = "Input a valid value please";
            }
            buttonEnabler();
        }
    })
})})
let secondClass = document.getElementById("SecondName")
let labelS = document.getElementById("label-second")
let initialSText = labelS.innerHTML
secondClass.addEventListener("keyup",function(e){
        // since the label and the input will be using same indexes differentiate them with their indexes.
            let result = e.target.value
            //let result = e.target.value.match(/^\w+$/);
            if(result != ""){
                labelS.innerHTML = initialLabelText[lindex]
                labelS.classList.remove("label-invalid")
                labelS.classList.add("label-valid")
                secondClass.classList.remove("label-invalid")
                secondClass.classList.add("label-valid")
                secondClass.value = e.target.value;
            }
            else if(result == ""){
                labelS.classList.remove("label-valid")
                labelS.classList.add("label-invalid")
                secondClass.classList.remove("label-valid")
                secondClass.classList.add("label-invalid")
                labelS.innerHTML = "Input a value for the First Name please";
                secondClass.value = "";
            }
            else{
                labelS.classList.remove("label-valid")
                labelS.classList.add("label-invalid")
                secondClass.classList.remove("label-valid")
                secondClass.classList.add("label-invalid")
                labelS.innerHTML = "Input a valid value please";
            }
            buttonEnabler();
})

let emailClasses= document.querySelectorAll(".Email");
let labelEmails = document.querySelectorAll(".label-email")
let initialELabelText = []
labelEmails.forEach(function(value,index){
    initialELabelText[index] = value.innerHTML
})
emailClasses.forEach(function(evalue,emailIndex){
    evalue.addEventListener("keyup",function(e){
        labelEmails.forEach(function(lvalue,lindex){
            if(lindex == emailIndex){
    
                /*Note that this is my email validation
                man my own creation.
                Its good to have your own validation criteria*/
                let result = e.target.value.match(/^\w+(\.\*&\d\w)*@\w+(\.)*(\.+\w{2,3}){1,2}/);
                if(result != null){
                    lvalue.innerHTML = initialELabelText[lindex]
                    lvalue.classList.remove("label-invalid")
                    lvalue.classList.add("label-valid")
                    evalue.classList.remove("label-invalid")
                    evalue.classList.add("label-valid")        
                    evalue.value = e.target.value;
                }
                else if(e.target.value == ""){
                    lvalue.classList.remove("label-valid")
                    lvalue.classList.add("label-invalid") 
                    evalue.classList.remove("label-valid")
                    evalue.classList.add("label-invalid")
                    lvalue.innerHTML = "Input a value for the email please";
                }
                else{
                    lvalue.classList.remove("label-valid")
                    lvalue.classList.add("label-invalid") 
                    evalue.classList.remove("label-valid")
                    evalue.classList.add("label-invalid")
                    lvalue.innerHTML = "input a valid email please";
                }
                buttonEnabler();

            }
        })
    })
})
let phoneNumber = document.getElementById("PhoneNumber")
let labelNo = document.querySelector(".label-no")
let initialNoText = labelNo.innerHTML
phoneNumber.addEventListener('keyup',function(e){ 
    // for this validation of mine I want it to work with the country codes, so I might try and use one of the country code's APIs.  
    // This regex works very well, it simply matches the 10 digits but now the issue is it also matches numbers that have the 10 numbers in them so you somehow just have to have a negative regex for it to work well.
    // tried with the upper limit range and wasnt working thats why i used  the negation
    let result = e.target.value.match(/(^(07)\d{8}|\+\d{3}\d{9})/); // the | symbol in a bracket stands for either of execution, it simply gives options of  the values to use.
    let resultNegation = e.target.value.match(/(^(07)\d{9}|\+\d{3}\d{10})/)
    if(result != null && resultNegation == null ){

        phoneNumber.classList.remove("label-invalid")
        phoneNumber.classList.add("label-valid")
        labelNo.classList.remove("label-invalid")
        labelNo.classList.add("label-valid")
        labelNo.innerHTML = initialNoText
    }
    else if(e.target.value == ""){
        phoneNumber.classList.remove("label-valid")
        phoneNumber.classList.add("label-invalid")
        labelNo.classList.remove("label-valid")
        labelNo.classList.add("label-invalid")
        labelNo.innerHTML = "input a value phone number please."
    }
    else{
        phoneNumber.classList.remove("label-valid")
        phoneNumber.classList.add("label-invalid")
        labelNo.classList.remove("label-valid")
        labelNo.classList.add("label-invalid")
        labelNo.innerHTML = "input a valid phone number please"
    }
    buttonEnabler();
})
let labelPasswords = document.querySelectorAll(".label-password")
let password = document.querySelectorAll(".password")
let initialPLabel = []
labelPasswords.forEach(function(lpValue,index){
    initialPLabel[index] = lpValue.innerHTML
})
password.forEach(function(pElement,pIndex){
    pElement.addEventListener("keyup",function(e){
        labelPasswords.forEach(function(lvalue,lindex){
            if(lindex == pIndex){
    
                //+ matches one or more
                // test result, remove it after testing it.
                let result = e.target.value.match(/[a-z]+\d+/)
                //let result = e.target.value.match(/([a-z]+)([A-Z]+)([\*\.!@#\$%\^&(_){\+-}\[\]\;\/<:>]+)/);
                if(result != null){
                    lvalue.innerHTML = initialPLabel[lindex]
                    lvalue.classList.remove("label-invalid")
                    lvalue.classList.add("label-valid")
                    pElement.classList.remove("label-invalid")
                    pElement.classList.add("label-valid")        
                    pElement.value = e.target.value;
                }
                else if(e.target.value == ""){
                    lvalue.classList.remove("label-valid")
                    lvalue.classList.add("label-invalid")
                    pElement.classList.remove("label-valid")
                    pElement.classList.add("label-invalid")
                    lvalue.innerHTML = "Input a valid password please";
                }
                else{
                    lvalue.classList.remove("label-valid")
                    lvalue.classList.add("label-invalid") 
                    pElement.classList.remove("label-valid")
                    pElement.classList.add("label-invalid")
                    lvalue.innerHTML = "input a valid password please";
                }
                buttonEnabler();

            }
        })
    })
})

let register = document.getElementById("Register");
let button = document.getElementById("LogIn");
function buttonEnabler(){
    /*Note that this function is called by the
    onchange events of the input elements.
    and note the button itself.*/
    /*let valueCount = 0;
    let signCount = 0;
    let formInputs = document.forms[1];
    let signInputs = document.forms[0];
    for(let i = 0; i < formInputs.elements.length; i++){
        /*Note that the submit button is also 
        classified as a form element. So its valueis also output*/
        /*
        if(formInputs.elements[i].value.length > 0){
            valueCount += 1;
            /*use greater than cause inahesabu hadi
            submit button form element.*/
            /*if(valueCount >= 2){
                /*This trick is from stack overflow
                man that site is awesome.*/
                //button.removeAttribute("disabled");
            /*Use removeAttribute or setAttribute
            for the html attributes that dont require
            values such as the disabled.
            Remember however that the setAttribute always requires
            two parameters.*/
            /*}
        }*/
        /*my new version of enabling the button.*/
        let loginInputs = document.querySelectorAll(".Login input")
        let valueCount = 0;
        loginInputs.forEach(function(inputElement,index){
            if(inputElement.value != ""){
                valueCount++;
            }
            if(valueCount == 2){
                button.removeAttribute("disabled");
            }
        })

        // for signUp side
        let signupInputs = document.querySelectorAll(".Login input")
        let svalueCount = 0;
        signupInputs.forEach(function(inputElement,index){
            if(inputElement.value != ""){
                svalueCount++;
            }
            if(svalueCount == 5){
                register.removeAttribute("disabled");
            }
        })
        
    }
    /*for the signUp
    for(let i = 0; i < signInputs.elements.length; i++){
        /*Note that the submit button is also 
        classified as a form element. So its value
        is also output.
        if(signInputs.elements[i].value.length > 0){
            signCount += 1;
            /*use greater than cause inahesabu hadi
            submit button form element.
            if(signCount >= 4){
                /*This trick is from stack overflow
                man that site is awesome.
                register.removeAttribute("disabled");
            /*Use removeAttribute or setAttribute
            for the html attributes that dont require
            values such as the disabled.
            Remember however that the setAttribute always requires
            two parameters.
            }
        }
    }
}



/*Full validation for the onsubmit data */

