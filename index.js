const reactContentRoot = document.getElementById('root');

//const myFirstElement = React.createElement(
    //'ul', 
   // null, 
    //[
       // React.createElement('li', null , 'item1'), 
       // React.createElement('li', null , 'item2'),
       // React.createElement('li', null , 'item3')
    //] //we can also pass arr of items
     //React.createElement('li', null , 'item1')   //create ul in wich we have li with 'item1'
     //React creates the elements in the content of html and ReactDOM renders this elements into the DOM
//);

const App = () => {  //creating a React Component ---> is reusable peace of code (container) which contain elements like div in HTML.
    
}

const myItem = 'item3';
 //we can also use JSX a syntax used insted of HTML in .js files   
const myJSXElement = (
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>{myItem.toUpperCase()}</li>
    </ul>
)

//we can use Bable to transfer the code of jsx to javaScript code. 
ReactDOM.render(myJSXElement , reactContentRoot);