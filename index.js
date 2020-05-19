var arr = [];
var elementToBeSearched;
var elementFoundAt;



// Generating  Array
$(".arraygen").on("click", function(event) {
  for (var i = 0; i < 10; i++) {
    $(".e" + i).removeClass("bg-purple");
    $(".e" + i).removeClass("bg-red");
    $(".e" + i).removeClass("bg-green");
  }
  generateRandomArray();
  displayRandomArray();
  enableButton(".algo");
  $("h3").text("Click on the Algorithm you wish to visualize");
  $("h4").text("");

  console.log(elementToBeSearched);
});



// Linear Search
$(".linear-search").on("click", function(event) {
  disableButton(".btn");
  $("h3").text("Algorithm Running:  Linear Search");

  linearSearch(elementToBeSearched);
  enableButton(".arraygen");
});



// Binary Search
$(".binary-search").on("click", function(event) {
  disableButton(".btn");
  $("h3").text("Algorithm Running: Binary Search");
  bubbleSort();
  displayRandomArray();

  binarySearch(elementToBeSearched);

  enableButton(".arraygen");
});



// Functions

function bubbleSort() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j <= 8 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}


function binarySearch(element) {

  $("h4").text("Searching " + element + " in the array");
  var flag = -1;
  var l = 0;
  var r = 9;
  var mid;
  var it = setInterval(iterate, 2000);
  function iterate() {
    if (l <= r) {

      mid = Math.floor((l + r) / 2);
      setTimeout(function() {
        $(".e" + mid).addClass("bg-purple");
      });

      if (arr[mid] === element) {
        setTimeout(function() {
          $(".e" + mid).removeClass("bg-purple");
          $(".e" + mid).addClass("bg-green");
          $("h4").text("Element found at index " + mid);
        }, 1500);
        flag = 1;
      } else if (arr[mid] < element) {
        setTimeout(function() {
          $(".e" + mid).removeClass("bg-purple");
          for (var j = mid; j >= l; j--) {
            $(".e" + j).addClass("bg-red");
          }
          l = mid + 1;
        }, 1500);
      } else {
        setTimeout(function() {
          $(".e" + mid).removeClass("bg-purple");
          for (var j = mid; j <= r; j++) {
            $(".e" + j).addClass("bg-red");
          }
          r = mid - 1;
        }, 1500);
      }
    }
    if (flag === 1) {
      clearInterval(it);
    }
    if (l > r) {
      $("h4").text("Element not present in the Array");
      clearInterval(it);
    }
  }

}


function linearSearch(element) {

  $("h4").text("Searching " + element + " in the array");
  var flag = -1;
  for (let i = 0; i < 10; i++) {
    setTimeout(function() {
      $(".e" + i).addClass("bg-purple");
    }, 1500 * (i));
    if (arr[i] === element) {
      setTimeout(function() {
        $(".e" + i).removeClass("bg-purple");
        $(".e" + i).addClass("bg-green");
        $("h4").text("Element found at index " + i);
      }, 1500 * (i + 1));
      flag = 1;
      break;
    } else {
      setTimeout(function() {
        $(".e" + i).removeClass("bg-purple");
        $(".e" + i).addClass("bg-red");
      }, 1500 * (i + 1));
    }
  }
  if (flag === -1) {
    $("h4").text("Element not present in the Array");
  }
}


function generateRandomArray() {
  for (var i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  var index = Math.floor(Math.random() * 10);
  elementToBeSearched = arr[index];
}


function displayRandomArray() {
  for (var i = 0; i < 10; i++) {
    $(".e" + i).text(arr[i]);
  }
}


function disableButton(button) {
  $(button).prop("disabled", true);
}


function enableButton(button) {
  $(button).prop("disabled", false);
}
