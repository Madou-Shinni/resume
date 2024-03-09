import HeaderInfo from "./HeaderInfo.jsx";
import HeaderInfoWrapper from "./HeaderInfoWrapper.jsx";
import DynamicIcon from "../../../components/Icon.jsx";

const Header = () => {
    return <div className={'min-w-[380px]'}>
        <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">徐炜</h1>
        </div>

        <hr className="my-4"/>

        <HeaderInfoWrapper>
            <HeaderInfo>
                <DynamicIcon name={'EnvelopeIcon'} />
                <a className="text-sm cursor-pointer">ohcanikissu@gmail.com</a>
            </HeaderInfo>

            <HeaderInfo>
                <DynamicIcon name={'LinkIcon'} />
                <a href={'http://resume.ricardoli.one'} className="text-sm cursor-pointer">resume.ricardoli.one</a>
            </HeaderInfo>

            <HeaderInfo>
                <DynamicIcon name={'PhoneIcon'} />
                <a className="text-sm cursor-pointer">xxxxxxxx</a>
            </HeaderInfo>

            <HeaderInfo>
                <DynamicIcon name={'GithubIcon'} fill={'#000'} />
                <a href={'https://github.com/Madou-Shinni'} className="text-sm cursor-pointer">Madou-Shinni</a>
            </HeaderInfo>

            <HeaderInfo>
                <DynamicIcon name={'WechatIcon'} fill={'#000'} />
                <a className="text-sm cursor-pointer">xxxxxxxx</a>
            </HeaderInfo>
        </HeaderInfoWrapper>
    </div>
}

export default Header
