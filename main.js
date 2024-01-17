//Atajo para no escribir document.querySelector() en cada variable.
const $ = (selector) => document.querySelector(selector);

//Creamos las variables. Cada una tendrá un elemento html asociado. De esta forma, cuando modifiquemos la variable,
//se notará en el html.
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuBurgerIcon = $('.menu');
const mobileMenu = $('.mobile-menu');
const menuCartIcon = $('.navbar-shopping-cart');
const shoppingCartContainer = $('#shopping-cart-container');
const cardContainer = $('.cards-container');

//Sin abreviar, quedaría como sigue:
//const menuEmail = document.querySelector('.navbar-email');

//Creamos los addEventListener para escuchar cuando se haga click en un elemento. Así, podremos realizar alguna 
//acción.
//En específico, cuando se haga click en el email, en el ícono mobil y en el ícono del carrito de compras.
menuEmail.addEventListener('click',toggleDesktopMenu);
menuBurgerIcon.addEventListener('click',toggleMobileMenu);
menuCartIcon.addEventListener('click',toggleCartAside);

/*
Funciones que se encargan de mostrar y ocultar un elemento cada vez que se haga click en otro. funciona agregando
y quitando la clase inactive cada vez que se presiona un elemento. Se debe solucionar conflictos cnado hay más de
un elemento desplegado al mismo tiempo.
*/

//MEnú de escritorio cada vez que se da click al correo electrónico.
function toggleDesktopMenu() {
    //Crea una constante que le asigna True o False. Pregunta si el elemento aside (carro de compras) está 
    //activo o no (si contiene la clase inactive). 
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    //Si el carro está activado, se le agrega la clase inactive (se cierra)
    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    //Finalmente, se realiza el toggle. Esto es, agregar o quitar la clase inactive.
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

// Se crea un array vacío y se le van agregando productos (por ahora, a mano).
const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

/*
Vamos a crear esta estructura html para cada producto. Para eso se crean los elementos, se le asignan clases
y atributos y se estructura agregando los hijos a los padres.
*/
/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div> */

/*
Se crea una función para utilizar el array con la lista de productos. De esta forma, si cambia la lista, 
basta con mandar a llamar a la función con la nueva lista.
*/
function renderProducts(arr) {
    /*
    for of para ir utilizando todos los elementos de la lista de productos y, por cada uno, crear el código
    html 
    */
    for (product of arr) {
        //Creamos un div y le agregamos la clase product-card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //creamos una img y le agregamos la src que tiene guardado el producto (product.image)
        const productImage = document.createElement('img');
        productImage.setAttribute('src',product.image);
    
        //Creamos un div y la agregamos la clase product-info.
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        //Creamos un div y dos p, que tendrán el precio y el nombre del producto.
        const productInfoDiv = document.createElement('div');
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        //Agregamos los p dentro del div.
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
    
        //Creamos una figura y dentro de ella la imagen del carrito de compra, que tenemos guardada.
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        //Agregamos cada hijo a su padre.
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

//Mandamos a llamar a la función
renderProducts(productList);

