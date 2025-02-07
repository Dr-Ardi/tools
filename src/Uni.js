import useFavicon from "./UseFavicon";

export default function Uni({content}) {
  return (
    <section>
        {useFavicon("./uni_tools.png")}
        <title>Uni Tools</title>
        {content.map((item, index) => (
          <a href={item.link} target="_blank" className="link" key={item.name + index}>
            <img className="logo" src={item.logo}/>
            <p >{item.name}</p>
          </a>
        ))}
    </section>
  );
}
