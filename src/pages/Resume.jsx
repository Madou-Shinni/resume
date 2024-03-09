import Header from "./cpn/header/Header.jsx";
import Experience from "@/pages/cpn/experience/Experience.jsx";
import Skill from "@/pages/cpn/skill/Skill.jsx";

const Resume = () => {
    return <div className="min-h-screen p-6">
        <div className="max-w-5xl mx-auto min-w-4xl bg-white p-8">
            <Header />

            <Experience/>

            <Skill/>
        </div>
    </div>
}

export default Resume
