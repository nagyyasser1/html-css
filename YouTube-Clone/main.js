var menu_icon = document.getElementById("menu_icon");
var aside = document.getElementById("aside");
var subscriptioinsContainer = document.getElementById("subscriptioins");
var show_more = document.getElementById("show_more_btn");

var subscriptions = [
  { id: 1, username: "nagyyasser1", Img_url: "./images/nagy.png" },
  { id: 2, username: "nagyyasser1", Img_url: "./images/nagy.png" },
  { id: 3, username: "nagyyasser1", Img_url: "./images/nagy.png" },
  { id: 4, username: "nagyyasser1", Img_url: "./images/nagy.png" },
  { id: 5, username: "nagyyasser1", Img_url: "./images/nagy.png" },
  { id: 6, username: "nagyyasser1", Img_url: "./images/nagy.png" },
  { id: 7, username: "nagyyasser1", Img_url: "./images/nagy.png" },
  { id: 8, username: "nagyyasser1", Img_url: "./images/nagy.png" },
  { id: 9, username: "nagyyasser1", Img_url: "./images/nagy.png" },
  { id: 10, username: "nagyyasser1", Img_url: "./images/nagy.png" },
];

function createElements() {}

// List the first 3 of my Subscriptions on sideNave
function list_subscriptions(count = 3) {
  for (let i = 0; i < count; i++) {
    const a = document.createElement("a");
    const img = document.createElement("img");
    const span = document.createElement("span");
    a.setAttribute("class", "nav-link");
    img.setAttribute("class", "nav-link-img");
    img.setAttribute("src", subscriptions[i].Img_url);
    img.setAttribute("alt", subscriptions[i].username);
    span.innerText = subscriptions[i].username;
    a.appendChild(img);
    a.appendChild(span);
    subscriptioinsContainer.appendChild(a);
  }
}

function showMore() {
  list_subscriptions(subscriptions.length);
  show_more.querySelector(":nth-child(2)").textContent = "Show Less ";
  show_more.querySelector(":nth-child(1)").textContent = "expand_less";
  show_more.setAttribute("collapced", "true");
}

function showLess() {
  list_subscriptions(3);
  show_more.querySelector(":nth-child(1)").textContent = "expand_more";
  show_more.querySelector(":nth-child(2)").textContent = `Show ${subscriptions.length-3} More...`;
  show_more.setAttribute("collapced", "false");
}

// Toggle Subscriptions Expand
show_more.onclick = (e) => {
  e.preventDefault();
  const collapced = show_more.getAttribute("collapced");
  subscriptioinsContainer.innerHTML = "";
  if (collapced == "true") {
    showLess();
  } else {
    showMore();
  }
};

// Toggle Sidebar
menu_icon.addEventListener("click", (e) => {
  aside.classList.contains("hidden")
    ? aside.classList.remove("hidden")
    : aside.classList.add("hidden");
});

list_subscriptions();
