const btnImage = document.querySelector('.btn_img');
  const h1 = document.querySelector('.btn');

  btnImage.addEventListener('mouseenter', function() {
    
    btnImage.style.backgroundColor = "#151515";  
    h1.style.backgroundColor = "#D5966C"
    h1.style.color = '#FFFFFF';  
  });
  btnImage.addEventListener('mouseleave', function() {
    btnImage.style.backgroundColor = "";  
    h1.style.color = "";  
    h1.style.backgroundColor = "";

  });

  h1.addEventListener('mouseenter', function() {
    btnImage.style.backgroundColor = '#151515';  
    h1.style.color = "#FFFFFF";  
    h1.style.backgroundColor = "#D5966C"

  });
  h1.addEventListener("mouseleave", function() {
    btnImage.style.backgroundColor = "";  
    h1.style.color = "";  
    h1.style.backgroundColor = ""

  });
