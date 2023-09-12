import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props) => (
  <ContentLoader 
		className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="269" rx="10" ry="10" width="280" height="23" /> 
    <circle cx="128" cy="128" r="128" /> 
    <rect x="0" y="302" rx="9" ry="9" width="280" height="88" /> 
    <rect x="5" y="406" rx="10" ry="10" width="95" height="30" /> 
    <rect x="44" y="420" rx="0" ry="0" width="1" height="0" /> 
    <rect x="125" y="399" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default PizzaSkeleton

