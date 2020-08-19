
console.log("index")

const checkForTermsAcceptance = ()=> {
    console.log("called",checkForTermsAcceptance)
    const hasAccepted = localStorage.getItem("accept");
    hasAccepted !== true && disableBtn();
    redirectUser();
    hasElementSection();

}


const hasElementSection = () => {

    const hasProcessClass = document.querySelector(".process").addEventListener("scroll",()=>document.querySelector(".process").getBoundingClientRect());
    console.log("hasProcessClass", hasProcessClass)

}


const disableBtn = () => {
    const setDisableBtn = document.querySelector(".button").disabled = true;
}

const redirectUser = () => {
    const handleBtnClick = document.querySelector(".button").addEventListener("click",
        () => window.location.replace("/upload.html"));

}


const handleChange = (value) => {
    const checkedTerms = value.checked;
    localStorage.setItem("accept", checkedTerms)
    console.log("checked", value.checked);
    document.querySelector(".button").disabled = !checkedTerms;
}

