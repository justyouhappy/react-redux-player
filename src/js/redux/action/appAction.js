import makeActionCreator from '../../common/actionCreator';
export const setSong = makeActionCreator('changSone', 'param');
export const setSrc = makeActionCreator('changeSrc', 'param');
export const setNowTime = makeActionCreator('changeNowTime', 'param');
export const setEndTime = makeActionCreator('setEndTime', 'param');