import React from 'react'
import Slider from 'components/base/Slider'
import useRulesContextNumerique from 'components/numerique/RulesProviderNumerique'
import {
  SliderWrapper,
  SliderWrapperLabel,
  SliderWrapperSlider,
  SliderWrapperValue,
} from 'components/numerique/misc/SliderWrapper'

export default function ParticipantInput(props) {
  const { engine, setSituation } = useRulesContextNumerique()

  return props.name === 'visio' ? (
    <SliderWrapper>
      <SliderWrapperLabel>Nombre de participants</SliderWrapperLabel>
      <SliderWrapperSlider>
        <Slider
          value={engine.evaluate(`${props.name} . emplacements`).nodeValue}
          min={2}
          max={20}
          onChange={(value) =>
            setSituation({
              [`${props.name} . emplacements`]: value,
            })
          }
        />
        <SliderWrapperValue>{engine.evaluate(`${props.name} . emplacements`).nodeValue}</SliderWrapperValue>
      </SliderWrapperSlider>
    </SliderWrapper>
  ) : null
}
