/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  var word_col = words;
  var temp_prefix;
    for(var i = 0; i < words.length; i++)
    {
        if(
          word_col[0].slice(0,i) == word_col[1].slice(0,i) &&
          word_col[1].slice(0,i) == word_col[2].slice(0,i)
          )
        {
          temp_prefix = word_col[0].slice(0,i);
        }
    }
  return temp_prefix;
}

console.log(result(words));
