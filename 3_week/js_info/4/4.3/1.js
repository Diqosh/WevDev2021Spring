user = {
    sayHi: function() {
      alert("Привет");
    }
  };
  
  // сокращённая запись выглядит лучше, не так ли?
  user = {
    sayHi() { // то же самое, что и "sayHi: function()"
      alert("Привет");
    }
  };