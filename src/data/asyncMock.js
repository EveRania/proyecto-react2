[
    {
        id: 1,
        nombre: "LETTER/NUMBER CAKE",
        precio: 25900,
        categoria: "Tortas",
        stock: 15,
        descripcion: "Letter o Number cake de tamaño 26cm que rinde aprox 18/20 porciones. Viene en base de fibrofacil y en caja cerrada.",
        img: "https://pipasteleria.com/wp-content/uploads/2021/05/IMG_3580-300x300.jpg" 
    },

    {
        id: 2,
        nombre: "MARQUISE",
        precio: 24400,
        categoria: "Tortas",
        stock: 8,
        descripcion: "Base de marquise de chocolate + dulce de leche + crema chantillí con topping a elección de: Frutos rojos, chocolates o Mixta (mitad frutos mitad chocolates)",
        img: "https://pipasteleria.com/wp-content/uploads/2021/05/FD581C3B-607D-484F-8509-77F6C2E72E5A-e1683040847545.jpg" 
    },

    {
        id: 3,
        nombre: "BUTTER CAKE",
        precio: 34970,
        categoria: "Tortas",
        stock: 5,
        descripcion: "3 capas de bizcochuelo y 2 de relleno a elección. Los bizcochuelos son humedecidos con almíbar y las tortas cubiertas de buttercream. Se mantienen en heladera. Se entrega en base de fibrofacil y caja alta cerrada.",
        img: "https://pipasteleria.com/wp-content/uploads/2022/05/4FC765E9-F47E-45BA-A6BA-6C5C598C4C01-scaled.jpg" 
    },

    {
        id: 4,
        nombre: "CHOCO OREO",
        precio: 18500,
        categoria: "Tortas",
        stock: 3,
        descripcion: "Torta deliciosa con base de oreos + relleno de chocotorta y oreos humedas + ganache de chocolate",
        img:  "https://pipasteleria.com/wp-content/uploads/2022/05/28FA7290-5BA4-49C4-95C4-CD699A694A11-e1682991370462.jpg"
    },

    {
        id: 5,
        nombre: "TARTA DE FRUTILLAS",
        precio: 19500,
        categoria: "Tartas",
        stock: 12,
        descripcion: "Base de masa sablee, relleno de dulce de leche, crema chantilly y frutillas frescas.",
        img:  "https://pipasteleria.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-15-at-12.26.11.jpeg"
    },

];

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};