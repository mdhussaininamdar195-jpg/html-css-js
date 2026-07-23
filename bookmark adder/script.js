 let button = document.getElementById("btn");
 button.addEventListener("click", function () {
 let siteName = document.getElementById("name").value.trim();
 let siteURL = document.getElementById("URL").value.trim();
 if (siteName === "" || siteURL === "") {
        alert("Please enter both Website Name and Website URL");
        return;
    
    }
let color=randomback()
let link = `<p id="bookmarklist" style="background-color:${color}"><a href="${siteURL}" target="_blank">${siteName}</a></p>`
 document.getElementById("link").innerHTML += link;
 document.getElementById("name").value = "";
 document.getElementById("URL").value = "";
})
function randomback(){
let a=Math.ceil(0+Math.random()*255)
let b=Math.ceil(0+Math.random()*255)
let c=Math.ceil(0+Math.random()*255)
return `rgb(${a},${b},${c})`
}