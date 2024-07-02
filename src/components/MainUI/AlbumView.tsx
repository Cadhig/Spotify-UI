import PageSwitchButtons from "../Buttons/PageSwitchButtons"
export default function AlbumView() {
    return (
        <div className="size-full bg-zinc-900 rounded-md flex flex-col gap-4 overflow-auto p-4">
            <PageSwitchButtons />
        </div>
    )
}