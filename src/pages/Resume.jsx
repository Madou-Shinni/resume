import Header from "./cpn/header/Header.jsx";
import Experience from "@/pages/cpn/experience/Experience.jsx";

const Resume = () => {
    return <div className="min-h-screen p-6">
        <div className="max-w-5xl mx-auto min-w-4xl bg-white p-8">
            <Header />

            <Experience/>

            <div>
                <h2 className="text-lg font-semibold mb-2 mt-4">技能</h2>
                <div className="flex flex-wrap">
                    <div className="bg-gray-200 rounded-lg px-2 py-1 mr-2 mb-2">React</div>
                    <div className="bg-gray-200 rounded-lg px-2 py-1 mr-2 mb-2">JavaScript</div>
                    <div className="bg-gray-200 rounded-lg px-2 py-1 mr-2 mb-2">HTML</div>
                    <div className="bg-gray-200 rounded-lg px-2 py-1 mr-2 mb-2">CSS</div>
                    <div className="bg-gray-200 rounded-lg px-2 py-1 mr-2 mb-2">Tailwind CSS</div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-2 mt-4">项目经历</h2>
                <div>
                    <h3 className="text-gray-800 font-semibold">项目名称</h3>
                    <p className="text-sm text-gray-600">项目简要描述。</p>
                    <p className="text-sm text-gray-600">使用技术: React, Node.js, Express, MongoDB</p>
                </div>
                <div>
                    <h3 className="text-gray-800 font-semibold mt-2">另一个项目</h3>
                    <p className="text-sm text-gray-600">另一个项目简要描述。</p>
                    <p className="text-sm text-gray-600">使用技术: HTML, CSS, JavaScript</p>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-2 mt-4">联系方式</h2>
                <div>
                    <p className="text-gray-800">邮箱: example@example.com</p>
                    <p className="text-gray-800">电话: (123) 456-7890</p>
                    <p className="text-gray-800">LinkedIn: linkedin.com/in/example</p>
                </div>
            </div>
        </div>
    </div>
}

export default Resume
