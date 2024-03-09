import Header from "@/components/header/Header.jsx";
import Content from "@/pages/cpn/skill/cpn/Content.jsx";
import dataProps from '@/pages/cpn/skill/data.js'

const Skill = () => {
    return <div>
        <Header icon={{name: 'StarIcon', color: 'none'}} title={'技能'}/>
        <hr className={'my-4'}/>
        <Content categories={dataProps.zh.categories} contents={dataProps.zh.contents} />
    </div>
}

export default Skill
