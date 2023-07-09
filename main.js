let colors=['hsl(0, 100%, 67% , 0.1)','hsl(39, 100%, 56% , 0.1)','hsl(166, 100%, 37% , 0.1)','hsl(234, 85%, 45% , 0.1)'];
let lttlcolor= ['hsl(0, 100%, 67% )','hsl(39, 100%, 56%)','hsl(166, 100%, 37%)','hsl(234, 85%, 45%)'];
for (let index = 0; index < colors.length; index++) {
     element = colors[index];
     document.querySelectorAll('.smallcon')[index].style.backgroundColor=element;
     
}

for (let index = 0; index < lttlcolor.length; index++) {
     element = lttlcolor[index];
     document.querySelectorAll('.icon')[index].style.color=element;
     
}


fetch('data.json')
  .then(response => response.json())
  .then(data => {
     for (let i = 0; i < data.length; i++) {
          document.querySelectorAll('.lebal')[i].innerHTML=data[i].category;
          document.querySelectorAll('.rate')[i].innerHTML=data[i].score +'/100';
          document.querySelectorAll('.iconSrc')[i].src=data[i].icon;
     }
    

  })




