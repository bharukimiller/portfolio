import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from './links/button-link';
import ScrollIndicator from './scroll-indicator';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';
import YouTube from 'react-youtube';

import "../styles/styles.css"

const opts = {
  height: '340',
  width: '680',
  top: '50%',
  left: '50%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const StyledHeroSection = styled(StyledSection)`
  min-height: calc(100vh - 2 * var(--header-height));
  position: relative;
  margin: auto;
  width: 50%;
  padding: 10px;

  ${mq.gt.sm} {
    min-height: calc(100vh - var(--header-height));
  }
`;
const StyledIntroduction = styled.div`
  color: var(--primary-color);
  font-weight: normal;
`;
const StyledAuthor = styled.h1`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledTagline = styled.h2`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  color: var(--primary-color);
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledDescription = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  max-width: 500px;
`;

const Hero = ({ data }) => {
  const { introduction, author, tagline, description, ctaLink, ctaLabel } = data;

  return (
      <div className='background'>
        <YouTube videoId="-hTVNidxg2s"  />
      </div>
     
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
