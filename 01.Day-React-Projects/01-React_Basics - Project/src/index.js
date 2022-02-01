const isim = ["Batman", "Süperman", "Iron Man", "Spider-Man"]
const array = [<h2>Congragulations!</h2>, <h3>React is awesome</h3>]


class HelloMessage extends React.Component {
    render() {
        return <div>

            <HelloNames />
            <h1>Hello Component</h1>
        </div>;
    }
}


class HelloNames extends React.Component {
    static propTypes = {
        isim: PropTypes.array
    }
    render() {
        return <div>



        </div>;
    }
}


class NoteList extends React.Component {

    render() {
        return <div>
            <ol>
                {isim.map((item, index) => <li className={index == 0 ? "first" : index == 1 ? "second" : "third"} key={index}>{item}</li>)}
            </ol>


        </div>;
    }
}



function App() {
    return (
        <div>
            <HelloMessage />
            <h2>Hello from Function</h2>
        </div>

    );
}



ReactDOM.render(
    <div>

        <h1>Hello World</h1>

        <App />
        <div>
            {array.map(item => item)}
        </div>


    </div>,
    document.getElementById("root")
);