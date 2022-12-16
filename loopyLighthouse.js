//prints numbers 100 - 200
//if a multiple of 3 print "Loopy"
//if a multiple of 4 print "Lighthouse"
//if a multiple of 3 and 4 print "LoopyLighthouse"

const printer = function () {
  for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
      console.log("loopy");
    }
    if (i % 4 === 0) {
      console.log("lighthouse");
    }
    if (i % 3 === 0 && i % 4 === 0) {
      console.log("LoopyLighthouse");
    } else {
      console.log(i);
    }
  }
};

printer();
