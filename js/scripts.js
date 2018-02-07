const ENDPOINT_URL = "http://localhost:3000/v1/users"

submitEmail = (button, input, loader, confirmed) => {
  button.style.display = 'none';
  loader.style.display = 'block';

  setTimeout(function () {
    fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      mode: 'cors',
      body: JSON.stringify({
        email: input.value,
        context: '202f20de-b97a-4b49-91d0-970a8d5c60ce'
      })
    })
      .then(res => {
        loader.style.display = 'none'
        confirmed.style.display = 'block'
      })
      .catch(error => {
        loader.style.display = 'none'
        button.style.display = 'inline-block'
      })
  }, 1000);
}

const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

const navBubbles = [
  document.getElementById("first"),
  document.getElementById("second"),
  document.getElementById("third"),
  document.getElementById("fourth"),
  document.getElementById("fifth"),
  document.getElementById("sixth"),
];

removeFill = (except) => {
  for(let bubble in navBubbles){
    if(bubble !== except){
      navBubbles[bubble].classList.remove("filled");
    }
  }
}

parallaxScrolled = (element) => {
  const scrollHeight = element.scrollHeight / 6  
  const currentScroll = element.scrollTop + scrollHeight / 2; 

  
  //- theres no way this is efficient

  switch (true) {
    case(currentScroll <= scrollHeight):
      removeFill(0)
      navBubbles[0].classList.add("filled");
      (deviceWidth < 1200) ? document.getElementById("logo-wrapper").classList.remove("hide-logo"): null;
      break;
    case(currentScroll <= scrollHeight * 2):
      removeFill(1)
      navBubbles[1].classList.add("filled");
      (deviceWidth < 1200) ? document.getElementById("logo-wrapper").classList.add("hide-logo") : null;
      break;
    case(currentScroll <= scrollHeight * 3):
      removeFill(2)
      navBubbles[2].classList.add("filled");
      (deviceWidth < 1200) ? document.getElementById("logo-wrapper").classList.add("hide-logo") : null;
      break;
    case(currentScroll <= scrollHeight * 4):
      removeFill(3)
      navBubbles[3].classList.add("filled");  
      (deviceWidth < 1200) ? document.getElementById("logo-wrapper").classList.add("hide-logo") : null;
      break;
    case(currentScroll <= scrollHeight * 5):
      removeFill(4)
      navBubbles[4].classList.add("filled");
      (deviceWidth < 1200) ? document.getElementById("logo-wrapper").classList.add("hide-logo") : null;
      break;
    case(currentScroll <= scrollHeight * 6):
      removeFill(5)
      navBubbles[5].classList.add("filled");
      (deviceWidth < 1200) ? document.getElementById("logo-wrapper").classList.add("hide-logo") : null;
      break;
  }
};

scrollBubble = (element) => {
  const pages = document.getElementsByClassName("parallax__group")
  
  switch(element.id){
    case "first":
      pages[0].scrollIntoView({block: "start", behavior: 'smooth'})
      break;
    case "second":
      pages[1].scrollIntoView({block: "start", behavior: 'smooth'})
      break;
    case "third":
      pages[2].scrollIntoView({block: "start", behavior: 'smooth'})
      break;
    case "fourth":
      pages[3].scrollIntoView({block: "start", behavior: 'smooth'})
      break;
    case "fifth":
      pages[4].scrollIntoView({block: "start", behavior: 'smooth'})
      break;
    case "sixth":
      pages[5].scrollIntoView({block: "start", behavior: 'smooth'})
      break;
  }

}