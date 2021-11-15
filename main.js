import './style.css'

let title = 'Users List';

let user = {
  id: 1,
  name: 'John',
  lastname: 'Doe',
  email: 'John@gmail.com',
  image: 'https://www.w3schools.com/howto/img_avatar.png'
};

let users = [
  {
    id: 1,
    name: 'John',
    lastname: 'Doe',
    email: 'John@gmail.com',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    id: 2,
    name: 'Jane',
    lastname: 'Doe',
    email: 'Jane@gmail.com',
    image: 'https://www.w3schools.com/howto/img_avatar2.png'
  },
  {
    id: 3,
    name: 'Mary',
    lastname: 'Doe',
    email: 'Mary@gmail.com',
    image: 'https://www.w3schools.com/w3images/avatar6.png'
  }
  
  
  
]

document.querySelector('#app').innerHTML = `
 
 <h1>
 ${title}
 </h1>



 <div id="detail"></div>


 <ul id="users"></ul>


`;


const showUsers = ()=>{

  const listUser = document.querySelector("#users");

  let lstuser = '';
  users.map(user => {
      lstuser += `<li> <a href="#!" onclick="showDetail(${user.id})"> ${user.name} </a></li>`
  });

  listUser.innerHTML = lstuser;
}

showUsers();


const showDetail = (i)=>{

  const uiDetail = document.querySelector("#detail");

  const _user = users.filter(f => f.id===i);
   const {id,name,lastname,email,image} = _user[0];

   let detail = `
   
   <p> Id: ${id} </p>
   <p> Name: ${name} </p>
   <p> Last Name: ${lastname} </p>
   <p> Email: ${email} </p>
   <img src="${image}" width="150" height="150" alt="${name}" title="${name}" >
   
   `;


   uiDetail.innerHTML = detail;



}


window.showDetail = showDetail;
