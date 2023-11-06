type StatusItemProps = {
    status:string,
}

export default function StatusItem({status}: StatusItemProps) {
    return (
        <div className="flex justify-end">
            <p className={`p-1 bg-${status} rounded-2xl text-main-text`}>{status.charAt(0).toUpperCase()+status.slice(1)}</p>
        </div>
    )
}