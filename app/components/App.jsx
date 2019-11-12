const React = require("react");

const firstName = {
  a: "Blubberbutt",
  b: "Benedict",
  c: "Benadryl",
  d: "Benchthis",
  e: "Bonapart",
  f: "Brokenbrick",
  g: "Boppinstick",
  h: "Benefit",
  i: "Scissorkick",
  j: "Backitup",
  k: "Beelzebub",
  l: "Burgerking",
  m: "Blenderdick",
  n: "Billiardball",
  o: "Guiltyverdict",
  p: "Beanbag",
  q: "Carrotstick",
  r: "Brodyquest",
  s: "Beachbody",
  t: "Bendylick",
  u: "Baseballmitt",
  v: "Bedbug",
  w: "Bunsenburner",
  x: "Bengaltiger",
  y: "Budapest",
  z: "Handpicked"
};

const lastName = {
  a: "Calldispatch",
  b: "Comedicmismatch",
  c: "Cunningscratch",
  d: "Cumberfinch",
  e: "Humperdinck",
  f: "Lumberlatch",
  g: "Flubbercrack",
  h: "Cumberbatch",
  i: "Bandersnatch",
  j: "Cuttlefish",
  k: "Slumberbelch",
  l: "Cupboardlatch",
  m: "Combyourthatch",
  n: "Thundermunch",
  o: "Cricketbat",
  p: "Johnnycash",
  q: "Comelycat",
  r: "Custardbath",
  s: "Thundercats",
  t: "Numbercrunch",
  u: "Luckycatch",
  v: "Covertrack",
  w: "Uptoscratch",
  x: "Compasstrap",
  y: "Chunkybap",
  z: "Candygram"
};

const firstNameArray = Object.values(firstName);
const lastNameArray = Object.values(lastName);

const generatedName = function() {
  return {
    name:
      firstNameArray[Math.floor(Math.random() * 26)] +
      " " +
      lastNameArray[Math.floor(Math.random() * 26)]
  };
};

const App = class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = generatedName();
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState(generatedName());
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.handler}>Another one!</button>
      </div>
    );
  }
};

module.exports = App;
