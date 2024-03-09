import Header from "@/pages/cpn/experience/cpn/content/cpn/Header.jsx";
import CpnContent from "@/pages/cpn/experience/cpn/content/cpn/Content.jsx";

const Content = ({name, time, position, content}) => {
    return <div>
        <Header name={name} position={position} time={time} />
        {content.map((item,index)=>(
            <CpnContent key={index} content={item.content} name={item.name} expand={item.expand} />
        ))}
    </div>
}

export default Content
