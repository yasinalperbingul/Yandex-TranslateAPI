
eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    //Change
    document.getElementById("language").onchange = function(){
        //Arayüz işlemleri
        ui.changeUI();
    }
}

const translate = new Translate(document.getElementById("word").value,document.getElementById("language".value));
const ui = new UI();

function translateWord(e){
    translate.changeParameters(document.getElementById("word").value,document.getElementById("language".value));
    
    translate.translateWord(function(err,response){
        if(err === null){
            // Response
            ui.displayTranslate(response);
        }else{
            // Error
        }
    });
    
    e.preventDefault();
}



