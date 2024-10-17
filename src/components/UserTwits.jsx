import axios from "axios";
import PageLayout from "./PageLayout";
import Twit from "./Twit";

import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserTwits() {

    const { nick } = useParams();
    const [twits, setTwits] = useState([]);

    useEffect(()  => {

        axios
            .get(`https://kiwitter-node-77f5acb427c1.herokuapp.com/users/${nick}/twits`)
            .then((resp) => {
                setTwits(resp.data.data);
                /**
                 * resp -> Response objesi
                 * resp.data -> Sunucudan gelen cevabin body'si
                 * resp.data.data -> Sunucudan gelen verinin icindeki data key'i
                 */
            })
            .catch((err) => {

                console.log(err);

                toast.error("Kullanıcı twitleri yüklenemedi.");
            })

    }, [nick]);

    return (
        <PageLayout>
            {twits.length ? twits.map((twit) => <Twit key={twit.id} item={twit} />) : "Yükleniyor..."}
        </PageLayout>
    );
}