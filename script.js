let question;
let answer;
let firstquestion = Number(prompt('Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math'));
switch(firstquestion) {
    case 1:
        question = "რა არის typeof(5)?";
        answer = prompt(question);
        if(answer == 'number' || answer == 'NUMBER' || answer == 'NumBeR'){
            alert('პასუხი სწორია');
        } else {
            alert('სამწუხაროდ ვერ გამოიცანით');
        }
        break;
    case 2:
        question = "შეიძლება თუ არა let-ის რედეკლალირება";
        answer = prompt(question);
        if(answer == 'Yes' || answer == 'yes' || answer == 'YeS'){
            alert('პასუხი სწორია');
        } else {
            alert('სამწუხაროდ ვერ გამოიცანით');
        }
        break;
     case 3:
        question = "რას აბრუნებს console.log(Math.floor(2.1))";
        answer = prompt(question);
        if(answer == 'ori' || answer == 'ORI' || answer == 'oRi'){
            alert('პასუხი სწორია');
        } else {
            alert('სამწუხაროდ ვერ გამოიცანით');
        }
        break;
}