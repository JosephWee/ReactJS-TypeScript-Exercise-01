interface HelloWorldProp {
    name: string;
}

class HelloWorld extends React.Component {

    state: any;

    constructor(prop: HelloWorldProp) {
        super(prop);
        this.state = { name: prop.name};
    }

    render() {
        return (<div>{ "Hello " + this.state.name }</div>);
    }
}

//For more information please see:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
//https://github.com/JosephWee/ReactJS-Exercise-01/blob/main/ReactWebApp/JSX/SimpleApp.jsx
ReactDOM.render(
    <HelloWorld name="Joe" />,
    document.getElementById('root')
);

