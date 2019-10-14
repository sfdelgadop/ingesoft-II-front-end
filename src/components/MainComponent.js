import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Options from './OptionsComponent';
import { postComment, postLogin, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postLogin: (username,pasword) => dispatch(postLogin(username,pasword)),
  fetchDishes: () => { dispatch(fetchDishes())},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div>
        <div className="row">
          <div className="col-8">
            <Switch>
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={Contact} />} />
                <Redirect to="/menu" />
            </Switch>
          </div>
          <div className="col-4">
            <Header/>
            <Options postLogin = {this.props.postLogin}/>
          </div>
        </div>
        <div className="row">
          <div className = "col-12">
            <Footer/>
          </div>
        </div>

      </div>
      
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));