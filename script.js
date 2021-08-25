var b=document.querySelectorAll('.dot');
for(i of b)
{
    i.addEventListener('mouseover',(e)=>{
        if(document.querySelector('.active')!=undefined)
        {
            document.querySelector('.active').classList.remove('active');
        }
        e.target.nextElementSibling.classList.add('active');
    })
}
document.addEventListener('mouseup',(e)=>{
    if(document.querySelector('.active')!=undefined)
    {
        if(!document.querySelector('.active').contains(e.target) && !document.querySelector('.active').previousElementSibling.contains(e.target))
        {
            document.querySelector('.active').classList.remove('active');
        }
    }
})