import { connect } from 'react-redux';
import ColorPicker from '../ColorPicker';
import { State } from '../../store/reducers/main';
import Pixel from '../../types/Pixel';
import { setFillColor } from '../../store/actions/SetPixelColor';

const FillColor = connect(
    ({ pixelColor }: State) => ({
        label: 'Fill',
        selected: pixelColor[Pixel.Fill],
        removeColor1: pixelColor[Pixel.Background],
        removeColor2: pixelColor[Pixel.Contour]
    }),
    { onChange: setFillColor }
)(ColorPicker)

export default FillColor;