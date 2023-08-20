let navbar = document.getElementById("navbar");
let logo = document.getElementById("logo");
window.addEventListener("scroll", (e) => {
  let scrollValue = scrollY;
  if (scrollValue > 0) {
    try {
      navbar.style.background = "#fff";
      logo.style.color = "#083430";
      let bar = document.querySelector(".bar i");
      bar.style.color = "#083430";
      let registerBtn = document.getElementById("register");
      let loginBtn = document.getElementById("login");
      loginBtn.style.borderColor = "#083430";
      loginBtn.style.color = "#083430";
      registerBtn.style.backgroundColor = "#083430";
      registerBtn.style.color = "#f2f2f3";
    }
    catch (e) {

    }
  } else {
    try{
      navbar.style.background = "transparent";
      logo.style.color = "#f2f2f3";
      let bar = document.querySelector(".bar i");
      bar.style.color = "#f2f2f3";
      let registerBtn = document.getElementById("register");
      let loginBtn = document.getElementById("login");
      loginBtn.style.borderColor = "#f2f2f3";
      loginBtn.style.color = "#f2f2f3";
      registerBtn.style.backgroundColor = "#f2f2f3";
      registerBtn.style.color = "#083430";
    }
    catch{}
  }
});

function showAbout() {
  let downBtn = document.getElementById("down");
  downBtn.addEventListener('click', (e) => {
    scrollBy(0, 600);
  });
}

try{
  showAbout();
}
catch{}

function packageData() {
  const dataJson = [
    {
      "title": "Monthly Forex Setups(Premium)",
      "duration": "1 Month",
      "price": 25000.00,
      "desc": "1 to 2 ForEx, CFD's and GOLD alert per day. -Get well-researched targets and stop-loss on every Setup. -Live Market customer support is available to all members. -Delivery Medium: E-Mail -Risk Level:- High to Very High"
    },

    {
      "title": "Quarterly Forex Setups(Premium)",
      "duration": "3 Month",
      "price": 65000.00,
      "desc": "1 to 2 ForEx, CFD's and GOLD alert per day. -Get well-researched targets and stop-loss on every Setup. -Live Market customer support is available to all members. -Delivery Medium: E-Mail -Risk Level:- High to Very High"
    },

    {
      "title": "Trading Tutorials",
      "duration": "1 Month",
      "price": 25000.00,
      "desc": "4 powerful books costing more than 50,000/- which will teach you how to read charts and get an understanding of technical analysis. - Beginner to intermediate classes 3 days a week with our expert. - Q n A session for doubt clearance"
    },

    {
      "title": "Monthly index EQUITY/OPTIONS / FUTURE",
      "duration": "1 Month",
      "price": 12500.00,
      "desc": "Only one research alert per day. -Get one research alert of BankNifty/Nifty Option per day. -Get well-researched targets and stop-loss on every research alert. -Live Market customer support is available to all members. -Delivery Medium: E-Mail. -Risk Level:- High to Very High"
    },

    {
      "title": "Premium index EQUITY/OPTIONS / FUTURE",
      "duration": "1 Month",
      "price": 25700.00,
      "desc": "Only one research alert per day. -Get only high probability research alert of BankNifty/Nifty Option per day. -Get well-researched targets and stop-loss on every research alert. -Live Market customer support is available to all members. -Delivery Medium: WhatsApp and E-mail. -Risk Level:- High to Very High"
    },

    {
      "title": "Yearly Forex Setups(Premium)",
      "duration": "12 Month",
      "price": 200000.00,
      "desc": "1 to 2 ForEx, CFD's and GOLD alert per day. -Get well-researched targets and stop-loss on every Setup. -Live Market customer support is available to all members. -Delivery Medium: E-Mail -Risk Level:- High to Very High"
    },

    {
      "title": "Basic ForEx Package",
      "duration": "1 Month",
      "price": 10500.00,
      "desc": "Only one ForEx alert per day. -Get well-researched targets and stop-loss on every Setup. -Live Market customer support is available to all members. -Delivery Medium: E-Mail -Risk Level:- High to Very High"
    },

    {
      "title": "Premium index EQUITY/OPTIONS/FUTURES",
      "duration": "3 Month",
      "price": 65000.00,
      "desc": "Only one research alert per day. -Get only high probability research alert of BankNifty/Nifty Option per day. -Get well-researched targets and stop-loss on every research alert. -Live Market customer support is available to all members. -Delivery Medium: WhatsApp and E-mail. -Risk Level:- High to Very High"
    }
  ];

  let html = "";
  let counter = 1;
  const package = document.querySelector(".package-section");

  dataJson.forEach((obj) => {
    const url = "PaymentPage";
    const cardHtml = ` <div class="card">
    <h4>${obj.title}</h4>
    <p class="duration">${obj.duration}</p>
    <p class="price">&#x20B9;${obj.price}.00</p>
    <p class="desc" id="card-${counter}">${obj.desc}</p>
    <div class="actions package-act">
        <a href="/payment"><button class="btn btn-secondary package-btn-pri" type="submit">Subscribe</button></a>
        <button class="btn btn-primary package-btn-sec view" type="submit">View More</button>
    </div>
  </div>`;
    html += cardHtml;
    counter += 1;
  });
  package.innerHTML = html;
}

try{
  packageData();
}
catch{}


function viewMore() {
  let viewBtn = document.querySelectorAll(".view");
  let counter = 1;
  viewBtn.forEach((item) => {
    let desc = document.getElementById(`card-${counter}`);
    item.addEventListener('click', (e) => {
      desc.classList.toggle("active");
    });
    counter += 1;
  });
}
viewMore();


try{
  let profileLabel = document.querySelector(".profile");
  let usernameLabel = document.querySelector(".profile h5");
  let logoutLabel = document.querySelector(".logout");
  
  profileLabel.addEventListener('click', (e) => {
    if(logoutLabel.matches(".logout-inactive") || logoutLabel.matches(".logout-active")){
      logoutLabel.classList.toggle("logout-active");
      logoutLabel.classList.toggle("logout-inactive");
    }
  });
}
catch{}

let bar = document.querySelector(".bar");
let navBtns = document.querySelector(".nav-btns");
bar.addEventListener('click', (e) => {
  navBtns.classList.toggle("nav-btns-active");
})