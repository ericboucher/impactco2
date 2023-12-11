import React from 'react'
import { WhatsappShareButton } from 'react-share'
import styled from 'styled-components'

const Svg = styled.svg``

export default function Whatsapp2(props) {
  return (
    <WhatsappShareButton url={props.url} title={props.title}>
      <Svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g id='wasapp'>
            <rect id='Rectangle' fill='#1B9B93' x='0' y='0' width='60' height='60' rx='8' />
            <g id='whastappicon' transform='translate(15.000000, 15.000000)' fill='#FFFFFF' fillRule='nonzero'>
              <path
                d='M25.6171463,4.36133634 C22.826342,1.55735487 19.021594,-0.0138969306 15.0565008,9.26223222e-05 C6.83136459,9.26223222e-05 0.128076314,6.67133301 0.120542413,14.8613212 C0.120542413,17.4844424 0.80989434,20.0363138 2.11137571,22.2956855 L0,30.0000494 L7.91812978,27.9338024 C10.1086199,29.1205144 12.5626492,29.7425404 15.0565008,29.7431748 L15.0640347,29.7431748 C23.2910544,29.7431748 29.9924592,23.0719344 29.9999931,14.8744462 C30.0037956,10.9284834 28.425472,7.14419385 25.6152629,4.36133634 L25.6171463,4.36133634 Z M15.0565008,27.2269284 C12.832111,27.2276721 10.6486077,26.6317898 8.73555802,25.5019309 L8.28352397,25.2319313 L3.5861368,26.4581795 L4.84053129,21.8963111 L4.54670916,21.4256868 C3.30325194,19.4575494 2.64561788,17.1788681 2.65004962,14.8538212 C2.65004962,8.05508102 8.21948582,2.50883901 15.0640347,2.50883901 C18.357502,2.50295722 21.5170277,3.80630104 23.8410292,6.12945879 C26.1731503,8.44357116 27.4804014,11.5889912 27.4723694,14.8669462 C27.4648355,21.6900614 21.8953993,27.2269284 15.0565008,27.2269284 Z M21.8652637,17.9756917 C21.4942191,17.790067 19.6615977,16.8919433 19.3169218,16.7644435 C18.9741293,16.6425686 18.7236271,16.5788187 18.4787753,16.9500682 C18.2282731,17.3194427 17.5125525,18.1613165 17.2978363,18.4031911 C17.0831202,18.6525657 16.8608701,18.6806907 16.487942,18.496941 C16.1168974,18.3094412 14.9133567,17.9194418 13.4894495,16.6500686 C12.3781991,15.6656951 11.6342264,14.4469468 11.4119763,14.0775723 C11.1972601,13.7063229 11.3912581,13.5075732 11.5777221,13.3219484 C11.7415845,13.1569487 11.9487667,12.8869491 12.1352308,12.6731994 C12.3235783,12.4594497 12.385733,12.3019499 12.5081589,12.0544503 C12.6305848,11.8032006 12.572197,11.5894509 12.4799067,11.4038262 C12.385733,11.2182015 11.6417603,9.3863291 11.3272199,8.64758016 C11.0258639,7.91820621 10.7188574,8.01945607 10.4890734,8.01008108 C10.2743573,7.9969561 10.0238551,7.9969561 9.77335286,7.9969561 C9.39092788,8.00641874 9.0298061,8.17427429 8.77699448,8.46008043 C8.43420199,8.8313299 7.47551311,9.7294536 7.47551311,11.561326 C7.47551311,13.3931983 8.81278051,15.1538208 9.00112803,15.4031954 C9.1857086,15.6525701 11.6266925,19.4006897 15.3729247,21.0131873 C16.258158,21.3975618 16.9550438,21.6244365 17.4993682,21.7969362 C18.3940189,22.0819358 19.2020298,22.0388109 19.8461783,21.946936 C20.5618989,21.8381862 22.0517278,21.0469373 22.3662681,20.1788135 C22.6751581,19.3088148 22.6751581,18.5663159 22.5809843,18.4106911 C22.488694,18.2531913 22.2381918,18.1613165 21.8652637,17.9756917 Z'
                id='Shape'
              />
            </g>
          </g>
        </g>
      </Svg>
    </WhatsappShareButton>
  )
}
