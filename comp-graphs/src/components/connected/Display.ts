import { connect } from 'react-redux';
import RasterDisplay from '../RasterDisplay';
import { State } from '../../store/reducers/main';
import pixelMap from '../../store/selectors/pixelMap';

const Display = connect(
    (state: State) => ({
        raster: state.rasterConfig.rasterDisplay.display,
        pixelMap: pixelMap(state)
    }),
)(RasterDisplay);

export default Display;