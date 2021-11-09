var uid = sessionStorage.getItem("uid");

if (uid == null) {
    sessionStorage.clear();
    window.location.href = "index.html";
}