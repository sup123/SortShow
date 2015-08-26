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

/* This simply assigns the values of list
 * the values of otherlist
 */
var update = function(list, otherlist) {
  for (var i = 0; i < list.length; i++) {
    list[i] = otherlist[i];
  }
}

/**
 * Since for some reason, when $interval is used,
 * the function's variables dont change outside of
 * the function's scope so returning their values
 * so they can be updated outside the function is
 * necessary
 */
var selectionSortWalkthrough = function(list, i, j, k) {
  /* This is one step within the sort function */
  /* If i is greater than 0 then the sort isn't finished */
  if (i > 0) {
    /* Check that j doesn't need to be reset */
    if (j < i) {
      if (list[j] > list[k]) {
        k = j;
      }

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

/* Kruskal's version of insertion sort */
var insertionSort(list) {
  for (var i = 1; i < list.length; i++) {
    var temp = list[i];
    var j = i - 1;
      while ((temp < list[j]) && (j > 0)) {
        list[j + 1] = list[j];
        j = j + 1;
        /* Delay execution */
        setTimeout(function() {}, 2000);
      }
      list[j + 1] = temp;
      /* Delay execution */
      setTimeout(function() {}, 2000);
  }
}
