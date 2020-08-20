// import React, { Component } from 'react';
// import Navi from './components/Navi';
// import CategoryList from './components/CategoryList';
// import ProductList from './components/ProductList';
// import api from './components/Api';
// import { Container, Row, Col } from 'reactstrap'
// import { Switch, Route } from 'react-router-dom';
// import NotFound from './components/NotFound';
// import CartList from './components/CartList';

// export default class App extends Component {

//   state = { currentCategory: "", products: [], cart: [] };

//   changeCategory = (category) => {
//     this.setState({ currentCategory: category.categoryName });
//     this.getProducts(category.id);
//   };

//   componentDidMount() {
//     this.getProducts();
//   }
//   getProducts = categoryId => {

//     let url = "http://localhost:3000/products";
//     if (categoryId) {
//       url += "?categoryId=" + categoryId;
//     }
//     fetch(url)
//       .then(response => response.json())
//       .then(data => this.setState({ products: data }));;
//   }
//   addToCart = (product) => {
//     let newCart = this.state.cart;
//     var addedItem = newCart.find(c => c.product.id === product.id);
//     if (addedItem) {
//       addedItem.quantity += 1;
//     } else {
//       newCart.push({ product: product, quantity: 1 });
//       this.setState({ cart: newCart });
//     }
//   }

//   removeFromCart = () => {

//     filtreleme yapıyor id nosuna göre
//     let newCart = this.state.cart.filter(c => c.product.id !== product.id)
//     this.setState({ cart: newCart })
//   }
  //   state1 = {
  //      coctail: []

  // };
  //  componentDidMount() {
  //      this.getCoctail();
  //  }


  //  getCoctail = () => {
  //           fetch("https://the-cocktail-db.p.rapidapi.com/search.php?i=${search}", {
  //               "method": "GET",
  //               "headers": {
  //                  "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
  //                   "x-rapidapi-key": "a25114065cmshf78c52b4a091da9p1481d6jsndfdbcabb6cbf"
  //               }
  //          })
  //               .then(response =>  { console.log(response)})
  //               .then(data => this.setState({ coctail: data }))
  //        }

  //  }

//   render() {
//     let productInfo = { title: "ProductList" }
//     let categoryInfo = { title: "CategoryList" }
//     return (
//       <div>
//         <Container>
//           <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
//           <Row>
//             <Col xs="3">
//               <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />

//             </Col>

//             <Col xs="9">
//               <Switch>
//                 <Route exact path="/" render={
//                   props => (
//                     <ProductList
//                       {...props}
//                       products={this.state.products}
//                       addToCart={this.addToCart}
//                       currentCategory={this.state.currentCategory}
//                       info={productInfo} />)}

//                 />
//                 <Route exact path="/cart" component={CartList} />
//                 <Route component={NotFound}></Route>
//               </Switch>


//             </Col>


//           </Row>
//           <Row>

//             {/* <Api></Api> */}
//           </Row>

//         </Container>


//       </div>

//     );
//   }
// }


// import React, { useState, useEffect } from "react";

// function App() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [result, setResult] = useState();
//   const [search, setSearch] = useState("vodka");

//   // this useEffect will run once
//   // similar to componentDidMount()
//   useEffect(() => {
//     fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${search}`, {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
//         "x-rapidapi-key": "4e5a9c6606msh0502fd0ee10632fp1394b0jsna7cfb4ba39c1"
//       }
//     })
//       .then(res => res.json())
//       .then(
//         result => {
//           setIsLoaded(true);
//           setResult(result);
//           console.log(search);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         error => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   });

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {console.log(result)}
//         <div className="resultContainer">
//           {result?.ingredients?.map(ingredients => (
//             <div className="result__listItem" key={ingredients?.idIngredient}>
//               <p>
//                 <b>Name:</b>
//                 {ingredients?.strIngredient}
//               </p>
//               <p>
//                 <b>Description: </b>
//                 {ingredients?.strDescription}
//               </p>
//               <p>
//                 <b>Alcohol: </b>
//                 {ingredients?.strAlcohol}
//               </p>
//             </div>
//           ))}
//         </div>
//       </ul>
//     );
//   }
// }

//export default App;

import React, { useState, useEffect } from "react";
import { Button } from 'reactstrap';
import Recipe from './Recipes';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState();
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState("11007");
  const [recipes, setRecipes] = useState([]);

  // this useEffect will run once
  // similar to componentDidMount()

  useEffect(() => {
    getRecipes();
  }, [search]);

  const getSearching = (() =>{
    
          fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${search}`, {
            method: "GET",
            headers: {
              "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
              "x-rapidapi-key": "4e5a9c6606msh0502fd0ee10632fp1394b0jsna7cfb4ba39c1"
            }
          })
            .then(res => res.json())
            .then(
              recipes => {
                setIsLoaded(true);
                setRecipes(recipes);
                console.log(search);
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              error => {
                setIsLoaded(true);
                setError(error);
              }
            );
        });
  

  const getRecipes = (() =>{
    fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "a25114065cmshf78c52b4a091da9p1481d6jsndfdbcabb6cbf"
      }
    })
      .then(res => res.json())
      .then(
        recipes => {
          setIsLoaded(true);
          setRecipes(recipes);
          console.log(detail);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  });
  

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    const updateSearch = e => {
      setSearch(e.target.value);
    }
    const getSearch = e => {
      e.preventDefault();
      setSearch(search);
    }
    return (
      <ul>
        {console.log(recipes)}
        <div className="resultContainer" >
          <h1 font="50px"> ALKOLLÜ İÇECEKLER </h1>
          <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch} />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
          <div classname="recipes">
          {recipes?.drinks?.map(drinks => (
            <Recipe key={drinks?.isDrink}
            DrinkThumb={drinks?.strDrinkThumb} 
            Drink={drinks?.strDrink}
            />
            // <div className="result__listItem" key={drinks?.idDrink}>
            //   <p>
            //     <b>Drink:</b>
            //     {drinks?.strDrink}
            //   </p>
            //   <p>
            //     <b>DrinkThumb: </b>
            //     <image src={drinks?.strDrinkThumb} alt="coctail"></image>
            //   </p>
            //   <p>
            //     <b>idDrink: </b>
            //     {drinks?.idDrink}
            //   </p>
            // </div>
          ))}
          </div>
        </div>
      </ul>
    );
  }
}

export default App;

