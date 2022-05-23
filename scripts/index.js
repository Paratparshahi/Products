//store the products array in localstorage as "products"
function addproduct(){
    event.preventDefault();
    type=document.getElementById("type").value;
    desc=document.getElementById("desc").value;
    price=document.getElementById("price").value;
    img=document.getElementById("image").value;
    var Products=JSON.parse(localStorage.getItem("Add_products"))||[];
    obj={
        Type:type,
        Description:desc,
        Price:price,
        image:img
    };
    Products.push(obj);
    localStorage.setItem("Add_products",JSON.stringify(Products));
    document.getElementById("type").value="";
    document.getElementById("desc").value="";
    document.getElementById("price").value="";
    document.getElementById("image").value="";

}
function show_prod(){
    window.location.href="inventory.html"
}
document.getElementById("add_product").addEventListener("click",addproduct);
document.getElementById("show_products").addEventListener("click",show_prod);
