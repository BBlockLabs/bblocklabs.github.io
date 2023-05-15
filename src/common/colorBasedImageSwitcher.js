import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import useBaseUrl from "@docusaurus/useBaseUrl";


const ImageSwitcher = ({lightImageSrc, darkImageSrc, alt}) => {
  const isDarkTheme = useColorMode().colorMode === "dark";

  let src = useBaseUrl(isDarkTheme ? darkImageSrc : lightImageSrc);

  return (
      <img src={src} alt={alt}/>
  )
}

export default ImageSwitcher;
