export default function Page({content, color}) {
    return (
      <section>
          {content.map((item, index) => (
            <a href={item.link} target="_blank" className={`link ${color}`} key={item.name + index}>
              <img className="logo" src={item.logo}/>
              <p >{item.name}</p>
            </a>
          ))}
      </section>
    );
}