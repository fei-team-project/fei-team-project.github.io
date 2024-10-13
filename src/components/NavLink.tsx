import Link from 'next/link'

export default function NavLink({
    href,
    currentPath,
    className,
    target,
    children
}: {
    href: string
    currentPath: string
    className?: string
    children: string
    target?: string
}) {
    return (
        <Link
            href={href}
            target={target}
            className={`text-lg hover:text-fei-blue hover:underline${href === currentPath ? ' text-fei-blue' : ''}${className ? ' ' + className : ''}`}
        >
            {children}
        </Link>
    )
}
