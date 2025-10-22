



function ijk(re,mc)
{

    // const d=document.createElement(re.type);
    // d.innerHTML=re.children;
    // d.setAttribute('href',re.props.href);
    
    // d.setAttribute('target',re.props.target);
    // mc.appendChild(d);


const d=document.createElement(re.type);

 d.innerHTML=re.children;

for(let p in re.props){
 
d.setAttribute(p,re.props.p);



}






mc.appendChild(d);


}



const re={
type : 'a',
props : {
    href: 'https://www.google.com',
    taregt: '_blank'
},
children :'visit google'

};






const mc=document.querySelector("#root");

ijk(re,mc);