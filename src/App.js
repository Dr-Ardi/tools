import './App.css';
import content from './content.json';

function App() {
  return (
    <div className='page'>
      <div className='header'>
        <div className="logo">
            <pre>{
`.______          __________  
|   _  \\        /  /       \\ 
|  |_)  |      /  /|  .--.  |
|      /      /  / |  |  |  |
|  |\\  \\----./  /  |  '--'  |
| _| \`._____/__/   |_______/ 
`}
            </pre>
        </div>
      </div>
      <div className='main'>
        {Object.keys(content).map((category) => (
          <section key={category}>
            <p className="title">{category}</p>
            <div className="border">
              {content[category].map((item) => (
                <a key={item.name} className="link" href={item.link} target="_blank">{item.name}</a>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
