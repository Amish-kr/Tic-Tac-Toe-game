let count = 0;
function fill(obj) {
   if(count<9){
    if(count%2 ==0){
    document.getElementById(obj.id).innerHTML = "O";
    count++;
    checkwinner();
    }
    else{
        document.getElementById(obj.id).innerHTML = "X";
    count++;
   checkwinner();
    }
}
    else
        alert('Game is finish and refresh the page with F5 to start new game');
}
  function checkwinner() {
      if(document.getElementById('div1').innerHTML=='X' && document.getElementById('div2').innerHTML=='X'&& document.getElementById('div3').innerHTML=='X'){
          alert('X is winner');
          count+=9;         
      }
     else if
        (document.getElementById('div4').innerHTML=='X' && document.getElementById('div5').innerHTML=='X'&& document.getElementById('div6').innerHTML=='X'){
        alert('X is winner');
        count+=9;        
        }
       else if(document.getElementById('div7').innerHTML=='X' && document.getElementById('div8').innerHTML=='X'&& document.getElementById('div9').innerHTML=='X'){
            alert('X is winner');
            count+=9;            
        }
        else if(document.getElementById('div1').innerHTML=='X' && document.getElementById('div4').innerHTML=='X'&& document.getElementById('div7').innerHTML=='X'){
            alert('X is winner');
            count+=9;           
        }
        else if(document.getElementById('div2').innerHTML=='X' && document.getElementById('div5').innerHTML=='X'&& document.getElementById('div8').innerHTML=='X'){
            alert('X is winner');
            count+=9;        
        }       
        else if(document.getElementById('div3').innerHTML=='X' && document.getElementById('div6').innerHTML=='X'&& document.getElementById('div9').innerHTML=='X'){
            alert('X is winner');
            count+=9;            
        }
        else if(document.getElementById('div1').innerHTML=='X' && document.getElementById('div5').innerHTML=='X'&& document.getElementById('div9').innerHTML=='X'){
            alert('X is winner');
            count+=9;           
        }
       else if(document.getElementById('div3').innerHTML=='X' && document.getElementById('div5').innerHTML=='X'&& document.getElementById('div7').innerHTML=='X'){
            alert('X is winner');
            count+=9;     
        }
      else if(document.getElementById('div1').innerHTML=='O' && document.getElementById('div2').innerHTML=='O'&& document.getElementById('div3').innerHTML=='O'){
            alert('O is winner');
            count+=9;   
        }
        else if
          (document.getElementById('div4').innerHTML=='O' && document.getElementById('div5').innerHTML=='O'&& document.getElementById('div6').innerHTML=='O'){
          alert('O is winner');
          count+=9; 
          }
          else if(document.getElementById('div7').innerHTML=='O' && document.getElementById('div8').innerHTML=='O'&& document.getElementById('div9').innerHTML=='O'){
              alert('O is winner');
              count+=9;     
          }
          else if(document.getElementById('div1').innerHTML=='O' && document.getElementById('div4').innerHTML=='O'&& document.getElementById('div7').innerHTML=='O'){
              alert('O is winner');
              count+=9;   
          }
          else if(document.getElementById('div2').innerHTML=='O' && document.getElementById('div5').innerHTML=='O'&& document.getElementById('div8').innerHTML=='O'){
              alert('O is winner');
              count+=9;   
          }
          else if(document.getElementById('div3').innerHTML=='O' && document.getElementById('div6').innerHTML=='O'&& document.getElementById('div9').innerHTML=='O'){
              alert('O is winner');
              count+=9;   
          }
          else if(document.getElementById('div1').innerHTML=='O' && document.getElementById('div5').innerHTML=='O'&& document.getElementById('div9').innerHTML=='O'){
              alert('O is winner');
              count+=9;     
          }
          else if(document.getElementById('div3').innerHTML=='O' && document.getElementById('div5').innerHTML=='O'&& document.getElementById('div7').innerHTML=='O'){
              alert('O is winner');
              count+=9;   
          }
          else{
              if(count == 9){
                  alert('game is finish and no one is winner press F5 to start new game');
              }
          }      
    }
