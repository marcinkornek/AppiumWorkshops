import * as React from 'react';
import {catQualities} from '../../utils/constants';
import {BreedType} from '../../utils/types';
import QualityItem from '../QualityItem/QualityItem';

type Props = {
  breed: BreedType;
};

const RatingList: React.FC<Props> = ({breed}) => {
  return catQualities.map(quality => (
    <QualityItem
      title={quality.replace('_', ' ')}
      number={breed[quality.toLowerCase()]}
    />
  ));
};

export default RatingList;
