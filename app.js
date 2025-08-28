const sectionCards = document.querySelector('.sections-cards');
const historySection = document.querySelector('#history-cards-holder');
const clearBtn = document.querySelector('#clear-btn');
const copyText = document.getElementById('copy-text');
const loveText = document.getElementById('love-text');
const coinText = document.getElementById('coins-text');
let coinTextDefault = 100;
let copyCount = 0;
let loveCount = 0;


const detailsOfHotLineService = [
    {
        "track-id": 1,
        title: "National Emergency Number",
        "sub-title": "National Emergency",
        number: "999",
        category: "All",
        img: "emergency.png"

    },
    {
        "track-id": 2,
        title: "Police Helpline Number",
        "sub-title": "Police",
        number: "999",
        category: "Police",
        img: "police.png"

    },
    {
        "track-id": 3,
        title: "Fire Service Number",
        "sub-title": "Fire Service",
        number: "999",
        category: "Fire",
        img: "fire-service.png"

    },
    {
        "track-id": 4,
        title: "Ambulance Service",
        "sub-title": "Ambulance",
        number: "1994-999999",
        category: "Health",
        img: "ambulance.png"

    },
    {
        "track-id": 5,
        title: "Women & Child Helpline",
        "sub-title": "Women & Child Helpline",
        number: "109",
        category: "Help",
        img: "emergency.png"

    },
    {
        "track-id": 6,
        title: "Anti-Corruption Helpline",
        "sub-title": "Anti-Corruption",
        number: "106",
        category: "Govt.",
        img: "emergency.png"

    },
    {
        "track-id": 7,
        title: "Electricity Helpline",
        "sub-title": "Electricity Outage",
        number: "16216",
        category: "Electricity",
        img: "emergency.png"

    },
    {
        "track-id": 8,
        title: "Brac Helpline",
        "sub-title": "Brac",
        number: "16445",
        category: "NGO",
        img: "emergency.png"

    },
    {
        "track-id": 9,
        title: "Bangladesh Railway Helpline ",
        "sub-title": "Bangladesh Railway",
        number: "163",
        category: "Travel",
        img: "Bangladesh-Railway.png"

    }
];
function getCurrentTime() {
    let date = new Date;
    return (new Intl.DateTimeFormat('default', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'



    }).format(date)).toUpperCase();
}

window.addEventListener('load', () => {

    detailsOfHotLineService.forEach(element => {


        sectionCards.innerHTML += `            <div class="card p-[32px] bg-white gap-[20px] rounded-[12px] shadow-md ">
                <div class="card-header flex justify-between items-center">
                    <div class=" rounded-[20px] p-[15px] bg-[#FFE3E2]">
                        <img src="assets/${element["img"]}" class="h-[32px] w-[32px]" alt="" srcset="">
                    </div>
                    <div class="icon text-[30px] text-[#4F4F4F]"> <button class="love-btn"><i class="fa-regular fa-heart hover:text-[#B01E28]"></i></button></div>
                </div>
                <div class="text-group">
                    <h2 class="text-2xl font-bold font-inter">${element['title']}</h2>
                    <p class="text-[#828282] text-[18px] font-inter">${element['sub-title']}</p>
                </div>
                
                <div class="dial-group">
                    <h2 class="text-2xl font-bold font-inter">${element['number']}</h2>
                    <p class="w-[75px] p-[5px] text-center bg-[#F2F2F2] rounded-[16px]">${element['category']}</p>
                </div>

                <div class="btn-group flex justify-between">
                    <button class="btn copy-btn bg-white rounded-[8px] w-[49%]" id="copy-btn"><i class="fa-regular fa-copy"></i>
                        Copy</button>
                    <button class="btn bg-[#219635] text-white rounded-[8px] w-[49%] call-btn"><i class="fa-solid fa-phone"></i>
                        Call</button>
                </div>
            </div>`;
    })
    let callBtn = document.getElementsByClassName('call-btn');
    let copyBtn = document.getElementsByClassName('copy-btn');
    let loveBtn = document.getElementsByClassName('love-btn');

            Array.from(callBtn).forEach((btn, index) => {
            
           
            btn.addEventListener('click', (e) => {
                if(coinTextDefault >= 20){
                alert(`Calling ${detailsOfHotLineService[index].title} at ${detailsOfHotLineService[index].number}`);
                historySection.innerHTML += `                <div class="history-card flex  justify-between items-center p-[16px] h-[83px] w-[352px] bg-[#F2F2F2] rounded-[8px] font-inter">
                    <div class="text-content">
                        <h2 class="font-bold text-[18px]">${detailsOfHotLineService[index].title}</h2>
                        <p class="text-[#4F4F4F]">${detailsOfHotLineService[index].number}</p>
                    </div>
                           <div class="time"><p>${getCurrentTime()}</p></div>
                </div>`;
                 coinText.innerText = coinTextDefault - 20;
                 coinTextDefault = coinTextDefault - 20;
               
            }
            else{
                alert("Not Eonugh coin to make a call. You need atleast 20 coins...");
                return;
            }
              
            })
        })
  


  

    


    Array.from(copyBtn).forEach((btn, index) => {

        btn.addEventListener('click', () => {
            copyCount++;
            navigator.clipboard.writeText(detailsOfHotLineService[index].number);
            alert(`Copied Number : ${detailsOfHotLineService[index].number}`);
            copyText.innerText = copyCount;
        })

    })
    Array.from(loveBtn).forEach((btn) => {

        btn.addEventListener('click', () => {
            loveCount++;

            loveText.innerText = loveCount;
        })

    })
    clearBtn.addEventListener('click', () => {
        historySection.innerHTML = '';
    })

});



