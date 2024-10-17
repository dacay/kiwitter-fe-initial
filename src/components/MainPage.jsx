import axios from "axios";
import PageLayout from "./PageLayout";

import { useQuery } from "@tanstack/react-query"; 
import Twit from "./Twit";

export default function MainPage() {

    const { data } = useQuery({
        queryKey: ["mainPageTwits"],
        queryFn: () => axios.get("https://kiwitter-node-77f5acb427c1.herokuapp.com/twits"),
    });

    console.log(data);

    return (
        <PageLayout>
            {data ? data.data.data.map((twit) => <Twit key={twit.id} item={twit} />) : "Yükleniyor..."}
        </PageLayout>
    );
}