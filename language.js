// var lang = new Language 
function Language(lang)
{
    var __construct = function() {
        if (eval('typeof ' + lang) == 'undefined')
        {
            lang = "fr";
        }
        return;
    }()

    this.getStr = function(str, defaultStr) {
        var retStr = eval('eval(lang).' + str);
        if (typeof retStr != 'undefined')
        {
            return retStr;
        } else {
            if (typeof defaultStr != 'undefined')
            {
                return defaultStr;
            } else {
                return eval('en.' + str);
            }
        }
    }
}

function changeLanguage(lang) {
    window.current_lang = "";
    if (lang === "fr") {
        window.current_lang = new Language('fr');
    } else if ( lang === "en") {
        window.current_lang = new Language('en');
    }
    else {
        window.current_lang = new Language('pl');
    }
    console.log(document.querySelector('.alim'));
    document.querySelector('.alim').innerHTML = window.current_lang.getStr('Alimentaire');
    document.querySelector('.souvenir').innerHTML = window.current_lang.getStr('Souvenirs');
    document.querySelector('.spiritueux').innerHTML = window.current_lang.getStr('Spiritueux');
    document.querySelector('.spiritueux').innerHTML = window.current_lang.getStr('Spiritueux');
    document.querySelector(".blog").innerHTML = window.current_lang.getStr('Blog');

    
}
