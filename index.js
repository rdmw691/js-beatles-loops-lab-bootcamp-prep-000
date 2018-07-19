// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  let i = 0
  var array = []
  while (i < facts.length) {
    array.push(facts[i] + "!!!")
    i++
  } return array
}

function iLoveTheBeatles(number) {
  let i = 0
  var array = []
  do {
    array.push("I love the Beatles!")
  } while (number[i] < 15 && maybeTrue())
  return array
}
