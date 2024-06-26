function LinkedinIcon({ size, fill }: { size: number, fill: string }) {
    return (
        <>
            <svg width={size} height={size} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39 0C40.5938 0 42 1.40625 42 3.09375V39C42 40.6875 40.5938 42 39 42H2.90625C1.3125 42 0 40.6875 0 39V3.09375C0 1.40625 1.3125 0 2.90625 0H39ZM12.6562 36V16.0312H6.46875V36H12.6562ZM9.5625 13.2188C11.5312 13.2188 13.125 11.625 13.125 9.65625C13.125 7.6875 11.5312 6 9.5625 6C7.5 6 5.90625 7.6875 5.90625 9.65625C5.90625 11.625 7.5 13.2188 9.5625 13.2188ZM36 36V25.0312C36 19.6875 34.7812 15.4688 28.5 15.4688C25.5 15.4688 23.4375 17.1562 22.5938 18.75H22.5V16.0312H16.5938V36H22.7812V26.1562C22.7812 23.5312 23.25 21 26.5312 21C29.7188 21 29.7188 24 29.7188 26.25V36H36Z" fill={fill} />
            </svg>
        </>
    )
}

export default LinkedinIcon