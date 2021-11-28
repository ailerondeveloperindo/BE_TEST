/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
 const data = [1, 4, 2, 3, 5, 3, 2, 4];

 function result(data) {
   var temp = []
   data.sort().forEach((element,index) => {
       if(element != data[index + 1])
       {
           temp.push(element);
       }
   }
   );
   return temp;
 }
 
 console.log(result(data));
 