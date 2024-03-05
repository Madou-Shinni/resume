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
                <a className="text-sm">ohcanikissu@gmail.com</a>
            </HeaderInfo>

            <HeaderInfo>
                <DynamicIcon name={'LinkIcon'} />
                <a className="text-sm">ohcanikissu@gmail.com</a>
            </HeaderInfo>

            <HeaderInfo>
                <DynamicIcon name={'PhoneIcon'} />
                <a className="text-sm">ohcanikissu@gmail.com</a>
            </HeaderInfo>

            <HeaderInfo>
                <DynamicIcon name={'GithubIcon'} fill={'#000'} />
                <a className="text-sm">ohcanikissu@gmail.com</a>
            </HeaderInfo>

            <HeaderInfo>
                <DynamicIcon name={'WechatIcon'} fill={'#000'} />
                <a className="text-sm">ohcanikissu@gmail.com</a>
            </HeaderInfo>
        </HeaderInfoWrapper>
    </div>
}

export default Header
