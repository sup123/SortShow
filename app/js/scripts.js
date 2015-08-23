var stepThrough = function(list) {
  /* Set up the timer to do walkthrough */
  var i = list.length - 1;
  var j = 1;
  var k = 0;

  var timedWalkthrough = setInterval(selectionSortWalkthrough(list, i , j, k), 1000);
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

var selectionSortWalkthrough = function(list, i, j, k) {
  /* This is one step within the sort function */
  /* If i is greater than 0 then the sort isn't finished */
  if (i > 0) {
    /* Check that j doesn't need to be reset */
    if (j < i) {
      if (list[j] > list[k]) {
        k = j;
      }
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
      }
    }

  }
}
