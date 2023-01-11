import { addError,removeError } from "./errorMsg.js";
import { displayUser } from "./displayUser.js";
const url = ' https://api.github.com/search/users?q=';



export const fetchUsers = async (searchValue)=>{
    searchValue = searchValue.toLowerCase().trim()
    const newUrl = `${url}${searchValue}`
    const resp = await fetch(newUrl);
    const data = await resp.json();
    const users = data.items;
    const newUser = users.filter((el)=>{
        return el.login === searchValue
    });    
    if(newUser.length > 0){
        removeError()
        displayUser(newUser)
    }else{
        addError()
        console.log('no match');
    }
    // newUser.forEach(async(i)=>{
    //         if(i.login === searchValue){                
    //             const newResp = await fetch(i.url);
    //             const newData = await newResp.json();
    //             const {login:username,avatar_url:profileImg,html_url:githubLink,name:realName,blog,location,email,bio,twitter_username:twitter,followers,following,created_at:joinDate,public_repos:repos} = newData;
    //             const twitterLink = `http://www.twitter.com/${twitter}`;
    //             const newDate = new Date(joinDate);
    //             const joinDay = newDate.getDate();
    //             const joinMonth = newDate.getMonth();
    //             const joinYear = newDate.getFullYear();
    //             avatarImg.style.background = `url(${profileImg})no-repeat center center/cover`;
    //             return resultContainer.innerHTML = 
    //             `<div class="image-container">
    //             <div class="profile-img"></div>
    //         </div>
    //         </div>
    //         <header class="result-header">
    //             <div class="name-container">
    //                 <h1 class="profile-name">${realName}</h1>
    //                 <a href="${githubLink}" class="user-name" target="_blank">@${username}</a>
    //             </div>
    //             <p class="profile-date">Joined ${joinDay} ${months[joinMonth]} ${joinYear}</p>
    //         </header>
    //             <div class="profile-bio ${!bio ? 'na' : ''}">
    //                 <p class="bio-text">${!bio ? 'This profile has no bio' : bio}</p>
    //             </div>            
    //         <div class="profile-info-container">
    //             <div class="repos-container">
    //                 <p class="txt repo-text">Repos</p>
    //                 <div class="num repo-number">${repos}</div>
    //             </div>
    //             <div class="followers-container">
    //                 <p class="txt followers-text">Followers</p>
    //                 <div class="num followers-number">${followers}</div>
    //             </div>
    //             <div class="following-container">
    //                 <p class="txt following-text">Following</p>
    //                 <div class="num following-number">${following}</div>
    //             </div>
    //         </div>
    //         <div class="social-container">
    //             <div class="location-container ${!location ? 'na' : ''}">
    //                 <div class="location-icon"></div>
    //                 <p class="location-text">${!location ? 'Planet Earth': location}</p>
    //             </div>
    //             <div class="twitter-container ${!twitter ? 'na' : ''}">
    //                 <div class="twitter-icon"></div>
    //                 <a href="${!twitter ? '#' : twitterLink}" class="twitter-text" target="_blank">${!twitter ? 'Not Available' : twitter}</a>
    //             </div>
    //             <div class="blog-link-container ${!blog ? 'na' : ''}">
    //                 <div class="link-icon"></div>
    //                 <a href="${!blog ? '#' : blog}" class="link-text" target="_blank">${!blog ? 'Not Available' : blog}</a>
    //             </div>
    //             <div class="github-container ${!email ? 'na' : ''}">
    //                 <div class="github-icon"></div>
    //                 <a href="${!email ? '#' : email}" class="github-text" target="_blank">${!email ? 'Not Available' : email}</a>
    //             </div>
    //         </div>`
    //         }
    //         else if(i.login !== searchValue){
    //             console.log('no match');
    //             return
    //         }
            
            
        
    // })
    
}

