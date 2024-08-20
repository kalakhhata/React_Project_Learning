const navbar = (
    <nav>
        <h1>OG Brand</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
const nav_content = (
    <div>
        <h2>My awesome website in React</h2>
        <h3>Reasons I love react</h3>
        <ol>
            <li>It's Declarative</li>
            <li>It's Composable</li>
            <li>It's Demand in Market</li>
            <li>It's is actively maintained by skilled people at META</li>
        </ol>
    </div>
)

ReactDOM.render(navbar,document.getElementById("header"));
ReactDom.render(nav_content,document.getElementById("nav_content"));