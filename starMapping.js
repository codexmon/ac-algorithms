//Map the Stars!

//Return a new array that transforms the element's average altitude into their orbital periods.

//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

//You can read about orbital periods on wikipedia. https://en.wikipedia.org/wiki/Orbital_period

//The values should be rounded to the nearest whole number. The body being orbited is Earth.

//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

//Helpful Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

/According to Kepler’s Third Law, the orbital period T (in seconds) of two point masses orbiting each other in a circular or elliptic orbit is:[2]

// {\displaystyle T=2\pi {\sqrt {\frac {a^{3}}{\mu }}}} {\displaystyle T=2\pi {\sqrt {\frac {a^{3}}{\mu }}}}
// where:

// a is the orbit’s semi-major axis
// μ = GM is the standard gravitational parameter
// G is the gravitational constant,
// M is the mass of the more massive body.
// For all ellipses with a given semi-major axis the orbital period is the same, regardless of eccentricity.

// Inversely, for calculating the distance where a body has to orbit in order to have a given orbital period:

// {\displaystyle a={\sqrt[{3}]{\frac {GMT^{2}}{4\pi ^{2}}}}} {\displaystyle a={\sqrt[{3}]{\frac {GMT^{2}}{4\pi ^{2}}}}}
// where:

// a is the orbit’s semi-major axis in meters,
// G is the gravitational constant,
// M is the mass of the more massive body,
// T is the orbital period in seconds.
// For instance, for completing an orbit every 24 hours around a mass of 100 kg, a small body has to orbit at a distance of 1.08 meters from its center of mass.

// group pseudo code
//input: an array of objects
//output: new array of objects (objects that have keys for name and orbital period)

//purpose: calculate the orbital period of objects orbiting Earth

//Create a new variable orbitalArr as a new array
//Loop through the elemnts of the input array
   // Calculate orbitalPeriod
       //orbitalPeriod = 2 * Math.PI * squareroot of a^3/GM
       //a = average altitude + earthRadius
       //create the name key for the object, and then create the orbitalPeriod key for the object
   //Push new elements into the orbitalArr

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  //your code here
  var orbitalArr = [];
  for (var i = 0; i = arr.length; i++){
      var a = arr[i].avgAlt * earthRadius;
      var orbitalPeriodCalc = Math.round(2 * Math.PI * (Math.sqrt(Math.pow(a,3)/GM)));
      var calcObj = {};
      calcObj.name = arr[i].name;
      calcObj.orbitalPeriod = orbitalPeriodCalc;
      orbitalArr.push(calcObj);
  }
  return orbitalArr;
 }

 orbitalPeriod([{name : “sputnik”, avgAlt : 35873.5553}]);

//TEST CASES

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
//orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].