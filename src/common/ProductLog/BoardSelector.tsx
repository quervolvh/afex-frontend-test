import { ItemTypeToggle } from "components";
import React, { useState } from "react";

export const BoardSelector: React.FC = ({ }) => {

    const [activeTab, setActiveTab] = useState("board");

    const products = [

        {

            label: "All",
            onClick: () => null,
            active: true

        },

        {

            label: "SMAZ",
            onClick: () => null,

        },

        {

            label: "SBBS",
            onClick: () => null,
        },

        {

            label: "SPRL",
            onClick: () => null,

        },

        {

            label: "SGNG",
            onClick: () => null,

        },

        {

            label: "FETC",
            onClick: () => null,

        },

        {

            label: "SCOC",
            onClick: () => null,

        },

    ]

    return (

        <div className="landing-board">

            <ItemTypeToggle items={[

                {

                    label: "Board",
                    onClick: () => setActiveTab('board'),
                    active: activeTab === "board"

                },

                {

                    label: "X-Traded",
                    onClick: () => setActiveTab('x-traded'),
                    active: activeTab === "x-traded"

                },

                {

                    label: "OTC",
                    onClick: () => setActiveTab('otc'),
                    active: activeTab === "otc"

                },

                {

                    label: "FI",
                    onClick: () => setActiveTab('fi'),
                    active: activeTab === "fi"

                },

                {

                    label: "Derivatives",
                    onClick: () => setActiveTab('derivatives'),
                    active: activeTab === "derivatives"

                },

            ]} />

            <ItemTypeToggle items={products} />

        </div>

    )

}
