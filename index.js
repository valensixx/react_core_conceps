const reactContentRoot = document.getElementById('root');

const myFirstElement = React.createElement(
    'ul', 
    null, 
    [
        React.createElement('li', null , 'item1'), 
        React.createElement('li', null , 'item2'),
        React.createElement('li', null , 'item3')
    ] //we can also pass arr of items
     //React.createElement('li', null , 'item1')   //create ul in wich we have li with 'item1'
);

ReactDOM.render(myFirstElement , reactContentRoot);