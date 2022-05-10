import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { featuredPortfolio, webPortfolio, mobilePortfolio, gamePortfolio, othersPortfolio} from "../../data";
import { GitHub } from "@material-ui/icons";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "game",
      title: "Game Dev",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "others",
      title: "Others",
    },
  ];


  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "game":
        setData(gamePortfolio);
        break;
      case "others":
        setData(othersPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
          <div className="item">
            <img 
              src={d.img}
              alt="" 
            />
            <a href={d.link}><GitHub className="icon"/></a>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
