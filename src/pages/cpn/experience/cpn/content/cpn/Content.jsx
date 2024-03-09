import parse from 'html-react-parser'

// 项目名 职位 内容 补充说明
const Content = ({name,content,expand}) => {
    return <div className={'px-10 py-5'}>
        {/*<div className={'text-xl font-semibold leading-10'}>gin-vue-admin & bing-go</div>*/}
        {/*<div className={'text-lg font-thin leading-8'}>*/}
        {/*    <p>gin-vue-admin项目基础设施建设，wechat开发架构。核心：wechat tools and jobs 和*/}
        {/*        gin-vue-admin字典与表映射，代码生成自动生成菜单关联权限，极大地提升了前期开发效率</p>*/}
        {/*    <p>bing-go项目采用go-kratos框架，使用gengine灵活配置各种活动，抽离奖励下放功能提高复用率，使用redsync解决并发安全问题，使用singleflight减少并发请求对资源的重复计算</p>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <div className={'text-xl font-semibold leading-10'}>团队建设</div>*/}
        {/*    <ul className={'list-disc text-lg font-thin'}>*/}
        {/*        <li>推动并完善gin-vue-admin的扩展和应用</li>*/}
        {/*        <li>参与技术分享和培训</li>*/}
        {/*    </ul>*/}
        {/*</div>*/}

        <div className={'text-xl font-semibold leading-10'}>{name}</div>
        <div className={'text-lg font-thin leading-8'}>
            {parse(content)}
        </div>
        <div>
            {parse(expand)}
        </div>
    </div>
}

export default Content
