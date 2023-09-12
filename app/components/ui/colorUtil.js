export function getTwColor(color, light){
    let tw = '';
    switch(color){
        case 'green': tw += 'green'; break;
    }
    switch(light){
        case 'light': tw += '-light'; break;
        case 'lightest': tw += '-lightest'; break;
        case '': break;
    }

    return tw;

}