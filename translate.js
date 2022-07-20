//Translate objesi
function Translate(word,language){
    this.apikey = "";
    this.word = word;
    this.language = language;

    //AJAX için XHR objesi
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    //Ajax işlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text;

            callback(null,text); //null :Hata yok, text: doğru çeviri
        }else{
            console.log("Bir hata oluştu",null);
        }
    }

    this.xhr.send();
}

Translate.prototype.changeParameters = function(newWord, newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}
