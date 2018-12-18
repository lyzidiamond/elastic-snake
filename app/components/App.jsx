const React = require('react');

const firstName = {
  "a": "Blubberbutt",
  "b": "Benedict",
  "c": "Benadryl",
  "d": "Benchthis",
  "e": "Bonapart",
  "f": "Brokenbrick",
  "g": "Boppinstick",
  "h": "Benefit",
  "i": "Scissorkick",
  "j": "Backitup",
  "k": "Beelzebub",
  "l": "Burgerking",
  "m": "Blenderdick",
  "n": "Billiardball",
  "o": "Guiltyverdict",
  "p": "Beanbag",
  "q": "Carrotstick",
  "r": "Brodyquest",
  "s": "Beachbody",
  "t": "Bendylick",
  "u": "Baseballmitt",
  "v": "Bedbug",
  "w": "Bunsenburner",
  "x": "Bengaltiger",
  "y": "Budapest",
  "z": "Handpicked"
};

const lastName = {
  "a": "Calldispatch",
  "b": "Comedicmismatch",
  "c": "Cunningscratch",
  "d": "Cumberfinch",
  "e": "Humperdinck",
  "f": "Lumberlatch",
  "g": "Flubbercrack",
  "h": "Cumberbatch",
  "i": "Bandersnatch",
  "j": "Cuttlefish",
  "k": "Slumberbelch",
  "l": "Cupboardlatch",
  "m": "Combyourthatch",
  "n": "Thundermunch",
  "o": "Cricketbat",
  "p": "Johnnycash",
  "q": "Comelycat",
  "r": "Custardbath",
  "s": "Thundercats",
  "t": "Numbercrunch",
  "u": "Luckycatch",
  "v": "Covertrack",
  "w": "Uptoscratch",
  "x": "Compasstrap",
  "y": "Chunkybap",
  "z": "Candygram"
};

const firstNameArray = Object.values(firstName);
const lastNameArray = Object.values(lastName);

const generatedName = firstNameArray[Math.floor(Math.random() * 26)] + " " + lastNameArray[Math.floor(Math.random() * 26)];

/* the main page for the index route of this app */
const App = function() {
  return (
    <div>
      <h2>Your Benedict Cumberbatch name is</h2>

      <p>This is a starter <a href="http://glitch.com">Glitch</a> app for React! It uses 
        only a few dependencies to get you started on working with React:</p>

      <UnorderedList items={dependenciesArray} />

      <p>Look in <code>app/components/</code> for two example components:</p>

      <UnorderedList items={componentsMade} />
    </div>
  );
}

module.exports = HelloWorld;