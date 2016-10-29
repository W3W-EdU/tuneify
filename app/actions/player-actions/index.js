import * as types from '../../constants/ActionTypes.js';
import { incrementCurrentIndex, playCurrentIndex } from '../play-queue';

export function playVideo(videoData) {
  return {
    type: types.PLAY_VIDEO,
    videoData
  }
}

export function trackEnded() {
  return (dispatch, getState) => {
    dispatch(incrementCurrentIndex());
    dispatch(playCurrentIndex());
  }
}
