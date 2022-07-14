const chalkAnimation = require('chalkercli');
let str = String.raw`
LOADING DISME[▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒] 
`;
let logo = String.raw`
        _____ _____  _____ __  __ ______ 
       |  __ \_   _|/ ____|  \/  |  ____|
       | |  | || | | (___ | \  / | |__   
       | |  | || |  \___ \| |\/| |  __|  
       | |__| || |_ ____) | |  | | |____ 
       |_____/_____|_____/|_|  |_|______|


`;
                             
const rainbow = chalkAnimation.rainbow(logo);
require('./app/main.js')