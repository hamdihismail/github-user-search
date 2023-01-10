import { toggleTheme, checkPreference } from "./JS/darkMode.js";
import { fetchUsers } from "./JS/fetchUsers.js";
const toggleBtn = document.querySelector('.toggle-container');
const search = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');



// Event listener for search
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    fetchUsers(search.value);
})
// Event listeners for Dark/Light theme
toggleBtn.addEventListener('click',()=>{
    toggleTheme();
});
window.addEventListener('DOMContentLoaded', checkPreference);


