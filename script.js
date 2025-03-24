
let Products = [
    {
        id: 1,
        name: "Shirt",
        price: 20,
        img: "pexels-1520598743-27240005.jpg"
    },
    {
        id: 2,
        name: "Shopping Bag",
        price: 10,
        img: "pexels-angela-roma-7318906.jpg"
    },
    {
        id: 3,
        name: "Shoes",
        price: 30,
        img: "pexels-david-bartus-43782-297933.jpg"
    },
    {
        id: 4,
        name: "Watch",
        price: 40,
        img: "pexels-ferarcosn-190819.jpg"
    },
    {
        id: 5,
        name: "Glasses",
        price: 50,
        img: "pexels-mota-701877.jpg"
    },
    {
        id: 6,
        name: "Headphones",
        price: 35,
        img: "pexels-parag-deshmukh-180046-577769.jpg"
    },
    {
        id: 7,
        name: "Clock",
        price: 15,
        img: "pexels-steve-2182727.jpg"
    },
    {
        id: 8,
        name: "Jacket",
        price: 60,
        img: "pexels-1520598743-27240005.jpg"
    },
    // Rest without images (you can add more later)
    {
        id: 9,
        name: "Belt",
        price: 12,
        img: "pexels-1520598743-27240005.jpg"
    },
    {
        id: 10,
        name: "Socks (Pack of 3)",
        price: 8,
        img: "pexels-steve-2182727.jpg"
    },
    {
        id: 11,
        name: "Laptop Sleeve",
        price: 25,
        img: "pexels-1520598743-27240005.jpg"
    },
    {
        id: 12,
        name: "Sunglasses",
        price: 28,
        img: "pexels-mota-701877.jpg"
    }
    
];


let product=document.querySelector("#products")

let total_item=document.querySelector("#h2")


let cart=JSON.parse(localStorage.getItem('cart'))||[];

function load(){
    localStorage.setItem('cart',JSON.stringify(cart))
}


function renderProducts(){
     
    Products.forEach(show=>{
        let show_products=document.createElement("div")   
        show_products.innerHTML=`
        ${show.img ? `<img src="./images/${show.img}" alt="${show.name}" style="width:100%; height:150px; object-fit:cover; border-radius:10px; margin-bottom:10px;">` : ""}
                    <h3>${show.name}</h3>
                    <p>$${show.price}</p>
       
        `;
        product.appendChild(show_products)

        let btn=document.createElement("button")
        btn.textContent="Add to Cart"
        show_products.appendChild(btn);
        btn.addEventListener("click",()=>{
           addtocart(show.id);
           total_items();
           
          
           
           

           
        });
     
    });
}



function addtocart(id){
    
        let check=Products.find(p=>p.id===id)
        let cart_check=cart.find(p=>p.id===id)
        if(cart_check){
            cart_check.quantity+=1
          
           
        }
        else
        {
            cart.push({...check,quantity:1})
        
            
        }
        load();
    
       
    
     
    
}






function total_items(){
   
       
        let count_items=0;
        let cart_Q1=document.createElement("p")
        cart.forEach(item=>{
            count_items+=item.quantity;
            cart_Q1.textContent=`Total Items:${count_items}`;
           
            console.log(cart_Q1)
        })
        total_item.innerHTML=""
        // total_item.innerHTML=count_items
        total_item.appendChild(cart_Q1);
        load();
    

        
   
   

}

renderProducts();
total_items();
































      