import { Table } from "components";
import React from "react";
import { useSelector } from "react-redux";
import { storeInterface } from "types";
import { numberFormat } from "utils";
import { DD_MM_YY, HH_MM } from "utils/date";

export const TradeLog: React.FC = ({ }) => {

    const { trade }: storeInterface = useSelector((store: storeInterface) => store);

    const tradeLogs = (trade?.logs?.messages || [])?.map((item) =>

        [

            item.security_code,

            item.board_type,

            item.order_type,

            numberFormat(item.order_price),

            item.units,

            DD_MM_YY(item.created),

            HH_MM(item.created)

        ]

    );

    return (

        <>

            <div className="landing-trade-log-heading">

                <p> TRADE LOG </p>

            </div>

            <div className="landing-trade-log">

                <Table

                    heading={["Security", "Board", "Order Type", "Matched Price", "Quantity", "Date", "Time"]}

                    data={tradeLogs}

                    loader={trade?.logs?.loader}

                />

            </div>

        </>

    )

}
