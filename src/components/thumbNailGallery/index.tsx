import React from 'react';
import './thumbNailGallery.scss';

export interface ThumbNailContainerProps {
  ThumbNailComponent?: React.ReactElement
  thumbNailData?: Array<thumbNailProps>
}

export interface thumbNailProps {
  img: string
  title?: string
  url?: string
  description?: string
  tags?: Array<string>
}

export const ThumbNailContainer: React.FC<ThumbNailContainerProps> = ({
  ThumbNailComponent,
  thumbNailData,
}) => {
  return (
    <div className="thumbNailContainer">
      {thumbNailData.map(tNail =>
        React.cloneElement(ThumbNailComponent, { key: tNail.title, ...tNail })
      )}
    </div>
  )
}