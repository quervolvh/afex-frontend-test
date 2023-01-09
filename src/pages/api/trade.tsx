import axios from 'axios'
import { authorizedHeader } from 'service/helper';

const link = (item: string): { type: "post" | "get" | "patch", url: string } => {

    switch (item) {
    
        case "retrieve-products":
            return { type: "get", url: "securities/boards"};

        default:
            return { type: "get", url: "securities/boards"};
    }
}

async function handler(req: { [key: string]: any }, res: { [key: string]: any }) {

    try {

        const { authType, ...rest } = req.body;

        const { type, url } = link(authType);

        const completeUrl = `${process.env.BASE_URL}/${url}`;

        const { data } = await axios.call(
            type,
            completeUrl,
            { ...authorizedHeader(req?.headers?.authorization), data: rest, method: type, timeout: 120000 }
        );

        res.status(200).json(data);

    } catch (error: any) {

        const { data } = error.response || {};
        const err = data || {};

        return res.status(500).json(err);
    }
};

export default handler;
