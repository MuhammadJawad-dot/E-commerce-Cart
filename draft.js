let products=document.querySelector("#products")
let total_item=document.querySelector("#h2")

let draft=JSON.parse(localStorage.getItem('draft'))||[]




function load_draft(){
    localStorage.setItem('draft',JSON.stringify(draft))
}


function renderDraft(){
     
    draft.forEach(show=>{
        let show_products=document.createElement("div")   
        show_products.innerHTML=`
        ${show.img ? `<img src="./images/${show.img}" alt="${show.name}" style="width:100%; height:150px; object-fit:cover; border-radius:10px; margin-bottom:10px;">` : ""}
                    <h3>${show.name}</h3>
                    <p>$${show.price}</p>
       
        `;
        products.appendChild(show_products)
        
        let btn=document.createElement("button")
        btn.textContent="Place an Order"
        let btn_d=document.createElement("button")
        btn_d.textContent="Remove"
        show_products.appendChild(btn_d)
        show_products.appendChild(btn)
        btn_d.addEventListener("click",()=>{
            removeDraft(show.id)
            
        })
            
              
                
                
        // })
        btn.addEventListener("click",()=>{
             alert(`Successfully placed Order :$${show.price} ${show.name}`)
           
          
           
           

           
        });
     
    });
}

// function removeDraft(id)
// {
    
//     products.innerHTML=""
//     draft=draft.filter(p=>p.id!==id)
//     load_draft();
//     localStorage.setItem(`checkbox-${id}`,JSON.stringify(false))
//     let checkbox=document.querySelector(`#checked-${id}`)
//     if(checkbox)
//     {
//         checkbox.checked=false
//     }

    
// renderDraft();

// }



function removeDraft(id) {
    // Remove item from draft array
    draft = draft.filter(p => p.id !== id);
    load_draft(); // Update localStorage

    // Uncheck the checkbox in UI
    let check = document.querySelector(`#checkbox-${id}`);
    if (check) {
        check.checked = false;
    }

    // Update checkbox state in localStorage
    localStorage.setItem(`checked-${id}`, JSON.stringify(false));

    // Clear and re-render products
    products.innerHTML = "";
    renderDraft(); 
}



   

 


// load_draft();
renderDraft()
// total_items();