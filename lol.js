let containerNames=document.querySelector(".right");
console.log("السلام عليكم ورحمة الله وبركاته");
let nameOfrepos=[];
let na='';
let button=document.querySelector(".btn");
// https://api.github.com/users/octocat/repos
button.addEventListener("click",function()    {   
    containerNames.innerHTML = ''; 
    const name=document.getElementById("name").value;
    na=name;
    console.log(name);
    let text=`https://api.github.com/users/${name}/repos`;
    console.log(text);
    if(name==="") {
 create("Please Enter Ur User-name...");
    }
    else {
fetch(text)
.then(response => {
  if (!response.ok) {
    create("Rong User-Name......");
    throw new Error('Network response was not ok');

        }
    
        return response.json();;
      })
      .then(print => {
        print.forEach(element => {
           // nameOfrepos.push(element.name);
           let div=document.createElement("div");
           let a=document.createElement("a");
           div.classList="black";
           let repoName=document.createTextNode(element.name);
           a.appendChild(repoName)
           div.appendChild(a);
           a.href=`https://github.com/${name}/${element.name}`;
           a.setAttribute('target','_blank');
           containerNames.appendChild(div);  
        });
    })
    //   .then(print => {
    //     if(nameOfrepos.length===0)
    //     {
    //       create("U dont Have any repos yet......");
    //     }
    //     else {
    //       nameOfrepos.forEach(element => {
    //         create(element);
    //       });
    //     }
    // });
    document.getElementById("name").value="";
    nameOfrepos=[];

}
}
);

 function create(el)
{
   // set the logic massage 
    let div=document.createElement("div");
    div.classList="black";
    let repoName=document.createTextNode(el);
    div.appendChild(repoName);
    containerNames.appendChild(div);
}

