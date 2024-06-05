document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Arabica Blend", price: 25000, img: "1.jpg" },
      { id: 2, name: "Robusta Brazil", price: 30000, img: "2.jpg" },
      { id: 3, name: "Aceh Gayo", price: 20000, img: "3.jpg" },
      { id: 4, name: "Primo Passo", price: 30000, img: "4.jpg" },
      { id: 5, name: "Sumatra Handheling", price: 40000, img: "5.jpg" },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,

    add(newItem) {
      //cek apakah barang yang sama sudah ada
      const cartItem = this.items.find((item) => item.id === newItem.id);

      //Jika barang belum ada
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        //cek jika barang sudah ada , apakah sama atau tidak
        this.items = this.items.map((item) => {
          //jika barang tidak sama
          if (item.id !== newItem.id) {
            return item;
          }
          //jika barang sama , tambah quantity dan total
          else {
            item.quantity++;
            item.total = newItem.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    //cek berdasar id
    remove(id) {

     cartItem = this.items.find(item => item.id === id);

      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          //jika barang tidak sama
          if (item.id !== id) {
            return item;
          }
          //jika barang sama , tambah quantity dan total
          else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      }else if(cartItem.quantity == 1 ){
        
        this.items=this.items.filter(item => item.id !== cartItem.id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

function rupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}
