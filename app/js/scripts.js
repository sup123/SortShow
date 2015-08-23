var sortStep = function(list, timer) {
  /* Check if the list is in order */
  if (isInOrder(list)) {

  } else {
    /* Do one step of sorting */

  }
}

/* Kruskal's version of selection sort */
var selectionSort = function(list) {

  for (var i = list.length - 1; i >= 1; i--) {
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
