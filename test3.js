/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  data.forEach((element, index) => {
      for(const property in element)
      {
          if(property == 'classes')
          {
            for(const property2 in data[index]['classes'])
            {
              if(property2 == 'students' || data[index][property][property2] != undefined)
              {
                for(const property3 in data[index][property][property2])
                {

                }
              }
              else if(data[property][property2] == undefined || data[property][property2] == null)
              {
                  delete data[index][property][property2];
              }

            }
          }
          else if(data[index][property] == undefined)
          {
              delete data[index][property];
          }
      }
  });
  return data;
}

console.log(result(data));
