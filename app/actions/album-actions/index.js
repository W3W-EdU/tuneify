import * as types from '../../constants/ActionTypes.js'
import { fetchLastFmData, lastFmApiRequest } from '../lastfm-actions'
import { resetPlayQueueIndex, playCurrentIndex } from '../play-queue';

export function getAlbumPageData(album, artist) {
  const actions =  
    [
      types.LAST_FM_API_REQUEST, 
      types.RECEIVE_ALBUM_PAGE_DATA,
      types.ALBUM_PAGE_DATA_ERROR
    ];

  const params = { 
    method: 'album.getinfo',
    album,
    artist,
  };
  
  return fetchLastFmData(actions, params);
}

export function clearAlbumPageData() {
  return {
    type: types.CLEAR_ALBUM_PAGE_DATA,
  }
}

export function clearAlbumPageError() {
  return {
    type: types.CLEAR_ALBUM_PAGE_ERROR,
  }
}

export function appendAlbumToPlayQueue(tracks) {
  return {
    type: types.ADD_TRACKS_TO_PLAY_QUEUE,
    tracks,
  }
}

export function replaceQueueWithTracks(tracks) {
  return {
    type: types.REPLACE_QUEUE_WITH_TRACKS,
    tracks,
  }
}

export function replaceQueueWithAlbumAndPlay(tracks) {
  return (dispatch, getState)  => {
    dispatch(replaceQueueWithTracks(tracks));
    dispatch(resetPlayQueueIndex());

    //dispatch(
    //  trackSelected({
    //    trackName: selectedTrackData.name, 
    //    artist: selectedTrackData.artist,
    //    image: selectedTrackData.image[1]['#text'],
    //  }
    //  )
    //);
    dispatch(playCurrentIndex());
  }
    // if user is selecting a result from the play queue then there 
// 1. rwplace queue with album
// 2. set playQueueCurrentIndex to zero
// 3. play track at 0
}
