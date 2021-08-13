var Example;
(function (Example) {
    class HelloWorld extends React.Component {
        constructor(prop) {
            super(prop);
            this.state = { name: prop.name };
        }
        render() {
            return (<div>{"Hello " + this.state.name}</div>);
        }
    }
    Example.HelloWorld = HelloWorld;
})(Example || (Example = {}));
//For more information please see:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
//https://github.com/JosephWee/ReactJS-Exercise-01/blob/main/ReactWebApp/JSX/SimpleApp.jsx
//https://www.typescriptlang.org/docs/handbook/namespaces.html
ReactDOM.render(<Example.HelloWorld name="Joe"/>, document.getElementById('root'));
