document.addEventListener("DOMContentLoaded", function () {
  const letterText = `
Meri Pyaari Cutie Jii ke liye 🌹💌, 

Jab maine tumhe 2017 me, 16 ki age me pehli baar dekha, tabhi mere dil ne keh diya tha ki "yaar ye itni cute hai😍, shaadi to isse hi karni hai✨". Tumhari wo cute si smile, tumhara dress ko ek haath se pakadna aur doosre me haath rumal lena😍💫, It was that very moment when I felt something so deep, something so true... a feeling... I had never felt for anyone before and after...😍

Time passed, but meri feelings tumare liye kabhi nhi gayi same jaise thi waise aaj bhi waisi hi hai😊. Then, on 26th January 2025 mujhe Insta pe request bheje aur message bhi kiye, tab dil khush ho gaya. Pehle to mujhe laga kahin ye meri Saniya hi to nahi? Jab tumne confirm kiya, tab meri khushi ka koi thikana nahi tha🥰💫. Us din ke baad se humari baatein hone lagi.

Ek din tumne pucha ki meri koi girlfriend hai kya? Maine kaha nahi toh😄. fir main bola ek crush hai, short hair wali ladki pasand hai. Fir tumne pucha kon hai maine do baar naa kaha, tab tumne gusse me bola tha "rakh apni crush apne paas" 😄, Fir maine pucha tume bura ya gussa laga toh fir nhi lee mujhe kyu lagta bole, Lekin jab maine tumhara naam liya, tab mujhe pata chala ki tum bhi mujhe pasand karti ho. Us din jo khushi mili, woh duniya ki kisi bhi cheez se badi thi.

Aaj hum dono ek dusre se shaadi ka promise kar chuke hain💍. Chahe jitni bhi dooriyan ho Ukali aur Hanjagi ke beech, par dil se hamesha saath hain❤️. Valentine week pe jo humne ek dusre ko wish kiya, woh bhi mere liye ek yaadgaar pal hai❤️. Tum meri sirf pasand hi nahi, tum meri life ho, meri duniya ho, mera sab kuch🤗. Tume bahot miss karta hun, samne hote toh longgggg huggyyy dene ka mann karta🥰. Tum mujhe pyaar se Prime Minister bulati ho aur main tumhe Cutie Jii 💞.

Main tumhari Study aur sapno ki respect karta hoon. Tum Civil Engineering kar rahi ho, aur main jaanta hoon ki tum bohot accha karogi. Tumhari har success meri khushi hai😊. Main hamesha tumhara saath dunga, tumhari har khushi aur sapne me tumhe support karunga.

Cutie Jii🥰, tum meri duniya ho, meri muskurahat ka reason ho,mera sukoon ho, meri har subah aur har raat ki soch ho. Jab tak tum meri life me ho, mujhe aur kuch nahi chahiye. Main tumse humesha pyaar karta rahunga aur tumhara dhyan rakhoonga. Yeh mera promise hai tumse.

Parso raat ko jo bhi huva uske liye Sorry kehta hun, par please mujhe ignore na karo, main sabka ignore seh sakta hun par tumara nhi so please mujhe ignore mat karna.

With Love,
Tumara Prime Minister ❤️😊`;

  let index = 0;
  const textElement = document.getElementById("letter-text");
  const textContainer = document.querySelector(".text-container");

  function typeWriter() {
    if (index < letterText.length) {
      textElement.innerHTML += letterText.charAt(index);
      index++;

      // Auto Scroll
      textContainer.scrollTop = textContainer.scrollHeight;

      setTimeout(typeWriter, 50);
    }
  }

  typeWriter(); // Start Typewriter Effect

  // Function to create falling roses
  function createRose() {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementById("rose-container").appendChild(rose);

    setTimeout(() => {
      rose.remove();
    }, 5000);
  }

  setInterval(createRose, 400);
});
