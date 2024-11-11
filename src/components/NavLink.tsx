import Link from 'next/link'

export default function NavLink({
    href,
    currentPath,
    className,
    onClick,
    target,
    children
}: {
    href: string
    currentPath: string
    className?: string
    onClick?: () => void
    target?: string
    children: string
}) {
    return (
        <Link
            href={href}
            target={target}
            onClick={onClick}
            className={`text-lg hover:text-fei-blue hover:underline${href === currentPath ? ' text-fei-blue' : ''}${className ? ' ' + className : ''}`}
        >
            {children}
        </Link>
    )
}
