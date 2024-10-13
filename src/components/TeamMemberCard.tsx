export default function TeamMemberCard({ name, info }: { name: string; info: string }) {
    return (
        <div className='p-5 bg-white rounded shadow'>
            <p className='mb-3 text-2xl font-semibold text-black/80 text-center'>{name}</p>
            <p>{info}</p>
        </div>
    )
}
