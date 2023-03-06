const names = [
    { firstName: 'Ola', lastName: 'Nordmann' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Jan', lastName: 'Jansen' },
  ];

  const combinedNames = names.map((person) => {
    console.log(person.firstName, person.lastName);
    
    return `${person.firstName} ${person.lastName}`;
    
  });


  const rectangles = [
    { length: 30, width: 20 },
    { length: 10, width: 10 },
    { length: 40, width: 40 },
  ];
  
  const areas = rectangles.map(function (rectangle) {
    return rectangle.length * rectangle.width;
  });
//   const areas = rectangles.map(((rectangle) => rectangle.length * rectangle.width));

  console.log(areas);
  
  