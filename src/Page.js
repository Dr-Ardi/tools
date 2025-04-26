export default function Page({content}) {
    return (
      <section>
          {content.map((item, index) => (
            <a href={item.link} target="_blank" className="link" key={item.name + index}>
              <img className="logo" src={item.logo}/>
              <p >{item.name}</p>
            </a>
          ))}
      </section>
    );
}