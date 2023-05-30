const posts = document.querySelector('.posts')
const input = document.querySelector('input')
const btn = document.querySelector('button')
const getPosts = document.querySelector('.getPosts')
console.log(getPosts);
console.log(btn);
fetch('https://jsonplaceholder.typicode.com/posts').then((res)=> res.json()).then((data)=>{
console.log(data);
for(let i= 0;i<data.length;i++){
if(data[i].userId === 1){
    posts.innerHTML +=`
<div class='post'>
<div> userId:${data[i].userId}</div>
<div> id:${data[i].id}</div>
<div> body:${data[i].body}</div>
</div>
`

}

}

})

const userPosts = ()=>{
  getPosts.innerHTML =''
fetch('https://jsonplaceholder.typicode.com/posts').then((res)=> res.json()).then((data)=>{
const data2 = data.filter((el)=>{
  if(el.userId == input.value){
return el
}

})

for(let i= 0;i<data2.length;i++){
 
      getPosts.innerHTML +=`
  <div class='post'>
  <div> userId:${data2[i].userId}</div>
  <div> id:${data2[i].id}</div>
  <div> body:${data2[i].body}</div>
  </div>
  `
  
  
  
  }

})

}
btn.addEventListener('click',userPosts)