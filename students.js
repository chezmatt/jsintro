var users = {
        'Students': [
          {first_name:  'Michael', last_name : 'Jordan'},
          {first_name : 'John', last_name : 'Rosales'},
          {first_name : 'Mark', last_name : 'Guillen'},
          {first_name : 'KB', last_name : 'Tonel'}
        ],
      'Instructors': [
          {first_name : 'Michael', last_name : 'Choi'},
          {first_name : 'Martin', last_name : 'Puryear'}
        ]
      };
      function printUsers(arr) {
        for (var i=0; i<arr.length;i++) {
          console.log(arr[i].first_name+' '+arr[i].last_name);
          }
      }
printUsers(users.Students);
printUsers(users.Instructors);
