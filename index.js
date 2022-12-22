let number=7;
for(let i=0;i<number;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function ()
    {
        let key=this.textContent;      
        makesounnd(key);
        animations(key);
    });
    
}
document.addEventListener("keypress", function(event){
    makesounnd(event.key);
    animations(event.key);

});
function makesounnd(textContent)
{
    switch(textContent)
        {
            case 'W':
                let audio= new Audio("sounds/1.mp3");
                audio.play();
                break;
            case 'A':
                let audio2= new Audio("sounds/2.mp3");
                audio2.play();
                break;
            case 'S':
                let audio3= new Audio("sounds/3.mp3");
                audio3.play();
                break;
            case 'D':
                let audio4= new Audio("sounds/4.mp3");
                audio4.play();
                break;
            case 'F':
                let audio5= new Audio("sounds/5.mp3");
                audio5.play();
                break;
            case 'G':
                let audio6= new Audio("sounds/6.mp3");
                audio6.play();
                break;
            case 'H':
                let audio7= new Audio("sounds/7.mp3");
                audio7.play();
                break;
            default:
                alert("press the capslock and then press the key");
        }
}
function animations(currentkey)
{
    let anima=document.querySelector("."+currentkey);
    anima.classList.add("pressed");
    setTimeout(function(){
        anima.classList.remove("pressed")
    },1000);
}
