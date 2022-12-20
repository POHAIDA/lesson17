console.log('You can ignore single and double quotes like this: \\\'\\\' \\" \\\"'); 

alert('Please enter your data');
let username=prompt('Enter yor name','Unknow');
alert(`Your name is: ${username}`);
let surname=prompt('Enter your surname','Unknow')
alert(`Your full name is: ${username} ${surname}`);
let age=prompt('How old are you','Age');
alert(`Your full name is: ${username} ${surname},your age is:${age}`);
let admin=confirm('Are you an admin?')
alert(`Your full name is: ${username} ${surname},your age is:${age},access status: ${admin}`);

