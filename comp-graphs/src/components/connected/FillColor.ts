import { connect } from 'react-redux';
import ColorPicker from '../ColorPicker';
import { State } from '../../store/reducers/main';
import PixelKind from '../../types/PixelKind';
import { setFillColor } from '../../store/actions/SetPixelColor';

const FillColor = connect(
    ({ rasterConfig: { pixelColor } }: State) => ({
        label: 'Fill',
        selected: pixelColor[PixelKind.Fill],
        removeColor1: pixelColor[PixelKind.Background],
        removeColor2: pixelColor[PixelKind.Contour]
    }),
    { onChange: setFillColor }
)(ColorPicker)

export default FillColor;