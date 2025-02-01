import useFavicon from "./UseFavicon";

export default function Design({content}) {
  return (
    <section>
        {useFavicon("./design_tools.png")}
        <title>Design Tools</title>
        {content.map((item, index) => (
          <a href={item.link} target="_blank" className="link" key={item.name + index}>
            <img className="logo" src={item.logo}/>
            <p >{item.name}</p>
          </a>
        ))}
    </section>
  );
}
