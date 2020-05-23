var time = 60;
function starttimer(){
    setInterval(tplus, 1000);
    function tplus(){
        time--;
        if(time==0){
            alert('Out Of Time!!');
            location.reload();
        }
        document.getElementsByClassName('timer')[0].innerHTML="Remaining Time: "+ time;
        if(time<=10){document.getElementsByClassName('timer')[0].style.color = "red";}
       
    }

}



$("#start").click(function (){
    $('.intro').fadeOut();
    $("#cardbox").fadeIn();
    starttimer();

});

function remarray(arr, index){
    for(var l=index;l<arr.length-1;l++){
        arr[l]=arr[l+1];
    }
    arr.pop();
}
var cardvals  = document.getElementsByClassName('card');
var nums = [1, 2, 3, 4, 5, 6,7 , 8, 1, 2, 3, 4, 5, 6, 7, 8];

for(var o=0;o<16;o++){
    var rand = Math.floor(Math.random()*nums.length); 
    cardvals[o].children[0].innerHTML = nums[rand];
    remarray(nums, rand);
}






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
        alert("You Completed The game in "+ (60-time) +" seconds and with "+(8-counter) +" guesses remaining!!!" );
        location.reload();
    }
    if(counter==8){
        alert("Out of Guesses");
        location.reload();
    }
  

        


        
        

      

    }
    });


