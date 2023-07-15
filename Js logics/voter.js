var age=prompt("please enter your age");
if(age<18){
    document.write("YOU ARE TOO YOUNG TO VOTE");
}
    else if(age>=18){
        alert("you are eligible to vote");
    }

    var answer=prompt("Did you register to vote");
    if(answer=='yes'){
        document.write("You can vote");
    }else{
        document.write("You need to register");
    }