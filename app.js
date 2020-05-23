
$("#start").click(function (){
    $('.intro').fadeOut();
    $("#cardbox").fadeIn();


});

var counter = 0;
var response  = [];

window.addEventListener('click', function (e) {
    if(e.target.classList.contains('card')){
        var c = e.target.children[0];
        c.style.visibility="visible";
        e.target.classList.add('selected');
        response.push(e.target);

        if(response.length==2){
            if(response[0].children[0].innerText==response[1].children[0].innerText){
                response[0].classList.remove('selected');
                response[0].classList.add('done');
                response[1].classList.remove('selected');
                response[1].classList.add('done');
                response=[];
            }
            else{
                counter++;
                document.getElementById('guess').innerText="Guesses Remaining: "+ (8-counter);
                if(counter==6){document.getElementById('guess').style.color = "red";}
                setTimeout(function (){
                response[0].classList.remove('selected');
                response[1].classList.remove('selected');
                response[0].children[0].style.visibility='hidden';
                response[1].children[0].style.visibility='hidden';
                response = [];
                },500);
        }
    }

    var x = document.getElementsByClassName('done');
    if(x.length==16){
        alert("You Completed The game with "+(8-counter) +" guesses remaining!!" );
        location.reload();
    }
    if(counter==8){
        alert("Out of Guesses");
        location.reload();
    }


        


        
        

      

    }
    });