/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
    var my_number = numbers.sort();
    for(var i = 0; i < my_number.length; i++)
    {
      if((my_number[i + 1] - my_number[i]) != 1 )
      {
        return my_number[i] + 1;
      }
    }
}

console.log(result(numbers));
