export default function Twit({ data }) {

    return <div className="flex flex-row w-full">
        <span className="font-bold">{data.nickname}</span>&nbsp;-&nbsp;{data.content}
    </div>;
}