import Link from 'next/link'

export default function NavLink({
    href,
    currentPath,
    className,
    children
}: {
    href: string
    currentPath: string
    className?: string
    children: string
}) {
    return (
        <Link
            href={href}
            className={
                'text-lg hover:text-fei-blue hover:underline ' + `${href === currentPath ? 'text-fei-blue' : ''} ` + className
            }
        >
            {children}
        </Link>
    )
}
