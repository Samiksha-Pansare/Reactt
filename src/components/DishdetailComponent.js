import { render } from '@testing-library/react';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


    function RenderDish({dish}) {
      if(dish != null) {
        return (
          <Card>
            <CardTitle>{dish.name}</CardTitle>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardText>{dish.description}</CardText>
          </Card>
        );
      }
  
      else {
        return (
          <div></div>
        );
      } 
    }

    function RenderComments({dish}) {
      if(dish != null && dish.comments != null) {
        const cmnts = dish.comments.map((comments)=> (
          <li key={comments.id}>
            <p>{comments.comment}</p>
            <p>{comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
          </li>
        ));
        
        return(
          <div>
            <h2>Comments</h2>
            <ul className="list-unstyled">
              {cmnts}
            </ul>
          </div>
        );
      }
      
  
      else {
        return (
          <div></div>
        );
      }
      }

    const  DishDetail = (props) => {
      render() 
      return (
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
    );
      
      
    }


export default DishDetail;









/*  renderDish(dish) {
    if(dish != null) {
      return (
        <Card>
          <CardTitle>{dish.name}</CardTitle>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardText>{dish.description}</CardText>
        </Card>
      );
    }

    else {
      return (
        <div></div>
      );
    }
  }
  renderComments(dish) {
    if(dish != null && dish.comments != null) {
      const cmnts = dish.comments.map((comments)=> (
        <li key={comments.id}>
          <p>{comments.comment}</p>
          <p>{comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
        </li>
      ));
      
      return(
        <div>
          <h2>Comments</h2>
          <ul className="list-unstyled">
            {cmnts}
          </ul>
        </div>
      );
    }
    

    else {
      return (
        <div></div>
      );
    }
    }



  render() {
    return (
      <div class="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
        {this.renderComments(this.props.dish)}
        </div>
      </div>
      </div>
    );
  }


export default DishDetail;*/