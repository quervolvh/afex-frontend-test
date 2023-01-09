import React from 'react';
import { CancelledTradesIcon, ClosedTradesIcon, OrderViewIcon, PriceHistoryIcon, ProductViewIcon, ViewFormatter, FormField } from 'components';

export const MainLayoutPageLeft: React.FC = () => {

    const items = [

        {

            title: "Product View",
            icon: ProductViewIcon

        },

        {

            title: "Order Book",
            icon: OrderViewIcon

        },

        {

            title: "Price History",
            icon: PriceHistoryIcon

        },

        {

            title: "Open Orders",
            icon: ProductViewIcon

        },

        {

            title: "Closed Trades",
            icon: ClosedTradesIcon

        },

        {

            title: "Cancelled Trades",
            icon: CancelledTradesIcon

        }

    ];

    return (
        <div className='landing-side-menu'>

            <FormField placeHolder={"Search"} />

            {items.map((item) =>

                <ViewFormatter

                    key={`side-menu-item-${item.title}`}

                    title={item.title}

                    svgLeftIcon={item.icon}


                />

            )

            }

        </div>
    )

}
