// 单位名称 职位定位 在职时间
const Header = ({name,position,time}) => {
    return <div>
        {/*<a className="text-[#0366d6] font-semibold text-2xl">川核科技</a>*/}
        {/*<span className="ml-2 text-lg italic">Software Engineer</span>*/}
        {/*<span className="ml-2 text-md float-right">2023-11 ~ </span>*/}

        <a className="text-[#0366d6] font-semibold text-2xl">{name}</a>
        <span className="ml-2 text-lg italic">{position}</span>
        <span className="ml-2 text-md float-right">{time}</span>
    </div>
}

export default Header
