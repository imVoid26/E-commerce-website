  let product1=   [
                    {
                        id:1,
                        img:"assets/2.jpg",
                        h:"TOO YUMM",
                        p:"$20.00"
                    },
                    {
                        id:2,
                        img:"assets/1.webp",
                        h:"TOO YUMM",
                        p:"$20.00"
                    },
                    {
                        id:3,
                        img:"assets/3.jpg",
                        h:"TOO YUMM",
                        p:"$20.00"
                    },
                    {
                        id:4,
                        img:"assets/40217411_2-too-yumm-potato-chips-indian-masala.webp",
                        h:"TOO YUMM",
                        p:"$20.00"
                    },
                    {
                        id:5,
                        img:"assets/1.webp",
                        h:"TOO YUMM",
                        p:"$20.00"
                    },
                    {
                        id:6,
                        img:"assets/3.jpg",
                        h:"TOO YUMM",
                        p:"$20.00"
                    },
                    {
                        id:7,
                        img:"assets/2.jpg",
                        h:"TOO YUMM",
                        p:"$20.00"
                    },
                    {
                        id:8,
                        img:"assets/40217411_2-too-yumm-potato-chips-indian-masala.webp",
                        h:"TOO YUMM",
                        p:"$20.00"
                    }
                ]
let display1=document.querySelector('#display1');
main1();
function main1()
{
    for (a of product1) 
        {
            display1.innerHTML+=`<div class="col-lg-3 text-center">
            <div class="card border-0 mb-3">
              <div class="card-body">
                <img src="${a.img}" class="img-fluid">
              </div>
            </div>
            <h6>${a.h}</h6>
            <p>${a.p}</p>
          </div>
                            `
        }
}
          // product  2..............................
let product2=   [
    {
        id:1,
        img:"assets/2.jpg",
        h:"TOO YUMM",
        p:"$20.00"
    },
    {
        id:2,
        img:"assets/1.webp",
        h:"TOO YUMM",
        p:"$20.00"
    },
    {
        id:3,
        img:"assets/3.jpg",
        h:"TOO YUMM",
        p:"$20.00"
    },
    {
        id:4,
        img:"assets/40217411_2-too-yumm-potato-chips-indian-masala.webp",
        h:"TOO YUMM",
        p:"$20.00"
    },
    {
        id:5,
        img:"assets/1.webp",
        h:"TOO YUMM",
        p:"$20.00"
    },
    {
        id:6,
        img:"assets/3.jpg",
        h:"TOO YUMM",
        p:"$20.00"
    },
    {
        id:7,
        img:"assets/2.jpg",
        h:"TOO YUMM",
        p:"$20.00"
    },
    {
        id:8,
        img:"assets/40217411_2-too-yumm-potato-chips-indian-masala.webp",
        h:"TOO YUMM",
        p:"$20.00"
    },
    {
      id:9,
      img:"assets/2.jpg",
      h:"TOO YUMM",
      p:"$20.00"
    },
    {
      id:10,
      img:"assets/1.webp",
      h:"TOO YUMM",
      p:"$20.00"
    },
    {
      id:11,
      img:"assets/3.jpg",
      h:"TOO YUMM",
      p:"$20.00"
    },
    {
      id:12,
      img:"assets/40217411_2-too-yumm-potato-chips-indian-masala.webp",
      h:"TOO YUMM",
      p:"$20.00"
    }
]
let display2=document.querySelector('#display2');
main2();
function main2()
{
for (b of product2) 
{
display2.innerHTML+=`<div class="col-lg-3 text-center">
                      <div class="card border-0 mb-3">
                      <div class="card-body">
                      <img src="${b.img}" class="img-fluid">
                      </div>
                      </div>
                      <h6>${b.h}</h6>
                      <p>${b.p}</p>
                      </div>
            `
}
}
