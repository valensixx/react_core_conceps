const reactContentRoot = document.getElementById('root');

const myFirstElement = React.createElement('ul', null, 
    React.createElement('li', null , 'item1')   //create ul in wich we have li with 'item1'
);

ReactDOM.render(myFirstElement , reactContentRoot);