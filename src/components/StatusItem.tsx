type StatusItemProps = {
    status:string,
}



export default function StatusItem({status}: StatusItemProps) {

    const changeBg = () => {
        if(status === "urgent") return '#DC2626'
        if (status === "important") return 'rgb(30, 64, 175)'
        if (status === "normal") return 'rgb(22, 163, 74)'
        else return "rgb(202, 138, 4)"
    }

    return (
        <div className="flex justify-end">
            <p className="p-1 rounded-2xl  text-main-text" style={{backgroundColor : changeBg()}}>{status.charAt(0).toUpperCase()+status.slice(1)}</p>
        </div>
    )
}