import React, { FC } from 'react';

import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './style.sass';

const CustomReactSVG: FC = () => {
    const {
        logoHeader
    } = useStaticQuery(graphql`
        query  {
          logoHeader: file(relativePath: { eq: "logo-header.svg" }) {
              publicURL
              name
          }
        }`);
    return (

        <ReactSVG
            afterInjection={(svg) => {
                console.log(svg)
            }}
            beforeInjection={(svg) => {
                svg.classList.add('svg-class-name')
                svg.setAttribute('style', 'width: 200px')
            }}
            desc="Description"
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            httpRequestWithCredentials={true}
            loading={() => <span>Loading</span>}
            onClick={() => {
                console.log('wrapper onClick')
            }}
            onError={(error) => {
                console.error(error)
            }}
            renumerateIRIElements={false}
            title="Title"
            useRequestCache={false}
            wrapper="span"
            className="page-svg"
            src={logoHeader.publicURL} />

    );
}


export default CustomReactSVG;

