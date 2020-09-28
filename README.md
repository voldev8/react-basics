This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Basic React

### Navbar

Navbar element

.map() method is used which is very popular way of iterating over an array and manipulating or changing data items.

### Greeting

Greeting element that get its this.props.fistName from App.js
and also a button event handler that just pops an alert.

props is passed from a parent component.

### Contact

Contact element has a password that is saved in state, two input elements (one for password input and one for submit), Contact info will be shown if the password is correct('swordfish').

this.state is used for comparison.

### ColorPicker

Color Picker element shows rgb() of the background which is set to blue by default.By clicking refresh button the background color can be changed to a random color.

This is a componentDidMount(), componentDidUpdate(prevProps, prevState) example, updating state with an onclick event handler.

### VideoPlayer

Simple video player with four different video pick options

This is an example of Sibling components (Menu and Video)

### Best Sellers

List of top three books

propTypes is used here on BestSeller component

### Input

An input and a h2 element, whatever is written on input updates the h2

this.setState({}) for state update

## Available Scripts

Download and install packages and it's dependencies

npm install

### `npm start`
