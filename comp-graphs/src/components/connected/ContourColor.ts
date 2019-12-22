import { connect } from 'react-redux';
import ColorPicker from '../ColorPicker';
import { State } from '../../store/reducers/main';
import Pixel from '../../types/Pixel';
import { setContourColor } from '../../store/actions/SetPixelColor';

const ContourColor = connect(
    ({ pixelColor }: State) => ({
        label: 'Contour',
        selected: pixelColor[Pixel.Contour],
        removeColor1: pixelColor[Pixel.Fill],
        removeColor2: pixelColor[Pixel.Background]
    }),
    { onChange: setContourColor }
)(ColorPicker)

export default ContourColor;