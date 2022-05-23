var pro=JSON.parse(localStorage.getItem("Add_products"))||[];
function show(){
    pro.map(function (elem,index){
        div=document.createElement("div");
        Images=document.createElement("img");
        Images.src=elem.image;
        Images.style.height="200px";
        Images.style.height="200px";
        type=document.createElement("h3");
        type.innerText=elem.Type;
        des=document.createElement("h3");
        des.innerText=elem.Description;
        price=document.createElement("h3");
        price.innerText=elem.Price;
        butt=document.createElement("button");
        butt.innerText="Remove";
        butt.addEventListener("click",function(elem){
            
            pro.splice(index,1);
            localStorage.setItem("Add_products",JSON.stringify(pro));
        }
        )
        div.append(Images,type,des,price,butt);
        document.getElementById("all_products").append(div);
        
    })
}
show();
document.getElementById("add_more_product").addEventListener("click",function(){
    window.location.href="index.html"
})