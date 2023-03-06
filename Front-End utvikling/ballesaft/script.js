function complexCalculation() {
    for (let i = 0; i < 1000; i++) {
      console.log(i);
    }
  }
  
  // Run three separate tests below
  
  console.time('myTimer');
  complexCalculation();
  console.timeEnd('myTimer');
  // Logs:
  // myTimer: 101ms - timer ended
  
  console.time('myTimer');
  complexCalculation();
  console.timeEnd('myTimer');
  // Logs:
  // myTimer: 155ms - timer ended
  
  console.time('myTimer');
  complexCalculation();
  console.timeEnd('myTimer');
  // Logs:
  // myTimer: 128ms - timer ended