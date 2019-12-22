import { connect } from 'react-redux';
import ColorPicker from '../ColorPicker';
import { State } from '../../store/reducers/main';
import Pixel from '../../types/Pixel';
import { setBackgroundColor } from '../../store/actions/SetPixelColor';

const BackgroundColor = connect(
    ({ pixelColor }: State) => ({
        label: 'Background',
        selected: pixelColor[Pixel.Background],
        removeColor1: pixelColor[Pixel.Fill],
        removeColor2: pixelColor[Pixel.Contour]
    }),
    { onChange: setBackgroundColor }
)(ColorPicker)

export default BackgroundColor;