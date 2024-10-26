import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key="google-fonts"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
            rel="stylesheet">
        </link>,
    ]);
};