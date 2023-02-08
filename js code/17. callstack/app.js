// call stack: last in first out in function

function f1() {
  console.log("f1 start");
  f2();

  function f2() {
    console.log("f2 start");
    f3();

    function f3() {
      console.log("f3 start");
      console.log("f3 end");
    }

    console.log("f2 end");
  }

  console.log("f1 end");
}

f1();
