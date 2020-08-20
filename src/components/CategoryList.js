import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
    state = {
        categories: []

    };
    componentDidMount(){
        this.getCategories();
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(data=>this.setState({categories:data}));;
    }
    







  /*  getCategories = () => {
        fetch("https://the-cocktail-db.p.rapidapi.com/list.php?a=list", {
            "method": "GET",
            "headers": {
                         "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                         "x-rapidapi-key": "a25114065cmshf78c52b4a091da9p1481d6jsndfdbcabb6cbf"
            }
        })
        .then(response => { console.log(response);}); */
        // .then(response =>response.json())
      // .then(data => this.setState({categories:data}));;
     // .then(res => res.json())
    //  .then(data => this.setState({categories:data}));
     /* .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items

          }
          
          );
          
        */
        // Not: Burada hataları yakalamak önemlidir.
        // Bileşenimizde bug bulunmaması için, 'catch ()' bloğu yerine bulunan
        // bu blok içinde hatalar yakalanır.
        
      
    



    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>

                    {
                        this.state.categories.map(category => (
                            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
                            onClick={() => this.props.changeCategory(category)} 
                            key={category.id}>
                                {category.categoryId}  {category.categoryName}</ListGroupItem>
                        ))

                    }

                </ListGroup>
                {/* <h4>{this.props.currentCategory}</h4> */}
            </div>
        )
    }
}
