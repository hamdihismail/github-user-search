const body = document.querySelector('.body')
const preference = window.matchMedia("(prefers-color-scheme: dark)");

const addDarkMode = ()=>{
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
}
const addLightMode = ()=>{
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
}

export const toggleTheme = ()=>{
    if(body.classList.contains('dark-mode')){
        addLightMode();
    }else{
        addDarkMode();
    }
}

export const checkPreference = ()=>{
    if(preference.matches){
        addDarkMode();
    }else{
        addLightMode();
    }
}

