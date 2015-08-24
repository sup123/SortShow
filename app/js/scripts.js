var i,j,k, isSorted, timedWalkthrough, globallist;

var stepThrough = function(list) {
  /* Set up the timer to do walkthrough */
  i = list.length - 1;
  j = 1;
  k = 0;
  globallist = list;

  timedWalkthrough = setInterval(function () { selectionSortWalkthrough(list) }, 2000);

}

/* Kruskal's version of selection sort */
var selectionSort = function(list) {

  for (var i = list.length - 1; i > 0; i--) {
    var k = 0;
    for (var j = 1; j <= i; j++) {
      if (list[j] > list[k]) {
        k = j;
      }
    }

    var tempVar = list[i];
    list[i] = list[k];
    list[k] = tempVar;
  }

}

var isSorted = function(arr) {
  var sorted = true;

  for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
          sorted = false;
          break;
      }
  }

  return sorted;
}

var update = function(list, otherlist) {
  for (var i = 0; i < list.length; i++) {
    list[i] = otherlist[i];
  }
}


var selectionSortWalkthrough = function(list, i, j, k) {
  console.log("i: " + i);
  console.log("j: " + j);
  console.log("k: " + k);
  /* This is one step within the sort function */
  /* If i is greater than 0 then the sort isn't finished */
  if (i > 0) {
    /* Check that j doesn't need to be reset */
    if (j < i) {
      if (list[j] > list[k]) {
        k = j;
      }

      /* Increment j */
      j++;
    } else {
      /* This is the end of the for loop so update k and j appropriately */
      if (j = i) {
        if (list[j] > list[k]) {
          k = j;
        }

        /* Make switches in the list if necessary and reset variables */
        var tempVar = list[i];
        list[i] = list[k];
        list[k] = tempVar;

        k = 0;
        j = 1;
        i--;
      }
    }
  }

  return { "list" : list, "i" : i, "j" : j, "k" : k };

}
