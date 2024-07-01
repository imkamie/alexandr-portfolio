function MinIcon({ size, fill }: { size: number, fill: string }) {
    return (
        <>
            <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="18" height="18" fill={fill} stroke="black" strokeWidth="2" />
                <path d="M14.875 12.75C15.4844 12.75 16 13.2656 16 13.875V14.625C16 15.2578 15.4844 15.75 14.875 15.75H5.125C4.49219 15.75 4 15.2578 4 14.625V13.875C4 13.2656 4.49219 12.75 5.125 12.75H14.875Z" fill="black" />
            </svg>
        </>
    )
}

export default MinIcon