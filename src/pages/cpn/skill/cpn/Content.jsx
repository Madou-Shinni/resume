const Content = ({categories,contents}) => {
    return <div>
        <div className="flex flex-wrap">
            {categories.map((item,i)=> (
                <div key={i} className="bg-gray-200 rounded-lg px-2 py-1 mr-2 mb-2">{item}</div>
            ))}
        </div>
        <ul className={'list-disc text-lg leading-10'}>
            {contents.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
}

export default Content
