let calculation = localStorage.getItem('calculation') || '';
    display();

    function updateCalculation(num){
      calculation+=num;
      display();
      localStorage.setItem('calculation', calculation);
    }

    function display(){
      document.querySelector('.js-result').innerHTML = calculation;
    }