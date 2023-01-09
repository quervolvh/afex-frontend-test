import { Table, Button } from "components";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { tradeActions } from "redux/actions/TradeActions";
import { storeInterface } from "types";

export const ProductLog: React.FC = ({ }) => {

    const dispatch = useDispatch();

    const { trade , auth }: storeInterface = useSelector((store: storeInterface) => store);

    const products = (sell: boolean) => {

        return (trade?.products?.items || [])?.map((item) =>

            [

                `${item.name} (${item.code})`,

                item.volume_per_unit,

                item.best_buy,

                () => <Button label={sell ? "Sell" : "Buy"} />

            ]

        );

    }

    useEffect(() => {

        dispatch(tradeActions("retrieve-products"));

        // eslint-disable-next-line
    }, [auth?.token]);

    return (

        <div className="landing-products">

            <div className="landing-products-left">

                <Table

                    heading={["Products", "Quantity", "Bid Price", ""]}

                    data={products(false)}

                    loader={trade?.products?.loader}

                />


            </div>

            <div className="landing-products-right">

                <Table

                    heading={["Products", "Quantity", "Bid Price", ""]}

                    data={products(true)}

                    loader={trade?.products?.loader}

                />


            </div>

        </div>

    )

}
