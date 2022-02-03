const names = ["Athos", "Portos", "Dartanyan"]
const array = ["Congragulations!", "React is awesome"]

ReactDOM.render(
    <div>
        <div className="card">
            <h1>Hello World</h1>
            <ol>
                {names.map((item,index) => <li className={index==0 ? "first":index==1 ? "second":"third"} key={index}>{item}</li>)}
            </ol>
        </div>
        <div>
            <h2>{array[0]}</h2>
            <h3>{array[1]}</h3>
        </div>
    </div>,
    document.getElementById("example")
);