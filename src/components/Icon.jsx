// DynamicHeroIcon.tsx
// Simple Dynamic HeroIcons Component for React (typescript / tsx)
// by: Mike Summerfeldt (IT-MikeS - https://github.com/IT-MikeS)

import * as HIcons from '@heroicons/react/24/outline'
import * as LocalIcons from '../assets/index.js'

const DynamicIcon = ({fill='none',width=20,height=20,className,name}) => {
    const {...icons} = {...HIcons,...LocalIcons}
    const TheIcon = icons[name]
    return (
        <>
            {/* eslint-disable-next-line react/prop-types*/}
            {name && <TheIcon className={`${className}`} color={fill} fill={fill} width={width} height={height}/>}
        </>
    )
}

export default DynamicIcon
