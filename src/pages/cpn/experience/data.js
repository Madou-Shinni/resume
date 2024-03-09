const props = {
    zh: {
        title: '工作经历',
        companies: [
            {
                name: '川核科技',
                time: '2023.11 ~ ',
                position: 'Software Engineer',
                content: [
                    {
                    name: 'gin-vue-admin & bing-go',
                    content: `<p>gin-vue-admin项目基础设施建设，wechat开发架构。核心：wechat tools and jobs 和
                gin-vue-admin字典与表映射，代码生成自动生成菜单关联权限，极大地提升了前期开发效率</p>
            <p>bing-go项目采用go-kratos框架，使用gengine灵活配置各种活动，抽离奖励下放功能提高复用率，使用redsync解决并发安全问题，使用singleflight减少并发请求对资源的重复计算</p>`,
                    expand: `
                    <div class="text-lg font-semibold leading-10">团队建设</div>
                    <ul class='list-disc text-lg font-normal'>
                        <li>推动并完善gin-vue-admin的扩展和应用</li>
                        <li>参与技术分享和培训</li>
                    </ul>`
                    },
                    {
                        name: 'wechat-plug',
                        content: `<p>受邀在原有的基础上进行插件化升级，采用gin-vue-admin插件市场的方式打包使用插件，使用页面配置的方式动态管理微信配置，配置方式更灵活更简易，在插件市场推出wechat-plug</p>`,
                        expand: ``
                    },
                ],
            },
            {
                name: '智加科技',
                time: '2022.03 ~ 2023.10',
                position: 'Software Engineer',
                content: [
                    {
                    name: '宁波市飞盘小程序',
                    content: `<p>采用go-zero框架，推出微信sdk，使用redsync解决并发问题，引入dtm解决分布式一致性问题，使用redis实现邀请码、排行榜</p>`,
                    expand: `
                    <div class="text-lg font-semibold leading-10">团队建设</h1>
                    <ul class='list-disc text-lg font-normal'>
                        <li>参与技术分享和培训</li>
                    </ul>`
                    }
                ],
            },
            {
                name: '大森魔岩',
                time: '2021.06 ~ 2021.12',
                position: '后端实习生',
                content: [{
                    name: '地震预警系统',
                    content: `<p>参与地震预警系统的研发和维护工作</p>`,
                    expand: ``
                }],
            },
        ],
    },
}

export default props
