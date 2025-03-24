let cartlist=document.querySelector("#cart")
let clear_btn=document.querySelector("#clear")

let cart=JSON.parse(localStorage.getItem('cart'))||[];

function load(){
    localStorage.setItem('cart',JSON.stringify(cart))
}


function renderCart(){
    cartlist.innerHTML=""
    total_bill();
        cart.forEach(item=>{
            
    
     
            let list=document.createElement("li")
            
            list.textContent=`${item.name}:$${item.price}`
            let cart_Q=document.createElement("p")
           cart_Q.textContent=item.quantity
           list.appendChild(cart_Q)
           console.log(cart_Q)
           
            cartlist.appendChild(list)
            let add_btn=document.createElement("button")
            add_btn.textContent="+"
            list.appendChild(add_btn)
            let del_btn=document.createElement("button")
            del_btn.textContent="-"
            list.appendChild(del_btn)

            
            add_btn.addEventListener("click",()=>{
               
                add_item(item.id)
                
            })
            del_btn.addEventListener("click",()=>{
               
                del_item(item.id)
                
            })

           
            
        })
        
        
        
    }


    function del_item(id){
  
        let item=cart.find(p=>p.id===id)
        if(item.quantity>1)
        {
         item.quantity--;
         // console.log(item)
        }
        else{
         cart=cart.filter(item=>item.id!==id)
         
        }
        load();
        renderCart();
 
    
 
 }
 function add_item(id){
     let item=cart.find(p=>p.id==id)

        
     
        item.quantity++;
     
     load();
     renderCart();

 }
 
 function total_bill()
 {
     
     let sum=0;
    
         cart.forEach(item=>{
             
 
             sum+=item.price*item.quantity;
             
       })
     
 
    
     let sum_div=document.createElement("div")
           sum_div.textContent=`Total:$${sum}`;
           cartlist.appendChild(sum_div)
         
    
 }

 function clearBtn()
{
    clear_btn.addEventListener("click",()=>{
        cart.length=0;
        load();
renderCart();


    
        
    })
}

clearBtn();

renderCart();
