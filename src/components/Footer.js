import React from "react";

const Footer = (props) => {

    const {company, email} = props;

    return (
        <div>
            @{company} | Contact us: {email}
        </div>
    )
}

export default Footer;