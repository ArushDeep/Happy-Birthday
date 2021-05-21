class Greeting {
  show() {
    var greeting1;
    greeting1 = createElement(`h1`, "Good Evening");
    greeting1.position(580, 150);

    var greeting2;
    greeting2 = createElement(`h3`, "Enter your name");
    greeting2.position(600, 200);
    //greeting1.size(100)

    var input1;
    input1 = createInput('');
    input1.position(585, 300);
    input1.size(170)

    var button1;
    button1 = createButton('Enter');
    button1.position(643, 350);
    button1.size(50)
    button1.mousePressed(
      function(){
        input1.hide();
        button1.hide();
        greeting2.hide();
        var name1 = input1.value();

        var greeting1 = createElement('h1');
        greeting1.html("Happy Birthday " + name1);
        greeting1.position(500, 300)
      }
    );
  }
}
