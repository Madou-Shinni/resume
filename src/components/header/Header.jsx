import DynamicIcon from "@/components/Icon.jsx";

const Header = ({icon,title,children}) => {

    return <div className={'flex items-center gap-4'}>
        <DynamicIcon name={icon?.name} fill={icon?.color}/>
        <h2 className="text-lg mb-2 mt-4">{title}</h2>
        {children}
    </div>
}

export default Header
