const vid=document.querySelectorAll('.vid');

for(let i=0;i<vid.length;i++)
{
 vid[i].addEventListener('mouseenter',function(e){
 vid[i].play();
 });
 vid[i].addEventListener('mouseout',function(e){
    vid[i].pause();
    });

}