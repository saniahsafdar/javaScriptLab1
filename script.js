let myName = "Saniah";
let age = "27";
let birthday = "June 21st";
let detroitGC = true;
let lifeEvents = [
  "I was born in Detroit, Michigan.",
  "I did my first kickflip last year.",
  "I majored in Graphic Design at Oakland University.",
  "I have been to both Coasts of the USA.",
];

if ((detroitGC = true)) {
  console.log(
    `My name is ${myName} and I a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old, and my birtheday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${myName} and I a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old, and my birtheday is on ${birthday}.`
  );
}

for (let lifeEvent of lifeEvents) {
  console.log(lifeEvent);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);

  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5.`);
  } else {
    counter++;
    console.log(
      `It took ${counter} iterations times to genterate the number 5.`
    );
    break;
  }


}
