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
     //React creates the elements in the content of html and ReactDOM renders this elements into the DOM
);

 //we can also use JSX a syntax used insted of HTML in .js files   
const myJSXElement = (
    <ul>
        <li>item1</li>
        <li>item2</li>
    </ul>
)
ReactDOM.render(myFirstElement , reactContentRoot);