var url="https://api.github.com/users";
var xhr= new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange=()=>
{
    if(xhr.readyState==4 && xhr.status==200)
    {
   
        var m=JSON.parse(xhr.responseText);
        console.log(m);
        console.log(typeof(xhr.responseText));
        console.log(typeof(m));
       
           document.querySelector('img').setAttribute('src',m[0].avatar_url);
           document.querySelector('div').innerHTML=`<h3>${m[0].node_id}</h3>`; 

    }
}
xhr.send();
