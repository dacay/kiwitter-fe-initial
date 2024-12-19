import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import PageLayout from "./PageLayout";
import Twit from "./Twit";

export default function MainPage() {

    const { data } = useQuery({
        queryKey: ["mainPageTwits"],
        queryFn: () => axios.get('https://kiwitter-node-77f5acb427c1.herokuapp.com/twits'),
    });

    let content;

    if (data) {
        content = <div>
            {data.data.data.map(item => <Twit key={item.id} data={item} />)}
        </div>;
    } else
        content = <span>Yükleniyor...</span>;

    return <PageLayout>{content}</PageLayout>;
}