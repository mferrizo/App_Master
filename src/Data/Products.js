import Images from "../Components/Images/Images";

const products = [
    {
      id: 1,
      name: "PC Economica",
      price: 60000,
      img: Images.pceco,
      type: "ofertas"
      
    },
    {
      id: 2,
      name: "PC de Oficina",
      price: 75000,
      img: Images.pcoficina,
      type: "ofertas"
    },
    {
      id: 3,
      name: "PC Gamer",
      price: 250000,
      img: Images.pcgamer,
      type: "ofertas"
      
    },
    {
      id: 4,
      name: "PC Ingenieria",
      price: 275000,
      img: Images.pcingenieria,
      type: "ofertas"
      
      
    },
    {
      id: 5,
      name: "PC Intel Basic",
      price: 55000,
      img: Images.intelb,
      type: "intel"


      
    },
    {
      id: 6,
      name: "PC I3 10ma Generacion",
      price: 90000,
      img: Images.inteli3,
      type: "intel"
      
    },
    {
      id: 7,
      name: "PC I5 10ma Generacion",
      price: 120000,
      img: Images.inteli5,
      type: "intel"
      
    },
    {
      id: 8,
      name: "PC I7 10ma Generacion",
      price: 150000,
      img: Images.inteli7,
      type: "intel"
      
    },
    {
      id: 9,
      name: "Pc AMD Athlon ",
      price: 54000,
      img: Images.amdathlon,
      type: "amd"
      
    },
    {
      id: 10,
      name: "Pc AMD Ryzen 3",
      price: 88000,
      img: Images.ryzen3,
      type: "amd"
      
    },
    {
      id: 11,
      name: "Pc AMD Ryzen 5",
      price: 115000,
      img: Images.ryzen5,
      type: "amd"
      
    },
    {
      id: 12,
      name: "Pc AMD Ryzen 7",
      price: 150000,
      img: Images.ryzen7,
      type: "amd"
      
    },


];

export const getProducts = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products);
            
        }, 2000);
    });
};
export const getProductsByCategory = (category) => {
    return new Promise((res) => {
  
        const productos = products.filter(product => product.type === category);
        setTimeout(() => {
            res(productos);
        }, 2000);
    });
}
export const getProduct = (id) => {
  return new Promise((res) => {
      setTimeout(() => {
          res(products.find((item)=> item.id === parseInt(id)))
      }, 2000);
  })
};