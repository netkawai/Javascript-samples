import React from 'react';
import './App.css';
import logo from './logo.svg'

const MyButton = () => {
  const handleClick = () =>{
    alert('You clicked me!')
  }
  return (
    <button onClick={handleClick}>Click me</button>
  );  
}

const ShoppingList = () => {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'http://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

const Hello = (props) => {
  return(
    <div>
      <p>Another Hello World from {props.name}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  console.log('Hello from component')
  return (
    <>
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{user.name}</h1>
      <p>Hello World, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello name='Kawai' />
      <MyButton />
      <img
      className="avatar"
      src={user.imageUrl}
      alt={'Photo of ' + user.name}
      style={{width: user.imageSize, height: user.imageSize}}
      />
      <ShoppingList />
    </div>
    </>
  )
}

export default App;
