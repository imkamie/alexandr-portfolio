function MaxIcon({ size, fill }: { size: number, fill: string }) {
    return (
        <>
            <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="18" height="18" fill={fill} stroke="black" strokeWidth="2" />
                <path d="M14.875 5.25C15.4844 5.25 16 5.76562 16 6.375V14.625C16 15.2578 15.4844 15.75 14.875 15.75H5.125C4.49219 15.75 4 15.2578 4 14.625V6.375C4 5.76562 4.49219 5.25 5.125 5.25H14.875ZM14.875 14.4844V9H5.125V14.4844C5.125 14.5781 5.17188 14.625 5.26562 14.625H14.7344C14.8047 14.625 14.875 14.5781 14.875 14.4844Z" fill="black" />
            </svg>
        </>
    )
}

export default MaxIcon