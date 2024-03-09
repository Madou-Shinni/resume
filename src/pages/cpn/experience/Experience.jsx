import Header from "@/components/header/Header.jsx";
import ContentWrapper from "@/pages/cpn/experience/cpn/content/ContentWrapper.jsx";
import Content from "@/pages/cpn/experience/cpn/content/Content.jsx";
import experienceProps from "@/pages/cpn/experience/data.js"

const Experience = () => {


    return <div>
        <Header icon={{name:'ExperienceIcon',color:'#000'}} title={'工作经历'}>
            {/*<DynamicIcon name={'ExperienceIcon'} fill={'#000'} />*/}
            {/*<h2 className="text-lg mb-2 mt-4">工作经历</h2>*/}
        </Header>


        <hr className={'my-4'}/>

        <ContentWrapper>
            {experienceProps.zh.companies.map((item,index)=>(
                <Content key={index} name={item.name} position={item.position} time={item.time} content={item.content} />
            ))}
        </ContentWrapper>
    </div>
}

export default Experience
