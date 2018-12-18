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

const findName = function(first, last) {
  if (!first || !last || first.length === 0 || last.length === 0) {
    return "[pssst, we need a first and last name]";
  }
  
  const bcFirst = firstName[first[0].toLowerCase()];
  const bcLast = lastName[last[0].toLowerCase()];
  
  return bcFirst + " " + bcLast;
}

const App = function() {
  return (
    <div>
      <h1>
        What's your Benedict Cumberbatch name?
      </h1>
    </div>
  
}

const dependenciesArray = [
  'express - middleware for the node server',
  'react - for generating the views of the app',
  'react-dom - powers the rendering of elements to the DOM, typically paired with React',
  'webpack - for bundling all the javascript',
  'webpack-cli - command line support for webpack',
  'jsx-loader - allows webpack to load jsx files'
];

const componentsMade = [
  'HelloWorld - which is the view you are seeing now!',
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
];

/* the main page for the index route of this app */
const HelloWorld = function() {
  return (
    <div>
      <h1>Hello World!</h1>

      <p>This is a starter <a href="http://glitch.com">Glitch</a> app for React! It uses 
        only a few dependencies to get you started on working with React:</p>

      <UnorderedList items={dependenciesArray} />

      <p>Look in <code>app/components/</code> for two example components:</p>

      <UnorderedList items={componentsMade} />
    </div>
  );
}

module.exports = HelloWorld;