let randomVariable1=Math.floor(Math.random()*6)+1;
let randomImage="dice"+randomVariable1+".png";
let randomImaSrc1="images/"+randomImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImaSrc1);

let randomVariable2=Math.floor(Math.random()*6)+1;
let randomImage2="dice"+randomVariable2+".png";
let randomImgSrc2="images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2);

// if player1 wins
if(randomVariable1>randomVariable2)
{
    document.querySelector("h1").innerHTML="Player1 is the winner";
}
else if(randomVariable2>randomVariable1)
{
    document.querySelector("h1").innerHTML="Player2 is the winner";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}
