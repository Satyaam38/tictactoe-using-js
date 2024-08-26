var winningCondition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var cross=true;
var audio=new Audio("./button-202966.mp3");
$(".box").click(function(){
    if(cross==true){
        $(this).html("X");
        cross=false;
    }
    else{
        $(this).html("O");
        cross=true;
    }
    $(this).attr("disabled","disabled");
    checkAnswer();
    audio.play();
});
function checkAnswer(){
    for(let i of winningCondition){
            let pos1=$(".box")[i[0]].innerText;
            let pos2=$(".box")[i[1]].innerText;
            let pos3=$(".box")[i[2]].innerText;

            if(pos1!="" && pos2!="" && pos3!=""){
                if(pos1==pos2 && pos2==pos3){
                    $(".box").attr("disabled","disabled");
                    setTimeout(function(){
                        alert("The winner is "+pos1);
                    },500);
                }
            }
    }
}
$(".over").click(function(){
    
    $(".box").text("");
    $(".box").removeAttr("disabled");
})
