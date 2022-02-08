(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for(var i in names){
        var name = names[i];
        var ch= name[0];

        var character1="j";
        var character2="J";

        if (ch == character1 || ch == character2) {
            byeSpeaker.speak(name);
        }
        else{
            helloSpeaker.speak(name);
        }  
    }

})();

