let mybutton=document.getElementById("load-button");
let div=document.getElementById("product-list");
mybutton.addEventListener('click',function() {
    fetch("https://fakestoreapi.com/products?").then((response) => {
        let myData=response.json();
        myData.length=8;
        return myData;
    }).then((products) =>{
        products.forEach(product => {
            let productDiv=document.createElement("div");
            let title=document.createElement("h3");
            title.appendChild(document.createTextNode(product.title));
            let img=document.createElement("img");
            img.setAttribute('src',product.image);
            let description=document.createElement("p");
            description.appendChild(document.createTextNode(product.description));
            productDiv.appendChild(img);
            productDiv.appendChild(title);
            productDiv.appendChild(description);
            div.appendChild(productDiv);
        });
        document.body.appendChild(div);
    })
});