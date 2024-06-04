document.addEventListener('alpine:init',() => {
    Alpine.data('products' , () =>({
        items:[
            {id:1,name:"Arabica Blend",price:25000,img:'1.jpg'},
            {id:2,name:"Robusta Brazil",price:30000,img:'2.jpg'},
            {id:3,name:"Aceh Gayo",price:20000,img:'3.jpg'},
            {id:4,name:"Primo Passo",price:30000,img:'4.jpg'},
            {id:5,name:"Sumatra Handheling",price:40000,img:'5.jpg'},
        ]
    }));

   Alpine.store('cart',{
    items:[],
    count:0,
    quantity:0,

     add (newItem){
        this.items.push(newItem);
        this.quantity++;
        this.count += newItem.price;
        console.log(this.count)
    }
   })

})

function rupiah(number){
    return new Intl.NumberFormat('id-ID',{
        style : 'currency' ,
         currency : "IDR" ,
          minimumFractionDigits:0})
          .format(number)
}