function SearchOption({Icon, title, selected}) {
    return (
        <div className={`flex items-center  space-x-1 cursor-pointer border-b-4 pb-3 border-transparent hover:border-blue-500 hover:text-blue-500 ${selected && 'border-blue-500 text-blue-500'}`}>
            <Icon className="h-4" />
            <p className="hidden sm:inline-flex">{title}</p>
            
        </div>
    )
}

export default SearchOption
