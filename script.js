const btnImage = document.querySelector('.btn_img');
  const h1 = document.querySelector('.btn');

  btnImage.addEventListener('mouseenter', function() {
    
    btnImage.style.backgroundColor = "black";  
    h1.style.backgroundColor = "gold"
    h1.style.color = 'black';  
  });
  btnImage.addEventListener('mouseleave', function() {
    btnImage.style.backgroundColor = "";  
    h1.style.color = "";  
    h1.style.backgroundColor = "";

  });

  h1.addEventListener('mouseenter', function() {
    btnImage.style.backgroundColor = 'black';  
    h1.style.color = "black";  
    h1.style.backgroundColor = "gold"

  });
  h1.addEventListener("mouseleave", function() {
    btnImage.style.backgroundColor = "";  
    h1.style.color = "";  
    h1.style.backgroundColor = ""

  });
