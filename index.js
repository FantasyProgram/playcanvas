function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);  // Returns the value of the parameter or null if not found
}


window.onload = function(){
    var ageObj =   document.getElementById('age');

    let value = getQueryParameter("age") ? : "nothing" ;
    ageObj.innerText = value;
};


