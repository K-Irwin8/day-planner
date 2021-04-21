function getToDo() {

    var todoText = document.getElementById("todoAdd").value;
    
//checkbox 宣言
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "testName";
    checkbox.value = "testValue";
    checkbox.id = "testId";
    
//checkbox 中身
    var label = document.createElement('label')
    label.htmlFor = "testId";
    label.appendChild(document.createTextNode(todoText));
    var spacer = document.createElement("br");

//page に表示
    checkboxer.appendChild(checkbox);
    checkboxer.appendChild(label);
    checkboxer.appendChild(spacer);
    

}





function dayStart() {   
    
    window.dayStartTime = document.getElementById("dayStart").value;


    
//content
    var label = document.createElement('label')
    label.id = "leftTimeTracker"
    label.htmlFor = "testId";
    label.appendChild(document.createTextNode(window.dayStartTime));
    var spacer = document.createElement("br");

//page に表示

timeTrack.appendChild(label);
timeTrack.appendChild(spacer);

//真ん中の new textbox
var contentbox = document.createElement('input');
contentbox.type = "text";
contentbox.name = "testName";
contentbox.value = "OKR (日記 and 今日の input & output)";
contentbox.id = "yay";
var breaker = document.createElement("br");
    

//textbox 表示させる

contentboxid.appendChild(contentbox);
contentboxid.appendChild(breaker);



}

// Add 25min to the input and then innerHTML
// あと休憩時間 5分も忘れずに

var i = 0; //これは line 97 あたりの fridayDayContent の内容 array のための初期値です！
function add25Min() {
    
    if(window.dayStartTime%100 < 30){
        // window.dayStartTime が最初 string だったため、 +30 しても didnt work. But Number (window.dayStartTime) すすことによって data type を number に変更 
        var nextStartTime = Number(window.dayStartTime) + 30; 
        
    } else {
        var nextStartTime = Number(window.dayStartTime) + 70;
        
    }
    
    var nextEndTime = nextStartTime + 25;

    window.dayStartTime = nextStartTime;

    //content
    var label = document.createElement('label')
    label.htmlFor = "testId";
    label.appendChild(document.createTextNode(nextStartTime));
    var spacer = document.createElement("br");

    //page に表示

    timeTrack.appendChild(label);
    timeTrack.appendChild(spacer);

    // "add 25" 押すときに 金曜日の予定が羅列されるようにする. line 100 に対応してます array
    var contentArray = ["", "本","tech","mindfulness (Eastern meditation => western meditation => vizualize)", "rest", "OKR (skills)", "YT", "Eat", "本", "OKR", "Intern", "Intern", "Rest", "Rest", "YT", "本", "OKR", "Intern", "OKR", "HAVE FUN !!!!!!🤩🤩"];
    i++;
    var fridayDayContent = contentArray[i];  
    

    //真ん中の new textbox
    var contentbox = document.createElement('input');
    contentbox.type = "text";
    contentbox.name = "testName";
    contentbox.value = fridayDayContent;
    contentbox.id = "yay";
    var breaker = document.createElement("br");
    

    //textbox 表示させる

    contentboxid.appendChild(contentbox);
    contentboxid.appendChild(breaker);

}


// template 機能
function template(){
     
}

//change the colour in the time portfolio

var counter1 = 0;

function timePortfolio1() {
    counter1 += 1;

    
        
    if(counter1 == 1){
        document.getElementsByClassName("col")[0].style.backgroundColor = "red";
    }

    if(counter1 == 2) {
        document.getElementsByClassName("col")[0].style.backgroundColor = "blue";
    }
    
    
}
var counter2 = 0;


function timePortfolio2() {
    counter2 += 1;

    
        
    if(counter2 == 1){
        document.getElementsByClassName("col")[1].style.backgroundColor = "red";
    }

    if(counter2 == 2) {
        document.getElementsByClassName("col")[1].style.backgroundColor = "blue";
    }
    
    
}
var counter3 = 0;


function timePortfolio3() {
    counter3 += 1;

    
        
    if(counter3 == 1){
        document.getElementsByClassName("col")[2].style.backgroundColor = "red";
    }

    if(counter3 == 2) {
        document.getElementsByClassName("col")[2].style.backgroundColor = "blue";
    }
    
    
}
var counter4 = 0;


function timePortfolio4() {
    counter4 += 1;

    
        
    if(counter4 == 1){
        document.getElementsByClassName("col")[3].style.backgroundColor = "red";
    }

    if(counter4 == 2) {
        document.getElementsByClassName("col")[3].style.backgroundColor = "blue";
    }
    
    
}
var counter5 = 0;


function timePortfolio5() {
    counter5 += 1;

    
        
    if(counter5 == 1){
        document.getElementsByClassName("col")[4].style.backgroundColor = "red";
    }

    if(counter5 == 2) {
        document.getElementsByClassName("col")[4].style.backgroundColor = "blue";
    }
    
    
}
var counter6 = 0;


function timePortfolio6() {
    counter6 += 1;

    
        
    if(counter6 == 1){
        document.getElementsByClassName("col")[5].style.backgroundColor = "red";
    }

    if(counter6 == 2) {
        document.getElementsByClassName("col")[5].style.backgroundColor = "blue";
    }
    
    
}
var counter7 = 0;


function timePortfolio7() {
    counter7 += 1;

    
        
    if(counter7 == 1){
        document.getElementsByClassName("col")[6].style.backgroundColor = "red";
    }

    if(counter7 == 2) {
        document.getElementsByClassName("col")[6].style.backgroundColor = "blue";
    }
    
    
}
var counter8 = 0;


function timePortfolio8() {
    counter8 += 1;

    
        
    if(counter8 == 1){
        document.getElementsByClassName("col")[7].style.backgroundColor = "red";
    }

    if(counter8 == 2) {
        document.getElementsByClassName("col")[7].style.backgroundColor = "blue";
    }
    
    
}
var counter9 = 0;


function timePortfolio9() {
    counter9 += 1;

    
        
    if(counter9 == 1){
        document.getElementsByClassName("col")[8].style.backgroundColor = "red";
    }

    if(counter9 == 2) {
        document.getElementsByClassName("col")[8].style.backgroundColor = "blue";
    }
    
    
}
var counter10 = 0;


function timePortfolio10() {
    counter10 += 1;

    
        
    if(counter10 == 1){
        document.getElementsByClassName("col")[9].style.backgroundColor = "red";
    }

    if(counter10 == 2) {
        document.getElementsByClassName("col")[9].style.backgroundColor = "blue";
    }
    
    
}
var counter11 = 0;


function timePortfolio11() {
    counter11 += 1;

    
        
    if(counter11 == 1){
        document.getElementsByClassName("col")[10].style.backgroundColor = "red";
    }

    if(counter11 == 2) {
        document.getElementsByClassName("col")[10].style.backgroundColor = "blue";
    }
    
    
}
var counter12 = 0;


function timePortfolio12() {
    counter12 += 1;

    
        
    if(counter12 == 1){
        document.getElementsByClassName("col")[11].style.backgroundColor = "red";
    }

    if(counter12 == 2) {
        document.getElementsByClassName("col")[11].style.backgroundColor = "blue";
    }
    
    
}
var counter13 = 0;


function timePortfolio13() {
    counter13 += 1;

    
        
    if(counter13 == 1){
        document.getElementsByClassName("col")[12].style.backgroundColor = "red";
    }

    if(counter13 == 2) {
        document.getElementsByClassName("col")[12].style.backgroundColor = "blue";
    }
    
    
}

