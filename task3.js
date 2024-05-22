let userName = localStorage.getItem("userName");
let lastVisit = localStorage.getItem("lastVisit");

if (!userName) {
    userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
    if (userName) {
        localStorage.setItem("userName", userName);
        localStorage.setItem("lastVisit", new Date());
    }
} else {
    alert("Добрый день, " + userName + "! Давно не виделись. В последний раз вы были у нас " + new Date(lastVisit));
    localStorage.setItem("lastVisit", new Date());
}