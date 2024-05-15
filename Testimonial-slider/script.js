const testimonials = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Apple truly delivers exceptional quality with their innovative mobile phones and laptops. The sleek design and cutting-edge technology set them apart in the industry. I can confidently say that Apple products have greatly improved my productivity and efficiency. I highly recommend Apple to anyone looking for top-notch electronics.",
    userName: "-Amanda Evans",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am extremely impressed with the innovative technology and sleek design of Apple's mobile phones and laptops. The seamless integration of hardware and software truly sets them apart in the industry.",
    userName: "- Alice Johnson",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Apple's innovative mobile phones and laptops are simply outstanding. The sleek design and top-notch performance make them stand out from the competition. I am beyond impressed with the quality and reliability of Apple products.",
    userName: "- Emily Johnson",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: `I am beyond impressed with the innovative technology and sleek design of
    Apple's mobile phones and laptops. The seamless integration and
    top-notch performance make everyday tasks a breeze. I highly recommend
    Apple for anyone seeking quality and reliability.`,
    userName: "- Emily Powell",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".userName");

function updateTestinomial(currIdx = 0) {
  if (currIdx === testimonials.length) {
    currIdx = 0;
  }
  const { imgUrl, text, userName } = testimonials[currIdx];
  imgEl.setAttribute("src", imgUrl);
  textEl.innerText = text;
  userNameEl.innerText = userName;
  setTimeout(() => {
    currIdx += 1;
    updateTestinomial(currIdx);
  }, 5000);
}

updateTestinomial(0);
