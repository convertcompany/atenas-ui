const app = new Vue({
    el : "#app",
    data : () => {
        return{
            system : {
                darkmode : false,
                sidebanner_compacted : false,
                codes : codes,
                showmodal : false,
                colors : ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]
            }
        }
    },
    methods : {
        returnColorVariable(x,y){
            let z = (y>4) ? 3 : 6;
            y = y*100;
            return `
                background : var(--at-${x}-${y});
                color: var(--at-${x}-${z}00);
            `
        }
    },
    watch:{
        "system.darkmode" : (x) =>{
            window.localStorage.setItem("darkmode", x)
            if ( x ){
                document.querySelector("body").setAttribute("at-dark", "true")
            } else {
                document.querySelector("body").removeAttribute("at-dark")
            }
        }
    },
});

hljs.highlightAll();

function copyCodeToClipboard(x){
    x.innerText = "Código copiado!"
    x.setAttribute("at-bg", "primary");
    const node = x.parentElement.nextElementSibling;
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
        navigator.clipboard.writeText(node.innerText);
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        navigator.clipboard.writeText(node.innerText);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
    setTimeout(() => { x.innerText = "Copiar código"; x.removeAttribute("at-bg"); },1500)
}

function appInit(){
    const dark = window.localStorage.getItem("darkmode");
    if ( dark != undefined ){
        app.system.darkmode = ( dark == "true" );
        if ( app.system.darkmode ){
            document.querySelector("body").setAttribute("at-dark", "true")
        } else {
            document.querySelector("body").removeAttribute("at-dark")
        }
    } else {
        if ( app.system.darkmode ){
            document.querySelector("body").setAttribute("at-dark", "true")
        } else {
            document.querySelector("body").removeAttribute("at-dark")
        }
    }
}

if(document.querySelector(".at-modal")){
    document.querySelector(".at-modal").addEventListener("click", (e) => {
        if ( e.target.className === "at-modal" ){
            app.system.showmodal = false;
        }
    })
}

appInit();