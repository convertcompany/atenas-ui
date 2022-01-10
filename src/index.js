const app = new Vue({
    el : "#app",
    data : () => {
        return{
            system : {
                darkmode : true,
                sidebanner_compacted : false,
                codes : codes,
                showmodal : false
            }
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
}

function appInit(){
    const dark = window.localStorage.getItem("darkmode");
    console.log(dark)
    if ( dark != undefined ){
        app.system.darkmode = ( dark == "true" );
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