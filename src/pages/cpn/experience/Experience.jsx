import Header from "@/components/header/Header.jsx";
import ContentWrapper from "@/pages/cpn/experience/cpn/content/ContentWrapper.jsx";
import Content from "@/pages/cpn/experience/cpn/content/Content.jsx";

const Experience = () => {


    return <div>
        <Header icon={{name:'ExperienceIcon',color:'#000'}} title={'工作经历'}>
            {/*<DynamicIcon name={'ExperienceIcon'} fill={'#000'} />*/}
            {/*<h2 className="text-lg mb-2 mt-4">工作经历</h2>*/}
        </Header>


        <hr className={'my-4'}/>

        <ContentWrapper>
            <Content />
        </ContentWrapper>
    </div>
}

export default Experience
