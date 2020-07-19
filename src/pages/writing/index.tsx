import React from "react"
import "./writingSplash.scss"
import { ThumbNailContainer, ThumbNailContainerProps, thumbNailProps } from '../../components/thumbNailGallery'

const fillerData: Array<thumbNailProps> = [
  {
    img: "",
    url: "",
    title: "hi from map",
    description: "lorem ipsum dolor sit amet",
    tags: [],
  },
  {
    img: "",
    url: "",
    title: "hi from map2",
    description: "lorem ipsum dolor sit amet",
    tags: [],
  },
  {
    img: "",
    url: "",
    title: "hi from map3",
    description: "lorem ipsum dolor sit amet",
    tags: [],
  },
]

const WritingSplash: React.FC = () => {
  return (
    <div className="writingSplash-wrapper">
      {/* <Sidebar /> */}
      <ThumbNailContainer
        ThumbNailComponent={<WritingThumbNail title={""} img={""} />}
        thumbNailData={fillerData}
      />
    </div>
  )
}

const WritingThumbNail: React.FC<thumbNailProps> = ({
  img,
  title,
  description,
  tags,
}) => {
  return <div className="writingSplash-thumbNail">{title}</div>
}

export default WritingSplash
