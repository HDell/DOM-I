const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.querySelectorAll("a");
let counter = 1;
links.forEach(link => {
  link.textContent = siteContent["nav"]["nav-item-"+counter];
  counter++;
});

let cta = document.querySelector(".cta-text");
let ctaText1 = document.querySelector(".cta-text h1");
ctaText1.textContent = "DOM";
let ctaText2 = document.createElement("h1");
ctaText2.textContent = " Is";
let ctaText3 = document.createElement("h1");
ctaText3.textContent = " Awesome";
let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent.cta.button;
cta.removeChild(ctaText1);
cta.removeChild(ctaBtn);
cta.appendChild(ctaText1);
cta.appendChild(ctaText2);
cta.appendChild(ctaText3);
cta.appendChild(ctaBtn);
let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent.cta["img-src"];

let textContent = document.querySelectorAll(".text-content"); //5 text contents, each with two children //this[0 -> 4].children[0 & 1]
let textContentList = [];
Object.values(siteContent["main-content"]).forEach(value => {
  textContentList.push(value);
});
counter = 0;
textContent.forEach(div => {
  if (counter === 4) {
    counter++;
  }
  div.children[0].textContent = textContentList[counter];
  counter++;
  div.children[1].textContent = textContentList[counter];
  counter++;
});
let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

let contactText = document.querySelector(".contact");
let contactList = [];
Object.values(siteContent["contact"]).forEach( value => {
  contactList.push(value);
});
for (let i = 0; i < contactList.length; i++) {
  contactText.children[i].textContent = contactList[i];
}

let footerTag = document.querySelector("footer p");
footerTag.textContent = siteContent["footer"]["copyright"];