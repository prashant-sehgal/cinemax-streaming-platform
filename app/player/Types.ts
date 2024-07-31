export interface State {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volumeLevel: number;
  progress: number;
  isFullscreen: boolean;
}

export interface Action {
  type: string;
  payload?: any;
}
